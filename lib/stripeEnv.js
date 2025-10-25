// /lib/stripeEnv.js
const SECRET = process.env.STRIPE_SECRET_KEY || "";
export const isStripeTest = SECRET.startsWith("sk_test_");
import Stripe from "stripe";
export const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

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

export function requirePrice(base) {
  const v = pick(base);
  if (!v) {
    throw new Error(
      `Missing env for ${base}. Provide ${base}_LIVE or ${base}_TEST (or ${base}).`
    );
  }
  return v;
}

export default { isStripeTest, pick, requirePrice };
