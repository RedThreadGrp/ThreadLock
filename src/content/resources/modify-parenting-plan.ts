import type { ResourceQAContent } from "./types";

export const modifyParentingPlan: ResourceQAContent = {
  slug: "modify-parenting-plan",

  seo: {
    title: "Can I Modify a Parenting Plan? | Legal Requirements & Process",
    description:
      "Yes, you can modify parenting plans by showing a substantial change in circumstances and that modification serves the child's best interests. Learn the legal process and requirements.",
  },

  hero: {
    h1: "Can I modify a parenting plan later?",
    subhead: "Legal standards, time restrictions, and filing requirements for modifying custody arrangements.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Yes, you can modify parenting plans by showing a substantial change in circumstances and that modification serves the child's best interests. Many states require waiting 1-2 years after the initial order unless there's immediate danger to the child. Both parents can agree to modifications, or you can file a motion requesting court-ordered changes.",
  },

  sections: [
    {
      id: "legal-standards",
      heading: "Legal Standards for Modification",
      body: [
        {
          type: "p",
          text: "Courts require showing material changes since the last order and that modification serves the child's welfare:",
        },
        {
          type: "ul",
          items: [
            "Substantial Change in Circumstances: Parent's relocation, work schedule changes, child's changing needs, new relationships, or emergence of substance abuse issues",
            "Best Interests of the Child: Enhanced stability, better school opportunities, improved family relationships, or increased parental involvement",
            "Burden of Proof: Must prove circumstances changed substantially, change wasn't anticipated, and modification serves child's interests",
          ],
        },
      ],
    },
    {
      id: "time-restrictions",
      heading: "Time Restrictions",
      body: [
        {
          type: "p",
          text: "Many states prohibit modifications within certain timeframes:",
        },
        {
          type: "ul",
          items: [
            "1-2 years: Common waiting period from last order",
            "6 months: Some states for minor modifications",
            "Exceptions for emergency situations (abuse, neglect, endangerment)",
            "Continuous Custody Requirement: Some jurisdictions require showing child has been in proposed custodian's care for specified period",
          ],
        },
      ],
    },
    {
      id: "types-of-modifications",
      heading: "Types of Modifications",
      body: [
        {
          type: "p",
          text: "Modifications can be major, minor, or temporary:",
        },
        {
          type: "ul",
          items: [
            "Major Modifications: Change in legal custody, primary physical custody, relocation, or significant parenting time changes",
            "Minor Modifications: Holiday schedule changes, exchange time adjustments, summer vacation schedules, or communication method updates",
            "Temporary Modifications: Short-term changes for work assignments, medical treatment, or emergency situations",
          ],
        },
      ],
    },
    {
      id: "modification-by-agreement",
      heading: "Modification by Agreement",
      body: [
        {
          type: "p",
          text: "If both parents agree, the process is faster and less expensive:",
        },
        {
          type: "ul",
          items: [
            "Draft stipulated modification or amended parenting plan",
            "File with court for approval",
            "Court typically approves if terms serve child's interests",
            "No hearing required in most cases",
            "Informal agreements are not legally binding without court approval",
          ],
        },
      ],
    },
    {
      id: "filing-process",
      heading: "Filing for Modification",
      body: [
        {
          type: "p",
          text: "Required documents and supporting evidence:",
        },
        {
          type: "ul",
          items: [
            "Motion or petition to modify parenting plan",
            "Declaration describing changed circumstances",
            "Proposed modified parenting plan",
            "Current income and expense declarations (if support affected)",
            "Proof of service on other parent",
            "Supporting evidence: school records, work schedules, expert evaluations, or child's written preference (if age-appropriate)",
          ],
        },
      ],
    },
    {
      id: "court-evaluation",
      heading: "Court Evaluation and Hearing",
      body: [
        {
          type: "p",
          text: "If agreement isn't reached, courts may require:",
        },
        {
          type: "ul",
          items: [
            "Custody evaluation with interviews, home visits, and psychological testing",
            "Mediation to attempt reaching agreement",
            "Modification hearing with testimony, evidence, and expert witnesses",
            "Consideration of parent factors: cooperation ability, stability, child relationship quality, and living environment",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "how-long-wait",
        q: "How long do I have to wait before I can request a modification?",
        a: "Most states require waiting 1-2 years from the last order before you can request a modification, unless there's an emergency situation involving abuse, neglect, or endangerment of the child.",
      },
      {
        id: "both-parents-agree",
        q: "What if both parents agree to the modification?",
        a: "If both parents agree, you can file a stipulated modification with the court. The court typically approves agreed modifications as long as they serve the child's best interests, and no hearing is required.",
      },
      {
        id: "informal-changes",
        q: "Can we make informal changes without going to court?",
        a: "While parents often make informal adjustments like trading weekends, these aren't legally binding. For significant changes, it's better to formalize them through a court order to avoid future disputes.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        name: "State Family Law Statutes - Modification of Custody Orders",
      },
      {
        name: "American Bar Association - Child Custody Modification Guide",
      },
      {
        name: "National Conference of State Legislatures - Child Custody Laws",
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      {
        name: "State Family Law Statutes",
        note: "Statutory requirements for custody modification",
      },
      {
        name: "American Bar Association - Child Custody Guide",
        note: "Legal standards and procedures",
      },
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Modification requirements vary by state. Check local family law statutes for specific rules and waiting periods in your jurisdiction.",
  },
};
