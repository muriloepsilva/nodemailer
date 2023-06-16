import { createTransport } from "nodemailer";
import CONFIG from "./env.js";

const { email, email_password } = CONFIG;

export async function sendEmail({ content, recipients, subject }) {
  const transporter = createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true para TLS, false para conexões não criptografadas
    auth: {
      user: email, // Seu endereço de email do Hotmail
      pass: email_password, // Sua senha de email do Hotmail
    },
  });

  const mailOptions = {
    from: email,
    to: recipients,
    subject: subject,
    text: content,
  };

  await transporter.sendMail(mailOptions);
}
