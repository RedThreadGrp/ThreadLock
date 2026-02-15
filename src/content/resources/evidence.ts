import { DivorceKit } from "../types";

export const evidence: DivorceKit = {
  contentVersion: 2,
  slug: "evidence",
  title: "Evidence Kit",
  description: "Capture, organize, and preserve evidence that holds up.",
  whatYouGet: [
    "Evidence intake templates",
    "Photo/text preservation guide",
    "Timeline organization tools",
    "Authentication basics",
    "Digital evidence checklist",
  ],
  estimatedTime: "25 minutes",
  resources: ["/resources/evidence-intake", "/resources/timeline-tools", "/resources/authentication"],
  status: "published",
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      { name: "Federal Rules of Evidence", href: "https://www.law.cornell.edu/rules/fre" },
      { name: "Legal Aid Organizations", href: "https://www.lawhelp.org" },
      { name: "State Bar Evidence Guides" }
    ],
    jurisdictionScope: ["Federal"],
    reviewIntervalDays: 180,
    accuracyNotes: "Evidence rules and authentication requirements vary by state. Consult local rules."
  },
  blocks: {
    shortAnswer: "A complete system for capturing, organizing, and preserving evidence that meets court standards, including intake templates, preservation guides, timeline tools, and authentication basics.",
    sections: [
      {
        id: "evidence-intake-templates",
        heading: "Evidence Intake Templates",
        body: [
          {
            type: "p",
            text: "How to capture, preserve, and organize photos, texts, emails, and documents so they're usable later. Raw evidence is worthless if you can't find it, authenticate it, or present it clearly."
          },
          {
            type: "ul",
            items: [
              "Standardized file naming conventions",
              "Metadata preservation techniques",
              "Original vs. copy tracking",
              "Chain of custody documentation",
              "Date and source tracking"
            ]
          }
        ]
      },
      {
        id: "photo-text-preservation",
        heading: "Photo/Text Preservation Guide",
        body: [
          {
            type: "p",
            text: "Detailed instructions on backing up digital evidence, maintaining originals, and avoiding common mistakes:"
          },
          {
            type: "ul",
            items: [
              "Screenshot techniques that preserve metadata",
              "Cloud backup strategies",
              "Print copies for critical evidence",
              "Never delete originals",
              "Export complete conversation threads",
              "Preserve message headers and timestamps"
            ]
          }
        ]
      },
      {
        id: "timeline-organization",
        heading: "Timeline Organization Tools",
        body: [
          {
            type: "p",
            text: "Build a clear, chronological timeline linking events to evidence files. A well-organized timeline helps you:"
          },
          {
            type: "ul",
            items: [
              "Identify patterns of behavior",
              "Connect related incidents",
              "Quickly locate supporting evidence",
              "Present a coherent narrative in court",
              "Spot gaps in your evidence collection"
            ]
          }
        ]
      },
      {
        id: "authentication-basics",
        heading: "Authentication Basics",
        body: [
          {
            type: "p",
            text: "How to prove your evidence is real and admissible in court. Authentication requires showing that evidence is what you claim it is:"
          },
          {
            type: "ul",
            items: [
              "Foundation testimony (your personal knowledge)",
              "Witness testimony from others present",
              "Metadata and technical evidence",
              "Circumstantial evidence supporting authenticity",
              "Self-authenticating documents (certified records)"
            ]
          }
        ]
      },
      {
        id: "digital-evidence-checklist",
        heading: "Digital Evidence Checklist",
        body: [
          {
            type: "p",
            text: "A practical checklist to ensure you've captured and organized everything correctly:"
          },
          {
            type: "ul",
            items: [
              "Original files preserved in original format",
              "Backup copies stored securely",
              "Metadata preserved and documented",
              "Date and time stamps visible",
              "Source identified and documented",
              "Complete context captured (full conversations, not excerpts)",
              "Print copies for court presentation",
              "Authentication method identified"
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What if I have too much evidence to organize?",
        answer: "Start with the most critical incidents first. Focus on evidence that directly supports your key claims. Use the timeline tool to identify patterns, then organize evidence by incident date. You don't need to present everything—just the strongest, most relevant evidence."
      },
      {
        question: "What if I didn't document something when it happened?",
        answer: "Document it now while details are fresh. Write a detailed declaration describing what happened, when, where, who was present, and what was said or done. Include specific dates and times if possible. While contemporaneous documentation is stronger, later documentation still has value."
      },
      {
        question: "How can I organize evidence quickly before a hearing?",
        answer: "Use the Evidence Intake Template to quickly catalog your most important items. Create a simple spreadsheet with columns: Date, Type, Description, File Location. Focus on evidence that directly supports your hearing requests. Bring organized exhibits labeled A, B, C, etc."
      }
    ]
  }
};
