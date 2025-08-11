// /pages/api/create-checkout-session-contribute.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const kind = (req.query.kind || "").toString(); // "monthly" | "nyop"
    const origin = req.headers.origin || "https://threadlock.ai";

    if (kind === "monthly") {
      // $2/mo recurring
      const priceId = process.env.PRICE_SUPPORT_MONTHLY;
      if (!priceId) throw new Error("PRICE_SUPPORT_MONTHLY not set");

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        allow_promotion_codes: false,
        success_url: `${origin}/thank-you?kind=monthly&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`,
        customer_creation: "if_required",
      });
      return res.status(200).json({ url: session.url });
    }

    if (kind === "nyop") {
      // Name-Your-Own-Price (one-time)
      // EASIEST PATH: create a Price in the dashboard with custom_unit_amount.enabled=true
      // and reference it here:
      const nyopPriceId = process.env.PRICE_SUPPORT_NYOP; // custom amount price
      if (!nyopPriceId) throw new Error("PRICE_SUPPORT_NYOP not set (create a custom amount Price in Stripe)");

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price: nyopPriceId, // lets customer enter amount on Checkout
            quantity: 1,
          },
        ],
        allow_promotion_codes: false,
        success_url: `${origin}/thank-you?kind=nyop&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`,
        customer_creation: "if_required",
      });
      return res.status(200).json({ url: session.url });
    }

    return res.status(400).json({ error: "Invalid 'kind'. Use ?kind=monthly or ?kind=nyop" });
  } catch (err) {
    console.error("Contribute session error:", err);
    return res.status(500).json({ error: "Unable to create contribution session." });
  }
}
