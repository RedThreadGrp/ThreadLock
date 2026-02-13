// file: src/content/externalResources.registry.ts
// External resources registry for the Official & Free Resource Directory
// Links must be canonical URLs from authoritative sources

export type ResourceAuthority = "official" | "nonprofit" | "private";

export type ResourceCategory =
  | "state-directory-court"
  | "state-directory-legal-aid"
  | "court-videos"
  | "child-support"
  | "national-legal-aid"
  | "general-tools"
  | "innovative-tools";

export interface ExternalResource {
  id: string; // Format: {category}.{jurisdiction}.{shortSlug}
  title: string;
  url: string;
  category: ResourceCategory;
  jurisdiction: string; // State/territory code (e.g., "CA", "TX") or "US" for national
  authority: ResourceAuthority;
  description?: string;
  lastVerified?: string; // ISO date string when link was last checked
}

// ============================================================================
// EXTERNAL RESOURCES - Authoritative Links Only
// ============================================================================
// These links are from official government sources, established nonprofits,
// and vetted third-party tools. No Google redirect links.
// ============================================================================

export const EXTERNAL_RESOURCES: ExternalResource[] = [
  // State Directory - Court Self-Help (one per jurisdiction)
  {
    id: "state-directory-court.AL.self-help",
    title: "Alabama Courts Self-Help",
    url: "https://judicial.alabama.gov/Forms",
    category: "state-directory-court",
    jurisdiction: "AL",
    authority: "official",
  },
  {
    id: "state-directory-court.AK.self-help",
    title: "Alaska Court System Self-Help",
    url: "https://courts.alaska.gov/shc/",
    category: "state-directory-court",
    jurisdiction: "AK",
    authority: "official",
  },
  {
    id: "state-directory-court.AZ.self-help",
    title: "Arizona Self-Service Center",
    url: "https://superiorcourt.maricopa.gov/self-service-center/",
    category: "state-directory-court",
    jurisdiction: "AZ",
    authority: "official",
  },
  {
    id: "state-directory-court.AR.self-help",
    title: "Arkansas Judiciary Forms",
    url: "https://www.arcourts.gov/forms",
    category: "state-directory-court",
    jurisdiction: "AR",
    authority: "official",
  },
  {
    id: "state-directory-court.CA.self-help",
    title: "California Courts Self-Help",
    url: "https://www.courts.ca.gov/selfhelp.htm",
    category: "state-directory-court",
    jurisdiction: "CA",
    authority: "official",
  },
  {
    id: "state-directory-court.CO.self-help",
    title: "Colorado Judicial Branch Self-Help",
    url: "https://www.courts.state.co.us/Self_Help/",
    category: "state-directory-court",
    jurisdiction: "CO",
    authority: "official",
  },
  {
    id: "state-directory-court.CT.self-help",
    title: "Connecticut Judicial Branch Self-Help",
    url: "https://jud.ct.gov/selfhelp.htm",
    category: "state-directory-court",
    jurisdiction: "CT",
    authority: "official",
  },
  {
    id: "state-directory-court.DE.self-help",
    title: "Delaware Courts Self-Help",
    url: "https://courts.delaware.gov/family/",
    category: "state-directory-court",
    jurisdiction: "DE",
    authority: "official",
  },
  {
    id: "state-directory-court.FL.self-help",
    title: "Florida Courts Self-Help",
    url: "https://www.flcourts.org/Resources-Services/Court-Improvement/Family-Courts/Family-Law-Self-Help-Information",
    category: "state-directory-court",
    jurisdiction: "FL",
    authority: "official",
  },
  {
    id: "state-directory-court.GA.self-help",
    title: "Georgia Courts Self-Help",
    url: "https://georgiacourts.gov/self-help/",
    category: "state-directory-court",
    jurisdiction: "GA",
    authority: "official",
  },
  {
    id: "state-directory-court.HI.self-help",
    title: "Hawaii State Judiciary Self-Help",
    url: "https://www.courts.state.hi.us/self-help",
    category: "state-directory-court",
    jurisdiction: "HI",
    authority: "official",
  },
  {
    id: "state-directory-court.ID.self-help",
    title: "Idaho Courts Self-Help",
    url: "https://isc.idaho.gov/self-help",
    category: "state-directory-court",
    jurisdiction: "ID",
    authority: "official",
  },
  {
    id: "state-directory-court.IL.self-help",
    title: "Illinois Courts Self-Help",
    url: "https://www.illinoiscourts.gov/self-help/",
    category: "state-directory-court",
    jurisdiction: "IL",
    authority: "official",
  },
  {
    id: "state-directory-court.IN.self-help",
    title: "Indiana Courts Self-Help",
    url: "https://www.in.gov/courts/selfservice/",
    category: "state-directory-court",
    jurisdiction: "IN",
    authority: "official",
  },
  {
    id: "state-directory-court.IA.self-help",
    title: "Iowa Courts Forms",
    url: "https://www.iowacourts.gov/for-the-public/representing-yourself/",
    category: "state-directory-court",
    jurisdiction: "IA",
    authority: "official",
  },
  {
    id: "state-directory-court.KS.self-help",
    title: "Kansas Judicial Branch Self-Help",
    url: "https://www.kscourts.org/Kansas-Courts/Self-Help",
    category: "state-directory-court",
    jurisdiction: "KS",
    authority: "official",
  },
  {
    id: "state-directory-court.KY.self-help",
    title: "Kentucky Courts Self-Help",
    url: "https://kycourts.gov/aoc/forms/Pages/default.aspx",
    category: "state-directory-court",
    jurisdiction: "KY",
    authority: "official",
  },
  {
    id: "state-directory-court.LA.self-help",
    title: "Louisiana Courts Self-Help",
    url: "https://www.lasc.org/representing_yourself/forms_index.asp",
    category: "state-directory-court",
    jurisdiction: "LA",
    authority: "official",
  },
  {
    id: "state-directory-court.ME.self-help",
    title: "Maine Courts Forms & Guides",
    url: "https://www.courts.maine.gov/maine-courts/family/",
    category: "state-directory-court",
    jurisdiction: "ME",
    authority: "official",
  },
  {
    id: "state-directory-court.MD.self-help",
    title: "Maryland Courts Self-Help",
    url: "https://www.mdcourts.gov/legalhelp",
    category: "state-directory-court",
    jurisdiction: "MD",
    authority: "official",
  },
  {
    id: "state-directory-court.MA.self-help",
    title: "Massachusetts Court System Self-Help",
    url: "https://www.mass.gov/guides/representing-yourself-in-a-civil-case",
    category: "state-directory-court",
    jurisdiction: "MA",
    authority: "official",
  },
  {
    id: "state-directory-court.MI.self-help",
    title: "Michigan Courts Self-Help",
    url: "https://www.courts.michigan.gov/self-help/",
    category: "state-directory-court",
    jurisdiction: "MI",
    authority: "official",
  },
  {
    id: "state-directory-court.MN.self-help",
    title: "Minnesota Judicial Branch Self-Help",
    url: "https://www.mncourts.gov/Help-Topics/Family-Law.aspx",
    category: "state-directory-court",
    jurisdiction: "MN",
    authority: "official",
  },
  {
    id: "state-directory-court.MS.self-help",
    title: "Mississippi Courts Forms",
    url: "https://courts.ms.gov/research/forms/forms.php",
    category: "state-directory-court",
    jurisdiction: "MS",
    authority: "official",
  },
  {
    id: "state-directory-court.MO.self-help",
    title: "Missouri Courts Self-Help",
    url: "https://www.courts.mo.gov/page.jsp?id=693",
    category: "state-directory-court",
    jurisdiction: "MO",
    authority: "official",
  },
  {
    id: "state-directory-court.MT.self-help",
    title: "Montana Courts Self-Help",
    url: "https://courts.mt.gov/selfhelp",
    category: "state-directory-court",
    jurisdiction: "MT",
    authority: "official",
  },
  {
    id: "state-directory-court.NE.self-help",
    title: "Nebraska Judicial Branch Self-Help",
    url: "https://supremecourt.nebraska.gov/self-help",
    category: "state-directory-court",
    jurisdiction: "NE",
    authority: "official",
  },
  {
    id: "state-directory-court.NV.self-help",
    title: "Nevada Courts Self-Help",
    url: "https://www.nevadajudiciary.us/index.php/self-help",
    category: "state-directory-court",
    jurisdiction: "NV",
    authority: "official",
  },
  {
    id: "state-directory-court.NH.self-help",
    title: "New Hampshire Courts Self-Help",
    url: "https://www.courts.nh.gov/forms",
    category: "state-directory-court",
    jurisdiction: "NH",
    authority: "official",
  },
  {
    id: "state-directory-court.NJ.self-help",
    title: "New Jersey Courts Self-Help",
    url: "https://www.njcourts.gov/self-help",
    category: "state-directory-court",
    jurisdiction: "NJ",
    authority: "official",
  },
  {
    id: "state-directory-court.NM.self-help",
    title: "New Mexico Courts Self-Help",
    url: "https://www.nmcourts.gov/self-help.aspx",
    category: "state-directory-court",
    jurisdiction: "NM",
    authority: "official",
  },
  {
    id: "state-directory-court.NY.self-help",
    title: "New York Courts DIY Forms",
    url: "https://nycourts.gov/courthelp/",
    category: "state-directory-court",
    jurisdiction: "NY",
    authority: "official",
  },
  {
    id: "state-directory-court.NC.self-help",
    title: "North Carolina Courts Self-Help",
    url: "https://www.nccourts.gov/help-topics/family-and-children",
    category: "state-directory-court",
    jurisdiction: "NC",
    authority: "official",
  },
  {
    id: "state-directory-court.ND.self-help",
    title: "North Dakota Courts Self-Help",
    url: "https://www.ndcourts.gov/legal-self-help",
    category: "state-directory-court",
    jurisdiction: "ND",
    authority: "official",
  },
  {
    id: "state-directory-court.OH.self-help",
    title: "Ohio Supreme Court Self-Help",
    url: "https://www.supremecourt.ohio.gov/JCS/selfHelp/default.asp",
    category: "state-directory-court",
    jurisdiction: "OH",
    authority: "official",
  },
  {
    id: "state-directory-court.OK.self-help",
    title: "Oklahoma Courts Self-Help",
    url: "https://oklahoma.gov/oscn/forms.html",
    category: "state-directory-court",
    jurisdiction: "OK",
    authority: "official",
  },
  {
    id: "state-directory-court.OR.self-help",
    title: "Oregon Judicial Department Self-Help",
    url: "https://www.courts.oregon.gov/forms/Pages/default.aspx",
    category: "state-directory-court",
    jurisdiction: "OR",
    authority: "official",
  },
  {
    id: "state-directory-court.PA.self-help",
    title: "Pennsylvania Courts Self-Help",
    url: "https://www.pacourts.us/forms",
    category: "state-directory-court",
    jurisdiction: "PA",
    authority: "official",
  },
  {
    id: "state-directory-court.RI.self-help",
    title: "Rhode Island Courts Self-Help",
    url: "https://www.courts.ri.gov/Courts/FamilyCourt/Pages/default.aspx",
    category: "state-directory-court",
    jurisdiction: "RI",
    authority: "official",
  },
  {
    id: "state-directory-court.SC.self-help",
    title: "South Carolina Courts Self-Help",
    url: "https://www.sccourts.org/selfHelp/",
    category: "state-directory-court",
    jurisdiction: "SC",
    authority: "official",
  },
  {
    id: "state-directory-court.SD.self-help",
    title: "South Dakota Courts Self-Help",
    url: "https://ujs.sd.gov/Forms/",
    category: "state-directory-court",
    jurisdiction: "SD",
    authority: "official",
  },
  {
    id: "state-directory-court.TN.self-help",
    title: "Tennessee Courts Self-Help",
    url: "https://www.tncourts.gov/programs/self-help-center",
    category: "state-directory-court",
    jurisdiction: "TN",
    authority: "official",
  },
  {
    id: "state-directory-court.TX.self-help",
    title: "Texas Law Help",
    url: "https://texaslawhelp.org/",
    category: "state-directory-court",
    jurisdiction: "TX",
    authority: "nonprofit",
  },
  {
    id: "state-directory-court.UT.self-help",
    title: "Utah Courts Self-Help",
    url: "https://www.utcourts.gov/selfhelp/",
    category: "state-directory-court",
    jurisdiction: "UT",
    authority: "official",
  },
  {
    id: "state-directory-court.VT.self-help",
    title: "Vermont Judiciary Self-Help",
    url: "https://www.vermontjudiciary.org/self-help",
    category: "state-directory-court",
    jurisdiction: "VT",
    authority: "official",
  },
  {
    id: "state-directory-court.VA.self-help",
    title: "Virginia Courts Self-Help",
    url: "https://www.vacourts.gov/forms/home.html",
    category: "state-directory-court",
    jurisdiction: "VA",
    authority: "official",
  },
  {
    id: "state-directory-court.WA.self-help",
    title: "Washington Courts Self-Help",
    url: "https://www.courts.wa.gov/programs_orgs/pos_lrs/?fa=pos_lrs.resources",
    category: "state-directory-court",
    jurisdiction: "WA",
    authority: "official",
  },
  {
    id: "state-directory-court.WV.self-help",
    title: "West Virginia Courts Self-Help",
    url: "https://courtswv.gov/lower-courts/family/family-court-forms.html",
    category: "state-directory-court",
    jurisdiction: "WV",
    authority: "official",
  },
  {
    id: "state-directory-court.WI.self-help",
    title: "Wisconsin Courts Self-Help",
    url: "https://www.wicourts.gov/forms1/circuit.htm",
    category: "state-directory-court",
    jurisdiction: "WI",
    authority: "official",
  },
  {
    id: "state-directory-court.WY.self-help",
    title: "Wyoming Courts Self-Help",
    url: "https://www.courts.state.wy.us/legal-assistance/",
    category: "state-directory-court",
    jurisdiction: "WY",
    authority: "official",
  },
  {
    id: "state-directory-court.DC.self-help",
    title: "DC Courts Self-Help",
    url: "https://www.dccourts.gov/services/self-help-forms",
    category: "state-directory-court",
    jurisdiction: "DC",
    authority: "official",
  },
  {
    id: "state-directory-court.GU.self-help",
    title: "Guam Judiciary Forms",
    url: "http://www.guamcourts.org/forms/familycourt.html",
    category: "state-directory-court",
    jurisdiction: "GU",
    authority: "official",
    description: "HTTP only",
  },
  {
    id: "state-directory-court.PR.self-help",
    title: "Puerto Rico Courts",
    url: "https://poderjudicial.pr/index.php/tribunal-de-familia",
    category: "state-directory-court",
    jurisdiction: "PR",
    authority: "official",
  },
  {
    id: "state-directory-court.VI.self-help",
    title: "US Virgin Islands Courts",
    url: "https://vicourts.org/",
    category: "state-directory-court",
    jurisdiction: "VI",
    authority: "official",
  },

  // State Directory - Legal Aid (one per jurisdiction)
  {
    id: "state-directory-legal-aid.AL.legal-aid",
    title: "Alabama Legal Help",
    url: "https://www.alabamalegalhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "AL",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.AK.legal-aid",
    title: "Alaska Legal Services",
    url: "https://www.alsc-law.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "AK",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.AZ.legal-aid",
    title: "Arizona Legal Help",
    url: "https://arizonalawhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "AZ",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.AR.legal-aid",
    title: "Arkansas Legal Aid",
    url: "https://arlegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "AR",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.CA.legal-aid",
    title: "California Legal Aid",
    url: "https://www.lawhelpca.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "CA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.CO.legal-aid",
    title: "Colorado Legal Services",
    url: "https://www.coloradolegalservices.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "CO",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.CT.legal-aid",
    title: "Connecticut Legal Services",
    url: "https://ctlegal.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "CT",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.DE.legal-aid",
    title: "Delaware Legal Help Link",
    url: "https://delegalhelplink.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "DE",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.FL.legal-aid",
    title: "Florida Legal Services",
    url: "https://www.floridalegal.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "FL",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.GA.legal-aid",
    title: "Georgia Legal Aid",
    url: "https://www.georgialegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "GA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.HI.legal-aid",
    title: "Legal Aid Society of Hawaii",
    url: "https://www.legalaidhawaii.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "HI",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.ID.legal-aid",
    title: "Idaho Legal Aid Services",
    url: "https://www.idaholegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "ID",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.IL.legal-aid",
    title: "Illinois Legal Aid Online",
    url: "https://www.illinoislegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "IL",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.IN.legal-aid",
    title: "Indiana Legal Services",
    url: "https://www.indianalegalservices.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "IN",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.IA.legal-aid",
    title: "Iowa Legal Aid",
    url: "https://www.iowalegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "IA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.KS.legal-aid",
    title: "Kansas Legal Services",
    url: "https://www.kansaslegalservices.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "KS",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.KY.legal-aid",
    title: "Kentucky Legal Aid",
    url: "https://www.kyjustice.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "KY",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.LA.legal-aid",
    title: "Southeast Louisiana Legal Services",
    url: "https://slls.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "LA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.ME.legal-aid",
    title: "Pine Tree Legal Assistance",
    url: "https://www.ptla.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "ME",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.MD.legal-aid",
    title: "Maryland Legal Aid",
    url: "https://www.mdlab.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "MD",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.MA.legal-aid",
    title: "Massachusetts Legal Help",
    url: "https://www.masslegalhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "MA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.MI.legal-aid",
    title: "Michigan Legal Help",
    url: "https://michiganlegalhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "MI",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.MN.legal-aid",
    title: "Minnesota Legal Aid",
    url: "https://www.mylegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "MN",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.MS.legal-aid",
    title: "Mississippi Legal Services",
    url: "https://www.mslegalservices.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "MS",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.MO.legal-aid",
    title: "Missouri Legal Aid",
    url: "https://www.lsmo.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "MO",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.MT.legal-aid",
    title: "Montana Legal Services Association",
    url: "https://www.mtlsa.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "MT",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.NE.legal-aid",
    title: "Nebraska Legal Aid",
    url: "https://www.legalaidofnebraska.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "NE",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.NV.legal-aid",
    title: "Nevada Legal Services",
    url: "https://nlslaw.net/",
    category: "state-directory-legal-aid",
    jurisdiction: "NV",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.NH.legal-aid",
    title: "NH Legal Assistance",
    url: "https://www.nhlegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "NH",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.NJ.legal-aid",
    title: "New Jersey Legal Services",
    url: "https://www.lsnj.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "NJ",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.NM.legal-aid",
    title: "New Mexico Legal Aid",
    url: "https://www.nmlegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "NM",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.NY.legal-aid",
    title: "New York LawHelp",
    url: "https://www.lawhelpny.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "NY",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.NC.legal-aid",
    title: "North Carolina Legal Aid",
    url: "https://www.legalaidnc.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "NC",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.ND.legal-aid",
    title: "Legal Assistance of North Dakota",
    url: "https://www.legalassist.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "ND",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.OH.legal-aid",
    title: "Ohio Legal Help",
    url: "https://www.ohiolegalhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "OH",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.OK.legal-aid",
    title: "Legal Aid Services of Oklahoma",
    url: "https://www.legalaidok.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "OK",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.OR.legal-aid",
    title: "Oregon Law Help",
    url: "https://oregonlawhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "OR",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.PA.legal-aid",
    title: "Pennsylvania Legal Aid Network",
    url: "https://palegalaid.net/",
    category: "state-directory-legal-aid",
    jurisdiction: "PA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.RI.legal-aid",
    title: "Rhode Island Legal Services",
    url: "https://www.rils.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "RI",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.SC.legal-aid",
    title: "South Carolina Legal Services",
    url: "https://sclegal.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "SC",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.SD.legal-aid",
    title: "East River Legal Services",
    url: "https://www.erlservices.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "SD",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.TN.legal-aid",
    title: "Tennessee Legal Aid",
    url: "https://www.las.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "TN",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.TX.legal-aid",
    title: "Texas Legal Services",
    url: "https://www.trla.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "TX",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.UT.legal-aid",
    title: "Utah Legal Services",
    url: "https://www.utahlegalservices.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "UT",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.VT.legal-aid",
    title: "Vermont Legal Aid",
    url: "https://vtlawhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "VT",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.VA.legal-aid",
    title: "Virginia Legal Aid",
    url: "https://www.vlas.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "VA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.WA.legal-aid",
    title: "Washington LawHelp",
    url: "https://www.washingtonlawhelp.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "WA",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.WV.legal-aid",
    title: "West Virginia Legal Aid",
    url: "https://legalaidwv.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "WV",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.WI.legal-aid",
    title: "Wisconsin Legal Aid",
    url: "https://www.wislegalaid.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "WI",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.WY.legal-aid",
    title: "Wyoming Legal Aid",
    url: "https://www.wyomingadvocates.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "WY",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.DC.legal-aid",
    title: "DC Legal Aid",
    url: "https://www.lawhelp.org/dc",
    category: "state-directory-legal-aid",
    jurisdiction: "DC",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.GU.legal-aid",
    title: "Guam Legal Services",
    url: "https://www.guamlegalservices.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "GU",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.PR.legal-aid",
    title: "Puerto Rico Legal Services",
    url: "https://www.servicioslegalespr.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "PR",
    authority: "nonprofit",
  },
  {
    id: "state-directory-legal-aid.VI.legal-aid",
    title: "VI Legal Services",
    url: "https://www.legalservicesvi.org/",
    category: "state-directory-legal-aid",
    jurisdiction: "VI",
    authority: "nonprofit",
  },

  // National Legal Aid Hubs
  {
    id: "national-legal-aid.US.lawhelp",
    title: "LawHelp.org National Portal",
    url: "https://www.lawhelp.org/",
    category: "national-legal-aid",
    jurisdiction: "US",
    authority: "nonprofit",
    description: "National directory of local legal aid programs",
    lastVerified: "2026-02-01",
  },
  {
    id: "national-legal-aid.US.lsc",
    title: "Legal Services Corporation",
    url: "https://www.lsc.gov/",
    category: "national-legal-aid",
    jurisdiction: "US",
    authority: "nonprofit",
    description: "Federal legal aid funding organization",
    lastVerified: "2026-02-01",
  },

  // Child Support Resources
  {
    id: "child-support.US.federal",
    title: "Federal Child Support Services",
    url: "https://www.acf.hhs.gov/css",
    category: "child-support",
    jurisdiction: "US",
    authority: "official",
    description: "Federal Office of Child Support Enforcement",
    lastVerified: "2026-01-15",
  },
  
  // General & Innovative Tools
  {
    id: "general-tools.US.uscourts",
    title: "U.S. Courts Forms",
    url: "https://www.uscourts.gov/forms",
    category: "general-tools",
    jurisdiction: "US",
    authority: "official",
    description: "Federal court forms and resources",
    lastVerified: "2026-01-20",
  },
  {
    id: "innovative-tools.US.justicetext",
    title: "JusticeText",
    url: "https://www.justicetext.com/",
    category: "innovative-tools",
    jurisdiction: "US",
    authority: "private",
    description: "AI-powered court document transcription service",
    lastVerified: "2026-02-10",
  },
  {
    id: "innovative-tools.US.courtroom5",
    title: "Courtroom5",
    url: "https://www.courtroom5.com/",
    category: "innovative-tools",
    jurisdiction: "US",
    authority: "private",
    description: "AI legal research and case analysis platform",
    lastVerified: "2026-02-10",
  },
  {
    id: "general-tools.US.nolo",
    title: "Nolo Legal Encyclopedia",
    url: "https://www.nolo.com/legal-encyclopedia",
    category: "general-tools",
    jurisdiction: "US",
    authority: "private",
    description: "Plain-English legal guides and resources",
    lastVerified: "2026-02-05",
  },
  {
    id: "general-tools.US.justia",
    title: "Justia Legal Resources",
    url: "https://www.justia.com/",
    category: "general-tools",
    jurisdiction: "US",
    authority: "private",
    description: "Free legal information and lawyer directory",
    lastVerified: "2026-02-05",
  },
  {
    id: "general-tools.US.findlaw",
    title: "FindLaw",
    url: "https://www.findlaw.com/",
    category: "general-tools",
    jurisdiction: "US",
    authority: "private",
    description: "Legal information, news, and resources",
    lastVerified: "2026-02-01",
  },
  {
    id: "innovative-tools.US.casetext",
    title: "Casetext",
    url: "https://casetext.com/",
    category: "innovative-tools",
    jurisdiction: "US",
    authority: "private",
    description: "AI legal research with free access to case law",
    lastVerified: "2026-02-08",
  },
  {
    id: "general-tools.US.pro-se",
    title: "Pro Se Resources",
    url: "https://www.uscourts.gov/forms/pro-se-forms",
    category: "general-tools",
    jurisdiction: "US",
    authority: "official",
    description: "Federal resources for self-represented litigants",
    lastVerified: "2026-01-25",
  },
];

// Helper function to get unique jurisdictions
export function getUniqueJurisdictions(): string[] {
  const jurisdictions = new Set<string>();
  EXTERNAL_RESOURCES.forEach((resource) => {
    jurisdictions.add(resource.jurisdiction);
  });
  return Array.from(jurisdictions).sort();
}

// Helper function to get resources by jurisdiction
export function getResourcesByJurisdiction(jurisdiction: string): ExternalResource[] {
  return EXTERNAL_RESOURCES.filter((r) => r.jurisdiction === jurisdiction);
}

// Helper function to get resources by category
export function getResourcesByCategory(category: ResourceCategory): ExternalResource[] {
  return EXTERNAL_RESOURCES.filter((r) => r.category === category);
}

// Get state directory entries (court + legal aid) by jurisdiction
export function getStateDirectoryEntry(jurisdiction: string): {
  court: ExternalResource | undefined;
  legalAid: ExternalResource | undefined;
} {
  const court = EXTERNAL_RESOURCES.find(
    (r) => r.jurisdiction === jurisdiction && r.category === "state-directory-court"
  );
  const legalAid = EXTERNAL_RESOURCES.find(
    (r) => r.jurisdiction === jurisdiction && r.category === "state-directory-legal-aid"
  );
  return { court, legalAid };
}

// Get all state directory entries
export function getAllStateDirectoryEntries(): Array<{
  jurisdiction: string;
  court: ExternalResource | undefined;
  legalAid: ExternalResource | undefined;
}> {
  const jurisdictions = getUniqueJurisdictions().filter((j) => j !== "US");
  return jurisdictions.map((j) => ({
    jurisdiction: j,
    ...getStateDirectoryEntry(j),
  }));
}

// Check if a resource link is stale (>6 months since last verification)
export function isLinkStale(resource: ExternalResource): boolean {
  if (!resource.lastVerified) return false;
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const verifiedDate = new Date(resource.lastVerified);
  return verifiedDate < sixMonthsAgo;
}

// Format last verified date for display
export function formatLastVerified(dateString: string | undefined): string {
  if (!dateString) return "Not verified";
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 30) return "Recently verified";
  if (diffDays < 90) return "Verified recently";
  if (diffDays < 180) return `Verified ${Math.floor(diffDays / 30)} months ago`;
  return `Verified ${Math.floor(diffDays / 30)} months ago`;
}
