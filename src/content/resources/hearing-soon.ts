import { DivorceKit } from "../types";

export const hearingSoon: DivorceKit = {
  contentVersion: 2,
  slug: "hearing-soon",
  title: "Hearing Soon Kit",
  description: "Everything you need when a hearing is approaching fast.",
  whatYouGet: [
    "Hearing Tomorrow Checklist",
    "Exhibit labeling guidelines",
    "Courtroom etiquette basics",
    "What to bring checklist",
    "Common mistakes to avoid",
  ],
  estimatedTime: "15 minutes",
  resources: ["/resources/hearing-tomorrow", "/resources/exhibits-guide", "/resources/courtroom-prep"],
  status: "published",
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      { 
        title: "Court Procedures",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/",
        lastAccessed: "2026-02-16",
        note: "General courtroom procedures and hearing guidance"
      },
      { 
        title: "Find Legal Aid",
        organization: "Legal Services Corporation",
        url: "https://www.lsc.gov/what-legal-aid/find-legal-aid",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Free or low-cost legal assistance"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Courtroom procedures vary by court. This kit provides general guidance."
  },
  blocks: {
    shortAnswer: "When a hearing is approaching fast, you need immediate, actionable guidance. This kit bundles the most critical resources for hearing preparation into one streamlined package.",
    sections: [
      {
        id: "whats-included",
        heading: "What's Included",
        body: [
          {
            type: "p",
            text: "This kit bundles the most critical resources for hearing preparation into one streamlined package."
          }
        ]
      },
      {
        id: "hearing-tomorrow-checklist",
        heading: "Hearing Tomorrow Checklist",
        body: [
          {
            type: "p",
            text: "A practical walkthrough covering what to bring, how to label exhibits, and what to avoid saying when nerves hit. This comprehensive checklist ensures you're fully prepared and organized."
          }
        ]
      },
      {
        id: "exhibit-labeling-guidelines",
        heading: "Exhibit Labeling Guidelines",
        body: [
          {
            type: "p",
            text: "Clear instructions on labeling your evidence properly so it's organized and professional. Proper exhibit labeling demonstrates preparation and makes it easier for the court to follow your case."
          }
        ]
      },
      {
        id: "courtroom-etiquette-basics",
        heading: "Courtroom Etiquette Basics",
        body: [
          {
            type: "p",
            text: "What to expect, how to address the judge, when to speak, and how to present yourself. Understanding courtroom protocol helps you maintain credibility and avoid common mistakes."
          }
        ]
      },
      {
        id: "what-to-bring",
        heading: "What to Bring",
        body: [
          {
            type: "p",
            text: "Complete checklist of documents, copies, and materials you need in your bag:"
          },
          {
            type: "ul",
            items: [
              "All filed documents (originals + 2 copies)",
              "Exhibits labeled and organized",
              "Calendar showing relevant dates",
              "Notes on key points to make",
              "Photo ID and case number",
              "Pen and notepad"
            ]
          }
        ]
      },
      {
        id: "common-mistakes-to-avoid",
        heading: "Common Mistakes to Avoid",
        body: [
          {
            type: "p",
            text: "Learn from others' errors and maintain professional conduct in court:"
          },
          {
            type: "ul",
            items: [
              "Don't interrupt the judge or opposing party",
              "Don't argue with the judge's rulings",
              "Don't bring up irrelevant history",
              "Don't show emotion or hostility",
              "Don't forget to bring required copies",
              "Don't arrive late or unprepared"
            ]
          }
        ]
      },
      {
        id: "time-required",
        heading: "Time Required",
        body: [
          {
            type: "p",
            text: "Plan for 15 minutes to review all materials. Ideally, review the night before and again the morning of your hearing."
          }
        ]
      },
      {
        id: "who-this-is-for",
        heading: "Who This Is For",
        body: [
          {
            type: "p",
            text: "This kit is designed for self-represented litigants with an upcoming hearing who need quick, practical guidance on preparation and courtroom procedures."
          }
        ]
      }
    ]
  }
};
