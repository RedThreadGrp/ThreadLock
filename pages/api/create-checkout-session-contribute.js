// /pages/api/create-checkout-session-contribute.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const { kind } = req.query; // 'monthly' | 'nyop'
  try {
    if (kind === "monthly") {
      const price = process.env.PRICE_SUPPORT_MONTHLY;
      if (!price) throw new Error("PRICE_SUPPORT_MONTHLY not set");
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price, quantity: 1 }],
        success_url: `https://threadlock.ai/thank-you?support=monthly&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `https://threadlock.ai/?canceled=true`,
        customer_creation: "if_required",
      });
      return res.status(200).json({ url: session.url });
    }

    if (kind === "nyop") {
      const price = process.env.PRICE_SUPPORT_NYOP; // this is your custom-amount price
      if (!price) throw new Error("PRICE_SUPPORT_NYOP not set");
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price, quantity: 1 }], // Stripe will prompt for amount because price is custom-amount
        success_url: `https://threadlock.ai/thank-you?support=nyop&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `https://threadlock.ai/?canceled=true`,
        customer_creation: "if_required",
      });
      return res.status(200).json({ url: session.url });
    }

    return res.status(400).json({ error: "Invalid contribution kind" });
  } catch (e) {
    console.error("Stripe session error:", e.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
