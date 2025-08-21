// /pages/api/checkout/[slug].js
import { stripeClient, isStripeTest } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const origin =
    process.env.DOMAIN ||
    `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`;

  // Map slugs -> { env: string | string[], mode: 'payment' | 'subscription' }
  // 'env' is the BASE name(s) — we will append _TEST / _LIVE automatically.
  const routes = {
    // Bundles / tiers
    toolkit:           { env: ["FM_TOOLKIT_PRICE_ID", "PRICE_TOOLKIT"], mode: "payment" },
    founders:          { env: "PRICE_FOUNDERS_ONLY",                    mode: "payment" },

    // Support
    "support-monthly": { env: "PRICE_SUPPORT_MONTHLY",                  mode: "subscription" },
    "support-nyop":    { env: "PRICE_SUPPORT_NYOP",                     mode: "payment" },

    // Singles
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
  if (!cfg) return res.status(400).json({ error: "Invalid product slug" });

  // Determine mode from your configured key
  const isTestKey = !!isStripeTest;

  const { priceId, tried, presence } = resolvePriceId(cfg.env, { isTestKey });

  // Optional diagnostics: POST .../slug?debug=1 to see which env names exist (no values leaked)
  if (req.query.debug) {
    return res.status(200).json({
      slug,
      isTestKey,
      tried,
      present: presence,
    });
  }

  if (!priceId) {
    return res.status(500).json({
      error: "Price not configured",
      details: `Missing env for ${slug}. Tried (in order): ${tried.join(", ")}`,
    });
  }

  try {
    const session = await stripeClient.checkout.sessions.create({
      mode: cfg.mode,
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      customer_creation: "if_required",
      success_url: `${origin}/thank-you?sku=${encodeURIComponent(slug)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: { slug },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", {
      message: err?.message,
      type: err?.type,
      code: err?.code,
      param: err?.param,
    });
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}

/* ---------- helpers ---------- */

// Build the ordered list of env var names to try.
// Priority: match key mode first, then the other mode, then bare for backward compat.
function expandEnvNames(baseNames, { isTestKey }) {
  const bases = Array.isArray(baseNames) ? baseNames : [baseNames];
  const order = isTestKey
    ? ["_TEST", "_LIVE", ""]   // using test key → prefer *_TEST
    : ["_LIVE", "", "_TEST"];  // using live key → prefer *_LIVE

  const out = [];
  for (const base of bases) {
    for (const suffix of order) {
      out.push(suffix ? `${base}${suffix}` : base);
    }
  }
  // de-dupe, preserve order
  return [...new Set(out)];
}

// Return the first valid Stripe Price ID from the candidate env names.
function resolvePriceId(baseNames, { isTestKey }) {
  const tried = expandEnvNames(baseNames, { isTestKey });
  const presence = tried.map((n) => ({ name: n, present: !!process.env[n] }));

  for (const envName of tried) {
    const val = process.env[envName];
    if (val && /^price_/.test(val)) {
      return { priceId: val, tried, presence };
    }
  }
  return { priceId: null, tried, presence };
}
