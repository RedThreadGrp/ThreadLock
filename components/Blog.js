export default function Blog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">
          
          {/* Blog Post 1 */}
          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Feb</span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none">01</span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  CUSTODY STRATEGY
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  Building a Court-Ready Evidence Timeline
                </h1>
                <p className="leading-relaxed mb-5">
                  Learn how to transform scattered texts, emails, and incident notes 
                  into a clear chronological record that supports your custody case.
                </p>
                <a className="inline-flex items-center">
                  <img alt="blog" src="https://dummyimage.com/103x103"
                       className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-900">Hannah M.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Feb</span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none">07</span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  FAMILY LAW INSIGHTS
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  Why Self-Represented Parents Lose Critical Evidence
                </h1>
                <p className="leading-relaxed mb-5">
                  Missing documentation is one of the top reasons parents lose traction in court. 
                  See how a structured digital journal prevents mistakes.
                </p>
                <a className="inline-flex items-center">
                  <img alt="blog" src="https://dummyimage.com/102x102"
                       className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-900">Michael R.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Feb</span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none">15</span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  LEGAL PREP TIPS
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  Presenting Evidence Judges Can Trust
                </h1>
                <p className="leading-relaxed mb-5">
                  Learn the difference between raw screenshots and structured, 
                  timestamped records that judges and mediators actually rely on.
                </p>
                <a className="inline-flex items-center">
                  <img alt="blog" src="https://dummyimage.com/101x101"
                       className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-900">Jessica P.</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
