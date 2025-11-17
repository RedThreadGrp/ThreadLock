// components/BlogSEO.jsx
import Head from "next/head";

export default function BlogSEO({
  title,
  description,
  url,                 // absolute: https://threadlock.ai/blog/my-post
  image,               // absolute: https://threadlock.ai/blog/my-post/cover.jpg
  authorName,          // e.g., "Jane Doe"
  publishedTime,       // ISO: "2025-08-10T12:34:56Z"
  modifiedTime,        // ISO: optional
  tags = [],           // array of strings
  siteName = "ThreadLock",
  twitterHandle,       // e.g., "@threadlock" (optional)
}) {
  const ogType = "article";
  const twitterCard = "summary_large_image";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": url,
    "headline": title,
    "description": description,
    "image": [image],
    "author": [{ "@type": "Person", "name": authorName }],
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": { "@type": "ImageObject", "url": "https://threadlock.ai/og-image.jpg" }
    },
    "datePublished": publishedTime,
    ...(modifiedTime ? { "dateModified": modifiedTime } : {}),
    ...(tags?.length ? { "keywords": tags.join(", ") } : {})
  };

  return (
    <Head>
      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph (Article) */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} - ${siteName}`} />
      <meta property="article:author" content={authorName} />
      <meta property="article:published_time" content={publishedTime} />
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {tags.map((t) => <meta key={t} property="article:tag" content={t} />)}

      {/* Twitter / X */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}
