import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SiteHeader from '../../../src/components/SiteHeader';
import topicsData from '../../../src/data/resources/topics.json';
import resourcesData from '../../../src/data/resources/resources.json';
import productsData from '../../../src/data/resources/products.json';

export default function TopicPage({ topic, relatedResources, relatedProducts }) {
  if (!topic) {
    return (
      <>
        <Head>
          <title>Topic Not Found | ThreadLock</title>
        </Head>
        <div className="min-h-screen bg-gray-50">
          <SiteHeader />
          <main className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Topic Not Found</h1>
            <p className="text-lg text-slate-600 mb-6">The topic you're looking for doesn't exist.</p>
            <Link href="/resources" className="text-orange-600 hover:text-orange-700 font-semibold">
              ← Back to Resources
            </Link>
          </main>
        </div>
      </>
    );
  }

  const pageTitle = `${topic.name} Resources for Family Court`;
  const pageDescription = topic.description;
  const canonicalUrl = `https://www.threadlock.ai/resources/topic/${topic.id}`;

  return (
    <>
      <Head>
        <title>{pageTitle} | ThreadLock</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD - ItemList for resources */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": pageTitle,
              "description": pageDescription,
              "url": canonicalUrl,
              "numberOfItems": relatedResources.length + relatedProducts.length,
              "itemListElement": [
                ...relatedResources.map((resource, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": resource.title,
                  "description": resource.description,
                  "url": resource.url
                })),
                ...relatedProducts.map((product, index) => ({
                  "@type": "ListItem",
                  "position": relatedResources.length + index + 1,
                  "name": product.name,
                  "description": product.description
                }))
              ],
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Resources",
                    "item": "https://www.threadlock.ai/resources"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": topic.name,
                    "item": canonicalUrl
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <SiteHeader />
        
        <main className="container mx-auto px-6 py-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link href="/resources" className="text-orange-600 hover:text-orange-700">Resources</Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600">{topic.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {topic.name}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              {topic.description}
            </p>
          </div>

          {/* External Resources */}
          {relatedResources.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Curated Resources</h2>
              <div className="space-y-4">
                {relatedResources.map(resource => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">
                            {resource.title}
                          </h3>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            resource.trustTier === 'A' ? 'bg-green-100 text-green-700' :
                            resource.trustTier === 'B' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-2">{resource.description}</p>
                        {resource.publisher && (
                          <p className="text-sm text-slate-500">Publisher: {resource.publisher}</p>
                        )}
                      </div>
                      <svg className="w-6 h-6 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ThreadLock Tools */}
          {relatedProducts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">ThreadLock Tools & Templates</h2>
              <p className="text-lg text-slate-600 mb-6">
                Professional templates and worksheets designed for {topic.name.toLowerCase()}.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map(product => (
                  <div key={product.sku} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-300 transition-all shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                    <p className="text-slate-600 mb-4">{product.description}</p>
                    <Link href="/resources#pricing" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold">
                      Get This Template
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Topics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Explore More Topics</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topicsData
                .filter(t => t.id !== topic.id)
                .slice(0, 8)
                .map(relatedTopic => (
                  <Link
                    key={relatedTopic.id}
                    href={`/resources/topic/${relatedTopic.id}`}
                    className="bg-white p-4 rounded-lg border border-slate-200 hover:border-orange-500 transition-all text-center"
                  >
                    <h3 className="font-semibold text-slate-900">{relatedTopic.name}</h3>
                  </Link>
                ))}
            </div>
          </section>

          {/* Back to Resources */}
          <div className="text-center">
            <Link 
              href="/resources" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View All Resources
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = topicsData.map(topic => ({
    params: { topic: topic.id }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const topic = topicsData.find(t => t.id === params.topic);

  if (!topic) {
    return {
      notFound: true
    };
  }

  // Find related resources
  const relatedResources = resourcesData.filter(resource =>
    resource.topics && resource.topics.includes(topic.id)
  );

  // Find related products
  const relatedProducts = productsData.filter(product =>
    product.topics && product.topics.includes(topic.id)
  );

  return {
    props: {
      topic,
      relatedResources,
      relatedProducts
    }
  };
}
