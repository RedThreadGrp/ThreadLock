// /lib/stripeConfig.js
import Stripe from "stripe";

// --- determine mode from the actual key you loaded
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}
export const isStripeTest = STRIPE_SECRET_KEY.startsWith("sk_test_");

// --- env helper: pick TEST or LIVE variant for a base name
// Usage: pick("PRICE_PROOF_OF_SERVICE")
export function pick(base) {
  if (isStripeTest) {
    return (
      process.env[`${base}_TEST`] ||
      process.env[base] ||
      process.env[`${base}_LIVE`]
    );
  }
  return (
    process.env[`${base}_LIVE`] ||
    process.env[base] ||
    process.env[`${base}_TEST`]
  );
}

// Optional: strict getter that throws if missing
export function requirePrice(base) {
  const id = pick(base);
  if (!id) {
    throw new Error(
      `Missing env for ${base}. Provide ${base}_LIVE or ${base}_TEST (or ${base}).`
    );
  }
  return id;
}

// --- factory (named export) for compatibility with code that *calls* a function
export function stripeClient() {
  return new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
  });
}

// --- default export: prebuilt client for code that imports the instance directly
const stripe = stripeClient();
export default stripe;
