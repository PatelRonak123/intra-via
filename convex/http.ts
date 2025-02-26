import { httpRouter, HttpRouter } from "convex/server";
import {httpAction} from "./_generated/server"
const http  = httpRouter()
http.route({
  path:"/clerk-webhook",
  method:"POST",
  handler: httpAction(async (ctz,request)=>{
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("Missing Clearbit webhook secret");
    }
  })
})
