import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ThreadLock 6-Month Early Access",
              description: "Promo valid until August 31, 2025",
            },
            unit_amount: 1000, // $10 in cents
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel.html`,
      metadata: { name },
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
