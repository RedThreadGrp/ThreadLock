import Stripe from "stripe";
import { pick } from "@/lib/stripeConfig";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") { res.setHeader("Allow", "POST"); return res.status(405).json({ error: "Method Not Allowed" }); }

  const kind = String(req.query.kind || "nyop"); // "monthly" | "nyop"
  try {
    const priceId = kind === "monthly" ? pick("PRICE_SUPPORT_MONTHLY") : pick("PRICE_SUPPORT_NYOP");
    const mode = kind === "monthly" ? "subscription" : "payment";

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `https://threadlock.ai/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,
      ...(mode === "payment" ? { customer_creation: "if_required" } : {}),
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session (contribution) error:", err.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
