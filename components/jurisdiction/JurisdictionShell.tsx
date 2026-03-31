import React from "react";
import Head from "next/head";
import SiteHeader from "@/src/components/SiteHeader";
import Footer from "@/components/Footer";

export interface JurisdictionShellProps {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  breadcrumbs: { label: string; href: string }[];
  schemaBlocks: object[];
  hreflang?: { lang: string; href: string }[];
  children: React.ReactNode;
}

export default function JurisdictionShell({
  title,
  metaDescription,
  canonicalUrl,
  breadcrumbs,
  schemaBlocks,
  hreflang,
  children,
}: JurisdictionShellProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.label,
      item: `https://threadlock.ai${crumb.href}`,
    })),
  };

  const allSchemaBlocks = [...schemaBlocks, breadcrumbSchema];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://threadlock.ai/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        {hreflang?.map((h) => (
          <link key={h.lang} rel="alternate" hrefLang={h.lang} href={h.href} />
        ))}
        {allSchemaBlocks.map((block, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
          />
        ))}
      </Head>
      <SiteHeader />
      <div className="min-h-screen resources-dark-background">
        <div className="mx-auto max-w-5xl px-4 md:px-6 pt-20 pb-16">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
