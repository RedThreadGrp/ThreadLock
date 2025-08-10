// /pages/api/create-checkout-session.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const toolkitPriceId = process.env.FM_TOOLKIT_PRICE_ID;
    if (!toolkitPriceId) throw new Error("FM_TOOLKIT_PRICE_ID env var not set");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: toolkitPriceId, quantity: 1 }],
      allow_promotion_codes: true,

      // Route to your main site's Thank You page (no members app required)
      success_url: `https://threadlock.ai/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,

      // Creates a Stripe Customer for future upgrades
      customer_creation: "if_required",
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
