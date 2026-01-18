import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SiteHeader from '../../../src/components/SiteHeader';
import statesData from '../../../src/data/resources/states.json';
import productsData from '../../../src/data/resources/products.json';

export default function StatePage({ state }) {
  if (!state) {
    return (
      <>
        <Head>
          <title>State Not Found | ThreadLock</title>
        </Head>
        <div className="min-h-screen bg-gray-50">
          <SiteHeader />
          <main className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">State Not Found</h1>
            <p className="text-lg text-slate-600 mb-6">The state you're looking for doesn't exist.</p>
            <Link href="/resources" className="text-orange-600 hover:text-orange-700 font-semibold">
              ← Back to Resources
            </Link>
          </main>
        </div>
      </>
    );
  }

  const stateTitle = `${state.name} Court Rules & Legal Resources`;
  const stateDescription = `Official court rules, family law resources, and practical tools for ${state.name}. Navigate family court with confidence using state-specific guidance.`;
  const canonicalUrl = `https://www.threadlock.ai/resources/state/${state.id}`;

  // Get relevant products for court/legal matters
  const relevantProducts = productsData.filter(p => 
    p.topics.includes('court-rules') || 
    p.topics.includes('hearing-prep') || 
    p.topics.includes('proof-of-service')
  ).slice(0, 4);

  return (
    <>
      <Head>
        <title>{stateTitle} | ThreadLock</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={stateDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={stateTitle} />
        <meta property="og:description" content={stateDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": stateTitle,
              "description": stateDescription,
              "url": canonicalUrl,
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
                    "name": state.name,
                    "item": canonicalUrl
                  }
                ]
              },
              "publisher": {
                "@type": "Organization",
                "name": "ThreadLock",
                "url": "https://www.threadlock.ai"
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
            <span className="text-slate-600">{state.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {state.name} Court Rules & Legal Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              Official court rules, family law guidance, and practical tools for navigating {state.name} courts.
            </p>
          </div>

          {/* Official Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Official Court Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={state.rulesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 flex items-center justify-center rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {state.name} Court Rules
                    </h3>
                    <p className="text-slate-600 mb-3">
                      Official rules of civil procedure and court requirements for {state.name}.
                    </p>
                    <span className="inline-flex items-center text-orange-600 font-semibold">
                      Visit Official Site
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>

              {state.selfHelpUrl && (
                <a
                  href={state.selfHelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-orange-500 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        Self-Help Center
                      </h3>
                      <p className="text-slate-600 mb-3">
                        Resources for self-represented litigants in {state.name}.
                      </p>
                      <span className="inline-flex items-center text-blue-600 font-semibold">
                        Visit Self-Help Center
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </section>

          {/* Practical Tools */}
          {relevantProducts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Practical Tools</h2>
              <p className="text-lg text-slate-600 mb-6">
                Essential templates and guides to help you navigate {state.name} family court.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {relevantProducts.map(product => (
                  <div key={product.sku} className="bg-white p-4 rounded-lg border border-slate-200 hover:border-orange-300 transition-all">
                    <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{product.description}</p>
                    <Link href={`/resources#pricing`} className="text-sm text-orange-600 hover:text-orange-700 font-semibold">
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quick FAQ */}
          <section className="bg-white p-8 rounded-2xl border border-slate-200 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Where can I find the official {state.name} court rules?
                </h3>
                <p className="text-slate-700">
                  The official court rules for {state.name} are maintained by the state court system. 
                  Access them through the official link above to ensure you have the most current version.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  What court rules apply to family law cases in {state.name}?
                </h3>
                <p className="text-slate-700">
                  Family law cases in {state.name} typically follow the state's rules of civil procedure, 
                  along with any specific family law rules or local court rules. Check with your local 
                  court for specific requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  How can ThreadLock help me with my {state.name} family law case?
                </h3>
                <p className="text-slate-700">
                  ThreadLock provides tools to organize evidence, track deadlines, and manage documentation 
                  for family court cases. While we don't provide legal advice, our platform helps you stay 
                  organized and prepared throughout your case.
                </p>
              </div>
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
              View All States & Resources
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = statesData.map(state => ({
    params: { state: state.id }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const state = statesData.find(s => s.id === params.state);

  if (!state) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      state
    }
  };
}
