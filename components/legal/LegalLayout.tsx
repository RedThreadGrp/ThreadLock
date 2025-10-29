import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

export default function LegalLayout({ title, children, description }: LegalLayoutProps) {
  const fullTitle = `${title} | ThreadLock`;
  
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Simple header with back button */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-orange-600 transition-colors">
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </header>

        {/* Content container with custom prose styling */}
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <article className="bg-white rounded-lg shadow-sm p-8 md:p-12 legal-content">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {title}
            </h1>
            {children}
          </article>
        </main>
      </div>

      <style jsx global>{`
        .legal-content p {
          color: #374151;
          line-height: 1.75;
        }
        .legal-content h2 {
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .legal-content h3 {
          color: #111827;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .legal-content ul, .legal-content ol {
          color: #374151;
          line-height: 1.75;
        }
        .legal-content a {
          color: #fb7a1e;
          text-decoration: underline;
        }
        .legal-content a:hover {
          color: #ea580c;
        }
        .legal-content strong {
          font-weight: 600;
          color: #111827;
        }
      `}</style>
    </>
  );
}
