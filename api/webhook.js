import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const config = {
  api: {
    bodyParser: false, // Required for raw body verification
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Supabase client (use Service Role Key for inserts)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Read raw body for Stripe signature verification
  const buf = await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", (err) => reject(err));
  });

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle successful checkout
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const email = session.customer_email;
    const name = session.metadata?.name || "Unknown";
    const stripeId = session.customer || session.id;

    console.log(`✅ Payment received from ${email}`);

    // Insert into Supabase
    const { error } = await supabase.from("users").insert([
      {
        email,
        name,
        stripe_customer_id: stripeId,
      },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return res.status(500).json({ error: "Supabase insert failed" });
    }
  }

  res.json({ received: true });
}
