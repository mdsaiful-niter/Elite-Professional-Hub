import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, error: "All fields are required." });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    req.log.error("Gmail credentials not configured");
    res.status(500).json({ success: false, error: "Email service not configured." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${gmailUser}>`,
    to: "msislam07@niter.edu.bd",
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f13; color: #f0f0f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1a1a24, #0f0f13); padding: 32px; border-bottom: 2px solid #D4AF37;">
          <h2 style="margin: 0; color: #D4AF37; font-size: 22px;">New Message from Your Portfolio</h2>
        </div>
        <div style="padding: 32px; line-height: 1.7;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="color: #888; padding: 6px 0; width: 100px;">From</td><td style="color: #f0f0f0; font-weight: bold;">${name}</td></tr>
            <tr><td style="color: #888; padding: 6px 0;">Email</td><td><a href="mailto:${email}" style="color: #D4AF37;">${email}</a></td></tr>
            <tr><td style="color: #888; padding: 6px 0;">Subject</td><td style="color: #f0f0f0;">${subject}</td></tr>
          </table>
          <div style="background: #1a1a24; border-left: 3px solid #D4AF37; padding: 20px; border-radius: 8px;">
            <p style="margin: 0; color: #ccc; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: #666; font-size: 13px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    req.log.error({ err }, "Failed to send email");
    res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
  }
});

export default router;
