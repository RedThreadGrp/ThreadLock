// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const siteUrl = "https://threadlock.ai";
    const title =
      "ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management";
    const desc =
      "AI-powered family law software designed for custody disputes, child support, and family court evidence management. Make the system make sense.";
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
