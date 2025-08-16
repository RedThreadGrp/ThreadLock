// /pages/api/webhook.js
import { stripeClient, isStripeTest, pick } from "@/lib/stripeEnv";
import { Readable } from "stream";

export const config = { api: { bodyParser: false } };

async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const sig = req.headers["stripe-signature"];
  const endpointSecret =
    pick("STRIPE_WEBHOOK_SECRET") || // resolves *_TEST / *_LIVE / base
    process.env.STRIPE_WEBHOOK_SECRET; // fallback if you only set one name

  if (!endpointSecret) {
    console.error("Missing STRIPE_WEBHOOK_SECRET env");
    return res.status(500).send("Webhook secret not configured");
  }

  let event;
  try {
    const rawBody = await getRawBody(req);
    event = stripeClient.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle events you care about
  try {
    switch (event.type) {
      case "checkout.session.completed":
        // TODO: fulfill (e.g., Supabase upsert, email)
        break;
      case "invoice.paid":
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        // TODO: handle subscriptions
        break;
      default:
        // ignore other events
        break;
    }
    return res.status(200).json({ received: true });
  } catch (e) {
    console.error("Webhook handler error:", e);
    return res.status(500).send("Server error");
  }
}
