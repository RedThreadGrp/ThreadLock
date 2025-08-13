// /pages/api/create-checkout-session-contribute.js
import { stripeClients, price } from "@/lib/stripeConfig";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const { stripe } = stripeClients();
    const kind = String(req.query.kind || ""); // "monthly" | "nyop"
    const origin = req.headers.origin || "https://threadlock.ai";

    if (kind === "monthly") {
      const p = price("PRICE_SUPPORT_MONTHLY"); // recurring price
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: p, quantity: 1 }],
        allow_promotion_codes: false,
        success_url: `${origin}/thank-you?kind=monthly&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`,
      });
      return res.status(200).json({ url: session.url });
    }

    if (kind === "nyop") {
      const p = price("PRICE_SUPPORT_NYOP"); // custom_unit_amount enabled
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price: p, quantity: 1 }],
        allow_promotion_codes: false,
        success_url: `${origin}/thank-you?kind=nyop&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`,
        customer_creation: "if_required",
      });
      return res.status(200).json({ url: session.url });
    }

    return res.status(400).json({ error: "Invalid 'kind' (use ?kind=monthly or ?kind=nyop)" });
  } catch (err) {
    console.error("Contribute session error:", err);
    return res.status(500).json({ error: err?.message || "Unable to create contribution session." });
  }
}

