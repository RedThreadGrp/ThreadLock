import type { ResourceQAContent } from "./types";

export const childSupportCalculation: ResourceQAContent = {
  slug: "child-support-calculation",

  seo: {
    title: "How to Calculate Child Support | State Guidelines & Formulas",
    description:
      "Child support calculations use state-specific guidelines based on both parents' income, time-sharing, and additional expenses. Learn the calculation models and required information.",
  },

  hero: {
    h1: "How do I calculate child support?",
    subhead: "Understanding child support calculation models, income considerations, and add-on expenses.",
  },

  shortAnswer: {
    label: "Short answer",
    text: "Child support calculations use state-specific guidelines based on both parents' gross income, the percentage of time each parent has the children, and additional expenses like healthcare and childcare. Most states provide worksheets or online calculators. Courts generally must follow guideline amounts unless specific circumstances justify deviation.",
  },

  sections: [
    {
      id: "basic-components",
      heading: "Basic Calculation Components",
      body: [
        {
          type: "p",
          text: "Parental Income: Courts consider both parents' gross income from all sources:",
        },
        {
          type: "ul",
          items: [
            "Wages, salaries, commissions, and bonuses",
            "Self-employment income (after business expenses)",
            "Rental property income",
            "Investment income and dividends",
            "Unemployment or disability benefits",
            "Social Security benefits (in some states)",
            "Overtime pay (if regular and consistent)",
          ],
        },
        {
          type: "p",
          text: "Excluded or Adjusted Income: Some income may be excluded, including child support received for children from other relationships, spousal support paid or received, and imputed income if parent is voluntarily unemployed. Income from new spouse is generally not included.",
        },
        {
          type: "p",
          text: "Number of Children: Support amount increases with number of children. Different percentages apply for 1, 2, 3+ children. Some states use flat percentages; others use income shares models that vary by income level.",
        },
        {
          type: "p",
          text: "Time-Sharing Percentage: Custody arrangement affects support. More equal time-sharing reduces support obligation. Thresholds vary (some states adjust at 20%, others at 35%).",
        },
      ],
    },
    {
      id: "calculation-models",
      heading: "Calculation Models",
      body: [
        {
          type: "p",
          text: "Income Shares Model (majority of states): Based on principle that child should receive same proportion of parental income as if family were intact. Combines both parents' incomes, refers to guideline schedule, prorates obligation between parents based on income percentage, and adjusts for time-sharing.",
        },
        {
          type: "p",
          text: "Percentage of Income Model: Support is flat percentage of non-custodial parent's income. Texas uses this model (20% for 1 child, 25% for 2, 30% for 3). Wisconsin also uses this model. Simpler calculation but less precise for shared custody.",
        },
        {
          type: "p",
          text: "Melson Formula (Delaware, Hawaii, Montana): Ensures basic needs of parents met before calculating support. Subtracts self-support reserves from income and allocates remaining income proportionally.",
        },
      ],
    },
    {
      id: "add-on-expenses",
      heading: "Add-On Expenses",
      body: [
        {
          type: "p",
          text: "Health Insurance: Support order typically addresses which parent provides coverage, cost of children's portion of premiums, and how uncovered medical expenses are split (often 50/50 or proportional to income).",
        },
        {
          type: "p",
          text: "Childcare Costs: Work-related childcare usually added to base support, including after-school care, summer camp, and daycare. Typically split proportionally to income.",
        },
        {
          type: "p",
          text: "Educational Expenses: Some states include private school tuition (if historically provided), extracurricular activities, school supplies and fees, and college expenses (in some jurisdictions).",
        },
      ],
    },
    {
      id: "state-tools",
      heading: "State Worksheets and Calculators",
      body: [
        {
          type: "p",
          text: "Most states provide downloadable PDF worksheets with instructions, online calculators on court websites, built-in calculators in e-filing systems, and mobile apps (some states).",
        },
        {
          type: "p",
          text: "Required Information to complete calculations:",
        },
        {
          type: "ul",
          items: [
            "Both parents' gross monthly income",
            "Number of children from this relationship",
            "Percentage of time children spend with each parent",
            "Health insurance costs for children",
            "Childcare costs",
            "Other children each parent supports",
          ],
        },
      ],
    },
    {
      id: "deviations",
      heading: "Deviations from Guidelines",
      body: [
        {
          type: "p",
          text: "Courts can deviate from guideline amounts if specific circumstances justify it:",
        },
        {
          type: "ul",
          items: [
            "Child has special needs requiring extraordinary expenses",
            "Parent has unusually high or low income",
            "Child has significant assets or income",
            "Parent has extraordinary travel costs for visitation",
            "Parent has significant debt from marital obligations",
            "Guideline amount would be unjust or inappropriate",
          ],
        },
        {
          type: "p",
          text: "Any deviation must be explained in writing by the court and must serve the child's best interests.",
        },
      ],
    },
    {
      id: "modifications",
      heading: "Modifying Child Support",
      body: [
        {
          type: "p",
          text: "Support can be modified when circumstances change substantially:",
        },
        {
          type: "ul",
          items: [
            "Significant income change (15-20% threshold in many states)",
            "Change in custody or time-sharing arrangement",
            "Child's needs change (medical, educational)",
            "Change in childcare or health insurance costs",
            "Automatic review every 3 years (in some states)",
          ],
        },
        {
          type: "p",
          text: "Either parent can request a modification by filing a motion with the court and demonstrating the changed circumstances.",
        },
      ],
    },
  ],

  faqs: {
    heading: "Frequently Asked Questions",
    items: [
      {
        id: "both-incomes",
        q: "Do both parents' incomes matter?",
        a: "Yes, in income shares model states (the majority), both parents' incomes are considered. In percentage of income states, typically only the non-custodial parent's income is used for the calculation.",
      },
      {
        id: "50-50-custody",
        q: "Is there child support with 50/50 custody?",
        a: "Yes, usually. Even with equal time-sharing, if one parent earns significantly more, they typically pay support to equalize the children's standard of living in both homes. The amount is typically reduced compared to sole custody arrangements.",
      },
      {
        id: "self-employed",
        q: "How is child support calculated for self-employed parents?",
        a: "Self-employed parents use gross receipts minus reasonable business expenses. Courts scrutinize deductions carefully and may impute income if expenses seem inflated. Tax returns, profit/loss statements, and bank records are typically required.",
      },
    ],
  },

  sources: {
    heading: "Sources",
    items: [
      {
        title: "Child Support Guidelines by State",
        organization: "National Conference of State Legislatures",
        url: "https://www.ncsl.org/research/human-services/child-support-guidelines.aspx",
        lastAccessed: "2026-02-16",
        note: "State-by-state child support calculation methods"
      },
      {
        title: "Office of Child Support Enforcement",
        organization: "U.S. Department of Health and Human Services",
        url: "https://www.acf.hhs.gov/css",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal child support programs and resources"
      },
      {
        title: "Child Support Information",
        organization: "American Bar Association",
        url: "https://www.americanbar.org/groups/family_law/resources/",
        lastAccessed: "2026-02-16",
        note: "General child support guidance and legal principles"
      },
    ],
  },

  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Child Support Guidelines",
        organization: "National Conference of State Legislatures",
        url: "https://www.ncsl.org/research/human-services/child-support-guidelines.aspx",
        lastAccessed: "2026-02-16",
        note: "Specific calculation formulas and worksheets by state"
      },
      {
        title: "Office of Child Support Enforcement",
        organization: "U.S. Department of Health and Human Services",
        url: "https://www.acf.hhs.gov/css",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Federal oversight and resources"
      },
    ],
    jurisdictionScope: ["multi-state"],
    reviewIntervalDays: 180,
    accuracyNotes: "Child support calculation methods vary significantly by state. Some states review and update guidelines every 4 years. Income thresholds, add-on expenses, and time-sharing adjustments differ by jurisdiction. Always use your state's official calculator or worksheet for accurate calculations.",
  },
};
