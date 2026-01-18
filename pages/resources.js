import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LeadMagnetForm from "../components/LeadMagnetForm";
import SiteHeader from "../src/components/SiteHeader";
import HeroBanner from "../src/components/HeroBanner";
import statesData from "../src/data/resources/states.json";
import productsData from "../src/data/resources/products.json";
import topicsData from "../src/data/resources/topics.json";

/* Exact filenames in /public */
const HERO_IMG = "/sandra-seitamaa-JvPDBMvgNls-unsplash.jpg";
const PRICING_IMG = "/giorgio-trovato-IgAFof1bhTA-unsplash.jpg";

/* Import state rules from JSON */
const STATE_RULES = statesData.map(state => ({
  name: state.name,
  url: state.rulesUrl
}));

/* Import single items from JSON */
const SINGLE_ITEMS = productsData.map(product => ({
  sku: product.sku,
  name: product.name
}));

const SKU_TO_SLUG = productsData.reduce((acc, product) => {
  acc[product.sku] = product.slug;
  return acc;
}, {});

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

/* Icons for Community Links section */

/* Pricing */
const PricingSection = ({ onBuyToolkit, onBuyFounders, onPickSingle, onContribMonthly, onContribNYOP }) => (
  <section 
    id="pricing" 
    className="relative py-20 md:py-28 text-center text-gray-800 overflow-hidden"
    style={{
      backgroundImage: `url('${PRICING_IMG}')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <div className="absolute inset-0 bg-black/45" />
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

  // Feature flag to show old pricing cards (set to false to hide)
  const SHOW_OLD_CARDS = false;

  return (
    <>
      <Head>
        <title>Resources | ThreadLock&#8482;</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Essential legal resources for family court. Access state-specific court rules, templates, and practical tools designed to empower self-represented litigants." />
        <link rel="canonical" href="https://www.threadlock.ai/resources" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Essential Legal Resources | ThreadLock" />
        <meta property="og:description" content="Navigate family court with confidence. Access state-specific rules and practical tools designed to empower you." />
        <meta property="og:url" content="https://www.threadlock.ai/resources" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.threadlock.ai/og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Essential Legal Resources | ThreadLock" />
        <meta name="twitter:description" content="Navigate family court with confidence. Access state-specific rules and practical tools." />
        <meta name="twitter:image" content="https://www.threadlock.ai/og-image.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Essential Legal Resources",
              "description": "Essential legal resources for family court. Access state-specific court rules, templates, and practical tools designed to empower self-represented litigants.",
              "url": "https://www.threadlock.ai/resources",
              "publisher": {
                "@type": "Organization",
                "name": "ThreadLock",
                "url": "https://www.threadlock.ai"
              }
            })
          }}
        />
      </Head>

      <div className="bg-gray-50">
        <SiteHeader />
        <main className="flex flex-col w-full overflow-x-hidden">
          <HeroBanner
            image={HERO_IMG}
            heading="Essential Legal Resources"
            subheading="Navigate the complexities of family court with confidence. Access state-specific rules and practical tools designed to empower you."
          />
          
          {/* Lead Magnet Form Section */}
          <section className="container mx-auto px-6 py-20 md:py-28">
            <LeadMagnetForm />
          </section>

          <CommunityLinksSection />
          
          {/* Browse by Topic Section */}
          <section className="py-20 md:py-24 bg-white relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">Browse by Topic</h2>
              <p className="text-lg text-slate-600 mb-12 text-center">Explore resources organized by legal topics relevant to family court.</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicsData.map((topic) => (
                  <Link
                    key={topic.id}
                    href={`/resources/topic/${topic.id}`}
                    className="bg-gray-50 p-6 rounded-xl border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{topic.name}</h3>
                    <p className="text-slate-600 mb-3">{topic.description}</p>
                    <span className="text-orange-600 font-semibold">
                      Explore {topic.name} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* State Resources Quick Links */}
          <section className="py-20 md:py-24 bg-gray-50 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 text-center">State-Specific Resources</h2>
              <p className="text-lg text-slate-600 mb-12 text-center">Access official court rules and resources for your state.</p>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Popular States</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {['california', 'texas', 'florida', 'new-york', 'pennsylvania', 'illinois', 'ohio', 'georgia', 'north-carolina', 'michigan'].map((stateId) => {
                    const state = statesData.find(s => s.id === stateId);
                    return state ? (
                      <Link
                        key={state.id}
                        href={`/resources/state/${state.id}`}
                        className="text-center py-3 px-4 bg-gray-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-500 rounded-lg font-semibold text-slate-900 transition-all"
                      >
                        {state.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="text-center">
                <p className="text-slate-600 mb-4">Need a different state?</p>
                <details className="inline-block text-left">
                  <summary className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center">
                    View All 50 States
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-4 bg-white p-6 rounded-xl border border-slate-200 shadow-lg max-w-4xl">
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
                      {statesData.map((state) => (
                        <Link
                          key={state.id}
                          href={`/resources/state/${state.id}`}
                          className="block py-2 px-3 text-slate-800 hover:text-orange-600 hover:bg-orange-50 rounded font-medium transition-all"
                        >
                          {state.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>
          
          {/* Old pricing cards - kept for easy rollback */}
          {SHOW_OLD_CARDS && (
            <PricingSection
              onBuyToolkit={onBuyToolkit}
              onBuyFounders={onBuyFounders}
              onPickSingle={onPickSingle}
              onContribMonthly={onContribMonthly}
              onContribNYOP={onContribNYOP}
            />
          )}
        </main>
        <SingleItemModal open={singleOpen} onClose={() => setSingleOpen(false)} onSelect={onBuySingle} />
      </div>
    </>
  );
}
