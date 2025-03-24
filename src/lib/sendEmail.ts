import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!); // Load API key from .env

export default async function sendEmail(to: string, status: string) {
  const subject = "Your Interview Status Update";
  const text = `Your interview status has been updated to: ${status}.`;
  const html = `<p>Your interview status has been updated to: <strong>${status}</strong>.</p>`;

  const msg = {
    to,
    from: "your-email@example.com", // Your verified SendGrid email
    subject,
    text,
    html,
  };

  await sgMail.send(msg);
}
