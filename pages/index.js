import React from "react";

// --- ICONS ---
const BrainCircuitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.993.23" />
    <path d="M18.668 15.65a3 3 0 1 0-5.993.23" />
    <path d="M12 12a3 3 0 1 0-5.993.23" />
    <path d="M12 19a3 3 0 1 0-5.993.23" />
    <path d="M18.668 8.65a3 3 0 1 0-5.993.23" />
    <path d="M12 5a3 3 0 1 0 5.993.23" />
    <path d="m12 12 2.5 2.5" />
    <path d="m12 5-2.5 2.5" />
    <path d="m18.5 8.5 2.5 2.5" />
    <path d="m12 19 2.5-2.5" />
    <path d="m6.5 8.5-2.5 2.5" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// --- REUSABLE STRIPE CHECKOUT BUTTON ---
const StripeButton = ({ children }) => (
  <button
    onClick={async () => {
      const res = await fetch("/api/create-checkout-session", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    }}
    className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition duration-300"
  >
    {children}
  </button>
);

// --- HEADER ---
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10">
    <div className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-white/70 via-white/30 to-transparent backdrop-blur-sm">
      <div className="flex items-center space-x-3">
        <img src="/threadlock-logo.png" alt="ThreadLock Logo" className="h-14 w-auto" />
        <span className="text-xl font-bold text-slate-800">ThreadLock<sup>™</sup></span>
      </div>
      <nav className="space-x-8 hidden md:flex">
        <a href="#features" className="text-white hover:text-orange-400">Features</a>
        <a href="#statistics" className="text-white hover:text-orange-400">Impact</a>
        <a href="#pricing" className="text-white hover:text-orange-400">Pricing</a>
        <a href="#testimonials" className="text-white hover:text-orange-400">Testimonials</a>
        <a href="https://blog.threadlock.ai" className="text-white hover:text-orange-400">Blog</a>
      </nav>
    </div>
  </header>
);

// --- HERO ---
const HeroSection = () => (
  <section className="relative text-white bg-slate-900">
    <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-800 to-slate-700"></div>
    <div className="relative container mx-auto px-6 py-32 md:py-40 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        Take Control of Your Family Law Case
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-300">
        Simplify evidence gathering. AI-guided journaling and blockchain-secured timelines give you court-ready documentation.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <StripeButton>Get Early Access</StripeButton>
        <a href="#features" className="border border-slate-600 px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// --- FEATURE CARD ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-2xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

// --- FEATURES SECTION ---
const FeaturesSection = () => (
  <section id="features" className="py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Build Evidence the Smart Way
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="AI-Guided Journaling">
          Never miss a crucial detail. Our AI prompts capture legally relevant facts.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Immutable & Secure">
          Every entry is blockchain-secured, preventing tampering and preserving integrity.
        </FeatureCard>
        <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Court-Ready Exports">
          Generate professional PDFs and summaries for attorneys or court in minutes.
        </FeatureCard>
      </div>
    </div>
  </section>
);

// --- STATISTICS ---
const StatisticsSection = () => (
  <section id="statistics" className="bg-slate-50 py-24 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-slate-900">The Family Law Landscape</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">3.8M</h3>
          <p className="text-slate-600 mt-2">Family law cases filed each year in the U.S.</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">72%</h3>
          <p className="text-slate-600 mt-2">Include at least one self-represented party</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">>50%</h3>
          <p className="text-slate-600 mt-2">Evidence often disorganized or incomplete</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">100%</h3>
          <p className="text-slate-600 mt-2">Stress when your family’s future is at stake</p>
        </div>
      </div>
    </div>
  </section>
);

// --- PRICING ---
const PricingSection = () => (
  <section id="pricing" className="py-24 bg-white text-center text-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Early Access Pricing</h2>
      <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
        Lock in your first 6 months for just $10. Risk-free early adopter offer.
      </p>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-orange-300 p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Pro Tier</h3>
        <p className="text-slate-500 mb-6">Full access to all core features</p>
        <div className="text-5xl font-extrabold text-slate-900 mb-1">$10</div>
        <div className="text-lg text-slate-500 mb-8">for 6 months</div>
        <StripeButton>Sign Up Now</StripeButton>
        <p className="text-xs text-slate-400 mt-4">Cancel anytime. Limited offer.</p>
      </div>
    </div>
  </section>
);

// --- TESTIMONIALS ---
const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-slate-600 italic">
            “ThreadLock gave me a way to keep my case organized without feeling like I was drowning. 
            When I handed the judge my timeline, she said it was the clearest evidence she’d seen all month.”
          </p>
          <p className="mt-4 font-semibold text-slate-800">— Melissa R., Single Parent</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-slate-600 italic">
            “I was representing myself and terrified I’d miss something important. 
            ThreadLock kept me focused and made me feel like I had a real plan in court.”
          </p>
          <p className="mt-4 font-semibold text-slate-800">— David L., Pro Se Litigant</p>
        </div>
      </div>
    </div>
  </section>
);

// --- CTA ---
const CallToActionSection = () => (
  <section className="bg-slate-800 text-white py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Your Case Today</h2>
    <p className="mb-8 max-w-xl mx-auto text-slate-300">
      Your evidence matters. ThreadLock™ helps you document, secure, and present it clearly—without the stress.
    </p>
    <StripeButton>Claim Early Access</StripeButton>
  </section>
);

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock™. All rights reserved.</p>
  </footer>
);

// --- MAIN PAGE ---
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <StatisticsSection />
        <PricingSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
