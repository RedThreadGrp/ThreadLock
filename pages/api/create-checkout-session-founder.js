// /pages/api/create-checkout-session-founder.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
  try {
    const price = process.env.PRICE_FOUNDERS_ONLY;
    if (!price) throw new Error("PRICE_FOUNDERS_ONLY not set");
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `https://threadlock.ai/thank-you?founder=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,
      customer_creation: "if_required",
    });
    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error("Stripe session error:", e.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
