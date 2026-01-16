import { useState } from "react";
import Head from "next/head";

export default function SovereignPage() {
  const [formData, setFormData] = useState({
    organization: "",
    nameEmail: "",
    description: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFormMessage("");

    try {
      // First, validate via API endpoint
      const response = await fetch("/api/sovereign-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        // Store in Firebase Firestore using client SDK (following existing pattern)
        try {
          const { getFirestore } = await import("firebase/firestore");
          const { addDoc, collection } = await import("firebase/firestore");
          const { app } = await import("../lib/firebase");
          
          const db = getFirestore(app);
          await addDoc(collection(db, "sovereign_inquiries"), {
            organization: formData.organization,
            nameEmail: formData.nameEmail,
            description: formData.description,
            timestamp: new Date().toISOString(),
            source: "threadlock.ai/sovereign",
          });
          
          console.log("✅ Inquiry stored in Firestore");
        } catch (firebaseError) {
          // Log error but don't fail the submission
          console.warn("Firebase storage failed (non-critical):", firebaseError);
        }

        setFormStatus("success");
        setFormMessage("Thank you. Your inquiry has been sent to our team.");
        setFormData({ organization: "", nameEmail: "", description: "" });
      } else {
        setFormStatus("error");
        setFormMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Unable to send inquiry. Please try again.");
    }
  };

  return (
    <div className="bg-[#0b1220] text-slate-100 antialiased min-h-screen">
      <Head>
        <title>ThreadLock | Sovereign Jurisdiction Case System</title>
        <meta
          name="description"
          content="ThreadLock provides a single, secure place to manage cases, evidence, records, and exports across Tribal Courts and programs."
        />
        <link rel="canonical" href="https://threadlock.ai/sovereign" />
        <meta property="og:title" content="ThreadLock | Sovereign Jurisdiction Case System" />
        <meta
          property="og:description"
          content="ThreadLock provides a single, secure place to manage cases, evidence, records, and exports across Tribal Courts and programs."
        />
        <meta property="og:url" content="https://threadlock.ai/sovereign" />
      </Head>

      <style jsx>{`
        .grid-bg {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.06) 1px,
            transparent 0
          );
          background-size: 22px 22px;
        }

        .glass {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(148, 163, 184, 0.18);
          backdrop-filter: blur(10px);
        }

        .ring-accent {
          box-shadow: 0 0 0 1px rgba(251, 122, 30, 0.35),
            0 10px 30px rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        {/* Subtle backdrop accents */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#fb7a1e]/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#1b3a4d]/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 w-full">
          {/* Pill label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="uppercase tracking-wider">Sovereign jurisdiction case system</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
            ThreadLock is a case management system built for Tribal Nations
          </h1>

          {/* Subhead */}
          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
            It provides a single, secure place to manage cases, evidence, records, and exports
            across Tribal Courts and programs, while keeping control over access, data, and
            governance with each Nation.
          </p>

          {/* Value cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl">
            <div className="glass rounded-xl p-5">
              <div className="text-xs text-slate-400">Autonomy</div>
              <div className="mt-1 font-semibold">Nation defined rules and access</div>
              <p className="mt-2 text-sm text-slate-300">
                Each Nation controls who can see, add, and share case information.
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <div className="text-xs text-slate-400">Security</div>
              <div className="mt-1 font-semibold">Restricted access with audit logs</div>
              <p className="mt-2 text-sm text-slate-300">
                Case activity and administrative actions are recorded and reviewable.
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <div className="text-xs text-slate-400">Clarity</div>
              <div className="mt-1 font-semibold">Organized records and exports</div>
              <p className="mt-2 text-sm text-slate-300">
                Clear case histories reduce confusion across long running matters.
              </p>
            </div>
          </div>

          {/* Two cards side-by-side */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* What ThreadLock includes */}
            <div className="glass rounded-2xl p-6">
              <div className="text-sm font-semibold mb-4">What ThreadLock includes</div>

              <div className="grid grid-cols-1 gap-3 text-sm text-slate-300">
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-200">Case Workspaces</span>
                  <span>Cases, participants, and roles managed in one place</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-slate-200">Evidence and Documents</span>
                  <span>Centralized storage with controlled access</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-slate-200">Chronology and Records</span>
                  <span>Structured timelines and case history</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-slate-200">Controlled Sharing</span>
                  <span>Limited external access without loss of control</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-slate-200">Exports and Reporting</span>
                  <span>Audit ready records for review and oversight</span>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="glass rounded-2xl p-6">
              <div className="text-sm font-semibold mb-3">Contact</div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-[#fb7a1e] text-slate-100 placeholder-slate-400"
                  placeholder="Organization or Nation"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  required
                />

                <input
                  className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-[#fb7a1e] text-slate-100 placeholder-slate-400"
                  placeholder="Name and email"
                  value={formData.nameEmail}
                  onChange={(e) => setFormData({ ...formData, nameEmail: e.target.value })}
                  required
                />

                <textarea
                  rows={4}
                  className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-sm outline-none focus:border-[#fb7a1e] text-slate-100 placeholder-slate-400"
                  placeholder="Brief description of need"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#fb7a1e] text-slate-900 font-extrabold px-4 py-3 hover:brightness-110 transition ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Sending..." : "Send inquiry"}
                </button>

                <div className="text-xs text-slate-400">
                  Messages go directly to info@threadlock.ai
                </div>

                {formMessage && (
                  <div
                    className={`text-sm ${
                      formStatus === "success" ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Footer line */}
          <div className="mt-12 text-xs text-slate-500">
            © {new Date().getFullYear()} ThreadLock. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
