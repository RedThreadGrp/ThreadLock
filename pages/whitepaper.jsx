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
    <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
      <span className={threadColor}>Thread</span>
      <span className={lockColor}>Lock</span>
      <span className={`ml-0.5 align-text-top text-[0.5em] font-black ${tmColor}`}>™</span>
    </span>
  );
}

/* ----------------- Chart Colors ----------------- */
const COLORS = {
  orange: '#ea580c', // tailwind orange-600
  slate: '#1e293b',  // tailwind slate-800
  grid: '#e2e8f0',
  hover: 'rgba(148,163,184,0.12)',
};

/* ----------------- Charts ----------------- */
const CasesBarChart = ({ data, title, note }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 h-full flex flex-col">
    <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">{title}</h3>
    <p className="text-xs text-slate-500 mb-4 text-center">{note}</p>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RBarChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} />
          <XAxis dataKey="label" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} width={36} />
          <Tooltip
            cursor={{ fill: COLORS.hover }}
            formatter={(value, _name, { payload }) => [payload.rawValue, payload.label]}
          />
          <Bar dataKey="value" fill={COLORS.orange} radius={[6, 6, 0, 0]} />
        </RBarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const RepresentationPieChart = ({ data, title, note }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 h-full flex flex-col">
    <h3 className="text-lg font-bold text-slate-800 mb-2 text-center">{title}</h3>
    <p className="text-xs text-slate-500 mb-4 text-center">{note}</p>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={i === 0 ? COLORS.orange : COLORS.slate} />
            ))}
          </Pie>
          <Tooltip formatter={(v, n) => [`${v}%`, n]} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

/* ----------------- The White Paper Page ----------------- */
export default function WhitePaperPage() {
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; background-color: #f1f5f9; }
        .wp-container { max-width: 840px; margin: auto; }
        .wp-header { padding: 3rem 1.5rem; text-align: center; border-bottom: 1px solid #e2e8f0; background-color: white;}
        .wp-section { padding: 3rem 1.5rem; border-bottom: 1px solid #e2e8f0; background-color: white;}
        .wp-section h2 { font-size: 2.25rem; font-weight: 800; color: #1e293b; margin-bottom: 1.5rem; }
        .wp-section h3 { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin-top: 2.5rem; margin-bottom: 1rem; }
        .wp-section p { font-size: 1.1rem; line-height: 1.8; color: #334155; margin-bottom: 1.5rem; }
        .wp-blockquote { border-left: 4px solid #ea580c; padding-left: 1.5rem; margin: 2rem 0; font-size: 1.2rem; font-style: italic; color: #1e293b; }
      `}</style>

      <div className="page-container">
        <main className="wp-container">
          <header className="wp-header">
            <BrandWordmark className="text-5xl justify-center" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-slate-900">
              An Investment in Access, Equality, and Return
            </h1>
            <p className="mt-4 text-lg text-slate-600">A White Paper on the Non-Equity Investment Opportunity in ThreadLock™</p>
            <p className="text-sm text-slate-500 mt-2">August 30, 2025</p>
          </header>
          
          <section className="wp-section">
            <h2>1. Executive Summary</h2>
            <p>The American family law system is failing. It's not for a lack of good intentions, but from a profound lack of accessible tools. Every year, 3.8 million new cases flood the courts, and in 72% of them, at least one person is navigating the process alone. These are people in the middle of intense personal turmoil, expected to master a bewildering legal landscape with no guidance. This leads to unfair outcomes and a massive societal cost. ThreadLock is built to fix this crisis at its core.</p>
            <p>We are seeking <strong>$150,000</strong> in non-equity funding to bring ThreadLock to market. Our strategy is built on high-volume, scalable channels, including a groundbreaking pilot program with Tribal nations and a modern employee benefit offering. We project a <strong>time to market of 6 months</strong>, reaching <strong>profitability within 12 to 15 months</strong>, and delivering a <strong>full return on investment within 18 to 24 months</strong>. Our aggressive growth scenarios offer returns of <strong>5x or more</strong>. This is an opportunity to fund a solution with a clear path to profitability and a powerful, measurable social impact.</p>
          </section>

          <section className="wp-section">
            <h2>2. The Market Failure: A Personal and Systemic View</h2>
            <p>The story of ThreadLock began not in a boardroom, but in a courtroom. As the founder, I walked in to represent myself in my own divorce. I had been to law school, but after several years as a stay-at-home mom, I was left with legal knowledge but no money and no access to the professional network I once had. I thought my knowledge would be enough. I was wrong.</p>
            <p>The system was overwhelming. My confidence was quickly replaced by the same fear and powerlessness that millions feel. The epiphany came when I learned about the judge in my case: a former advocate for the underserved and a champion for the underdog. Yet, from the bench, they were just as trapped by the system's chaos as I was.</p>
            <blockquote className="wp-blockquote">"Instead of anger, I felt a moment of clarity. I saw a good person constrained by a bad system. The only reason a champion for justice becomes the hand of an unfeeling system is a lack of an alternative."</blockquote>
            <p>This experience revealed the true market failure ThreadLock addresses. It is a crisis of information. The charts below illustrate the scale of this problem. Millions of people are left to navigate this alone, creating a massive, underserved market born from the system's own inefficiency.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <CasesBarChart
                data={marketData}
                title="U.S. Annual Family Law Cases"
                note="(~3.8M Total Cases Annually)"
              />
              <RepresentationPieChart
                data={selfRepData}
                title="Representation in Family Law"
                note="(Domestic Relations Cases)"
              />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">Source: National Center for State Courts, Legal Services Corporation.</p>
          </section>

          <section className="wp-section">
            <h2>3. Our Solution: Technology as an Equalizer</h2>
            <p>ThreadLock provides the alternative the system needs. It is an AI-powered application that delivers clarity, organization, and verifiable truth to the legal process. We are not selling legal advice; we are providing access to justice.</p>
            <div className="grid grid-cols-1 gap-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-orange-100 text-orange-600 flex items-center justify-center rounded-lg"><BrainCircuitIcon className="w-6 h-6" /></div>
                <div>
                  <h3 className="font-bold text-slate-800 -mt-1 mb-1">AI-Guided Journaling</h3>
                  <p className="text-base">Our AI does not just record notes; it asks the right questions. Based on local court rules, it prompts users for crucial details like witnesses, dates, and objective facts, helping them build credible evidence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-orange-100 text-orange-600 flex items-center justify-center rounded-lg"><ShieldCheckIcon className="w-6 h-6" /></div>
                <div>
                  <h3 className="font-bold text-slate-800 -mt-1 mb-1">Immutable & Secure Record-Keeping</h3>
                  <p className="text-base">We use blockchain to timestamp every entry. This creates an unchangeable, verifiable record that prevents evidence tampering and settles disputes about when an event was documented.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-orange-100 text-orange-600 flex items-center justify-center rounded-lg"><FileTextIcon className="w-6 h-6" /></div>
                <div>
                  <h3 className="font-bold text-slate-800 -mt-1 mb-1">Court-Ready Exports</h3>
                  <p className="text-base">With one click, users can export their entire case file into a clean, professional summary. It is a clear, chronological story formatted for judges to understand quickly, saving hours of painful preparation.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="wp-section">
            <h2>4. Go-to-Market Strategy & Rollout</h2>
            <p>Our strategy is designed for rapid market penetration and revenue generation through high-volume, scalable channels. This approach minimizes initial marketing spend while maximizing impact.</p>
            <h3>Phase 1: The Tribal Pilot Program (Months 1-6)</h3>
            <p>We have an unprecedented opportunity to partner with Tribal nations, driven by a key contact who wants to roll out ThreadLock to their communities. This is more than a pilot; it is a foundational partnership. It provides immediate access to a large, motivated user base, validates our social impact mission, and generates our first stream of recurring revenue. This program will serve as a powerful case study for our broader B2B and consumer efforts.</p>
            <h3>Phase 2: B2B - The Modern Employee Benefit (Months 6-18)</h3>
            <p>Family law issues are a leading cause of workplace stress and absenteeism. We will market ThreadLock as an essential employee wellness benefit. Our pricing model of <strong>$1 per employee per month</strong> is a low-cost, high-value proposition for companies seeking to support their teams. This creates a predictable, recurring revenue stream.</p>
            <h3>Phase 3: Aggressive Direct-to-Consumer Marketing (Months 12+)</h3>
            <p>With established revenue and powerful testimonials from our initial rollouts, we will launch an aggressive marketing campaign targeting millions of self-represented litigants. We will use targeted digital advertising in parenting groups, legal aid forums, and social media, leveraging our powerful user stories to drive conversions.</p>
          </section>

          <section className="wp-section">
            <h2>5. Financial Projections & ROI</h2>
            <h3>Initial Capital Requirement: $150,000</h3>
            <p>This capital will be deployed to achieve key revenue-generating milestones:</p>
            <ul>
              <li><strong>Product Finalization & Launch (40% - $60,000):</strong> Finalize app development and scale infrastructure.</li>
              <li><strong>B2B Sales & Marketing (35% - $52,500):</strong> Hire a dedicated B2B sales lead.</li>
              <li><strong>Tribal Partnership Pilot (25% - $37,500):</strong> Fund the launch of our foundational pilot program.</li>
            </ul>
            <h3>Timeline & ROI Projections (Non-Equity)</h3>
            <p>Our model is built for rapid returns, based on our phased rollout strategy:</p>
            <ul>
              <li><strong>Time to Market:</strong> 6 Months</li>
              <li><strong>Time to Profitability:</strong> 12-15 Months</li>
              <li><strong>Time to Full ROI (1x Return):</strong> 18-24 Months</li>
            </ul>
            <div className="bg-slate-50 p-6 rounded-lg mt-8">
              <h3 className="text-center mt-0">Projected Return Scenarios</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center mt-4">
                <div>
                  <p className="text-3xl font-bold text-slate-800">1.5x</p>
                  <p className="font-semibold text-orange-600">Conservative</p>
                  <p className="text-sm text-slate-600 mt-1">Achieved by securing 5,000 B2B users within 12 months.</p>
                </div>
                <div className="ring-2 ring-orange-500 rounded-lg p-4">
                  <p className="text-3xl font-bold text-slate-800">3x</p>
                  <p className="font-semibold text-orange-600">Moderate</p>
                  <p className="text-sm text-slate-600 mt-1">Achieved via B2B growth and the Tribal pilot program, securing 25,000 users.</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-800">5x+</p>
                  <p className="font-semibold text-orange-600">Aggressive</p>
                  <p className="text-sm text-slate-600 mt-1">Achieved with a major corporate client and full Tribal rollout, covering 100,000+ users.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="wp-section text-center">
            <h2>6. Conclusion & Call to Action</h2>
            <p>An investment in ThreadLock is more than a financial return. It is a direct investment in a scalable solution to a systemic crisis. It is an opportunity to empower millions of families like Sarah's and to fund the alternative that the justice system desperately needs.</p>
            <a href="mailto:info@threadlock.ai" className="inline-block bg-orange-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-orange-700 transform hover:-translate-y-1 transition-all mt-4">
              Let's Connect
            </a>
          </section>
        </main>
      </div>
    </>
  );
}
