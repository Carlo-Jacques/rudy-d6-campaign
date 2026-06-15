import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = (formData.get("name")?.toString() || "").trim() || "N/A";
        const email = (formData.get("email")?.toString() || "").trim() || "N/A";
        const phone = (formData.get("phone")?.toString() || "").trim() || "N/A";
        const story = (formData.get("story")?.toString() || "").trim() || "N/A";
        const attachmentFiles = formData.getAll("attachments") as File[];

        // --- ENV VARS ---
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

        const subjectName = name === "N/A" ? "Unknown" : name;

        const attachments: any[] = [];
        for (const file of attachmentFiles) {
            if (file && file.size > 0) {
                const buffer = Buffer.from(await file.arrayBuffer());
                attachments.push({
                    filename: file.name,
                    content: buffer,
                });
            }
        }

        const mailOptions = {
            from: MAIL_FROM,
            to: MAIL_TO,
            replyTo: MAIL_REPLY_TO,
            subject: `New Veteran Story: ${subjectName}`,
            text: `New Veteran Story Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Story:
${story}
`,
            html: `
        <h2>New Veteran Story Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <br/>
        <p><strong>Story:</strong><br/>${escapeHtml(story)}</p>
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

        const thankYouPath = locale === "en" ? "/veterans/thank-you" : `/${locale}/veterans/thank-you`;
        return NextResponse.redirect(new URL(thankYouPath, req.url), 303);

    } catch (error) {
        console.error("Error sending veteran story email:", error);
        return NextResponse.json({ error: "Failed to send story" }, { status: 500 });
    }
}

function escapeHtml(input: string) {
    return input
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")
        .replaceAll("\n", "<br/>");
}
