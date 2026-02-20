export type CalloutKind = "note" | "warning" | "tip";

export type ResourceBodyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; kind: CalloutKind; title?: string; text: string }
  | {
      type: "table";
      caption?: string;
      columns: string[];
      rows: string[][];
      footnote?: string;
    };

export type ResourceSection = {
  id: string; // stable slug used for anchors + TOC
  heading: string;
  body: ResourceBodyBlock[];
};

export type ResourceFAQ = {
  id: string; // stable slug used for anchors
  q: string;
  a: string;
};

// Jurisdiction scope for legal authority and AI reference
export type JurisdictionScope = 
  | "federal"           // Federal law (FRCP, FRE, etc.)
  | "multi-state"       // General principles across multiple states
  | "state-specific"    // Specific to one state
  | "US-general";       // General U.S. principles (legacy, use multi-state instead)

// Enhanced source with required fields for authority and AI reference
export type ResourceSource = {
  title: string;                    // Full title of the source (e.g., "Federal Rules of Civil Procedure - Rule 5")
  organization: string;             // Authoritative organization (e.g., "U.S. Courts", "California Judicial Branch")
  url: string;                      // Direct link to the authoritative source
  jurisdiction?: string;            // Specific jurisdiction if applicable (e.g., "Federal", "California", "Texas")
  lastAccessed: string;             // ISO date string (YYYY-MM-DD) when source was last verified
  note?: string;                    // Optional context about the source
};

// Optional reviewer credentials for additional authority
export type ReviewedBy = {
  name: string;                     // Name of reviewer
  credentials: string;              // Credentials (e.g., "Licensed Family Law Attorney, CA Bar #12345")
};

// Governance metadata - REQUIRED for all V2 content
// Build will fail if any required fields are missing
export type GovernanceMetadata = {
  lastUpdated: string;              // ISO date string (YYYY-MM-DD) - REQUIRED
  sources: ResourceSource[];        // At least 1 required - MUST be primary legal authority
  jurisdictionScope: JurisdictionScope[]; // REQUIRED - Must specify applicable jurisdictions
  reviewIntervalDays: 90 | 180 | 365;     // Based on content volatility
  accuracyNotes?: string;           // Optional, useful for "varies by county" disclaimers
  reviewedBy?: ReviewedBy;          // Optional credentials for additional authority
};

export type ResourceQAContent = {
  slug: string;

  seo: {
    title: string;
    description: string;
  };

  hero: {
    h1: string;
    subhead?: string;
  };

  shortAnswer: {
    label?: string; // default "Short answer"
    text: string; // MUST be a single paragraph, no lists
  };

  sections: ResourceSection[];

  faqs?: {
    heading?: string; // default "Frequently asked questions"
    items: ResourceFAQ[];
  };

  sources?: {
    heading?: string; // default "Sources"
    items: ResourceSource[];
  };

  // Governance metadata (required for all content)
  governance: GovernanceMetadata;
};

// ResourcePage type for v2 content with blocks structure
export type ResourcePage = {
  slug?: string;
  contentVersion: 2;
  
  seo?: {
    title: string;
    description: string;
  };
  
  hero?: {
    h1: string;
    subhead?: string;
  };
  
  blocks: {
    shortAnswer: string;
    sections: ResourceSection[];
    faqs?: ResourceFAQ[];
  };
  
  governance?: GovernanceMetadata;
};
