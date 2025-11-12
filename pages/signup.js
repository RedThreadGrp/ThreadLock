import Head from 'next/head';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <Head>
        <title>Sign Up - ThreadLock</title>
        <meta name="description" content="Sign up for ThreadLock - Choose your account type" />
      </Head>

      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <Link href="/">
            <span className="inline-flex items-baseline font-bold text-3xl tracking-tight select-none cursor-pointer">
              <span className="text-slate-800">Thread</span>
              <span className="text-orange-600">Lock</span>
              <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
            </span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-6">Get Started</h1>
          <p className="text-lg text-slate-600 mt-2">Choose the account type that's right for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Individual Signup */}
          <a
            href="https://app.threadlock.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-orange-500 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">I'm an Individual</h2>
            <p className="text-slate-600 mb-6">
              Get started to get organized and build your case.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Create Individual Account
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </a>

          {/* Professional Signup */}
          <a
            href="https://app.threadlock.ai/pro/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-orange-500 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <path d="M20 8v6"/>
                <path d="M23 11h-6"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">I'm a Legal Professional</h2>
            <p className="text-slate-600 mb-6">
              Join our pro network, get new clients, or collaborate with your own.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Create Pro Account
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="text-orange-600 font-semibold hover:text-orange-700">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
