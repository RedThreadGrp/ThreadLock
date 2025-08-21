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

  const isTestKey = !!isStripeTest;
  const { priceId, priceEnv, tried, presence } = resolvePriceId(cfg.env, { isTestKey });

  if (req.query.debug) {
    return res.status(200).json({
      slug,
      isTestKey,
      tried,
      present: presence,
      chosen: priceId
        ? { env: priceEnv, id: mask(priceId) }
        : null,
    });
  }

  if (!priceId) {
    return res.status(500).json({
      error: "Price not configured",
      details: `Missing env for ${slug}. Tried (in order): ${tried.join(", ")}`,
    });
  }

  try {
    // --- Validate the price matches our intended mode and is usable
    const price = await stripeClient.prices.retrieve(priceId);

    // price.type is 'one_time' or 'recurring' (Stripe adds this)
    // fall back to inferring from presence of price.recurring
    const priceType = price?.type || (price?.recurring ? "recurring" : "one_time");
    const expectedType = cfg.mode === "subscription" ? "recurring" : "one_time";

    if (!price?.active) {
      return res.status(400).json({
        error: "Price is inactive",
        details: `Env ${priceEnv} points to an inactive price (${mask(priceId)}). Activate it in Stripe.`,
      });
    }

    if (priceType !== expectedType) {
      return res.status(400).json({
        error: "Price type mismatch",
        details: `Route "${slug}" expects ${expectedType}, but ${priceEnv} (${mask(priceId)}) is ${priceType}. Update the env var to a matching price or change the price type in Stripe.`,
      });
    }

    // Optional sanity check: NYOP price should have custom unit amount if it's truly "name your price"
    if (slug === "support-nyop" && !price.custom_unit_amount && priceType === "one_time") {
      // Not fatal, but helpful
      console.warn(`NYOP hint: ${priceId} has no custom_unit_amount; customer won't be able to enter an amount.`);
    }

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
      slug,
      priceEnv,
      priceId: mask(priceId),
      isTestKey,
    });
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}

/* ---------- helpers ---------- */

function mask(id = "") {
  return id ? id.replace(/^(.{6}).+(.{4})$/, "$1…$2") : id;
}

// Build the ordered list of env var names to try.
// Priority: match key mode first, then the other mode, then bare for backward compat.
function expandEnvNames(baseNames, { isTestKey }) {
  const bases = Array.isArray(baseNames) ? baseNames : [baseNames];
  const order = isTestKey ? ["_TEST", "_LIVE", ""] : ["_LIVE", "", "_TEST"];
  const out = [];
  for (const base of bases) {
    for (const suffix of order) {
      out.push(suffix ? `${base}${suffix}` : base);
    }
  }
  return [...new Set(out)];
}

function resolvePriceId(baseNames, { isTestKey }) {
  const tried = expandEnvNames(baseNames, { isTestKey });
  const presence = tried.map((n) => ({ name: n, present: !!process.env[n] }));
  for (const envName of tried) {
    const val = process.env[envName];
    if (val && /^price_/.test(val)) {
      return { priceId: val, priceEnv: envName, tried, presence };
    }
  }
  const firstPresent = tried.find((n) => !!process.env[n]) || null;
  return { priceId: null, priceEnv: firstPresent, tried, presence };
}
