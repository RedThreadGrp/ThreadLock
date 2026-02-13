# ThreadLock Master Resource Directory – Canonical Spec

## Purpose

This document is the authoritative source of truth for:

- All external resource links displayed on `/resources`
- Their categorization
- Jurisdiction mapping
- Authority level
- Tagging metadata

This file MUST be updated before modifying the external resource registry in code.

No external resource may be added directly in TypeScript without first appearing here.

---

## Governance Rules

1. Only canonical URLs (no Google search redirect links).
2. HTTPS required unless explicitly allowlisted.
3. One entry per unique URL.
4. Each state/territory must have:
   - One Court Self-Help Portal
   - One Statewide Legal Aid Hub
5. If replacing a URL:
   - Keep the same ID in code.
   - Document change in changelog section below.
6. Categories are fixed. Do not invent new ones without updating this spec.

---

## Category Definitions

### `court-videos`
Official court-run instructional media or self-help education pages.

### `child-support`
Official state calculators or guideline manuals used by courts.

### `state-directory-court`
Official state or territory court self-help portals.

### `state-directory-legal-aid`
Statewide nonprofit legal aid hubs.

### `legal-knowledge`
Free research databases, statute libraries, or case law repositories.

### `co-parenting`
Communication and scheduling tools for family law logistics.

### `admin-tools`
Administrative utilities useful for legal case management.

### `specialized-support`
Topic-specific national support networks (military, elder law, etc.).

---

# 🏛️ Jurisdictional Resources

---

## Court Process & Educational Media

| Jurisdiction | Category        | Authority  | URL |
|-------------|-----------------|------------|-----|
| AL | court-videos | official | https://judicial.alabama.gov/SelfHelp |
| AK | court-videos | official | https://courts.alaska.gov/shc/family/support.htm |
| AZ | court-videos | official | https://www.youtube.com/%40ArizonaSupremeCourt |
| AR | court-videos | official | https://www.youtube.com/@ArkansasJudiciary |
| CA | court-videos | official | https://www.youtube.com/%40CaliforniaCourts |
| CO | court-videos | official | https://www.youtube.com/%40ColoradoJudicial |
| CT | court-videos | official | https://www.youtube.com/@CTJudicialBranch |
| DE | court-videos | official | https://courts.delaware.gov/selfhelp/ |
| DC | court-videos | official | https://www.youtube.com/%40DCCourts |
| FL | court-videos | official | https://www.youtube.com/%40FloridaCourts |
| GA | court-videos | official | https://georgiacourts.gov/self-help/ |
| HI | court-videos | official | https://www.youtube.com/%40HawaiiCourts |
| ID | court-videos | official | https://www.youtube.com/%40IdahoCourts |
| IL | court-videos | official | https://www.youtube.com/@IllinoisCourts |
| IN | court-videos | official | https://www.youtube.com/%40IndianaCourts |
| IA | court-videos | official | https://www.youtube.com/%40IowaCourts |
| KS | court-videos | official | https://www.youtube.com/%40KansasJudiciary |
| KY | court-videos | official | https://www.youtube.com/@KentuckyCourts |
| LA | court-videos | official | https://www.youtube.com/%40LouisianaSupremeCourt |
| ME | court-videos | official | https://www.youtube.com/%40MaineCourts |
| MD | court-videos | official | https://www.youtube.com/@MarylandCourts |
| MA | court-videos | official | https://www.youtube.com/%40MassCourts |
| MI | court-videos | official | https://www.youtube.com/%40MichiganCourts |
| MN | court-videos | official | https://www.youtube.com/%40MNCourts |
| MS | court-videos | official | https://www.youtube.com/%40MississippiCourts |
| MO | court-videos | official | https://www.youtube.com/%40MissouriCourts |
| MT | court-videos | official | https://www.youtube.com/%40MontanaCourts |
| NE | court-videos | official | https://supremecourt.nebraska.gov/self-help |
| NV | court-videos | official | https://www.youtube.com/%40NevadaCourts |
| NH | court-videos | official | https://www.youtube.com/%40NHCourts |
| NJ | court-videos | official | https://www.youtube.com/%40NJCourts |
| NM | court-videos | official | https://www.youtube.com/%40NMCourts |
| NY | court-videos | official | https://www.youtube.com/%40nycourts |
| NC | court-videos | official | https://www.youtube.com/%40NCCourts |
| ND | court-videos | official | https://www.youtube.com/%40NDCourts |
| OH | court-videos | official | https://www.youtube.com/%40OhioCourts |
| OK | court-videos | official | https://www.youtube.com/%40OklahomaCourts |
| OR | court-videos | official | https://www.youtube.com/%40OregonJudicialDepartment |
| PA | court-videos | official | https://www.youtube.com/%40PACourts |
| RI | court-videos | official | https://www.youtube.com/%40RICourts |
| SC | court-videos | official | https://www.youtube.com/%40SCCourts |
| SD | court-videos | official | https://www.youtube.com/%40SDCourts |
| TN | court-videos | official | https://www.youtube.com/@TNCourts |
| TX | court-videos | official | https://www.youtube.com/@TexasCourts |
| UT | court-videos | official | https://www.youtube.com/%40UtahCourts |
| VT | court-videos | official | https://www.youtube.com/%40VTCourts |
| VA | court-videos | official | https://www.youtube.com/%40VACourts |
| WA | court-videos | official | https://www.youtube.com/%40WashingtonCourts |
| WV | court-videos | official | https://www.youtube.com/%40WVCourts |
| WI | court-videos | official | https://www.youtube.com/%40WICourts |
| WY | court-videos | official | https://www.youtube.com/%40WYCourts |
| AS/GU/MP/PR/VI | court-videos | official | https://www.youtube.com/%40USCourts |

---

# 🗺️ National Legal Aid Hubs

(Continue using the same table format for all states and territories.)

Each jurisdiction MUST include:
- One `state-directory-court`
- One `state-directory-legal-aid`

---

# 🦾 National Tools (US)

| Title | Category | Authority | URL |
|--------|----------|------------|-----|
| Google Scholar | legal-knowledge | official | https://scholar.google.com |
| CourtListener | legal-knowledge | nonprofit | https://www.courtlistener.com |
| Cornell LII | legal-knowledge | nonprofit | https://www.law.cornell.edu |
| Justia | legal-knowledge | private | https://www.justia.com |
| Nolo | legal-knowledge | private | https://www.nolo.com |
| LawHelp Interactive | legal-knowledge | nonprofit | https://lawhelpinteractive.org |
| OurFamilyWizard | co-parenting | private | https://www.ourfamilywizard.com |
| TalkingParents | co-parenting | private | https://talkingparents.com |
| Custody X Change | co-parenting | private | https://www.custodyxchange.com |
| UpToParents | co-parenting | nonprofit | https://uptoparents.org |
| Children in Between | co-parenting | nonprofit | https://online.divorce-education.com |
| Otter.ai | admin-tools | private | https://otter.ai |
| PDFgear | admin-tools | private | https://www.pdfgear.com |
| Grammarly | admin-tools | private | https://www.grammarly.com |
| Toggl Track | admin-tools | private | https://toggl.com |
| WayBack Machine | admin-tools | nonprofit | https://archive.org |
| Stateside Legal | specialized-support | nonprofit | https://www.statesidelegal.org |
| Eldercare Locator | specialized-support | official | https://eldercare.acl.gov |
| ABA Consumer Guides | specialized-support | nonprofit | https://www.americanbar.org/groups/public_education/resources/law_issues_for_consumers/ |

---

# 🔒 Standard Disclaimer (Canonical)

ThreadLock is not a law firm and does not provide legal advice. These resources are provided for informational purposes only. Court rules and procedures vary by jurisdiction. Always verify requirements directly with your local court or a licensed attorney.

---

# 📝 Changelog

## YYYY-MM-DD
- Added:
- Updated:
- Removed:
- Notes:
