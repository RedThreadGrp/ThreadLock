import React, { useEffect } from 'react';

// --- Smooth Scroll Hook ---
const useSmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href')?.slice(1);
        if (!targetId) return;
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
  }, []);
};

// --- Icon Components ---
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

// --- Header ---
const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-sm z-20">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#top" className="flex items-center space-x-2">
        <img src="/threadlock-logo.png" alt="ThreadLock Logo" className="h-10 w-auto" />
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

// --- Hero Section ---
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
        Simplify evidence gathering. AI-guided journaling + blockchain-secured timelines give you court-ready documentation and peace of mind.
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

// --- Feature Card ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 flex items-center justify-center rounded-2xl shadow-inner-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">
      {title}
    </h3>
    <p className="text-slate-600 leading-relaxed">
      {children}
    </p>
  </div>
);

// --- Features Section ---
const FeaturesSection = () => (
  <section id="features" className="py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
        Build Evidence the Smart Way
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
        Our platform makes evidence collection simple, secure, and stress-free.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="AI-Guided Journaling">
          Never miss a crucial detail. AI prompts guide you to create comprehensive, jurisdiction-ready entries.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Immutable & Secure">
          Every entry is blockchain-secured, creating a tamper-proof record that stands up in court.
        </FeatureCard>
        <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Court-Ready Exports">
          Instantly export organized timelines and summaries for attorneys, mediators, or judges.
        </FeatureCard>
      </div>
    </div>
  </section>
);

// --- Pricing Section ---
const PricingSection = () => (
  <section id="pricing" className="py-24 bg-slate-50 text-center text-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Early Access Pricing</h2>
      <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
        Join now to lock in our early adopter rate: first 6 months just $10.
      </p>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-orange-300 p-8 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Pro Tier</h3>
        <p className="text-slate-500 mb-6">All core features included</p>
        <div className="text-5xl font-extrabold text-slate-900 mb-1">
          $10
        </div>
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

// --- Testimonials Section ---
const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">What Parents Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
          <p className="leading-relaxed mb-6">
            “ThreadLock made an overwhelming process manageable. I went from keeping scattered screenshots to having a clean, court-ready record.”
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img src="/parent1.jpg" alt="Parent" className="w-12 h-12 rounded-full object-cover"/>
            <div className="text-left">
              <p className="font-semibold text-slate-900">Jessica M.</p>
              <p className="text-slate-500 text-sm">Mother navigating custody</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
          <p className="leading-relaxed mb-6">
            “I was terrified of missing something important. ThreadLock gave me structure and confidence for my hearings.”
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img src="/parent2.jpg" alt="Parent" className="w-12 h-12 rounded-full object-cover"/>
            <div className="text-left">
              <p className="font-semibold text-slate-900">David K.</p>
              <p className="text-slate-500 text-sm">Father in joint custody case</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Stats Section ---
const StatsSection = () => (
  <section id="stats" className="py-24 bg-slate-50 text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">The Scope of the Problem</h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-4xl font-extrabold text-orange-500">3.8M+</p>
          <p className="text-slate-600">Family law cases filed annually in the U.S.</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-orange-500">72%</p>
          <p className="text-slate-600">Involve at least one self-represented party</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-orange-500">50%</p>
          <p className="text-slate-600">Report difficulty organizing evidence</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-orange-500">80%</p>
          <p className="text-slate-600">Say better records improve outcomes</p>
        </div>
      </div>
    </div>
  </section>
);

// --- CTA Section ---
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

// --- Footer ---
const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
    <p>© {new Date().getFullYear()} ThreadLock. All rights reserved.</p>
  </footer>
);

// --- Main Page ---
export default function Home() {
  useSmoothScroll();

  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <StatsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
