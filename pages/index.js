import React from 'react';

// --- SVG ICONS ---
// Using inline SVGs is a great practice in React.
// It avoids extra network requests and allows for easy styling with CSS.
const BrainCircuitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.23" /><path d="M18.668 15.65a3 3 0 1 0-5.993.23" /><path d="M12 12a3 3 0 1 0-5.993.23" /><path d="M12 19a3 3 0 1 0-5.993.23" /><path d="M18.668 8.65a3 3 0 1 0-5.993.23" /><path d="M12 5a3 3 0 1 0 5.993.23" /><path d="m12 12 2.5 2.5" /><path d="m12 5-2.5 2.5" /><path d="m18.5 8.5 2.5 2.5" /><path d="m12 19 2.5-2.5" /><path d="m6.5 8.5-2.5 2.5" /></svg>
);
const ShieldCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
);


// --- HEADER ---
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10 p-4 bg-gradient-to-r from-slate-900/50 via-slate-900/20 to-transparent backdrop-blur-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/threadlock-logo.png" alt="ThreadLock Logo" className="h-14 w-auto" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/1e293b/f97316?text=T' }} />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold text-xl tracking-wide">ThreadLock™</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-white font-medium items-center">
        <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
        <a href="#stats" className="hover:text-orange-400 transition-colors">Stats</a>
        <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a>
        <a href="https://blog.threadlock.ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Blog</a>
        <a href="#pricing" className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
          Get Started
        </a>
      </nav>
    </div>
  </header>
);


// --- HERO SECTION ---
const HeroSection = () => (
  <section className="relative text-white bg-slate-900 pt-24">
    <div className="absolute inset-0 bg-gradient-to-l from-slate-800/20 to-transparent"></div>
    <div className="relative container mx-auto px-6 py-32 md:py-40 text-center">
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

// --- FEATURE CARD ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
        Our platform is designed to make evidence collection simple, secure, and stress-free.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="AI-Guided Journaling">
          Never miss a crucial detail. Our AI guides you to create comprehensive, legally relevant journal entries tailored to your jurisdiction.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Immutable & Secure">
          Every entry is secured on the blockchain, creating a tamper-proof record that stands up to scrutiny.
        </FeatureCard>
        <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Court-Ready Exports">
          Instantly export organized, professional summaries and timelines for your attorney, judge, or personal records.
        </FeatureCard>
      </div>
    </div>
  </section>
);

// --- STATISTICS SECTION ---
const StatisticsSection = () => (
    <section id="stats" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
                The Scope of the Problem
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-16">
                Family law cases overwhelm courts, and most involve people navigating the system alone.
            </p>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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
                    <p className="text-slate-400 mt-2 font-medium">Of evidence is often disorganized or incomplete</p>
                </div>
            </div>
        </div>
    </section>
);


// --- TESTIMONIALS SECTION ---
const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Real Stories, Real Impact</h2>
      <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
        Families and individuals are reclaiming control over their cases with ThreadLock.
      </p>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="bg-slate-50 p-8 rounded-xl shadow-md">
          <p className="text-slate-700 italic mb-6">
            "Before ThreadLock, I was drowning in emails and screenshots. Now, I can export a clean timeline for my attorney in minutes. It changed my case."
          </p>
          <h4 className="font-semibold text-slate-900">– Sarah M., Parent</h4>
        </div>
        <div className="bg-slate-50 p-8 rounded-xl shadow-md">
          <p className="text-slate-700 italic mb-6">
            "Keeping track of incidents used to feel impossible. ThreadLock gave me peace of mind and a clear, organized record for court."
          </p>
          <h4 className="font-semibold text-slate-900">– David L., Self-Represented Litigant</h4>
        </div>
      </div>
    </div>
  </section>
);

// --- PRICING SECTION ---
const PricingSection = () => (
  <section id="pricing" className="py-24 bg-slate-50 text-center text-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Early Access Pricing</h2>
      <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
        Join now to lock in our exclusive early adopter rate. Your first 6 months are just $10.
      </p>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-orange-300 p-8 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Pro Tier</h3>
        <p className="text-slate-500 mb-6">All core features included</p>
        <div className="text-5xl font-extrabold text-slate-900 mb-1">$10</div>
        <div className="text-lg text-slate-500 mb-8">for your first 6 months</div>
        <a
          href="/api/create-checkout-session"
          className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg shadow-md transition-all duration-300"
        >
          Sign Up Now
        </a>
        <p className="text-xs text-slate-400 mt-4">Limited time offer.</p>
      </div>
    </div>
  </section>
);

// --- CALL TO ACTION SECTION ---
const CallToActionSection = () => (
  <section className="bg-slate-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Start Building Your Case Today
      </h2>
      <p className="mb-8 max-w-xl mx-auto text-slate-300">
        Your evidence matters. ThreadLock helps you document, secure, and present it clearly—without the stress.
      </p>
      <a
        href="/api/create-checkout-session"
        className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        Claim Early Access
      </a>
    </div>
  </section>
);

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock. All rights reserved.</p>
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
        <TestimonialsSection />
        <PricingSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

