import { ResourcePage } from "@/types/content";

export const financialSnapshot: ResourcePage = {
  contentVersion: 2,
  blocks: {
    shortAnswer: "Family court requires detailed financial information. Organize income (employment, self-employment, other), expenses (fixed, variable, periodic), assets (property, accounts, vehicles), and debts before court.",
    sections: [
      {
        id: "income-section",
        heading: "Income Section",
        body: [
          {
            type: "p",
            text: "**Employment Income:** Current employer name and address, job title and start date, gross monthly income (before taxes), net monthly income (after taxes, 401k, insurance), pay schedule (weekly, bi-weekly, monthly), and recent pay stubs (last 3 months)."
          },
          {
            type: "p",
            text: "**Self-Employment Income:** Business name and type, average monthly gross income (last 12 months), business expenses (average monthly), net self-employment income, and tax returns (last 2 years)."
          },
          {
            type: "p",
            text: "**Other Income:** Social Security or disability benefits, rental property income, investment income (dividends, interest), child support received from other relationships, spousal support received, unemployment benefits, and any other regular income sources."
          }
        ]
      },
      {
        id: "expense-section",
        heading: "Expense Section",
        body: [
          {
            type: "p",
            text: "**Fixed Monthly Expenses:** Rent or mortgage payment, property tax, homeowners/renters insurance, utilities (electric, gas, water, sewer, trash), phone/internet/cable, car payment(s), car insurance, health insurance, life insurance, student loan payments, and credit card minimum payments."
          },
          {
            type: "p",
            text: "**Variable Monthly Expenses:** Groceries, gas/transportation, childcare costs, children's activities (sports, music, etc.), clothing, personal care (haircuts, etc.), medical expenses not covered by insurance, entertainment/dining out, pet care, and subscriptions (streaming services, etc.)."
          },
          {
            type: "p",
            text: "**Periodic Expenses (calculate monthly average):** Car maintenance and repairs, home maintenance and repairs, birthday/holiday gifts, school expenses, and annual memberships."
          }
        ]
      },
      {
        id: "assets-section",
        heading: "Assets Section",
        body: [
          {
            type: "p",
            text: "**Real Property:** Home (address, current value, amount owed) and other real estate (rental, vacation home, land)."
          },
          {
            type: "p",
            text: "**Vehicles:** Make, model, year, current value, and amount owed."
          },
          {
            type: "p",
            text: "**Financial Accounts:** Checking account (bank name, approximate balance), savings account, retirement accounts (401k, IRA, pension), investment accounts, and education savings (529 plans)."
          },
          {
            type: "p",
            text: "**Other Assets:** Business ownership interests, stocks, bonds, cryptocurrency, valuable collections or items, and life insurance cash value."
          }
        ]
      },
      {
        id: "debts-section",
        heading: "Debts Section",
        body: [
          {
            type: "ul",
            items: [
              "Credit cards (balance, minimum payment, creditor)",
              "Student loans (balance, monthly payment)",
              "Personal loans",
              "Medical debt",
              "Tax debt",
              "Other debts"
            ]
          }
        ]
      },
      {
        id: "supporting-documents",
        heading: "Supporting Documents to Gather",
        body: [
          {
            type: "ul",
            items: [
              "Last 2 years of tax returns",
              "Last 3 months of pay stubs",
              "Last 3 months of bank statements",
              "Recent credit card statements",
              "Recent loan statements",
              "Property tax statements",
              "Insurance declarations",
              "Retirement account statements"
            ]
          }
        ]
      },
      {
        id: "tips-for-court-forms",
        heading: "Tips for Court Forms",
        body: [
          {
            type: "ul",
            items: [
              "Round to nearest dollar",
              "Use monthly figures unless form specifies otherwise",
              "Be honest—lying on financial declarations is perjury",
              "Update regularly as circumstances change",
              "Keep copies of everything you file",
              "If you estimate something, mark it as an estimate and be prepared to provide actual figures later"
            ]
          },
          {
            type: "p",
            text: "Before court, run the numbers: Total monthly income, total monthly expenses, difference (surplus or shortfall?). Does this pass the smell test? If expenses exceed income significantly, be prepared to explain how you're currently managing."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What are the most common financial disclosure mistakes?",
        answer: "Forgetting to include all income sources, not accounting for taxes and deductions, guessing at expenses instead of tracking them, omitting debts or assets, using outdated information, and not keeping documentation to back up your numbers."
      },
      {
        question: "Should I include income from side gigs or cash payments?",
        answer: "Yes. Underreporting income by forgetting to include bonuses, side gigs, cash payments, or irregular income is a major mistake. Courts can impute income if they believe you're hiding earnings, which can hurt your credibility."
      },
      {
        question: "What if my expenses exceed my income on the worksheet?",
        answer: "This is a red flag. Be prepared to explain how you're currently managing. Either you're missing income sources, overestimating expenses, or genuinely in financial distress. Courts need realistic numbers to make fair decisions."
      }
    ]
  },
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      { 
        title: "Family Law Resources",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/family_law/resources/",
        lastAccessed: "2026-02-16",
        note: "Financial disclosure standards and best practices"
      },
      { 
        title: "Self-Help Resources",
        organization: "National Center for State Courts",
        url: "https://www.ncsc.org/topics/access-and-fairness/self-representation/state-links",
        lastAccessed: "2026-02-16",
        note: "State-specific financial declaration resources"
      },
      { 
        title: "Family Court Self-Help",
        organization: "California Courts",
        url: "https://www.courts.ca.gov/selfhelp-finance.htm",
        jurisdiction: "California",
        lastAccessed: "2026-02-16",
        note: "Example state financial declaration guidance"
      }
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Financial declaration requirements and forms vary by state. Consult your local family court rules for specific requirements."
  }
};
