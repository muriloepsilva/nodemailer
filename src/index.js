import { sendEmail } from "./infra/nodemailer.js";

async function main() {
  await sendEmail({
    content: `email content`,
    recipients: "recipient(s) email",
    subject: `email subject`,
  });
}
main();
