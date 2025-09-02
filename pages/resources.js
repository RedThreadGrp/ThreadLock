import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

/* ---------------- Icon components ---------------- */
const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const GlobeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);
const ChevronDownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

/* ---------------- Image paths (must match /public exactly) ---------------- */
const HERO_IMG = "/man-child-bike.jpg";
const PRICING_IMG = "/woman-window.jpg";

/* ---------------- State Rules data ---------------- */
const STATE_RULES = [
  { name: "Alabama", url: "https://eforms.alacourt.gov/media/d5464e8e-a228-4107-94d3-882245b7a1f5/rules-of-civil-procedure/" },
  { name: "Alaska", url: "https://courts.alaska.gov/rules/rules.htm" },
  { name: "Arizona", url: "https://www.azcourts.gov/rules" },
  { name: "Arkansas", url: "https://courts.arkansas.gov/rules-and-administrative-orders/rules-of-civil-procedure" },
  { name: "California", url: "https://www.courts.ca.gov/rules.htm" },
  { name: "Colorado", url: "https://www.courts.state.co.us/Courts/Supreme_Court/Rule_Categories.cfm?Cat_ID=2" },
  // ... (rest of states omitted for brevity; keep full list in production)
  { name: "Wyoming", url: "https://www.courts.state.wy.us/court-rules/" },
];

/* ---------------- Single-PDF items ---------------- */
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

const SKU_TO_SLUG = {
  avoiding_common_mistakes: "common-mistakes",
  basic_motion_template: "basic-motion",
  case_event_timeline: "case-timeline",
  common_response_timelines: "common-response",
  cross_exam_planning: "cross-exam",
  evidence_log: "evidence-log",
  find_court_rules: "find-rules",
  pre_hearing_checklist: "pre-hearing",
  proof_of_service_tracker: "proof-of-service",
  trial_hearing_quick_ref: "trial-quick-ref",
};

/* ---------------- Brand ---------------- */
function BrandWordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
      <span className="text-slate-800">Thread</span>
      <span className="text-orange-600">Lock</span>
      <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
    </span>
  );
}

/* ---------------- Header ---------------- */
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/"><a><BrandWordmark /></a></Link>
        <nav className="hidden md:flex items-center space-x-6 text-slate-700 font-semibold">
          <Link href="/#features"><a className="hover:text-orange-600 transition-colors">Features</a></Link>
          <Link href="/resources"><a className="text-orange-600 border-b-2 border-orange-600 pb-1">Resources</a></Link>
          <Link href="/sarahs-story"><a className="hover:text-orange-600 transition-colors">Her Story</a></Link>
          <Link href="/founder-story"><a className="hover:text-orange-600 transition-colors">Our Story</a></Link>
          <Link href="/signup">
            <a className="bg-orange-600 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-orange-700 transform hover:-translate-y-0.5 transition-all">
              Join Waitlist
            </a>
          </Link>
        </nav>
        <button className="md:hidden text-slate-800 p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

/* ---------------- Hero Section ---------------- */
const HeroSection = () => (
  <section className="relative h-[80vh] flex items-center justify-center text-white text-center overflow-hidden">
    <div className="fixed-bg" style={{ backgroundImage: `url('${HERO_IMG}')`, filter: "brightness(0.7)" }} />
    <div className="relative z-10 p-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
        Essential Legal Resources for Self-Represented Litigants
      </h1>
      <p className="text-lg md:text-xl font-medium drop-shadow-md">
        Navigate the complexities of family court with confidence. Access state-specific rules and practical tools designed to empower you.
      </p>
    </div>
  </section>
);

/* ---------------- Pricing Section ---------------- */
const PricingSection = ({ onBuyToolkit, onBuyFounders, onPickSingle, onContribMonthly, onContribNYOP }) => (
  <section id="pricing" className="relative py-20 md:py-24 text-center text-gray-800 overflow-hidden">
    <div className="fixed-bg" style={{ backgroundImage: `url('${PRICING_IMG}')`, filter: "brightness(0.6)" }} />
    <div className="relative z-10 container mx-auto px-6">
      {/* pricing cards... (same structure as before) */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Resources & Toolkits</h2>
      <p className="text-lg text-white mb-16 max-w-3xl mx-auto drop-shadow-md">
        While our app is in development, get organized with these essential resources. Your purchase supports our build and includes Founding Member perks.
      </p>
      {/* ...cards omitted for brevity but keep structure as in your original */}
    </div>
  </section>
);

/* ---------------- Community Links ---------------- */
const CommunityLinksSection = () => {
  const [rulesOpen, setRulesOpen] = useState(false);
  return (
    <section id="community-links" className="py-20 md:py-24 bg-gray-50 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">Community & Legal Links</h2>
        <p className="text-lg text-slate-600 mb-12 text-center">Connect with us and find helpful legal resources for your jurisdiction.</p>
        {/* ...LinkedIn and State Rules cards as before */}
      </div>
    </section>
  );
};

/* ---------------- Footer ---------------- */
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock.ai. All rights reserved.</p>
  </footer>
);

/* ---------------- Modal ---------------- */
function SingleItemModal({ open, onClose, onSelect }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">Choose a Single Tool</h3>
        <div className="max-h-80 overflow-y-auto grid md:grid-cols-2 gap-x-4 divide-y md:divide-y-0">
          {SINGLE_ITEMS.map((item) => (
            <button key={item.sku} onClick={() => onSelect(item.sku)} className="w-full text-left py-3 px-2 hover:bg-slate-50 rounded-md">
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
export default function ResourcesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [singleOpen, setSingleOpen] = useState(false);

  const postTo = async (slug) => {
    const r = await fetch(`/api/checkout/${slug}`, { method: "POST" });
    const j = await r.json();
    if (!r.ok || !j?.url) throw new Error(j?.error || "Checkout error");
    window.location.href = j.url;
  };

  const onBuyToolkit = async () => { try { await postTo("toolkit"); } catch (e) { alert(e.message); setIsLoading(false); } };
  const onBuyFounders = async () => { try { await postTo("founders"); } catch (e) { alert(e.message); setIsLoading(false); } };
  const onPickSingle = () => setSingleOpen(true);
  const onBuySingle = async (sku) => {
    setSingleOpen(false);
    try {
      const slug = SKU_TO_SLUG[sku];
      if (!slug) throw new Error("Unknown item.");
      await postTo(slug);
    } catch (e) { alert(e.message); setIsLoading(false); }
  };
  const onContribMonthly = async () => { try { await postTo("support-monthly"); } catch (e) { alert(e.message); setIsLoading(false); } };
  const onContribNYOP = async () => { try { await postTo("support-nyop"); } catch (e) { alert(e.message); setIsLoading(false); } };

  return (
    <>
      <Head>
        <title>Resources | ThreadLock&#8482;</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,follow" />
        <style jsx global>{`
          .fixed-bg {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover; background-position: center;
            background-attachment: fixed;
            z-index: -2;
          }
          @supports (-webkit-touch-callout: none) {
            .fixed-bg { position: absolute; background-attachment: scroll; }
          }
        `}</style>
      </Head>

      <div className="bg-gray-50">
        <Header />
        <main className="flex flex-col w-full overflow-x-hidden">
          <HeroSection />
          <CommunityLinksSection />
          <PricingSection
            onBuyToolkit={onBuyToolkit}
            onBuyFounders={onBuyFounders}
            onPickSingle={onPickSingle}
            onContribMonthly={onContribMonthly}
            onContribNYOP={onContribNYOP}
          />
        </main>
        <Footer />
        <SingleItemModal open={singleOpen} onClose={() => setSingleOpen(false)} onSelect={onBuySingle} />
      </div>
    </>
  );
}
