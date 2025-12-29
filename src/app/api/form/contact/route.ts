import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get("name")?.toString() || "N/A";
        const email = formData.get("email")?.toString() || "N/A";
        const phone = formData.get("phone")?.toString() || "Not provided";
        const message = formData.get("message")?.toString() || "N/A";

        // Configure the transporter
        const transporter = nodemailer.createTransport({
            host: "mail.charlottesweb.design",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "rudycampaign@charlottesweb.design",
                pass: "Newway305",
            },
        });

        // Email content
        const mailOptions = {
            from: '"Rudy Campaign Website" <rudycampaign@charlottesweb.design>',
            to: "carlo@charlottesweb.design",
            subject: `New Contact Form Submission: ${name}`,
            text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Redirect to thank you page
        return NextResponse.redirect(new URL("/contact/thank-you", req.url), 303);

    } catch (error) {
        console.error("Error sending contact email:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}

