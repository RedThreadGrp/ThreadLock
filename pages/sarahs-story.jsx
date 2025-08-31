import React, { useState } from 'react';

/* ----------------- Icons ----------------- */
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

export default function SarahsStoryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

        :root{
          --orange-600:#ea580c; --orange-700:#c2410c;
          --blue-900:#1e293b; --gray-50:#f9fafb; --gray-100:#f3f4f6;
          --gray-300:#d1d5db; --gray-700:#374151; --gray-800:#1f2937; --gray-900:#0f172a;
          --white:#ffffff;

          /* Match EXACT filenames in /public */
          --hero-person:url('/earving-segura-_WYjs343uLY-unsplash.jpg');
          --hands-sun:url('/daoudi-aissa-absT1BNRDAI-unsplash.jpg');
        }
        *{box-sizing:border-box}
        body{margin:0;font-family:'Poppins',sans-serif;background:var(--gray-50);color:var(--gray-900)}
        .max-w-5xl{max-width:64rem}.max-w-4xl{max-width:56rem}.mx-auto{margin-left:auto;margin-right:auto}

        /* Header */
        .header{
          position:sticky;top:0;z-index:60;
          display:flex;align-items:center;justify-content:space-between;
          padding:1rem 1.5rem;background:rgba(255,255,255,.85);
          backdrop-filter:blur(8px);border-bottom:1px solid var(--gray-100);
        }
        .desktop-nav{display:none}
        @media(min-width:768px){.desktop-nav{display:flex;align-items:center}}
        .desktop-nav a{margin-left:1.25rem;text-decoration:none;font-weight:600;color:var(--gray-800);transition:.2s}
        .desktop-nav a:hover{color:var(--orange-600)}
        .desktop-nav a.active{color:var(--orange-600);border-bottom:2px solid var(--orange-600);padding-bottom:2px}
        .desktop-nav a.waitlist-button{
          background:var(--orange-600);color:#fff;padding:.5rem 1.1rem;border-radius:.5rem;font-weight:700;
          box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
        }
        .desktop-nav a.waitlist-button:hover{background:var(--orange-700);color:#fff;transform:translateY(-2px)}
        .hamburger-button{display:block;background:none;border:none;padding:.5rem}
        @media(min-width:768px){.hamburger-button{display:none}}
        .mobile-nav{
          position:fixed;inset:0;background:#fff;z-index:70;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
        }
        .mobile-nav a{font-size:1.5rem;font-weight:700;color:var(--gray-900);text-decoration:none;margin:1.25rem 0}
        .mobile-nav a.waitlist-button{background:var(--orange-600);color:#fff;padding:.75rem 2rem;border-radius:.5rem}

        /* ---------- Sticky Hero + Step 1 and in-container Step 2 ---------- */
        .hero-wrap{
          position:relative;
          height:220vh; /* controls how long the hero pins before it releases */
        }
        .sticky-hero{
          position:sticky;top:0;height:100vh;z-index:1;isolation:isolate;
          background-image:var(--hero-person);
          background-size:cover;background-position:center 32%;
          display:flex;align-items:center;justify-content:center;color:#fff;text-align:center;
        }
        .sticky-hero::before{
          content:"";position:absolute;inset:0;z-index:0;
          background:linear-gradient(180deg,rgba(15,23,42,.58),rgba(15,23,42,.42));
        }
        .hero-inner{position:relative;z-index:1;padding:0 1rem}
        .hero-title{font-size:clamp(2rem,5vw,3rem);font-weight:800;line-height:1.15;margin:0 0 .75rem}
        .hero-sub{max-width:48rem;margin:0 auto 1.25rem;opacity:.95}

        /* Step 1 card sits on the hero and stays while hero is pinned */
        .step1-card{
          position:absolute;left:50%;transform:translateX(-50%);
          bottom:clamp(1.25rem,6vh,3rem);
          width:min(46rem,calc(100% - 2rem));
          background:rgba(0,0,0,.55);color:#fff;border:1px solid rgba(255,255,255,.15);
          border-radius:.85rem;padding:1.25rem 1.25rem 1.35rem;
          backdrop-filter:blur(6px);box-shadow:0 15px 35px rgba(0,0,0,.35);
          text-align:left;
        }
        .badge{display:inline-block;background:#feefc7;color:#b45309;font-weight:700;
               font-size:.85rem;border-radius:9999px;padding:.25rem .75rem;margin-bottom:.65rem}
        .step1-title{font-size:1.5rem;margin:.1rem 0 .35rem}
        .muted{opacity:.95;line-height:1.65}

        /* Step 2 lives in the SAME container so it scrolls up and obscures the sticky hero */
        .step2-wrap{
          position:relative;z-index:2; /* above sticky hero */
          margin-top:80vh; /* when this starts appearing while hero is still pinned */
          padding:2rem 1.5rem;
        }
        .step2{
          max-width:48rem;margin:0 auto;background:#fff;border:1px solid var(--gray-100);
          border-radius:1rem;padding:2rem;box-shadow:0 10px 20px rgba(0,0,0,.06);
        }
        .step-title{font-size:2rem;font-weight:700;color:var(--blue-900);margin:.25rem 0 .5rem}
        .step-body{font-size:1.075rem;color:var(--gray-700);line-height:1.8}

        /* Steps 3 & 4 with the hands/sun background */
        .section{position:relative;z-index:5;padding:clamp(2.5rem,5vw,4rem) 1.5rem;background:#fff}
        .section h2{text-align:center;color:var(--blue-900);
          font-size:clamp(1.75rem,4vw,2.5rem);font-weight:800;margin:0 0 2rem}

        .photo-step{
          position:relative;isolation:isolate;
          background-image:var(--hands-sun);
          background-size:cover;background-position:center;
          border-radius:1rem;overflow:hidden;
          max-width:48rem;margin:2.5rem auto 0;border:1px solid rgba(255,255,255,.15);
        }
        .photo-step::before{
          content:"";position:absolute;inset:0;z-index:0;
          background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.55));
        }
        .photo-step .content{
          position:relative;z-index:1;color:#fff;padding:2rem;
          text-shadow:0 1px 2px rgba(0,0,0,.6);
        }
        .blockquote{
          background:rgba(0,0,0,.45);border-left:4px solid var(--orange-600);
          padding:1rem 1.25rem;border-radius:.5rem;margin-top:1rem;font-style:italic
        }

        /* Features */
        .features-section{position:relative;color:#fff;padding:4rem 1.5rem;background:var(--blue-900)}
        .features-grid{display:grid;gap:1.75rem}
        @media(min-width:768px){.features-grid{grid-template-columns:repeat(3,1fr)}}
        .feature-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.15);
          backdrop-filter:blur(4px);padding:1.5rem;border-radius:1rem;text-align:center}
        .feature-card h4{color:var(--orange-600);margin:.25rem 0 .5rem}
        .feature-card p{color:#e5e7eb}

        /* CTA & Footer */
        .closing-cta{background:var(--blue-900);color:#fff;text-align:center;padding:4rem 1.5rem}
        .closing-cta h3{font-size:clamp(1.65rem,3.5vw,2rem);margin:0 0 1rem}
        .closing-cta p{opacity:.9;max-width:48rem;margin:.75rem auto 1.5rem}
        .cta-link{display:inline-block;background:var(--orange-600);color:#fff;
          padding:.75rem 2rem;border-radius:.5rem;font-weight:700;text-decoration:none}
        .cta-link:hover{background:var(--orange-700)}
        .footer{background:var(--gray-900);color:var(--gray-300);text-align:center;padding:1.25rem}

        @media(max-width:767px){.step1-card{text-align:left}}
      `}</style>

      <div className="page-container">
        {/* Header */}
        <header className="header">
          <a href="/" className="brand-link"><BrandWordmark /></a>
          <nav className="desktop-nav">
            <a href="https://www.threadlock.ai">Home</a>
            <a href="/sarahs-story" className="active">Her Story</a>
            <a href="/founder-story">Our Story</a>
            <a href="/signup" className="waitlist-button">Join Waitlist</a>
          </nav>
          <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon color="var(--gray-900)" /> : <MenuIcon color="var(--gray-900)" />}
          </button>
        </header>

        {isMenuOpen && (
          <nav className="mobile-nav">
            <a href="https://www.threadlock.ai" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="/sarahs-story" onClick={() => setIsMenuOpen(false)}>Her Story</a>
            <a href="/founder-story" onClick={() => setIsMenuOpen(false)}>Our Story</a>
            <a href="/signup" className="waitlist-button" onClick={() => setIsMenuOpen(false)}>Join Waitlist</a>
          </nav>
        )}

        <main>
          {/* ---------- Sticky Hero (person) with Step 1 ---------- */}
          <section className="hero-wrap">
            <div className="sticky-hero">
              <div className="hero-inner">
                <h1 className="hero-title">From Chaos to Clarity.<br/>Her Story.</h1>
                <p className="hero-sub">
                  For too long, the legal system has been a maze. For Sarah Thompson, it was a fight for her future.
                </p>
              </div>

              <aside className="step1-card" aria-label="Step 1">
                <span className="badge">STEP 1</span>
                <h3 className="step1-title">The Problem</h3>
                <p className="muted">
                  Sarah’s world fell apart when her marriage turned violent. With no paycheck and no access to resources, she was drowning in a legal battle she couldn’t afford.
                </p>
              </aside>
            </div>

            {/* Step 2 is inside the same container so it scrolls up and obscures the hero */}
            <div className="step2-wrap">
              <div className="step2">
                <span className="badge">STEP 2</span>
                <h3 className="step-title">The Turning Point</h3>
                <p className="step-body">
                  She was told to “collect evidence” and “be prepared,” but had no idea where to start. Then she found ThreadLock.ai and began turning scattered texts, photos, and documents into a clear, organized case.
                </p>
              </div>
            </div>
          </section>

          {/* ---------- Steps 3 & 4 (hands & sun) ---------- */}
          <section className="section">
            <h2>Sarah's Journey Continues</h2>

            <div className="photo-step" style={{marginTop:'0'}}>
              <div className="content">
                <span className="badge" style={{background:'rgba(254,239,199,.85)'}}>STEP 3</span>
                <h3 className="step-title" style={{color:'#fff'}}>The Result</h3>
                <p className="step-body" style={{color:'#f3f4f6'}}>
                  She walked into court terrified and walked out free. The story was coherent, the evidence clear, and the judge could finally see the truth.
                </p>
                <div className="blockquote">
                  “ThreadLock didn’t just give me tools. It gave me confidence. I could finally stand up for myself — and be heard.”
                </div>
              </div>
            </div>

            <div className="photo-step">
              <div className="content">
                <span className="badge" style={{background:'rgba(254,239,199,.85)'}}>STEP 4</span>
                <h3 className="step-title" style={{color:'#fff'}}>What Comes Next</h3>
                <p className="step-body" style={{color:'#f3f4f6'}}>
                  Recovery isn’t overnight. With organized records, alerts, and court-ready exports, Sarah keeps momentum and protects her family without reliving chaos every hearing.
                </p>
              </div>
            </div>
          </section>

          {/* ---------- Features ---------- */}
          <section className="features-section">
            <div className="max-w-5xl mx-auto">
              <h3 style={{textAlign:'center',fontWeight:800,fontSize:'2rem',margin:'0 0 2rem'}}>How ThreadLock Turns Chaos into Clarity</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>Organize Everything</h4>
                  <p>One secure place to manage documents, messages, photos, and evidence.</p>
                </div>
                <div className="feature-card">
                  <h4>Understand the Law</h4>
                  <p>Plain-language explanations and smart prompts—no legal degree required.</p>
                </div>
                <div className="feature-card">
                  <h4>Show the Truth</h4>
                  <p>Timelines and court-ready exports so judges can see what matters fast.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- CTA ---------- */}
          <section className="closing-cta">
            <div className="max-w-4xl mx-auto">
              <h3>You’re not powerless. You’re just not prepared.<br/>Yet.</h3>
              <p>We’re putting power back in the hands of everyday people, one case at a time.</p>
              <a href="/signup" className="cta-link">Find Your Voice. Find Your Freedom.</a>
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
