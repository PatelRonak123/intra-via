const nodemailer = require("nodemailer");
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, status, name } = req.body;

  if (!email || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Interview Result Notification`,
    
      // html: `Dear <b>${name}</b>,<br><br>

      // We hope this email finds you well. We appreciate the time and effort you invested in the interview process with us.<br><br>
      
      // After careful evaluation, we would like to inform you that your interview result is as follows:<br>
      // <span style="font-weight: bold; color: green;">
      //   ${status === "succeeded" ? 
      //   "<u>You have been shortlisted</u>. We will reach out with further details regarding the next steps." : 
      //   "<span style='color: red; font-weight: bold;'>Unfortunately, we will not be moving forward with your application at this time.</span>"}
      // </span><br><br>
      
      // Thank you for your interest in our company, and we wish you all the best in your future endeavors.<br><br>
      
      // Best regards,<br>
      // <b>Team IntraVia</b>`,

      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #f4f4f4; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #007bff; color: white; padding: 15px; text-align: center; border-radius: 10px 10px 0 0; font-size: 22px; font-weight: bold;">
      Interview Result Notification
    </div>
    
    <div style="padding: 20px; background-color: white; border-radius: 0 0 10px 10px;">
      <p style="font-size: 18px; color: #333;">Dear <b>${name}</b>,</p>

      <p style="font-size: 16px; color: #555;">
        We hope this email finds you well. We appreciate the time and effort you invested in the interview process with us.
      </p>

      <div style="text-align: center; margin-top: 10px;">
        <img src="${status === 'succeeded' 
          ? 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjUxb2liMWx0MDRpbmw2bnNkOTlpdG92aWl6YTV6aXh5NjM3bHl1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1C1YLArmJNGFhvD6m3/giphy.gif' 
          : 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJnaGh6OTg4NmF0ZTZya2J0MHk0NjJ2NnM3cTdoYnlmaWs0aWRxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2uh5yKKmZjDFUy2DOM/giphy.gif'}" 
          alt="Interview Result" 
          style="width: 100%; max-width: 300px; border-radius: 10px;">
      </div>

      <div style="padding: 15px; border-radius: 8px; margin-top: 10px; text-align: center; font-size: 16px;
      ${status === "succeeded" ? "background-color: #e6f7e6; color: #2d7f2d; border: 1px solid #2d7f2d;" : "background-color: #fbeaea; color: #d32f2f; border: 1px solid #d32f2f;"}">
        ${status === "succeeded" 
          ? "<b>🎉 Congratulations! You have been shortlisted.</b><br>We will reach out with further details regarding the next steps." 
          : "<b>We appreciate your effort in the interview process. However, we won’t be moving forward with your application at this time.</b>"}
      </div>

      <p style="font-size: 16px; color: #555; margin-top: 15px;">
        Thank you for your interest in our company. We appreciate your effort, and we wish you all the best in your future endeavors.
      </p>

      <div style="margin-top: 20px; text-align: center; font-size: 16px; font-weight: bold; color: #007bff;">
        Best regards,<br>
        <span style="font-size: 18px;">Team IntraVia</span>
      </div>
    </div>
  </div>`
      
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
}