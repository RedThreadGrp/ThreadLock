import { DivorceKit } from "../types";

export const hearingSoon: DivorceKit = {
  contentVersion: 2,
  slug: "hearing-soon",
  title: "Hearing Soon Kit",
  description: "Everything you need when a hearing is approaching fast - comprehensive guides for exhibit preparation, courtroom conduct, and hearing readiness.",
  whatYouGet: [
    "Complete exhibit labeling guidelines with redaction standards",
    "24-hour hearing preparation checklist",
    "Courtroom etiquette and conduct guide",
    "Common mistakes to avoid in family court",
    "Downloadable PDF resources for offline reference",
  ],
  estimatedTime: "20 minutes",
  resources: ["/resources/hearing-tomorrow", "/resources/exhibit-labeling", "/resources/courtroom-prep"],
  status: "published",
  governance: {
    lastUpdated: "2026-02-20",
    sources: [
      { 
        title: "Court Procedures",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/",
        lastAccessed: "2026-02-20",
        note: "General courtroom procedures and hearing guidance"
      },
      {
        title: "Federal Rules of Evidence",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-20",
        note: "Authentication and evidence standards"
      },
      { 
        title: "Federal Rules of Civil Procedure",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-20",
        note: "General courtroom procedures and filing requirements"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Courtroom procedures, exhibit requirements, and local rules vary by jurisdiction. Always verify with your specific court's requirements."
  },
  blocks: {
    shortAnswer: "When a hearing is approaching fast, you need immediate, actionable guidance. This kit provides exhibit labeling standards, hearing preparation essentials, courtroom etiquette rules, and common mistakes to avoid—everything necessary for professional court presentation.",
    sections: [
      {
        id: "exhibit-naming",
        heading: "Exhibit Naming Standards",
        body: [
          {
            type: "p",
            text: "Proper exhibit labeling demonstrates organization and makes it easier for the court to follow your case. Use this standard format:"
          },
          {
            type: "p",
            text: "[Your Last Name] - Exhibit [Number/Letter] - [Brief Description]"
          },
          {
            type: "ul",
            items: [
              "Use numbers (1, 2, 3) or letters (A, B, C) sequentially",
              "Check your court's local rules for preference",
              "Use sub-numbering (1A, 1B) for related documents",
              "Be consistent throughout your entire case"
            ]
          }
        ]
      },
      {
        id: "document-redactions",
        heading: "Required Redactions",
        body: [
          {
            type: "p",
            text: "Protect sensitive information in financial and personal documents:"
          },
          {
            type: "ul",
            items: [
              "Social Security Numbers: Show only last 4 digits (XXX-XX-1234)",
              "Bank accounts: Show only last 4 digits (Account ****6789)",
              "Credit cards: Show only last 4 digits (**** **** **** 5678)",
              "Driver's licenses: Redact all but last 3-4 digits"
            ]
          },
          {
            type: "callout",
            kind: "warning",
            title: "Use Permanent Redaction",
            text: "Never use highlighters or reversible redaction. Use permanent markers or PDF redaction tools that cannot be undone."
          }
        ]
      },
      {
        id: "exhibit-preparation",
        heading: "Physical & Digital Preparation",
        body: [
          {
            type: "p",
            text: "For electronic filing:"
          },
          {
            type: "ul",
            items: [
              "Convert everything to PDF format",
              "Keep files under 10-25 MB (split if needed)",
              "Add bookmarks for documents over 20 pages",
              "Use clear, consistent file naming"
            ]
          },
          {
            type: "p",
            text: "For in-person hearings:"
          },
          {
            type: "ul",
            items: [
              "Bring three complete sets: judge, opposing party, yourself",
              "Use pre-printed exhibit stickers on first page",
              "Three-hole punch and organize in binders with tabs"
            ]
          }
        ]
      },
      {
        id: "24-hour-logistics",
        heading: "24-Hour Logistics Check",
        body: [
          {
            type: "p",
            text: "Verify these details the day before your hearing:"
          },
          {
            type: "ul",
            items: [
              "Confirm hearing format (in-person, Zoom, Teams, phone)",
              "Verify department/courtroom number via court portal",
              "Test remote technology 24 hours ahead if virtual",
              "Plan travel to arrive 30-45 minutes early",
              "Screenshot your hearing details as backup"
            ]
          }
        ]
      },
      {
        id: "evidence-prep",
        heading: "Evidence Preparation",
        body: [
          {
            type: "p",
            text: "Organize your documentation:"
          },
          {
            type: "ul",
            items: [
              "Three complete sets: one for judge, one for opposing party, one for you",
              "Pre-mark all exhibits with labels and tabs",
              "Bring certified originals of critical documents",
              "Prepare notepad and pens for taking notes"
            ]
          },
          {
            type: "callout",
            kind: "tip",
            title: "Remote Hearing Tip",
            text: "Email all exhibits to the court clerk 24 hours before remote hearings per local rules."
          }
        ]
      },
      {
        id: "mental-prep",
        heading: "Mental Preparation",
        body: [
          {
            type: "p",
            text: "Before your hearing, clarify your position:"
          },
          {
            type: "ul",
            items: [
              "Write down exactly what relief you're requesting",
              "Identify your 3-4 strongest supporting facts",
              "Anticipate questions about your weak points",
              "Practice calm, brief responses",
              "Know key statutes or 'best interest' factors"
            ]
          }
        ]
      },
      {
        id: "addressing-court",
        heading: "Addressing the Court",
        body: [
          {
            type: "p",
            text: "Proper courtroom conduct basics:"
          },
          {
            type: "ul",
            items: [
              "Always call the judge 'Your Honor'",
              "Stand when the judge enters or exits",
              "Stand when speaking (unless told otherwise)",
              "Make eye contact but don't stare",
              "Never interrupt the judge or opposing party"
            ]
          }
        ]
      },
      {
        id: "when-to-speak",
        heading: "When to Speak",
        body: [
          {
            type: "p",
            text: "Only speak at appropriate times:"
          },
          {
            type: "ul",
            items: [
              "When the judge asks you a direct question",
              "When invited to present your case",
              "When asked if you have anything to add",
              "After requesting: 'Your Honor, may I respond?'"
            ]
          },
          {
            type: "callout",
            kind: "note",
            title: "The Note Method",
            text: "If the other party says something false, write it down. Don't react. You'll have a chance to respond when the judge asks."
          }
        ]
      },
      {
        id: "emotion-control",
        heading: "Managing Emotions",
        body: [
          {
            type: "p",
            text: "Your demeanor matters as much as your evidence:"
          },
          {
            type: "ul",
            items: [
              "Stay calm and focused on facts",
              "Avoid crossing arms, rolling eyes, or sighing",
              "Take notes instead of reacting visibly",
              "Answer questions briefly without over-explaining",
              "If overwhelmed, ask: 'Your Honor, may I have a moment?'"
            ]
          }
        ]
      },
      {
        id: "remote-etiquette",
        heading: "Remote Hearing Protocol",
        body: [
          {
            type: "p",
            text: "For virtual hearings:"
          },
          {
            type: "ul",
            items: [
              "Stay on mute when not speaking",
              "Look at the camera, not your reflection",
              "Use a neutral, well-lit background",
              "Have a backup device ready",
              "Log in 15 minutes early to test"
            ]
          }
        ]
      },
      {
        id: "critical-mistakes",
        heading: "5 Critical Mistakes to Avoid",
        body: [
          {
            type: "p",
            text: "**1. Hearsay Evidence** - Don't testify about what someone else said. That person needs to provide a signed declaration or testify themselves."
          },
          {
            type: "p",
            text: "**2. Attacking Your Ex** - Frame everything around the children's needs, not personal grievances. Say 'The children are distressed' not 'He is always late.'"
          },
          {
            type: "p",
            text: "**3. Bringing Children to Court** - Most judges view this as high-conflict behavior. Keep children out unless specifically requested."
          },
          {
            type: "p",
            text: "**4. Late Evidence Service** - Follow service deadlines strictly. The judge will likely refuse evidence the other party hasn't seen."
          },
          {
            type: "p",
            text: "**5. Arguing with the Judge** - Say 'Thank you, Your Honor' and move on. You can appeal later, but arguing in the moment only hurts you."
          }
        ]
      },
      {
        id: "presentation-tips",
        heading: "Professional Presentation",
        body: [
          {
            type: "p",
            text: "What to wear and bring:"
          },
          {
            type: "ul",
            items: [
              "Dress business casual (no jeans, shorts, or logo clothing)",
              "Silence phone completely",
              "Bring photo ID and case number",
              "Arrive 20-30 minutes early"
            ]
          },
          {
            type: "p",
            text: "How to respond:"
          },
          {
            type: "ul",
            items: [
              "Answer the question, then stop talking",
              "Say 'I don't know, Your Honor' if you don't know",
              "Don't volunteer extra information",
              "Speak to the judge, not the other party"
            ]
          }
        ]
      },
      {
        id: "who-this-is-for",
        heading: "Who This Kit Is For",
        body: [
          {
            type: "p",
            text: "Self-represented litigants with upcoming family court hearings: divorce, custody, support modifications, or domestic violence proceedings. Review these guidelines 24 hours before your hearing, then again the morning of your appearance."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What if I don't know the answer to a question?",
        answer: "Be honest and say 'I don't know, Your Honor.' Judges respect honesty. Making up answers damages your credibility far more than admitting you don't know something. If you need to check records, ask: 'May I have a moment to check my documents, Your Honor?'"
      },
      {
        question: "Can I bring someone for support?",
        answer: "Yes, but they must sit in the gallery (spectator seating), not at your table. They cannot speak, pass notes, or participate unless called as a witness. Some courts restrict who can be present during sensitive testimony."
      },
      {
        question: "What happens if I'm late?",
        answer: "Missing your hearing time can result in a default judgment against you, meaning the other party gets everything they asked for. Courts often lock doors at session start. If you're unavoidably late due to emergency, contact the clerk immediately."
      },
      {
        question: "How long should my opening statement be?",
        answer: "Brief and focused—typically 2-5 minutes. State what you're requesting, give your top 3-4 supporting facts, and reference your key exhibits. The judge will ask questions if they want more detail."
      },
      {
        question: "Can I object to the other party's evidence?",
        answer: "Yes. Common objections include 'Objection, hearsay' (secondhand information), 'Objection, relevance' (doesn't relate to this case), or 'Objection, lack of foundation' (no proof it's authentic). State your objection clearly and briefly. Don't argue if overruled."
      }
    ]
  }
};
