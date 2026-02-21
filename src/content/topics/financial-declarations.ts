import { ResourceQAContent } from "../resources/types";

export const financialDeclarationsTopic: ResourceQAContent = {
  slug: "financial-declarations",
  
  seo: {
    title: "Financial Declarations | ThreadLock Resources",
    description: "Answer financial questions without scrambling for numbers. Learn how to complete financial declarations accurately and comprehensively."
  },
  
  hero: {
    h1: "Financial Declarations",
    subhead: "Answer financial questions without scrambling for numbers."
  },
  
  shortAnswer: {
    text: "Family court requires detailed financial information for nearly every case involving child support, spousal support, property division, or attorney's fees. Financial declarations—sometimes called income and expense declarations, financial affidavits, or statements of net worth—force you to disclose your complete financial picture under penalty of perjury. Having this information organized before you need it reduces stress and prevents errors that could hurt your case."
  },
  
  sections: [
    {
      id: "what-is-financial-declaration",
      heading: "What Is a Financial Declaration?",
      body: [
        {
          type: "p",
          text: "A financial declaration is a mandatory court form that itemizes your income, expenses, assets, debts, and sometimes your financial history. Different states use different forms (California's FL-150, New York's Statement of Net Worth, Texas's Financial Information Form), but all serve the same purpose: giving the court and opposing party a complete financial snapshot."
        }
      ]
    },
    {
      id: "required-information",
      heading: "Required Information Categories",
      body: [
        {
          type: "callout",
          kind: "note",
          title: "Income",
          text: "List all sources—employment wages, self-employment income, rental income, investment returns, bonuses, overtime, unemployment benefits, disability payments, social security, pensions, and any other money received. Include gross amounts (before taxes) and net amounts (after deductions). Attach recent pay stubs and tax returns."
        },
        {
          type: "p",
          text: "**Expenses**: Detail monthly costs for housing (rent/mortgage, property tax, insurance, utilities, maintenance), food, clothing, transportation (car payment, gas, insurance, maintenance), medical care, childcare, education, insurance premiums, debt payments, and miscellaneous expenses. Be realistic—inflating expenses is perjury and easily disproved."
        },
        {
          type: "p",
          text: "**Assets**: Disclose bank accounts, retirement accounts, real property, vehicles, business interests, stocks and bonds, and personal property of significant value. Include current values, how the asset is titled (individual or joint), and acquisition dates."
        },
        {
          type: "p",
          text: "**Debts**: List credit cards, loans, mortgages, unpaid taxes, and other liabilities. Include current balances, monthly payments, creditor names, and whether debts are individual or joint obligations."
        }
      ]
    },
    {
      id: "accuracy-and-documentation",
      heading: "Accuracy and Supporting Documents",
      body: [
        {
          type: "callout",
          kind: "warning",
          title: "Perjury Warning",
          text: "Deliberately hiding assets or misrepresenting income constitutes perjury and can result in sanctions, adverse findings, and even criminal charges."
        },
        {
          type: "p",
          text: "Financial declarations require supporting documentation: pay stubs, tax returns, bank statements, credit card statements, mortgage statements, and loan documents. Courts often require the most recent two years of tax returns and three months of pay stubs."
        }
      ]
    },
    {
      id: "common-mistakes",
      heading: "Common Mistakes",
      body: [
        {
          type: "p",
          text: "Avoid these critical errors when preparing financial declarations:"
        },
        {
          type: "ul",
          items: [
            "**Underreporting income**: Forgetting to include bonuses, side gigs, cash payments, or irregular income. Courts can impute income if they believe you're hiding earnings.",
            "**Overestimating expenses**: Inflating costs to reduce support obligations or increase support claims. Judges spot unrealistic expenses quickly (e.g., claiming $1,500/month groceries for one person).",
            "**Using old information**: Financial declarations require current data. Using numbers from six months ago won't work. Update your information before filing.",
            "**Omitting assets or debts**: 'Forgetting' to list a bank account, retirement fund, or valuable item is perjury. Full disclosure is mandatory even if you think the asset is 'yours.'",
            "**Rounding too much or being imprecise**: Courts want specific numbers, not estimates. '$2,347.12' is better than 'about $2,300.'",
            "**Not keeping copies**: You'll need to reference your financial declaration multiple times throughout your case. Keep copies with your supporting documents.",
            "**Filing without supporting documents**: Many courts require attaching pay stubs, tax returns, and other verification. A declaration without documentation may be rejected.",
            "**Not updating when circumstances change**: If your income or expenses change significantly during the case, you may need to file an updated financial declaration."
          ]
        }
      ]
    }
  ],
  
  sources: {
    items: [
      {
        title: "Tax Information for Families",
        organization: "Internal Revenue Service",
        url: "https://www.irs.gov/individuals/parents",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "California Courts Self-Help: Financial Disclosures",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/selfhelp-financials.htm",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Family Law Financial Issues",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/family_law/",
        jurisdiction: "US-general",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Form FL-150 (Income and Expense Declaration)",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/documents/fl150.pdf",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "New York Domestic Relations Law § 236 (Statement of Net Worth)",
        organization: "NY State Legislature",
        url: "https://www.nysenate.gov/legislation/laws/DOM/236",
        jurisdiction: "new-york",
        lastAccessed: "2026-02-21"
      },
      {
        title: "IRS — Divorced or Separated Individuals (Publication 504)",
        organization: "Internal Revenue Service",
        url: "https://www.irs.gov/publications/p504",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Child Support Guidelines by State",
        organization: "National Conference of State Legislatures",
        url: "https://www.ncsl.org/research/human-services/child-support-guidelines.aspx",
        jurisdiction: "multi-state",
        lastAccessed: "2026-02-21"
      }
    ]
  },
  
  governance: {
    lastUpdated: "2026-02-21",
    sources: [
      {
        title: "Tax Information for Families",
        organization: "Internal Revenue Service",
        url: "https://www.irs.gov/individuals/parents",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      },
      {
        title: "California Courts Self-Help: Financial Disclosures",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/selfhelp-financials.htm",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "Form FL-150 (Income and Expense Declaration)",
        organization: "California Judicial Branch",
        url: "https://www.courts.ca.gov/documents/fl150.pdf",
        jurisdiction: "california",
        lastAccessed: "2026-02-21"
      },
      {
        title: "New York Domestic Relations Law § 236 (Statement of Net Worth)",
        organization: "NY State Legislature",
        url: "https://www.nysenate.gov/legislation/laws/DOM/236",
        jurisdiction: "new-york",
        lastAccessed: "2026-02-21"
      },
      {
        title: "IRS — Divorced or Separated Individuals (Publication 504)",
        organization: "Internal Revenue Service",
        url: "https://www.irs.gov/publications/p504",
        jurisdiction: "federal",
        lastAccessed: "2026-02-21"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Financial declaration forms and requirements vary by state. Income calculation methods, expense standards, and mandatory attachments differ by jurisdiction. Consult local court rules and forms."
  }
};
