export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Left: Headline & CTA */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Take Control of Your Family Law Case
            <br className="hidden lg:inline-block" />
            Secure. Organized. Court-Ready.
          </h1>
          <p className="mb-8 leading-relaxed">
            Navigating custody and court deadlines is overwhelming when everything that matters is on the line.
            ThreadLock helps parents and professionals collect, secure, and organize every crucial detail—
            giving you confidence in mediation and court.
          </p>
          <div className="flex justify-center">
            <a href="https://app.threadlock.ai/" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Get Started
              </button>
            </a>
            <a href="#features">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                See How It Works
              </button>
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded shadow-lg"
            alt="Parent reviewing evidence on laptop"
            src="https://dummyimage.com/720x600/edf2f7/3c366b&text=ThreadLock+Dashboard"
          />
        </div>

      </div>
    </section>
  )
}
