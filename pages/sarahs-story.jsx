import React from 'react';

// The entire page is now a self-contained React component telling Sarah's story.
export default function SarahsStoryPage() {

  // Storing the year in a variable for easy updates.
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* --- Styles --- */}
      {/* The styling below is a translation of the Tailwind CSS classes you provided,
          adapted to work inside a Next.js component with styled-jsx. */}
      <style jsx global>{`
        /* Using a common font for consistency */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

        :root {
            --orange-600: #ea580c;
            --orange-700: #c2410c;
            --blue-900: #1e3a8a;
            --blue-800: #1e40af;
            --blue-50: #eff6ff;
            --gray-50: #f9fafb;
            --gray-100: #f3f4f6;
            --gray-700: #374151;
            --gray-800: #1f2937;
            --gray-900: #111827;
            --gray-300: #d1d5db;
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
        }

        .max-w-5xl { max-width: 64rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-3xl { max-width: 48rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }

        /* Header */
        .header {
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--orange-600);
        }
        .header a {
            background-color: var(--orange-600);
            color: var(--white);
            padding: 0.5rem 1rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
            transition: background-color 0.2s;
            text-decoration: none;
        }
        .header a:hover {
            background-color: var(--orange-700);
        }

        /* Hero Section */
        .hero {
            padding-top: 5rem;
            padding-bottom: 5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            text-align: center;
            background-image: linear-gradient(to bottom, var(--blue-50), var(--white), var(--gray-50));
            border-radius: 2rem;
            margin-top: 2rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .hero h2 {
            font-size: 2.25rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: var(--blue-900);
        }
        .hero p {
            font-size: 1.125rem;
            color: var(--gray-700);
            line-height: 1.75;
        }

        /* Story & Result Sections */
        .content-section {
            background-color: var(--white);
            padding: 4rem 1.5rem;
        }
        .content-section h3 {
            font-size: 1.875rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--blue-900);
        }
        .content-section p {
            color: var(--gray-700);
            line-height: 1.75;
            margin-bottom: 1.5rem;
        }
        .blockquote {
            border-left: 4px solid var(--orange-600);
            padding-left: 1rem;
            font-style: italic;
            color: var(--gray-800);
            margin-bottom: 1.5rem;
        }

        /* Features Section */
        .features-section {
            background-color: var(--gray-100);
            padding: 4rem 1.5rem;
            text-align: center;
        }
        .features-section h3 {
            font-size: 1.875rem;
            font-weight: 600;
            margin-bottom: 3rem;
            color: var(--blue-900);
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
            background-color: var(--white);
            padding: 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }
        .feature-card h4 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--orange-600);
        }
        .feature-card p {
            color: var(--gray-700);
        }

        /* Closing CTA */
        .closing-cta {
            background-image: linear-gradient(to bottom right, var(--blue-900), var(--blue-900), var(--blue-800));
            padding: 4rem 1.5rem;
            text-align: center;
            color: var(--white);
            border-top-left-radius: 2rem;
            border-top-right-radius: 2rem;
        }
        .closing-cta h3 {
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--white);
        }
        .closing-cta p {
            margin-bottom: 1.5rem;
            opacity: 0.95;
        }
        .closing-cta .cta-link {
            background-color: var(--orange-600);
            color: var(--white);
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-weight: 700;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
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
        }
      `}</style>
      
      <div className="page-container">
        {/* Header */}
        <header className="header">
          <h1 className="header-title">ThreadLock.ai</h1>
          <a href="https://www.threadlock.ai">
            Visit Site
          </a>
        </header>

        <main>
          {/* Hero Section */}
          <section className="hero max-w-5xl mx-auto">
            <h2>
              For too long, the legal system has been a maze.
            </h2>
            <p className="max-w-3xl mx-auto">
              Designed for those with deep pockets and law degrees. But what about the rest of us? The single parents, the small business owners, the people who just need a fair shot?
            </p>
          </section>

          {/* Story Section */}
          <section className="content-section">
            <div className="max-w-4xl mx-auto">
              <h3>Meet Sarah Thompson</h3>
              <p>
                A Portland mom whose life was upended. She was a stay-at-home mom with no paycheck, no savings, and a desperate need for a lawyer she couldn't afford. She was drowning in the chaos of a legal battle, feeling trapped and powerless.
              </p>
              <blockquote className="blockquote">
                "I never thought I’d be standing in front of a judge alone. But I was." — Sarah Thompson
              </blockquote>
              <p>
                Sarah was told to "collect evidence" and "be prepared," but had no idea where to start. Then she found ThreadLock.ai.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="max-w-5xl mx-auto">
              <h3>How ThreadLock.ai Turned Chaos into Clarity</h3>
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

          {/* Result Section */}
          <section className="content-section">
            <div className="max-w-4xl mx-auto text-center">
              <h3>The Result: Freedom.</h3>
              <p>
                Sarah walked into court terrified but walked out free. She won custody of her kids, left the abuse behind, and started her new life.
              </p>
              <blockquote className="blockquote" style={{ textAlign: 'left' }}>
                "ThreadLock didn’t just give me tools. It gave me confidence. I could finally stand up for myself—and be heard.”
              </blockquote>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="closing-cta">
            <h3>You're not powerless. You're just unprepared.</h3>
            <p className="max-w-2xl mx-auto">
              Let ThreadLock change that. We’re putting power back into the hands of everyday people, one case at a time.
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem' }}>Find your voice. Find your freedom.</p>
            <a href="https://www.threadlock.ai" className="cta-link">
              👉 www.threadlock.ai
            </a>
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

