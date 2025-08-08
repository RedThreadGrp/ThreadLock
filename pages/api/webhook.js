// /pages/api/stripe/webhook.js  (Next.js API route)

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const config = {
  api: { bodyParser: false }, // required for Stripe verification
};

// ---- init clients
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL, // use the non-public URL here
  process.env.SUPABASE_SERVICE_ROLE_KEY // service role required for server updates
);
const resend = new Resend(process.env.RESEND_API_KEY);

// ---- tiny helper for raw body
async function getRawBody(req) {
  return await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  let event;
  try {
    const buf = await getRawBody(req);
    const sig = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err?.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // We only care about successful checkouts for the Toolkit.
  if (event.type === "checkout.session.completed") {
    try {
      const session = event.data.object;

      // Fetch full session with line items so we can see exact Price IDs
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["line_items", "customer"],
      });

      const email =
        fullSession.customer_details?.email ||
        fullSession.customer?.email ||
        session.customer_email;

      // Prefer explicit metadata passed at checkout creation
      const userId = fullSession.metadata?.user_id || session.metadata?.user_id;
      const explicitPriceId =
        fullSession.metadata?.price_id || session.metadata?.price_id;

      // Determine purchased Price IDs from line items (fallback)
      const lineItemPriceIds =
        fullSession?.line_items?.data?.map((li) => li.price?.id).filter(Boolean) || [];

      // Founding Member Toolkit price match
      const fmPriceId = process.env.FM_TOOLKIT_PRICE_ID;
      const isToolkitPurchase =
        (!!explicitPriceId && explicitPriceId === fmPriceId) ||
        lineItemPriceIds.includes(fmPriceId);

      if (!isToolkitPurchase) {
        // Not the toolkit purchase → nothing to do here
        console.log("ℹ️ checkout.session.completed for non-toolkit product; ignoring.");
        return res.json({ received: true });
      }

      if (!email && !userId) {
        console.error("❌ Missing identifiers: no email or user_id in session/metadata.");
        return res.status(400).json({ error: "Missing user identifiers" });
      }

      // --- Update Supabase: set founding flag
      // Prefer matching by Supabase user id if you pass it; otherwise match by email.
      const match = userId
        ? { column: "id", value: userId }
        : { column: "email", value: email };

      const { error: updateErr } = await supabase
        .from("users") // <-- change if your table is public.profiles, etc.
        .update({
          is_founding_member: true,
          founding_member_since: new Date().toISOString(),
        })
        .eq(match.column, match.value);

      if (updateErr) {
        console.error("❌ Supabase update error:", updateErr);
        // We still continue to email; Stripe will retry webhook if you throw. We choose to log + continue.
      }

      // --- Create a signed download URL (1 hour expiry)
      const bucket = process.env.TOOLKIT_BUCKET || "toolkit";
      const filePath =
        process.env.TOOLKIT_FILE_PATH || "Founders_Toolkit/Founders_Kit.zip";

      let signedUrl = null;
      const { data: signed, error: signErr } = await supabase.storage
        .from(bucket)
        .createSignedUrl(filePath, 60 * 60); // 3600s

      if (signErr) {
        console.error("⚠️ Signed URL error:", signErr);
      } else {
        signedUrl = signed?.signedUrl || null;
      }

      // --- Send delivery email
      if (email) {
        const htmlEmail = `
        <!DOCTYPE html><html lang="en">
        <body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#0D223F;color:#ffffff;">
          <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#0D223F;">
            <tr><td style="padding:24px;text-align:center;">
              <img src="https://www.threadlock.ai/threadlock-logo.png" alt="ThreadLock" style="height:44px">
            </td></tr>
            <tr><td style="background:#122a4f;padding:28px;">
              <h1 style="margin:0 0 12px;color:#ffffff;">You're a Founding Member ✅</h1>
              <p style="margin:0 0 16px;color:#E6EDF7;">Thanks for backing ThreadLock. Your Court-Ready Toolkit is ready.</p>
              <p style="margin:0 0 20px;color:#E6EDF7;">Perks: lifetime SaaS discount, early beta access, and all toolkit updates.</p>
              ${
                signedUrl
                  ? `<p style="margin:0 0 20px;"><a href="${signedUrl}" style="background:#F58220;color:#000000;text-decoration:none;padding:12px 18px;font-weight:bold;border-radius:4px;display:inline-block;">Download the Toolkit</a></p>`
                  : `<p style="margin:0 0 20px;color:#FFD8A8;">Your download link is available in your account.</p>`
              }
              <p style="margin:0 0 6px;color:#E6EDF7;">Need another link or it expired? Log in here:</p>
              <p style="margin:0 0 20px;"><a href="https://www.threadlock.ai/members" style="color:#F58220;">threadlock.ai/members</a></p>
              <p style="margin:0;color:#9BB1D6;font-size:12px;">If you didn’t intend to purchase, reply to this email.</p>
            </td></tr>
            <tr><td style="padding:18px;text-align:center;color:#9BB1D6;font-size:12px;">
              © ${new Date().getFullYear()} ThreadLock — All rights reserved.
            </td></tr>
          </table>
        </body></html>
        `;

        try {
          await resend.emails.send({
            from: "ThreadLock <support@threadlock.ai>",
            to: [email],
            subject: "Your Court-Ready Toolkit is ready 🔐",
            html: htmlEmail,
          });
          console.log(`📧 Toolkit email sent to ${email}`);
        } catch (mailErr) {
          console.error("❌ Email send failed:", mailErr?.message || mailErr);
        }
      }

      // Done
      return res.json({ received: true });
    } catch (e) {
      console.error("❌ Webhook processing error:", e);
      // Let Stripe retry if something truly failed
      return res.status(500).json({ error: "Webhook processing failed" });
    }
  }

  // Ignore other events for now
  return res.json({ received: true });
}
