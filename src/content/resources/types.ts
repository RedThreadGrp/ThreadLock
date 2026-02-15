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

export type ResourceSource = {
  name: string;
  note?: string;
  href?: string; // optional; ok to omit until you actually have canonical URLs
};

export type GovernanceMetadata = {
  lastUpdated: string; // ISO date string (YYYY-MM-DD)
  sources: ResourceSource[]; // At least 1 required
  jurisdictionScope: string[]; // e.g., ["US-general"], ["Federal", "California"]
  reviewIntervalDays: 90 | 180 | 365; // Based on content volatility
  accuracyNotes?: string; // Optional, useful for "varies by county" disclaimers
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
