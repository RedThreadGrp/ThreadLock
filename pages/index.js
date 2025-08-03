import React from 'react';

// --- ICONS ---
const BrainCircuitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// --- CHECKOUT HANDLER ---
const handleCheckout = async () => {
  const res = await fetch('/api/create-checkout-session', { method: 'POST' });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
};

// --- HEADER ---
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10 p-4 bg-gradient-to-r from-slate-900/70 to-transparent">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/threadlock-logo.png" alt="ThreadLock Logo" className="h-10 w-auto" />
        <span className="text-orange-400 text-xs align-super">TM</span>
      </div>
      <nav className="space-x-6 text-slate-300">
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
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/20 to-transparent"></div>
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: `20px 20px` }}></div>
    <div className="relative container mx-auto px-6 py-32 md:py-40 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
        Take Control of Your Family Law Case
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-300">
        Simplify evidence gathering. AI-guided journaling and blockchain-secured timelines give you court-ready documentation.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button onClick={handleCheckout} className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
          Get Early Access
        </button>
        <a href="#features" className="border border-slate-600 px-8 py-3 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-colors">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// --- FEATURE CARD ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-2xl shadow-inner-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

// --- FEATURES ---
const FeaturesSection = () => (
  <section id="features" className="py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Build Evidence the Smart Way</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
        Our platform makes evidence collection simple, secure, and stress-free.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="AI-Guided Journaling">
          Never miss a crucial detail. Our AI guides you to create comprehensive, legally relevant journal entries tailored to your jurisdiction.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Immutable & Secure">
          Every entry is secured on the blockchain, creating a tamper-proof record that stands up to scrutiny.
        </FeatureCard>
        <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Court-Ready Exports">
          Instantly export organized, professional summaries and timelines for your attorney or the court.
        </FeatureCard>
      </div>
    </div>
  </section>
);

// --- TESTIMONIALS ---
const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">Real Stories from Parents</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-slate-700 mb-4 italic">
            “I felt completely lost trying to organize years of texts and emails for my custody case. ThreadLock turned chaos into a clear, court-ready record in days.”
          </p>
          <p className="text-slate-500 font-semibold">— Kelly M., Oregon</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-slate-700 mb-4 italic">
            “Before ThreadLock, I spent nights manually sorting screenshots and messages. Now, I finally feel prepared instead of panicked.”
          </p>
          <p className="text-slate-500 font-semibold">— James R., Texas</p>
        </div>
      </div>
    </div>
  </section>
);

// --- PRICING ---
const PricingSection = () => (
  <section id="pricing" className="py-24 bg-slate-50 text-center text-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Early Access Pricing</h2>
      <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
        Lock in our exclusive early adopter rate. Your first 6 months are just $10.
      </p>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-orange-300 p-8 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Pro Tier</h3>
        <p className="text-slate-500 mb-6">All core features included</p>
        <div className="text-5xl font-extrabold text-slate-900 mb-1">$10</div>
        <div className="text-lg text-slate-500 mb-8">for your first 6 months</div>
        <button onClick={handleCheckout} className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg shadow-md transition-all duration-300">
          Sign Up Now
        </button>
        <p className="text-xs text-slate-400 mt-4">Limited time offer.</p>
      </div>
    </div>
  </section>
);

// --- CTA ---
const CallToActionSection = () => (
  <section className="bg-slate-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Your Case Today</h2>
      <p className="mb-8 max-w-xl mx-auto text-slate-300">
        Your evidence matters. ThreadLock helps you document, secure, and present it clearly—without the stress.
      </p>
      <button onClick={handleCheckout} className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
        Claim Early Access
      </button>
    </div>
  </section>
);

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock. All rights reserved.</p>
  </footer>
);

// --- PAGE ---
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
