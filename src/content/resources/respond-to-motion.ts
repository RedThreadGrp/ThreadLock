import type { ResourceQAContent } from "./types";

export const respondToMotion: ResourceQAContent = {
  slug: "respond-to-motion",

  seo: {
    title: "How to Respond to a Motion | Complete Guide to Filing Opposition",
    description:
      "Respond to a motion by filing an opposition within the deadline (typically 9-21 days). Learn required documents, effective opposition writing, and service requirements.",
  },

  hero: {
    h1: "How do I respond to a motion?",
    subhead: "Understanding deadlines, required documents, and effective opposition strategies.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Respond to a motion by filing a written opposition or response within the deadline (typically 9-21 days before the hearing). Include a declaration under penalty of perjury addressing the motion's claims and supporting evidence. Serve your response on the opposing party and file proof of service with the court.",
  },

  sections: [
    {
      id: "understanding-motion",
      heading: "Understanding the Motion",
      body: [
        {
          type: "p",
          text: "Review the Motion Carefully. Before responding, analyze:",
        },
        {
          type: "ul",
          items: [
            "What the moving party is requesting",
            "Grounds or legal basis for the request",
            "Evidence and declarations supporting the motion",
            "Proposed order language",
            "Hearing date and location",
          ],
        },
        {
          type: "p",
          text: "Identify the Deadline: Calculate when your response is due. Count backwards from hearing date, exclude weekends and court holidays, account for service method (mail adds 5 days in many states), and check local rules for specific requirements.",
        },
        {
          type: "p",
          text: "Gather Opposing Evidence: Collect materials that contradict or refute the motion - documents showing different facts, communications between parties, financial records, witness statements, and expert opinions.",
        },
      ],
    },
    {
      id: "required-documents",
      heading: "Required Response Documents",
      body: [
        {
          type: "p",
          text: "Opposition or Response Brief - Written argument addressing the motion:",
        },
        {
          type: "ul",
          items: [
            "Caption with case information",
            "Title (e.g., 'Respondent's Opposition to Motion for Modification')",
            "Introduction summarizing your position",
            "Statement of facts from your perspective",
            "Legal argument with citations to statutes or case law",
            "Conclusion requesting denial of motion",
            "Signature and date",
          ],
        },
        {
          type: "p",
          text: "Declaration Under Penalty of Perjury - Sworn statement of facts including your personal knowledge, specific responses to moving party's claims, additional supporting facts, referenced exhibits, and signature under penalty of perjury.",
        },
        {
          type: "p",
          text: "Exhibits - Supporting evidence that is pre-labeled, authenticated in your declaration, organized, and includes copies for court and opposing party.",
        },
      ],
    },
    {
      id: "effective-opposition",
      heading: "Writing an Effective Opposition",
      body: [
        {
          type: "p",
          text: "Address Each Argument systematically:",
        },
        {
          type: "ul",
          items: [
            "Deny false factual allegations",
            "Provide your version of disputed events",
            "Explain why legal arguments don't apply",
            "Distinguish cases cited by moving party",
            "Present your own supporting legal authority",
          ],
        },
        {
          type: "p",
          text: "Maintain Professional Tone: Stick to facts and law, avoid emotional language or personal attacks, don't exaggerate or misrepresent evidence, concede minor points that don't affect outcome, and focus on strongest arguments.",
        },
        {
          type: "p",
          text: "Cite Legal Authority: Support your position with relevant statutes, published court decisions, court rules of procedure, prior orders in your case, and legislative intent or policy considerations.",
        },
      ],
    },
    {
      id: "service-filing",
      heading: "Service and Filing Requirements",
      body: [
        {
          type: "p",
          text: "Serve Opposing Party before filing with court:",
        },
        {
          type: "ul",
          items: [
            "Mail or electronically serve your opposition on other party",
            "Include all declarations and exhibits",
            "Complete proof of service form",
            "Allow extra time if serving by mail",
          ],
        },
        {
          type: "p",
          text: "File With Court: Submit original opposition and declaration, proof of service, courtesy copies if required, and filing fee (if applicable) or fee waiver order.",
        },
        {
          type: "p",
          text: "Timing: Opposition typically due 9-16 days before hearing. Some courts require 21 days for complex motions. Ex parte or emergency motions may allow shorter response time. Late filings may be rejected or disregarded.",
        },
      ],
    },
    {
      id: "response-types",
      heading: "Types of Responses",
      body: [
        {
          type: "p",
          text: "Full Opposition: Comprehensive response arguing against entire motion. Use when you disagree with the motion completely.",
        },
        {
          type: "p",
          text: "Partial Opposition: Agree to some requests but oppose others. Clarify which parts you support and which you contest.",
        },
        {
          type: "p",
          text: "Counter-Motion: File your own competing motion requesting alternative relief. Must still respond to original motion within deadline.",
        },
        {
          type: "p",
          text: "Non-Opposition: Indicate you don't oppose the motion. May still file a response explaining your non-opposition or requesting specific order language.",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common Response Mistakes to Avoid",
      body: [
        {
          type: "ul",
          items: [
            "Missing the deadline (court may not consider late oppositions)",
            "Failing to serve opposing party before filing",
            "Not addressing all arguments in the motion",
            "Using emotional or aggressive language",
            "Filing without supporting evidence or declaration",
            "Ignoring local court rules or formatting requirements",
            "Waiting until last minute to gather evidence",
            "Not keeping copies of everything filed and served",
          ],
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "no-opposition",
        q: "What happens if I don't respond to a motion?",
        a: "The court may grant the motion without hearing your side. Courts often require parties to oppose motions if they disagree. Failure to respond can be interpreted as agreement or waiver of objections. If you truly don't oppose, file a notice of non-opposition.",
      },
      {
        id: "reply-allowed",
        q: "Can the other party reply to my opposition?",
        a: "Yes, in most jurisdictions the moving party can file a reply brief (typically due 5 days before the hearing). The reply should only address new points raised in your opposition, not rehash the original motion. You generally cannot respond to a reply.",
      },
      {
        id: "need-lawyer",
        q: "Do I need a lawyer to respond to a motion?",
        a: "Not required, but complex motions may benefit from legal assistance. Consider consulting an attorney if the motion involves complex legal issues, could significantly impact your case, or you're unsure how to respond effectively. Many attorneys offer limited scope representation for specific tasks like motion responses.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Federal Rules of Civil Procedure",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Motion practice and response requirements"
      },
      {
        title: "Federal Rules of Civil Procedure",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/rules/frcp",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Complete text with annotations on motion procedures"
      },
      {
        title: "Self-Help Resources",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/access-and-fairness/self-representation/state-links",
        lastAccessed: "2026-02-16",
        note: "State-specific motion response guides"
      },
    ],
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
        note: "Motion response requirements by jurisdiction"
      },
      {
        title: "Self-Help Resources",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/access-and-fairness/self-representation/state-links",
        lastAccessed: "2026-02-16",
        note: "Court-specific deadlines and procedures"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Motion response deadlines, formatting requirements, and procedures vary significantly by jurisdiction and court type. Some courts count days differently (calendar days vs. court days). E-filing systems may affect service timing. Emergency or ex parte motions have different response timelines. Always check your specific court's local rules for motion response requirements.",
  },
};
