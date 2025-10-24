// /pages/api/webhook.js
import { buffer } from "micro";
import { stripeClient } from "@/lib/stripeEnv";

export const config = { api: { bodyParser: false } };

/* ---------- env + clients ---------- */

/* ---------- helpers ---------- */
async function verifyStripeEvent(req) {
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  const candidates = [
    ["STRIPE_WEBHOOK_SECRET_TEST", process.env.STRIPE_WEBHOOK_SECRET_TEST],
    ["STRIPE_WEBHOOK_SECRET_LIVE", process.env.STRIPE_WEBHOOK_SECRET_LIVE || process.env.STRIPE_WEBHOOK_SECRET],
  ].filter(([, v]) => !!v);

  if (!candidates.length) {
    throw new Error("Missing STRIPE_WEBHOOK_SECRET_TEST and STRIPE_WEBHOOK_SECRET_LIVE envs");
  }

  let lastErr;
  for (const [name, secret] of candidates) {
    try {
      const event = stripeClient.webhooks.constructEvent(buf, sig, secret);
      event._verified_with = name;
      return event;
    } catch (err) {
      lastErr = err;
    }
  }
  throw new Error(`Webhook signature failed for all secrets: ${lastErr?.message || "unknown error"}`);
}

/* ---------- webhook handler ---------- */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  let event;
  try {
    event = await verifyStripeEvent(req);
  } catch (err) {
    console.error("❌ Signature error:", err.message);
    return res.status(400).send("Invalid signature");
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const email =
          session.customer_details?.email || session.customer_email || null;
        const slug = session.metadata?.slug || null;

        console.log("✅ checkout.session.completed", {
          id: session.id,
          email,
          slug,
          verifiedWith: event._verified_with,
        });

        // Note: Email delivery and file downloads handled by Firebase Cloud Functions
        // or other external services. This endpoint just logs the completion.

        break;
      }

      // optional: log others for visibility
      default:
        console.log("ℹ️ Unhandled event:", event.type);
    }
  } catch (err) {
    console.error("⚠️ Webhook handler error:", err);
    return res.status(500).send("Webhook handler error");
  }

  return res.json({ received: true });
}
