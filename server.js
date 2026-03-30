import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: ["http://localhost:5173", "http://localhost:4173"] }));
app.use(express.json());

// ── POST /api/contact ──────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, message, captchaToken } = req.body;

  // Basic validation
  if (!name || !email || !message || !captchaToken) {
    return res.status(400).json({ error: "All fields and CAPTCHA are required." });
  }

  // 1. Verify reCAPTCHA with Google
  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const params = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: captchaToken,
    });
    const captchaRes = await fetch(`${verifyUrl}?${params}`, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return res.status(400).json({ error: "CAPTCHA verification failed. Please try again." });
    }
  } catch (err) {
    console.error("reCAPTCHA error:", err);
    return res.status(500).json({ error: "Failed to verify CAPTCHA." });
  }

  // 2. Send email via Gmail
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to Vivek (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 12px;">
          <h2 style="margin: 0 0 24px; color: #111; font-size: 22px;">New message from your portfolio</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 14px; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td>
              <td style="padding: 8px 0; font-weight: 600; color: #111;"><a href="mailto:${email}" style="color:#6366f1;">${email}</a></td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #666; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="color: #111; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #aaa; font-size: 12px; margin: 0;">Sent via viveksinghrajawat.dev/contact</p>
        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Vivek Singh Rajawat" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name.split(" ")[0]}!`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 12px;">
          <h2 style="margin: 0 0 16px; color: #111; font-size: 22px;">Hey ${name.split(" ")[0]}, thanks for reaching out!</h2>
          <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
            I've received your message and will get back to you within <strong>24 hours</strong>. 
            If you have anything urgent, feel free to reply directly to this email.
          </p>
          <div style="background: #f3f4f6; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #666; font-size: 13px; margin: 0 0 8px; font-weight: 600;">YOUR MESSAGE</p>
            <p style="color: #333; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 8px;">Talk soon,</p>
          <p style="color: #111; font-size: 15px; font-weight: 600; margin: 0;">Vivek Singh Rajawat</p>
          <p style="color: #aaa; font-size: 13px; margin: 4px 0 0;">Backend Engineer & AI Systems Developer</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Contact API server running on http://localhost:${PORT}`);
});
