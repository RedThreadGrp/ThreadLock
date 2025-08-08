// /pages/api/checkout/session.js

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Optional: get Supabase user_id from cookie/session
// Adjust if you use @supabase/auth-helpers-nextjs
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Retrieve the current user from access token (adjust to your auth flow)
    const accessToken = req.cookies["sb-access-token"];
    if (!accessToken) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const { data: { user }, error: userErr } = await supabase.auth.getUser(accessToken);
    if (userErr || !user) {
      return res.status(401).json({ error: "Invalid session" });
    }

    // Price ID from Stripe dashboard for Founding Member Toolkit
    const toolkitPriceId = process.env.FM_TOOLKIT_PRICE_ID;
    if (!toolkitPriceId) {
      throw new Error("FM_TOOLKIT_PRICE_ID env var not set");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: toolkitPriceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      success_url: `${req.headers.origin}/members?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/members?canceled=true`,

      // Attach identifiers so webhook can match this purchase to a Supabase user
      client_reference_id: user.id,
      metadata: {
        user_id: user.id,
        price_id: toolkitPriceId,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err.message);
    return res.status(500).json({ error: "Unable to create checkout session." });
  }
}
