import React, { useState } from "react";
import Head from "next/head";
import SiteHeader from "../src/components/SiteHeader";

/* ─── Visual mockup components ──────────────────────────────────────── */

function ExhibitListReal() {
  return (
    <div className="bg-white border border-slate-300 rounded-lg shadow-sm font-mono text-xs overflow-hidden">
      <div className="bg-slate-800 text-white px-4 py-2 flex items-center gap-2">
        <span className="text-slate-400 text-[10px] uppercase tracking-widest">Court Document</span>
        <span className="ml-auto text-green-400 text-[10px] font-bold">&#x2713; COURT-READY</span>
      </div>
      <div className="px-4 py-3 border-b border-slate-200 text-center">
        <div className="font-bold text-slate-900 text-sm uppercase tracking-wide">EXHIBIT LIST</div>
        <div className="text-slate-500 text-[10px] mt-0.5">Case No. 24-FL-008847 &middot; Dept. 12</div>
        <div className="text-slate-500 text-[10px]">IN RE: MARRIAGE OF CALDWELL</div>
      </div>
      <table className="w-full text-[10px]">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-200">
            <th className="px-2 py-1.5 text-left text-slate-600 font-semibold w-10">Ex#</th>
            <th className="px-2 py-1.5 text-left text-slate-600 font-semibold">Description</th>
            <th className="px-2 py-1.5 text-left text-slate-600 font-semibold w-20">Date</th>
            <th className="px-2 py-1.5 text-left text-slate-600 font-semibold w-16">Bates</th>
            <th className="px-2 py-1.5 text-left text-slate-600 font-semibold w-16">Auth.</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            ["1", "Text message thread, R\u2192P re: missed exchange", "03/14/24", "P001-004", "Decl. \u00b63"],
            ["2", "Email, school re: unexcused absence (Ethan)", "03/20/24", "P005-006", "Decl. \u00b65"],
            ["3", "Photo \u2014 visible bruise, L. arm (Ethan)", "04/01/24", "P007", "Decl. \u00b68"],
            ["4", "Medical record, Oakview Pediatrics", "04/02/24", "P008-011", "Cert. Copy"],
            ["5", "Call log screenshot, iPhone 14 (Petitioner)", "04/05/24", "P012-013", "Decl. \u00b611"],
          ].map(([ex, desc, date, bates, auth]) => (
            <tr key={ex} className="hover:bg-slate-50">
              <td className="px-2 py-1.5 font-bold text-slate-700">{ex}</td>
              <td className="px-2 py-1.5 text-slate-700">{desc}</td>
              <td className="px-2 py-1.5 text-slate-500">{date}</td>
              <td className="px-2 py-1.5 text-blue-600">{bates}</td>
              <td className="px-2 py-1.5 text-green-700">{auth}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-4 py-2 border-t border-slate-200 text-[10px] text-slate-400">
        Prepared per Local Rule 5.2(c) &middot; All exhibits pre-marked &middot; Foundation declarations attached
      </div>
    </div>
  );
}

function ExhibitListAI() {
  return (
    <div className="bg-white border border-purple-200 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 flex items-center gap-2">
        <span className="text-purple-200 text-[10px] uppercase tracking-widest">&#x2728; AI-Generated Summary</span>
        <span className="ml-auto text-yellow-300 text-[10px] font-bold">&#x2605; 4.9 / 5.0</span>
      </div>
      <div className="px-4 py-3 border-b border-purple-100 text-center bg-purple-50">
        <div className="font-bold text-purple-900 text-sm">Evidence Summary Report</div>
        <div className="text-purple-600 text-[10px] mt-0.5 italic">Professionally compiled by AI Legal Assistant Pro&#x2122;</div>
      </div>
      <div className="px-4 py-3 text-xs space-y-2 font-sans">
        <div className="bg-purple-50 rounded p-2.5 border border-purple-100">
          <div className="font-semibold text-purple-900 mb-1">&#x1F4F1; Communication Evidence</div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            The respondent sent several text messages that demonstrate a pattern of uncooperative
            behavior and hostility toward the petitioner. These messages are attached as exhibits
            and clearly show the respondent&apos;s disregard for the parenting schedule.
          </p>
        </div>
        <div className="bg-indigo-50 rounded p-2.5 border border-indigo-100">
          <div className="font-semibold text-indigo-900 mb-1">&#x1F4F8; Photographic Evidence</div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Multiple photographs have been gathered showing evidence relevant to this case.
            These images support the petitioner&apos;s claims and have been included for the court&apos;s
            review and consideration.
          </p>
        </div>
        <div className="bg-blue-50 rounded p-2.5 border border-blue-100">
          <div className="font-semibold text-blue-900 mb-1">&#x1F4CB; Summary &amp; Recommendation</div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Based on this comprehensive evidence review, the petitioner has a strong case. The
            evidence clearly demonstrates the respondent&apos;s non-compliance and supports the
            requested modification to the parenting plan.
          </p>
        </div>
      </div>
      <div className="px-4 py-2 border-t border-purple-100 text-[10px] text-purple-400 bg-purple-50 italic text-center">
        Generated by AI Legal Assistant Pro&#x2122; &mdash; &ldquo;Your trusted partner in legal success&rdquo;
      </div>
    </div>
  );
}

function CaseCitation({ citation, court, year, summary, isReal, revealed }) {
  const base = "rounded-lg border-2 p-3 transition-all duration-300 font-mono text-xs";
  const style = !revealed
    ? "border-slate-200 bg-white"
    : isReal
    ? "border-green-400 bg-green-50"
    : "border-red-400 bg-red-50";
  return (
    <div className={`${base} ${style}`}>
      {revealed && (
        <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${isReal ? "text-green-700" : "text-red-600"}`}>
          {isReal ? "\u2713 REAL CASE" : "\u2717 AI HALLUCINATION"}
        </div>
      )}
      <div className="font-bold text-slate-800 text-sm leading-snug">{citation}</div>
      <div className="text-slate-500 mt-0.5">{court} &middot; {year}</div>
      <div className="text-slate-600 mt-2 text-[11px] leading-relaxed font-sans">{summary}</div>
    </div>
  );
}

function ParentingPlanMockup({ highlightClause }) {
  const clauses = [
    {
      id: "holiday",
      label: "\u00a7 4.2 \u2014 Holiday Schedule",
      text: "Thanksgiving shall alternate annually. In even years, the child shall spend Thanksgiving with Petitioner from Wednesday at 6:00 PM through Friday at 6:00 PM. In odd years, the same schedule applies to Respondent.",
    },
    {
      id: "bestinterests",
      label: "\u00a7 6.1 \u2014 Best Interests Standard",
      text: "All decisions regarding the child\u2019s welfare shall be made in the child\u2019s best interests pursuant to the applicable standards of the family court, consistent with the child\u2019s health, safety, and general well-being.",
    },
    {
      id: "statute",
      label: "\u00a7 7.4 \u2014 Dispute Resolution",
      text: "Any disputes arising under this agreement shall first be submitted to mediation as required under Cal. Fam. Code \u00a7 3047.2 (Mandatory Pre-Hearing Mediation for High-Conflict Co-Parents), before either party may file a motion with the court.",
    },
    {
      id: "visitation",
      label: "\u00a7 3.1 \u2014 Regular Visitation Schedule",
      text: "Respondent shall have parenting time every other weekend from Friday at 6:00 PM through Sunday at 6:00 PM, and every Wednesday from 5:00 PM to 8:00 PM.",
    },
  ];
  return (
    <div className="bg-white border border-slate-300 rounded-lg shadow-sm font-sans text-xs overflow-hidden">
      <div className="bg-slate-700 text-white px-4 py-2 flex items-center gap-2">
        <span className="text-slate-300 text-[10px] uppercase tracking-widest">Parenting Plan \u2014 AI Draft</span>
        <span className="ml-auto bg-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">AI-Generated</span>
      </div>
      <div className="divide-y divide-slate-100">
        {clauses.map((c) => (
          <div
            key={c.id}
            className={`px-4 py-3 transition-colors ${
              highlightClause && c.id === "statute" ? "bg-red-50 border-l-4 border-red-500" : ""
            }`}
          >
            <div className={`font-semibold mb-1 ${highlightClause && c.id === "statute" ? "text-red-700" : "text-slate-700"}`}>
              {c.label}
              {highlightClause && c.id === "statute" && (
                <span className="ml-2 text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">\u26a0 FICTITIOUS STATUTE</span>
              )}
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExhibitEntryMockup({ revealed }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden text-xs font-mono">
      <div className="bg-slate-700 text-slate-200 px-4 py-2 text-[10px] uppercase tracking-widest">
        Exhibit Entry \u2014 AI Draft
      </div>
      <div className="px-4 py-3 space-y-1">
        <div>
          <span className="text-slate-500">Exhibit No.: </span>
          <span className="font-bold text-slate-800">17</span>
        </div>
        <div>
          <span className="text-slate-500">Description: </span>
          <span className="text-slate-800">
            Screenshot of text messages showing respondent&apos;s threatening behavior, printed and attached hereto.
          </span>
        </div>
        <div>
          <span className="text-slate-500">Source: </span>
          <span className="text-slate-800">Petitioner&apos;s smartphone</span>
        </div>
        <div>
          <span className="text-slate-500">Relevance: </span>
          <span className="text-slate-800">Demonstrates pattern of harassment</span>
        </div>
      </div>
      {revealed && (
        <div className="px-4 py-3 border-t border-red-200 bg-red-50 text-[11px] font-sans space-y-1">
          <div className="font-bold text-red-700">Missing required authentication elements:</div>
          <ul className="text-red-600 space-y-0.5 list-none">
            <li>\u2717 No metadata (device ID, screenshot timestamp, app version)</li>
            <li>\u2717 No declarant identified (&ldquo;who took this screenshot?&rdquo;)</li>
            <li>\u2717 No chain of custody \u2014 was the screenshot altered?</li>
            <li>\u2717 No Bates number for the record</li>
            <li>\u2717 No foundation declaration attached</li>
          </ul>
          <div className="text-red-700 font-semibold mt-1">Objection: Lacks foundation. Likely excluded.</div>
        </div>
      )}
    </div>
  );
}

/* ─── Question data ──────────────────────────────────────────────────── */

const QUESTIONS = [
  {
    id: 1,
    tag: "Case Law",
    prompt: "AI wrote one of these case citations. A real attorney cited it in a brief. The judge called it out immediately.",
    question: "Which citation did AI make up?",
    visual: "citations-1",
    options: [
      { label: "Citation A \u2014 Smith v. Superior Court", value: "A", correct: true },
      { label: "Citation B \u2014 In re Marriage of LaMusga", value: "B", correct: false },
    ],
    correctValue: "A",
    reveal: {
      heading: "\ud83d\udea8 Smith v. Superior Court doesn\u2019t exist.",
      body: "ChatGPT invented it \u2014 case number, reporter citation, and all. In re Marriage of LaMusga, 32 Cal.4th 1072 (2004) is a real landmark California Supreme Court ruling on custody relocation that every family law attorney knows. Judges are now issuing sanctions orders against attorneys who file AI-hallucinated citations. Self-represented litigants face dismissal.",
    },
  },
  {
    id: 2,
    tag: "Court Documents",
    prompt: "One of these was generated by an AI legal assistant. One was built for an actual court filing.",
    question: "Which one could you actually hand to a judge?",
    visual: "exhibit-lists",
    options: [
      { label: "The AI-generated Evidence Summary Report", value: "AI", correct: false },
      { label: "The formatted Exhibit List with Bates numbers", value: "REAL", correct: true },
    ],
    correctValue: "REAL",
    reveal: {
      heading: "\u2705 The formatted exhibit list. The AI summary is inadmissible.",
      body: "The AI summary looks polished \u2014 but it\u2019s a narrative essay, not a court document. It has no exhibit numbers, no Bates stamps, no authentication foundation, no local-rule compliance, and no declaration supporting admissibility. A judge would reject it on the spot. The plain-looking exhibit list is exactly what courts require.",
    },
  },
  {
    id: 3,
    tag: "AI Legal Advice",
    prompt: "Someone asked AI: \u201cCan I record my co-parent\u2019s phone calls without telling them and use the recordings in court?\u201d AI said:",
    question: "Is this AI advice correct?",
    visual: "recording-advice",
    options: [
      { label: "\u2713 Yes \u2014 recordings are always admissible as evidence", value: "yes", correct: false },
      { label: "\u2717 No \u2014 this advice could get you criminally charged", value: "no", correct: true },
    ],
    correctValue: "no",
    reveal: {
      heading: "\u26a0\ufe0f That advice could land you in criminal court.",
      body: "38 states \u2014 including California, Oregon, Washington, and Florida \u2014 require ALL-PARTY CONSENT for phone recordings. Recording someone without consent is a criminal offense. Not only would your recording be inadmissible, you could face wiretapping charges. AI gives this exact wrong answer to thousands of people every week because it doesn\u2019t know your state law and doesn\u2019t update when laws change.",
    },
  },
  {
    id: 4,
    tag: "Hidden Trap",
    prompt: "This AI-generated parenting plan looked professional. Both parties agreed to sign it. Then the judge read \u00a7 7.4.",
    question: "Which clause got it thrown out?",
    visual: "parenting-plan",
    options: [
      { label: "\u00a7 4.2 \u2014 The holiday schedule", value: "holiday", correct: false },
      { label: "\u00a7 6.1 \u2014 The \u2018best interests\u2019 language", value: "bestinterests", correct: false },
      { label: "\u00a7 7.4 \u2014 The dispute resolution clause", value: "statute", correct: true },
      { label: "\u00a7 3.1 \u2014 The visitation schedule", value: "visitation", correct: false },
    ],
    correctValue: "statute",
    reveal: {
      heading: "\ud83d\udd34 Cal. Fam. Code \u00a7 3047.2 does not exist.",
      body: "AI invented the statute number. There is no \u201cMandatory Pre-Hearing Mediation for High-Conflict Co-Parents\u201d code section. The judge flagged it, questioned the parties\u2019 preparation, and ordered the plan redrawn. The family spent two more months and thousands of dollars in delays \u2014 all because a plausible-sounding fake statute slipped into the document.",
    },
  },
  {
    id: 5,
    tag: "Evidence Authentication",
    prompt: "This AI-generated exhibit entry was submitted with a custody motion. The opposing attorney objected immediately.",
    question: "What\u2019s the fatal flaw?",
    visual: "exhibit-entry",
    options: [
      { label: "Nothing \u2014 the entry looks fine", value: "nothing", correct: false },
      { label: "Screenshots are never admissible in family court", value: "never", correct: false },
      { label: "It\u2019s missing authentication foundation and metadata", value: "auth", correct: true },
      { label: "It needs to be notarized", value: "notary", correct: false },
    ],
    correctValue: "auth",
    reveal: {
      heading: "\ud83d\udccb Admitted without foundation = objected to. Probably excluded.",
      body: "Screenshots can be admitted \u2014 but only when properly authenticated. You need: who took it, when, on what device, how it was preserved, and a supporting declaration. Without these, opposing counsel objects on foundation grounds and the judge has no choice but to sustain it. Your most damning evidence gets thrown out because of a paperwork gap AI didn\u2019t warn you about.",
    },
  },
  {
    id: 6,
    tag: "Case Law \u2014 Sanctions",
    prompt: "Two attorneys cited AI-generated cases. One lost their license. One is a national cautionary tale. These are their cases.",
    question: "Which case is REAL?",
    visual: "citations-2",
    options: [
      { label: "Citation A \u2014 Henderson v. AI Technologies Corp.", value: "A", correct: false },
      { label: "Citation B \u2014 Mata v. Avianca, Inc.", value: "B", correct: true },
    ],
    correctValue: "B",
    reveal: {
      heading: "\u2705 Mata v. Avianca is devastatingly real.",
      body: "Mata v. Avianca, Inc., No. 22-cv-1461 (S.D.N.Y. 2023): New York attorneys Steven Schwartz and Peter LoDuca filed a brief citing six ChatGPT-hallucinated cases. They were ordered to pay $5,000 in sanctions, appear before the court personally, and notify the judges whose names appeared in the fake opinions. The case made international headlines and is now taught in every law school\u2019s AI ethics module. Henderson v. AI Technologies Corp. is \u2014 fittingly \u2014 itself a hallucination.",
    },
  },
];

/* ─── Score results ─────────────────────────────────────────────────── */

function getResult(correct, total) {
  if (correct === total) {
    return {
      emoji: "\ud83c\udfc6",
      badge: "Sharp Eye",
      badgeClass: "bg-green-100 text-green-800 border border-green-300",
      headingClass: "text-green-800",
      cardClass: "border-green-200 bg-green-50",
      headline: "You caught every hallucination. Most people don\u2019t.",
      body: "You spotted every AI trap in this quiz \u2014 fake case law, inadmissible AI documents, illegal advice, and invented statutes. You\u2019re exactly the kind of person who knows that AI is a starting point, not a final answer. Now let\u2019s make sure your actual evidence holds up.",
    };
  }
  if (correct >= 4) {
    return {
      emoji: "\ud83d\udc40",
      badge: "Almost There",
      badgeClass: "bg-blue-100 text-blue-800 border border-blue-300",
      headingClass: "text-blue-800",
      cardClass: "border-blue-200 bg-blue-50",
      headline: "You caught most of it \u2014 but courts don\u2019t give partial credit.",
      body: "A few slipped past you. In a real filing, one missed hallucination, one inadmissible exhibit, or one fake statute can tank your case. The gaps aren\u2019t about intelligence \u2014 AI is designed to sound confident. The fix is knowing which questions to ask before you file.",
    };
  }
  if (correct >= 2) {
    return {
      emoji: "\u26a0\ufe0f",
      badge: "At Risk",
      badgeClass: "bg-orange-100 text-orange-800 border border-orange-300",
      headingClass: "text-orange-800",
      cardClass: "border-orange-200 bg-orange-50",
      headline: "AI fooled you more than once. It\u2019s fooling litigants every day.",
      body: "You\u2019re not alone \u2014 most people using AI for legal prep can\u2019t tell the difference between real procedure and a confident-sounding hallucination. The stakes: excluded evidence, dismissed filings, sanctions, and cases lost on procedural grounds that had nothing to do with the actual facts.",
    };
  }
  return {
    emoji: "\ud83d\udea8",
    badge: "Danger Zone",
    badgeClass: "bg-red-100 text-red-800 border border-red-300",
    headingClass: "text-red-800",
    cardClass: "border-red-200 bg-red-50",
    headline: "AI fooled you on almost every question.",
    body: "That\u2019s not a knock on you \u2014 it\u2019s a warning about AI. It generates confident, polished, completely wrong legal content. Fake cases. Non-existent statutes. Evidence without foundation. Advice that leads to criminal charges. This is happening in courtrooms right now. To real people. With real consequences.",
  };
}

/* ─── Visual renderer ────────────────────────────────────────────────── */

function QuestionVisual({ visualKey, revealed }) {
  if (visualKey === "citations-1") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 text-center">Citation A</div>
          <CaseCitation
            citation="Smith v. Superior Court, 198 Cal.App.4th 1, 17 (2011)"
            court="Cal. Ct. App., 2nd Dist."
            year="2011"
            summary="Holding that a parent\u2019s consistent documentation of communication breakdowns constitutes material evidence in custody modification proceedings under the best interests standard."
            isReal={false}
            revealed={revealed}
          />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 text-center">Citation B</div>
          <CaseCitation
            citation="In re Marriage of LaMusga, 32 Cal.4th 1072 (2004)"
            court="California Supreme Court"
            year="2004"
            summary="Landmark ruling establishing factors courts must consider when a custodial parent seeks to relocate with a child, including disruption to parent-child contact and the child\u2019s need for continuity."
            isReal={true}
            revealed={revealed}
          />
        </div>
      </div>
    );
  }

  if (visualKey === "citations-2") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 text-center">Citation A</div>
          <CaseCitation
            citation="Henderson v. AI Technologies Corp., 891 F.3d 445 (2nd Cir. 2021)"
            court="2nd Circuit Court of Appeals"
            year="2021"
            summary="Court held that AI-generated legal advice, when relied upon by pro se litigants, does not constitute ineffective assistance of counsel and imposes no duty of verification on the platform provider."
            isReal={false}
            revealed={revealed}
          />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 text-center">Citation B</div>
          <CaseCitation
            citation="Mata v. Avianca, Inc., No. 22-cv-1461 (S.D.N.Y. 2023)"
            court="S.D.N.Y. \u2014 Judge Kevin Castel"
            year="2023"
            summary="Attorneys sanctioned $5,000 after filing a brief containing six AI-hallucinated case citations. Court ordered counsel to notify judges named in the fabricated opinions. Case became the defining AI-in-courts cautionary tale."
            isReal={true}
            revealed={revealed}
          />
        </div>
      </div>
    );
  }

  if (visualKey === "exhibit-lists") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-1.5 text-center">AI-Generated Summary</div>
          <ExhibitListAI />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5 text-center">Formatted Exhibit List</div>
          <ExhibitListReal />
        </div>
      </div>
    );
  }

  if (visualKey === "recording-advice") {
    return (
      <div className="my-5">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-base">\ud83e\udd16</span>
            </div>
            <div>
              <div className="text-purple-200 text-[10px] uppercase tracking-widest font-bold mb-1">AI Legal Assistant</div>
              <p className="text-sm leading-relaxed">
                Yes, you can record phone calls with your co-parent without notifying them. As long as
                you are a party to the conversation, the recording is legal under federal wiretapping law
                (18 U.S.C. \u00a7 2511), and courts regularly admit such recordings as evidence of parenting
                plan violations or threatening behavior.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[10px] text-purple-300">\ud83d\udc4d Helpful?</span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-purple-200">1,247 people found this useful</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visualKey === "parenting-plan") {
    return (
      <div className="my-5">
        <ParentingPlanMockup highlightClause={revealed} />
      </div>
    );
  }

  if (visualKey === "exhibit-entry") {
    return (
      <div className="my-5">
        <ExhibitEntryMockup revealed={revealed} />
      </div>
    );
  }

  return null;
}

/* ─── Main component ─────────────────────────────────────────────────── */

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const question = QUESTIONS[currentQ];
  const totalQuestions = QUESTIONS.length;
  const selected = answers[question.id];
  const isCorrect = selected === question.correctValue;
  const correctCount = Object.entries(answers).filter(([id, val]) => {
    const q = QUESTIONS.find((q) => q.id === Number(id));
    return q && val === q.correctValue;
  }).length;

  const progress = done ? 100 : Math.round(((currentQ + 1) / totalQuestions) * 100);

  function handleSelect(value) {
    if (revealed) return;
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setRevealed(true);
  }

  function handleNext() {
    setRevealed(false);
    if (currentQ < totalQuestions - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      setDone(true);
    }
  }

  function handleRetake() {
    setAnswers({});
    setCurrentQ(0);
    setRevealed(false);
    setDone(false);
  }

  const result = getResult(correctCount, totalQuestions);

  return (
    <>
      <Head>
        <title>Can You Catch It? The AI Hallucination Test | ThreadLock</title>
        <meta
          name="description"
          content="AI is helping millions prepare for court. Some of what it tells them is dangerously wrong. Can you spot the hallucination? Take the free challenge."
        />
        <link rel="canonical" href="https://threadlock.ai/quiz" />
        <meta property="og:title" content="Can You Catch It? The AI Hallucination Test" />
        <meta
          property="og:description"
          content="Fake case law. Inadmissible AI documents. Illegal advice. It\u2019s happening in courtrooms right now. Can you tell what\u2019s real?"
        />
        <meta property="og:type" content="website" />
      </Head>

      <SiteHeader theme="light" />

      <main className="min-h-screen bg-slate-950 pt-16 pb-20">
        {/* Hero */}
        <div className="text-center px-4 pt-12 pb-8 max-w-2xl mx-auto">
          <span className="inline-block bg-red-900/60 text-red-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-red-700">
            \u26a0 Real consequences. Actual courtrooms.
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Can You Catch What AI Gets Wrong About Civil Court?
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            AI is writing legal documents for millions of self-represented litigants.
            Some of it is{" "}
            <span className="text-red-400 font-semibold">confidently, dangerously wrong.</span>
            {" "}Six questions. See how many you catch.
          </p>
        </div>

        <div className="mx-auto max-w-2xl px-4">
          {/* Progress */}
          <div className="mb-5">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>{done ? "Complete" : `Question ${currentQ + 1} of ${totalQuestions}`}</span>
              <span className="font-mono">{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-1.5 bg-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!done ? (
            <div className="space-y-4">
              {/* Question card */}
              <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="px-6 pt-5 pb-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-900/40 px-2 py-0.5 rounded-full border border-orange-800">
                      {question.tag}
                    </span>
                    <span className="text-[10px] text-slate-500">Q{currentQ + 1} / {totalQuestions}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-1">{question.prompt}</p>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {question.question}
                  </h2>
                </div>

                {/* Visual mockup */}
                <div className="px-6">
                  <QuestionVisual visualKey={question.visual} revealed={revealed} />
                </div>

                {/* Answer options */}
                <div className="px-6 pb-5 space-y-2">
                  {question.options.map((opt) => {
                    const isSelected = selected === opt.value;
                    const isAnswerCorrect = opt.correct;
                    let cls =
                      "w-full text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-150 ";
                    if (!revealed) {
                      cls += "border-slate-600 bg-slate-800 text-slate-200 hover:border-orange-400 hover:bg-slate-700";
                    } else if (isAnswerCorrect) {
                      cls += "border-green-500 bg-green-900/40 text-green-200";
                    } else if (isSelected && !isAnswerCorrect) {
                      cls += "border-red-500 bg-red-900/40 text-red-200";
                    } else {
                      cls += "border-slate-700 bg-slate-800/50 text-slate-500";
                    }
                    return (
                      <button key={opt.value} onClick={() => handleSelect(opt.value)} className={cls} disabled={revealed}>
                        {revealed && isAnswerCorrect && <span className="mr-2">\u2713</span>}
                        {revealed && isSelected && !isAnswerCorrect && <span className="mr-2">\u2717</span>}
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reveal panel */}
              {revealed && (
                <div
                  className={`rounded-2xl border px-6 py-5 ${
                    isCorrect
                      ? "bg-green-950/60 border-green-700"
                      : "bg-red-950/60 border-red-700"
                  }`}
                >
                  <div className={`font-bold text-base mb-2 ${isCorrect ? "text-green-300" : "text-red-300"}`}>
                    {isCorrect ? "You got it." : "Nope \u2014 and here\u2019s why it matters."}
                  </div>
                  <div className={`font-semibold mb-2 text-sm ${isCorrect ? "text-green-200" : "text-red-200"}`}>
                    {question.reveal.heading}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{question.reveal.body}</p>
                  <button
                    onClick={handleNext}
                    className="mt-4 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    {currentQ < totalQuestions - 1 ? "Next Question \u2192" : "See My Score \u2192"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results */
            <div className="space-y-5">
              <div className={`rounded-2xl border p-8 text-center ${result.cardClass}`}>
                <span className="text-5xl">{result.emoji}</span>
                <div className={`inline-block mt-4 text-sm font-bold px-4 py-1 rounded-full ${result.badgeClass}`}>
                  {result.badge}
                </div>
                <h2 className={`text-2xl md:text-3xl font-bold mt-3 ${result.headingClass}`}>
                  {result.headline}
                </h2>
                <div className="text-4xl font-black mt-4 text-slate-800">
                  {correctCount} / {totalQuestions}
                </div>
                <div className="text-slate-500 text-sm mb-4">hallucinations caught</div>
                <p className="text-slate-700 leading-relaxed max-w-lg mx-auto">{result.body}</p>
              </div>

              {/* What ThreadLock does */}
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">What ThreadLock does differently</h3>
                <ul className="space-y-3">
                  {[
                    ["\ud83d\udccb", "Exports court-ready exhibit lists", "Bates-numbered, authentication-ready, formatted to local rules \u2014 not an AI essay."],
                    ["\ud83d\udd12", "Timestamps evidence at creation", "Blockchain-anchored timestamps so opposing counsel can\u2019t challenge when something was captured."],
                    ["\u2696\ufe0f", "Flags what AI can\u2019t verify", "Our system surfaces what needs human review \u2014 we don\u2019t pretend AI knows your judge\u2019s preferences."],
                    ["\ud83d\uddc2\ufe0f", "Builds your authentication foundation", "Every exhibit includes the metadata and declaration language courts actually require."],
                  ].map(([icon, title, desc]) => (
                    <li key={title} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{icon}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{title}</div>
                        <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Build the evidence AI can&apos;t fake.
                </h3>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  ThreadLock helps you document incidents, authenticate evidence, build court-ready
                  timelines, and export exhibit packets that hold up \u2014 no law degree required.
                </p>
                <a
                  href="https://app.threadlock.ai/subscribe?src=quiz&s=quiz_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-100 transition-colors text-lg"
                >
                  Start Free \u2014 No Credit Card \u2192
                </a>
                <p className="text-orange-200 text-sm mt-3">7-day free trial \u00b7 Court-ready in minutes</p>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Note:</strong> This quiz is for educational purposes only and does not constitute legal
                  advice. Case law examples are used for illustrative purposes. Mata v. Avianca, Inc. is a real
                  case; all other citations marked as hallucinations are fabricated examples. Consult a licensed
                  attorney for advice specific to your situation.
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={handleRetake}
                  className="text-sm text-slate-500 hover:text-orange-400 transition-colors underline"
                >
                  Retake the quiz
                </button>
              </div>
            </div>
          )}

          {!done && (
            <p className="text-center text-xs text-slate-600 mt-5">
              No account needed &middot; 3 minutes &middot; See if AI would fool you
            </p>
          )}
        </div>
      </main>
    </>
  );
}
