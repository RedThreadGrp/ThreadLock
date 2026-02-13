// file: src/content/stateDeadlines.registry.ts
// State-specific deadlines and rules for family law proceedings
// Keep it minimal - 3-5 key deadlines per state

export interface StateDeadline {
  jurisdiction: string; // State/territory code
  deadlines: Array<{
    name: string;
    days: number;
    description: string;
  }>;
  notes?: string;
}

// Common deadlines that apply to many states
export const COMMON_DEADLINES = {
  RESPONSE_TO_PETITION: {
    name: "Response to Petition",
    days: 30,
    description: "Time to respond to initial divorce/separation petition",
  },
  RESPONSE_TO_MOTION: {
    name: "Response to Motion",
    days: 14,
    description: "Time to respond to most motions",
  },
  PROOF_OF_SERVICE: {
    name: "Proof of Service Filing",
    days: 3,
    description: "Time to file proof of service after service completion",
  },
  FINANCIAL_DISCLOSURE: {
    name: "Financial Disclosure",
    days: 45,
    description: "Time to exchange preliminary financial declarations",
  },
};

// State-specific deadlines (sample for key states)
export const STATE_DEADLINES: StateDeadline[] = [
  {
    jurisdiction: "CA",
    deadlines: [
      {
        name: "Response to Petition",
        days: 30,
        description: "30 days from service to file response (FL-120)",
      },
      {
        name: "Preliminary Declaration",
        days: 60,
        description: "Within 60 days of petition filing",
      },
      {
        name: "Mandatory Waiting Period",
        days: 180,
        description: "6 months before judgment can be entered",
      },
      {
        name: "Response to RFO",
        days: 9,
        description: "9 court days to respond to Request for Order",
      },
    ],
    notes: "California has specific local rules that may vary by county",
  },
  {
    jurisdiction: "TX",
    deadlines: [
      {
        name: "Answer to Petition",
        days: 21,
        description: "20 days plus next Monday to file answer",
      },
      {
        name: "Waiting Period",
        days: 60,
        description: "60-day waiting period before divorce can be finalized",
      },
      {
        name: "Discovery Responses",
        days: 30,
        description: "30 days to respond to written discovery",
      },
    ],
    notes: "Texas requires a 60-day waiting period after filing",
  },
  {
    jurisdiction: "NY",
    deadlines: [
      {
        name: "Answer to Summons",
        days: 20,
        description: "20 days if served personally, 30 if by mail",
      },
      {
        name: "Statement of Net Worth",
        days: 20,
        description: "Within 20 days of service of RJI",
      },
      {
        name: "Response to Motion",
        days: 7,
        description: "7 days to respond to most motions",
      },
    ],
  },
  {
    jurisdiction: "FL",
    deadlines: [
      {
        name: "Answer to Petition",
        days: 20,
        description: "20 days from service to file answer",
      },
      {
        name: "Financial Affidavit",
        days: 45,
        description: "Within 45 days if income < $50k, else within discovery",
      },
      {
        name: "Mandatory Disclosure",
        days: 45,
        description: "45 days to serve mandatory disclosure",
      },
    ],
  },
  {
    jurisdiction: "WA",
    deadlines: [
      {
        name: "Response to Petition",
        days: 20,
        description: "20 days from service (can request 20-day extension)",
      },
      {
        name: "Waiting Period",
        days: 90,
        description: "90-day waiting period before final order",
      },
      {
        name: "Financial Declaration",
        days: 30,
        description: "Serve within 30 days of filing",
      },
    ],
  },
];

/**
 * Get deadlines for a specific jurisdiction
 * @param jurisdiction - State/territory code (e.g., "CA", "TX")
 * @returns StateDeadline object or undefined if not found
 */
export function getDeadlinesForJurisdiction(
  jurisdiction: string
): StateDeadline | undefined {
  return STATE_DEADLINES.find((d) => d.jurisdiction === jurisdiction);
}

/**
 * Check if deadlines exist for a jurisdiction
 * @param jurisdiction - State/territory code
 * @returns boolean
 */
export function hasDeadlines(jurisdiction: string): boolean {
  return STATE_DEADLINES.some((d) => d.jurisdiction === jurisdiction);
}

/**
 * Get all jurisdictions with deadline information
 * @returns Array of jurisdiction codes
 */
export function getJurisdictionsWithDeadlines(): string[] {
  return STATE_DEADLINES.map((d) => d.jurisdiction);
}
