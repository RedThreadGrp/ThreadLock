// /pages/api/checkout/[slug].js
import { stripeClient } from "@/lib/stripeEnv"; // keep your existing client

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const origin =
    process.env.DOMAIN ||
    `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`;

  // Determine live vs test from the secret key actually in use
  const isTestKey = String(stripeClient?._api?.auth || "").startsWith("sk_test_");

  // Map slugs -> { env: string | string[], mode: 'payment' | 'subscription' }
  // You can add/remove slugs freely. Values are ENV VAR *bases* (without _TEST).
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

  const priceId = resolvePriceId(cfg.env, { isTestKey });
  if (!priceId) {
    return res.status(500).json({
      error: "Price not configured",
      details: `Missing env for ${slug}: tried ${JSON.stringify(expandEnvNames(cfg.env, { isTestKey }))}`,
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

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", {
      message: err?.message, type: err?.type, code: err?.code, param: err?.param,
    });
    res.status(500).json({ error: "Unable to create checkout session." });
  }
}

/** Build the list of env names to try, including *_TEST when on test keys */
function expandEnvNames(names, { isTestKey }) {
  const base = Array.isArray(names) ? names : [names];
  const expanded = [];
  for (const n of base) {
    if (isTestKey) expanded.push(`${n}_TEST`, n);
    else expanded.push(n);
  }
  return [...new Set(expanded)];
}

/** Return the first valid Stripe Price ID from expanded list */
function resolvePriceId(names, { isTestKey }) {
  const candidates = expandEnvNames(names, { isTestKey });
  for (const envName of candidates) {
    const val = process.env[envName];
    if (val && /^price_/.test(val)) return val;
  }
  return null;
}
