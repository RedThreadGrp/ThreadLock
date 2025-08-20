// pages/api/webhook.js
import { buffer } from "micro";
import { stripeClient, isStripeTest } from "@/lib/stripeEnv";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const config = {
  api: { bodyParser: false }, // raw body for Stripe verification
};

// --- Supabase admin client (service role; server-only) ---
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

// --- Fetch signed URLs for every file under the toolkit prefix ---
async function getToolkitSignedUrls() {
  const supabase = getSupabaseAdmin();

  const bucket = process.env.SUPABASE_STORAGE_BUCKET;
  const prefix = process.env.SUPABASE_TOOLKIT_PREFIX || "toolkit/";

  if (!bucket) {
    throw new Error("Missing SUPABASE_STORAGE_BUCKET");
  }

  // 1) list files in prefix
  const { data: files, error: listErr } = await supabase.storage
    .from(bucket)
    .list(prefix, { limit: 100 });

  if (listErr) throw listErr;

  // Guard: empty folder?
  if (!files || files.length === 0) return [];

  // 2) generate signed URLs (24h = 86400 seconds)
  const expiresIn = 86400;

  const paths = files
    .filter((f) => !!f && !!f.name) // skip weird entries
    .map((f) => `${prefix}${f.name}`);

  const { data: signed, error: signErr } = await supabase.storage
    .from(bucket)
    .createSignedUrls(paths, expiresIn);

  if (signErr) throw signErr;

  // Normalize
  return signed
    .filter((s) => s?.signedUrl)
    .map((s) => ({
      name: s.path.replace(prefix, ""),
      url: s.signedUrl,
    }))
    // put the ZIP first if present, because users love one-click
    .sort((a, b) => {
      const isZipA = a.name.toLowerCase().endsWith(".zip") ? -1 : 0;
      const isZipB = b.name.toLowerCase().endsWith(".zip") ? -1 : 0;
      return isZipA - isZipB;
    });
}

// --- Send purchaser email via Resend ---
async function sendToolkitEmail({ to, sessionId, links }) {
  if (!to) throw new Error("Missing recipient email");

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const bcc = process.env.EMAIL_BCC || undefined;

  if (!resendKey || !from) {
    throw new Error("Missing RESEND_API_KEY or EMAIL_FROM");
  }

  const resend = new Resend(resendKey);

  const title = "Your ThreadLock Toolkit is ready";
  const intro =
    "Thanks for your purchase. Download links are below (valid for 24 hours). You can revisit the email while links are active.";

  const listHtml = links
    .map(
      (f) =>
        `<li style="margin:6px 0"><a href="${f.url}" target="_blank" rel="noopener">${escapeHtml(
          f.name
        )}</a></li>`
    )
    .join("");

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.45;color:#111">
      <h2 style="margin:0 0 12px">${escapeHtml(title)}</h2>
      <p style="margin:0 0 12px">${escapeHtml(intro)}</p>
      <ul style="padding-left:18px;margin:0 0 16px">
        ${listHtml}
      </ul>
      <p style="margin:0 0 4px">Order Reference: <strong>${escapeHtml(
        sessionId
      )}</strong></p>
      <p style="margin:8px 0 0;color:#555">Need help? Reply to this email.</p>
    </div>
  `;

  const text =
    `${title}\n\n${intro}\n\n` +
    links.map((f) => `- ${f.name}: ${f.url}`).join("\n") +
    `\n\nOrder Reference: ${sessionId}\n`;

  await resend.emails.send({
    from,
    to,
    bcc,
    subject: "Your ThreadLock Toolkit download links",
    html,
    text,
  });
}

// simple HTML escape for link text
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  // Choose the correct webhook secret based on the key in use
  const endpointSecret = isStripeTest
    ? process.env.STRIPE_WEBHOOK_SECRET_TEST
    : process.env.STRIPE_WEBHOOK_SECRET;

  if (!endpointSecret) {
    console.error("⚠️ Missing STRIPE_WEBHOOK_SECRET(_TEST) env");
    return res
      .status(500)
      .send("Webhook misconfigured: missing signing secret env");
  }

  let event;
  try {
    const sig = req.headers["stripe-signature"];
    const buf = await buffer(req);
    event = stripeClient.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;

        // Pull buyer email robustly
        const email =
          session.customer_details?.email ||
          session.customer_email ||
          null;

        console.log("✅ checkout.session.completed", session.id, {
          mode: session.mode,
          email,
          customer: session.customer,
        });

        // Generate signed links from Supabase Storage
        const links = await getToolkitSignedUrls();

        if (!links.length) {
          console.warn("No toolkit files found in Supabase.");
        }

        // Email buyer (will throw if no email)
        await sendToolkitEmail({
          to: email,
          sessionId: session.id,
          links,
        });

        break;
      }

      case "payment_intent.succeeded": {
        const pi = event.data.object;
        console.log("💸 payment_intent.succeeded", pi.id);
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object;
        console.log(`🔁 ${event.type}`, sub.id);
        break;
      }

      default:
        console.log("ℹ️ Unhandled event:", event.type);
    }
  } catch (err) {
    console.error("⚠️ Webhook handler error:", err);
    return res.status(500).send("Webhook handler error");
  }

  return res.json({ received: true });
}
