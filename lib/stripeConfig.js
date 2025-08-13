// /lib/stripeConfig.js
import Stripe from "stripe";

function resolveMode() {
  // 1) Respect explicit STRIPE_MODE if set
  const m = (process.env.STRIPE_MODE || "").toLowerCase();
  if (m === "live" || m === "test") return m;
  // 2) Infer from whichever secret key is present on this deployment
  const key =
    process.env.STRIPE_SECRET_KEY_LIVE ||
    process.env.STRIPE_SECRET_KEY_TEST ||
    process.env.STRIPE_SECRET_KEY ||
    "";
  if (key.startsWith("sk_live_")) return "live";
  if (key.startsWith("sk_test_")) return "test";
  return "test"; // safe default
}

export function stripeClients() {
  const mode = resolveMode();

  const secret =
    mode === "live"
      ? (process.env.STRIPE_SECRET_KEY_LIVE || process.env.STRIPE_SECRET_KEY)
      : (process.env.STRIPE_SECRET_KEY_TEST || process.env.STRIPE_SECRET_KEY);

  if (!secret) throw new Error("Stripe secret key not configured for current mode");

  const publishable =
    mode === "live"
      ? (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE || process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      : (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST || process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const stripe = new Stripe(secret);
  return { stripe, mode, publishable };
}

export function price(envBaseName) {
  // envBaseName e.g. "FM_TOOLKIT_PRICE_ID"
  const mode = resolveMode();
  const key = `${envBaseName}_${mode.toUpperCase()}`; // FM_TOOLKIT_PRICE_ID_TEST/LIVE
  const val = process.env[key] || process.env[envBaseName]; // fallback if you only keep one
  if (!val) throw new Error(`Missing env: ${key} (or ${envBaseName}) for mode=${mode}`);
  return val;
}
