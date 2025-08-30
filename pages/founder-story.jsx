import React from 'react';

// The entire page is now a self-contained React component telling the founder's story,
// formatted to match the Sarah's Story page.
export default function FounderStoryPage() {

  // Storing the year in a variable for easy updates.
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* --- Styles --- */}
      {/* This styling is identical to the sarahs-story.jsx page for brand consistency. */}
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
            Visit Main Site
          </a>
        </header>

        <main>
          {/* Hero Section */}
          <section className="hero max-w-5xl mx-auto">
            <h2>
              The justice system is broken.
              <br />
              Not the people in it.
            </h2>
            <p className="max-w-3xl mx-auto">
              I walked into family court with a law degree, thinking I was prepared.
              <br />
              I was wrong.
              <br />
              The system wasn't just complex; it felt designed to be bewildering.
              <br />
              That experience revealed a crucial truth.
            </p>
          </section>

          {/* Story Section */}
          <section className="content-section">
            <div className="max-w-4xl mx-auto">
              <h3 style={{ textAlign: 'center' }}>The Day I Realized the Judge Was Trapped, Too</h3>
              <p>
                The moment that changed everything was when I learned about the judge in my case. Before the robe, they were a champion for the underdog, an advocate for access to justice. Yet, from the bench, they were unable to provide the very access they once fought for.
              </p>
              <blockquote className="blockquote">
                "I could have been angry, but I saw something else: a good person constrained by a bad system."
              </blockquote>
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
                  <p>
                    We built a secure place to organize documents, messages, and evidence.
                  </p>
                </div>
                <div className="feature-card">
                  <h4>Guidance over Guesswork</h4>
                  <p>
                    Our AI provides jurisdiction-specific guidance, not just generic advice.
                  </p>
                </div>
                <div className="feature-card">
                  <h4>Truth over Confusion</h4>
                  <p>
                    We create timelines and court-ready proof so the truth is seen clearly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Result Section */}
          <section className="content-section">
            <div className="max-w-4xl mx-auto text-center">
              <h3>We Built the Alternative.</h3>
              <p>
                ThreadLock was born from that realization. It's the tool that provides the clarity, organization, and verifiable truth the system desperately needs. It’s built to empower you, streamline the process for your attorney, and give a well-intentioned judge the record they need to see the truth.
              </p>
              <blockquote className="blockquote" style={{ textAlign: 'left' }}>
                "We didn’t create ThreadLock to fight the system. We created it to fix it, by giving everyone a better way to communicate the most important information of their lives.”
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

