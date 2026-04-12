import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../src/components/SiteHeader";

const QUESTIONS = [
  {
    id: 1,
    text: "What type of legal situation are you dealing with?",
    options: [
      { label: "Child custody or visitation dispute", value: "custody", points: 3 },
      { label: "Divorce or separation", value: "divorce", points: 3 },
      { label: "Landlord-tenant issue", value: "landlord", points: 2 },
      { label: "Small claims or civil dispute", value: "civil", points: 2 },
      { label: "Harassment or protective order", value: "harassment", points: 3 },
      { label: "Other legal matter", value: "other", points: 1 },
    ],
  },
  {
    id: 2,
    text: "How are you handling your legal case?",
    options: [
      { label: "Representing myself (pro se / self-represented)", value: "self", points: 3 },
      { label: "Working with an attorney", value: "attorney", points: 2 },
      { label: "Considering both options", value: "both", points: 2 },
    ],
  },
  {
    id: 3,
    text: "How is your evidence currently organized?",
    options: [
      { label: "Scattered across texts, emails, photos — hard to find", value: "scattered", points: 3 },
      { label: "Saved in folders but not really organized", value: "partial", points: 2 },
      { label: "Mostly organized with dates and notes", value: "moderate", points: 1 },
      { label: "Fully organized and court-ready", value: "ready", points: 0 },
    ],
  },
  {
    id: 4,
    text: "Do you have clear timestamps and context for your key incidents?",
    options: [
      { label: "No — I often can't remember exact dates", value: "no", points: 3 },
      { label: "Somewhat — I have some records but gaps exist", value: "some", points: 2 },
      { label: "Yes — I document incidents as they happen", value: "yes", points: 0 },
    ],
  },
  {
    id: 5,
    text: "Have you ever lost or been unable to find evidence when you needed it?",
    options: [
      { label: "Yes, more than once", value: "often", points: 3 },
      { label: "Yes, at least once", value: "once", points: 2 },
      { label: "No, I can always find what I need", value: "never", points: 0 },
    ],
  },
  {
    id: 6,
    text: "Do you know which of your documents would be most important to a judge?",
    options: [
      { label: "No — I'm unsure what matters most", value: "unsure", points: 3 },
      { label: "I have a rough idea but need guidance", value: "rough", points: 2 },
      { label: "Yes — I have a clear picture of my key evidence", value: "clear", points: 0 },
    ],
  },
  {
    id: 7,
    text: "How close is your court date or next legal deadline?",
    options: [
      { label: "Within the next 30 days", value: "soon", points: 3 },
      { label: "1–3 months away", value: "medium", points: 2 },
      { label: "More than 3 months away", value: "far", points: 1 },
      { label: "No date set yet", value: "none", points: 0 },
    ],
  },
];

function getResult(score) {
  if (score >= 16) {
    return {
      level: "Critical",
      emoji: "🚨",
      color: "red",
      headline: "Your case needs serious organization — now.",
      body:
        "Based on your answers, your evidence is scattered and your court preparation is at high risk. Without a system, critical incidents can be forgotten, timestamps lost, and your story harder to tell. ThreadLock was built for exactly this situation.",
      cta: "Start Organizing for Free",
    };
  }
  if (score >= 9) {
    return {
      level: "Needs Work",
      emoji: "⚠️",
      color: "orange",
      headline: "You have some evidence, but gaps could hurt your case.",
      body:
        "You're not starting from zero, but there are real vulnerabilities in how your evidence is organized. Missing timestamps, misplaced records, or unclear timelines can undermine even strong cases. ThreadLock helps you close those gaps before they matter.",
      cta: "Try ThreadLock Free",
    };
  }
  return {
    level: "Good Start",
    emoji: "✅",
    color: "green",
    headline: "You're ahead of most people — let's make it bulletproof.",
    body:
      "You have a solid foundation. ThreadLock can help you go from organized to court-ready: blockchain-verified timestamps, AI-assisted journaling, and one-click exhibit exports your attorney (or a judge) can actually read.",
    cta: "Try ThreadLock Free",
  };
}

const COLOR_MAP = {
  red: {
    badge: "bg-red-100 text-red-700 border border-red-200",
    bar: "bg-red-500",
    card: "bg-red-50 border-red-200",
    heading: "text-red-700",
  },
  orange: {
    badge: "bg-orange-100 text-orange-700 border border-orange-200",
    bar: "bg-orange-500",
    card: "bg-orange-50 border-orange-200",
    heading: "text-orange-700",
  },
  green: {
    badge: "bg-green-100 text-green-700 border border-green-200",
    bar: "bg-green-500",
    card: "bg-green-50 border-green-200",
    heading: "text-green-700",
  },
};

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const question = QUESTIONS[currentQ];
  const totalQuestions = QUESTIONS.length;
  const progress = submitted ? 100 : Math.round((currentQ / totalQuestions) * 100);

  function handleSelect(value, points) {
    const updated = { ...answers, [question.id]: { value, points } };
    setAnswers(updated);

    if (currentQ < totalQuestions - 1) {
      setTimeout(() => setCurrentQ((q) => q + 1), 280);
    } else {
      setTimeout(() => setSubmitted(true), 280);
    }
  }

  const totalScore = Object.values(answers).reduce((sum, a) => sum + a.points, 0);
  const result = getResult(totalScore);
  const colors = COLOR_MAP[result.color];

  const maxScore = QUESTIONS.reduce((sum, q) => {
    const max = Math.max(...q.options.map((o) => o.points));
    return sum + max;
  }, 0);

  return (
    <>
      <Head>
        <title>Is Your Legal Case Evidence Court-Ready? Take the Quiz | ThreadLock</title>
        <meta
          name="description"
          content="Answer 7 quick questions to find out how prepared your evidence is for court — and what to do next. Free quiz from ThreadLock."
        />
        <link rel="canonical" href="https://threadlock.ai/quiz" />
        <meta property="og:title" content="Is Your Legal Case Evidence Court-Ready? Take the Quiz" />
        <meta
          property="og:description"
          content="Answer 7 quick questions to find out how prepared your evidence is for court. Free from ThreadLock."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Site Header */}
      <SiteHeader theme="light" />

      <main className="min-h-screen bg-slate-50 pt-20 pb-16">
        <div className="mx-auto max-w-2xl px-4">

          {/* Hero */}
          <div className="text-center mb-8 pt-6">
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Free 2-Minute Quiz
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
              Is Your Legal Case Evidence Court-Ready?
            </h1>
            <p className="text-slate-600 text-lg max-w-lg mx-auto">
              Answer {totalQuestions} quick questions to see how prepared you are — and what to do next.
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>{submitted ? "Complete!" : `Question ${currentQ + 1} of ${totalQuestions}`}</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-2 bg-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Quiz Card */}
          {!submitted ? (
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                Question {currentQ + 1}
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                {question.text}
              </h2>
              <ul className="space-y-3">
                {question.options.map((opt) => (
                  <li key={opt.value}>
                    <button
                      onClick={() => handleSelect(opt.value, opt.points)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 font-medium text-slate-800
                        ${answers[question.id]?.value === opt.value
                          ? "border-orange-500 bg-orange-50"
                          : "border-slate-200 bg-white hover:border-orange-400 hover:bg-orange-50"
                        }`}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Back button */}
              {currentQ > 0 && (
                <button
                  onClick={() => setCurrentQ((q) => q - 1)}
                  className="mt-6 text-sm text-slate-500 hover:text-orange-600 transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            /* Results */
            <div className="space-y-6">
              {/* Score card */}
              <div className={`bg-white rounded-2xl shadow-md border p-8 ${colors.card}`}>
                <div className="text-center mb-4">
                  <span className="text-5xl">{result.emoji}</span>
                  <div className={`inline-block mt-3 text-sm font-bold px-4 py-1 rounded-full ${colors.badge}`}>
                    {result.level}
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-bold mt-3 ${colors.heading}`}>
                    {result.headline}
                  </h2>
                </div>

                {/* Score bar */}
                <div className="my-6">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Your preparedness score</span>
                    <span>{totalScore} / {maxScore}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all duration-700 ${colors.bar}`}
                      style={{ width: `${Math.round((totalScore / maxScore) * 100)}%` }}
                    />
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-center">{result.body}</p>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Important:</strong> This quiz is for informational purposes only and does not
                  constitute legal advice. ThreadLock is a technology tool, not a law firm. Results are
                  based on your self-reported answers and should not be relied upon as a legal assessment.
                  For advice specific to your situation, please consult a licensed attorney.
                </p>
              </div>

              {/* Try Free CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Get your case organized — free.
                </h3>
                <p className="text-orange-100 mb-6 text-lg leading-relaxed">
                  ThreadLock helps you document incidents, organize evidence with AI, build court-ready
                  timelines, and export exhibit packets — no law degree required.
                </p>
                <a
                  href="https://app.threadlock.ai/subscribe?src=quiz&s=quiz_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-100 transition-colors text-lg"
                >
                  {result.cta} →
                </a>
                <p className="text-orange-200 text-sm mt-3">7-day free trial · No credit card required</p>
              </div>

              {/* Retake */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setAnswers({});
                    setCurrentQ(0);
                    setSubmitted(false);
                  }}
                  className="text-sm text-slate-500 hover:text-orange-600 transition-colors underline"
                >
                  Retake the quiz
                </button>
              </div>
            </div>
          )}

          {/* Supporting trust line */}
          {!submitted && (
            <p className="text-center text-xs text-slate-400 mt-6">
              No account needed · 2 minutes · Completely free
            </p>
          )}
        </div>
      </main>
    </>
  );
}
