// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const siteUrl = "https://threadlock.ai";
  const ogImage = `${siteUrl}/og-image.jpg`; // must exist in /public

  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        {/* Basic SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ThreadLock" />
        <meta name="theme-color" content="#f97316" />

        {/* Open Graph */}
        <meta property="og:site_name" content="ThreadLock" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management" />
        <meta property="og:description" content="AI-powered family law software designed for custody disputes, child support, and family court evidence management. Make the system make sense." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:alt" content="ThreadLock brand image with tagline: Make the system make sense." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management" />
        <meta name="twitter:description" content="AI-powered family law software for custody, child support, and evidence management." />
        <meta name="twitter:image" content={ogImage} />
        {/* Optional handles
        <meta name="twitter:site" content="@yourhandle" />
        <meta name="twitter:creator" content="@yourhandle" /> */}

        {/* Fallbacks some scrapers still respect */}
        <link rel="image_src" href={ogImage} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
