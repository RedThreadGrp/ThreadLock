import React from 'react';

// --- SVG ICONS ---
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

// --- HEADER ---
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-20 bg-gradient-to-r from-white/90 to-transparent">
    <div className="container mx-auto flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-2">
        <img
          src="/threadlock-logo.png"
          alt="ThreadLock Logo"
          className="h-20 w-auto drop-shadow-lg"
        />
        <span className="text-slate-800 font-bold text-xl tracking-wide">™</span>
      </div>
      <nav className="space-x-6 text-white font-medium">
        <a href="#features" className="hover:text-orange-400 transition">Features</a>
        <a href="#pricing" className="hover:text-orange-400 transition">Pricing</a>
        <a href="#testimonials" className="hover:text-orange-400 transition">Testimonials</a>
        <a href="https://blog.threadlock.ai" className="hover:text-orange-400 transition">Blog</a>
      </nav>
    </div>
  </header>
);

// --- HERO ---
const HeroSection = () => (
  <section className="relative text-white bg-slate-900">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900"></div>

    <div className="relative container mx-auto px-6 py-40 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
        Take Control of Your Family Law Case
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-300">
        Simplify evidence gathering. AI-guided journaling and blockchain-secured timelines give you court-ready documentation and peace of mind.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#pricing" className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition">
          Get Early Access
        </a>
        <a href="#features" className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// --- FEATURES ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-2xl shadow-inner-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Build Evidence the Smart Way
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="AI-Guided Journaling">
          Never miss crucial details with AI prompts tailored to family law cases.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Immutable & Secure">
          Blockchain-backed entries create a tamper-proof record of events.
        </FeatureCard>
        <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Court-Ready Exports">
          Export professional summaries and timelines for court or counsel in seconds.
        </FeatureCard>
      </div>
    </div>
  </section>
);

// --- TESTIMONIALS ---
const TestimonialsSection = () => (
  <section id="testimonials" className="bg-white py-24 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">What Parents Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-100 p-8 rounded-lg shadow">
          <p className="text-slate-700 italic mb-4">
            “Trying to keep track of every text and email was overwhelming. ThreadLock gave me a system and the confidence that nothing would slip through the cracks.”
          </p>
          <p className="font-bold text-slate-900">— Emily R., Single Parent</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow">
          <p className="text-slate-700 italic mb-4">
            “I went from a disorganized mess to a clean timeline my attorney could actually use. It changed how I approached my custody case.”
          </p>
          <p className="font-bold text-slate-900">— Jason M., Father of Two</p>
        </div>
      </div>
    </div>
  </section>
);

// --- CTA ---
const CallToActionSection = () => (
  <section className="bg-slate-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Your Case Today</h2>
      <a href="/api/create-checkout-session" className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition">
        Claim Early Access
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock™. All rights reserved.</p>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
