// file: src/content/legalGlossary.ts
// Legal glossary registry for evidence admissibility terms

// ============================================================================
// Type Definitions
// ============================================================================

export type LegalGlossaryTerm = {
  term: string;
  slug: string;
  definition: string;
  whyItMatters: string;
  threadlockIntegration: string;
  relatedTerms: string[]; // slugs of related glossary terms
  relatedJurisdiction?: string; // slug of a jurisdiction page
  seoTitle: string;
  metaDescription: string;
};

// ============================================================================
// Glossary Terms
// ============================================================================

export const LEGAL_GLOSSARY: LegalGlossaryTerm[] = [
  {
    term: "Contemporaneous Evidence",
    slug: "contemporaneous-evidence",
    definition: "Records created at or near the time an event occurred, rather than reconstructed from memory at a later date.",
    whyItMatters: "Judges often give more weight to records created in real time than to recollections offered months later. Contemporaneous documentation helps establish credibility and accuracy of events as they happened.",
    threadlockIntegration: "ThreadLock journals automatically timestamp entries and preserve edit history to support chronological credibility. Every entry is marked with creation time and any subsequent modifications are tracked.",
    relatedTerms: ["authentication-of-evidence", "metadata-digital-evidence", "chain-of-custody-digital"],
    relatedJurisdiction: "oregon-family-court",
    seoTitle: "Contemporaneous Evidence in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Learn about contemporaneous evidence and why records created in real time carry more weight in family court. ThreadLock preserves timestamps to support documentation credibility."
  },
  {
    term: "Hearsay (Family Court Context)",
    slug: "hearsay-family-court",
    definition: "An out-of-court statement offered to prove the truth of the matter asserted. In family court, hearsay rules are often more relaxed than in criminal proceedings.",
    whyItMatters: "Although family courts are often more flexible than criminal courts, hearsay objections can still affect weight and admissibility. Understanding when evidence may be challenged as hearsay helps you prepare stronger documentation.",
    threadlockIntegration: "ThreadLock allows users to attach primary source evidence (screenshots, call logs, metadata) to reduce reliance on second-hand statements. By documenting original sources, you strengthen the evidentiary foundation.",
    relatedTerms: ["authentication-of-evidence", "contemporaneous-evidence", "pattern-of-conduct"],
    relatedJurisdiction: "california-family-court",
    seoTitle: "Hearsay in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Understand hearsay rules in family court and how to strengthen evidence with primary sources. ThreadLock helps attach original documentation to reduce hearsay concerns."
  },
  {
    term: "Authentication of Evidence",
    slug: "authentication-of-evidence",
    definition: "The requirement to show that a piece of evidence is what it claims to be. For digital evidence, this includes demonstrating the source, date, and chain of custody.",
    whyItMatters: "Screenshots and digital files may be challenged without clear source documentation. Courts need assurance that digital evidence has not been altered or fabricated.",
    threadlockIntegration: "ThreadLock preserves upload timestamps and file origin metadata to assist in demonstrating authenticity. Each uploaded file retains its original metadata and upload context.",
    relatedTerms: ["chain-of-custody-digital", "metadata-digital-evidence", "contemporaneous-evidence"],
    relatedJurisdiction: "washington-family-court",
    seoTitle: "Authentication of Evidence in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Learn how to authenticate digital evidence in family court. ThreadLock preserves metadata and timestamps to help demonstrate evidence authenticity."
  },
  {
    term: "Chain of Custody (Digital)",
    slug: "chain-of-custody-digital",
    definition: "Documentation showing who had possession or control of evidence from creation to presentation. For digital evidence, this includes tracking access, modifications, and transfers.",
    whyItMatters: "Breaks in digital custody can weaken evidentiary weight. Courts need assurance that evidence has been properly maintained and not tampered with.",
    threadlockIntegration: "ThreadLock centralizes storage in a single user-controlled environment with access logs. All evidence is stored in one secure location with tracked modifications.",
    relatedTerms: ["authentication-of-evidence", "metadata-digital-evidence", "contemporaneous-evidence"],
    relatedJurisdiction: "texas-family-court",
    seoTitle: "Digital Chain of Custody in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Understand chain of custody requirements for digital evidence. ThreadLock maintains centralized storage with access logs to preserve evidentiary integrity."
  },
  {
    term: "Pattern of Conduct",
    slug: "pattern-of-conduct",
    definition: "A repeated series of behaviors demonstrating consistency over time. In family court, patterns often carry more weight than isolated incidents.",
    whyItMatters: "Family court decisions often hinge on documented behavioral patterns rather than isolated incidents. Demonstrating recurrence helps establish credibility and significance.",
    threadlockIntegration: "Timeline Builder displays repeated events chronologically to demonstrate recurrence. Users can tag similar events and visualize patterns over time.",
    relatedTerms: ["contemporaneous-evidence", "exhibit-index", "burden-of-proof"],
    relatedJurisdiction: "colorado-family-court",
    seoTitle: "Pattern of Conduct in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Learn why patterns of behavior matter in family court. ThreadLock Timeline Builder helps demonstrate recurring events chronologically."
  },
  {
    term: "Burden of Proof (Preponderance Standard)",
    slug: "burden-of-proof",
    definition: "The requirement to show something is more likely than not true (greater than 50% probability). This is the standard used in most family law matters.",
    whyItMatters: "Most family law matters use the preponderance standard, which is lower than the \"beyond reasonable doubt\" standard used in criminal cases. Understanding this helps frame evidence presentation.",
    threadlockIntegration: "ThreadLock organizes evidence chronologically to help demonstrate cumulative weight. By presenting organized, timestamped documentation, users can build a stronger preponderance case.",
    relatedTerms: ["pattern-of-conduct", "best-interests-child", "exhibit-index"],
    relatedJurisdiction: "arizona-family-court",
    seoTitle: "Burden of Proof in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Understand the preponderance of evidence standard in family court. ThreadLock helps organize chronological evidence to meet this burden."
  },
  {
    term: "Best Interests of the Child Standard",
    slug: "best-interests-child",
    definition: "The legal framework courts use to determine custody and parenting decisions. All evidence in custody matters is evaluated through the lens of what serves the child's welfare.",
    whyItMatters: "All custody evidence is evaluated through this lens. Understanding the factors courts consider helps you organize relevant documentation.",
    threadlockIntegration: "ThreadLock categories align with parenting time, education, medical, and communication documentation. Users can organize evidence by relevant child welfare factors.",
    relatedTerms: ["pattern-of-conduct", "burden-of-proof", "affidavit-declaration"],
    relatedJurisdiction: "florida-family-court",
    seoTitle: "Best Interests of the Child Standard | ThreadLock Legal Glossary",
    metaDescription: "Learn how courts evaluate custody through the best interests standard. ThreadLock organizes evidence by parenting, education, and medical categories."
  },
  {
    term: "Exhibit Index",
    slug: "exhibit-index",
    definition: "A structured list of documents submitted as court exhibits. An exhibit index provides a roadmap to your evidence, typically numbered or lettered sequentially.",
    whyItMatters: "Disorganized submissions reduce clarity and credibility. A clear exhibit index helps judges quickly locate and evaluate your evidence.",
    threadlockIntegration: "ThreadLock export tools generate labeled, chronological exhibit bundles. Users can export organized evidence packages with automatic indexing.",
    relatedTerms: ["affidavit-declaration", "metadata-digital-evidence", "pattern-of-conduct"],
    relatedJurisdiction: "new-york-family-court",
    seoTitle: "Exhibit Index for Family Court | ThreadLock Legal Glossary",
    metaDescription: "Learn how to create an effective exhibit index for family court. ThreadLock generates labeled, chronological exhibit bundles automatically."
  },
  {
    term: "Affidavit / Declaration",
    slug: "affidavit-declaration",
    definition: "A sworn written statement submitted to the court. Affidavits are notarized; declarations are signed under penalty of perjury. Both carry legal weight as testimony.",
    whyItMatters: "Supporting documentation strengthens declarations. Courts give more weight to sworn statements backed by contemporaneous evidence.",
    threadlockIntegration: "Users can attach tagged evidence directly to draft declarations for reference. ThreadLock helps organize supporting documentation alongside written statements.",
    relatedTerms: ["exhibit-index", "contemporaneous-evidence", "best-interests-child"],
    relatedJurisdiction: "illinois-family-court",
    seoTitle: "Affidavits and Declarations in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Understand affidavits and declarations in family court. ThreadLock helps organize supporting evidence for sworn statements."
  },
  {
    term: "Metadata (Digital Evidence)",
    slug: "metadata-digital-evidence",
    definition: "Embedded data showing when and how a digital file was created or modified. Metadata includes timestamps, device information, location data, and edit history.",
    whyItMatters: "Metadata may support or undermine authenticity. Courts increasingly examine metadata to verify the origin and integrity of digital evidence.",
    threadlockIntegration: "ThreadLock retains file timestamps and preserves original upload state. When you upload evidence, metadata is captured and maintained for authentication purposes.",
    relatedTerms: ["authentication-of-evidence", "chain-of-custody-digital", "contemporaneous-evidence"],
    relatedJurisdiction: "georgia-family-court",
    seoTitle: "Digital Evidence Metadata in Family Court | ThreadLock Legal Glossary",
    metaDescription: "Learn why metadata matters for digital evidence in family court. ThreadLock preserves file timestamps and origin data for authentication."
  }
];

// ============================================================================
// Helper Functions
// ============================================================================

export function getLegalGlossaryTermBySlug(slug: string): LegalGlossaryTerm | undefined {
  return LEGAL_GLOSSARY.find(term => term.slug === slug);
}

export function getAllLegalGlossarySlugs(): string[] {
  return LEGAL_GLOSSARY.map(term => term.slug);
}
