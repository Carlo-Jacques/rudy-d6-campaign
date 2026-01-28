import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const firstName = (formData.get("firstName")?.toString() || "").trim() || "N/A";
        const lastName = (formData.get("lastName")?.toString() || "").trim() || "N/A";
        const email = (formData.get("email")?.toString() || "").trim() || "N/A";
        const phone = (formData.get("phone")?.toString() || "").trim() || "N/A";
        const photo = formData.get("photo") as File | null;

        // --- ENV VARS (do NOT hardcode creds) ---
        const SMTP_HOST = process.env.SMTP_HOST;
        const SMTP_PORT = Number(process.env.SMTP_PORT || "465");
        const SMTP_SECURE = (process.env.SMTP_SECURE || "true").toLowerCase() === "true";
        const SMTP_USER = process.env.SMTP_USER;
        const SMTP_PASS = process.env.SMTP_PASS;

        const MAIL_TO = process.env.MAIL_TO || "info@rudolphtinker.com";
        const MAIL_FROM = process.env.MAIL_FROM || `"Rudy Campaign Website" <${SMTP_USER || "no-reply@rudolphtinker.com"}>`;
        const MAIL_REPLY_TO = process.env.MAIL_REPLY_TO || email;

        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
            console.error("Missing SMTP env vars. Check SMTP_HOST/SMTP_USER/SMTP_PASS.");
            return NextResponse.json({ error: "Server email not configured" }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_SECURE,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        const subjectName = `${firstName} ${lastName}`.trim() || "Unknown";

        const attachments: any[] = [];
        if (photo && photo.size > 0) {
            const buffer = Buffer.from(await photo.arrayBuffer());
            attachments.push({
                filename: photo.name,
                content: buffer,
            });
        }

        const mailOptions = {
            from: MAIL_FROM,
            to: MAIL_TO,
            replyTo: MAIL_REPLY_TO,
            subject: `New Endorsement: ${subjectName}`,
            text: `New Endorsement Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
`,
            html: `
        <h2>New Endorsement Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      `,
            attachments,
        };

        await transporter.sendMail(mailOptions);

        // Redirect to localized thank you page
        const referer = req.headers.get("referer");
        let locale = "en";
        if (referer) {
            const path = new URL(referer).pathname;
            const match = path.match(/^\/(es|ht|ru)(\/|$)/);
            if (match) locale = match[1];
        }

        const thankYouPath = locale === "en" ? "/endorsements/thank-you" : `/${locale}/endorsements/thank-you`;
        return NextResponse.redirect(new URL(thankYouPath, req.url), 303);

    } catch (error) {
        console.error("Error sending endorsement email:", error);
        return NextResponse.json({ error: "Failed to send endorsement" }, { status: 500 });
    }
}

// Minimal HTML escaping to avoid accidental HTML injection in email body
function escapeHtml(input: string) {
    return input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")
        .replaceAll("\n", "<br/>");
}
