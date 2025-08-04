import Stripe from "stripe";

// Use your existing environment variable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Only allow POST requests to avoid Method Not Allowed
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription", // for recurring; use "payment" for one-time
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ThreadLock™ Early Access",
              description:
                "First 6 months of Pro Tier for $10. Secure your family law evidence the smart way.",
            },
            unit_amount: 1000, // $10 in cents
            recurring: { interval: "month", interval_count: 6 },
          },
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    // Return session URL to the client
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err);
    res.status(500).json({ error: "Unable to create checkout session." });
  }
}
