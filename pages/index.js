import React from "react";

// --- HEADER ---
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10 p-4 bg-gradient-to-r from-slate-200/80 via-transparent to-transparent backdrop-blur-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/threadlock-logo.png" alt="ThreadLock Logo" className="h-14 w-auto" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-bold text-xl tracking-wide">ThreadLock<sup>TM</sup></span>
      </div>
      <nav className="space-x-6 text-white font-medium">
        <a href="#features" className="hover:text-orange-400">Features</a>
        <a href="#stats" className="hover:text-orange-400">Stats</a>
        <a href="#pricing" className="hover:text-orange-400">Pricing</a>
        <a href="#testimonials" className="hover:text-orange-400">Testimonials</a>
        <a href="https://blog.threadlock.ai" className="hover:text-orange-400">Blog</a>
      </nav>
    </div>
  </header>
);

// --- HERO SECTION ---
const HeroSection = () => (
  <section className="relative text-white bg-slate-900">
    <div className="absolute inset-0 bg-gradient-to-l from-slate-200/20 to-transparent"></div>
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
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
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
        <FeatureCard icon={<span className="text-3xl">🧠</span>} title="AI-Guided Journaling">
          Never miss a crucial detail. Our AI guides you to create comprehensive, legally relevant journal entries tailored to your jurisdiction.
        </FeatureCard>
        <FeatureCard icon={<span className="text-3xl">🛡️</span>} title="Immutable & Secure">
          Every entry is secured on the blockchain, creating a tamper-proof record that stands up to scrutiny.
        </FeatureCard>
        <FeatureCard icon={<span className="text-3xl">📄</span>} title="Court-Ready Exports">
          Instantly export organized, professional summaries and timelines for your attorney, judge, or personal records.
        </FeatureCard>
      </div>
    </div>
  </section>
);

// --- STATISTICS SECTION ---
const StatisticsSection = () => (
  <section id="stats" className="py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        The Scope of the Problem
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
        Family law cases overwhelm courts, and most involve people navigating alone.
      </p>
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">3.8M+</h3>
          <p className="text-slate-600 mt-2">Family law cases filed annually</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">72%</h3>
          <p className="text-slate-600 mt-2">Include at least one self-represented party</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-orange-500">&gt;50%</h3>
          <p className="text-slate-600 mt-2">Evidence often disorganized or incomplete</p>
        </div>
      </div>
    </div>
  </section>
);

// --- TESTIMONIALS SECTION ---
const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-slate-50 text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Real Stories, Real Impact</h2>
      <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
        Families and individuals are reclaiming control over their cases with ThreadLock.
      </p>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-slate-700 italic mb-6">
            "Before ThreadLock, I was drowning in emails and screenshots. Now, I can export a clean timeline for my attorney in minutes. It changed my case."
          </p>
          <h4 className="font-semibold text-slate-900">– Sarah M., Parent</h4>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md">
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
