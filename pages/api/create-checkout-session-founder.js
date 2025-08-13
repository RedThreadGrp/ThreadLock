// /pages/api/create-checkout-session.js
import { stripeClients, price } from "@/lib/stripeConfig";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const { stripe } = stripeClients();
    const toolkitPriceId = price("FM_TOOLKIT_PRICE_ID"); // auto-picks TEST/LIVE

    const origin = req.headers.origin || "https://threadlock.ai";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: toolkitPriceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      customer_creation: "if_required", // valid in payment mode
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err);
    return res.status(500).json({ error: err?.message || "Unable to create checkout session." });
  }
}

