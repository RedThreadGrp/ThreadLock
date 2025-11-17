import Head from 'next/head';
import Link from 'next/link';
import { AuthShell } from '../components/AuthShell';

export default function LoginPage() {
  return (
    <AuthShell>
      <Head>
        <title>Login - ThreadLock</title>
        <meta name="description" content="Login to ThreadLock - Choose your account type" />
      </Head>

      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-12">
          <Link href="/">
            <span className="inline-flex items-baseline font-bold text-3xl tracking-tight select-none cursor-pointer">
              <span className="text-white">Thread</span>
              <span style={{ color: 'var(--tl-brand-orange)' }}>Lock</span>
              <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-300">™</span>
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-8">Welcome</h1>
          <p className="text-lg text-slate-300 mt-3">Choose your secure entry point.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual */}
          <a
            href="https://app.threadlock.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-white/10 hover:shadow-[0_0_20px_rgba(245,130,32,0.3)] transform hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">I am an individual</h2>
            </div>
            <ul className="space-y-3 mb-8 text-slate-200 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3"/>
                </svg>
                <span>I already have or want to find an attorney.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-slate-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3"/>
                </svg>
                <span>I do not have or want an attorney.</span>
              </li>
            </ul>
            <div className="flex items-center justify-center text-white font-semibold py-3 px-6 rounded-lg transition-all" style={{ backgroundColor: 'var(--tl-brand-orange)' }}>
              Continue to Personal Portal
            </div>
          </a>

          {/* Legal Professional */}
          <a
            href="https://app.threadlock.ai/pro/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-700/40 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-white/10 hover:shadow-[0_0_20px_rgba(245,130,32,0.3)] transform hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(245, 130, 32, 0.2)', color: 'rgba(245, 130, 32, 0.9)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">I am a legal professional</h2>
            </div>
            <p className="text-slate-300 mb-8 flex-grow">For attorneys & paralegals.</p>
            <div className="flex items-center justify-center text-white font-semibold py-3 px-6 rounded-lg transition-all" style={{ backgroundColor: 'var(--tl-brand-orange)' }}>
              Continue to Professional Portal
            </div>
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-300">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-brand-orange">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </AuthShell>
  );
}
