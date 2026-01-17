import { useState } from "react";
import Head from "next/head";

export default function BenefitsPage() {
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
      const response = await fetch("/api/sovereign-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
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
            source: "threadlock.ai/benefits",
          });
          
          console.log("✅ Inquiry stored in Firestore");
        } catch (firebaseError) {
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
    <div className="bg-slate-950 text-slate-50 antialiased min-h-screen">
      <Head>
        <title>The Hidden Cost of Family Court | ThreadLock for Employers</title>
        <meta
          name="description"
          content="Understanding the operational impact of family court involvement on employees. Learn how ThreadLock can be offered as a workplace benefit to support affected staff."
        />
        <link rel="canonical" href="https://threadlock.ai/benefits" />
        <meta property="og:title" content="The Hidden Cost of Family Court | ThreadLock for Employers" />
        <meta
          property="og:description"
          content="Understanding the operational impact of family court involvement on employees. Learn how ThreadLock can be offered as a workplace benefit to support affected staff."
        />
        <meta property="og:url" content="https://threadlock.ai/benefits" />
      </Head>

      <style jsx>{`
        .print-color-exact {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        @media print {
          @page { 
            size: A4; 
            margin: 1cm; 
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 pt-8 pb-6 border-b border-slate-700/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-2xl">T</span>
              </div>
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-white">Thread</span><span className="text-orange-500">Lock</span>
              </span>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400 border border-slate-600 px-4 py-2 rounded-full bg-slate-800/50">
              Workplace Insights Report
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            The Hidden Cost of <span className="text-orange-500">Family Court</span>
          </h1>

          <div className="relative pl-6 py-3 border-l-4 border-orange-500 bg-slate-800/30 rounded-r-lg max-w-4xl">
            <p className="text-slate-300 text-base md:text-lg italic leading-relaxed">
              Beyond the visible hours spent in court and preparing documents, family court proceedings create cascading effects: stress-induced productivity loss, illness-related absences, and operational disruption.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Employer Impact Metrics */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 flex flex-col items-center text-center">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Total Impact</div>
              <div className="text-6xl leading-none font-black text-orange-500 mb-2">340</div>
              <div className="text-white font-semibold text-lg mb-1">Hours Lost</div>
              <div className="text-slate-500 text-sm">Per impacted employee annually</div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 flex flex-col items-center text-center">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Hidden Costs</div>
              <div className="text-6xl leading-none font-black text-orange-500 mb-2">$23K</div>
              <div className="text-white font-semibold text-lg mb-1">Cost Per Case</div>
              <div className="text-slate-500 text-sm">Beyond legal fees</div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 flex flex-col items-center text-center">
              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Avg Duration</div>
              <div className="text-6xl leading-none font-black text-orange-500 mb-2">14</div>
              <div className="text-white font-semibold text-lg mb-1">Months Average</div>
              <div className="text-slate-500 text-sm">Case resolution time</div>
            </div>
          </section>

          {/* Impact Breakdown & How ThreadLock Helps */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Where the hours go */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Where the Hours Go</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm print-color-exact bg-orange-500"></div>
                    <span className="text-slate-300">Stress and productivity loss</span>
                  </div>
                  <span className="text-orange-500 font-bold tabular-nums">120h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm print-color-exact bg-orange-400"></div>
                    <span className="text-slate-300">Document preparation</span>
                  </div>
                  <span className="text-orange-500 font-bold tabular-nums">80h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm print-color-exact bg-orange-300"></div>
                    <span className="text-slate-300">Court appearances</span>
                  </div>
                  <span className="text-orange-500 font-bold tabular-nums">48h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm print-color-exact bg-orange-200"></div>
                    <span className="text-slate-300">Illness and leave</span>
                  </div>
                  <span className="text-orange-500 font-bold tabular-nums">40h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm print-color-exact bg-orange-100"></div>
                    <span className="text-slate-300">Legal coordination</span>
                  </div>
                  <span className="text-orange-500 font-bold tabular-nums">32h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-sm print-color-exact bg-slate-600"></div>
                    <span className="text-slate-300">Administrative disruption</span>
                  </div>
                  <span className="text-orange-500 font-bold tabular-nums">20h</span>
                </div>

                <p className="text-xs text-slate-500 italic mt-4 pt-4 border-t border-slate-800">
                  * Conservative composite estimate across preparation, appearances, stress, and illness.
                </p>
              </div>
            </div>

            {/* How ThreadLock Helps */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">How ThreadLock Helps</h3>
                <p className="text-slate-400">Support for affected employees</p>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="text-white text-lg font-semibold mb-1">Reduced administrative burden</div>
                  <div className="text-slate-400 leading-relaxed">
                    Streamlined document organization and case management reduces time employees spend on administrative tasks.
                  </div>
                </div>
                <div>
                  <div className="text-white text-lg font-semibold mb-1">Fewer disruptions and scheduling conflicts</div>
                  <div className="text-slate-400 leading-relaxed">
                    Better planning tools help employees manage court dates and reduce unexpected absences.
                  </div>
                </div>
                <div>
                  <div className="text-white text-lg font-semibold mb-1">Better documentation support</div>
                  <div className="text-slate-400 leading-relaxed">
                    Organized evidence and timeline tools help employees prepare more efficiently for legal proceedings.
                  </div>
                </div>
                <div>
                  <div className="text-white text-lg font-semibold mb-1">Visibility into non-obvious costs</div>
                  <div className="text-slate-400 leading-relaxed">
                    Track the hidden operational impact and demonstrate value of employee support programs.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workforce Prevalence */}
          <section className="bg-slate-900 rounded-2xl px-8 py-10 border border-slate-700 text-center">
            <div className="flex justify-center gap-2 mb-6">
              {/* 1 highlighted icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" className="print-color-exact" aria-label="Affected employee">
                <path d="M20 21a8 8 0 0 0-16 0" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"></path>
                <circle cx="12" cy="8" r="4" fill="#f97316"></circle>
              </svg>

              {/* 9 muted icons */}
              {[...Array(9)].map((_, i) => (
                <svg key={i} width="32" height="32" viewBox="0 0 24 24" aria-label="Unaffected employee">
                  <path d="M20 21a8 8 0 0 0-16 0" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round"></path>
                  <circle cx="12" cy="8" r="4" fill="none" stroke="#334155" strokeWidth="2"></circle>
                </svg>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-white mb-3">
              <span className="text-orange-500">1</span> in <span className="text-orange-500">10</span> Employees Affected
            </h3>

            <p className="text-slate-400 mb-2 max-w-2xl mx-auto leading-relaxed text-lg">
              Statistically, ten percent of your team is navigating complex family dynamics.
            </p>
            <p className="text-slate-200 font-medium text-xl mb-8 max-w-2xl mx-auto">
              Finally, a simple, affordable way to help your employees.
            </p>
          </section>

          {/* Contact Form */}
          <section className="bg-slate-900 rounded-2xl p-8 border border-slate-700 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Learn More About Workplace Benefits</h3>
              <p className="text-slate-400 leading-relaxed">
                Learn how organizations are supporting employees navigating complex family court matters.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                  placeholder="Organization or Nation"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  required
                />
              </div>

              <div>
                <input
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                  placeholder="Name and email"
                  value={formData.nameEmail}
                  onChange={(e) => setFormData({ ...formData, nameEmail: e.target.value })}
                  required
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                  placeholder="Brief description of need"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-600 text-white font-bold px-6 py-4 hover:bg-orange-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Request Information"}
              </button>

              <div className="text-sm text-slate-400 text-center">
                Messages go directly to info@threadlock.ai
              </div>

              {formMessage && (
                <div
                  className={`text-sm text-center ${
                    formStatus === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formMessage}
                </div>
              )}
            </form>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-6 border-t border-slate-800">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} ThreadLock. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
