import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false, // Required for Stripe webhook raw body
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // set this in Vercel

  let event;

  try {
    // Get raw body for signature verification
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const rawBody = Buffer.concat(chunks);

    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log("✅ Payment received for:", session.customer_email);

    // Example: Save user or send email
    // (Replace this with your actual database/email logic)
    // await saveUserToDB(session.customer_email, session.metadata.name);
    // await sendWelcomeEmail(session.customer_email);

  }

  res.status(200).json({ received: true });
}
