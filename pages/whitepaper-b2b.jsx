'use client';
import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  LabelList,
} from 'recharts';

/* ----------------- Icons ----------------- */
const BrainCircuitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.23"/><path d="M18.668 15.65a3 3 0 1 0-5.993.23"/><path d="M12 12a3 3 0 1 0-5.993.23"/><path d="M12 19a3 3 0 1 0-5.993.23"/><path d="M18.668 8.65a3 3 0 1 0-5.993.23"/><path d="M12 5a3 3 0 1 0 5.993.23"/><path d="m12 12 2.5 2.5"/><path d="m12 5-2.5 2.5"/><path d="m18.5 8.5 2.5 2.5"/><path d="m12 19 2.5-2.5"/><path d="m6.5 8.5-2.5 2.5"/></svg>
);
const ShieldCheckIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
);

/* ----------------- Brand ----------------- */
function BrandWordmark({ className = "", theme = "light" }) {
  const threadColor = theme === 'dark' ? 'text-white' : 'text-slate-800';
  const lockColor = theme === 'dark' ? 'text-orange-400' : 'text-orange-600';
  const tmColor = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <span className={`inline-flex items-center font-bold text-2xl tracking-tight select-none ${className}`}>
      <span className={threadColor}>Thread</span>
      <span className={lockColor}>Lock</span>
      <span className={`ml-0.5 align-middle text-[0.5em] font-black ${tmColor}`}>™</span>
    </span>
  );
}

/* ----------------- Helpers ----------------- */
const COLORS = {
  orange: '#ea580c',
  slate: '#1e293b',
  grid: '#e2e8f0',
  hover: 'rgba(148,163,184,0.12)',
};
const useIsMounted = () => {
  const [m, setM] = React.useState(false);
  React.useEffect(() => setM(true), []);
  return m;
};

/* ----------------- Charts ----------------- */
const CasesBarChart = ({ data, title, note }) => {
  const mounted = useIsMounted();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">{title}</h3>
      <p className="text-xs text-slate-500 mb-4 text-center">{note}</p>
      <div className="h-64 min-w-0">
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <RBarChart data={data} margin={{ top: 40, right: 24, left: 28, bottom: 24 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} interval={0} tickMargin={10} />
              <YAxis width={48} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip cursor={{ fill: COLORS.hover }} formatter={(value, _n, { payload }) => [payload.rawValue, payload.label]} />
              <Bar dataKey="value" fill={COLORS.orange} radius={[6, 6, 0, 0]}>
                <LabelList dataKey="rawValue" position="top" offset={6} />
              </Bar>
            </RBarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

const RepresentationPieChart = ({ data, title, note }) => {
  const mounted = useIsMounted();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">{title}</h3>
      <p className="text-xs text-slate-500 mb-4 text-center">{note}</p>
      <div className="h-64 min-w-0">
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="label" innerRadius={60} outerRadius={90} paddingAngle={2}>
                {data.map((_, i) => <Cell key={i} fill={i === 0 ? COLORS.orange : COLORS.slate} />)}
              </Pie>
              <Tooltip formatter={(v, n) => [`${v}%`, n]} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

/* ----------------- Feature Box ----------------- */
function FeatureItem({ icon: Icon, title, children }) {
  return (
    <div className="bg-white p-5 rounded-lg border border-slate-200">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 shrink-0 bg-orange-100 text-orange-600 flex items-center justify-center rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="feature-title text-base font-bold text-slate-800">{title}</h3>
      </div>
      <p className="mt-2 mb-0 text-base text-slate-700">{children}</p>
    </div>
  );
}

/* ----------------- Page ----------------- */
export default function WhitePaperB2BPage() {
  const marketData = [
    { label: 'Divorce', value: 90, rawValue: '~1.1M' },
    { label: 'Child Support', value: 74, rawValue: '~0.9M' },
    { label: 'Paternity', value: 33, rawValue: '~0.4M' },
    { label: 'Adoption & Other', value: 25, rawValue: '~0.3M' },
  ];
  const selfRepData = [
    { label: 'At Least One Party Self-Represented', value: 72, rawValue: '72%' },
    { label: 'Full Legal Representation', value: 28, rawValue: '28%' },
  ];

  return (
    <>
      <style jsx global>{`
        body { background-color: #f1f5f9; }
        .wp-container { max-width: 840px; margin: auto; }
        .wp-header { padding: 3rem 1.5rem; text-align: center; border-bottom: 1px solid #e2e8f0; background-color: white;}
        .wp-section { padding: 3rem 1.5rem; border-bottom: 1px solid #e2e8f0; background-color: white;}
        .wp-section h2 { font-size: 2.25rem; font-weight: 800; color: #1e293b; margin-bottom: 1rem; }
        .wp-section h3 { font-size: 1.125rem; font-weight: 700; color: #1e293b; margin: 0; }
        .feature-title { margin: 0; line-height: 1; }
        .wp-section p { font-size: 1.05rem; line-height: 1.75; color: #334155; margin: 0 0 1rem 0; }
        .wp-blockquote { border-left: 4px solid #ea580c; padding-left: 1rem; margin: 1.25rem 0; font-size: 1.05rem; font-style: italic; color: #1e293b; }
      `}</style>

      <div className="page-container">
        <main className="wp-container">
          <header className="wp-header">
            <BrandWordmark className="text-5xl justify-center" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-slate-900">An Investment in Access, Equality, and Return</h1>
            <p className="mt-4 text-lg text-slate-600">A white paper on a non equity investment in ThreadLock</p>
            <p className="text-sm text-slate-500 mt-2">August 30, 2025</p>
          </header>

          <section className="wp-section">
            <h2>1. Executive Summary</h2>
            <p>The family law system is overloaded. About 3.8 million new cases hit the courts each year and in most of them at least one person goes it alone. People in the middle of life stress are told to figure out a legal maze with little help. That leads to worse outcomes and higher costs. ThreadLock is built to make the process clearer and fairer.</p>
            <p>We are seeking <strong>$150,000</strong> in non equity funding to launch. We will start with an employer rollout through a broker network. Time to market is 3 months with brokers that already carry EAP and mental health benefits. Profitability in 9 to 12 months. Full payback in 12 to 18 months. With strong uptake the return can be 5x or more.</p>
          </section>

          <section className="wp-section">
            <h2>2. The Market Failure</h2>
            <p>This started in a courtroom, not a boardroom. I represented myself. Law school did not help when I had no budget and no network. I thought I could manage. I was wrong.</p>
            <p>The judge in my case had a record of serving the underserved. From the bench they were stuck in the same chaos I was.</p>
            <blockquote className="wp-blockquote">I saw a good person boxed in by a bad system. The problem was not intent. It was the lack of a workable alternative.</blockquote>
            <p>That is what ThreadLock addresses. It is an information problem at scale.</p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <CasesBarChart data={marketData} title="U.S. Annual Family Law Cases" note="About 3.8M total each year" />
              <RepresentationPieChart data={selfRepData} title="Representation in Family Law" note="Domestic relations cases" />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">Source: National Center for State Courts, Legal Services Corporation.</p>
          </section>

          <section className="wp-section">
            <h2>3. The Product</h2>
            <div className="grid grid-cols-1 gap-8 mt-8">
              <FeatureItem icon={BrainCircuitIcon} title="AI guided journaling">
                Prompts based on local rules capture witnesses, dates, and facts in clear language so evidence holds up.
              </FeatureItem>
              <FeatureItem icon={ShieldCheckIcon} title="Immutable records">
                Every entry is timestamped on a blockchain to prevent edits and end fights about when something was logged.
              </FeatureItem>
              <FeatureItem icon={FileTextIcon} title="Court ready exports">
                One click turns notes into clean summaries and timelines a judge can scan in minutes.
              </FeatureItem>
            </div>
          </section>

          <section className="wp-section">
            <h2>4. Rollout</h2>
            <p>Start with benefits brokers that already sell EAP and mental health tools. Package ThreadLock as a low cost add on at one dollar per employee per month. Give brokers co branded copy, a short deck, and a sandbox. Run a two week enablement sprint per broker. Pilot with two midsize employers in month two. Go live in month three with a simple agreement and SSO.</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Channel: national and regional brokers, TPAs, and benefits consultants</li>
              <li>Buyer: HR and total rewards leaders</li>
              <li>Hook: reduce legal stress, fewer missed days, better documentation in custody and support matters</li>
              <li>Pricing: one dollar per employee per month with tiered volume</li>
            </ul>
          </section>

          <section className="wp-section">
            <h2>5. Money</h2>
            <h3>Initial ask: $150,000</h3>
            <ul className="list-disc pl-6">
              <li><strong>Build and launch, 60,000</strong> product and infra</li>
              <li><strong>Sales and marketing, 52,500</strong> B2B lead and materials</li>
              <li><strong>Broker program, 37,500</strong> partner onboarding, enablement, legal review</li>
            </ul>

            <h3>Timeline</h3>
            <ul className="list-disc pl-6">
              <li><strong>Time to market:</strong> 3 months</li>
              <li><strong>Profitability:</strong> 9 to 12 months</li>
              <li><strong>Full payback:</strong> 12 to 18 months</li>
            </ul>

            <div className="bg-slate-50 p-6 rounded-lg mt-8">
              <h3 className="text-center mt-0">Return scenarios</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center mt-4">
                <div>
                  <p className="text-3xl font-bold text-slate-800">1.5x</p>
                  <p className="font-semibold text-orange-600">Conservative</p>
                  <p className="text-sm text-slate-600 mt-1">About 5,000 employees in year one through three brokers.</p>
                </div>
                <div className="ring-2 ring-orange-500 rounded-lg p-4">
                  <p className="text-3xl font-bold text-slate-800">3x</p>
                  <p className="font-semibold text-orange-600">Moderate</p>
                  <p className="text-sm text-slate-600 mt-1">Broker network lift to 25,000 employees across 30 employers.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-800">5x+</p>
                  <p className="font-semibold text-orange-600">Aggressive</p>
                  <p className="text-sm text-slate-600 mt-1">One national employer plus broad broker channel adoption.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="wp-section text-center">
            <h2>6. Close</h2>
            <p>This is a simple ask with a clear plan and a needed outcome.</p>
            <a href="mailto:info@threadlock.ai" className="inline-block bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all mt-4">
              Let's connect
            </a>
          </section>
        </main>
      </div>
    </>
  );
}
