import nodemailer from "nodemailer";

// --- Nodemailer Transporter Setup ---
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASS,
  },
});

export const sendContactEmail = async (email, name, phone, message) => {
  if (!email || !name) {
    throw new Error("Missing recipient email or name for confirmation email.");
  }


  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.CONTACT_RECEIVER,
    subject: "📩 New Contact Form Submission",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `Failed to send confirmation email to ${email}:`,
        error.message,
      );
      throw new Error(`Email sending failed for ${email}: ${error.message}`);
    }
    console.error(
      `An unknown error occurred while sending email to ${email}`,
    );
    throw new Error(`Email sending failed for ${email}: Unknown error`);
  }
};
