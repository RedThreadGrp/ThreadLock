// /lib/stripeConfig.js
import Stripe from "stripe";

function resolveMode() {
  const m = (process.env.STRIPE_MODE || "").toLowerCase();
  if (m === "live" || m === "test") return m;

  // Fallback: infer from the provided secret key(s)
  const k =
    process.env.STRIPE_SECRET_KEY_LIVE ||
    process.env.STRIPE_SECRET_KEY_TEST ||
    process.env.STRIPE_SECRET_KEY ||
    "";
  if (k.startsWith("sk_live_")) return "live";
  if (k.startsWith("sk_test_")) return "test";
  return "test"; // safe default
}

export function stripeClient() {
  const mode = resolveMode();
  const secret =
    mode === "live"
      ? (process.env.STRIPE_SECRET_KEY_LIVE || process.env.STRIPE_SECRET_KEY)
      : (process.env.STRIPE_SECRET_KEY_TEST || process.env.STRIPE_SECRET_KEY);
  if (!secret) throw new Error(`Stripe secret missing for mode=${mode}`);
  return { stripe: new Stripe(secret), mode };
}

/**
 * Resolve a price ID from env based on a base key and current mode.
 * Example: base="FM_TOOLKIT" -> FM_TOOLKIT_PRICE_ID_TEST or _LIVE
 */
export function priceIdFor(base) {
  const mode = resolveMode().toUpperCase(); // TEST | LIVE
  const envName = `${base}_PRICE_ID_${mode}`;  // e.g., FM_TOOLKIT_PRICE_ID_TEST
  const fallback = `${base}_PRICE_ID`;         // optional global fallback
  const val = process.env[envName] || process.env[fallback];
  if (!val) throw new Error(`Missing env: ${envName} (or ${fallback})`);
  return val;
}
