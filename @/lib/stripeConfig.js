// Switch TEST/LIVE by looking at your Stripe secret key
export const isStripeTest =
  (process.env.STRIPE_SECRET_KEY || "").startsWith("sk_test_");

// Pick the right env var suffix automatically.
// Usage: pick("PRICE_COMMON_MISTAKES")
export function pick(base) {
  if (isStripeTest) {
    return (
      process.env[`${base}_TEST`] ||
      process.env[base] ||
      process.env[`${base}_LIVE`]
    );
  }
  // live key
  return (
    process.env[`${base}_LIVE`] ||
    process.env[base] ||
    process.env[`${base}_TEST`]
  );
}
