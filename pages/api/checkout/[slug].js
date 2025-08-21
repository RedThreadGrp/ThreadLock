// /pages/api/checkout/[slug].js
import { stripeClient, isStripeTest } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const origin =
    process.env.DOMAIN ||
    `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}`;

  // Map slugs -> { env: string | string[], mode: 'payment' | 'subscription', promos?: boolean }
  const routes = {
    // Bundles / tiers
    toolkit:           { env: ["FM_TOOLKIT_PRICE_ID", "PRICE_TOOLKIT"], mode: "payment",       promos: true  },
    founders:          { env: "PRICE_FOUNDERS_ONLY",                    mode: "payment",       promos: true  },

    // Support
    "support-monthly": { env: "PRICE_SUPPORT_MONTHLY",                  mode: "subscription",  promos: true  },
    // NYOP is a custom-amount (variable) one-time price; promos can break Checkout with custom amounts.
    "support-nyop":    { env: "PRICE_SUPPORT_NYOP",                     mode: "payment",       promos: false },

    // Singles
    "common-mistakes":  { env: "PRICE_COMMON_MISTAKES",   mode: "payment", promos: true },
    "basic-motion":     { env: "PRICE_BASIC_MOTION",      mode: "payment", promos: true },
    "case-timeline":    { env: "PRICE_CASE_TIMELINE",     mode: "payment", promos: true },
    "common-response":  { env: "PRICE_COMMON_RESPONSE",   mode: "payment", promos: true },
    "cross-exam":       { env: "PRICE_CROSS_EXAM",        mode: "payment", promos: true },
    "evidence-log":     { env: "PRICE_EVIDENCE_LOG",      mode: "payment", promos: true },
    "find-rules":       { env: "PRICE_FIND_RULES",        mode: "payment", promos: true },
    "pre-hearing":      { env: "PRICE_PRE_HEARING",       mode: "payment", promos: true },
    "proof-of-service": { env: "PRICE_PROOF_OF_SERVICE",  mode: "payment", promos: true },
    "trial-quick-ref":  { env: ["PRICE_TRIAL_QUICK_REF", "PRICE_TRIAL_QUICK_REF_GUIDE"], mode: "payment", promos: true },
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
      chosen: priceId ? { env: priceEnv, id: mask(priceId) } : null,
    });
  }

  if (!priceId) {
    return res.status(500).json({
      error: "Price not configured",
      details: `Missing env for ${slug}. Tried (in order): ${tried.join(", ")}`,
    });
  }

  try {
    // --- Validate price & product
    const price = await stripeClient.prices.retrieve(priceId, { expand: ["product"] });
    const product = price?.product;

    const priceType = price?.type || (price?.recurring ? "recurring" : "one_time");
    const expectedType = cfg.mode === "subscription" ? "recurring" : "one_time";
    const isCustomAmount = !!price?.custom_unit_amount;

    if (!price?.active) {
      return res.status(400).json({
        error: "Price is inactive",
        details: `Env ${priceEnv} points to an inactive price (${mask(priceId)}). Activate it in Stripe.`,
      });
    }
    if (product && product.object === "product" && product.active === false) {
      return res.status(400).json({
        error: "Product is inactive",
        details: `Product for ${priceEnv} (${mask(priceId)}) is inactive. Activate the product in Stripe.`,
      });
    }
    if (priceType !== expectedType) {
      return res.status(400).json({
        error: "Price type mismatch",
        details: `Route "${slug}" expects ${expectedType}, but ${priceEnv} (${mask(priceId)}) is ${priceType}.`,
      });
    }

    // --- Build Checkout Session params
    const params = {
      mode: cfg.mode,
      line_items: [{ price: priceId, quantity: 1 }], // quantity must be 1 for custom-amount prices
      success_url: `${origin}/thank-you?sku=${encodeURIComponent(slug)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      customer_creation: "if_required",
      metadata: { slug },
    };

    // Promotions generally don’t work on custom-amount prices; disable for NYOP or auto-detect.
    const allowPromos = cfg.promos && !isCustomAmount;
    if (allowPromos) params.allow_promotion_codes = true;

    // Nice UX label for support SKUs (optional)
    if (slug.startsWith("support")) params.submit_type = "donate";

    const session = await stripeClient.checkout.sessions.create(params);
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
function expandEnvNames(baseNames, { isTestKey }) {
  const bases = Array.isArray(baseNames) ? baseNames : [baseNames];
  const order = isTestKey ? ["_TEST", "_LIVE", ""] : ["_LIVE", "", "_TEST"];
  const out = [];
  for (const base of bases) for (const suffix of order) out.push(suffix ? `${base}${suffix}` : base);
  return [...new Set(out)];
}

// Return the first valid Stripe Price ID from the candidate env names.
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
