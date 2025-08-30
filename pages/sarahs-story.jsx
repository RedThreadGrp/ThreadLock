import React from 'react';

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

// The entire page is now a self-contained React component telling Sarah's story,
// formatted for visual cohesion with the Founder's Story page.
export default function SarahsStoryPage() {

  // Storing the year in a variable for easy updates.
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* --- Styles --- */}
      <style jsx global>{`
        /* Using a common font for consistency */
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
        }

        body {
            font-family: var(--font-family);
            background-color: var(--gray-50);
            color: var(--gray-900);
            margin: 0;
        }
        
        .page-container {
            min-height: 100vh;
            background-color: var(--gray-50);
        }

        .max-w-5xl { max-width: 64rem; }
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }

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
            top: 0;
            z-index: 10;
        }
        .header .brand-link {
            text-decoration: none;
        }
        .header nav {
            display: flex;
            align-items: center;
        }
        .header nav a {
            color: var(--gray-800);
            font-weight: 600;
            text-decoration: none;
            margin-left: 1.5rem;
            transition: all 0.2s;
        }
        .header nav a:hover {
            color: var(--orange-600);
        }
        .header nav a.active {
            color: var(--orange-600);
            border-bottom: 2px solid var(--orange-600);
            padding-bottom: 2px;
        }
        .header nav a.waitlist-button {
            background-color: var(--orange-600);
            color: var(--white);
            font-weight: 700;
            padding: 0.5rem 1.25rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
        }
        .header nav a.waitlist-button:hover {
            background-color: var(--orange-700);
            color: var(--white);
            transform: translateY(-2px);
            border-bottom: none;
            padding-bottom: 0.5rem;
        }


        /* Hero Section */
        .hero {
            padding: 4.5rem 1.5rem;
            text-align: center;
            background-color: var(--white);
        }
        .hero h2 {
            font-size: 2.5rem;
            line-height: 1.2;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: var(--blue-900);
        }
        .hero p {
            font-size: 1.125rem;
            color: var(--gray-700);
            line-height: 1.75;
            max-width: 48rem;
            margin: auto;
        }

        /* Story Flow Section */
        .story-flow {
            padding: 4rem 1.5rem;
        }
        .story-step {
            max-width: 42rem;
            margin: 0 auto 3.5rem auto;
            text-align: center;
        }
        .story-step .step-number {
            display: inline-block;
            background-color: #feefc7;
            color: #d97706; 
            font-weight: 700;
            font-size: 0.9rem;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            margin-bottom: 1rem;
        }
        .story-step h3 {
            font-size: 2rem;
            font-weight: 700;
            color: var(--blue-900);
            margin-bottom: 1rem;
        }
        .story-step p {
            font-size: 1.1rem;
            color: var(--gray-700);
            line-height: 1.8;
        }
        
        .story-step.highlighted {
            background-color: var(--white);
            padding: 2.5rem;
            border-radius: 1rem;
            border: 1px solid var(--gray-100);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .story-step.right-oriented {
            text-align: right;
        }
        .story-step.left-oriented {
            text-align: left;
        }
        
        .story-blockquote {
            background-color: var(--white);
            padding: 1.5rem;
            border-radius: 0.5rem;
            border-left: 4px solid var(--orange-600);
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
            text-align: left;
            margin: 2rem auto;
            font-size: 1.2rem;
            font-style: italic;
            color: var(--gray-800);
            max-width: 38rem;
        }
        
        /* Features Section */
        .features-section {
            background-color: var(--white);
            padding: 4rem 1.5rem;
        }
        .features-section h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: var(--blue-900);
            text-align: center;
        }
        .features-grid {
            display: grid;
            gap: 2rem;
        }
        @media (min-width: 768px) {
            .features-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .feature-card {
            background-color: var(--gray-50);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--gray-100);
            text-align: center;
        }
        .feature-card h4 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--orange-600);
        }
        .feature-card p {
            color: var(--gray-700);
            font-size: 0.95rem;
        }

        /* Closing CTA */
        .closing-cta {
            background-color: var(--blue-900);
            padding: 4rem 1.5rem;
            text-align: center;
            color: var(--white);
        }
        .closing-cta h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--white);
        }
        .closing-cta p {
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        .closing-cta .cta-link {
            background-color: var(--orange-600);
            color: var(--white);
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 700;
            transition: background-color 0.2s;
            text-decoration: none;
            display: inline-block;
        }
        .closing-cta .cta-link:hover {
            background-color: var(--orange-700);
        }
        
        /* Footer */
        .footer {
            background-color: var(--gray-900);
            color: var(--gray-300);
            padding: 1.5rem;
            text-align: center;
            font-size: 0.9rem;
        }
      `}</style>
      
      <div className="page-container">
        {/* Header */}
        <header className="header">
          <a href="/" className="brand-link"><BrandWordmark /></a>
          <nav>
            <a href="https://www.threadlock.ai">Home</a>
            <a href="/sarahs-story" className="active">Her Story</a>
            <a href="/founder-story">Our Story</a>
            <a href="/signup" className="waitlist-button">Join Waitlist</a>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="hero">
            <div className="max-w-4xl mx-auto">
                <h2>
                    From Chaos to Clarity.
                    <br />
                    Her Story.
                </h2>
                <p>
                    For too long, the legal system has been a maze. But for Sarah Thompson, a single mom from Portland, it was a battle for her future.
                </p>
            </div>
          </section>

          {/* Story Flow Section */}
          <section className="story-flow">
            <h2 style={{textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', color: 'var(--blue-900)', marginBottom: '3rem'}}>Sarah's Journey in Three Steps</h2>
            <div className="story-step highlighted right-oriented">
                <span className="step-number">STEP 1</span>
                <h3>The Problem</h3>
                <p>
                    Sarah's world fell apart when her marriage turned violent. Overwhelmed and terrified for her kids' safety, she knew she had to get out, but had no idea what to do. As a stay-at-home mom with no paycheck and no access to resources, she was drowning in the chaos of a legal battle she couldn't afford, feeling trapped and utterly powerless.
                </p>
            </div>

            <div className="story-step highlighted left-oriented">
                <span className="step-number">STEP 2</span>
                <h3>The Turning Point</h3>
                <p>
                    Sarah was told to "collect evidence" and "be prepared," but had no idea where to start. Then she found ThreadLock.ai and began turning scattered information into a clear, organized case.
                </p>
            </div>

            <div className="story-step highlighted right-oriented">
                <span className="step-number">STEP 3</span>
                <h3>The Result</h3>
                <p>
                    Sarah walked into court terrified but walked out free. She won custody of her kids, left the abuse behind, and started her new life. ThreadLock provided the tools she needed to find her voice.
                </p>
                <blockquote className="story-blockquote">
                    "ThreadLock didn’t just give me tools. It gave me confidence. I could finally stand up for myself—and be heard.”
                </blockquote>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="max-w-5xl mx-auto">
              <h3>How ThreadLock Turned Chaos into Clarity</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>Organize Everything</h4>
                  <p>
                    One secure place to organize legal documents, messages, and evidence.
                  </p>
                </div>
                <div className="feature-card">
                  <h4>Understand the Law</h4>
                  <p>
                    AI that breaks down legal jargon into plain, simple language.
                  </p>
                </div>
                <div className="feature-card">
                  <h4>Show the Truth</h4>
                  <p>
                    Timelines, documents, and proof—so the judge sees the truth clearly.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Closing CTA */}
          <section className="closing-cta">
            <div className="max-w-4xl mx-auto">
              <h3>You're not powerless. You're just unprepared.</h3>
              <p>
                Let ThreadLock change that. We’re putting power back into the hands of everyday people, one case at a time.
              </p>
              <a href="https://www.threadlock.ai" className="cta-link">
                Find Your Voice. Find Your Freedom.
              </a>
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

