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

          /* EXACT filenames in /public */
          --hero-person:url('/earving-segura-_WYjs343uLY-unsplash.jpg'); /* person (hero) */
          --hands-sun:url('/daoudi-aissa-absT1BNRDAI-unsplash.jpg');     /* hands + sun (Step 3) */
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

        /* ---------- HERO: fixed background image, text scrolls ---------- */
        .hero{
          min-height:100vh;position:relative;color:#fff;text-align:center;padding:4.5rem 1.5rem;
          background-image:var(--hero-person);
          background-size:cover;background-position:center 32%;
          background-attachment:fixed; /* image fixed; content scrolls */
        }
        .hero::before{
          content:"";position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(0,0,0,.25),rgba(0,0,0,.55));
          z-index:0;
        }
        .hero > div{position:relative;z-index:1}
        .hero h2{font-size:2.5rem;line-height:1.2;font-weight:800;margin-bottom:1rem}
        .hero p{font-size:1.125rem;max-width:48rem;margin:0 auto;color:#f2f4f7}

        /* Story Flow */
        .story-flow{padding:4rem 1.5rem}
        .story-step{
          max-width:42rem;margin:0 auto 3.5rem auto;position:relative;text-align:center;
          background:#fff;padding:2.5rem;border-radius:1rem;border:1px solid var(--gray-100);
          box-shadow:0 4px 6px -1px rgba(0,0,0,.05);
        }
        .step-number{display:inline-block;background:#feefc7;color:#d97706;font-weight:700;font-size:.9rem;
          padding:.25rem .75rem;border-radius:9999px;margin-bottom:1rem}
        .story-step h3{font-size:2rem;font-weight:700;color:var(--blue-900);margin-bottom:1rem}
        .story-step p{font-size:1.1rem;color:var(--gray-700);line-height:1.8}
        .right-oriented{text-align:right}
        .left-oriented{text-align:left}

        /* Step 3 with hands/sun background */
        .photo-step{
          position:relative;isolation:isolate;
          background-image:var(--hands-sun);background-size:cover;background-position:center;
          border-radius:1rem;overflow:hidden;max-width:48rem;margin:2.5rem auto;border:1px solid rgba(255,255,255,.15);
        }
        .photo-step::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.55));z-index:0}
        .photo-step .content{position:relative;z-index:1;color:#fff;padding:2rem;text-shadow:0 1px 2px rgba(0,0,0,.6)}
        .blockquote{background:rgba(0,0,0,.45);border-left:4px solid var(--orange-600);padding:1rem 1.25rem;border-radius:.5rem;margin-top:1rem;font-style:italic}

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

        @media(max-width:767px){
          .story-step,.left-oriented,.right-oriented{ text-align:left }
        }
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
          {/* HERO (image fixed, text scrolls) */}
          <section className="hero">
            <div className="max-w-4xl mx-auto">
              <h2>From Chaos to Clarity.<br/>Her Story.</h2>
              <p>
                For too long, the legal system has been a maze. But for Sarah Thompson, a single mom from Portland, it was a battle for her future.
              </p>
            </div>
          </section>

          {/* Story Flow */}
          <section className="story-flow">
            <h2 style={{textAlign:'center',fontSize:'2.5rem',fontWeight:'800',color:'var(--blue-900)',marginBottom:'3rem'}}>
              Sarah's Journey in Three Steps
            </h2>

            {/* STEP 1 */}
            <div className="story-step right-oriented">
              <span className="step-number">STEP 1</span>
              <h3>The Problem</h3>
              <p>
                Sarah's world fell apart when her marriage turned violent. Overwhelmed and terrified for her kids' safety, she knew she had to get out, but had no idea what to do. As a stay-at-home mom with no paycheck and no access to resources, she was drowning in the chaos of a legal battle she couldn't afford, feeling trapped and utterly powerless.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="story-step left-oriented">
              <span className="step-number">STEP 2</span>
              <h3>The Turning Point</h3>
              <p>
                Sarah was told to "collect evidence" and "be prepared," but had no idea where to start. Then she found ThreadLock.ai and began turning scattered information into a clear, organized case.
              </p>
            </div>

            {/* STEP 3 with hands/sun */}
            <div className="photo-step">
              <div className="content">
                <span className="step-number" style={{background:'rgba(254,239,199,.85)', color:'#b45309'}}>STEP 3</span>
                <h3 className="step-title" style={{color:'#fff'}}>The Result</h3>
                <p className="step-body" style={{color:'#f3f4f6'}}>
                  Sarah walked into court terrified but walked out free. She won custody of her kids, left the abuse behind, and started her new life. ThreadLock provided the tools she needed to find her voice.
                </p>
                <div className="blockquote">
                  "ThreadLock didn’t just give me tools. It gave me confidence. I could finally stand up for myself—and be heard."
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
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

          {/* CTA */}
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
