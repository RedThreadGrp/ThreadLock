import React from 'react';
import Head from 'next/head';

/**
 * LandingPageHead - SEO and Schema.org markup for landing page variants
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {boolean} props.noIndex - Whether to add noindex tag (default: true for /lp/ pages)
 */
export default function LandingPageHead({ 
  title = "ThreadLock™ | Your case. Organized. Take control.",
  description = "Take control of the chaos. ThreadLock is your secure, all-in-one platform to organize evidence, journal events, and manage documents for your legal matters.",
  noIndex = true 
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "ThreadLock",
        "operatingSystem": "Web/SaaS",
        "applicationCategory": "BusinessApplication",
        "description": "A SaaS platform for organizing legal documents and case evidence.",
        "offers": {
          "@type": "Offer",
          "price": "29",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "LegalService",
        "name": "ThreadLock Legal Document Organization",
        "description": "A SaaS tool for organizing legal documents and case evidence. This is a software product, not a law firm. No legal advice is provided.",
        "areaServed": "US",
        "provider": {
          "@type": "Organization",
          "name": "ThreadLock"
        }
      }
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Viewport for mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
    </Head>
  );
}
