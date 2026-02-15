import type { ResourcePage } from "./types";

export const proofOfServicePack: ResourcePage = {
  slug: "proof-of-service",
  contentVersion: 2,

  seo: {
    title: "Proof of Service Pack | Templates & Plain-English Guidance",
    description:
      "Templates and plain-English guidance for proof of service documentation. Don't lose your case because you couldn't prove you served documents properly.",
  },

  hero: {
    h1: "Proof of Service Pack",
    subhead:
      "Templates + plain-English guidance so you don't lose on a technicality.",
  },

  blocks: {
    shortAnswer:
      "Don't lose your case because you couldn't prove you served documents properly. Proof of service is written evidence that you delivered court documents to the other party in a legally acceptable way. Without it, your filing may be rejected or your motion denied.",

    sections: [
      {
        id: "what-is-proof-of-service",
        heading: "What is Proof of Service?",
        body: [
          {
            type: "p",
            text: "It's written evidence that you delivered court documents to the other party in a legally acceptable way. Without it, your filing may be rejected or your motion denied.",
          },
        ],
      },
      {
        id: "three-main-service-methods",
        heading: "Three Main Service Methods",
        body: [
          {
            type: "p",
            text: "**1. Personal Service:** Someone over 18 (not you) hands documents directly to the other party.",
          },
          {
            type: "ul",
            items: [
              "**Pros:** Most reliable, hard to contest",
              "**Cons:** Requires finding someone to do it, other party might avoid",
            ],
          },
          {
            type: "p",
            text: "**2. Mail Service:** Send via certified mail with return receipt requested.",
          },
          {
            type: "ul",
            items: [
              "**Pros:** Easy to document, works if other party won't cooperate",
              "**Cons:** Slower, timing rules vary by jurisdiction",
            ],
          },
          {
            type: "p",
            text: "**3. Substituted Service:** Leave with someone at their home/work if personal service fails after reasonable attempts.",
          },
          {
            type: "ul",
            items: [
              "**Pros:** Works when other party is avoiding service",
              "**Cons:** Stricter rules, may require court approval first",
            ],
          },
        ],
      },
      {
        id: "what-to-document",
        heading: "What to Document",
        body: [
          {
            type: "ul",
            items: [
              "Date, time, and location of service",
              "Name of person served",
              "Method of service used",
              "Description of documents served",
              "Server's signature and contact information",
            ],
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common Mistakes",
        body: [
          {
            type: "ul",
            items: [
              "Serving documents yourself (not allowed in most cases)",
              "Not keeping the proof of service for your records",
              "Missing the deadline to file proof of service with the court",
              "Using an interested party (like your mom) as the server",
              "Not serving ALL required parties",
            ],
          },
        ],
      },
      {
        id: "templates-included",
        heading: "Templates Included",
        body: [
          {
            type: "ul",
            items: [
              "Proof of Service by Personal Delivery form",
              "Proof of Service by Mail form",
              "Proof of Service by Substituted Service form",
              "Server instruction checklist",
              "Service timeline tracker",
            ],
          },
        ],
      },
      {
        id: "next-steps",
        heading: "Next Steps",
        body: [
          {
            type: "ol",
            items: [
              "Choose your service method based on your situation",
              "Find an eligible server (over 18, not a party to the case)",
              "Complete service according to your jurisdiction's rules",
              "Have the server complete the proof of service form immediately",
              "File the proof of service with the court by the deadline",
              "Keep a copy for your records",
            ],
          },
        ],
      },
    ],

    faqs: [
      {
        question: "Can I serve documents myself?",
        answer:
          "In most cases, no. You cannot serve documents in a case where you are a party. The server must be over 18 and not involved in the case. Some jurisdictions allow self-service for specific documents like discovery requests, but initial pleadings almost always require a third party.",
      },
      {
        question: "What happens if I don't file proof of service?",
        answer:
          "The court may reject your filing, deny your motion, or continue (postpone) your hearing. Without proof of service, you haven't proven the other party received proper notice. This is a procedural requirement that can derail your entire case, regardless of the merits.",
      },
      {
        question: "How long do I have to file proof of service?",
        answer:
          "Deadlines vary by jurisdiction and document type. Common timelines: personal service often requires filing within a few days; mail service may allow 5-10 days after mailing. Check your local court rules and any specific instructions on your forms. When in doubt, file immediately after service is completed.",
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-15",
    reviewIntervalDays: 180,
    sources: [
      {
        name: "Federal Rules of Civil Procedure Rule 5",
        url: "https://www.federalrulesofcivilprocedure.org/frcp/title-iii-pleadings-and-motions/rule-5-serving-and-filing-pleadings-and-other-papers/",
      },
      {
        name: "State Bar Service of Process Guides",
        note: "Check your state bar website for specific service rules",
      },
      {
        name: "Court Clerk's Offices",
        note: "Local court websites provide jurisdiction-specific proof of service forms and requirements",
      },
    ],
    jurisdictionScope: "General proof of service procedures applicable across U.S. courts",
    accuracyNotes:
      "Service requirements vary significantly by state and even by county. Deadlines, acceptable methods, and form requirements differ. Always verify with your local court rules. Electronic service rules are expanding but not uniformly accepted.",
  },
};
