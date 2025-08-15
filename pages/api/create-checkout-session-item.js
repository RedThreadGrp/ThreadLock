import Stripe from "stripe";
import { pick } from "@/lib/stripeEnv";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Map each SKU to its base env name; `pick()` chooses TEST or LIVE at runtime
const ITEMS = {
  avoiding_common_mistakes: pick("PRICE_COMMON_MISTAKES"),
  basic_motion_template:    pick("PRICE_BASIC_MOTION"),
  case_event_timeline:      pick("PRICE_CASE_TIMELINE"),
  common_response_timelines:pick("PRICE_COMMON_RESPONSE"),
  cross_exam_planning:      pick("PRICE_CROSS_EXAM"),
  evidence_log:             pick("PRICE_EVIDENCE_LOG"),
  find_court_rules:         pick("PRICE_FIND_RULES"),
  pre_hearing_checklist:    pick("PRICE_PRE_HEARING"),
  proof_of_service_tracker: pick("PRICE_PROOF_OF_SERVICE"),
  trial_hearing_quick_ref:  pick("PRICE_TRIAL_QUICK_REF"), // or _GUIDE if you use that suffix too
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const sku = String(req.query.sku || "");
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
