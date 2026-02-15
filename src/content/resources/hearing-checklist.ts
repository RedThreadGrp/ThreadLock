import type { ResourceQAContent } from "./types";

export const hearingChecklist: ResourceQAContent = {
  slug: "hearing-checklist",

  seo: {
    title: "What to Bring to a Court Hearing | Complete Checklist",
    description:
      "Bring original filed documents, marked exhibits with tabs, witness lists, and copies for all parties. Complete checklist for court hearing preparation.",
  },

  hero: {
    h1: "What should I bring to a hearing?",
    subhead: "Essential documents, organizational tools, and practical items for court hearings.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Bring original filed documents, marked exhibits with tabs, your witness list, a notepad and pen, a calendar, and a calculator. Also bring copies of all documents for the judge, opposing party, and yourself. Arrive early and dress professionally to make a positive impression.",
  },

  sections: [
    {
      id: "essential-documents",
      heading: "Essential Documents",
      body: [
        {
          type: "p",
          text: "Filed Court Documents:",
        },
        {
          type: "ul",
          items: [
            "Original petition or complaint",
            "All filed motions and responses",
            "Proof of service for all documents",
            "Court orders from previous hearings",
            "Case docket or summary",
          ],
        },
        {
          type: "p",
          text: "Exhibits and Evidence:",
        },
        {
          type: "ul",
          items: [
            "Pre-marked exhibits with labels (A, B, C or 1, 2, 3)",
            "Exhibit list describing each item",
            "Three copies of each exhibit (judge, opposing party, yourself)",
            "Original documents if authenticity might be challenged",
          ],
        },
        {
          type: "p",
          text: "Supporting Declarations:",
        },
        {
          type: "ul",
          items: [
            "Your declaration under penalty of perjury",
            "Witness declarations or affidavits",
            "Expert reports if applicable",
            "Financial declarations or income evidence",
          ],
        },
      ],
    },
    {
      id: "organizational-tools",
      heading: "Organizational Tools",
      body: [
        {
          type: "p",
          text: "Binders or Folders:",
        },
        {
          type: "ul",
          items: [
            "Separate sections for filed documents, exhibits, and notes",
            "Tab dividers for easy reference",
            "Chronological or topic-based organization",
            "Backup copies of critical documents",
          ],
        },
        {
          type: "p",
          text: "Reference Materials:",
        },
        {
          type: "ul",
          items: [
            "Relevant statutes or case law citations",
            "Local court rules",
            "Prepared outline or script for your argument",
            "Questions for witnesses or opposing party",
          ],
        },
      ],
    },
    {
      id: "practical-items",
      heading: "Practical Items",
      body: [
        {
          type: "p",
          text: "Note-Taking Supplies:",
        },
        {
          type: "ul",
          items: [
            "Legal pad or notebook",
            "Multiple pens (black or blue ink)",
            "Highlighters for marking documents during hearing",
            "Post-it flags for quick reference",
          ],
        },
        {
          type: "p",
          text: "Time and Financial Tools:",
        },
        {
          type: "ul",
          items: [
            "Calendar (paper or electronic) showing dates and schedules",
            "Calculator for financial calculations",
            "Records of income, expenses, or support payments",
            "Check or credit card for any court fees",
          ],
        },
      ],
    },
    {
      id: "hearing-specific",
      heading: "Hearing-Specific Preparations",
      body: [
        {
          type: "p",
          text: "Custody Hearings:",
        },
        {
          type: "ul",
          items: [
            "Parenting plan proposals",
            "School records and report cards",
            "Medical records for children",
            "Documentation of involvement in children's lives",
          ],
        },
        {
          type: "p",
          text: "Support Hearings:",
        },
        {
          type: "ul",
          items: [
            "Income and expense declarations",
            "Pay stubs or tax returns",
            "Proof of childcare or medical expenses",
            "Child support guideline calculations",
          ],
        },
        {
          type: "p",
          text: "Motion Hearings:",
        },
        {
          type: "ul",
          items: [
            "The specific motion being heard",
            "Supporting declarations and exhibits",
            "Legal authority (statutes or case law)",
            "Proposed orders for the judge",
          ],
        },
      ],
    },
    {
      id: "courtroom-etiquette",
      heading: "Courtroom Etiquette and Appearance",
      body: [
        {
          type: "p",
          text: "Dress Code:",
        },
        {
          type: "ul",
          items: [
            "Business attire or business casual",
            "Conservative clothing (avoid revealing or casual clothes)",
            "Clean and neat appearance",
            "Minimal jewelry and accessories",
          ],
        },
        {
          type: "p",
          text: "Behavior:",
        },
        {
          type: "ul",
          items: [
            "Arrive 15-30 minutes early",
            "Turn off cell phone completely (not just silent)",
            "Don't bring food, drinks, or gum",
            "Stand when the judge enters or exits",
            "Address the judge as 'Your Honor'",
            "Speak only when asked or given permission",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "forget-document",
        q: "What if I forget to bring a document?",
        a: "Inform the judge immediately. You may be able to get a continuance to retrieve it, submit it later, or the judge may proceed without it depending on its importance. Having organized copies and backup documents can prevent this issue.",
      },
      {
        id: "electronic-devices",
        q: "Can I use my phone or tablet for documents?",
        a: "Check your court's local rules. Some courts allow electronic devices for reference, but most require paper copies for the judge. Many courtrooms prohibit all electronic devices. Always bring paper copies as a backup.",
      },
      {
        id: "too-many-exhibits",
        q: "How many exhibits can I bring?",
        a: "There's typically no limit, but judges prefer concise, relevant exhibits. Quality over quantity. Mark only the most important documents as exhibits. Excessive exhibits may annoy the judge and dilute your strongest evidence.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        name: "Local Court Rules - Hearing Procedures and Evidence Requirements",
      },
      {
        name: "State Bar Self-Help Resources - Court Appearance Guides",
      },
      {
        name: "Court Self-Help Centers - Hearing Preparation Checklists",
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      {
        name: "Local Court Rules",
        note: "Specific hearing procedures and document requirements",
      },
      {
        name: "Court Self-Help Centers",
        note: "Practical guidance for self-represented litigants",
      },
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Hearing procedures, document requirements, and courtroom rules vary significantly by court and jurisdiction. Some courts have specific exhibit formatting requirements. Electronic device policies differ by court. Check your local court's website or contact the clerk's office for court-specific rules before your hearing.",
  },
};
