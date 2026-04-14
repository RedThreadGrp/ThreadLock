import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "@/src/components/SiteHeader";

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
          const { app } = await import("../src/lib/firebase");
          if (!app) throw new Error("Firebase app not initialized");
          const db = getFirestore(app);
          await addDoc(collection(db, "sovereign_inquiries"), {
            organization: formData.organization,
            nameEmail: formData.nameEmail,
            description: formData.description,
            timestamp: new Date().toISOString(),
            source: "threadlock.ai/benefits",
          });
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
    <>
      <Head>
        <title>Employer Benefits | ThreadLock: Managed Civil Legal Support</title>
        <meta
          name="description"
          content="Reduce bottom-line losses via managed civil legal support. ThreadLock fills the gap where traditional legal plans stop. Scalable pricing for workforces of 50 to 50,000+."
        />
        <link rel="canonical" href="https://threadlock.ai/benefits" />
        <meta property="og:title" content="Employer Benefits | ThreadLock: Managed Civil Legal Support" />
        <meta
          property="og:description"
          content="Reduce bottom-line losses via managed civil legal support. ThreadLock fills the gap where traditional legal plans stop. Scalable pricing for workforces of 50 to 50,000+."
        />
        <meta property="og:url" content="https://threadlock.ai/benefits" />
      </Head>

      <SiteHeader theme="dark" />

      <div className="bg-slate-950 text-slate-50 antialiased min-h-screen pt-16">

        {/* ── Hero ── */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 pt-10 pb-8 border-b border-slate-700/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="benefits-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#benefits-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-slate-400 border border-slate-600 px-4 py-2 rounded-full bg-slate-800/50 mb-5">
              Employer Benefits Program
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
              Reducing Bottom-Line Losses via{" "}
              <span className="text-orange-500">Managed Civil Legal Support.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-7">
              Personal legal stress is a primary driver of presenteeism and absenteeism. ThreadLock fills the gap where traditional legal plans stop.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transition-all"
              >
                Request a Custom Quote
              </Link>
              <p className="text-slate-400 text-sm">
                Scalable pricing for workforces of 50 to 50,000+.
              </p>
            </div>
          </div>
        </header>

        <main className="px-6 py-16">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* ── The Stress Tax ── */}
            <section aria-labelledby="stress-tax-heading">
              <div className="text-center mb-10">
                <h2 id="stress-tax-heading" className="text-3xl md:text-4xl font-black text-white mb-3">
                  The <span className="text-orange-500">"Stress Tax"</span> on Your Workforce
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Unresolved civil legal matters don't stay home. They follow your employees to work.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Productivity Drain</div>
                  <div className="text-6xl leading-none font-black text-orange-500 mb-3">56%</div>
                  <p className="text-slate-300 leading-relaxed">
                    Of legally stressed employees spend 3+ hours per week at work managing personal crises.
                  </p>
                  <p className="text-slate-500 text-xs mt-4">Source: PwC 2023</p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Retention Risk</div>
                  <div className="text-6xl leading-none font-black text-orange-500 mb-3">2X</div>
                  <p className="text-slate-300 leading-relaxed">
                    Stressed employees are twice as likely to be actively seeking new employment (36% vs 18%).
                  </p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">The Justice Gap</div>
                  <div className="text-6xl leading-none font-black text-orange-500 mb-3">92%</div>
                  <p className="text-slate-300 leading-relaxed">
                    Of civil legal needs go unmet because they fall below the attorney threshold or involve self-representation.
                  </p>
                  <p className="text-slate-500 text-xs mt-4">Source: LSC 2022</p>
                </div>
              </div>
            </section>

            {/* ── ROI Analysis ── */}
            <section aria-labelledby="roi-heading">
              <div className="text-center mb-10">
                <h2 id="roi-heading" className="text-3xl md:text-4xl font-black text-white mb-3">
                  Representative ROI Analysis
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  The 1,000-Employee Model
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Pane: The Math */}
                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
                    The Math
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                      <dt className="text-slate-400">Sample Group</dt>
                      <dd className="text-white font-semibold">1,000 Employees</dd>
                    </div>
                    <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                      <dt className="text-slate-400">Affected Population</dt>
                      <dd className="text-white font-semibold">~125 <span className="text-slate-500 font-normal text-sm">(1 in 8)</span></dd>
                    </div>
                    <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                      <dt className="text-slate-400">Baseline Productivity Loss</dt>
                      <dd className="text-white font-semibold">$682,500</dd>
                    </div>
                    <div className="flex justify-between items-start pt-2">
                      <dt className="text-slate-300 font-semibold">ROI Highlight</dt>
                      <dd className="text-orange-500 font-black text-xl text-right">
                        <span className="block">2,356%</span>
                        <span className="block text-sm font-normal text-slate-400">Est. Annual ROI for Enterprise Tiers</span>
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Right Pane: Recovery Table */}
                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
                    Recovery Potential
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-800">
                          <th className="text-left text-slate-400 font-semibold pb-3">Recovery Category</th>
                          <th className="text-right text-slate-400 font-semibold pb-3">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="py-3 text-slate-300">
                            Productivity Recovery
                            <span className="block text-slate-500 text-xs">15% reduction</span>
                          </td>
                          <td className="py-3 text-right text-white font-semibold">$102,375</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-slate-300">
                            Turnover Avoidance
                            <span className="block text-slate-500 text-xs">2 resignations</span>
                          </td>
                          <td className="py-3 text-right text-white font-semibold">$40,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-slate-300">
                            Admin Efficiency
                            <span className="block text-slate-500 text-xs">HR/Payroll</span>
                          </td>
                          <td className="py-3 text-right text-white font-semibold">$5,000</td>
                        </tr>
                        <tr className="border-t-2 border-orange-500/40">
                          <td className="pt-4 pb-1 text-white font-bold">Total Savings Potential</td>
                          <td className="pt-4 pb-1 text-right text-orange-500 font-black text-lg">$147,375</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-500 text-xs mt-6 leading-relaxed italic">
                    Actual ROI varies based on group size and industry. Calculations based on representative enterprise assumptions.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Traditional Plans vs. ThreadLock ── */}
            <section aria-labelledby="comparison-heading">
              <div className="text-center mb-10">
                <h2 id="comparison-heading" className="text-3xl md:text-4xl font-black text-white mb-3">
                  Traditional Plans vs. <span className="text-orange-500">ThreadLock</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  See why the legacy model leaves most legal needs unaddressed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traditional Plans */}
                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                  <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-6">Traditional Plans</h3>
                  <ul className="space-y-4">
                    {[
                      "Premium PEPM Costs",
                      "Attorney-Only Access",
                      "Complex Onboarding",
                      "Excludes Self-Represented Matters",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-300">
                        <svg className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ThreadLock */}
                <div className="bg-slate-900 rounded-2xl p-8 border border-orange-500/40">
                  <h3 className="text-lg font-bold text-orange-500 uppercase tracking-wider mb-6">ThreadLock Difference</h3>
                  <ul className="space-y-4">
                    {[
                      "Accessible Enterprise Pricing",
                      "No Attorney Required",
                      "Single-Day Implementation",
                      "Built for the 80% Justice Gap",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-100">
                        <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── Quiz CTA ── */}
            <section className="bg-slate-900 rounded-2xl px-8 py-10 border border-orange-500/30 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="quiz-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#f97316" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#quiz-grid)" />
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">AI vs. Authentic</p>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Can you spot the difference between AI hallucinations and authentic legal context?
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-7 leading-relaxed">
                  AI-generated court documents can look convincing. See if you can tell the difference between a ThreadLock filing built on verified legal context and one fabricated by an AI hallucination.
                </p>
                <Link
                  href="/quiz"
                  className="inline-block bg-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition-all"
                >
                  Take the Quiz &rarr;
                </Link>
              </div>
            </section>

            {/* ── Vertical Specifics ── */}
            <section aria-labelledby="verticals-heading">
              <div className="text-center mb-10">
                <h2 id="verticals-heading" className="text-3xl md:text-4xl font-black text-white mb-3">
                  Core Case Types We Support
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  ThreadLock is purpose-built for the civil legal matters your employees face most.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                  <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-5">
                    <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Family Court</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Custody, visitation, and support matters, guiding employees through every filing and hearing.
                  </p>
                  <p className="text-slate-500 text-sm italic">
                    70–80% of family court cases involve at least one party with no attorney.
                  </p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                  <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-5">
                    <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Landlord-Tenant</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Eviction defense and habitability claims, helping employees assert their rights without an attorney.
                  </p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
                  <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-5">
                    <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Small Claims</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Debt collection and consumer disputes, empowering employees to pursue or defend claims confidently.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Request a Quote Form ── */}
            <section className="bg-slate-900 rounded-2xl p-8 border border-slate-700 max-w-3xl mx-auto" aria-labelledby="quote-form-heading">
              <div className="text-center mb-8">
                <h2 id="quote-form-heading" className="text-2xl font-bold text-white mb-3">Request a Custom Quote</h2>
                <p className="text-slate-400 leading-relaxed">
                  Tell us about your organization and we&apos;ll build a proposal around your workforce size and industry.
                </p>
                <p className="text-slate-500 text-sm mt-1">No per-employee pricing listed here &mdash; every quote is tailored.</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                    placeholder="Organization name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <input
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                    placeholder="Your name and email"
                    value={formData.nameEmail}
                    onChange={(e) => setFormData({ ...formData, nameEmail: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                    placeholder="Workforce size and any notes for our team"
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
                  {formStatus === "submitting" ? "Sending..." : "Request a Custom Quote"}
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

        {/* Footer is now handled by _app.js */}
      </div>
    </>
  );
}
