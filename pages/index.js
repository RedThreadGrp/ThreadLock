import React, { useState } from "react";

/* ---------------- SVG Icons ---------------- */
const BrainCircuitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.23"/><path d="M18.668 15.65a3 3 0 1 0-5.993.23"/><path d="M12 12a3 3 0 1 0-5.993.23"/><path d="M12 19a3 3 0 1 0-5.993.23"/><path d="M18.668 8.65a3 3 0 1 0-5.993.23"/><path d="M12 5a3 3 0 1 0 5.993.23"/><path d="m12 12 2.5 2.5"/><path d="m12 5-2.5 2.5"/><path d="m18.5 8.5 2.5 2.5"/><path d="m12 19 2.5-2.5"/><path d="m6.5 8.5-2.5 2.5"/></svg>
);
const ShieldCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
);
const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);

/* ---------------- Single-PDF SKUs (client display only) ---------------- */
const SINGLE_ITEMS = [
  { sku: "avoiding_common_mistakes", name: "Avoiding Common Mistakes in Court" },
  { sku: "basic_motion_template", name: "Basic Motion Template" },
  { sku: "case_event_timeline", name: "Case Event Timeline Worksheet" },
  { sku: "common_response_timelines", name: "Common Legal Response Timelines" },
  { sku: "cross_exam_planning", name: "Direct & Cross-Examination Planning" },
  { sku: "evidence_log", name: "Evidence Tracking Log" },
  { sku: "find_court_rules", name: "Finding the Right Court Rules" },
  { sku: "pre_hearing_checklist", name: "Pre-Hearing Preparation Checklist" },
  { sku: "proof_of_service_tracker", name: "Proof of Service Tracker" },
  { sku: "trial_hearing_quick_ref", name: "Trial & Hearing Quick Reference" },
];

/* ---------------- UI Mockups (slightly smaller) ---------------- */
const JournalUIMockup = () => (
  <div className="w-full h-full bg-slate-800 rounded-xl p-3 md:p-4 flex flex-col md:flex-row gap-3 text-white">
    <div className="w-full md:w-1/3 bg-slate-700/50 rounded-lg p-3">
      <h4 className="font-bold mb-2 text-xs md:text-sm">AI Suggestions</h4>
      <ul className="space-y-2 text-[11px] md:text-xs text-slate-300">
        <li className="bg-slate-600/50 p-2 rounded">Who was present?</li>
        <li className="bg-slate-600/50 p-2 rounded">What was the date and time?</li>
        <li className="bg-slate-600/50 p-2 rounded">Is there photo evidence?</li>
      </ul>
    </div>
    <div className="w-full md:w-2/3 bg-slate-700/50 rounded-lg p-3 flex flex-col">
      <h4 className="font-bold mb-2 text-xs md:text-sm">New Journal Entry</h4>
      <div className="flex-grow bg-slate-600/40 rounded p-2 text-[11px] md:text-xs text-slate-400">
        On Friday evening, the other party was 30 minutes late for the custody exchange...
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <button className="text-[11px] bg-slate-600 px-3 py-1 rounded">Attach File</button>
        <button className="text-[11px] bg-orange-500 px-3 py-1 rounded">Save Entry</button>
      </div>
    </div>
  </div>
);

const TimelineUIMockup = () => (
  <div className="w-full h-full bg-slate-800 rounded-xl p-3 md:p-4 flex flex-col text-white">
    <h4 className="font-bold text-xs md:text-sm mb-3 text-center">Evidence Timeline</h4>
    <div className="relative flex-grow pl-6 pr-3">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-600"></div>
      <div className="space-y-3">
        <div className="relative">
          <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="bg-slate-700/50 p-2 rounded-lg text-[11px]">
            <p className="font-semibold">Custody Exchange Late</p>
            <p className="text-slate-400">July 26, 2025 - 6:30 PM</p>
            <span className="text-green-400 text-[10px] flex items-center gap-1"><ShieldCheckIcon className="w-3 h-3"/> Blockchain Verified</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="bg-slate-700/50 p-2 rounded-lg text-[11px]">
            <p className="font-semibold">Email Received</p>
            <p className="text-slate-400">July 25, 2025 - 9:15 AM</p>
            <span className="text-green-400 text-[10px] flex items-center gap-1"><ShieldCheckIcon className="w-3 h-3"/> Blockchain Verified</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PdfExportUIMockup = () => (
  <div className="w-full h-full bg-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-white">
    <h4 className="font-bold text-xs md:text-sm mb-3">Court-Ready PDF Export</h4>
    <div className="w-4/5 md:w-3/4 h-56 md:h-64 bg-white rounded-md shadow-lg p-3 text-black flex flex-col">
      <h5 className="text-[11px] font-bold border-b pb-1">Case Summary: Sarah M.</h5>
      <p className="text-[9px] mt-2 text-slate-700 leading-tight">
        <strong>July 26, 2025:</strong> Custody Exchange Late. On Friday evening, the other party was 30 minutes late...
      </p>
      <p className="text-[9px] mt-2 text-slate-700 leading-tight">
        <strong>July 25, 2025:</strong> Email Received. Received a hostile email regarding scheduling...
      </p>
      <div className="flex-grow" />
      <p className="text-[8px] text-center text-slate-500">Page 1 of 5</p>
    </div>
    <button className="text-[11px] bg-orange-500 px-4 py-1.5 rounded-md mt-3">Download PDF</button>
  </div>
);

/* ---------------- Header (updated gradient + size + TM removed) ---------------- */
const Header = ({ handleBuyToolkit, isLoading }) => (
  <header
    className="fixed top-0 left-0 w-full z-20 p-4
               bg-gradient-to-r from-slate-600/30 via-slate-800/55 to-slate-900/85
               backdrop-blur-md border-b border-white/10"
  >
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img
          src="/threadlock-logo.png"
          alt="ThreadLock"
          className="h-16 md:h-20 lg:h-24 w-auto"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/160x64/1e293b/f97316?text=ThreadLock'; }}
        />
      </div>
      <nav className="hidden md:flex space-x-6 text-white font-medium items-center">
        <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
        <a href="#showcase" className="hover:text-orange-400 transition-colors">Showcase</a>
        <a href="#stats" className="hover:text-orange-400 transition-colors">Stats</a>
        <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
        <a href="https://blog.threadlock.ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Blog</a>
        <button
          onClick={handleBuyToolkit}
          disabled={isLoading}
          className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out disabled:bg-orange-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "..." : "Get the $97 Toolkit"}
        </button>
      </nav>
    </div>
  </header>
);

/* ---------------- Sections ---------------- */
const HeroSection = ({ handleBuyToolkit, isLoading }) => (
  <section className="relative text-white bg-slate-900">
    {/* push content below fixed header; add extra bottom padding and kinder line-height */}
    <div className="container mx-auto px-6 pt-36 md:pt-44 pb-10 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
        Take Control of Your Family Law Case
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-300">
        The Court-Ready Toolkit gets you organized now. Founders get lifetime perks when the product launches.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleBuyToolkit}
          disabled={isLoading}
          className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:bg-orange-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Processing..." : "Get the $97 Toolkit"}
        </button>
        <a
          href="#pricing"
          className="border border-slate-600 px-8 py-3 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-colors"
        >
          See All Options
        </a>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-2xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Build Evidence the Smart Way</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12 md:mb-16">
        Our platform is designed to make evidence collection simple, secure, and stress-free.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="AI-Guided Journaling">
          Never miss a crucial detail. Our AI guides you to capture the specific, legally-relevant facts for your case.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Immutable & Secure">
          Entries are anchored for integrity—creating a record that stands up to scrutiny.
        </FeatureCard>
        <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Court-Ready Exports">
          Export clean timelines and summaries that a judge can actually read.
        </FeatureCard>
      </div>
    </div>
  </section>
);

const ProductShowcaseSection = () => {
  const slides = [
    { title: "AI-Guided Journaling", description: "Smart prompts capture the right details fast.", mockup: <JournalUIMockup /> },
    { title: "Immutable Timeline", description: "A chronological view that can’t be hand-waved away.", mockup: <TimelineUIMockup /> },
    { title: "Court-Ready Exports", description: "Professional PDFs in minutes—not hours.", mockup: <PdfExportUIMockup /> },
  ];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section id="showcase" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">See ThreadLock in Action</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          A quick look at how key features help you build a stronger case.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Mockup Container (scaled down) */}
          <div className="bg-slate-200 rounded-2xl shadow-2xl p-3 md:p-4">
            <div className="scale-90 md:scale-95 origin-center">{slides[idx].mockup}</div>
          </div>

          {/* Description + Controls */}
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left md:w-1/2 md:pr-8 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{slides[idx].title}</h3>
              <p className="text-slate-600">{slides[idx].description}</p>
            </div>
            <div className="flex items-center justify-center gap-4 shrink-0 order-1 md:order-2">
              <button onClick={prev} className="p-3 rounded-full bg-white shadow-md hover:bg-slate-100 transition">
                <ChevronLeftIcon className="h-6 w-6 text-slate-700" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${idx === i ? "bg-orange-500" : "bg-slate-300 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-3 rounded-full bg-white shadow-md hover:bg-slate-100 transition">
                <ChevronRightIcon className="h-6 w-6 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatisticsSection = () => (
  <section id="stats" className="py-20 md:py-24 bg-slate-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
        The Scope of the Problem
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 md:mb-16">
        Family law cases overwhelm courts, and most involve people navigating the system alone.
      </p>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto">
        <div className="border border-slate-700/50 bg-slate-800/30 p-8 rounded-xl">
          <h3 className="text-5xl font-extrabold text-orange-400">3.8M+</h3>
          <p className="text-slate-400 mt-2 font-medium">Family law cases filed annually in the U.S.</p>
        </div>
        <div className="border border-slate-700/50 bg-slate-800/30 p-8 rounded-xl">
          <h3 className="text-5xl font-extrabold text-orange-400">72%</h3>
          <p className="text-slate-400 mt-2 font-medium">Include at least one self-represented party</p>
        </div>
        <div className="border border-slate-700/50 bg-slate-800/30 p-8 rounded-xl">
          <h3 className="text-5xl font-extrabold text-orange-400">&gt;50%</h3>
          <p className="text-slate-400 mt-2 font-medium">Of evidence is disorganized or incomplete</p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Pricing ---------------- */
const PricingSection = ({
  onBuyToolkit,
  onBuyFounders,
  onPickSingle,
  onContribMonthly,
  onContribNYOP,
}) => (
  <section id="pricing" className="py-20 md:py-24 bg-slate-50 text-center text-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Pricing</h2>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
        Pick what you need now. Upgrade later without paying twice.
      </p>

      <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* $97 Toolkit */}
        <div className="bg-white rounded-2xl shadow-xl border border-orange-300 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Complete Court-Ready Toolkit</h3>
          <p className="text-slate-500 mb-6">All printables now + Founding Member perks at launch</p>
          <div className="text-5xl font-extrabold text-slate-900 mb-1">$97</div>
          <ul className="text-left text-slate-600 mt-6 space-y-2">
            <li>• 10+ premium templates (PDF + editable)</li>
            <li>• Step-by-step guides + videos</li>
            <li>• Lifetime SaaS discount + beta access</li>
          </ul>
          <button onClick={onBuyToolkit} className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg shadow-md transition-all">
            Get the Full Toolkit
          </button>
          <p className="text-xs text-slate-400 mt-3">One-time payment.</p>
        </div>

        {/* $21 Founders Only */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Founders Access Only</h3>
          <p className="text-slate-500 mb-6">Perks only—no printables today</p>
          <div className="text-5xl font-extrabold text-slate-900 mb-1">$21</div>
        <ul className="text-left text-slate-600 mt-6 space-y-2">
            <li>• Lifetime SaaS discount</li>
            <li>• Early beta access</li>
            <li>• Founding Member recognition</li>
          </ul>
          <button onClick={onBuyFounders} className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-lg shadow-md transition-all">
            Get Founders Access
          </button>
          <p className="text-xs text-slate-400 mt-3">Upgrade to Toolkit anytime.</p>
        </div>

        {/* $15 Single PDF */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Single Downloadable</h3>
          <p className="text-slate-500 mb-6">Buy an individual worksheet or pack</p>
          <div className="text-5xl font-extrabold text-slate-900 mb-1">$15</div>
          <ul className="text-left text-slate-600 mt-6 space-y-2">
            <li>• Choose the exact tool you need</li>
            <li>• Immediate download via email</li>
            <li>• $15 credit if you upgrade to Toolkit*</li>
          </ul>
          <button onClick={onPickSingle} className="mt-8 w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 font-semibold py-4 rounded-lg shadow-md transition-all">
            Choose a Single Tool
          </button>
          <p className="text-[11px] text-slate-400 mt-3">
            *We’ll auto-apply your $15 toward the $97 Toolkit within 30 days.
          </p>
        </div>

        {/* Support */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Support the Build</h3>
          <p className="text-slate-500 mb-6">No deliverables—just momentum</p>
          <div className="text-3xl font-extrabold text-slate-900 mb-1">$2/mo</div>
          <p className="text-slate-500 mb-6">or name your own one-time amount</p>
          <div className="grid grid-cols-1 gap-3">
            <button onClick={onContribMonthly} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg shadow-md transition-all">
              Contribute $2 / month
            </button>
            <button onClick={onContribNYOP} className="w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 font-semibold py-3 rounded-lg shadow-md transition-all">
              Name-Your-Price (one-time)
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-3">Thank you. Seriously.</p>
        </div>
      </div>
    </div>
  </section>
);

const CallToActionSection = ({ handleBuyToolkit, isLoading }) => (
  <section className="bg-slate-800 text-white py-16 md:py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Your Case Today</h2>
      <p className="mb-8 max-w-xl mx-auto text-slate-300">
        Your evidence matters. ThreadLock helps you document, secure, and present it clearly—without the stress.
      </p>
      <button
        onClick={handleBuyToolkit}
        disabled={isLoading}
        className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:bg-orange-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : "Get the $97 Toolkit"}
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock. All rights reserved.</p>
  </footer>
);

/* ---------------- Modal for Single-PDF selection ---------------- */
function SingleItemModal({ open, onClose, onSelect }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">Choose a Single Tool</h3>
        <p className="text-slate-600 mb-4">Each item is $15. You’ll get the download link by email after checkout.</p>
        <div className="max-h-80 overflow-y-auto divide-y">
          {SINGLE_ITEMS.map((item) => (
            <button
              key={item.sku}
              onClick={() => onSelect(item.sku)}
              className="w-full text-left py-3 px-2 hover:bg-slate-50"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 rounded bg-slate-200 hover:bg-slate-300 text-slate-900">Close</button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main Page ---------------- */
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [singleOpen, setSingleOpen] = useState(false);

  const handleBuyToolkit = async () => {
    setIsLoading(true);
    try {
      const r = await fetch("/api/create-checkout-session", { method: "POST" });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Checkout error");
      window.location.href = j.url;
    } catch (e) {
      alert(e.message || "Unable to start checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuyFounders = async () => {
    setIsLoading(true);
    try {
      const r = await fetch("/api/create-checkout-session-founder", { method: "POST" });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Checkout error");
      window.location.href = j.url;
    } catch (e) {
      alert(e.message || "Unable to start checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePickSingle = () => setSingleOpen(true);

  const handleBuySingle = async (sku) => {
    setSingleOpen(false);
    setIsLoading(true);
    try {
      const r = await fetch(`/api/create-checkout-session-item?sku=${encodeURIComponent(sku)}`, { method: "POST" });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Checkout error");
      window.location.href = j.url;
    } catch (e) {
      alert(e.message || "Unable to start checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContribMonthly = async () => {
    setIsLoading(true);
    try {
      const r = await fetch(`/api/create-checkout-session-contribute?kind=monthly`, { method: "POST" });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Checkout error");
      window.location.href = j.url;
    } catch (e) {
      alert(e.message || "Unable to start checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContribNYOP = async () => {
    setIsLoading(true);
    try {
      const r = await fetch(`/api/create-checkout-session-contribute?kind=nyop`, { method: "POST" });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Checkout error");
      window.location.href = j.url;
    } catch (e) {
      alert(e.message || "Unable to start checkout.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <Header handleBuyToolkit={handleBuyToolkit} isLoading={isLoading} />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection handleBuyToolkit={handleBuyToolkit} isLoading={isLoading} />
        <FeaturesSection />
        <ProductShowcaseSection />
        <StatisticsSection />
        <PricingSection
          onBuyToolkit={handleBuyToolkit}
          onBuyFounders={handleBuyFounders}
          onPickSingle={handlePickSingle}
          onContribMonthly={handleContribMonthly}
          onContribNYOP={handleContribNYOP}
        />
        <CallToActionSection handleBuyToolkit={handleBuyToolkit} isLoading={isLoading} />
      </main>
      <Footer />
      <SingleItemModal open={singleOpen} onClose={() => setSingleOpen(false)} onSelect={handleBuySingle} />
    </div>
  );
}
