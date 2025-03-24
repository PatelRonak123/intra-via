import { action } from "./_generated/server";
import { v } from "convex/values";

export const sendEmail = action({
  args: {
    to: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const { to, status } = args;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) throw new Error("Missing Resend API Key");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@yourdomain.com",
        to,
        subject: "Interview Status Update",
        text: `Your interview status has been updated to: ${status}.`,
        html: `<p>Your interview status has been updated to: <strong>${status}</strong>.</p>`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }

    return { success: true };
  },
});
