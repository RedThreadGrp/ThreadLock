import React, { useState } from 'react';

/* ----------------- Brand ----------------- */
function BrandWordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
      <span className="text-slate-800">Thread</span>
      <span className="text-orange-600">Lock</span>
      <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
    </span>
  );
}

export default function FounderStoryPage() {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* --- Styles --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

        :root {
          --orange-600: #ea580c;
          --orange-700: #c2410c;
          --blue-900: #1e293b; 
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-300: #d1d5db;
          --gray-700: #374151;
          --gray-800: #1f2937;
          --gray-900: #0f172a;
          --white: #ffffff;
          --font-family: 'Poppins', sans-serif;

          /* image urls (swap to /public paths in Next.js) */
          --hero-url: url('/mnt/data/ahmed-tB_QL1ToYBQ-unsplash.jpg');          /* woman on subway */
          --step3-url: url('/mnt/data/getty-images-6iVK12iAn_s-unsplash.jpg');   /* man + child */
        }

        body { font-family: var(--font-family); background-color: var(--gray-50); color: var(--gray-900); margin: 0; }
        .page-container { min-height: 100vh; background-color: var(--gray-50); }
        .max-w-5xl { max-width: 64rem; } .max-w-4xl { max-width: 56rem; } .mx-auto { margin-left: auto; margin-right: auto; }

        /* Header */
        .header {
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--gray-100);
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0; z-index: 20;
        }
        .brand-link { text-decoration: none; }

        /* desktop nav */
        .nav-links {
          display: flex; align-items: center;
        }
        .nav-links a {
          color: var(--gray-800); font-weight: 600; text-decoration: none;
          margin-left: 1.5rem; transition: all 0.2s;
        }
        .nav-links a:hover { color: var(--orange-600); }
        .nav-links a.active { color: var(--orange-600); border-bottom: 2px solid var(--orange-600); padding-bottom: 2px; }
        .waitlist-button {
          background-color: var(--orange-600); color: var(--white); font-weight: 700;
          padding: 0.5rem 1.25rem; border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
        }
        .waitlist-button:hover { background-color: var(--orange-700); color: var(--white); transform: translateY(-2px); border-bottom: none; padding-bottom: 0.5rem; }

        /* hamburger button (hidden on wide screens) */
        .hamburger {
          display: none; background: transparent; border: 0; padding: 0.25rem; cursor: pointer;
        }
        .hamburger svg { width: 28px; height: 28px; color: var(--gray-900); }

        /* mobile menu panel */
        .mobile-panel {
          display: none;
          position: fixed; top: 64px; left: 0; right: 0;
          background: rgba(255,255,255,0.98); border-bottom: 1px solid var(--gray-100);
          padding: 0.75rem 1rem; z-index: 30;
        }
        .mobile-panel a {
          display: block; padding: 0.75rem 0.5rem;
          color: var(--gray-900); text-decoration: none; font-weight: 600;
        }
        .mobile-panel a + a { border-top: 1px solid var(--gray-100); }
        .mobile-panel .waitlist-button { display: inline-block; margin-top: 0.5rem; }

        /* show hamburger & collapse nav under 992px */
        @media (max-width: 991px) {
          .nav-links { display: none; }
          .hamburger { display: inline-flex; }
          .mobile-panel.open { display: block; }
        }

        /* Hero Section with background image */
        .hero {
          position: relative;
          padding: 6rem 1.25rem;
          text-align: center;
          color: var(--white);
          background-image: var(--hero-url);
          background-size: cover;
          background-position: center;
          isolation: isolate;
        }
        .hero::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.25), rgba(0,0,0,0.55));
          z-index: -1;
        }
        .hero h2 { font-size: 2.4rem; line-height: 1.2; font-weight: 800; margin-bottom: 1rem; }
        .hero p  { font-size: 1.125rem; max-width: 48rem; margin: 0 auto; color: #f2f4f7; }

        /* Story Flow */
        .story-flow { padding: 4rem 1.5rem; }
        .story-step { max-width: 42rem; margin: 0 auto 3.5rem auto; text-align: center; }
        .step-number {
          display: inline-block; background-color: #feefc7; color: #d97706; font-weight: 700;
          font-size: 0.9rem; padding: 0.25rem 0.75rem; border-radius: 9999px; margin-bottom: 1rem;
        }
        .story-step h3 { font-size: 2rem; font-weight: 700; color: var(--blue-900); margin-bottom: 1rem; }
        .story-step p  { font-size: 1.1rem; color: var(--gray-700); line-height: 1.8; }
        .story-step.highlighted {
          background-color: var(--white); padding: 2.5rem; border-radius: 1rem;
          border: 1px solid var(--gray-100); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        /* Step 3 with background */
        .story-step.step-3 {
          color: var(--white);
          background-image: var(--step3-url);
          background-size: cover; background-position: center;
          position: relative; overflow: hidden;
        }
        .story-step.step-3::before {
          content: ""; position: absolute; inset: 0;
          background: rgba(0,0,0,0.45);
          border-radius: 1rem;
        }
        .story-step.step-3 > * { position: relative; }
        .story-step.step-3 h3 { color: #fff; }
        .story-step.step-3 p  { color: #f3f4f6; }

        .story-blockquote {
          background-color: var(--white); padding: 1.5rem; border-radius: 0.5rem;
          border-left: 4px solid var(--orange-600); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          text-align: left; margin: 2rem auto; font-size: 1.2rem; font-style: italic; color: var(--gray-800);
          max-width: 38rem;
        }
        .epiphany-conclusion {
          background-color: var(--blue-900); color: var(--gray-100);
          padding: 2.5rem; border-radius: 0.75rem; text-align: left; margin: 0 auto; max-width: 42rem;
        }
        .epiphany-conclusion p { color: var(--gray-300); font-size: 1.1rem; line-height: 1.8; }

        /* Features */
        .features-section { background-color: var(--white); padding: 4rem 1.5rem; }
        .features-section h3 { font-size: 2rem; font-weight: 700; margin-bottom: 2rem; color: var(--blue-900); text-align: center; }
        .features-grid { display: grid; gap: 2rem; }
        @media (min-width: 768px) { .features-grid { grid-template-columns: repeat(3, 1fr); } }
        .feature-card { background-color: var(--gray-50); padding: 2rem; border-radius: 1rem; border: 1px solid var(--gray-100); text-align: center; }
        .feature-card h4 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--orange-600); }
        .feature-card p { color: var(--gray-700); font-size: 0.95rem; }

        /* Closing CTA */
        .closing-cta { background-color: var(--blue-900); padding: 4rem 1.5rem; text-align: center; color: var(--white); }
        .closing-cta h3 { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; color: var(--white); }
        .closing-cta p { margin-bottom: 2rem; opacity: 0.9; }
        .cta-link { background-color: var(--orange-600); color: var(--white); padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: 700; transition: background-color 0.2s; text-decoration: none; display: inline-block; }
        .cta-link:hover { background-color: var(--orange-700); }

        /* Footer */
        .footer { background-color: var(--gray-900); color: var(--gray-300); padding: 1.5rem; text-align: center; font-size: 0.9rem; }

        /* --- Mobile text justification & better wrapping --- */
        @media (max-width: 640px) {
          p, .story-step p, .hero p, .epiphany-conclusion p, .feature-card p, .closing-cta p, blockquote {
            text-align: justify;
            text-justify: inter-word;
            hyphens: auto;
            overflow-wrap: anywhere;
          }
          .hero h2 { font-size: 1.9rem; }
        }
      `}</style>

      <div className="page-container">
        {/* Header */}
        <header className="header">
          <a href="/" className="brand-link" aria-label="ThreadLock Home"><BrandWordmark /></a>

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Primary">
            <a href="https://www.threadlock.ai">Home</a>
            <a href="/founder-story" className="active">Our Story</a>
            <a href="/signup" className="waitlist-button">Join Waitlist</a>
          </nav>

          {/* Hamburger (shown on small screens) */}
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            {/* simple hamburger/close toggle */}
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          {/* Mobile panel */}
          <div className={`mobile-panel ${menuOpen ? 'open' : ''}`}>
            <a href="https://www.threadlock.ai" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/founder-story" className="active" onClick={() => setMenuOpen(false)}>Our Story</a>
            <a href="/signup" className="waitlist-button" onClick={() => setMenuOpen(false)}>Join Waitlist</a>
          </div>
        </header>

        <main>
          {/* Hero Section (woman photo) */}
          <section className="hero">
            <div className="max-w-4xl mx-auto">
              <h2>The System Puts Everyone in a Box.<br/>Even the Judge.</h2>
              <p>Our founder's journey through the family court system revealed a surprising truth that became the foundation for ThreadLock.</p>
            </div>
          </section>

          {/* Story Flow Section */}
          <section className="story-flow">
            <h2 style={{textAlign:'center', fontSize:'2.5rem', fontWeight:800, color:'var(--blue-900)', marginBottom:'3rem'}}>
              A Journey in Three Steps
            </h2>

            <div className="story-step highlighted">
              <span className="step-number">STEP 1</span>
              <h3>The Expectation</h3>
              <p>
                I walked into family court to represent myself. I'd been to law school, but after several years as a stay-at-home mom, I had no money for a lawyer and no access to professional resources. I thought my legal knowledge would be enough to guide me through the process. I was wrong.
              </p>
            </div>

            <div className="story-step highlighted">
              <span className="step-number">STEP 2</span>
              <h3>The Reality</h3>
              <p>
                The system wasn't just complex; it felt designed to be bewildering. My confidence was quickly replaced by the same fear and powerlessness that millions of people feel every year.
              </p>
            </div>

            {/* Step 3 with man+child background */}
            <div className="story-step highlighted step-3" style={{marginBottom:'1.5rem'}}>
              <span className="step-number">STEP 3</span>
              <h3>The Epiphany</h3>
              <p>
                The moment that changed everything was when I learned about the judge in my case. Before the robe, they were a champion for the underdog. Yet, from the bench, they were unable to provide the very access they once fought for.
              </p>
            </div>

            <blockquote className="story-blockquote">
              "Instead of anger, I felt a moment of clarity. I saw a good person constrained by a bad system."
            </blockquote>

            <div className="epiphany-conclusion">
              <p>
                The only reason a champion for justice becomes the hand of an unfeeling system is a lack of an alternative. The problem wasn't the judge. It was a crisis of information.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="max-w-5xl mx-auto">
              <h3>The Result: A Solvable Problem</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>Clarity over Chaos</h4>
                  <p>A secure place to organize documents, messages, and evidence.</p>
                </div>
                <div className="feature-card">
                  <h4>Guidance over Guesswork</h4>
                  <p>AI that provides jurisdiction-specific guidance, not just generic advice.</p>
                </div>
                <div className="feature-card">
                  <h4>Truth over Confusion</h4>
                  <p>Timelines and court-ready proof so the truth is seen clearly.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="closing-cta">
            <div className="max-w-4xl mx-auto">
              <h3>You're not powerless. You're just unprepared.</h3>
              <p>Let ThreadLock change that. We’re putting power back into the hands of everyday people, one case at a time.</p>
              <a href="https://www.threadlock.ai" className="cta-link">Get Started with ThreadLock</a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© {currentYear} ThreadLock.ai. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
