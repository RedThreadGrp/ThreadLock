import React from 'react';

// --- SVG ICONS ---
const BrainCircuitIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// --- COMPONENTS ---
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10 p-4">
    <div className="container mx-auto flex justify-between items-center"></div>
  </header>
);

const HeroSection = () => (
  <section className="relative text-white bg-slate-900">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/20 to-transparent"></div>
    <div 
      className="absolute inset-0 opacity-5"
      style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: `20px 20px` }}
    ></div>
    <div className="relative container mx-auto px-6 py-32 md:py-40 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
        Take Control of Your Family Law Case
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-300">
        Simplify evidence gathering with AI-guided journaling and blockchain-secured timelines.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#pricing" className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
          Get Early Access
        </a>
        <a href="#features" className="border border-slate-600 px-8 py-3 rounded-lg hover:bg-slate-800 hover:border-slate-500 transition-colors">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
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
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
        AI, blockchain, and automation to simplify your evidence collection.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={<BrainCircuitIcon className="w-8 h-8" />} title="AI-Guided Journaling">
          Create legally relevant entries tailored to your jurisdiction.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Immutable & Secure">
          Every entry is blockchain-secured for tamper-proof records.
        </FeatureCard>
        <FeatureCard icon={<FileTextIcon className="w-8 h-8" />} title="Court-Ready Exports">
          Instantly generate clean, professional summaries for court.
        </FeatureCard>
      </div>
    </div>
  </section>
);

const StatisticsSection = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 text-center">
        {[
          { value: "2.7K", label: "Downloads" },
          { value: "1.3K", label: "Users" },
          { value: "74", label: "Files" },
          { value: "46", label: "Places" },
        ].map((stat, i) => (
          <div key={i} className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">{stat.value}</h2>
              <p className="leading-relaxed">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-gray-100 p-8 rounded">
            <p className="leading-relaxed mb-6">
              "Navigating custody paperwork felt impossible—until ThreadLock. It gave me clarity and confidence with everything documented in one secure place."
            </p>
            <div className="inline-flex items-center">
              <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">Sarah M.</span>
                <span className="text-gray-500 text-sm">Parent & Early User</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -my-8">
        {[1,2,3].map((b) => (
          <div key={b} className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Sample Blog Post {b}</h1>
                <p className="leading-relaxed mb-5">Quick insights on managing family law cases effectively with ThreadLock.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="bg-slate-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Start Building Your Case Today
      </h2>
      <p className="mb-8 max-w-xl mx-auto text-slate-300">
        ThreadLock helps you document, secure, and present your evidence clearly.
      </p>
      <a href="/api/create-checkout-session" className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
        Claim Early Access
      </a>
    </div>
  </section>
);

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
        <BlogSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
