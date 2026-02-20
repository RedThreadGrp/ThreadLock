import type { ResourceQAContent } from "./types";

export const exhibitLabeling: ResourceQAContent = {
  slug: "exhibit-labeling",

  seo: {
    title: "Exhibit Labeling Family Court | Court Evidence Organization Guide",
    description:
      "Professional exhibit labeling standards for self-represented litigants. Learn court evidence organization, redacting legal documents, pro se exhibit formatting, and divorce court exhibit rules for judicial admissibility.",
  },

  hero: {
    h1: "How do I label exhibits for court?",
    subhead: "Standard conventions for labeling, organizing, and referencing court exhibits.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Label exhibits sequentially using letters (A, B, C) for plaintiff's exhibits or numbers (1, 2, 3) for defendant's exhibits. Attach exhibit stickers or tabs to each document and create an exhibit list that describes each item. Reference exhibits by their labels in your declarations and briefs.",
  },

  sections: [
    {
      id: "labeling-conventions",
      heading: "Standard Labeling Conventions",
      body: [
        {
          type: "p",
          text: "Most courts follow these conventions:",
        },
        {
          type: "ul",
          items: [
            "Plaintiff/Petitioner exhibits: Letters (Exhibit A, B, C, etc.)",
            "Defendant/Respondent exhibits: Numbers (Exhibit 1, 2, 3, etc.)",
            "Sequential order: Label in the order you'll reference them",
            "Consistent format: Use the same labeling system throughout your case",
          ],
        },
      ],
    },
    {
      id: "attaching-labels",
      heading: "How to Attach Exhibit Labels",
      body: [
        {
          type: "p",
          text: "Physical Exhibits:",
        },
        {
          type: "ul",
          items: [
            "Use adhesive exhibit stickers (available at office supply stores)",
            "Place stickers on the bottom right corner of the first page",
            "Alternatively, use colored tabs that extend beyond the page edge",
            "For multi-page exhibits, only label the first page",
          ],
        },
        {
          type: "p",
          text: "Electronic Exhibits:",
        },
        {
          type: "ul",
          items: [
            "Add exhibit labels to PDF bookmarks",
            "Include exhibit designation in file names (e.g., 'Exhibit_A_Email.pdf')",
            "Some e-filing systems allow exhibit marking during upload",
          ],
        },
      ],
    },
    {
      id: "exhibit-list",
      heading: "Creating an Exhibit List",
      body: [
        {
          type: "p",
          text: "Prepare a formal exhibit list that includes:",
        },
        {
          type: "ul",
          items: [
            "Exhibit designation: Letter or number",
            "Description: Brief but specific (e.g., 'Text messages between parties, March 15-20, 2024')",
            "Page count: Number of pages in that exhibit",
            "Date: When the document was created or relevant time period",
          ],
        },
      ],
    },
    {
      id: "referencing-exhibits",
      heading: "Referencing Exhibits in Declarations",
      body: [
        {
          type: "p",
          text: "When citing exhibits in your declaration or brief:",
        },
        {
          type: "ul",
          items: [
            "Use consistent terminology: 'See Exhibit A' or 'As shown in Exhibit 1'",
            "Reference specific pages for lengthy exhibits: 'Exhibit B, page 3'",
            "Introduce each exhibit clearly: 'Attached as Exhibit C is a copy of the parenting plan'",
          ],
        },
      ],
    },
    {
      id: "pre-marking-exhibits",
      heading: "Pre-Marking Exhibits for Hearings",
      body: [
        {
          type: "p",
          text: "For hearings and trials:",
        },
        {
          type: "ul",
          items: [
            "Pre-mark exhibits: Label before the hearing",
            "Exchange with opposing party: Provide copies of your exhibit list",
            "Bring three copies: One for judge, one for opposing party, one for yourself",
            "Organize in binder: Use tabs for easy reference during hearing",
            "Number pages: If required by local rules, number pages consecutively",
          ],
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common Exhibit Labeling Mistakes",
      body: [
        {
          type: "p",
          text: "Avoid these errors:",
        },
        {
          type: "ul",
          items: [
            "Using wrong designation system (letters when you should use numbers)",
            "Skipping labels or using duplicate labels",
            "Labeling exhibits differently in different documents",
            "Forgetting to reference exhibits in your declarations",
            "Not providing copies to opposing party before hearing",
            "Mixing original documents with copies without clear marking",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "run-out-letters",
        q: "What if I run out of letters or numbers?",
        a: "After Z, use AA, BB, CC (or double letters). After 99, use 100, 101, etc. Most cases don't require this many exhibits. If you have extensive exhibits, consider combining related documents into single exhibits with sub-parts (e.g., Exhibit A-1, A-2, A-3).",
      },
      {
        id: "forgot-to-label",
        q: "What if I forgot to label an exhibit before filing?",
        a: "File a corrected document with properly labeled exhibits as soon as possible. Explain the error in a declaration or notice to the court. For upcoming hearings, bring properly labeled exhibits and inform the judge of the correction.",
      },
      {
        id: "multiple-hearings",
        q: "Do I use the same exhibit labels for different hearings?",
        a: "Within the same case, generally yes - maintain consistent labeling throughout. However, for completely separate motions, some attorneys start fresh labeling. Check local rules or ask the clerk for guidance on your court's preference.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Federal Rules of Evidence - Rule 901",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Authentication and identification requirements for evidence"
      },
      {
        title: "Federal Rules of Civil Procedure",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "General exhibit and evidence procedures"
      },
      {
        title: "Model Standards for Exhibits",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/judicial/resources/",
        lastAccessed: "2026-02-16",
        note: "Best practices for exhibit preparation"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Federal Rules of Evidence - Rule 901",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Authentication standards for exhibits"
      },
      {
        title: "Federal Rules of Civil Procedure",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "General exhibit procedures"
      },
      {
        title: "Model Standards for Exhibits",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/judicial/resources/",
        lastAccessed: "2026-02-16",
        note: "Best practices for exhibit labeling and organization"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Exhibit labeling conventions vary by court. Some jurisdictions have specific requirements for tab colors, label placement, or numbering systems. E-filing systems may have different exhibit handling procedures. Always check your local court rules or ask the clerk about specific exhibit requirements before your hearing.",
  },
};
