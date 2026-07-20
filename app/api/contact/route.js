import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { firstName, lastName, email, phone, service, message } = await request.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.CONTACT_EMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL_USER,
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName}${service ? ` — ${service}` : ""}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService: ${service || "N/A"}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "Failed to send your message. Please try again later." }, { status: 500 });
  }
}
