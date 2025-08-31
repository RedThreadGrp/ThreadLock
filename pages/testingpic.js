import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

/* ---------------- Image Paths ---------------- */
// List of the images you provided. Assumes they are in the /public/ folder.
const images = [
  "/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg",
  "/curated-lifestyle-LUCdjfXP-uE-unsplash.jpg",
  "/getty-images-EZcXgfq9w4A-unsplash.jpg",
  "/blake-cheek-hQesFe5DZoM-unsplash.jpg",
  "/ahmet-kurt-e0pYg9803Bo-unsplash.jpg",
  "/simran-sood-qL0t5zNGFVQ-unsplash.jpg",
  "/pamela-buenrostro-pb4WmJQpfnA-unsplash.jpg",
  "/getty-images-_Mc_zA45s84-unsplash.jpg",
  "/sean-foster-Hvu6H1F8JrU-unsplash.jpg",
  "/mick-kirchman-CjowkkLmLKE-unsplash.jpg",
];


/* ---------------- SEO (page-level) ---------------- */
const SITE_URL = "https://threadlock.ai";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // absolute URL

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

/* ---------------- Text Brand ---------------- */
function BrandWordmark({ className = "" }) {
    return (
        <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
            <span className="text-slate-800">Thread</span>
            <span className="text-orange-600">Lock</span>
            <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
        </span>
    );
}

/* ---------------- Header ---------------- */
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
                <Link href="/">
                    <a><BrandWordmark /></a>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-slate-700 font-semibold">
                    <a href="#features" className="hover:text-orange-600 transition-colors">Features</a>
                     <Link href="/signup">
                        <a className="bg-orange-600 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-orange-700 transform hover:-translate-y-0.5 transition-all">
                            Join Waitlist
                        </a>
                    </Link>
                </nav>
                <button
                    className="md:hidden text-slate-800 p-2"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <XIcon /> : <MenuIcon />}
                </button>
            </div>
            <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
                <div className="px-4 pb-4 pt-2 text-slate-800 space-y-2 bg-white border-t border-slate-200">
                    <a href="#features" onClick={() => setOpen(false)} className="block py-2 hover:text-orange-600">Features</a>
                    <Link href="/signup">
                        <a onClick={() => setOpen(false)} className="w-full mt-2 bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all block text-center">
                            Join the Waitlist
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

/* ---------------- Sections ---------------- */

// --- MODIFIED HeroSection to accept a background image ---
const HeroSection = ({ bgImage }) => (
    <section 
        className="relative text-white bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        {/* Overlay for text readability */}
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
    <section id="features" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Build Your Case with Confidence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
                Our platform is designed to make evidence collection simple, secure, and stress-free.
            </p>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
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

// --- MODIFIED OurMissionSection to accept a background image ---
const OurMissionSection = ({ bgImage }) => (
    <section 
        id="mission" 
        className="relative py-20 md:py-28 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-slate-800/80"></div>
        
        <div className="relative container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission: A Fair Shot for Everyone</h2>
            <blockquote className="border-l-4 border-orange-500 pl-6 md:pl-8 text-left text-lg md:text-xl italic text-slate-200 leading-relaxed">
                "I could have been angry, but I saw something else: a good person constrained by a bad system. The only reason a champion for justice becomes the hand of an unfeeling system is a lack of an alternative. We built that alternative."
            </blockquote>
            <p className="mt-6 text-slate-300">— A Judge, speaking to our founder</p>
            <Link href="/founder-story">
                <a className="mt-8 inline-block text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                    Read the Full Founder Story &rarr;
                </a>
            </Link>
        </div>
    </section>
);

const SignupSection = () => (
    <section id="signup" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Be the First to Know</h2>
            <p className="text-lg text-slate-600 mb-8">
                Join our waitlist for early access to the ThreadLock app, plus exclusive updates and resources.
            </p>
            <form className="max-w-md mx-auto">
                 <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        className="flex-grow px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                    <button type="submit" className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all">
                        Join Waitlist
                    </button>
                </div>
            </form>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
        <p>© {new Date().getFullYear()} ThreadLock.ai. All rights reserved.</p>
    </footer>
);


/* ---------------- NEW: Image Switcher UI ---------------- */
const ImageSwitcher = ({ current, total, onChange }) => (
    <div className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-md p-3 rounded-lg shadow-2xl border border-slate-200">
        <p className="text-sm font-bold text-slate-700 mb-2 text-center">Test Backgrounds</p>
        <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    className={`w-10 h-10 rounded-md text-sm font-bold transition-all ${
                        current === i 
                        ? 'bg-orange-600 text-white scale-110 shadow-lg' 
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    </div>
);


/* ---------------- Main Page Component ---------------- */
export default function TestingPicPage() {
    // State to track the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <>
            <Head>
                <title>IMAGE TEST | ThreadLock™</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            {/* NEW: Image Switcher Control */}
            <ImageSwitcher 
                current={currentImageIndex}
                total={images.length}
                onChange={setCurrentImageIndex}
            />

            <div className="bg-white">
                <Header/>
                <main className="flex flex-col w-full overflow-x-hidden">
                    {/* Pass the selected image to the sections */}
                    <HeroSection bgImage={images[currentImageIndex]} />
                    <FeaturesSection />
                    <OurMissionSection bgImage={images[currentImageIndex]} />
                    <SignupSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
