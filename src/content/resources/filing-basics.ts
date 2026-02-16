import { ResourcePage } from "@/types/content";

export const filingBasics: ResourcePage = {
  contentVersion: 2,
  blocks: {
    shortAnswer: "File at the Clerk of Court office (in person) or through your court's e-filing portal (online). Bring originals plus copies for service. Pay filing fees unless you have a fee waiver. Get file-stamped copies for your records. Serve the opposing party the same day you file.",
    sections: [
      {
        id: "how-to-file",
        heading: "How to File Documents with the Court",
        body: [
          {
            type: "p",
            text: "Filing documents with the court means submitting them to the Clerk of Court so they become part of the official case record. Do it wrong, and your motion might be rejected or your deadline missed."
          },
          {
            type: "p",
            text: "Step 1: Prepare Your Documents"
          },
          {
            type: "p",
            text: "Required elements:"
          },
          {
            type: "ul",
            items: [
              "Caption: Case name, case number, court name",
              "Title: What the document is (e.g., \"Motion to Modify Custody\")",
              "Content: Your argument, facts, and requested relief",
              "Signature: Your handwritten or electronic signature",
              "Certificate of Service: Statement that you served the opposing party",
              "Date: Current date of filing"
            ]
          },
          {
            type: "p",
            text: "Check your court's local rules for formatting requirements (font size, margins, line spacing)."
          },
          {
            type: "p",
            text: "Step 2: Make Copies"
          },
          {
            type: "p",
            text: "Standard practice:"
          },
          {
            type: "ul",
            items: [
              "Original for the Clerk of Court",
              "Copy for opposing party (for service)",
              "Copy for yourself (file-stamped for your records)"
            ]
          },
          {
            type: "p",
            text: "Some courts require additional courtesy copies for the judge. Check local rules."
          }
        ]
      },
      {
        id: "filing-methods",
        heading: "Filing Methods",
        body: [
          {
            type: "p",
            text: "Step 3: File at the Clerk of Court"
          },
          {
            type: "p",
            text: "In-person filing:"
          },
          {
            type: "ol",
            items: [
              "Go to the Clerk of Court office during business hours",
              "Present your original and copies",
              "Pay filing fees (or present your fee waiver order)",
              "Clerk will stamp all copies with filing date and time",
              "Keep your file-stamped copy"
            ]
          },
          {
            type: "p",
            text: "E-filing (if available):"
          },
          {
            type: "ol",
            items: [
              "Create an account on your court's e-filing portal",
              "Upload your document (usually PDF format)",
              "Pay filing fees online",
              "Receive electronic confirmation of filing",
              "Download and save the file-stamped version"
            ]
          },
          {
            type: "p",
            text: "Not all courts offer e-filing. Check your court's website or call the Clerk of Court."
          },
          {
            type: "p",
            text: "Step 4: Serve the Opposing Party"
          },
          {
            type: "p",
            text: "Most Rules of Civil Procedure require you to serve the opposing party on the same day you file, or within a very short window (24-48 hours)."
          },
          {
            type: "p",
            text: "Service methods:"
          },
          {
            type: "ul",
            items: [
              "Email (if opposing party consented to electronic service)",
              "U.S. Mail (certified mail, return receipt requested)",
              "Personal service (hand-delivered by a process server or adult non-party)"
            ]
          }
        ]
      },
      {
        id: "understanding-deadlines",
        heading: "Understanding Filing Deadlines",
        body: [
          {
            type: "p",
            text: "Types of Deadlines:"
          },
          {
            type: "p",
            text: "1. Statutory Deadlines - Set by state law. Examples: Response to a motion (21 days), Notice of appeal (30 days), Answer to a complaint (20-30 days)."
          },
          {
            type: "p",
            text: "2. Court-Ordered Deadlines - Set by the judge in a specific order. Examples: Submit proposed parenting plan by specific date, File financial affidavit within 10 days."
          },
          {
            type: "p",
            text: "3. Local Rule Deadlines - Set by your court's standing orders or local rules. Examples: Pre-trial motions due 14 days before hearing, Exhibit lists due 2 business days before trial."
          },
          {
            type: "p",
            text: "How to Calculate Deadlines:"
          },
          {
            type: "ol",
            items: [
              "Start counting the day after the event (e.g., the day after service)",
              "Count calendar days unless the rule specifies \"business days\"",
              "If the deadline falls on a weekend or holiday, it moves to the next business day"
            ]
          },
          {
            type: "p",
            text: "Always verify the calculation method in your state's Rules of Civil Procedure."
          }
        ]
      },
      {
        id: "missed-deadlines",
        heading: "What Happens If You Miss a Deadline",
        body: [
          {
            type: "p",
            text: "Consequences vary by deadline type:"
          },
          {
            type: "p",
            text: "Minor procedural deadline: Court may accept late filing with explanation. Judge may grant an extension if you ask promptly."
          },
          {
            type: "p",
            text: "Major deadline (e.g., response to a motion): Opposing party may get default judgment. You may lose the opportunity to present evidence. Judge may rule without hearing your side."
          },
          {
            type: "p",
            text: "Appeal deadline: You lose the right to appeal (these are strictly enforced)."
          },
          {
            type: "p",
            text: "If you miss a deadline: File immediately, even if late. Include a motion for leave to file out of time, explaining the reason for the delay. Some judges are forgiving for good cause (medical emergency, miscalculation). None are forgiving for \"I forgot.\""
          }
        ]
      },
      {
        id: "efiling-vs-inperson",
        heading: "E-Filing vs. In-Person Filing",
        body: [
          {
            type: "p",
            text: "E-Filing Pros:"
          },
          {
            type: "ul",
            items: [
              "File 24/7 from home",
              "Instant confirmation of filing",
              "No need to physically go to the courthouse",
              "Automatic service to opposing party (in some systems)"
            ]
          },
          {
            type: "p",
            text: "E-Filing Cons:"
          },
          {
            type: "ul",
            items: [
              "Not available in all jurisdictions",
              "Requires technology and internet access",
              "Learning curve for first-time users",
              "May still require in-person filing for certain documents"
            ]
          },
          {
            type: "p",
            text: "In-Person Filing Pros:"
          },
          {
            type: "ul",
            items: [
              "Clerk can review documents for completeness before accepting",
              "Immediate file-stamped copy in hand",
              "No technical issues or system outages",
              "Can ask questions at the counter"
            ]
          },
          {
            type: "p",
            text: "In-Person Filing Cons:"
          },
          {
            type: "ul",
            items: [
              "Limited to business hours",
              "Travel time and cost",
              "Potential wait times",
              "Parking and courthouse security screening"
            ]
          }
        ]
      },
      {
        id: "file-stamped-copies",
        heading: "How to Get File-Stamped Copies",
        body: [
          {
            type: "p",
            text: "A file-stamped copy is your proof that the document was officially filed."
          },
          {
            type: "p",
            text: "In-person filing: Clerk stamps all copies at the counter. Keep at least one stamped copy for your records."
          },
          {
            type: "p",
            text: "E-filing: Download the stamped version from the e-filing portal (usually available within 24 hours). Save as PDF and keep multiple backups."
          },
          {
            type: "p",
            text: "If you need a stamped copy later: Go to the Clerk of Court office and request a certified copy (may cost $0.25-$1.00 per page) or a conformed copy (free or low-cost, not certified)."
          },
          {
            type: "p",
            text: "Always keep file-stamped copies of everything you file. You may need them at hearings, for appeals, or to prove compliance."
          }
        ]
      },
      {
        id: "common-errors",
        heading: "Common Filing Errors and How to Fix Them",
        body: [
          {
            type: "ul",
            items: [
              "Missing or Incorrect Case Number: Contact the Clerk of Court immediately. They may correct it or return the filing for correction.",
              "Unsigned Document: Most courts will reject unsigned filings. Re-sign and re-file immediately.",
              "Missing Certificate of Service: File an amended certificate of service showing when and how you served the document.",
              "Wrong Court or Wrong Division: Refile in the correct court. You may need to pay filing fees again.",
              "Incomplete or Illegible Document: Clerk may reject at the counter or via e-filing system. Correct the issues and resubmit.",
              "Insufficient Filing Fees: Pay the balance immediately or file an Application for Waiver of Filing Fees if you qualify.",
              "Filing After the Deadline: File immediately with a motion for leave to file out of time. Explain the reason and provide supporting documentation."
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: "Can I email my filing to the court?",
        answer: "Not unless your court specifically allows email filing through an e-filing system. Most courts require either in-person filing or submission through their official e-filing portal. Email attachments to the clerk's general inbox are typically not accepted as official filings. Check your court's website or local rules for approved filing methods."
      },
      {
        question: "What if I realize I made a mistake after filing?",
        answer: "You can file an amended version or a correction. File a document titled \"Amended [Original Document Title]\" or \"Corrected [Original Document Title].\" Include a brief explanation of what you're correcting. Serve the opposing party with the amended document and file proof of service. The amended version supersedes the original, but both remain part of the court record."
      },
      {
        question: "Do I need a lawyer to file court documents?",
        answer: "No. You have the right to represent yourself (called appearing \"pro se\" or \"in propria persona\"). Courts must accept filings from self-represented litigants. However, you're held to the same standards as attorneys—the same deadlines, formatting requirements, and procedural rules apply. Consider consulting with a lawyer even if you can't afford full representation; many offer limited-scope services to review documents before filing."
      }
    ]
  },
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Federal Rules of Civil Procedure",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal court filing and service requirements"
      },
      {
        title: "Filing a Lawsuit",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/services-forms/filing-lawsuit",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Official guidance on federal court filing procedures"
      },
      {
        title: "Court Procedures",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/public_education/resources/law_related_education_network/how_courts_work/court-procedures/",
        lastAccessed: "2026-02-16",
        note: "General court filing procedures and requirements"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Filing procedures, deadline calculation methods, and e-filing availability vary significantly by jurisdiction. Always verify with your specific court's local rules and the Clerk of Court office. Some states have mandatory e-filing; others allow but don't require it; some don't offer it at all."
  }
};
