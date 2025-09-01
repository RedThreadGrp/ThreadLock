import React, { useState } from 'react'

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

          /* --- FIXED LOCAL IMAGE PATHS --- */
          /* The leading '/' tells the browser to look in your 'public' folder. */
          --hero-url: url('/ahmed-tB_QL1ToYBQ-unsplash.jpg');
          --step2-url: url('/getty-images-6iVK12iAn_s-unsplash.jpg');
          --result-url: url('/ales-krivec-OC63XpUAxuY-unsplash.jpg');
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

        /* -------- HERO: FIXED BACKGROUND layer, scrolling CONTENT -------- */
        .hero-wrap {
          min-height: 80vh;
          position: relative;
          z-index: 1;
          padding: 6rem 1.25rem;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fixed-bg {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: var(--hero-url);
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }
        .fixed-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
        }
        .hero-wrap h2{font-size:clamp(2rem,4.8vw,2.8rem);line-height:1.2;font-weight:800;margin-bottom:1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);}
        .hero-wrap p{font-size:1.125rem;max-width:48rem;margin:0 auto;color:#f2f4f7; text-shadow: 0 1px 3px rgba(0,0,0,0.5);}

        /* Content that scrolls OVER the fixed background */
        .scroll-content {
          position: relative;
          z-index: 2;
          background-color: var(--gray-50);
        }
        
        /* Story steps */
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

        /* Step 2 sticky band */
        .step2-wrap{height:150vh;position:relative}
        .step2-sticky{
          position:sticky;top:0;height:100vh;color:#fff;text-align:center;
          background-image:var(--step2-url);background-size:cover;background-position:center;
          isolation:isolate;display:flex;align-items:center;justify-content:center;padding:1rem;
        }
        .step2-sticky::before{content:"";position:absolute;inset:0;background:rgba(0,0,0,.5);z-index:-1}
        .step2-card{
          position:relative;z-index:1;width:min(42rem,100%);
          background:rgba(20,20,30,.55);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.18);
          color:#fff;border-radius:1rem;padding:2rem 2.5rem;text-align:left;box-shadow:0 15px 30px rgba(0,0,0,.35)
        }
        .step2-card h3{color:#fff;margin:.4rem 0 .5rem}
        .step2-card p{color:#f3f4f6}

        /* Quote band */
        .quote-band{
          position:relative;padding:3rem 1.5rem 4rem;
          background:var(--blue-900);
          color:#fff;
        }
        .quote-container, .epiphany-conclusion{max-width:42rem;margin:0 auto}
        .story-blockquote{background:transparent;margin-bottom: 2rem; color:#fff}
        .story-blockquote .inner{padding:0; border-left:4px solid var(--orange-600);padding-left:1.5rem; font-size:1.2rem;font-style:italic;}
        .epiphany-conclusion p{color:#e5e7eb;font-size:1.1rem;line-height:1.8;}

        /* Result (sunshine forest) */
        .features-section{position:relative;padding:4rem 1.5rem;color:#fff;background-image:var(--result-url);
          background-size:cover;background-position:center;isolation:isolate}
        .features-section::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.55));z-index:-1}
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

        @media (max-width:640px){
          p,.story-step p,.hero-wrap p,.feature-card p{ text-align:justify; text-justify:inter-word; hyphens:auto; overflow-wrap:anywhere; }
          .hero-wrap h2{font-size:1.9rem}
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
          <div className="fixed-bg" />
          
          <section className="hero-wrap">
            <div className="max-w-4xl mx-auto text-center">
              <h2>The System Puts Everyone in a Box.<br/>Even the Judge.</h2>
              <p>Our founder's journey through the family court system revealed a surprising truth that became the foundation for ThreadLock.</p>
            </div>
          </section>

          <div className="scroll-content">
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

            <section className="step2-wrap" aria-label="The Reality Section">
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

            <section className="story-flow" style={{paddingTop: '3.5rem', paddingBottom: 0}}>
              <div className="story-step align-right">
                <span className="step-number">STEP 3</span>
                <h3>The Epiphany</h3>
                <p>
                  The moment that changed everything was when I learned about the judge in my case. Before the robe, they were a champion for the underdog. Yet, from the bench, they were unable to provide the very access they once fought for.
                </p>
              </div>
            </section>

            <section className="quote-band">
              <div className="story-blockquote">
                <div className="inner">
                  “Instead of anger, I felt a moment of clarity. I saw a good person constrained by a bad system.”
                </div>
              </div>
              <div className="epiphany-conclusion">
                <p>
                  The only reason a champion for justice becomes the hand of an unfeeling system is a lack of an alternative. The problem wasn't the judge. It was a crisis of information.
                </p>
              </div>
            </section>

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
          </div>
        </main>

        <footer className="footer">
          <p>© {currentYear} ThreadLock.ai. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}