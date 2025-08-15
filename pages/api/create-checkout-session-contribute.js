// /pages/api/create-checkout-session-contribute.js
import { stripeClient } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const kind = String(req.query.kind || "nyop"); // 'monthly' | 'nyop'

    if (kind === "monthly") {
      const monthlyPrice = process.env.PRICE_SUPPORT_MONTHLY;
      if (!monthlyPrice) throw new Error("Missing PRICE_SUPPORT_MONTHLY");

      const session = await stripeClient.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: monthlyPrice, quantity: 1 }],
        allow_promotion_codes: true,
        // no customer_creation here (not allowed in subscription mode)
        success_url: `https://threadlock.ai/thank-you?kind=support-monthly&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `https://threadlock.ai/?canceled=true`,
      });

      return res.status(200).json({ url: session.url });
    }

    // one-time “name your price” contribution using a fixed Price ID
    const nyopPrice = process.env.PRICE_SUPPORT_NYOP;
    if (!nyopPrice) throw new Error("Missing PRICE_SUPPORT_NYOP");

    const session = await stripeClient.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: nyopPrice, quantity: 1 }],
      allow_promotion_codes: true,
      customer_creation: "if_required",
      success_url: `https://threadlock.ai/thank-you?kind=support-nyop&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe (contribute) error:", err);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
