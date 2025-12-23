import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get("name")?.toString() || "N/A";
        const address = formData.get("address")?.toString() || "N/A";
        const phone = formData.get("phone")?.toString() || "N/A";
        const email = formData.get("email")?.toString() || "N/A";
        const interest = formData.get("interest")?.toString() || "N/A";

        // Checkbox arrays need special handling if multiple selected
        const volunteerActivities = formData.getAll("volunteer_activities[]");
        const activitiesStr = volunteerActivities.length > 0
            ? volunteerActivities.join(", ")
            : "None selected";

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
            subject: `New Volunteer Sign-Up: ${name}`,
            text: `
        New Volunteer Submission
        
        Name: ${name}
        Address: ${address}
        Phone: ${phone}
        Email: ${email}
        
        Interests:
        ${interest}
        
        How they want to help:
        ${activitiesStr}
      `,
            html: `
        <h2>New Volunteer Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Interests:</strong><br/>${interest}</p>
        <p><strong>Volunteer Activities:</strong><br/>${activitiesStr}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Redirect to thank you page
        return NextResponse.redirect(new URL("/volunteer/thank-you", req.url), 303);

    } catch (error) {
        console.error("Error sending email:", error);
        // In a real app we might want to redirect to an error page or show a toast,
        // but for now we'll redirect to thank you or back to form with query param?
        // Failing gracefully usually implies user shouldn't see a raw 500.
        // Let's redirect to thank-you anyway or handle error differently if requested.
        // For now, consistent behavior:
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}
