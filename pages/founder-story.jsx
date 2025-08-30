import React from 'react';

// --- Content Object ---
const storyContent = {
  nav: {
    logoUrl: "/threadlock-logo.jpg", // Corrected path
    cta: {
      text: "Get Started"
    }
  },
  hero: {
    headline: "The Justice System is Broken.<br>The People In It Aren't.",
    backgroundUrl: "/slide-1.jpg" // Corrected path
  },
  story: {
    paragraphs: [
      "I walked into family court with a law degree and what I thought was a secret weapon: confidence. <strong>I was wrong.</strong>",
      "Almost immediately, I was drowning. The system’s rigid, overwhelming process held me back. My confidence was replaced by the same fear and powerlessness that millions of people feel every year.",
      "The moment that changed everything was when I learned about the judge in my case. They were a known advocate for access to justice, a champion for the underdog. Yet, from the bench, they were unable to provide the access they once fought for. I could have been angry, but I saw something else: <strong>a good person constrained by a bad system.</strong>",
      "The only reason a champion for the underdog becomes the hand of an unfeeling system is a lack of an alternative. The problem wasn't the judge. It was a crisis of information. And I realized the most important thing: <strong>this is a solvable problem.</strong>"
    ]
  },
  cta: {
    headline: "Stop Drowning. Start Documenting.",
    subtitle: "You are not powerless. You just need the right tools. We did not create ThreadLock to fight the system; we created it to fix it.",
    button: {
      text: "Get Organized, Get Heard",
      href: "https://www.threadlock.ai/#offer"
    }
  },
  footer: {
    text: "© 2025 ThreadLock. All Rights Reserved."
  }
};


// The entire page is now a React component named FounderStoryPage
export default function FounderStoryPage() {
  const { nav, hero, story, cta, footer } = storyContent;

  return (
    <>
      {/* --- Styles --- */}
      <style jsx global>{`
        /* Updated color palette to match threadlock.ai branding */
        :root {
            --dark-blue: #2c3e50; /* Primary Navy Blue */
            --orange: #f39c12;     /* Primary Orange */
            --light-gray: #f9f9f9; /* Light Background */
            --text-color: #34495e; /* Softer Dark Text */
            --white: #ffffff;
            --font-family: 'Poppins', sans-serif;
        }
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: var(--font-family);
            margin: 0;
            color: var(--text-color);
            line-height: 1.7;
            font-size: 16px;
        }
        .container {
            width: 90%;
            max-width: 1100px;
            margin: 0 auto;
        }
        h1, h2 {
            color: var(--dark-blue);
            font-weight: 700;
            line-height: 1.3;
            text-align: center;
        }
        h1 { font-size: 2.8rem; }
        h2 { font-size: 2.5rem; margin-bottom: 20px; }
        section {
            padding: 80px 0;
        }
        .btn {
            display: inline-block;
            padding: 15px 35px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            background-color: var(--orange);
            color: var(--white);
            border: none;
            cursor: pointer;
        }
        .btn:hover {
            background-color: #e67e22; /* Slightly darker orange for hover */
            transform: translateY(-2px);
        }
        .btn-nav {
            padding: 10px 24px;
        }
        .navbar {
            background-color: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 15px 0;
        }
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .nav-logo img {
            height: 40px;
        }
        #story-hero {
            position: relative;
            color: var(--white);
            text-align: center;
            padding: 100px 0;
            background: url('${hero.backgroundUrl}') no-repeat center center/cover;
        }
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(44, 62, 80, 0.75); /* Dark blue overlay */
        }
        .hero-content {
            position: relative;
            z-index: 2;
        }
        #story-hero h1 {
            color: var(--white);
        }
        #story-body {
            background-color: var(--light-gray);
        }
        .story-container {
            max-width: 800px;
            text-align: left;
        }
        .story-container p {
            font-size: 1.1rem;
            margin-bottom: 20px;
        }
        #cta {
            background-color: var(--dark-blue);
            text-align: center;
        }
        #cta h2, #cta .subtitle {
            color: var(--white);
        }
        #cta .subtitle {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        footer {
            background-color: var(--dark-blue); /* Updated for brand consistency */
            color: var(--white);
            text-align: center;
            padding: 20px 0;
        }
        @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            h2 { font-size: 1.8rem; }
            section { padding: 60px 0; }
        }
      `}</style>

      <header className="navbar">
        <div className="container nav-container">
            <a href="https://www.threadlock.ai" className="nav-logo">
                <img src={nav.logoUrl} alt="ThreadLock Logo" />
            </a>
            <a href={cta.button.href} className="btn btn-nav">{nav.cta.text}</a>
        </div>
      </header>

      <main>
        <section id="story-hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 dangerouslySetInnerHTML={{ __html: hero.headline }}></h1>
            </div>
        </section>

        <section id="story-body">
            <div className="container story-container">
                {story.paragraphs.map((p, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
            </div>
        </section>

        <section id="cta">
            <div className="container">
                <h2>{cta.headline}</h2>
                <p className="subtitle">{cta.subtitle}</p>
                <a href={cta.button.href} className="btn">{cta.button.text}</a>
            </div>
        </section>
      </main>

      <footer>
        <div className="container">
            <p>{footer.text}</p>
        </div>
      </footer>
    </>
  );
}

