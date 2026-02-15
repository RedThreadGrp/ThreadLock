import { ResourcePage } from "../types";

export const hearingTomorrow: ResourcePage = {
  contentVersion: 2,
  slug: "hearing-tomorrow",
  title: "Hearing Tomorrow Checklist",
  excerpt: "A practical walkthrough for what to bring, how to label exhibits, and what to avoid saying when you're nervous.",
  tag: "Court Prep",
  topic: "Hearings & Courtroom Prep",
  intent: "Urgent",
  readTime: "5 min read",
  status: "published",
  relatedLinks: [
    { title: "Evidence Intake Guide", href: "/resources/evidence-intake" },
    { title: "Official Court Portals", href: "/resources/official-portals" },
  ],
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      { name: "Court Self-Help Portals", href: "https://www.uscourts.gov/forms" },
      { name: "Federal Rules of Civil Procedure", href: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure" },
      { name: "State Bar Self-Help Centers" }
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Courtroom procedures vary by jurisdiction. Always check your local court rules."
  },
  blocks: {
    shortAnswer: "When you have a hearing coming up fast, you need a system—not a panic attack. This checklist covers what to bring, how to behave, and what to avoid.",
    sections: [
      {
        id: "what-to-bring",
        heading: "What to Bring",
        body: [
          {
            type: "p",
            text: "Essential items for your hearing:"
          },
          {
            type: "ul",
            items: [
              "All filed documents (originals + 2 copies)",
              "Exhibits labeled and organized (A, B, C, etc.)",
              "Calendar showing relevant dates",
              "Notes on key points you want to make",
              "Photo ID and case number",
              "Pen and notepad for taking notes"
            ]
          }
        ]
      },
      {
        id: "exhibit-labeling",
        heading: "Exhibit Labeling",
        body: [
          {
            type: "ul",
            items: [
              "Use letters (A, B, C) for your exhibits",
              "Numbers (1, 2, 3) are typically for the other party's exhibits",
              "Label each page in the bottom right corner",
              "Bring extra copies for the judge and opposing party",
              "Keep exhibits in order and easy to access"
            ]
          }
        ]
      },
      {
        id: "what-to-avoid",
        heading: "What to Avoid",
        body: [
          {
            type: "p",
            text: "Critical mistakes to avoid in court:"
          },
          {
            type: "ul",
            items: [
              "Don't interrupt the judge",
              "Don't argue with the other party directly",
              "Don't bring up irrelevant history",
              "Don't read from a script word-for-word",
              "Don't show emotion—stick to facts",
              "Don't make personal attacks",
              "Don't volunteer information beyond what's asked"
            ]
          }
        ]
      },
      {
        id: "before-you-walk-in",
        heading: "Before You Walk In",
        body: [
          {
            type: "p",
            text: "Pre-hearing preparation:"
          },
          {
            type: "ul",
            items: [
              "Arrive 15 minutes early",
              "Turn off your phone completely",
              "Use the restroom",
              "Take three deep breaths",
              "Review your key points one final time",
              "Remember: you're presenting facts, not arguing"
            ]
          }
        ]
      },
      {
        id: "in-the-courtroom",
        heading: "In the Courtroom",
        body: [
          {
            type: "p",
            text: "Courtroom etiquette and behavior:"
          },
          {
            type: "ul",
            items: [
              "Stand when the judge enters",
              "Address the judge as 'Your Honor'",
              "Speak clearly and at a normal pace",
              "Answer only what's asked",
              "If you don't know, say 'I don't know'",
              "Wait for your turn to speak",
              "Remain calm and respectful throughout"
            ]
          },
          {
            type: "p",
            text: "This is not legal advice. This is basic courtroom hygiene for self-represented litigants."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What if I forget to bring a document?",
        answer: "If you realize before the hearing starts, ask the court clerk if you can retrieve it. If it's during the hearing, inform the judge immediately. You may need to request a continuance or submit the document later, depending on its importance."
      },
      {
        question: "What if I'm too nervous to speak clearly?",
        answer: "It's normal to be nervous. Take slow, deep breaths. Pause before answering questions. If you need a moment, it's okay to say 'May I have a moment to collect my thoughts, Your Honor?' Judges understand that self-represented litigants are nervous."
      },
      {
        question: "What if I arrive late to the hearing?",
        answer: "Arrive early to avoid this. If unavoidable, enter quietly, wait for an appropriate pause, and apologize briefly to the judge. Explain if there was an emergency. The judge may proceed without you if you're significantly late, so call the court clerk immediately if you know you'll be late."
      }
    ]
  }
};
