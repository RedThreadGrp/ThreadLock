import React, { useState, useEffect } from "react";

/* ---------------- Icons ---------------- */
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

/* ---------------- UI Mockups (scaled down) ---------------- */
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
                <button className="text-[11px] bg-orange-600 px-3 py-1 rounded">Save Entry</button>
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
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-600 rounded-full"></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg text-[11px]">
                        <p className="font-semibold">Custody Exchange Late</p>
                        <p className="text-slate-400">July 26, 2025 - 6:30 PM</p>
                        <span className="text-green-400 text-[10px] flex items-center gap-1"><ShieldCheckIcon className="w-3 h-3" /> Blockchain Verified</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-600 rounded-full"></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg text-[11px]">
                        <p className="font-semibold">Email Received</p>
                        <p className="text-slate-400">July 25, 2025 - 9:15 AM</p>
                        <span className="text-green-400 text-[10px] flex items-center gap-1"><ShieldCheckIcon className="w-3 h-3" /> Blockchain Verified</span>
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
        <button className="text-[11px] bg-orange-600 text-white px-4 py-1.5 rounded-md mt-3">Download PDF</button>
    </div>
);

/* ---------------- Text Brand ---------------- */
function BrandWordmark({ className = "", darkText = true }) {
    return (
        <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
            <span className={darkText ? "text-slate-800" : "text-white"}>Thread</span>
            <span className="text-orange-600">Lock</span>
            <span className={`ml-0.5 align-text-top text-[0.5em] font-black ${darkText ? 'text-slate-500' : 'text-slate-300'}`}>™</span>
        </span>
    );
}

/* ---------------- Header: MODIFIED ---------------- */
const Header = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = isScrolled
        ? "bg-white/90 backdrop-blur-md border-b border-slate-200"
        : "bg-transparent";
    
    const navTextClasses = isScrolled ? "text-slate-700" : "text-white";

    return (
        <header className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${headerClasses}`}>
            <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
                <a href="/"><BrandWordmark darkText={isScrolled} /></a>

                <nav className={`hidden md:flex items-center space-x-6 font-semibold ${navTextClasses}`}>
                    <a href="#features" className="hover:text-orange-600 transition-colors">Features</a>
                    <a href="/resources" className="hover:text-orange-600 transition-colors">Resources</a>
                    <a href="/sarahs-story" className="hover:text-orange-600 transition-colors">Her Story</a>
                    <a href="/founder-story" className="hover:text-orange-600 transition-colors">Our Story</a>
                    <a href="/signup" className="bg-orange-600 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-orange-700 transform hover:-translate-y-0.5 transition-all">
                        Join Waitlist
                    </a>
                </nav>

                <button
                    className={`md:hidden p-2 ${navTextClasses}`}
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <XIcon /> : <MenuIcon />}
                </button>
            </div>

            <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
                <div className="px-4 pb-4 pt-2 space-y-2 bg-white border-t border-slate-200">
                    <a href="#features" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Features</a>
                    <a href="/resources" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Resources</a>
                    <a href="/sarahs-story" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Her Story</a>
                    <a href="/founder-story" onClick={() => setOpen(false)} className="block py-2 text-slate-800 hover:text-orange-600">Founder Story</a>
                    <a href="/signup" onClick={() => setOpen(false)} className="w-full mt-2 bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all block text-center">
                        Join the Waitlist
                    </a>
                </div>
            </div>
        </header>
    );
};

/* ---------------- Sections ---------------- */

const HeroSection = () => (
  <section
    className="relative text-white bg-cover bg-center bg-fixed"
    style={{ backgroundImage: "url('/simran-sood-qL0t5zNGFVQ-unsplash.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative container mx-auto px-6 pt-36 md:pt-44 pb-24 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        <span className="block">The justice system is broken.</span>
        <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
          Not the people in it.
        </span>
      </h1>
      <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed">
        ThreadLock was born from a simple realization: the system doesn't need more complexity, it needs clarity. We built the tools to provide it, putting power back into your hands.
      </p>
      <div className="mt-12 flex justify-center">
        <a
          href="#features"
          className="bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          See How
        </a>
      </div>
    </div>
  </section>
);

const SubscriptionBanner = () => (
  <section
    id="subscriptions"
    className="relative py-16 md:py-20 border-y border-slate-200 overflow-hidden"
    style={{
      backgroundImage: "url('/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container mx-auto px-6 text-center relative">
      <div className="inline-block px-6 py-5 mb-10 border-2 border-orange-500 rounded-xl bg-white/60 backdrop-blur-sm shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Simple, Powerful Plans
        </h2>
        <p className="mt-2 text-lg text-slate-800/90 max-w-2xl">
          Choose the right level of support for your journey. App coming soon.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border-2 border-orange-500 shadow-lg text-left">
          <h3 className="text-xl font-bold text-slate-800">Individual</h3>
          <p className="text-4xl font-extrabold text-slate-900 my-4">
            $10<span className="text-base font-medium text-slate-500">/mo</span>
          </p>
          <p className="text-slate-600 mb-6">For parents and individuals managing their own case.</p>
        </div>
        <div className="bg-white/85 backdrop-blur-md p-8 rounded-2xl border-2 border-orange-500 shadow-lg text-left">
          <h3 className="text-xl font-bold text-slate-800">Lifetime</h3>
          <p className="text-4xl font-extrabold text-slate-900 my-4">
            $100<span className="text-base font-medium text-slate-500">/one-time</span>
          </p>
          <p className="text-slate-600 mb-6">Full access for a single case, from start to finish.</p>
        </div>
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border-2 border-orange-500 shadow-lg text-left">
          <h3 className="text-xl font-bold text-slate-800">For Teams</h3>
          <p className="text-4xl font-extrabold text-slate-900 my-4">Custom</p>
          <p className="text-slate-600 mb-6">Offer ThreadLock as a powerful benefit for your employees.</p>
          <p className="text-slate-800 font-semibold">Contact us at info@threadlock.ai</p>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-6 text-left">
        <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-xl">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{children}</p>
        </div>
    </div>
);

const FeaturesSection = () => (
  <section
    id="features"
    className="relative py-20 md:py-28 bg-fixed bg-cover bg-center"
    style={{
      backgroundImage: "url('/getty-images-1mEcRkmEXBM-unsplash.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
    <div className="relative container mx-auto px-6 text-center z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Build Your Case with Confidence</h2>
      <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-16">
        Our platform is designed to make evidence collection simple, secure, and stress-free.
      </p>
    </div>
    <div className="relative container mx-auto px-6 grid md:grid-cols-3 gap-8 z-10">
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
        <section id="showcase" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">See ThreadLock in Action</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">A quick look at how key features help you build a stronger case.</p>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-200 rounded-2xl shadow-2xl p-3 md:p-4">
                        <div className="scale-90 md:scale-95 origin-center">{slides[idx].mockup}</div>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
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
                                        className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${idx === i ? "bg-orange-600" : "bg-slate-300 hover:bg-slate-400"}`}
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

const OurMissionSection = () => (
  <section
    id="mission"
    className="relative py-20 md:py-28 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
    <div className="pointer-events-none absolute inset-0 bg-black/20" />
    <div className="relative container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission: A Fair Shot for Everyone</h2>
      <div className="border-l-4 border-orange-500 pl-6 md:pl-8 text-left">
        <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light">
          The justice system doesn't fail because of one judge or one case. It fails when people, forced to represent
          themselves, are denied a voice because they lack the confidence and tools to be heard.
        </p>
        <p className="mt-4 text-xl md:text-2xl text-orange-400 font-semibold">
          We built the tools to give you that voice.
        </p>
      </div>
    </div>
  </section>
);

const SignupSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');

        // Simulate API call for demonstration purposes
        setTimeout(() => {
            if (email && email.includes('@')) {
                setStatus('success');
                setMessage('Thanks for joining! We\'ll be in touch soon.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage('Please enter a valid email address.');
            }
        }, 1000);
    };

    return (
        <section id="signup" className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Be the First to Know</h2>
                <p className="text-lg text-slate-600 mb-8">
                    Join our waitlist for early access to the ThreadLock app, plus exclusive updates and resources.
                </p>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        <button 
                            type="submit" 
                            className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all disabled:bg-slate-400"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </div>
                </form>
                {message && (
                    <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )}
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
        <p>© {new Date().getFullYear()} ThreadLock.ai. All rights reserved.</p>
    </footer>
);

/* ---------------- Main Page ---------------- */
export default function Home() {
    return (
        <div className="bg-white">
            <Header/>
            <main className="flex flex-col w-full overflow-x-hidden">
                <HeroSection />
                <OurMissionSection />
                <FeaturesSection />
                <ProductShowcaseSection />
                <SubscriptionBanner />
                <SignupSection />
            </main>
            <Footer />
        </div>
    );
}

