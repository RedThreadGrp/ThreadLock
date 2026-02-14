import type { ResourceQAContent } from "./types";

export const proofOfService: ResourceQAContent = {
  slug: "proof-of-service",

  seo: {
    title: "What is Proof of Service? | ThreadLock Resources",
    description:
      "Learn what proof of service means in family court, why it's required, and how to file it correctly to avoid delays in your case.",
  },

  hero: {
    h1: "What is Proof of Service?",
    subhead:
      "Understanding service requirements in family court proceedings",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Proof of service is a legal document that confirms you properly delivered court papers to the other party, as required by court rules. It protects your rights and ensures the other side has notice of legal proceedings.",
  },

  sections: [
    {
      id: "why-required",
      heading: "Why is proof of service required?",
      body: [
        {
          type: "p",
          text: "Courts require proof of service to ensure due process—everyone involved in a case must receive proper notice of court filings and hearings. Without valid proof, the court may not accept your paperwork or move forward with your case.",
        },
        {
          type: "callout",
          kind: "warning",
          title: "Important",
          text: "Missing or incorrect proof of service can delay your case by weeks or months. Always follow your court's specific requirements.",
        },
      ],
    },
    {
      id: "types-of-service",
      heading: "Types of service methods",
      body: [
        {
          type: "p",
          text: "Different documents require different service methods:",
        },
        {
          type: "ul",
          items: [
            "Personal service: Papers hand-delivered to the person by someone over 18 who is not a party to the case",
            "Service by mail: Sent via certified or first-class mail with proof of mailing",
            "Electronic service: Delivery via email or court e-filing system (when permitted)",
            "Substituted service: Left with someone at home or workplace when personal service isn't possible",
          ],
        },
        {
          type: "callout",
          kind: "tip",
          text: "Check your local court rules for which method applies to your document type and situation.",
        },
      ],
    },
    {
      id: "filing-requirements",
      heading: "Filing proof of service with the court",
      body: [
        {
          type: "p",
          text: "After serving documents, you must file proof of service with the court clerk. This typically includes:",
        },
        {
          type: "ol",
          items: [
            "Date, time, and location where service occurred",
            "Name of person who received the documents",
            "Method of service used",
            "Server's signature and contact information",
          ],
        },
        {
          type: "p",
          text: "Many courts provide standardized proof of service forms. Use your court's official form when available.",
        },
      ],
    },
    {
      id: "deadlines",
      heading: "Service deadlines by document type",
      body: [
        {
          type: "p",
          text: "Different documents have different timing requirements:",
        },
        {
          type: "table",
          caption: "Common service deadlines in family court",
          columns: ["Document Type", "Service Deadline", "Notes"],
          rows: [
            [
              "Initial petition",
              "Within 60-90 days of filing",
              "Varies by state",
            ],
            ["Response to motion", "5-10 days before hearing", "Check local rules"],
            ["Trial documents", "15-30 days before trial", "Earlier for complex cases"],
          ],
          footnote:
            "Always verify exact deadlines with your local court rules.",
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        id: "who-can-serve",
        q: "Who can serve court papers?",
        a: "Any person over age 18 who is not a party to your case can serve papers. This includes professional process servers, sheriff's deputies, or a friend or family member.",
      },
      {
        id: "serve-myself",
        q: "Can I serve papers myself?",
        a: "No. You cannot serve your own legal documents in most jurisdictions. You must have someone else who is not involved in the case serve them on your behalf.",
      },
      {
        id: "wrong-address",
        q: "What if the other party moved and I don't have their address?",
        a: "Contact your court clerk about service by publication or posting. You may need to demonstrate that you made reasonable efforts to locate the person first.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        name: "Federal Rules of Civil Procedure, Rule 4",
        note: "Service of process standards",
        href: "https://www.law.cornell.edu/rules/frcp/rule_4",
      },
      {
        name: "State court service requirements",
        note: "Vary by jurisdiction",
      },
    ],
  },
};
