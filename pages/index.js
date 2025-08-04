import React, { useState } from 'react';

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
const ChevronLeftIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);

// --- UI MOCKUP COMPONENTS ---
// These are SVG-based mockups to visually represent the application's UI.
const JournalUIMockup = () => (
    <div className="w-full h-full bg-slate-800 rounded-xl p-4 flex gap-4 aspect-[4/3] text-white">
        <div className="w-1/3 bg-slate-700/50 rounded-lg p-3">
            <h4 className="font-bold mb-3 text-sm">AI Suggestions</h4>
            <ul className="space-y-2 text-xs text-slate-300">
                <li className="bg-slate-600/50 p-2 rounded">Who was present?</li>
                <li className="bg-slate-600/50 p-2 rounded">What was the date and time?</li>
                <li className="bg-slate-600/50 p-2 rounded">Is there photo evidence?</li>
            </ul>
        </div>
        <div className="w-2/3 bg-slate-700/50 rounded-lg p-3 flex flex-col">
            <h4 className="font-bold mb-2 text-sm">New Journal Entry</h4>
            <div className="flex-grow bg-slate-600/40 rounded p-2 text-xs text-slate-400">
                On Friday evening, the other party was 30 minutes late for the custody exchange...
            </div>
            <div className="flex justify-end gap-2 mt-2">
                <button className="text-xs bg-slate-600 px-3 py-1 rounded">Attach File</button>
                <button className="text-xs bg-orange-500 px-3 py-1 rounded">Save Entry</button>
            </div>
        </div>
    </div>
);

const TimelineUIMockup = () => (
    <div className="w-full h-full bg-slate-800 rounded-xl p-4 flex flex-col aspect-[4/3] text-white">
        <h4 className="font-bold text-sm mb-4 text-center">Evidence Timeline</h4>
        <div className="relative flex-grow pl-8 pr-4">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-600"></div>
            <div className="space-y-4">
                <div className="relative">
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg text-xs">
                        <p className="font-semibold">Custody Exchange Late</p>
                        <p className="text-slate-400">July 26, 2025 - 6:30 PM</p>
                        <span className="text-green-400 text-[10px] flex items-center gap-1 mt-1"><ShieldCheckIcon className="w-3 h-3"/> Blockchain Verified</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-5 top-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg text-xs">
                        <p className="font-semibold">Email Received</p>
                        <p className="text-slate-400">July 25, 2025 - 9:15 AM</p>
                        <span className="text-green-400 text-[10px] flex items-center gap-1 mt-1"><ShieldCheckIcon className="w-3 h-3"/> Blockchain Verified</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PdfExportUIMockup = () => (
    <div className="w-full h-full bg-slate-800 rounded-xl p-4 flex flex-col items-center justify-center aspect-[4/3] text-white">
        <h4 className="font-bold text-sm mb-3">Court-Ready PDF Export</h4>
        <div className="w-3/4 h-3/4 bg-white rounded-md shadow-lg p-4 text-black flex flex-col">
            <h5 className="text-sm font-bold border-b pb-1">Case Summary: Sarah M.</h5>
            <p className="text-[8px] mt-2 text-slate-700 leading-tight">
                <strong>July 26, 2025:</strong> Custody Exchange Late. On Friday evening, the other party was 30 minutes late for the custody exchange...
            </p>
            <p className="text-[8px] mt-2 text-slate-700 leading-tight">
                <strong>July 25, 2025:</strong> Email Received. Received a hostile email regarding scheduling...
            </p>
            <div className="flex-grow"></div>
            <p className="text-[7px] text-center text-slate-500">Page 1 of 5</p>
        </div>
        <button className="text-xs bg-orange-500 px-4 py-1.5 rounded-md mt-3">Download PDF</button>
    </div>
);


// --- HEADER ---
const Header = ({ handleCheckout, isLoading }) => (
  <header className="absolute top-0 left-0 w-full z-10 p-4 bg-gradient-to-r from-slate-900/50 via-slate-900/20 to-transparent backdrop-blur-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/threadlock-logo.png" alt="ThreadLock Logo" className="h-20 w-auto" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/1e293b/f97316?text=T' }} />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold text-xl tracking-wide">™</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-white font-medium items-center">
        <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
        <a href="#showcase" className="hover:text-orange-400 transition-colors">Showcase</a>
        <a href="#stats" className="hover:text-orange-400 transition-colors">Stats</a>
        <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a>
        <a href="https://blog.threadlock.ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Blog</a>
        <button onClick={handleCheckout} disabled={isLoading} className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out disabled:bg-orange-400 disabled:cursor-not-allowed">
          {isLoading ? '...' : 'Get Started'}
        </button>
      </nav>
    </div>
  </header>
);


// --- HERO SECTION ---
const HeroSection = ({ handleCheckout, isLoading }) => (
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
        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:bg-orange-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Processing...' : 'Get Early Access'}
        </button>
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

// --- PRODUCT SHOWCASE SECTION ---
const ProductShowcaseSection = () => {
    const slidesData = [
        {
            title: "AI-Guided Journaling",
            description: "Never miss a crucial detail. Our AI provides smart prompts to ensure you capture the specific, legally-relevant information needed for your case and jurisdiction.",
            mockup: <JournalUIMockup />,
            callouts: [
                { text: "Smart prompts suggest legally relevant details.", position: "top-1/4 left-10" },
                { text: "Easily attach files, photos, and audio evidence.", position: "bottom-1/4 right-10" },
            ]
        },
        {
            title: "Immutable Timeline",
            description: "View your entire case history in a clean, chronological timeline. Every entry is secured on the blockchain, creating a tamper-proof record that stands up to scrutiny.",
            mockup: <TimelineUIMockup />,
            callouts: [
                { text: "Blockchain-verified timestamp for each entry.", position: "top-20 left-12" },
                { text: "Filter and search your entire case history instantly.", position: "bottom-20 right-12" },
            ]
        },
        {
            title: "Court-Ready Exports",
            description: "Instantly generate and export professional, court-ready PDF summaries and timelines. Save time and legal fees by providing your attorney with organized documentation.",
            mockup: <PdfExportUIMockup />,
            callouts: [
                { text: "One-click PDF generation.", position: "top-1/3 left-8" },
                { text: "Formatted for clarity and legal review.", position: "bottom-1/3 right-8" },
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slidesData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const Callout = ({ text, position }) => (
        <div className={`absolute ${position} hidden md:block`}>
            <div className="relative flex items-center">
                <div className="bg-white/90 backdrop-blur-sm text-slate-800 font-semibold py-2 px-4 rounded-lg shadow-lg">
                    {text}
                </div>
                <div className="absolute w-3 h-3 bg-white/90 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-0 transform -translate-x-full"></div>
            </div>
        </div>
    );

    return (
        <section id="showcase" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                    See ThreadLock in Action
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
                    A quick look at how our key features help you build a stronger case.
                </p>
                <div className="max-w-6xl mx-auto">
                    <div className="relative bg-slate-200 rounded-2xl shadow-2xl p-4">
                         {slidesData[currentIndex].mockup}
                        {/* The callouts are now part of the mockup design, but this structure is kept if you want to overlay them on real images later */}
                        {/* {slidesData[currentIndex].callouts.map((callout, index) => (
                            <Callout key={index} text={callout.text} position={callout.position} />
                        ))} */}
                    </div>

                    <div className="relative mt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-left md:w-1/2">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">{slidesData[currentIndex].title}</h3>
                            <p className="text-slate-600">{slidesData[currentIndex].description}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 mt-6 md:mt-0">
                           <button onClick={goToPrevious} className="p-3 rounded-full bg-white shadow-md hover:bg-slate-100 transition">
                                <ChevronLeftIcon className="h-6 w-6 text-slate-700"/>
                            </button>
                            <div className="flex gap-2">
                                {slidesData.map((slide, slideIndex) => (
                                    <div 
                                        key={slideIndex}
                                        onClick={() => setCurrentIndex(slideIndex)}
                                        className={`h-3 w-3 rounded-full cursor-pointer transition-colors ${currentIndex === slideIndex ? 'bg-orange-500' : 'bg-slate-300 hover:bg-slate-400'}`}
                                    ></div>
                                ))}
                            </div>
                            <button onClick={goToNext} className="p-3 rounded-full bg-white shadow-md hover:bg-slate-100 transition">
                                <ChevronRightIcon className="h-6 w-6 text-slate-700"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


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
const PricingSection = ({ handleCheckout, isLoading }) => (
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
        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg shadow-md transition-all duration-300 disabled:bg-orange-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Processing...' : 'Sign Up Now'}
        </button>
        <p className="text-xs text-slate-400 mt-4">Limited time offer.</p>
      </div>
    </div>
  </section>
);

// --- CALL TO ACTION SECTION ---
const CallToActionSection = ({ handleCheckout, isLoading }) => (
  <section className="bg-slate-800 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Start Building Your Case Today
      </h2>
      <p className="mb-8 max-w-xl mx-auto text-slate-300">
        Your evidence matters. ThreadLock helps you document, secure, and present it clearly—without the stress.
      </p>
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:bg-orange-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : 'Claim Early Access'}
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

// --- MAIN PAGE ---
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // This function handles the checkout process.
  const handleCheckout = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      // Send a POST request to the API route.
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        // If the server response is not OK, throw an error.
        throw new Error('Failed to create checkout session.');
      }

      // Get the session URL from the response.
      const { url } = await response.json();
      
      // Redirect the user to the Stripe checkout page.
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('Checkout URL not found.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      // You can add user-facing error handling here, e.g., a toast notification.
      alert('An error occurred. Please try again.');
      setIsLoading(false); // Reset loading state on error
    }
    // No need to set isLoading to false on success, as the page will redirect.
  };

  return (
    <div className="bg-white">
      <Header handleCheckout={handleCheckout} isLoading={isLoading} />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection handleCheckout={handleCheckout} isLoading={isLoading} />
        <FeaturesSection />
        <ProductShowcaseSection />
        <StatisticsSection />
        <TestimonialsSection />
        <PricingSection handleCheckout={handleCheckout} isLoading={isLoading} />
        <CallToActionSection handleCheckout={handleCheckout} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
}
