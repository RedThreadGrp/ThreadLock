import type { ResourceQAContent } from "./types";

export const feeWaiver: ResourceQAContent = {
  slug: "fee-waiver",

  seo: {
    title: "Can't Afford Court Fees? Complete Fee Waiver Guide | How to Apply",
    description:
      "Request a fee waiver by filing an application showing your income qualifies under poverty guidelines. Learn eligibility requirements, application process, and what fees can be waived.",
  },

  hero: {
    h1: "What if I can't afford court fees?",
    subhead: "Understanding fee waivers: eligibility, application process, and covered costs.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Request a fee waiver by filing an application showing your income qualifies under federal poverty guidelines or you receive public assistance. If approved, the court waives filing fees, service fees, and sometimes other costs for eligible low-income litigants. Most courts provide standard forms for fee waiver applications.",
  },

  sections: [
    {
      id: "what-is-covered",
      heading: "What Fees Can Be Waived",
      body: [
        {
          type: "p",
          text: "Fee waivers typically cover:",
        },
        {
          type: "ul",
          items: [
            "Initial filing fees for petitions or complaints",
            "Motion filing fees",
            "Service of process costs",
            "Subpoena fees",
            "Transcript costs (in some jurisdictions)",
            "Appeal fees",
            "Mediation fees (court-ordered programs)",
          ],
        },
        {
          type: "p",
          text: "Fees NOT typically waived:",
        },
        {
          type: "ul",
          items: [
            "Attorney's fees",
            "Private process server fees (may provide sheriff service instead)",
            "Expert witness fees",
            "Private mediation costs",
            "Copying costs for personal use",
          ],
        },
      ],
    },
    {
      id: "eligibility",
      heading: "Eligibility Requirements",
      body: [
        {
          type: "p",
          text: "Income-Based Eligibility: Most states grant waivers if your income is at or below 125% of federal poverty guidelines, you receive means-tested public benefits, or you're unable to meet basic living expenses and pay fees.",
        },
        {
          type: "p",
          text: "Public Assistance Programs (automatic or presumptive eligibility):",
        },
        {
          type: "ul",
          items: [
            "Supplemental Security Income (SSI)",
            "State public assistance or welfare",
            "Food stamps/SNAP benefits",
            "Medicaid or state health assistance",
            "General assistance or relief",
          ],
        },
        {
          type: "p",
          text: "Household Income Calculation: Courts consider gross monthly income from all sources, number of people in household, household expenses (rent, food, utilities, medical, childcare), and assets (savings, property, vehicles).",
        },
      ],
    },
    {
      id: "application-process",
      heading: "How to Apply",
      body: [
        {
          type: "p",
          text: "Required Forms:",
        },
        {
          type: "ul",
          items: [
            "Application or petition for fee waiver (varies by state)",
            "Income and expense declaration",
            "Proof of public benefits (if applicable)",
            "Supporting financial documentation",
          ],
        },
        {
          type: "p",
          text: "Supporting Documentation: Attach recent pay stubs (2-3 months), tax returns (most recent year), unemployment or disability statements, public assistance award letters, bank statements, and bills showing monthly expenses.",
        },
        {
          type: "p",
          text: "Filing: Submit application with initial petition or separately to court clerk. Some courts decide applications administratively; others require hearing. Decision typically within 5-10 business days.",
        },
      ],
    },
    {
      id: "court-decision",
      heading: "Court's Decision",
      body: [
        {
          type: "p",
          text: "If Approved: Court stamps documents without payment, sheriff or marshal serves documents at no cost, and waiver remains in effect for duration of case.",
        },
        {
          type: "p",
          text: "Partial Waiver: Courts may defer fees until end of case, require payment plan, waive some fees but not others, or allow installment payments.",
        },
        {
          type: "p",
          text: "If Denied: Court provides reason, you must pay fees to proceed, but can reapply if circumstances change or request reconsideration with additional evidence.",
        },
      ],
    },
    {
      id: "reimbursement",
      heading: "Reimbursement and Reporting",
      body: [
        {
          type: "p",
          text: "Potential Repayment: Court may order winner to reimburse waived fees from losing party. If you later have increased income, court may require payment. Settlement agreements may address reimbursement. Some states have no reimbursement provision.",
        },
        {
          type: "p",
          text: "Reporting Changes: If your financial circumstances improve significantly during the case, you may be required to notify the court and fees could be reinstated.",
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "how-long-valid",
        q: "How long does a fee waiver last?",
        a: "A fee waiver typically remains in effect for the duration of your case, including appeals if specified in the order. However, if your financial circumstances improve significantly, the court may require you to start paying fees.",
      },
      {
        id: "can-reapply",
        q: "Can I reapply if denied?",
        a: "Yes. If denied, you can request reconsideration with additional evidence or reapply if your circumstances change. You may also ask for a hearing to explain your situation to a judge.",
      },
      {
        id: "public-benefits-proof",
        q: "What counts as proof of public benefits?",
        a: "Acceptable proof includes award letters from the benefits agency, benefit cards (EBT, Medicaid), current statements showing benefits received, or verification letters from the administering agency.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Federal Poverty Guidelines",
        organization: "U.S. Department of Health and Human Services",
        url: "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Annual poverty level calculations for fee waiver eligibility"
      },
      {
        title: "28 U.S.C. § 1915 - Proceedings in Forma Pauperis",
        organization: "U.S. Government Publishing Office",
        url: "https://www.govinfo.gov/content/pkg/USCODE-2011-title28/html/USCODE-2011-title28-partV-chap123-sec1915.htm",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal statute governing fee waivers"
      },
      {
        title: "Fee Waiver Information",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/services-forms/fees/fee-waivers",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Official guidance on federal court fee waivers"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Federal Poverty Guidelines",
        organization: "U.S. Department of Health and Human Services",
        url: "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Annual poverty level calculations"
      },
      {
        title: "28 U.S.C. § 1915 - Proceedings in Forma Pauperis",
        organization: "U.S. Government Publishing Office",
        url: "https://www.govinfo.gov/content/pkg/USCODE-2011-title28/html/USCODE-2011-title28-partV-chap123-sec1915.htm",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal in forma pauperis statute"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Fee waiver requirements, forms, and procedures vary by state and court type (civil, family, probate). Poverty guidelines are updated annually. Check your local court's self-help center for jurisdiction-specific forms and income thresholds.",
  },
};
