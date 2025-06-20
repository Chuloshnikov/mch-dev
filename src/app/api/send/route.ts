import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: "New message from your portfolio site MCH DEV",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 24px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 24px;">
                <h2 style="margin-top: 0; color: #333;">📨 New Message Received</h2>
                <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                <p style="font-size: 16px; color: #444;">
                <strong>Name:</strong> ${name}
                </p>
                <p style="font-size: 16px; color: #444;">
                <strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a>
                </p>
                <p style="font-size: 16px; color: #444;">
                <strong>Message:</strong><br />
                <span style="white-space: pre-line;">${message}</span>
                </p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
                <p style="font-size: 12px; color: #999;">
                Sent from your portfolio site — <strong>MCH DEV</strong>
                </p>
            </div>
        </div>
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}