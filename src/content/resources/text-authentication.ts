import type { ResourceQAContent } from "./types";

export const textAuthentication: ResourceQAContent = {
  slug: "text-authentication",

  seo: {
    title: "Can I Authenticate Text Messages Myself? | Self-Authentication Guide",
    description:
      "Yes, you can self-authenticate text messages by submitting a declaration under penalty of perjury. Learn how to properly document and present text message evidence in court.",
  },

  hero: {
    h1: "Can I authenticate text messages myself?",
    subhead: "Self-authentication requirements for text message evidence in legal proceedings.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Yes, you can self-authenticate text messages by submitting a declaration under penalty of perjury that explains how you obtained the messages, their source, and the context. Include screenshots or exports with visible phone numbers and timestamps as exhibits. Your declaration establishes the foundational authenticity required under evidence rules.",
  },

  sections: [
    {
      id: "authentication-requirements",
      heading: "Authentication Requirements",
      body: [
        {
          type: "p",
          text: "To authenticate text messages, you must establish:",
        },
        {
          type: "ul",
          items: [
            "Source identification: Whose phone the messages came from",
            "Recipient identity: Who received the messages",
            "Acquisition method: How you obtained the messages",
            "Completeness: Whether the exhibit shows the full conversation or excerpts",
            "Context: The relationship and circumstances surrounding the communication",
          ],
        },
      ],
    },
    {
      id: "declaration-format",
      heading: "Declaration Format",
      body: [
        {
          type: "p",
          text: "Your declaration should include statements such as:",
        },
        {
          type: "p",
          text: "\"I am the owner of phone number (XXX) XXX-XXXX. Attached as Exhibit A are true and accurate screenshots of text message conversations between myself and [Party Name] from [Date Range]. These messages were sent to and received on my iPhone [Model]. The messages were obtained directly from my phone's Messages application. The phone number displayed as the sender is [Number], which I know to belong to [Party Name] because [reason for knowledge].\"",
        },
      ],
    },
    {
      id: "best-practices",
      heading: "Best Practices for Text Message Evidence",
      body: [
        {
          type: "p",
          text: "Screenshot Format:",
        },
        {
          type: "ul",
          items: [
            "Include phone numbers and contact names",
            "Show timestamps for each message",
            "Capture multiple messages per screenshot to show context",
            "Ensure text is legible and not cropped",
          ],
        },
        {
          type: "p",
          text: "Metadata Preservation:",
        },
        {
          type: "ul",
          items: [
            "Note the device and application used",
            "Document when screenshots were taken",
            "Preserve original messages when possible",
            "Consider using export features if available",
          ],
        },
        {
          type: "p",
          text: "Organization:",
        },
        {
          type: "ul",
          items: [
            "Present messages chronologically",
            "Number screenshots if submitting multiple pages",
            "Highlight relevant portions if messages are extensive",
            "Include full context, even if some messages are unfavorable",
          ],
        },
      ],
    },
    {
      id: "authentication-challenges",
      heading: "Authentication Challenges",
      body: [
        {
          type: "p",
          text: "The opposing party may challenge authentication by claiming messages were fabricated, arguing sender identity is uncertain, or asserting messages lack proper foundation.",
        },
        {
          type: "p",
          text: "Strengthen authentication by:",
        },
        {
          type: "ul",
          items: [
            "Providing corroborating evidence (emails referencing the texts)",
            "Including metadata when available",
            "Referencing unique details only the sender would know",
            "Noting response patterns consistent with the identified sender",
          ],
        },
      ],
    },
    {
      id: "technical-tools",
      heading: "Technical Tools and Methods",
      body: [
        {
          type: "p",
          text: "iPhone Users: Use native screenshot function (Side button + Volume Up), export conversations via third-party apps for better formatting, and utilize iCloud backups to preserve message history.",
        },
        {
          type: "p",
          text: "Android Users: Screenshot methods vary by manufacturer. Some devices offer scrolling screenshots. Export options available through certain messaging apps.",
        },
        {
          type: "p",
          text: "Third-Party Tools: SMS backup applications create formatted exports. Some tools generate PDFs with timestamps and metadata. Verify court acceptance of digital exports before relying solely on third-party tools.",
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "altered-messages",
        q: "What if the other party claims I altered the messages?",
        a: "Maintain the original messages on your device, provide corroborating evidence like emails referencing the texts, include full conversation context, and be prepared to show the device to the court if requested. Your declaration under penalty of perjury also carries legal weight.",
      },
      {
        id: "partial-conversation",
        q: "Can I submit only relevant portions of a conversation?",
        a: "Yes, but you must indicate that you're presenting excerpts and not the complete conversation. Include enough context so messages aren't misleading. Be prepared to provide the full conversation if requested by the court or opposing party.",
      },
      {
        id: "other-app-messages",
        q: "Can I authenticate messages from WhatsApp, Facebook, or other apps?",
        a: "Yes. The same authentication principles apply: declare under penalty of perjury how you obtained the messages, their source, and context. Include screenshots showing the app interface, sender information, and timestamps.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        name: "Federal Rules of Evidence 901 - Authentication Requirements",
      },
      {
        name: "State Evidence Codes - Electronic Records Authentication",
      },
      {
        name: "Case Law on Text Message Authentication in Family Law Cases",
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      {
        name: "Federal Rules of Evidence 901",
        href: "https://www.law.cornell.edu/rules/fre/rule_901",
        note: "Authentication and identification requirements",
      },
      {
        name: "State Evidence Codes",
        note: "State-specific authentication standards",
      },
    ],
    jurisdictionScope: ["US-general"],
    reviewIntervalDays: 180,
    accuracyNotes: "Authentication requirements for electronic evidence vary by jurisdiction. Federal courts and most state courts follow similar foundational authentication principles, but specific procedural requirements differ. Some courts have specific rules for electronic evidence. Technology changes rapidly; newer messaging platforms may require updated authentication methods.",
  },
};
