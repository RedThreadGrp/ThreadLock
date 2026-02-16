import { DivorceKit } from "../types";

export const firstFiling: DivorceKit = {
  contentVersion: 2,
  slug: "first-filing",
  title: "First Filing Kit",
  description: "Start your case right with proper documentation and filing procedures.",
  whatYouGet: [
    "Proof of service templates",
    "Official forms directory",
    "Filing hygiene checklist",
    "Court rules overview",
    "Common filing errors guide",
  ],
  estimatedTime: "20 minutes",
  resources: ["/resources/proof-of-service", "/resources/official-portals", "/resources/filing-basics"],
  status: "published",
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      { 
        title: "Forms",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/forms",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal court forms and instructions"
      },
      { 
        title: "Federal Rules of Civil Procedure",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Filing and service requirements"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 90,
    accuracyNotes: "Filing requirements vary by jurisdiction. Always verify with your local court."
  },
  blocks: {
    shortAnswer: "A complete kit for filing your first court documents, including proof of service templates, official forms directory, filing checklist, and common errors guide.",
    sections: [
      {
        id: "proof-of-service-templates",
        heading: "Proof of Service Templates",
        body: [
          {
            type: "p",
            text: "Ready-to-use templates with plain-English guidance so you don't lose on a technicality. Proper proof of service is essential—courts require documented evidence that all parties received copies of filed documents."
          }
        ]
      },
      {
        id: "official-forms-directory",
        heading: "Official Forms Directory",
        body: [
          {
            type: "p",
            text: "Links to free, state-provided forms and court portals. Don't pay for what should be free. Most state courts provide official forms at no cost through their websites."
          }
        ]
      },
      {
        id: "filing-hygiene-checklist",
        heading: "Filing Hygiene Checklist",
        body: [
          {
            type: "p",
            text: "Step-by-step process for filing documents correctly, getting file-stamped copies, and tracking deadlines. Includes:"
          },
          {
            type: "ul",
            items: [
              "Document formatting requirements",
              "Required copies (usually original + 2 copies)",
              "Filing fee payment methods",
              "Getting file-stamped copies for your records",
              "Deadline tracking systems"
            ]
          }
        ]
      },
      {
        id: "court-rules-overview",
        heading: "Court Rules Overview",
        body: [
          {
            type: "p",
            text: "What you need to know about formatting, deadlines, and local court requirements. Covers:"
          },
          {
            type: "ul",
            items: [
              "Document formatting standards (margins, font size, line spacing)",
              "Caption requirements",
              "Page numbering conventions",
              "Local court rule variations",
              "Electronic filing requirements where applicable"
            ]
          }
        ]
      },
      {
        id: "common-filing-errors",
        heading: "Common Filing Errors Guide",
        body: [
          {
            type: "p",
            text: "Learn the most frequent mistakes and how to avoid them:"
          },
          {
            type: "ul",
            items: [
              "Missing signatures or dates",
              "Using outdated forms",
              "Incorrect case numbers",
              "Missed filing deadlines",
              "Insufficient copies",
              "Missing required attachments",
              "Improper proof of service"
            ]
          },
          {
            type: "p",
            text: "Plan for 20 minutes to review all materials before you file anything. Start with the Official Forms Directory to find your state's resources, then review Proof of Service requirements before you file."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "Can I file without a lawyer?",
        answer: "Yes. Most family courts allow self-representation. However, filing pro se means you're responsible for following all court rules and procedures. Use this kit to understand the basics, and consider consulting a lawyer for complex issues."
      },
      {
        question: "Does the order I file documents matter?",
        answer: "Yes. Generally, you file the petition or initial complaint first, then supporting documents. Check your local court's rules for specific filing order requirements. Some courts require specific documents to be filed together."
      },
      {
        question: "Do I need original signatures or copies?",
        answer: "Courts typically require original signatures on filed documents. You'll need the original for the court, plus copies for yourself and other parties. Electronic filing systems may have different requirements—check with your court's e-filing portal."
      }
    ]
  }
};
