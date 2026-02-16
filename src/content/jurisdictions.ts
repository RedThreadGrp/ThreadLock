// file: src/content/jurisdictions.ts
// Jurisdiction-specific evidence organization guides for family courts

// ============================================================================
// Type Definitions
// ============================================================================

export type JurisdictionGuide = {
  state: string;
  slug: string;
  filingRules: string;
  formattingRequirements: string;
  commonMistakes: string;
  threadlockAlignment: string;
  relatedGlossary: string[]; // slugs of glossary terms
  seoTitle: string;
  metaDescription: string;
};

// ============================================================================
// Jurisdiction Guides
// ============================================================================

export const JURISDICTION_GUIDES: JurisdictionGuide[] = [
  {
    state: "Oregon",
    slug: "oregon-family-court",
    filingRules: "Oregon family courts follow Uniform Trial Court Rules (UTCR) for evidence submission. Electronic filing is mandatory in most counties. Documents must meet specific formatting standards including font size (12-point minimum), margin requirements (1 inch), and page numbering.",
    formattingRequirements: "All exhibits must be clearly labeled with sequential numbers or letters. PDF format is required for electronic submissions. File names should clearly identify the document (e.g., Exhibit-A-Text-Messages.pdf). Multi-page documents should include page numbers. Color documents are acceptable if relevant to the evidence.",
    commonMistakes: "Failing to include exhibit labels on submitted documents. Submitting documents in formats other than PDF. Missing page numbers on multi-page exhibits. Unclear file naming that makes documents difficult to identify. Submitting exhibits without a corresponding index or table of contents.",
    threadlockAlignment: "ThreadLock Timeline Builder generates chronological evidence packages that align with UTCR formatting standards. The export feature automatically creates labeled PDFs with sequential numbering. Document tagging helps organize evidence by category before export.",
    relatedGlossary: ["exhibit-index", "contemporaneous-evidence", "authentication-of-evidence"],
    seoTitle: "Oregon Family Court Evidence Guide | ThreadLock",
    metaDescription: "Learn how to organize evidence for Oregon family courts. ThreadLock Timeline Builder aligns with UTCR formatting standards for electronic filing."
  },
  {
    state: "Washington",
    slug: "washington-family-court",
    filingRules: "Washington State family courts use the General Rule 30 (GR 30) for mandatory electronic filing. All documents must be filed through the approved e-filing system. Declarations under penalty of perjury are commonly used instead of notarized affidavits. Courts require specific formatting including caption requirements and signature blocks.",
    formattingRequirements: "Exhibits must be labeled alphabetically or numerically. Each exhibit should begin on a new page. Cover sheets are required for most filings. Font must be at least 12-point for body text. Line spacing should be double-spaced for pleadings. Margins must be at least 1 inch on all sides.",
    commonMistakes: "Incorrect caption formatting. Missing declaration language (under penalty of perjury). Exhibits not starting on separate pages. Failure to include proper signature blocks. Submitting exhibits without a declaration of service showing all parties were notified.",
    threadlockAlignment: "ThreadLock exhibit export feature generates properly labeled exhibits with automatic alphabetical or numerical sequencing. The declaration attachment feature helps organize supporting documentation alongside sworn statements. Export tools ensure each exhibit begins on a new page as required by GR 30.",
    relatedGlossary: ["affidavit-declaration", "exhibit-index", "authentication-of-evidence"],
    seoTitle: "Washington Family Court Evidence Guide | ThreadLock",
    metaDescription: "Organize evidence for Washington State family courts. ThreadLock aligns with GR 30 e-filing requirements for declarations and exhibit labeling."
  },
  {
    state: "California",
    slug: "california-family-court",
    filingRules: "California family courts operate under the California Rules of Court. Electronic filing is available in most counties. Family law cases use specific FL-series forms. All evidence must be properly authenticated and exhibits must be organized according to local court rules which may vary by county.",
    formattingRequirements: "Standard formatting includes 12-point font, double spacing for pleadings, and 1-inch margins. Exhibits should be clearly labeled and indexed. Judicial Council forms (FL forms) must be used for standard filings. Declarations must include proper certification language. Exhibits attached to FL forms must be clearly referenced.",
    commonMistakes: "Using incorrect or outdated FL forms. Failing to attach required exhibits to forms. Missing judicial council form numbers. Improper authentication of text messages and digital evidence. Not following county-specific local rules in addition to statewide rules.",
    threadlockAlignment: "ThreadLock document tagging system helps organize evidence by FL form categories (custody, support, property, etc.). Export features generate properly labeled exhibits that can be attached to FL forms. Timeline tools help establish chronology required for many family law declarations.",
    relatedGlossary: ["exhibit-index", "authentication-of-evidence", "hearsay-family-court"],
    seoTitle: "California Family Court Evidence Guide | ThreadLock",
    metaDescription: "Learn California family court evidence requirements. ThreadLock document tagging aligns with FL forms and exhibit attachment standards."
  },
  {
    state: "Texas",
    slug: "texas-family-court",
    filingRules: "Texas family courts follow the Texas Rules of Civil Procedure for evidence submission. Electronic filing is available through the statewide e-filing system. Evidence must comply with Texas Rules of Evidence. Courts require proper exhibit marking and authentication for digital evidence.",
    formattingRequirements: "Exhibits should be numbered sequentially. Documents must be legible and properly formatted for electronic submission. Font size minimum is 12-point. Margins must be at least 1 inch. Multi-page exhibits require page numbering. Exhibits must be accompanied by an exhibit list identifying each piece of evidence.",
    commonMistakes: "Failing to properly authenticate text messages and social media evidence. Missing exhibit lists or indexes. Not providing proper foundation for digital evidence. Submitting exhibits without clear identification or labeling. Failing to serve opposing party with complete exhibit copies in advance of hearings.",
    threadlockAlignment: "ThreadLock structured export feature generates numbered exhibit packages with accompanying indexes. Authentication features help preserve metadata and source information for digital evidence. Centralized storage ensures all exhibits are readily available for timely service to opposing parties.",
    relatedGlossary: ["chain-of-custody-digital", "metadata-digital-evidence", "exhibit-index"],
    seoTitle: "Texas Family Court Evidence Guide | ThreadLock",
    metaDescription: "Organize evidence for Texas family courts. ThreadLock structured export aligns with Texas Rules of Civil Procedure for exhibit submission."
  },
  {
    state: "Colorado",
    slug: "colorado-family-court",
    filingRules: "Colorado family courts follow the Colorado Rules of Civil Procedure. Electronic filing is mandatory in most judicial districts. Courts emphasize case management and organization of evidence. Exhibits must be properly authenticated and organized chronologically or by category.",
    formattingRequirements: "All documents must use 12-point font and standard margins (1 inch). Exhibits should be clearly labeled and indexed. Multi-page documents require page numbering. Electronic submissions must be in PDF format. Cover sheets are required for most filings and must include case information.",
    commonMistakes: "Poor organization of exhibits making it difficult for judges to follow the case narrative. Missing or incomplete exhibit indexes. Failure to authenticate digital evidence properly. Not following local court rules which can vary significantly between judicial districts. Submitting evidence without clear chronological or categorical organization.",
    threadlockAlignment: "ThreadLock case management features help organize evidence chronologically and by category. Timeline Builder creates clear narrative flow that judges can easily follow. Export tools generate properly formatted PDFs with automatic indexing and labeling. Document categorization aligns with Colorado court requirements for organized submission.",
    relatedGlossary: ["pattern-of-conduct", "exhibit-index", "contemporaneous-evidence"],
    seoTitle: "Colorado Family Court Evidence Guide | ThreadLock",
    metaDescription: "Learn Colorado family court evidence standards. ThreadLock Timeline Builder organizes chronological exhibits aligned with case management requirements."
  },
  {
    state: "Arizona",
    slug: "arizona-family-court",
    filingRules: "Arizona family courts operate under the Arizona Rules of Family Law Procedure. Electronic filing is mandatory in most counties. Courts use specific family law forms and require strict compliance with formatting rules. Evidence must be properly authenticated, especially digital communications.",
    formattingRequirements: "Standard court formatting requires 12-point font, double spacing for pleadings, and 1-inch margins. Exhibits must be labeled clearly (typically alphabetically). Each exhibit should be separated and identified. PDF format is required for electronic filings. Judicial branch forms must be used for standard filings.",
    commonMistakes: "Using incorrect or outdated court forms. Failing to properly authenticate screenshots and digital evidence. Missing exhibit tabs or labels. Poor organization making it difficult to locate specific evidence. Not complying with county-specific local rules in addition to statewide requirements.",
    threadlockAlignment: "ThreadLock authentication features preserve metadata for digital evidence commonly used in Arizona family court. Export tools generate properly labeled exhibits with clear separation between documents. Document organization features help comply with both statewide and local court requirements.",
    relatedGlossary: ["burden-of-proof", "authentication-of-evidence", "metadata-digital-evidence"],
    seoTitle: "Arizona Family Court Evidence Guide | ThreadLock",
    metaDescription: "Understand Arizona family court evidence requirements. ThreadLock preserves metadata and organizes exhibits for proper authentication."
  },
  {
    state: "Florida",
    slug: "florida-family-court",
    filingRules: "Florida family courts follow the Florida Family Law Rules of Procedure. Electronic filing through the Florida Courts E-Filing Portal is mandatory statewide. Courts use standardized family law forms. All evidence must meet authentication requirements, particularly for digital evidence and social media.",
    formattingRequirements: "Documents must use 12-point font with 1-inch margins. Line spacing should be double-spaced for pleadings. Exhibits should be labeled sequentially. Each exhibit must be clearly identified and organized. Supreme Court approved family law forms must be used when applicable. Proper signature blocks are required.",
    commonMistakes: "Using non-approved forms or outdated versions. Improper authentication of text messages and emails. Missing or incomplete financial affidavits in support cases. Failure to properly serve exhibits on opposing party. Not organizing exhibits in a way that clearly supports the case narrative.",
    threadlockAlignment: "ThreadLock categorization aligns with Florida's emphasis on parenting time, education, medical, and financial documentation. Timeline tools help establish patterns required in custody and support cases. Export features generate organized exhibit packages that support clear case narratives as Florida courts prefer.",
    relatedGlossary: ["best-interests-child", "pattern-of-conduct", "affidavit-declaration"],
    seoTitle: "Florida Family Court Evidence Guide | ThreadLock",
    metaDescription: "Learn Florida family court evidence procedures. ThreadLock organizes parenting time and financial documentation aligned with Florida Rules."
  },
  {
    state: "New York",
    slug: "new-york-family-court",
    filingRules: "New York family courts operate under the Family Court Act and Uniform Rules for Trial Courts. Electronic filing (NYSCEF) is used in many counties. Courts require specific forms and procedures for different case types. Evidence must be properly marked and authenticated.",
    formattingRequirements: "Exhibits must be clearly labeled and numbered. Documents should use standard formatting with legible fonts (12-point minimum). Margins should be at least 1 inch. Multi-page exhibits require consecutive page numbering. Electronic filings must meet NYSCEF technical requirements including PDF format and file size limits.",
    commonMistakes: "Failing to use required court forms for specific case types. Improper exhibit numbering or labeling. Missing authentication for digital evidence. Not complying with NYSCEF technical requirements for electronic filing. Submitting exhibits without proper indexes or tables of contents.",
    threadlockAlignment: "ThreadLock exhibit index generation creates structured document lists that align with New York court requirements. Automated labeling and numbering reduces formatting errors. Document storage ensures files meet NYSCEF technical specifications. Organization tools help manage the detailed documentation New York courts expect.",
    relatedGlossary: ["exhibit-index", "authentication-of-evidence", "affidavit-declaration"],
    seoTitle: "New York Family Court Evidence Guide | ThreadLock",
    metaDescription: "Organize evidence for New York family courts. ThreadLock exhibit tools align with NYSCEF requirements and court formatting standards."
  },
  {
    state: "Illinois",
    slug: "illinois-family-court",
    filingRules: "Illinois family courts follow the Illinois Code of Civil Procedure. Electronic filing is mandatory in most counties. Courts use standardized forms for family law matters. Evidence must be properly authenticated and organized. Affidavits and verifications are commonly required.",
    formattingRequirements: "Standard formatting includes 12-point font, double spacing for pleadings, and 1-inch margins. Exhibits should be labeled clearly (typically using letters). Each exhibit should be separated and identified. Cover sheets must include case numbers and court information. Signature blocks must follow specific format requirements.",
    commonMistakes: "Missing required verifications on pleadings. Improper format for affidavits. Exhibits not properly separated or labeled. Failure to include complete case information on cover sheets. Not authenticating digital evidence such as text messages and social media posts properly.",
    threadlockAlignment: "ThreadLock declaration attachment feature helps organize evidence alongside affidavits and verifications. Export tools ensure exhibits are properly separated and labeled as Illinois courts require. Document organization features help maintain complete case documentation for cover sheet requirements.",
    relatedGlossary: ["affidavit-declaration", "authentication-of-evidence", "exhibit-index"],
    seoTitle: "Illinois Family Court Evidence Guide | ThreadLock",
    metaDescription: "Learn Illinois family court evidence standards. ThreadLock organizes exhibits and declarations aligned with Illinois Code of Civil Procedure."
  },
  {
    state: "Georgia",
    slug: "georgia-family-court",
    filingRules: "Georgia family courts follow the Georgia Uniform Superior Court Rules. Electronic filing (Georgia's PeachCourt) is available in many counties. Courts require specific forms for family law matters. Evidence must meet authentication standards, especially for digital communications and electronic records.",
    formattingRequirements: "Documents must use standard formatting with 12-point font and 1-inch margins. Exhibits should be labeled and organized clearly. PDF format is required for electronic filings. Each exhibit must be identifiable and properly referenced in supporting pleadings. Multi-page exhibits need consecutive page numbering.",
    commonMistakes: "Failing to properly authenticate text messages and digital evidence. Poor organization of exhibits. Missing labels or exhibit numbers. Not following county-specific procedures in addition to uniform rules. Incomplete or missing verification language on required documents.",
    threadlockAlignment: "ThreadLock metadata preservation features support Georgia's authentication requirements for digital evidence. Export tools generate properly formatted PDFs ready for PeachCourt submission. Organization features help comply with both uniform rules and county-specific requirements. Timeline tools establish clear chronology valued by Georgia courts.",
    relatedGlossary: ["metadata-digital-evidence", "chain-of-custody-digital", "contemporaneous-evidence"],
    seoTitle: "Georgia Family Court Evidence Guide | ThreadLock",
    metaDescription: "Understand Georgia family court evidence procedures. ThreadLock preserves metadata and organizes exhibits for PeachCourt electronic filing."
  }
];

// ============================================================================
// Helper Functions
// ============================================================================

export function getJurisdictionGuideBySlug(slug: string): JurisdictionGuide | undefined {
  return JURISDICTION_GUIDES.find(guide => guide.slug === slug);
}

export function getAllJurisdictionSlugs(): string[] {
  return JURISDICTION_GUIDES.map(guide => guide.slug);
}
