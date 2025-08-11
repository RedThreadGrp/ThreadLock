// /pages/api/create-checkout-session-contribute.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const kind = String(req.query.kind || ""); // "monthly" | "nyop"
    const origin = req.headers.origin || "https://threadlock.ai";

    if (kind === "monthly") {
      const priceId = process.env.PRICE_SUPPORT_MONTHLY; // recurring monthly price
      if (!priceId) return res.status(500).json({ error: "PRICE_SUPPORT_MONTHLY not set" });

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        allow_promotion_codes: false,
        success_url: `${origin}/thank-you?kind=monthly&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`,
        // NOTE: DO NOT send customer_creation in subscription mode
      });
      return res.status(200).json({ url: session.url });
    }

    if (kind === "nyop") {
      const nyopPriceId = process.env.PRICE_SUPPORT_NYOP; // one-time, custom_unit_amount enabled
      if (!nyopPriceId) return res.status(500).json({ error: "PRICE_SUPPORT_NYOP not set" });

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price: nyopPriceId, quantity: 1 }],
        allow_promotion_codes: false,
        success_url: `${origin}/thank-you?kind=nyop&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`,
        customer_creation: "if_required", // valid in payment mode only
      });
      return res.status(200).json({ url: session.url });
    }

    return res.status(400).json({ error: "Invalid 'kind' (use ?kind=monthly or ?kind=nyop)" });
  } catch (err) {
    console.error("Contribute session error:", err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
