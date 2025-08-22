// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500","700","800"] });

export default function App({ Component, pageProps }) {
  const siteUrl = "https://threadlock.ai";
  const ogImage = `${siteUrl}/og-image.jpg`; // absolute URL

  return (
    <>
      <Head>
        <title>ThreadLock™ | Family Law Technology</title>
        <meta
          name="description"
          content="AI-powered family law software for custody disputes, child support, and family court evidence management. Make the system make sense."
        />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:site_name" content="ThreadLock" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management" />
        <meta property="og:description" content="AI-powered family law software designed for custody disputes, child support, and family court evidence management. Make the system make sense." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="ThreadLock brand image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ThreadLock™ | Family Law Technology for Custody, Support, and Evidence Management" />
        <meta name="twitter:description" content="AI-powered family law software for custody, child support, and evidence management." />
        <meta name="twitter:image" content={ogImage} />
        {/* Optional: set your handle */}
        {/* <meta name="twitter:site" content="@yourhandle" />
        <meta name="twitter:creator" content="@yourhandle" /> */}

        {/* Light SEO hygiene */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ThreadLock" />
        <meta name="theme-color" content="#f97316" />
      </Head>

      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
