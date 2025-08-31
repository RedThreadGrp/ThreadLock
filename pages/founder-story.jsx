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
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

        :root{
          --orange-600:#ea580c; --orange-700:#c2410c; --blue-900:#1e293b;
          --gray-50:#f9fafb; --gray-100:#f3f4f6; --gray-300:#d1d5db;
          --gray-700:#374151; --gray-800:#1f2937; --gray-900:#0f172a; --white:#fff;
          --font-family:'Poppins',sans-serif;

          /* EXACT filenames in /public */
          --hero-url: url('/ahmed-tB_QL1ToYBQ-unsplash.jpg');                 /* woman on train */
          --quote-band-url: url('/getty-images-6iVK12iAn_s-unsplash.jpg');    /* man + child */
          --result-url: url('/ales-krivec-OC63XpUAxuY-unsplash.jpg');         /* sunshine forest */

          /* Step 2 image (child looking over the wall). Replace with your local file if you have it. */
          --step2-url: url('https://images.unsplash.com/photo-1549413723-54135508b888?q=80&w=2400&auto=format&fit=crop');
        }

        html { -webkit-text-size-adjust: 100%; }
        body{font-family:var(--font-family);background:var(--gray-50);color:var(--gray-900);margin:0}
        .page-container{min-height:100vh;background:var(--gray-50)}
        .max-w-5xl{max-width:64rem}.max-w-4xl{max-width:56rem}.mx-auto{margin-left:auto;margin-right:auto}

        /* Header */
        .header{background:rgba(255,255,255,.84);backdrop-filter:blur(8px);border-bottom:1px solid var(--gray-100);
          padding:1rem 1.5rem;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:40}
        .brand-link{text-decoration:none}
        .nav-links{display:flex;align-items:center}
        .nav-links a{color:var(--gray-800);font-weight:600;text-decoration:none;margin-left:1.5rem;transition:.2s}
        .nav-links a:hover{color:var(--orange-600)}
        .nav-links a.active{color:var(--orange-600);border-bottom:2px solid var(--orange-600);padding-bottom:2px}
        .waitlist-button{background:var(--orange-600);color:#fff;font-weight:700;padding:.5rem 1.25rem;border-radius:.5rem;
          box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)}
        .waitlist-button:hover{background:var(--orange-700);color:#fff;transform:translateY(-2px);border-bottom:none}

        .hamburger{display:none;background:transparent;border:0;padding:.25rem;cursor:pointer}
        .hamburger svg{width:28px;height:28px;color:var(--gray-900)}
        .mobile-panel{display:none;position:fixed;top:64px;left:0;right:0;background:rgba(255,255,255,.98);
          border-bottom:1px solid var(--gray-100);padding:.75rem 1rem;z-index:50}
        .mobile-panel a{display:block;padding:.75rem .5rem;color:var(--gray-900);text-decoration:none;font-weight:600}
        .mobile-panel a + a{border-top:1px solid var(--gray-100)}
        .mobile-panel .waitlist-button{display:inline-block;margin-top:.5rem}
        @media (max-width:991px){.nav-links{display:none}.hamburger{display:inline-flex}.mobile-panel.open{display:block}}

        /* ---------------- HERO (fixed background) ---------------- */
        .hero{
          min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;
          position:relative;padding:6rem 1.25rem;background-image:var(--hero-url);
          background-size:cover;background-position:center;background-attachment:fixed;isolation:isolate;
        }
        .hero::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(0,0,0,.25),rgba(0,0,0,.58));z-index:0}
        .hero > div{position:relative;z-index:1}
        .hero h2{font-size:clamp(2rem,4.8vw,2.6rem);line-height:1.2;font-weight:800;margin-bottom:1rem}
        .hero p{font-size:1.125rem;max-width:48rem;margin:0 auto;color:#f2f4f7}

        /* ---------------- GENERIC STORY STEP ---------------- */
        .story-flow{padding:4rem 1.5rem 0 1.5rem}
        .story-step{max-width:42rem;margin:0 auto 3.5rem auto;background:#fff;padding:2.5rem;border-radius:1rem;border:1px solid var(--gray-100);
          box-shadow:0 4px 6px -1px rgba(0,0,0,.05)}
        .story-step h3{font-size:2rem;font-weight:700;color:var(--blue-900);margin-bottom:1rem}
        .story-step p{font-size:1.1rem;color:var(--gray-700);line-height:1.8}
        .step-number{display:inline-block;background:#feefc7;color:#d97706;font-weight:700;font-size:.9rem;
          padding:.25rem .75rem;border-radius:9999px;margin-bottom:1rem}
        .align-right{text-align:right}.align-left{text-align:left}
        .align-right .step-number{margin-left:auto;display:inline-block}
        .align-left  .step-number{margin-right:auto;display:inline-block}

        /* ---------------- STEP 2: full-screen sticky band ---------------- */
        .step2-wrap{height:180vh;position:relative}
        .step2-sticky{
          position:sticky;top:0;height:100vh;color:#fff;text-align:center;
          background-image:var(--step2-url);background-size:cover;background-position:center;background-attachment:fixed;isolation:isolate;
          display:flex;align-items:flex-end;justify-content:center;padding:0 1rem 2.25rem;
        }
        .step2-sticky::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.55));z-index:0}
        .step2-card{
          position:relative;z-index:1;width:min(48rem,calc(100% - 2rem));
          background:rgba(0,0,0,.5);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.18);
          color:#fff;border-radius:1rem;padding:1.5rem;text-align:left;box-shadow:0 15px 30px rgba(0,0,0,.35)
        }
        .step2-card h3{color:#fff;margin:.4rem 0 .5rem}
        .step2-card p{color:#f3f4f6}

        /* ---------------- STEP 3: quote band with man+child bg ---------------- */
        .quote-band{
          position:relative;padding:2.5rem 1.5rem 3.25rem;background-image:var(--quote-band-url);
          background-size:cover;background-position:center;isolation:isolate;color:#fff;
        }
        .quote-band::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.55));z-index:0}
        .quote-band > *{position:relative;z-index:1}
        .quote-container, .epiphany-conclusion{max-width:42rem;margin:0 auto}
        .story-blockquote{background:transparent;margin:0;color:#fff}
        .story-blockquote .inner{padding:2rem 2.25rem 1rem;border-left:4px solid var(--orange-600);font-size:1.2rem;font-style:italic;text-shadow:0 1px 2px rgba(0,0,0,.7)}
        .epiphany-conclusion{padding:0 2.25rem 0 2.25rem}
        .epiphany-conclusion p{color:#e5e7eb;font-size:1.1rem;line-height:1.8;text-shadow:0 1px 2px rgba(0,0,0,.6)}

        /* ---------------- RESULT (sunshine forest) ---------------- */
        .features-section{position:relative;padding:4rem 1.5rem;color:#fff;background-image:var(--result-url);
          background-size:cover;background-position:center;isolation:isolate}
        .features-section::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.55));z-index:0}
        .features-section > div{position:relative;z-index:1}
        .features-section h3{text-align:center;font-size:2rem;font-weight:700;margin-bottom:2rem}
        .features-grid{display:grid;gap:2rem}
        @media (min-width:768px){.features-grid{grid-template-columns:repeat(3,1fr)}}
        .feature-card{background:rgba(255,255,255,.08);backdrop-filter:blur(2px);padding:2rem;border-radius:1rem;border:1px solid rgba(255,255,255,.2);text-align:center}
        .feature-card h4{color:#ffd7b3;font-size:1.25rem;font-weight:700;margin-bottom:.5rem}
        .feature-card p{color:#f3f4f6;font-size:.95rem}

        /* CTA & Footer */
        .closing-cta{background:var(--blue-900);padding:4rem 1.5rem;text-align:center;color:#fff}
        .closing-cta h3{font-size:2rem;font-weight:800;margin:0 0 .5rem 0}
        .closing-cta .subtitle{margin-top:1rem;margin-bottom:2rem;opacity:.9}
        .cta-link{background:var(--orange-600);color:#fff;padding:.75rem 2rem;border-radius:.5rem;font-weight:700;text-decoration:none;display:inline-block}
        .cta-link:hover{background:var(--orange-700)}
        .footer{background:var(--gray-900);color:var(--gray-300);padding:1.5rem;text-align:center;font-size:.9rem}

        /* Mobile readability & scaling */
        @media (max-width:640px){
          p,.story-step p,.hero p,.feature-card p{ text-align:justify; text-justify:inter-word; hyphens:auto; overflow-wrap:anywhere; }
          .hero h2{font-size:1.9rem}
          .story-step{padding:1.75rem}
        }
      `}</style>

      <div className="page-container">
        {/* Header */}
        <header className="header">
          <a href="/" className="brand-link" aria-label="ThreadLock Home"><BrandWordmark /></a>
          <nav className="nav-links" aria-label="Primary">
            <a href="https://www.threadlock.ai">Home</a>
            <a href="/founder-story" className="active">Our Story</a>
            <a href="/signup" className="waitlist-button">Join Waitlist</a>
          </nav>
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
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
          <div className={`mobile-panel ${menuOpen ? 'open' : ''}`}>
            <a href="https://www.threadlock.ai" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/founder-story" className="active" onClick={() => setMenuOpen(false)}>Our Story</a>
            <a href="/signup" className="waitlist-button" onClick={() => setMenuOpen(false)}>Join Waitlist</a>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="hero">
            <div className="max-w-4xl mx-auto">
              <h2>The System Puts Everyone in a Box.<br/>Even the Judge.</h2>
              <p>Our founder's journey through the family court system revealed a surprising truth that became the foundation for ThreadLock.</p>
            </div>
          </section>

          {/* STEP 1 */}
          <section className="story-flow">
            <h2 style={{textAlign:'center',fontSize:'2.5rem',fontWeight:800,color:'var(--blue-900)',marginBottom:'3rem'}}>
              A Journey in Three Steps
            </h2>
            <div className="story-step align-right">
              <span className="step-number">STEP 1</span>
              <h3>The Expectation</h3>
              <p>
                I walked into family court to represent myself. I'd been to law school, but after several years as a stay-at-home mom, I had no money for a lawyer and no access to professional resources. I thought my legal knowledge would be enough. I was wrong.
              </p>
            </div>
          </section>

          {/* STEP 2 (full-screen sticky with child-over-wall) */}
          <section className="step2-wrap" aria-label="Step 2 band">
            <div className="step2-sticky">
              <div className="step2-card">
                <span className="step-number">STEP 2</span>
                <h3>The Reality</h3>
                <p>
                  The system wasn't just complex; it felt designed to be bewildering. My confidence was quickly replaced by the same fear and powerlessness that millions of people feel every year.
                </p>
              </div>
            </div>
          </section>

          {/* STEP 3 card (normal background) */}
          <section className="story-flow" style={{paddingTop: 0}}>
            <div className="story-step align-right" style={{marginBottom:'1.5rem', marginTop: '3.5rem'}}>
              <span className="step-number">STEP 3</span>
              <h3>The Epiphany</h3>
              <p>
                The moment that changed everything was when I learned about the judge in my case. Before the robe, they were a champion for the underdog. Yet, from the bench, they were unable to provide the very access they once fought for.
              </p>
            </div>
          </section>

          {/* Quote band (man + child background) */}
          <section className="quote-band">
            <div className="quote-container">
              <blockquote className="story-blockquote">
                <div className="inner">
                  “Instead of anger, I felt a moment of clarity. I saw a good person constrained by a bad system.”
                </div>
              </blockquote>
            </div>
            <div className="epiphany-conclusion">
              <p>
                The only reason a champion for justice becomes the hand of an unfeeling system is a lack of an alternative. The problem wasn't the judge. It was a crisis of information.
              </p>
            </div>
          </section>

          {/* RESULT (sunshine forest) */}
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

          {/* CTA */}
          <section className="closing-cta">
            <div className="max-w-4xl mx-auto">
              <h3>You aren’t powerless. You just aren’t prepared.</h3>
              <h3>Yet.</h3>
              <p className="subtitle">
                Let ThreadLock change that. We’re putting power back into the hands of everyday people, one case at a time.
              </p>
              <a href="https://www.threadlock.ai" className="cta-link">Get Started with ThreadLock</a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© {currentYear} ThreadLock.ai. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
