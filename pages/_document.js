// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const siteUrl = "https://threadlock.ai";
    const title =
      "ThreadLock™ | Legal Case Management for Non-Lawyers — Family Court, Small Claims & More";
    const desc =
      "Organize your legal case with ThreadLock. Document evidence, build a timeline, and prepare court-ready materials — for family court, small claims, landlord-tenant, and other civil matters. Designed for self-represented litigants and legal professionals.";
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
                description: "Legal case management software for self-represented litigants. Organize evidence, build timelines, and prepare court-ready materials for family court, small claims, landlord-tenant, and civil cases.",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${siteUrl}/resources?q={search_term_string}`,
                  },
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ThreadLock",
                url: siteUrl,
                logo: `${siteUrl}/threadlock-logo.png`,
                description: "ThreadLock is a legal case management software company. We build tools for self-represented litigants and legal professionals to organize evidence, documentation, and case materials for family court, small claims, landlord-tenant, and civil proceedings.",
                foundingDate: "2023",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                knowsAbout: [
                  "Legal case management software",
                  "Civil litigation evidence organization",
                  "Self-represented litigant tools",
                  "Family court documentation",
                  "Small claims case preparation",
                  "Landlord-tenant dispute documentation",
                  "Court exhibit preparation",
                  "Legal technology",
                ],
                sameAs: [
                  "https://app.threadlock.ai",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  url: `${siteUrl}/support`,
                  availableLanguage: "English",
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "ThreadLock",
                applicationCategory: "LegalTech",
                applicationSubCategory: "Civil Legal Case Management",
                description: "Legal case management platform for self-represented litigants and legal professionals handling family court, small claims, landlord-tenant, and other civil matters. AI-powered evidence organization, incident journaling, timeline building, and court-ready document preparation.",
                operatingSystem: "Web, iOS, Android",
                url: siteUrl,
                creator: {
                  "@type": "Organization",
                  name: "ThreadLock",
                  url: siteUrl,
                },
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
                    audienceType: "Family Court Litigants",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Small Claims Litigants",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Landlord-Tenant Disputants",
                  },
                  {
                    "@type": "Audience",
                    audienceType: "Civil Litigants",
                  },
                ],
                featureList: [
                  "Civil case evidence organization",
                  "Legal case documentation management",
                  "Incident journal with AI-powered suggestions",
                  "Chronological case timeline builder",
                  "Court-compliant document scanning and OCR",
                  "Secure legal document storage",
                  "Court exhibit preparation",
                  "Case planner for self-represented litigants",
                  "Attorney review and collaboration integration",
                ],
                keywords: "legal case management software, civil litigation evidence, case documentation, court exhibit preparation, self-represented litigant tools, family court, small claims, landlord tenant dispute, legal evidence organizer, pro se litigant, case timeline builder, court ready documents, legal case tracker, civil case management app",
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
