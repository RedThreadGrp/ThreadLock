// pages/api/webhook.js
import { buffer } from "micro";
import { stripeClient, isStripeTest } from "@/lib/stripeEnv";

export const config = {
  api: { bodyParser: false }, // we need the raw body for signature verification
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  // Choose the correct webhook secret based on the key in use
  const endpointSecret = isStripeTest
    ? process.env.STRIPE_WEBHOOK_SECRET_TEST
    : process.env.STRIPE_WEBHOOK_SECRET;

  if (!endpointSecret) {
    console.error("⚠️ Missing STRIPE_WEBHOOK_SECRET(_TEST) env");
    return res
      .status(500)
      .send("Webhook misconfigured: missing signing secret env");
  }

  let event;
  try {
    const sig = req.headers["stripe-signature"];
    const buf = await buffer(req);
    event = stripeClient.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ---- Handle events you care about ----
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log("✅ checkout.session.completed", session.id, {
          mode: session.mode,
          customer: session.customer,
        });
        // TODO: fulfill order, mark user in DB, send email, etc.
        break;
      }
      case "payment_intent.succeeded": {
        const pi = event.data.object;
        console.log("💸 payment_intent.succeeded", pi.id);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object;
        console.log(`🔁 ${event.type}`, sub.id);
        break;
      }
      default:
        console.log("ℹ️ Unhandled event:", event.type);
    }
  } catch (err) {
    console.error("⚠️ Webhook handler error:", err);
    return res.status(500).send("Webhook handler error");
  }

  return res.json({ received: true });
}
