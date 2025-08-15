import Stripe from "stripe";
import { pick } from "@/lib/stripeEnv";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") { res.setHeader("Allow", "POST"); return res.status(405).json({ error: "Method Not Allowed" }); }
  try {
    const priceId = pick("PRICE_FOUNDERS_ONLY");
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `https://threadlock.ai/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,
      customer_creation: "if_required",
    });
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session (founders) error:", err.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
