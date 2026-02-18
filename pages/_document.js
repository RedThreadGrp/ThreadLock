// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const siteUrl = "https://threadlock.ai";
    const title =
      "ThreadLock™ | Family Law Evidence Management for Custody Disputes, Divorce & Family Court";
    const desc =
      "Court-compliant family law documentation platform for custody disputes, divorce proceedings, and child support cases. AI-powered evidence organization helps parents and legal professionals prepare court-ready materials for family court.";
    const ogImage = `${siteUrl}/og-image.jpg?v=2025-08-21a`;

    return (
      // prefix helps some scrapers recognize OG tags reliably
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          {/* Primary */}
          <meta charSet="utf-8" />
          {/* Canonical tag removed from global - should be set per-page */}
          <meta name="title" content={title} />
          <meta name="description" content={desc} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="ThreadLock" />
          <meta name="theme-color" content="#f97316" />

          {/* Open Graph (keep og:type near the top) */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="ThreadLock" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={desc} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:secure_url" content={ogImage} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter / X */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={desc} />
          <meta name="twitter:image" content={ogImage} />

          {/* JSON-LD (safe) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "ThreadLock",
                url: siteUrl,
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["SoftwareApplication", "LegalService"],
                name: "ThreadLock",
                applicationCategory: "LegalTech",
                applicationSubCategory: "Family Law Case Management",
                description: "Court-compliant family law evidence management platform specialized in custody disputes, divorce documentation, and child support cases. Helps parents in family court, self-represented litigants, and family law attorneys organize court-ready evidence, document custody violations, and prepare divorce case materials.",
                operatingSystem: "Web",
                url: siteUrl,
                creator: {
                  "@type": "Organization",
                  name: "ThreadLock",
                  url: siteUrl,
                },
                serviceType: "Legal Technology Platform",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                audience: [
                  {
                    "@type": "Audience",
                    audienceType: "Self-Represented Litigants",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Legal Professionals",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Parents in Family Court",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Divorce Litigants",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Custody Battle Participants",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Family Law Attorneys",
                  },
                ],
                featureList: [
                  "Custody dispute evidence organization",
                  "Divorce case documentation management",
                  "Family court incident journal with AI",
                  "Custody violation timeline builder",
                  "Court-compliant document scanning and OCR",
                  "Secure family law document storage",
                  "Family court exhibit preparation",
                  "Child support case planner",
                  "Family law attorney review integration",
                ],
                keywords: "family law software, custody dispute evidence, divorce documentation, child support case management, family court exhibits, custody violation documentation, divorce case preparation, parenting time evidence, family law attorney tools, pro se divorce, custody battle organization, family court evidence, divorce court documentation, child custody evidence tracker",
                offers: {
                  "@type": "Offer",
                  price: "29",
                  priceCurrency: "USD",
                  priceValidUntil: "2026-12-31",
                },
              }),
            }}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
