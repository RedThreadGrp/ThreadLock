import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/cookies" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/disclaimer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dpa" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Data Processing Agreement
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
              POLICIES
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/security" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Security
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/dmca" className="text-gray-400 hover:text-orange-500 transition-colors">
                  DMCA
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/accessibility" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Accessibility
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/founder-story" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/sarahs-story" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Her Story
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/resources" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Resources
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
              CONNECT
            </h2>
            <span className="inline-flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-950">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} ThreadLock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
