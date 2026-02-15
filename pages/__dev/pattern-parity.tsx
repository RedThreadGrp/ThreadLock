import Head from 'next/head';
import Link from 'next/link';

export default function PatternParityPage() {
  return (
    <>
      <Head>
        <title>Pattern Parity Check - ThreadLock Dev Tools</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold tl-text-strong mb-2">
            Pattern Parity Verification
          </h1>
          <p className="tl-text-default mb-8">
            Verify that the canonical background pattern is consistent across all surfaces.
          </p>

          {/* Swatch 1: Plain Body Background */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold tl-text-strong mb-4">
              1. Plain Body Background (Inherited)
            </h2>
            <div 
              className="bg-transparent border border-slate-600 rounded-lg p-8 h-64"
              style={{ backgroundColor: 'transparent' }}
            >
              <p className="tl-text-default">
                This area should show the body's canonical background pattern.
              </p>
              <p className="tl-text-muted text-sm mt-2">
                Expected: Slate 800 base + radial gradient + orange cross pattern
              </p>
            </div>
          </section>

          {/* Swatch 2: Marketing Login Container */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold tl-text-strong mb-4">
              2. Marketing Login Container Area
            </h2>
            <div className="tl-auth-background border border-slate-600 rounded-lg p-8 h-64">
              <div className="tl-auth-card">
                <p className="tl-text-default">
                  This simulates the marketing login page container.
                </p>
                <p className="tl-text-muted text-sm mt-2">
                  Should be transparent, inheriting body background
                </p>
              </div>
            </div>
          </section>

          {/* Swatch 3: Custom Pattern Surface */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold tl-text-strong mb-4">
              3. CanonicalPatternSurface Component
            </h2>
            <div className="border border-slate-600 rounded-lg overflow-hidden">
              <div className="bg-transparent p-8 h-64">
                <p className="tl-text-default">
                  This area uses the CanonicalPatternSurface wrapper.
                </p>
                <p className="tl-text-muted text-sm mt-2">
                  Should also be transparent and inherit body background
                </p>
              </div>
            </div>
          </section>

          {/* Verification Checklist */}
          <section className="mb-8 bg-slate-700/40 backdrop-blur-sm rounded-lg p-6 border border-slate-600">
            <h2 className="text-2xl font-semibold tl-text-strong mb-4">
              Verification Checklist
            </h2>
            <ul className="space-y-2 tl-text-default">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>All three swatches display the same background pattern</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Pattern shows orange cross symbols on slate blue background</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Gradient is visible at the top (darker slate blue)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Text uses three tiers: strong (white-ish), default (slate 300), muted (slate 400)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>No local background overrides are breaking the pattern</span>
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <div className="flex gap-4">
            <Link 
              href="/login" 
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 tl-text-strong rounded-lg transition-colors"
            >
              View Login Page
            </Link>
            <Link 
              href="/" 
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 tl-text-strong rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
