// /pages/api/webhook.js
import { buffer } from "micro";
import { stripeClient } from "@/lib/stripeEnv";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export const config = { api: { bodyParser: false } };

/* ---------- env + clients ---------- */
const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY, // server-only, required for signing links reliably
  { auth: { persistSession: false } }
);

const BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "toolkit";
const PREFIX = (() => {
  const p = (process.env.SUPABASE_TOOLKIT_PREFIX || "").trim();
  if (!p) return "";                     // root of bucket
  return p.endsWith("/") ? p : p + "/";  // ensure trailing slash
})();
const LINK_TTL_HOURS = parseInt(process.env.LINK_TTL_HOURS || "24", 10);

/* Map slug -> filename substring(s) (case-insensitive) */
const SLUG_PATTERNS = {
  "common-mistakes":    ["avoiding common mistakes in court.pdf"],
  "basic-motion":       ["basic motion template.pdf"],
  "case-timeline":      ["case event timeline worksheet.pdf"],
  "common-response":    ["common legal response timelines.pdf"],
  "cross-exam":         ["direct & cross-examination planning.pdf"],
  "evidence-log":       ["evidence tracking log.pdf"],
  "find-rules":         ["finding the right court rules.pdf"],
  "pre-hearing":        ["pre-hearing preparation checklist.pdf"],
  "proof-of-service":   ["proof of service tracker.pdf"],
  "trial-quick-ref":    ["trial & hearing quick reference.pdf"],
  // "toolkit" handled specially (all files)
};

/* ---------- helpers ---------- */
async function verifyStripeEvent(req) {
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  const candidates = [
    ["STRIPE_WEBHOOK_SECRET_TEST", process.env.STRIPE_WEBHOOK_SECRET_TEST],
    ["STRIPE_WEBHOOK_SECRET_LIVE", process.env.STRIPE_WEBHOOK_SECRET_LIVE || process.env.STRIPE_WEBHOOK_SECRET],
  ].filter(([, v]) => !!v);

  if (!candidates.length) {
    throw new Error("Missing STRIPE_WEBHOOK_SECRET_TEST and STRIPE_WEBHOOK_SECRET_LIVE envs");
  }

  let lastErr;
  for (const [name, secret] of candidates) {
    try {
      const event = stripeClient.webhooks.constructEvent(buf, sig, secret);
      event._verified_with = name;
      return event;
    } catch (err) {
      lastErr = err;
    }
  }
  throw new Error(`Webhook signature failed for all secrets: ${lastErr?.message || "unknown error"}`);
}

async function listBucket() {
  const { data, error } = await supabase.storage.from(BUCKET).list(PREFIX || undefined, {
    limit: 200,
    offset: 0,
  });
  if (error) throw new Error(`Supabase list error: ${error.message}`);
  return data || [];
}

async function signPaths(names) {
  const ttl = LINK_TTL_HOURS * 3600;
  const out = [];
  for (const name of names) {
    const path = PREFIX ? `${PREFIX}${name}` : name;
    const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, ttl);
    if (error) throw new Error(`Signed URL error for ${name}: ${error.message}`);
    out.push({ name, url: data.signedUrl });
  }
  return out;
}

async function getLinksForSlug(slug) {
  if (!slug) return [];
  const all = await listBucket();
  const names = all.map((f) => f.name);

  if (slug === "toolkit") {
    // send everything in the bucket (root or prefix)
    return signPaths(names);
  }
  const pats = (SLUG_PATTERNS[slug] || []).map((s) => s.toLowerCase());
  if (!pats.length) return [];

  const selected = names.filter((n) => {
    const ln = n.toLowerCase();
    return pats.some((p) => ln.includes(p));
  });

  return signPaths(selected);
}

function renderEmail({ email, links, session, slug }) {
  const ref = session.id;
  const expires = LINK_TTL_HOURS;
  const listHtml = links.length
    ? `<ul>${links
        .map(
          ({ name, url }) =>
            `<li style="margin:6px 0"><a href="${url}" target="_blank" rel="noopener">${name}</a></li>`
        )
        .join("")}</ul>`
    : `<p>No downloads for this purchase. If this seems wrong, reply to this email.</p>`;

  return {
    subject: links.length ? "Your ThreadLock Toolkit is ready" : "Thanks for your purchase",
    html: `
      <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.45">
        <h2>Your ThreadLock Toolkit is ready 🎉</h2>
        <p>Thanks for your purchase${
          email ? `, ${email}` : ""
        }. Download links are below (valid for ${expires} hours):</p>
        ${listHtml}
        <p style="color:#64748b;font-size:13px;margin-top:18px">
          Order Reference: ${ref}<br/>
          Need help? Reply to this email.
        </p>
      </div>`,
    text:
      (links.length
        ? `Your ThreadLock Toolkit is ready.\n\n` +
          links.map((l) => `• ${l.name}: ${l.url}`).join("\n") +
          `\n\nLinks valid for ${expires} hours.\nOrder Reference: ${ref}`
        : `Thanks for your purchase.\nOrder Reference: ${ref}`),
  };
}

/* ---------- webhook handler ---------- */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  let event;
  try {
    event = await verifyStripeEvent(req);
  } catch (err) {
    console.error("❌ Signature error:", err.message);
    return res.status(400).send("Invalid signature");
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const email =
          session.customer_details?.email || session.customer_email || null;
        const slug = session.metadata?.slug || null;

        console.log("✅ checkout.session.completed", {
          id: session.id,
          email,
          slug,
          verifiedWith: event._verified_with,
        });

        // Build links (toolkit or single items)
        let links = [];
        try {
          links = await getLinksForSlug(slug);
        } catch (e) {
          console.error("Supabase error:", e.message);
          throw e; // return 500 so Stripe retries
        }

        // Send email via Resend
        try {
          const { subject, html, text } = renderEmail({ email, links, session, slug });
          if (!email) {
            console.warn("⚠️ No customer email on session", session.id);
          } else {
            await resend.emails.send({
              from: process.env.EMAIL_FROM || "ThreadLock <info@threadlock.ai>",
              to: email,
              reply_to: process.env.EMAIL_REPLY_TO || undefined,
              subject,
              html,
              text,
            });
          }
        } catch (e) {
          console.error("Resend error:", e.message);
          throw e; // 500 => Stripe retries
        }

        break;
      }

      // optional: log others for visibility
      default:
        console.log("ℹ️ Unhandled event:", event.type);
    }
  } catch (err) {
    console.error("⚠️ Webhook handler error:", err);
    return res.status(500).send("Webhook handler error");
  }

  return res.json({ received: true });
}
