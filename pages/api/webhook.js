// /pages/api/webhook.js  (Next.js Pages router)

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const config = {
  api: { bodyParser: false }, // Required for Stripe raw body verification
};

// --- Clients
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// Map Stripe Price IDs → Supabase file names (bucket: 'toolkit')
const PRICE_TO_FILE = {
  [process.env.FM_TOOLKIT_PRICE_ID]: "ThreadlockToolkit.zip",

  [process.env.PRICE_BASIC_MOTION]: "Basic Motion Template.pdf",
  [process.env.PRICE_TRIAL_QUICK_REF]: "Trial & Hearing Quick Reference.pdf", // duplicate price, same file
  [process.env.PRICE_TRIAL_QUICK_REF_GUIDE]: "Trial & Hearing Quick Reference.pdf", // if present
  [process.env.PRICE_PROOF_OF_SERVICE]: "Proof of Service Tracker.pdf",
  [process.env.PRICE_PRE_HEARING]: "Pre-Hearing Preparation Checklist.pdf",
  [process.env.PRICE_FIND_RULES]: "Finding the Right Court Rules.pdf",
  [process.env.PRICE_EVIDENCE_LOG]: "Evidence Tracking Log.pdf",
  [process.env.PRICE_CROSS_EXAM]: "Direct & Cross-Examination Planning.pdf",
  [process.env.PRICE_COMMON_RESPONSE]: "Common Legal Response Timelines.pdf",
  [process.env.PRICE_CASE_TIMELINE]: "Case Event Timeline Worksheet.pdf",
  [process.env.PRICE_COMMON_MISTAKES]: "Avoiding Common Mistakes in Court.pdf",
};

// --- Raw body helper
async function getRawBody(req) {
  return await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  let event;
  try {
    const buf = await getRawBody(req);
    const sig = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err?.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type !== "checkout.session.completed") {
    return res.json({ received: true });
  }

  try {
    const session = event.data.object;

    // Get full session with line items (to read Price IDs reliably)
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["line_items", "customer"],
    });

    const email =
      fullSession.customer_details?.email ||
      fullSession.customer?.email ||
      session.customer_email ||
      session.metadata?.email ||
      null;

    if (!email) {
      console.error("❌ No email found on session; cannot fulfill.");
      return res.status(400).json({ error: "Missing email" });
    }

    const lineItemPriceIds =
      fullSession?.line_items?.data?.map((li) => li.price?.id).filter(Boolean) || [];

    // --- Decide fulfillment mode (priority: toolkit > single > founders > contribution)
    const ids = new Set(lineItemPriceIds);

    const isToolkit = ids.has(process.env.FM_TOOLKIT_PRICE_ID);
    const isFoundersOnly = process.env.PRICE_FOUNDERS_ONLY && ids.has(process.env.PRICE_FOUNDERS_ONLY);
    const isContribMonthly = process.env.PRICE_SUPPORT_MONTHLY && ids.has(process.env.PRICE_SUPPORT_MONTHLY);
    const isContribNYOP = process.env.PRICE_SUPPORT_NYOP && ids.has(process.env.PRICE_SUPPORT_NYOP);

    let mode = null;        // 'toolkit' | 'single' | 'founders' | 'contrib'
    let fileToSend = null;  // for toolkit/single

    if (isToolkit) {
      mode = "toolkit";
      fileToSend = PRICE_TO_FILE[process.env.FM_TOOLKIT_PRICE_ID];
    } else {
      // find first single-PDF price that maps to a file
      for (const pid of ids) {
        if (PRICE_TO_FILE[pid] && pid !== process.env.FM_TOOLKIT_PRICE_ID) {
          mode = "single";
          fileToSend = PRICE_TO_FILE[pid];
          break; // one-link-only
        }
      }
      if (!mode && isFoundersOnly) mode = "founders";
      if (!mode && (isContribMonthly || isContribNYOP)) mode = "contrib";
    }

    if (!mode) {
      console.log("ℹ️ Purchase did not match any mapped products. Ignoring.");
      return res.json({ received: true });
    }

    // --- Update Supabase flags (toolkit + founders only)
    try {
      if (mode === "toolkit" || mode === "founders") {
        const { error: updateErr } = await supabase
          .from("public.users")
          .update({
            isFoundingMember: true,
            founding_member_since: new Date().toISOString(),
          })
          .eq("email", email);
        if (updateErr) console.error("❌ Supabase update error:", updateErr);
      }
    } catch (e) {
      console.error("⚠️ Supabase flag update failed:", e);
    }

    // --- Create signed URL if needed
    let signedUrl = null;
    if ((mode === "toolkit" || mode === "single") && fileToSend) {
      try {
        const { data: signed, error: signErr } = await supabase.storage
          .from("toolkit")
          .createSignedUrl(fileToSend, 60 * 60); // 1 hour
        if (signErr) {
          console.error("⚠️ Signed URL error:", signErr);
        } else {
          signedUrl = signed?.signedUrl || null;
        }
      } catch (e) {
        console.error("⚠️ Signed URL exception:", e);
      }
    }

    // --- Email composition
    let subject = "";
    let bodyBlock = "";

    if (mode === "toolkit") {
      subject = "Your Court-Ready Toolkit is ready 🔐";
      bodyBlock = signedUrl
        ? `<p style="margin:0 0 20px;color:#E6EDF7;">Thanks for backing ThreadLock. Your full Toolkit is ready.</p>
           <p style="margin:0 0 20px;"><a href="${signedUrl}" style="background:#F58220;color:#000000;text-decoration:none;padding:12px 18px;font-weight:bold;border-radius:4px;display:inline-block;">Download the Toolkit</a></p>
           <p style="margin:0 0 8px;color:#E6EDF7;">Perks included: lifetime SaaS discount, early beta access, and future toolkit updates.</p>`
        : `<p style="margin:0 0 20px;color:#FFD8A8;">We couldn't generate your download link automatically. Reply to this email and we'll reissue it immediately.</p>`;
    } else if (mode === "single") {
      subject = "Your download is ready 🔐";
      bodyBlock = signedUrl
        ? `<p style="margin:0 0 20px;color:#E6EDF7;">Thanks for your purchase. Your file is ready.</p>
           <p style="margin:0 0 20px;"><a href="${signedUrl}" style="background:#F58220;color:#000000;text-decoration:none;padding:12px 18px;font-weight:bold;border-radius:4px;display:inline-block;">Download Now</a></p>`
        : `<p style="margin:0 0 20px;color:#FFD8A8;">We couldn't generate your download link automatically. Reply to this email and we'll reissue it immediately.</p>`;
    } else if (mode === "founders") {
      subject = "You're a Founding Member ✅";
      bodyBlock = `<p style="margin:0 0 12px;color:#E6EDF7;">You're locked in for Founding Member perks. No download for this tier today.</p>`;
    } else if (mode === "contrib") {
      subject = "Thank you for supporting ThreadLock 🙏";
      bodyBlock = `<p style="margin:0 0 12px;color:#E6EDF7;">Your contribution helps us ship faster. There are no deliverables for this purchase.</p>`;
    }

    const htmlEmail = `
    <!DOCTYPE html><html lang="en">
    <body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#0D223F;color:#ffffff;">
      <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#0D223F;">
        <tr><td style="padding:24px;text-align:center;">
          <img src="https://members.threadlock.ai/threadlock-logo.png" alt="ThreadLock" style="height:44px">
        </td></tr>
        <tr><td style="background:#122a4f;padding:28px;">
          <h1 style="margin:0 0 12px;color:#ffffff;">ThreadLock</h1>
          ${bodyBlock}
          <p style="margin:0;color:#9BB1D6;font-size:12px;">If you didn’t intend to purchase, reply to this email.</p>
        </td></tr>
        <tr><td style="padding:18px;text-align:center;color:#9BB1D6;font-size:12px;">
          © ${new Date().getFullYear()} ThreadLock — All rights reserved.
        </td></tr>
      </table>
    </body></html>
    `;

    try {
      await resend.emails.send({
        from: "ThreadLock <info@threadlock.ai>",
        to: [email],
        subject,
        html: htmlEmail,
      });
      console.log(`📧 Email sent to ${email} [mode=${mode}]`);
    } catch (mailErr) {
      console.error("❌ Email send failed:", mailErr?.message || mailErr);
    }

    return res.json({ received: true });
  } catch (e) {
    console.error("❌ Webhook processing error:", e);
    return res.status(500).json({ error: "Webhook processing failed" });
  }
}
