export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">ThreadLock.ai</h1>
        <a
          href="https://www.threadlock.ai"
          className="bg-orange-600 text-white px-4 py-2 rounded-xl shadow hover:bg-orange-700 transition"
        >
          Visit Site
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center bg-gradient-to-b from-blue-50 via-white to-gray-50 rounded-[2rem] mt-8 shadow-sm">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-900">
          For too long, the legal system has been a maze.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Designed for those with deep pockets and law degrees. But what about the rest of us? The
          single parents, the small business owners, the people who just need a fair shot?
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4 text-blue-900">Meet Sarah Thompson</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A Portland mom whose life was upended. She was a stay-at-home mom with no paycheck, no
            savings, and a desperate need for a lawyer she couldn't afford. She was drowning in the
            chaos of a legal battle, feeling trapped and powerless.
          </p>
          <blockquote className="border-l-4 border-orange-600 pl-4 italic text-gray-800 mb-6">
            "I never thought I’d be standing in front of a judge alone. But I was." — Sarah Thompson
          </blockquote>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sarah was told to "collect evidence" and "be prepared," but had no idea where to start.
            Then she found ThreadLock.ai.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-12 text-blue-900">How ThreadLock.ai Turned Chaos into Clarity</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-bold mb-2 text-orange-600">Organize Everything</h4>
              <p className="text-gray-700">
                One secure place to organize legal documents, messages, and evidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-bold mb-2 text-orange-600">Understand the Law</h4>
              <p className="text-gray-700">
                AI that breaks down legal jargon into plain, simple language.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-bold mb-2 text-orange-600">Show the Truth</h4>
              <p className="text-gray-700">
                Timelines, documents, and proof—so the judge sees the truth clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6 text-blue-900">The Result: Freedom.</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sarah walked into court terrified but walked out free. She won custody of her kids, left
            the abuse behind, and started her new life.
          </p>
          <blockquote className="border-l-4 border-orange-600 pl-4 italic text-gray-800 mb-6 text-left">
            "ThreadLock didn’t just give me tools. It gave me confidence. I could finally stand up
            for myself—and be heard.”
          </blockquote>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 py-16 px-6 text-center text-white rounded-t-[2rem]">
        <h3 className="text-3xl font-bold mb-4">You're not powerless. You're just unprepared.</h3>
        <p className="max-w-2xl mx-auto mb-6 opacity-95">
          Let ThreadLock change that. We’re putting power back into the hands of everyday people,
          one case at a time.
        </p>
        <p className="text-xl font-semibold mb-8">Find your voice. Find your freedom.</p>
        <a
          href="https://www.threadlock.ai"
          className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-orange-700 transition inline-block"
        >
          👉 www.threadlock.ai
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} ThreadLock.ai. All rights reserved.</p>
      </footer>
    </div>
  );
}
