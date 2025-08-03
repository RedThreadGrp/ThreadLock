import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreadLock – AI-Guided Family Law Evidence</title>
        <meta
          name="description"
          content="Secure, AI-guided, court-ready evidence journaling for family law cases."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full overflow-x-hidden">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-6 py-24 text-center md:text-left flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Take Control of Your Family Law Case
              </h1>
              <p className="mt-6 text-lg max-w-lg">
                ThreadLock helps parents and individuals build court-ready,
                blockchain-secured evidence with AI-guided journaling and
                organized timelines.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
                >
                  Get Early Access – $10 / 6 Months
                </a>
                <a
                  href="#features"
                  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-1 mt-12 md:mt-0 flex justify-center">
              <img
                src="/threadlock-logo.png"
                alt="ThreadLock App Preview"
                className="max-w-sm rounded-lg shadow-lg border border-white/20"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-white text-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              Build Evidence the Smart Way
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-3xl">
                  🧠
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI-Guided Journaling
                </h3>
                <p className="text-gray-600">
                  Prompts ensure every entry captures the details that matter in
                  your jurisdiction.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-3xl">
                  ⛓️
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Immutable & Secure
                </h3>
                <p className="text-gray-600">
                  Blockchain-backed timestamps prevent tampering and build trust
                  in court.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-3xl">
                  📄
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Court-Ready Exports
                </h3>
                <p className="text-gray-600">
                  Generate professional PDF timelines and summaries for your
                  attorney or judge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="py-24 bg-gray-50 text-center text-gray-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Early Access Pricing</h2>
            <p className="mb-12 max-w-2xl mx-auto">
              Join before the end of August to lock in our early adopter rate.
              Your first 6 months are just $10.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border p-8">
              <h3 className="text-2xl font-semibold mb-2">Pro Tier</h3>
              <p className="text-gray-500 mb-4">All core features included</p>
              <div className="text-4xl font-bold text-orange-600 mb-6">
                $10 <span className="text-lg text-gray-500">/ 6 months</span>
              </div>
              <a
                href="/api/create-checkout-session"
                className="block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start building your case today
            </h2>
            <p className="mb-6 max-w-xl mx-auto">
              Your evidence matters. ThreadLock helps you document, secure, and
              present it clearly—without the stress.
            </p>
            <a
              href="/api/create-checkout-session"
              className="bg-white text-orange-600 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Claim Early Access
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-sm py-8 text-center">
          <p>© {new Date().getFullYear()} ThreadLock. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
