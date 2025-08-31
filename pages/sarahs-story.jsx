import React, { useState } from 'react'

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

        :root {
          --orange-600:#ea580c; --orange-700:#c2410c; --blue-900:#1e293b;
          --gray-50:#f9fafb; --gray-100:#f3f4f6; --gray-300:#d1d5db;
          --gray-700:#374151; --gray-800:#1f2937; --gray-900:#0f172a; --white:#fff;
          --font-family:'Poppins',sans-serif;

          --hero-url: url('/k9b6M2p.png');
          --step2-url: url('/gK96v74.png');
          --clarity-url: url('/ana-curcan-Uo6lAthUcJo-unsplash.jpg');
        }

        body{font-family:var(--font-family);background:var(--gray-50);color:var(--gray-900);margin:0}
        .page-container{min-height:100vh;background:var(--gray-50)}

        .max-w-5xl{max-width:64rem}.max-w-4xl{max-width:56rem}.mx-auto{margin-left:auto;margin-right:auto}

        .header{background:rgba(255,255,255,.8);backdrop-filter:blur(8px);border-bottom:1px solid var(--gray-100);
          padding:1rem 1.5rem;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:50}
        .desktop-nav{display:none}
        @media(min-width:768px){.desktop-nav{display:flex;align-items:center}}
        .desktop-nav a{color:var(--gray-800);font-weight:600;text-decoration:none;margin-left:1.5rem;transition:.2s}
        .desktop-nav a.active{color:var(--orange-600);border-bottom:2px solid var(--orange-600);padding-bottom:2px}
        .desktop-nav a.waitlist-button{background:var(--orange-600);color:#fff;font-weight:700;padding:.5rem 1.25rem;border-radius:.5rem}
        .desktop-nav a.waitlist-button:hover{background:var(--orange-700)}

        .hamburger-button{display:block;padding:.5rem;background:none;border:none;cursor:pointer;z-index:60}
        @media(min-width:768px){.hamburger-button{display:none}}

        .mobile-nav{position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;display:flex;flex-direction:column;
          align-items:center;justify-content:center;z-index:50}
        .mobile-nav a{font-size:1.5rem;font-weight:700;color:var(--gray-900);margin:1.5rem 0;text-decoration:none}
        .mobile-nav a.waitlist-button{background:var(--orange-600);color:#fff;padding:.75rem 2rem;border-radius:.5rem}

        .hero{padding:4.5rem 1.5rem;text-align:center;color:#fff;position:relative;
          background-image:var(--hero-url);background-size:cover;background-position:center}
        .hero::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.4);z-index:1}
        .hero>div{position:relative;z-index:2}
        .hero h2{font-size:2.5rem;line-height:1.2;font-weight:800;margin-bottom:1.5rem;color:#fff}
        .hero p{font-size:1.125rem;color:#fff;max-width:48rem;margin:auto}

        .story-flow{padding:4rem 1.5rem}
        .story-step{max-width:42rem;margin:0 auto 3.5rem auto;padding:2.5rem;border-radius:1rem;border:1px solid var(--gray-100);box-shadow:0 4px 6px -1px rgba(0,0,0,.05);background:#fff}
        .story-step h3{font-size:2rem;font-weight:700;color:var(--blue-900);margin-bottom:1rem}
        .story-step p{font-size:1.1rem;color:var(--gray-700);line-height:1.8}
        .step-number{display:inline-block;background:#feefc7;color:#d97706;font-weight:700;font-size:.9rem;padding:.25rem .75rem;border-radius:9999px;margin-bottom:1rem}

        .align-right{text-align:right}
        .align-left{text-align:left}
        .align-right .step-number{margin-left:auto;display:inline-block}
        .align-left .step-number{margin-right:auto;display:inline-block}

        .left-oriented{background-image:var(--step2-url);background-size:cover;background-position:center;color:#fff;position:relative;overflow:hidden}
        .left-oriented::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.4);border-radius:1rem}
        .left-oriented>*{position:relative;z-index:2}
        .left-oriented h3,.left-oriented p{color:#fff}

        .story-blockquote{background:#fff;padding:1.5rem;border-radius:.5rem;border-left:4px solid var(--orange-600);margin:2rem auto;font-style:italic;color:var(--gray-800);max-width:38rem}

        .features-section{position:relative;padding:4rem 1.5rem;color:#fff;background-image:var(--clarity-url);background-size:cover;background-position:center}
        .features-section::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.55));z-index:-1}
        .features-section h3{text-align:center;font-size:2rem;font-weight:700;margin-bottom:2rem}
        .feature-card{background:rgba(255,255,255,.08);backdrop-filter:blur(2px);padding:2rem;border-radius:1rem;border:1px solid rgba(255,255,255,.2);text-align:center}
        .feature-card h4{color:#ffd7b3}
        .feature-card p{color:#f3f4f6}

        .closing-cta{background:var(--blue-900);padding:4rem 1.5rem;text-align:center;color:#fff}
        .cta-link{background:var(--orange-600);color:#fff;padding:.75rem 2rem;border-radius:.5rem;font-weight:700;text-decoration:none;display:inline-block}
        .cta-link:hover{background:var(--orange-700)}
        .footer{background:var(--gray-900);color:var(--gray-300);padding:1.5rem;text-align:center;font-size:.9rem}

        @media(max-width:640px){
          p,.story-step p,.hero p,.feature-card p{ text-align:justify; text-justify:inter-word; hyphens:auto; overflow-wrap:anywhere; }
          .hero h2{font-size:1.9rem}
          .story-step{padding:1.75rem}
        }
      `}</style>

      <div className="page-container">
        <header className="header">
          <a href="/" className="brand-link"><BrandWordmark /></a>
          <nav className="desktop-nav">
            <a href="https://www.threadlock.ai">Home</a>
            <a href="/sarahs-story" className="active">Her Story</a>
            <a href="/founder-story">Our Story</a>
            <a href="/signup" className="waitlist-button">Join Waitlist</a>
          </nav>
          <button className="hamburger-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
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
          <section className="hero">
            <div className="max-w-4xl mx-auto">
              <h2>From Chaos to Clarity.<br/>Her Story.</h2>
              <p>For too long, the legal system has been a maze. But for Sarah Thompson, a single mom from Portland, it was a battle for her future.</p>
            </div>
          </section>

          <section className="story-flow">
            <h2 style={{textAlign:'center',fontSize:'2.5rem',fontWeight:800,color:'var(--blue-900)',marginBottom:'3rem'}}>Sarah's Journey in Three Steps</h2>

            <div className="story-step align-right">
              <span className="step-number">STEP 1</span>
              <h3>The Problem</h3>
              <p>Sarah's world fell apart when her marriage turned violent. Overwhelmed and terrified for her kids' safety, she knew she had to get out, but had no idea what to do. As a stay-at-home mom with no paycheck and no access to resources, she was drowning in the chaos of a legal battle she couldn't afford, feeling trapped and utterly powerless.</p>
            </div>

            <div className="story-step align-left left-oriented">
              <span className="step-number">STEP 2</span>
              <h3>The Turning Point</h3>
              <p>Sarah was told to "collect evidence" and "be prepared," but had no idea where to start. Then she found ThreadLock.ai and began turning scattered information into a clear, organized case.</p>
            </div>

            <div className="story-step align-right">
              <span className="step-number">STEP 3</span>
              <h3>The Result</h3>
              <p>Sarah walked into court terrified but walked out free. She won custody of her kids, left the abuse behind, and started her new life. ThreadLock provided the tools she needed to find her voice.</p>
              <blockquote className="story-blockquote">
                "ThreadLock didn’t just give me tools. It gave me confidence. I could finally stand up for myself—and be heard.”
              </blockquote>
            </div>
          </section>

          <section className="features-section">
            <div className="max-w-5xl mx-auto">
              <h3>How ThreadLock Turned Chaos into Clarity</h3>
              <div className="features-grid">
                <div className="feature-card"><h4>Organize Everything</h4><p>One secure place to organize legal documents, messages, and evidence.</p></div>
                <div className="feature-card"><h4>Understand the Law</h4><p>AI that breaks down legal jargon into plain, simple language.</p></div>
                <div className="feature-card"><h4>Show the Truth</h4><p>Timelines, documents, and proof—so the judge sees the truth clearly.</p></div>
              </div>
            </div>
          </section>

          <section className="closing-cta">
            <div className="max-w-4xl mx-auto">
              <h3>You're not powerless. You're just not prepared.</h3>
		<h3>Yet.</h3>
              <p>Let ThreadLock change that. We’re putting power back into the hands of everyday people, one case at a time.</p>
              <a href="https://www.threadlock.ai" className="cta-link">Find Your Voice. Find Your Freedom.</a>
            </div>
          </section>
        </main>

        <footer className="footer"><p>© {currentYear} ThreadLock.ai. All rights reserved.</p></footer>
      </div>
    </>
  );
}
