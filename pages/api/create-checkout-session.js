import { stripeClient } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const session = await stripeClient.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: process.env.FM_TOOLKIT_PRICE_ID, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `https://threadlock.ai/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,
      customer_creation: "if_required",
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
