// /pages/api/create-checkout-session.js
import { stripeClient } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const priceId = process.env.FM_TOOLKIT_PRICE_ID;
    if (!priceId) throw new Error("Missing FM_TOOLKIT_PRICE_ID");

    const session = await stripeClient.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      customer_creation: "if_required", // only valid in payment mode
      success_url: `https://threadlock.ai/thank-you?kind=toolkit&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe (toolkit) error:", err);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
