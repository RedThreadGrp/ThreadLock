import type { ResourcePage } from "./types";

export const evidenceIntake: ResourcePage = {
  slug: "evidence-intake",
  contentVersion: 2,

  seo: {
    title: "Evidence Intake: Photos, Texts, Email | Capture & Preserve Guide",
    description:
      "How to capture, preserve, and organize photos, texts, and emails so they're usable in court. Learn proper evidence intake procedures and authentication basics.",
  },

  hero: {
    h1: "Evidence Intake: Photos, Texts, Email",
    subhead:
      "How to capture, preserve, and organize records so they're usable later.",
  },

  blocks: {
    shortAnswer:
      "Raw evidence is worthless if you can't find it, authenticate it, or present it clearly. Proper evidence intake means capturing complete information immediately, preserving it in multiple secure locations, organizing it systematically, and being ready to authenticate it in court.",

    sections: [
      {
        id: "capture-lock-it-down",
        heading: "Capture: Lock It Down Immediately",
        body: [
          {
            type: "p",
            text: "When capturing evidence, timing and completeness are critical:",
          },
          {
            type: "p",
            text: "**Text Messages:** Screenshot the ENTIRE conversation thread including timestamps and phone numbers. Capture multiple screens if needed to show context. Never crop or edit. Back up to cloud storage immediately.",
          },
          {
            type: "p",
            text: "**Emails:** Save as PDF with full headers visible (sender, recipient, date, subject). Download attachments separately. Print a backup copy and note any replies or threads.",
          },
          {
            type: "p",
            text: "**Photos:** Take multiple shots from different angles including context (room, building). Don't alter, filter, or crop original files. Note date/time/location in metadata and store originals separately from any edited versions.",
          },
        ],
      },
      {
        id: "preserve-dont-lose-it",
        heading: "Preserve: Don't Lose It",
        body: [
          {
            type: "ul",
            items: [
              "Use three storage locations: device, cloud, external drive",
              "Don't delete originals, even if you have copies",
              "Create dated folders using YYYY-MM-DD format",
              "Name files descriptively: `2026-01-15_text_custody_exchange.png`",
              "Keep access logs if possible",
            ],
          },
        ],
      },
      {
        id: "organize-make-it-findable",
        heading: "Organize: Make It Findable",
        body: [
          {
            type: "p",
            text: "**Create a Master Index:** Use a spreadsheet with columns for date of incident, type of evidence (text/email/photo), file name, brief description, relevance to case (custody/support/contempt), and storage location.",
          },
          {
            type: "p",
            text: "**Use Consistent Naming:** Follow the format `YYYY-MM-DD_type_topic_sequence.ext`. Examples:",
          },
          {
            type: "ul",
            items: [
              "`2026-01-15_text_missed_pickup_01.png`",
              "`2026-02-03_email_threat_financial_01.pdf`",
              "`2026-03-10_photo_property_damage_01.jpg`",
            ],
          },
          {
            type: "p",
            text: "**Chronological Timeline:** Create a simple timeline document showing date, what happened, evidence file names, and any witnesses.",
          },
        ],
      },
      {
        id: "authentication-prove-its-real",
        heading: "Authentication: Prove It's Real",
        body: [
          {
            type: "p",
            text: "Courts won't accept evidence if you can't prove it's authentic. Be ready to testify about your evidence:",
          },
          {
            type: "p",
            text: "**For Text Messages:** State this is your phone number, this is the other party's number, you took these screenshots on a specific date, and you haven't altered the images.",
          },
          {
            type: "p",
            text: "**For Emails:** Print with full headers, verify sender domain matches known email, and note if you replied (shows authenticity).",
          },
          {
            type: "p",
            text: "**For Photos:** Testify you took the photo on a specific date, identify the location/object/person, state it accurately represents what you saw, and confirm you haven't edited or altered it.",
          },
        ],
      },
      {
        id: "red-flags-to-avoid",
        heading: "Red Flags to Avoid",
        body: [
          {
            type: "ul",
            items: [
              "Screenshots with battery/time cropped out (looks suspicious)",
              "Edited photos without disclosure",
              "Missing context (one text without conversation)",
              "Unclear dates or sources",
              "No backup copies",
            ],
          },
        ],
      },
      {
        id: "day-of-hearing-prep",
        heading: "Day-of-Hearing Preparation",
        body: [
          {
            type: "ul",
            items: [
              "Print all key evidence with exhibit labels",
              "Bring digital copies on USB drive",
              "Have your master index ready",
              "Know your authentication testimony for each piece",
              "Organize in chronological order",
            ],
          },
        ],
      },
    ],

    faqs: [
      {
        question: "How much evidence is too much?",
        answer:
          "Focus on quality over quantity. Each piece should directly support your case. If you have 50 similar texts, choose the 5 most relevant. Courts appreciate concise, organized evidence more than overwhelming volume.",
      },
      {
        question: "What if I didn't document something when it happened?",
        answer:
          "Document it now as best you can. Write down what you remember with approximate dates. Note that you're recalling from memory. Some evidence is better than none, but acknowledge the limitations.",
      },
      {
        question: "Can I organize evidence the night before my hearing?",
        answer:
          "You can, but it's risky. Last-minute organization leads to mistakes, missing documents, and poor presentation. Start organizing as soon as you know you're going to court. Even basic organization (chronological folders) done early beats perfect organization done in a panic.",
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    reviewIntervalDays: 180,
    sources: [
      {
        title: "Federal Rules of Evidence - Rule 901",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Authentication requirements for evidence"
      },
      {
        title: "Digital Evidence and Forensics",
        organization: "National Institute of Standards and Technology (NIST)",
        url: "https://www.nist.gov/topics/digital-evidence-forensics",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Digital evidence preservation standards and best practices"
      },
      {
        title: "Federal Rules of Evidence",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/rules/fre",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Complete text with annotations on evidence standards"
      },
    ],
    jurisdictionScope: ["federal"],
    accuracyNotes:
      "Evidence authentication requirements may vary by state. Digital evidence standards continue to evolve with technology. Always check local court rules for specific formatting and filing requirements.",
  },
};
