// /pages/api/checkout/[slug].js
import { stripeClient, requirePrice } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  // Prefer explicit DOMAIN, else fall back to request origin
  const origin = process.env.DOMAIN || `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`;

  // Map slugs -> { price: envName, mode: 'payment' | 'subscription' }
  const routes = {
    // Bundles / tiers
    "toolkit":            { price: requirePrice("FM_TOOLKIT_PRICE_ID"), mode: "payment" },
    "founders":           { price: requirePrice("PRICE_FOUNDERS_ONLY"), mode: "payment" },

    // Support
    "support-monthly":    { price: requirePrice("PRICE_SUPPORT_MONTHLY"), mode: "subscription" },
    "support-nyop":       { price: requirePrice("PRICE_SUPPORT_NYOP"),    mode: "payment" },

    // Singles ($15 each)
    "common-mistakes":    { price: requirePrice("PRICE_COMMON_MISTAKES"), mode: "payment" },
    "basic-motion":       { price: requirePrice("PRICE_BASIC_MOTION"),    mode: "payment" },
    "case-timeline":      { price: requirePrice("PRICE_CASE_TIMELINE"),   mode: "payment" },
    "common-response":    { price: requirePrice("PRICE_COMMON_RESPONSE"), mode: "payment" },
    "cross-exam":         { price: requirePrice("PRICE_CROSS_EXAM"),      mode: "payment" },
    "evidence-log":       { price: requirePrice("PRICE_EVIDENCE_LOG"),    mode: "payment" },
    "find-rules":         { price: requirePrice("PRICE_FIND_RULES"),      mode: "payment" },
    "pre-hearing":        { price: requirePrice("PRICE_PRE_HEARING"),     mode: "payment" },
    "proof-of-service":   { price: requirePrice("PRICE_PROOF_OF_SERVICE"),mode: "payment" },
    "trial-quick-ref":    { price: requirePrice("PRICE_TRIAL_QUICK_REF") || requirePrice("PRICE_TRIAL_QUICK_REF_GUIDE"), mode: "payment" },
  };

  const slug = String(req.query.slug || "");
  const cfg = routes[slug];

  if (!cfg) {
    res.status(400).json({ error: "Invalid product slug" });
    return;
  }

  try {
    const session = await stripeClient.checkout.sessions.create({
      mode: cfg.mode, // 'payment' or 'subscription'
      line_items: [{ price: cfg.price, quantity: 1 }],
      allow_promotion_codes: true,
      customer_creation: "if_required",
      success_url: `${origin}/thank-you?sku=${encodeURIComponent(slug)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      // Optional: pass the slug so your webhook can see what was intended
      metadata: { slug },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err?.message || err);
    res.status(500).json({ error: "Unable to create checkout session." });
  }
}
