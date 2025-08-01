import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const config = {
  api: {
    bodyParser: false, // Required for Stripe raw body verification
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Get raw request body for Stripe verification
  const buf = await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", (err) => reject(err));
  });

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle successful checkout
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_email;
    const name = session.metadata?.name || "Friend";
    const stripeId = session.customer || session.id;

    console.log(`✅ Payment received from ${email}`);

    // 1️⃣ Insert into Supabase
    const { error } = await supabase.from("users").insert([
      {
        email,
        name,
        stripe_customer_id: stripeId,
      },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return res.status(500).json({ error: "Supabase insert failed" });
    }

    // 2️⃣ Send professional welcome email
    const htmlEmail = `
    <!DOCTYPE html>
    <html lang="en" style="margin:0;padding:0;">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to ThreadLock</title>
    </head>
    <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f8; color:#2c3e50;">
      <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; overflow:hidden;">
        <tr style="background-color:#2c3e50;">
          <td style="padding:20px; text-align:center;">
            <img src="https://www.threadlock.ai/threadlock-logo.png" alt="ThreadLock Logo" style="height:50px;">
          </td>
        </tr>
        <tr>
          <td style="padding:40px 30px; text-align:center;">
            <h1 style="margin:0 0 20px; font-size:28px; color:#2c3e50;">🎉 Welcome to ThreadLock Early Access</h1>
            <p style="margin:0; font-size:16px; line-height:1.5;">
              Hi <strong>${name}</strong>,<br><br>
              Thank you for joining ThreadLock! You now have <strong>6 months of Pro access</strong> to start building secure, court-ready family law evidence.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px; text-align:center;">
            <a href="https://threadlock.ai/login" 
               style="display:inline-block; padding:15px 30px; background-color:#f39c12; color:#ffffff; font-weight:bold; text-decoration:none; border-radius:5px;">
              Get Started
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 30px; text-align:left;">
            <p style="font-size:16px; margin-bottom:10px;">Your Pro access includes:</p>
            <ul style="font-size:15px; padding-left:20px; margin:0;">
              <li>AI-guided journaling to capture legally relevant details</li>
              <li>Blockchain-secured entries for tamper-proof evidence</li>
              <li>One-click export of court-ready summaries</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td style="padding:20px; text-align:center; font-size:12px; color:#7f8c8d; background-color:#f4f6f8;">
            © 2025 ThreadLock. All Rights Reserved.<br>
            <a href="https://threadlock.ai/privacy" style="color:#f39c12; text-decoration:none;">Privacy Policy</a> | 
            <a href="https://threadlock.ai/terms" style="color:#f39c12; text-decoration:none;">Terms of Service</a>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    try {
      await resend.emails.send({
        from: "ThreadLock <welcome@threadlock.ai>",
        to: [email],
        subject: "Welcome to ThreadLock Early Access 🎉",
        html: htmlEmail,
      });
      console.log(`📧 Welcome email sent to ${email}`);
    } catch (err) {
      console.error("❌ Email sending failed:", err.message);
    }
  }

  res.json({ received: true });
}
