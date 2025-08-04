import Stripe from "stripe";

// Use your existing environment variable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Create a checkout session for a ONE-TIME payment
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment", // Changed from "subscription" to "payment"
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ThreadLock™ Early Access",
              description:
                "Get 6 months of Pro Tier access. Secure your family law evidence the smart way.",
            },
            unit_amount: 1000, // $10 in cents
            // The "recurring" object has been removed
          },
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/`,
    });

    // Return session URL to the client
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err.message);
    return res
      .status(500)
      .json({ error: "Unable to create checkout session." });
  }
}
