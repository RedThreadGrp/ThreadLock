// file: types/content.ts
// Type definitions for ResourcePage content structure
// This file provides type definitions for resource content used across the application

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

export type JurisdictionScope = 
  | "federal"
  | "multi-state"
  | "state-specific"
  | "US-general";

export type ResourceSource = {
  title: string;
  organization: string;
  url: string;
  jurisdiction?: string;
  lastAccessed: string;
  note?: string;
};

export type ReviewedBy = {
  name: string;
  credentials: string;
};

export type GovernanceMetadata = {
  lastUpdated: string;
  sources: ResourceSource[];
  jurisdictionScope: JurisdictionScope[];
  reviewIntervalDays: 90 | 180 | 365;
  accuracyNotes?: string;
  reviewedBy?: ReviewedBy;
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
