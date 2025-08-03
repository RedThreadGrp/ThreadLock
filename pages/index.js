import React from 'react';

// --- ICON COMPONENTS ---
const BrainCircuitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// --- HEADER WITH NAV ---
const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-sm z-20">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#top" className="flex items-center space-x-2">
        <img src="/logo.png" alt="ThreadLock Logo" className="h-10 w-auto" />
        <span className="text-white font-bold text-xl">ThreadLock</span>
      </a>
      <nav className="hidden md:flex space-x-8 text-white font-medium">
        <a href="#features" className="hover:text-orange-400">Features</a>
        <a href="#pricing" className="hover:text-orange-400">Pricing</a>
        <a href="#testimonials" className="hover:text-orange-400">Testimonials</a>
        <a href="#stats" className="hover:text-orange-400">Stats</a>
        <a href="https://blog.threadlock.ai" className="hover:text-orange-400">Blog</a>
      </nav>
    </div>
  </header>
);

// --- HERO SECTION ---
const HeroSection = () => (
  <section id="top" className="relative text-white bg-slate-900">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/20 to-transparent"></div>
    <div 
      className="absolute inset-0 opacity-5"
      style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: `20px 20px` }}
    ></div>

    <div className="relative container mx-auto px-6 pt-40 pb-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
        Take Control of Your Family Law Case
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-300">
        Simplify evidence gathering. Our AI-guided journaling and blockchain-secured timelines give you court-ready documentation, peace of mind, and control.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="/api/create-checkout-session"
          className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Get Early Access
        </a>
        <a
          href="#features"
          className="border border-slate-600 px-8 py-3 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// ✅ Keep all the other sections we finalized earlier: 
// FeaturesSection, PricingSection, TestimonialsSection, StatsSection, CallToActionSection, Footer
// (No blog section here; your subdomain will handle that.)

// --- MAIN PAGE ---
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        {/* Add the sections you finalized earlier here */}
      </main>
    </div>
  );
}
