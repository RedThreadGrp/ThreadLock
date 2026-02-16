import type { ResourceQAContent } from "./types";

export const mediationLawyer: ResourceQAContent = {
  slug: "mediation-lawyer",

  seo: {
    title: "Do I Need a Lawyer for Mediation? | Legal Representation Options",
    description:
      "You're not required to have a lawyer for mediation, but consulting one beforehand helps you understand your rights and evaluate proposed agreements. Learn your options.",
  },

  hero: {
    h1: "Do I need a lawyer for mediation?",
    subhead: "Understanding your options for legal representation during mediation.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "You're not required to have a lawyer for mediation, but consulting one beforehand helps you understand your rights and evaluate proposed agreements. Some people bring attorneys to mediation sessions, while others consult with counsel between sessions. The mediator cannot provide legal advice to either party.",
  },

  sections: [
    {
      id: "mediation-basics",
      heading: "Mediation Basics",
      body: [
        {
          type: "p",
          text: "What is Mediation: Mediation is a voluntary dispute resolution process where a neutral third-party mediator facilitates discussion. Parties work together to reach agreement. The mediator does not make decisions or provide legal advice. The goal is a mutually acceptable settlement.",
        },
        {
          type: "p",
          text: "Mediator's Role: The mediator facilitates communication between parties, helps identify issues and options, and maintains a neutral position. The mediator cannot advise either party about legal rights and does not represent either party's interests.",
        },
      ],
    },
    {
      id: "representation-options",
      heading: "Options for Legal Representation",
      body: [
        {
          type: "p",
          text: "No Attorney: Many people successfully mediate without lawyers. This is less formal and potentially less expensive. Parties communicate directly with the mediator's help. Appropriate when issues are straightforward and both parties are comfortable negotiating directly.",
        },
        {
          type: "p",
          text: "Consulting Attorney (not present): Common middle-ground approach. Meet with attorney before mediation to understand rights, review mediator's proposals between sessions, and have attorney review final agreement before signing. Provides legal guidance without mediation attendance costs.",
        },
        {
          type: "p",
          text: "Attorney Present at Mediation: Bringing counsel to sessions means attorney advises during negotiations, you can caucus privately during breaks, and attorney reviews terms in real-time. More expensive but provides immediate legal guidance.",
        },
        {
          type: "p",
          text: "Hybrid Approach: Many combine methods - consult attorney initially, attend mediation without attorney, have attorney review final proposed agreement, and attorney drafts formal documents based on mediation outcome.",
        },
      ],
    },
    {
      id: "when-need-attorney",
      heading: "When You May Want an Attorney",
      body: [
        {
          type: "p",
          text: "Consider attorney involvement when dealing with:",
        },
        {
          type: "ul",
          items: [
            "Complex Financial Issues: Business valuations, retirement account divisions, real estate with complicated title issues, tax implications",
            "Power Imbalances: One party has more financial knowledge, history of domestic violence, significant disparity in earning capacity",
            "Child Custody Complexities: Interstate jurisdiction issues, mental health or substance abuse concerns, special needs children, relocation situations",
            "Legal Rights Uncertainty: Unsure about support calculations, property characterization questions, unfamiliar with state custody factors, concerned about long-term implications",
          ],
        },
      ],
    },
    {
      id: "benefits-without-attorneys",
      heading: "Benefits of Mediation Without Attorneys",
      body: [
        {
          type: "p",
          text: "Cost Savings: Mediation generally costs less than litigation. Attorney fees for mediation attendance can be substantial. Limited attorney involvement reduces total legal costs.",
        },
        {
          type: "p",
          text: "Direct Communication: Parties speak for themselves rather than through lawyers. Helps preserve or improve co-parenting relationship. Reduces adversarial dynamics. Creates ownership of solutions.",
        },
        {
          type: "p",
          text: "Flexibility: Faster scheduling without coordinating multiple attorneys. More creative solutions possible. Less formal process reduces stress.",
        },
      ],
    },
    {
      id: "attorney-review",
      heading: "Reviewing Mediated Agreements",
      body: [
        {
          type: "p",
          text: "Regardless of whether you use an attorney during mediation, strongly consider having one review the final agreement before signing:",
        },
        {
          type: "ul",
          items: [
            "Ensures agreement is legally sound and enforceable",
            "Identifies any ambiguous or problematic language",
            "Verifies calculations (support, division percentages)",
            "Explains long-term implications and tax consequences",
            "Confirms agreement protects your rights and interests",
          ],
        },
        {
          type: "p",
          text: "Most attorneys offer fixed-fee agreement review services that are affordable compared to full representation costs.",
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "mediator-give-advice",
        q: "Can the mediator give me legal advice?",
        a: "No. The mediator must remain neutral and cannot provide legal advice to either party. Even if the mediator is an attorney, they represent neither party and cannot advise you about your legal rights or whether to accept specific terms.",
      },
      {
        id: "other-party-has-lawyer",
        q: "What if the other party brings a lawyer but I don't have one?",
        a: "You can request a continuance to consult with an attorney, proceed without one (understanding you're at a disadvantage), or bring an attorney to future sessions. The mediator should ensure both parties can participate fairly regardless of representation.",
      },
      {
        id: "change-mind-after",
        q: "Can I back out if I sign something in mediation without a lawyer?",
        a: "Maybe. Before a formal court order is entered, you may be able to withdraw. Once you sign a legally binding agreement or it's entered as a court order, it's much harder to undo. This is why attorney review before signing is so important.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Dispute Resolution - Mediation",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/dispute_resolution/resources/DisputeResolutionProcesses/mediation/",
        lastAccessed: "2026-02-16",
        note: "Standards and best practices for mediation"
      },
      {
        title: "Model Standards of Conduct for Mediators",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/dispute_resolution/policy/model_standards_conduct_mediation/",
        lastAccessed: "2026-02-16",
        note: "Professional standards for mediators"
      },
      {
        title: "Family Mediation",
        organization: "Association for Conflict Resolution",
        url: "https://www.acrnet.org/",
        lastAccessed: "2026-02-16",
        note: "Professional organization standards of practice"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Dispute Resolution - Mediation",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/dispute_resolution/resources/DisputeResolutionProcesses/mediation/",
        lastAccessed: "2026-02-16",
        note: "Standards and best practices for mediation"
      },
      {
        title: "Court-Connected Mediation Programs",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/alternative-dispute-resolution/mediation/state-links",
        lastAccessed: "2026-02-16",
        note: "Jurisdiction-specific mediation rules"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Mediation rules and attorney participation requirements vary by jurisdiction. Some courts mandate mediation before trial. Court-connected mediation programs may have different rules than private mediation. Attorney participation costs and practices differ significantly by region and case type.",
  },
};
