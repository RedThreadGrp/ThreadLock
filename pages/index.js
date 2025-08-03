import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreadLock: AI-Guided Family Law Evidence</title>
        <meta
          name="description"
          content="AI-guided, blockchain-secured journaling for court-ready family law evidence."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Take Control of Your Family Law Case
            </h1>
            <p className="mb-8 leading-relaxed">
              AI-guided, blockchain-secured, and court-ready journaling to
              protect your rights. Keep everything that matters organized,
              secure, and admissible.
            </p>
            <div className="flex justify-center">
              <a
                href="#pricing"
                className="inline-flex text-white bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
              >
                Join Early Access
              </a>
              <a
                href="#features"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/threadlock-logo.png"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-gray-600 body-font" id="features">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                AI-Powered Guidance
              </h2>
              <p className="leading-relaxed text-base">
                Know exactly what to log and how to keep your documentation
                court-ready with AI prompts.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Court-Ready Exports
              </h2>
              <p className="leading-relaxed text-base">
                Generate polished PDF summaries and evidence packages for
                attorneys, mediators, or judges in minutes.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="text-gray-600 body-font" id="pricing">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Simple, transparent pricing for early access users.
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Plan
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Features
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">Early Access</td>
                  <td className="px-4 py-3 text-lg text-gray-900">$10/mo</td>
                  <td className="px-4 py-3">Full feature access, priority feedback</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-gray-600 body-font bg-gray-100" id="cta">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Start protecting your family law case today
            </h1>
            <p className="leading-relaxed mt-4">
              Join ThreadLock early access to secure your evidence and simplify
              the chaos of co-parenting.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <input
              placeholder="Full Name"
              className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-4 w-full bg-white rounded border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button className="text-white bg-orange border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
              Join Now
            </button>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <span className="ml-3 text-xl">ThreadLock</span>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 ThreadLock. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
