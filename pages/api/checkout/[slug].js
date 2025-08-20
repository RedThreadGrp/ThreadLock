// /pages/api/checkout/[slug].js
import { stripeClient, requirePrice } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  // Prefer explicit DOMAIN, else fall back to request origin
  const origin =
    process.env.DOMAIN ||
    `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`;

  // Map slugs -> { env: "ENV_NAME" | string[], mode: 'payment' | 'subscription' }
  // NOTE: we are NOT calling requirePrice() here.
  const routes = {
    // Bundles / tiers
    toolkit:         { env: "FM_TOOLKIT_PRICE_ID",      mode: "payment" },
    founders:        { env: "PRICE_FOUNDERS_ONLY",      mode: "payment" },

    // Support
    "support-monthly": { env: "PRICE_SUPPORT_MONTHLY",  mode: "subscription" },
    "support-nyop":    { env: "PRICE_SUPPORT_NYOP",     mode: "payment" },

    // Singles ($15 each)
    "common-mistakes":  { env: "PRICE_COMMON_MISTAKES",   mode: "payment" },
    "basic-motion":     { env: "PRICE_BASIC_MOTION",      mode: "payment" },
    "case-timeline":    { env: "PRICE_CASE_TIMELINE",     mode: "payment" },
    "common-response":  { env: "PRICE_COMMON_RESPONSE",   mode: "payment" },
    "cross-exam":       { env: "PRICE_CROSS_EXAM",        mode: "payment" },
    "evidence-log":     { env: "PRICE_EVIDENCE_LOG",      mode: "payment" },
    "find-rules":       { env: "PRICE_FIND_RULES",        mode: "payment" },
    "pre-hearing":      { env: "PRICE_PRE_HEARING",       mode: "payment" },
    "proof-of-service": { env: "PRICE_PROOF_OF_SERVICE",  mode: "payment" },
    "trial-quick-ref":  { env: ["PRICE_TRIAL_QUICK_REF", "PRICE_TRIAL_QUICK_REF_GUIDE"], mode: "payment" },
  };

  const slug = String(req.query.slug || "");
  const cfg = routes[slug];

  if (!cfg) {
    res.status(400).json({ error: "Invalid product slug" });
    return;
  }

  // Lazily pick the first defined env from cfg.env (string or array), then call requirePrice once.
  const priceEnvNames = Array.isArray(cfg.env) ? cfg.env : [cfg.env];
  let priceId = null;
  let missingNames = [];

  for (const name of priceEnvNames) {
    const val = process.env[name];
    if (val) {
      // validate via your helper (will throw if malformed)
      priceId = requirePrice(name);
      break;
    } else {
      missingNames.push(name);
    }
  }

  if (!priceId) {
    return res.status(500).json({
      error: "Price not configured",
      details: `Missing env: ${missingNames.join(" or ")}`,
    });
  }

  try {
    const session = await stripeClient.checkout.sessions.create({
      mode: cfg.mode, // 'payment' or 'subscription'
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      customer_creation: "if_required",
      success_url: `${origin}/thank-you?sku=${encodeURIComponent(
        slug
      )}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: { slug },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    // Show actionable diagnostics in logs (but keep response generic)
    console.error("Stripe session error:", {
      message: err?.message,
      type: err?.type,
      code: err?.code,
      param: err?.param,
      raw: err?.raw,
    });
    res.status(500).json({ error: "Unable to create checkout session." });
  }
}
