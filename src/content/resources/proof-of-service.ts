import type { ResourceQAContent } from "./types";

export const proofOfService: ResourceQAContent = {
  slug: "proof-of-service",

  seo: {
    title: "What Counts as Proof of Service? | Definition & Legal Requirements",
    description:
      "Proof of Service is a signed declaration filed with the court confirming legal papers were delivered, detailing time, date, location, method, and server identity.",
  },

  hero: {
    h1: "What Counts as Proof of Service?",
    subhead:
      "Definition & legal requirements across common methods and jurisdictions.",
  },

  shortAnswer: {
    label: "Short Answer: The Legal Definition",
    text: "Proof of Service (also known as an Affidavit of Service or Return of Service) is a formal document filed with the court that confirms legal papers were successfully delivered to a party in a case. To count as valid, it must be a signed declaration—typically made under penalty of perjury—detailing the exact time, date, location, and method of delivery, as well as the identity of the person who performed the service.",
  },

  sections: [
    {
      id: "core-requirements",
      heading: "Core Requirements: What Must Be Included?",
      body: [
        {
          type: "ul",
          items: [
            "Server Identity: The full name and address of the person who delivered the documents.",
            "Recipient Identity: The name of the person, business, or entity served.",
            "Specific Documents: A comprehensive list of every form or notice delivered (e.g., Summons, Complaint, or Order to Show Cause).",
            "Method of Delivery: A clear statement on whether service was Personal, by Mail, Electronic, or Substituted.",
            "Timing and Location: The precise date, time, and physical (or digital) address where service occurred.",
            "The Declaration: A statement affirming the facts are true under penalty of perjury, accompanied by the server's signature.",
          ],
        },
      ],
    },
    {
      id: "who-can-serve",
      heading: "Who is Authorized to Serve Documents?",
      body: [
        {
          type: "p",
          text: "Not everyone can sign a Proof of Service. In most jurisdictions, the \"Server\" must meet these three criteria:",
        },
        {
          type: "ul",
          items: [
            "Age: Must be at least 18 years old.",
            "Disinterest: Must not be a party to the legal case (i.e., not the plaintiff or defendant).",
            "Capacity: Must be mentally competent and willing to testify about the service if challenged.",
          ],
        },
        {
          type: "callout",
          kind: "note",
          text: "Note: While a third-party friend can often serve papers, hiring a Professional Process Server or using a Sheriff provides \"prima facie\" evidence that service was performed correctly, making it harder for the recipient to contest.",
        },
      ],
    },
    {
      id: "requirements-by-method",
      heading: "Proof of Service Requirements by Method",
      body: [
        {
          type: "p",
          text: "The details required on your form change depending on how the documents were delivered:",
        },
        {
          type: "ul",
          items: [
            "Personal Service: The declaration must state that the documents were physically handed to the recipient or left in their immediate presence if they refused to touch them.",
            "Service by Mail: Requires a \"Certificate of Mailing\" stating the documents were placed in a sealed, post-paid envelope and deposited in a USPS mailbox.",
            "Electronic Service: Proof must include the sender and recipient's email addresses, the date/time of transmission, and confirmation that the transmission was completed without error.",
            "Substituted Service: This requires \"Due Diligence\" notes. You must document specific failed attempts at personal service before explaining who the documents were left with at the recipient's home or business.",
          ],
        },
      ],
    },
    {
      id: "jurisdiction-forms",
      heading: "Jurisdiction-Specific Forms & Rules",
      body: [
        {
          type: "p",
          text: "Legal requirements vary by state. Using the wrong form can result in your case being delayed or dismissed.",
        },
        {
          type: "table",
          columns: ["Jurisdiction", "Common Form Name", "Key Requirement"],
          rows: [
            [
              "Federal (FRCP)",
              "Certificate of Service",
              "Governed by Rule 5; required for all filings after the original complaint.",
            ],
            [
              "California",
              "POS-040 / FL-330",
              "Uses specific forms for civil (POS) vs. family law (FL) matters.",
            ],
            [
              "New York",
              "Affidavit of Service",
              "Often requires notarization by the server to be legally valid.",
            ],
            [
              "Texas",
              "Return of Service",
              "Must be filed with the court for a specific period before a default judgment is allowed.",
            ],
            [
              "Florida",
              "Return of Service",
              "Mandates specific statutory language regarding the \"manner of service.\"",
            ],
          ],
        },
      ],
    },
    {
      id: "common-rejections",
      heading: "Common Reasons Proof of Service is Rejected",
      body: [
        {
          type: "p",
          text: "To ensure your filing is accepted, avoid these frequent errors:",
        },
        {
          type: "ul",
          items: [
            "The Party Served Themselves: A plaintiff cannot sign their own Proof of Service.",
            "Incomplete Document List: If you served five documents but only listed three, service for the remaining two is technically invalid.",
            "Missing \"Penalty of Perjury\" Clause: Without this specific legal language, the document is merely a note, not a legal declaration.",
            "Date Mismatches: The date of service must be on or before the date the Proof of Service was signed.",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions (Long-Tail Keywords)",
    items: [
      {
        id: "notarized",
        q: "Does a Proof of Service need to be notarized?",
        a: "In many states (like New York), an Affidavit of Service must be signed in front of a Notary Public. However, in \"Declaration\" states (like California), a signature under penalty of perjury is sufficient.",
      },
      {
        id: "efile",
        q: "Can I file Proof of Service electronically?",
        a: "Yes, most modern court systems allow for the electronic filing (e-filing) of Proof of Service. In some cases, the e-filing system generates an automated \"Notice of Electronic Filing\" which serves as the legal proof.",
      },
      {
        id: "lost-proof",
        q: "What happens if I lose the Proof of Service?",
        a: "You must contact the server to sign a fresh declaration. If the server is unavailable, you may be required to re-serve the documents to ensure the court record is complete.",
      },
    ],
  },

  sources: {
    heading: "Sources Used to Verify Definitions & Requirements",
    items: [
      {
        name: "California Courts Self-Help Guide: Proof of Service (Personal FL-330 / Mail FL-335)",
      },
      {
        name: "New York State Unified Court System: Affidavit of Service instructions and notarization requirements",
      },
      {
        name: "Federal Rules of Civil Procedure (FRCP): Rule 5 (Serving and Filing Pleadings and Other Papers)",
      },
      {
        name: "Texas Rules of Civil Procedure: Rule 107 (Return of Service)",
      },
      {
        name: "Florida Rules of Civil Procedure: Rule 1.080 (Service and Filing of Pleadings, Papers, and Documents)",
      },
      {
        name: "National Association of Professional Process Servers (NAPPS): Best practices for service declarations",
      },
    ],
  },
};
