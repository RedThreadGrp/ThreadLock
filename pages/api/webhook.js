// /pages/api/webhook.js
import { buffer } from "micro";
import { stripeClient, isStripeTest } from "@/lib/stripeEnv";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const config = {
  api: { bodyParser: false }, // raw body required for Stripe signature verification
};

/* ========= Supabase helpers ========= */

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

function normPrefix(p = "toolkit/") {
  const s = String(p).replace(/^\/+/, "").replace(/\/+$/, "");
  return s ? `${s}/` : "";
}

// Returns [{name, url}], throws loudly on failure/empty
async function getToolkitSignedUrls() {
  const supabase = getSupabaseAdmin();
  const bucket = process.env.SUPABASE_STORAGE_BUCKET;
  const prefix = normPrefix(process.env.SUPABASE_TOOLKIT_PREFIX || "toolkit/");

  if (!bucket) throw new Error("Missing SUPABASE_STORAGE_BUCKET");

  console.log("Supabase list ->", { bucket, prefix });
  const { data: files, error: listErr } = await supabase.storage
    .from(bucket)
    .list(prefix, { limit: 200, offset: 0 });

  if (listErr) throw listErr;
  if (!files || files.length === 0) {
    throw new Error(`No files found at bucket='${bucket}' prefix='${prefix}'`);
  }

  const paths = files
    .filter((f) => f && f.name && !f.name.endsWith("/"))
    .map((f) => `${prefix}${f.name}`);

  const expiresIn = 60 * 60 * 24; // 24h

  // Try bulk API first
  let signed = [];
  let bulkErr = null;
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrls(paths, expiresIn);
    if (error) throw error;
    signed = (data || []).filter((s) => s?.signedUrl);
  } catch (e) {
    bulkErr = e;
    console.warn("Bulk createSignedUrls failed → fallback per-file:", e?.message || e);
  }

  // Fallback per-file
  if (!signed.length) {
    const perFile = [];
    for (const p of paths) {
      const { data, error } = await supabase.storage
        .from(bucket)
        .createSignedUrl(p, expiresIn);
      if (error) {
        console.warn("Per-file signed URL failed:", p, error.message || error);
        continue;
      }
      perFile.push({ path: p, signedUrl: data?.signedUrl });
    }
    signed = perFile.filter((s) => s?.signedUrl);
  }

  if (!signed.length) {
    throw new Error(`Failed to create signed URLs (bulkErr=${bulkErr?.message || "n/a"})`);
  }

  const links = signed
    .map((s) => ({ name: s.path.replace(prefix, ""), url: s.signedUrl }))
    .sort((a, b) => {
      const aZip = a.name.toLowerCase().endsWith(".zip") ? -1 : 0;
      const bZip = b.name.toLowerCase().endsWith(".zip") ? -1 : 0;
      return aZip - bZip;
    });

  console.log(`Prepared ${links.length} signed URLs`);
  return links;
}

/* ========= Email (Resend) ========= */

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendToolkitEmail({ to, sessionId, links }) {
  if (!to) throw new Error("Missing recipient email");
  if (!links?.length) throw new Error("No deliverables found to email.");

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
      <p style="margin:0 0 4px">Order Reference: <strong>${escapeHtml(sessionId)}</strong></p>
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

/* ========= Webhook ========= */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  const endpointSecret = isStripeTest
    ? process.env.STRIPE_WEBHOOK_SECRET_TEST
    : process.env.STRIPE_WEBHOOK_SECRET;

  if (!endpointSecret) {
    console.error("Missing STRIPE_WEBHOOK_SECRET(_TEST)");
    return res.status(500).send("Webhook misconfigured");
  }

  let event;
  try {
    const sig = req.headers["stripe-signature"];
    const buf = await buffer(req);
    event = stripeClient.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const email =
          session.customer_details?.email ||
          session.customer_email ||
          null;

        console.log("✅ checkout.session.completed", session.id, {
          mode: session.mode,
          email,
          customer: session.customer,
        });

        const links = await getToolkitSignedUrls(); // throws if empty
        await sendToolkitEmail({ to: email, sessionId: session.id, links });
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
