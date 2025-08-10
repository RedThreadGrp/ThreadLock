// /pages/api/create-checkout-session-item.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// SKU -> Price ID map (envs you already set) and pretty names if you want to log
const ITEMS = {
  avoiding_common_mistakes: process.env.PRICE_COMMON_MISTAKES,
  basic_motion_template: process.env.PRICE_BASIC_MOTION,
  case_event_timeline: process.env.PRICE_CASE_TIMELINE,
  common_response_timelines: process.env.PRICE_COMMON_RESPONSE,
  cross_exam_planning: process.env.PRICE_CROSS_EXAM,
  evidence_log: process.env.PRICE_EVIDENCE_LOG,
  find_court_rules: process.env.PRICE_FIND_RULES,
  pre_hearing_checklist: process.env.PRICE_PRE_HEARING,
  proof_of_service_tracker: process.env.PRICE_PROOF_OF_SERVICE,
  trial_hearing_quick_ref: process.env.PRICE_TRIAL_QUICK_REF || process.env.PRICE_TRIAL_QUICK_REF_GUIDE,
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const sku = (req.query.sku || "").toString();
  const priceId = ITEMS[sku];

  if (!sku || !priceId) {
    return res.status(400).json({ error: "Invalid or missing item." });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `https://threadlock.ai/thank-you?sku=${encodeURIComponent(sku)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://threadlock.ai/?canceled=true`,
      customer_creation: "if_required",
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session (single item) error:", err.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
