import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

/* Exact filenames in /public */
const HERO_IMG = "/sandra-seitamaa-JvPDBMvgNls-unsplash.jpg";
const PRICING_IMG = "/giorgio-trovato-IgAFof1bhTA-unsplash.jpg";

/* Icons */
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

/* State rules */
const STATE_RULES = [
  { name: "Alabama", url: "https://eforms.alacourt.gov/media/d5464e8e-a228-4107-94d3-882245b7a1f5/rules-of-civil-procedure/" },
  { name: "Alaska", url: "https://courts.alaska.gov/rules/rules.htm" },
  { name: "Arizona", url: "https://www.azcourts.gov/rules" },
  { name: "Arkansas", url: "https://courts.arkansas.gov/rules-and-administrative-orders/rules-of-civil-procedure" },
  { name: "California", url: "https://www.courts.ca.gov/rules.htm" },
  { name: "Colorado", url: "https://www.courts.state.co.us/Courts/Supreme_Court/Rule_Categories.cfm?Cat_ID=2" },
  { name: "Connecticut", url: "https://jud.ct.gov/cbecs/rules.htm" },
  { name: "Delaware", url: "https://courts.delaware.gov/rules/" },
  { name: "Florida", url: "https://www.floridabar.org/rules/ctproc/" },
  { name: "Georgia", url: "https://georgiacourts.gov/rules/" },
  { name: "Hawaii", url: "https://www.courts.state.hi.us/rules_and_orders/rules_of_court" },
  { name: "Idaho", url: "https://isc.idaho.gov/rules" },
  { name: "Illinois", url: "https://www.illinoiscourts.gov/rules-and-orders/supreme-court-rules" },
  { name: "Indiana", url: "https://www.in.gov/courts/rules/" },
  { name: "Iowa", url: "https://www.iowacourts.gov/for-attorneys/court-rules" },
  { name: "Kansas", url: "https://www.kscourts.org/rules" },
  { name: "Kentucky", url: "https://courts.ky.gov/resources/Legal-Resources/Pages/KentuckyRulesofCourt.aspx" },
  { name: "Louisiana", url: "https://www.lasc.org/rules/" },
  { name: "Maine", url: "https://www.courts.maine.gov/rules/index.html" },
  { name: "Maryland", url: "https://mdcourts.gov/rules" },
  { name: "Massachusetts", url: "https://www.mass.gov/guides/massachusetts-court-rules" },
  { name: "Michigan", url: "https://courts.michigan.gov/administration/standards-guidelines/rules/" },
  { name: "Minnesota", url: "https://www.mncourts.gov/courtrules" },
  { name: "Mississippi", url: "https://courts.ms.gov/rules/msrulesofcourt/rules_of_civil_procedure.pdf" },
  { name: "Missouri", url: "https://www.courts.mo.gov/page.jsp?id=677" },
  { name: "Montana", url: "https://courts.mt.gov/rules/" },
  { name: "Nebraska", url: "https://supremecourt.nebraska.gov/supreme-court-rules" },
  { name: "Nevada", url: "https://www.leg.state.nv.us/courtrules/" },
  { name: "New Hampshire", url: "https://www.courts.nh.gov/rules-orders" },
  { name: "New Jersey", url: "https://www.njcourts.gov/courts/rules" },
  { name: "New Mexico", url: "https://www.nmcourts.gov/rules-forms/" },
  { name: "New York", url: "https://ww2.nycourts.gov/rules/" },
  { name: "North Carolina", url: "https://www.nccourts.gov/legal-resources/rules-forms" },
  { name: "North Dakota", url: "https://www.ndcourts.gov/legal-resources/rules" },
  { name: "Ohio", url: "https://www.supremecourt.ohio.gov/rules/" },
  { name: "Oklahoma", url: "https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKRU&level=1" },
  { name: "Oregon", url: "https://www.ojd.state.or.us/rules/" },
  { name: "Pennsylvania", url: "http://www.pacourts.us/rules-and-forms/" },
  { name: "Rhode Island", url: "https://www.courts.ri.gov/Pages/rules-of-practice.aspx" },
  { name: "South Carolina", url: "https://www.sccourts.org/courtReg/" },
  { name: "South Dakota", url: "https://ujs.sd.gov/Supreme_Court/rules.aspx" },
  { name: "Tennessee", url: "https://www.tncourts.gov/rules" },
  { name: "Texas", url: "https://www.txcourts.gov/rules-forms/rules-standards/" },
  { name: "Utah", url: "https://www.utcourts.gov/rules/" },
  { name: "Vermont", url: "https://www.vermontjudiciary.org/court-rules" },
  { name: "Virginia", url: "http://www.courts.state.va.us/courts/scv/rulesofcourt.pdf" },
  { name: "Washington", url: "https://www.courts.wa.gov/court_rules/" },
  { name: "West Virginia", url: "http://www.courtswv.gov/legal-community/court-rules.html" },
  { name: "Wisconsin", url: "https://www.wicourts.gov/courts/supreme/rules/index.htm" },
  { name: "Wyoming", url: "https://www.courts.state.wy.us/court-rules/" },
];

/* Single items */
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

/* Brand */
function BrandWordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
      <span className="text-slate-800">Thread</span>
      <span className="text-orange-600">Lock</span>
      <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
    </span>
  );
}

/* Background tied to its section; no negative z-index, no fixed globals */
function SectionBackground({ src, dark = 0 }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        onError={() => console.error("Background failed:", src)}
      />
      {dark > 0 && <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${dark})` }} />}
    </div>
  );
}

/* Header */
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

      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-4 pb-4 pt-2 text-slate-800 space-y-2 bg-white border-t border-slate-200">
          <Link href="/#features"><a onClick={() => setOpen(false)} className="block py-2 hover:text-orange-600">Features</a></Link>
          <Link href="/resources"><a onClick={() => setOpen(false)} className="block py-2 text-orange-600">Resources</a></Link>
          <Link href="/sarahs-story"><a onClick={() => setOpen(false)} className="block py-2 hover:text-orange-600">Her Story</a></Link>
          <Link href="/founder-story"><a onClick={() => setOpen(false)} className="block py-2 hover:text-orange-600">Founder Story</a></Link>
          <Link href="/signup">
            <a onClick={() => setOpen(false)} className="w-full mt-2 bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all block text-center">
              Join the Waitlist
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

/* Hero */
const HeroSection = () => (
  <section className="relative isolate h-[80vh] flex items-center justify-center text-white text-center overflow-hidden">
    {/* isolate => new stacking context so this background never sits under the page */}
    <SectionBackground src={HERO_IMG} dark={0.35} />
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

/* Pricing */
const PricingSection = ({ onBuyToolkit, onBuyFounders, onPickSingle, onContribMonthly, onContribNYOP }) => (
  <section id="pricing" className="relative isolate py-20 md:py-24 text-center text-gray-800 overflow-hidden">
    <SectionBackground src={PRICING_IMG} dark={0.45} />
    <div className="relative z-10 container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Resources &amp; Toolkits</h2>
      <p className="text-lg text-white mb-16 max-w-3xl mx-auto drop-shadow-md">
        While our app is in development, get organized with these essential resources. Your purchase supports our build and includes Founding Member perks.
      </p>

      <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg ring-2 ring-orange-500 p-8 flex flex-col relative">
          <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">Most Popular</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Complete Toolkit</h3>
          <p className="text-slate-500 mb-6">All printables &amp; Founding Member perks.</p>
          <div className="text-5xl font-extrabold text-slate-900 mb-1">$97</div>
          <ul className="text-left text-slate-600 mt-6 space-y-3 flex-grow">
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>10+ premium templates (PDF)</span></li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Step-by-step guides</span></li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Lifetime SaaS discount</span></li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Early beta access</span></li>
          </ul>
          <button onClick={onBuyToolkit} className="w-full mt-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all">
            Get the Toolkit
          </button>
          <p className="text-xs text-slate-400 mt-3">One-time payment.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Founders Access</h3>
          <p className="text-slate-500 mb-6">Get in early and lock in your perks.</p>
          <div className="text-5xl font-extrabold text-slate-900 mb-1">$21</div>
          <ul className="text-left text-slate-600 mt-6 space-y-3 flex-grow">
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Lifetime SaaS discount</span></li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Early beta access</span></li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Founding Member recognition</span></li>
          </ul>
          <button onClick={onBuyFounders} className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all">
            Get Founders Access
          </button>
          <p className="text-xs text-slate-400 mt-3">Upgrade to Toolkit anytime.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Single Download</h3>
          <p className="text-slate-500 mb-6">Just the one tool you need right now.</p>
          <div className="text-5xl font-extrabold text-slate-900 mb-1">$15</div>
          <ul className="text-left text-slate-600 mt-6 space-y-3 flex-grow">
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Choose any tool you need</span></li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Immediate download via email</span></li>
            <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✓</span><span>Credit towards the full toolkit</span></li>
          </ul>
          <button onClick={onPickSingle} className="w-full mt-8 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 rounded-lg shadow-sm transition-all">
            Choose a Single Tool
          </button>
          <p className="text-[11px] text-slate-400 mt-3">We’ll credit your $15 toward the Toolkit.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Support the Build</h3>
          <p className="text-slate-500 mb-6">Help us bring this to life.</p>
          <div className="text-3xl font-extrabold text-slate-900 mb-1">$2/mo</div>
          <p className="text-slate-500 mb-6">or name your one-time amount</p>
          <div className="grid grid-cols-1 gap-3 mt-auto flex-grow">
            <button onClick={onContribMonthly} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all">
              Contribute $2 / month
            </button>
            <button onClick={onContribNYOP} className="w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 rounded-lg shadow-sm transition-all">
              One-Time Support
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-3">Thank you. Seriously.</p>
        </div>
      </div>
    </div>
  </section>
);

/* Community links */
const CommunityLinksSection = () => {
  const [rulesOpen, setRulesOpen] = useState(false);
  return (
    <section id="community-links" className="py-20 md:py-24 bg-gray-50 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">Community &amp; Legal Links</h2>
        <p className="text-lg text-slate-600 mb-12 text-center">Connect with us and find helpful legal resources for your jurisdiction.</p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Join our Community</h3>
            </div>
            <p className="text-slate-600 mb-6">Follow ThreadLock on LinkedIn for company updates, news, and insights into family law technology.</p>
            <a href="https://www.linkedin.com/company/threadlock/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all">
              Follow on LinkedIn
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-lg">
                <GlobeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Local Court Rules</h3>
            </div>
            <p className="text-slate-600 mb-6">Find the official court and family law rules for your state. <em>(Links go to external government websites)</em></p>

            <button onClick={() => setRulesOpen(!rulesOpen)} className="w-full text-left font-semibold text-slate-800 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-lg flex justify-between items-center transition-all">
              <span>Select Your State</span>
              <ChevronDownIcon className={`w-5 h-5 transition-transform ${rulesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${rulesOpen ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
              <div className="py-2 space-y-1 max-h-80 overflow-y-auto">
                {STATE_RULES.map((state) => (
                  <a
                    key={state.name}
                    href={state.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-800 hover:text-orange-600 font-semibold transition-colors p-2 rounded hover:bg-slate-100"
                  >
                    {state.name} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Footer */
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock.ai. All rights reserved.</p>
  </footer>
);

/* Modal */
function SingleItemModal({ open, onClose, onSelect }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">Choose a Single Tool</h3>
        <p className="text-slate-600 mb-4">Each item is $15. You’ll get the download link by email after checkout.</p>
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

/* Page */
export default function ResourcesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [singleOpen, setSingleOpen] = useState(false);

  const postTo = async (slug) => {
    const r = await fetch(`/api/checkout/${slug}`, { method: "POST" });
    const j = await r.json();
    if (!r.ok || !j?.url) throw new Error(j?.error || "Checkout error");
    window.location.href = j.url;
  };

  const onBuyToolkit = async () => { setIsLoading(true); try { await postTo("toolkit"); } catch (e) { alert(e.message || "Unable to start checkout."); setIsLoading(false); } };
  const onBuyFounders = async () => { setIsLoading(true); try { await postTo("founders"); } catch (e) { alert(e.message || "Unable to start checkout."); setIsLoading(false); } };
  const onPickSingle = () => setSingleOpen(true);
  const onBuySingle = async (sku) => { setSingleOpen(false); setIsLoading(true); try { const slug = SKU_TO_SLUG[sku]; if (!slug) throw new Error("Unknown item."); await postTo(slug); } catch (e) { alert(e.message || "Unable to start checkout."); setIsLoading(false); } };
  const onContribMonthly = async () => { setIsLoading(true); try { await postTo("support-monthly"); } catch (e) { alert(e.message || "Unable to start checkout."); setIsLoading(false); } };
  const onContribNYOP = async () => { setIsLoading(true); try { await postTo("support-nyop"); } catch (e) { alert(e.message || "Unable to start checkout."); setIsLoading(false); } };

  return (
    <>
      <Head>
        <title>Resources | ThreadLock&#8482;</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,follow" />
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