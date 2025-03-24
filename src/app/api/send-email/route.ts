

// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const nodemailer = await import("nodemailer"); // Dynamically import nodemailer

//     const { email, status, name } = await req.json();

//     if (!email || !status || !name) {
//       return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // Set in .env.local
//         pass: process.env.EMAIL_PASS, // Set in .env.local
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Interview Status Update",
//       text: `Hello ${name},\n\nYour interview status is: ${status}.\n\nBest Regards,\nRecruitment Team`,
//     };

//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
//   }
// }


const nodemailer = require("nodemailer");
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // const { email, status, name } = await req.json();
    const body = await req.json();
    console.log("Received Request Body:", body); // Log request body for debugging

    const { email, status } = body;
    if (!email || !status ) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Interview Status Update",
      text: `Hello \n\nYour interview status is: ${status}.\n\nBest Regards,\nRecruitment Team`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
