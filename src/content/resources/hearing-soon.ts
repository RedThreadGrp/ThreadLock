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
    shortAnswer: "When a hearing is approaching fast, you need immediate, actionable guidance. This kit provides comprehensive exhibit labeling standards, a 24-hour preparation checklist, courtroom etiquette rules, and common mistakes to avoid—everything necessary for professional court presentation.",
    sections: [
      {
        id: "exhibit-labeling",
        heading: "Exhibit Labeling & Organization",
        body: [
          {
            type: "p",
            text: "Judges appreciate organized evidence. Poorly labeled or disorganized exhibits create confusion, waste court time, and risk having your evidence excluded or ignored. These standardized guidelines ensure your documentation is admitted, easy to navigate, and professionally presented."
          },
          {
            type: "p",
            text: "**Standard Naming Format:**"
          },
          {
            type: "ul",
            items: [
              "[Your Last Name] - Exhibit [Number/Letter] - [Brief Description]",
              "Numbers (1, 2, 3): Most common system for sequential numbering",
              "Letters (A, B, C): Alternative system some courts prefer",
              "Sub-numbering (1A, 1B, 2A): Use for multiple related documents"
            ]
          },
          {
            type: "p",
            text: "**Examples of Proper Labeling:**"
          },
          {
            type: "ul",
            items: [
              "Johnson - Exhibit 1 - Jan 2024 Text Messages.pdf",
              "Martinez - Exhibit A - Parenting Plan Violation Log.pdf",
              "Chen - Exhibit 3 - Bank Statements March-June 2024.pdf"
            ]
          },
          {
            type: "p",
            text: "**Organizing Communications:**"
          },
          {
            type: "ul",
            items: [
              "Present messages in chronological order—never rearrange to fit a narrative",
              "Include date and time stamps on every page",
              "Provide enough context so the judge can see the full conversation",
              "Use consistent formatting throughout (screenshots or PDF exports, not mixed)",
              "Note any gaps in communication with brief explanations"
            ]
          },
          {
            type: "p",
            text: "**Required Redactions for Financial Documents:**"
          },
          {
            type: "ul",
            items: [
              "Social Security Numbers: Show only last four digits (XXX-XX-1234)",
              "Bank account numbers: Show only last four digits (Account ****6789)",
              "Credit card numbers: Show only last four digits (**** **** **** 5678)",
              "Driver's license numbers: Redact all but last 3-4 digits"
            ]
          },
          {
            type: "p",
            text: "**Digital vs Physical Exhibits:**"
          },
          {
            type: "ul",
            items: [
              "PDF is the gold standard for electronic filing",
              "Keep file sizes under 10-25 MB per file (split if needed)",
              "Add PDF bookmarks for documents over 20 pages",
              "For physical exhibits, use pre-printed exhibit stickers",
              "Bring three complete sets: judge, opposing party, yourself",
              "Three-hole punch lengthy exhibits and use binders with tabs"
            ]
          }
        ]
      },
      {
        id: "hearing-preparation-checklist",
        heading: "24-Hour Hearing Preparation Checklist",
        body: [
          {
            type: "p",
            text: "Use this comprehensive checklist during the 24 hours before your hearing to ensure procedural, evidentiary, and mental readiness."
          },
          {
            type: "p",
            text: "**Courtroom Logistics:**"
          },
          {
            type: "ul",
            items: [
              "Verify hearing format (in-person, Zoom, Teams, or telephone)",
              "Confirm department/courtroom number through court portal",
              "Test remote hearing technology 24 hours prior if applicable",
              "Plan travel and parking to arrive 30-45 minutes early",
              "For remote hearings, log in 15 minutes early"
            ]
          },
          {
            type: "p",
            text: "**Evidence & Documents:**"
          },
          {
            type: "ul",
            items: [
              "Prepare three complete sets of exhibits and declarations",
              "Pre-mark all exhibits with proper labels and tabs",
              "Bring certified originals of critical documents",
              "Prepare a clean legal pad and working pens for rebuttal notes",
              "For remote hearings, email exhibits to clerk 24 hours in advance"
            ]
          },
          {
            type: "p",
            text: "**Mental Preparation:**"
          },
          {
            type: "ul",
            items: [
              "Clarify exactly what relief you're requesting from the judge",
              "Identify 3-4 key facts supporting your position",
              "Anticipate cross-examination on your weakest points",
              "Practice answering questions calmly without defensiveness",
              "Know applicable statutes and 'best interest' factors"
            ]
          },
          {
            type: "p",
            text: "**Professional Readiness:**"
          },
          {
            type: "ul",
            items: [
              "Dress business casual minimum (no jeans, shorts, or logos)",
              "Silence phone completely (not just vibrate)",
              "Arrive with 20-30 minutes to spare for final review",
              "Bring photo ID and case number documentation"
            ]
          }
        ]
      },
      {
        id: "courtroom-etiquette",
        heading: "Courtroom Etiquette & Conduct",
        body: [
          {
            type: "p",
            text: "Your conduct in the courtroom is a form of evidence. It signals your stability and respect for the legal process."
          },
          {
            type: "p",
            text: "**Addressing the Court:**"
          },
          {
            type: "ul",
            items: [
              "Always address the judge as 'Your Honor'",
              "Stand when the judge enters or exits the courtroom",
              "Stand when speaking to the judge (unless told otherwise)",
              "Make eye contact but don't stare",
              "Never call the judge 'sir,' 'ma'am,' 'judge,' or by their name"
            ]
          },
          {
            type: "p",
            text: "**When to Speak:**"
          },
          {
            type: "ul",
            items: [
              "Only when the judge asks you a direct question",
              "When the judge invites you to present your case",
              "When you're asked if you have anything to add",
              "Request permission first: 'Your Honor, may I respond?'"
            ]
          },
          {
            type: "p",
            text: "**The Golden Rule - No Interruptions:**"
          },
          {
            type: "ul",
            items: [
              "Never speak while the judge or opposing party is speaking",
              "If the other party lies, write it down instead of reacting",
              "Address it when the judge asks for your response",
              "Speak to the judge, not to the opposing party"
            ]
          },
          {
            type: "p",
            text: "**Managing Emotions & Body Language:**"
          },
          {
            type: "ul",
            items: [
              "Stay calm and focused on facts, not emotions",
              "Avoid crossing arms, rolling eyes, or heavy sighing",
              "No visible frustration, eye-rolling, or head-shaking",
              "Take notes instead of reacting to testimony",
              "If overwhelmed, ask for a brief recess: 'Your Honor, may I have a moment?'"
            ]
          },
          {
            type: "p",
            text: "**Remote Hearing Etiquette:**"
          },
          {
            type: "ul",
            items: [
              "Stay on mute when not speaking to avoid background noise",
              "Look into the camera, not at your own reflection",
              "Use a neutral, well-lit background",
              "Have a backup device ready in case of technical failure"
            ]
          },
          {
            type: "p",
            text: "**Response Guidelines:**"
          },
          {
            type: "ul",
            items: [
              "Answer the question, then stop—don't over-explain",
              "If you don't know something, say 'I don't know, Your Honor'",
              "If you need to add context, ask: 'May I explain, Your Honor?'",
              "Keep responses concise and factual"
            ]
          }
        ]
      },
      {
        id: "common-mistakes",
        heading: "Common Mistakes to Avoid",
        body: [
          {
            type: "p",
            text: "Learn from common errors that damage credibility and case outcomes in family court."
          },
          {
            type: "p",
            text: "**1. Hearsay Evidence:**"
          },
          {
            type: "ul",
            items: [
              "The Mistake: Trying to testify about what someone else said",
              "The Fix: That person needs to provide a signed declaration or testify in person",
              "If you want the judge to know what someone said, bring them as a witness"
            ]
          },
          {
            type: "p",
            text: "**2. Focusing on 'The Ex' Instead of 'The Kids':**"
          },
          {
            type: "ul",
            items: [
              "The Mistake: Spending time listing why your ex-spouse is a bad person",
              "The Fix: Frame everything around the children's needs",
              "Instead of 'He is always late,' say 'The children are distressed when transition times are inconsistent'"
            ]
          },
          {
            type: "p",
            text: "**3. Bringing Children to Court:**"
          },
          {
            type: "ul",
            items: [
              "The Mistake: Bringing children to courthouse to 'see the truth' or show preference",
              "The Fix: Most judges view this as high-conflict behavior",
              "Keep children out unless Guardian Ad Litem or court specifically requests their presence"
            ]
          },
          {
            type: "p",
            text: "**4. Late Service of Evidence:**"
          },
          {
            type: "ul",
            items: [
              "The Mistake: Trying to hand the judge new evidence on hearing morning that opposing party hasn't seen",
              "The Fix: Follow local rules for service deadlines",
              "If you didn't share it by the deadline, the judge will likely refuse to look at it"
            ]
          },
          {
            type: "p",
            text: "**5. Arguing with the Judge:**"
          },
          {
            type: "ul",
            items: [
              "The Mistake: Continuing to argue after a judge has made a ruling",
              "The Fix: Say 'Thank you, Your Honor' and move to the next point",
              "You can file an appeal or motion for reconsideration later",
              "Arguing in the moment only hurts your standing"
            ]
          },
          {
            type: "p",
            text: "**6. Talking Too Much:**"
          },
          {
            type: "ul",
            items: [
              "Answer the question, then stop",
              "Don't volunteer extra information or go off on tangents",
              "If the judge wants more detail, they'll ask",
              "Over-explaining makes you appear defensive"
            ]
          },
          {
            type: "p",
            text: "**7. Bringing Up Irrelevant History:**"
          },
          {
            type: "ul",
            items: [
              "Unless directly related to current motion, don't bring up something from years ago",
              "Judges have limited time and patience",
              "Stay focused on the issues at hand"
            ]
          },
          {
            type: "p",
            text: "**8. Forgetting Documents:**"
          },
          {
            type: "ul",
            items: [
              "If you filed a motion or exhibit list, bring copies",
              "If you reference something, have it ready to hand to the judge",
              "Organized copies and backup documents prevent this issue"
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
            text: "This kit is designed for self-represented litigants and parties with limited legal assistance who have an upcoming family court hearing. It applies to divorce hearings, child custody disputes, child support modifications, domestic violence restraining orders, and all family law evidentiary submissions."
          },
          {
            type: "p",
            text: "Plan for 20 minutes to review all materials. Ideally, review these guidelines 24 hours before your hearing, then again the morning of your court appearance for final preparation."
          }
        ]
      }
    ]
  }
};
