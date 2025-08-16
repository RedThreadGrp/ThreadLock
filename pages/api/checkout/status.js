// /pages/api/checkout/status.js
import { stripeClient } from "@/lib/stripeEnv";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const sessionId = String(req.query.session_id || "");
  if (!sessionId) {
    res.status(400).json({ error: "Missing session_id" });
    return;
  }

  try {
    const session = await stripeClient.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product", "payment_intent", "subscription"],
    });

    res.status(200).json({
      id: session.id,
      status: session.status,                  // 'complete' when done
      payment_status: session.payment_status,  // 'paid' for one-time
      mode: session.mode,                      // 'payment' | 'subscription'
      customer_email:
        session.customer_details?.email ||
        session.customer_email ||
        null,
      amount_total: session.amount_total,
      currency: session.currency,
      line_items: session.line_items?.data?.map((li) => ({
        price_id: li.price?.id,
        product_name:
          li.price?.nickname ||
          li.price?.product?.name ||
          "Item",
        quantity: li.quantity || 1,
        amount_subtotal: li.amount_subtotal,
      })) || [],
    });
  } catch (err) {
    console.error("status.js error:", err?.message || err);
    res.status(500).json({ error: "Unable to fetch session" });
  }
}
