// /pages/api/checkout/[slug].js
import { pick } from "@/lib/stripeConfig";
const stripe = stripeClient;
const MAP = {
  // Bundles / tiers
  toolkit:           { base: "FM_TOOLKIT",        mode: "payment" },
  founders:          { base: "FOUNDERS_ONLY",     mode: "payment" },

  // Contributions
  "support-nyop":    { base: "SUPPORT_NYOP",      mode: "payment" },
  "support-monthly": { base: "SUPPORT_MONTHLY",   mode: "subscription" },

  // Singles
  "trial-quick-ref": { base: "TRIAL_QUICK_REF",   mode: "payment" },
  "common-mistakes": { base: "COMMON_MISTAKES",   mode: "payment" },
  "case-timeline":   { base: "CASE_TIMELINE",     mode: "payment" },
  "common-response": { base: "COMMON_RESPONSE",   mode: "payment" },
  "cross-exam":      { base: "CROSS_EXAM",        mode: "payment" },
  "evidence-log":    { base: "EVIDENCE_LOG",      mode: "payment" },
  "find-rules":      { base: "FIND_RULES",        mode: "payment" },
  "pre-hearing":     { base: "PRE_HEARING",       mode: "payment" },
  "proof-of-service":{ base: "PROOF_OF_SERVICE",  mode: "payment" },
  "basic-motion":    { base: "BASIC_MOTION",      mode: "payment" },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { slug } = req.query;
    const cfg = MAP[String(slug)];
    if (!cfg) return res.status(400).json({ error: "Unknown product slug" });

    const { stripe, mode } = stripeClient();
    const price = priceIdFor(cfg.base);

    const isSubscription = cfg.mode === "subscription";
    const origin = req.headers.origin || "https://threadlock.ai";

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [{ price, quantity: 1 }],
      allow_promotion_codes: !isSubscription,
      customer_creation: isSubscription ? undefined : "if_required",
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: { slug, envMode: mode },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-checkout error:", err);
    return res.status(500).json({ error: err?.message || "Unable to create checkout session." });
  }
}
