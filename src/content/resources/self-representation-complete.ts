import type { ResourceQAContent } from "./types";

export const selfRepresentationComplete: ResourceQAContent = {
  slug: "self-representation-complete",

  seo: {
    title: "Complete Guide to Self-Representation in Family Court | 2026 Rules",
    description:
      "Everything you need to know about representing yourself in family court, from filing basics to courtroom strategy. Updated with 2026 rule changes.",
  },

  hero: {
    h1: "The Complete Guide to Self-Representation in Family Court",
    subhead: "Everything you need to know about representing yourself, from filing basics to courtroom strategy.",
  },

  shortAnswer: {
    label: "Overview",
    text: "Self-representation in family court requires organization, preparation, and understanding of court procedures. As a self-represented litigant, you have the same rights as represented parties but must follow all court rules and procedures. This guide covers filing procedures, court expectations, evidence rules, and post-judgment modifications.",
  },

  sections: [
    {
      id: "rights-and-responsibilities",
      heading: "Understanding Your Rights and Responsibilities",
      body: [
        {
          type: "p",
          text: "As a self-represented litigant, you have the same rights as represented parties but must follow all court rules and procedures. Courts cannot provide legal advice, but many offer self-help centers and form packets.",
        },
        {
          type: "callout",
          kind: "note",
          text: "While courts cannot give legal advice, they can provide information about procedures, forms, and deadlines. Take advantage of self-help resources offered by your local court.",
        },
      ],
    },
    {
      id: "filing-procedures",
      heading: "Filing Procedures",
      body: [
        {
          type: "p",
          text: "Start by filing the appropriate petition or response with your local family court. Each jurisdiction has specific forms, filing fees, and service requirements.",
        },
        {
          type: "ul",
          items: [
            "Obtain correct forms from court website or clerk's office",
            "Complete forms legibly and completely",
            "Make copies (original + 2 copies minimum)",
            "Pay filing fees or request fee waiver",
            "Serve other parties according to local rules",
            "File proof of service with the court",
          ],
        },
        {
          type: "callout",
          kind: "warning",
          text: "Verify local rules before submitting documents. Each court may have specific formatting, filing, and service requirements that differ from general guidance.",
        },
      ],
    },
    {
      id: "court-procedures",
      heading: "Court Procedures and Expectations",
      body: [
        {
          type: "p",
          text: "Courts expect professional conduct, punctuality, and adherence to procedural rules:",
        },
        {
          type: "ul",
          items: [
            "Arrive at least 15 minutes early",
            "Dress professionally (business casual minimum)",
            "Bring all required documents organized in a binder",
            "Turn off cell phone before entering courtroom",
            "Stand when addressing the judge",
            "Address the judge as 'Your Honor'",
            "Never interrupt the judge or opposing party",
          ],
        },
      ],
    },
    {
      id: "evidence-rules",
      heading: "Evidence Rules and Presentation",
      body: [
        {
          type: "p",
          text: "Only admissible evidence can be considered. Documents must be authenticated, witnesses must have personal knowledge, and hearsay is generally prohibited.",
        },
        {
          type: "p",
          text: "Best practices for organizing evidence:",
        },
        {
          type: "ul",
          items: [
            "Organize chronologically with tabs and labels",
            "Label exhibits clearly (Exhibit A, B, C, etc.)",
            "Bring original documents plus copies for court and opposing party",
            "Prepare witness list with contact information",
            "Have foundation testimony ready for each exhibit",
          ],
        },
        {
          type: "callout",
          kind: "tip",
          text: "Create a binder with dividers for each category: filed documents, exhibits, notes, and blank paper for taking notes during the hearing.",
        },
      ],
    },
    {
      id: "working-with-opposing-counsel",
      heading: "Working with Opposing Counsel",
      body: [
        {
          type: "p",
          text: "When the other party has an attorney, direct all communication through them. Respond to discovery requests within deadlines and maintain professional correspondence.",
        },
        {
          type: "ul",
          items: [
            "Never contact represented party directly",
            "Put all communications in writing",
            "Meet all discovery deadlines",
            "Be professional in all correspondence",
            "Keep copies of all communications",
          ],
        },
      ],
    },
    {
      id: "settlement-vs-trial",
      heading: "Settlement vs. Trial",
      body: [
        {
          type: "p",
          text: "Most family court cases settle. Consider mediation or settlement conferences before trial. Settlement gives you control over outcomes rather than leaving decisions to a judge.",
        },
        {
          type: "p",
          text: "Benefits of settlement:",
        },
        {
          type: "ul",
          items: [
            "You control the outcome",
            "Faster resolution",
            "Lower costs",
            "Less stressful than trial",
            "Maintains privacy",
            "Easier to modify later if agreed upon",
          ],
        },
      ],
    },
    {
      id: "post-judgment-modifications",
      heading: "Post-Judgment Modifications",
      body: [
        {
          type: "p",
          text: "Circumstances change. Courts can modify orders when there is a substantial change in circumstances. Document changes carefully and file modifications properly.",
        },
        {
          type: "p",
          text: "Common grounds for modification:",
        },
        {
          type: "ul",
          items: [
            "Significant income changes",
            "Relocation of parent or child",
            "Changes in child's needs or circumstances",
            "Parent's inability to comply with current order",
            "Changes in parenting time arrangements",
          ],
        },
      ],
    },
  ],

  sources: {
    heading: "Sources",
    items: [
      { name: "Federal Rules of Civil Procedure" },
      { name: "Court Self-Help Portals" },
    ],
  },

  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      { name: "Federal Rules of Civil Procedure" },
      { name: "Court Self-Help Portals" }
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 365,
    accuracyNotes: "Self-representation rules and court procedures vary by state and court."
  },
};
