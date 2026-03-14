# QA Before & After Screenshots

Before and after screenshots for each remediated item. All screenshots taken at 1440×900.

---

## T-15 — Social Media Links

### Footer (`components/Footer.tsx`)

**Change:** Added `noopener` to `rel` attribute on all footer social links (`rel="noreferrer"` → `rel="noopener noreferrer"`). This is a security-only change with no visual difference.

**Before** — `rel="noreferrer"` (missing `noopener`):
![Footer before](https://github.com/user-attachments/assets/d081c770-03ea-4fd8-af05-9077edc8e693)

**After** — `rel="noopener noreferrer"` on all 4 social icons (YouTube, LinkedIn, Instagram, Reddit):
![Footer after](https://github.com/user-attachments/assets/f3e3b238-7819-4c58-b5d7-972125d0f9a4)

---

### Contact Page (`pages/contact.tsx`)

**Change:** Removed broken `href="#"` Facebook link (no verified ThreadLock Facebook page exists). Updated LinkedIn from `href="#"` to `https://www.linkedin.com/company/threadlock`. Added `target="_blank" rel="noopener noreferrer"` to all social links.

**Before** — 5 links shown; Facebook and LinkedIn both point to `href="#"` (go nowhere):
![Contact social media before](https://github.com/user-attachments/assets/4d39b164-dfe5-4285-bc31-6b2a5b98a94f)

**After** — 4 verified links (Facebook removed, LinkedIn now resolves correctly):
![Contact social media after](https://github.com/user-attachments/assets/e3cae054-5984-470c-86a9-c5b992dc1136)

---

## T-18 — Add Evidence Icon

**File:** `pages/index.js`

**Change:** Replaced the visually cluttered 11-path `BrainCircuitIcon` with a clean 4-path `FilePlusIcon` on the "Add Evidence" card in the "How It Works" section.

**Before** — `BrainCircuitIcon` (11 overlapping paths, stacked/messy):
![How It Works icon before](https://github.com/user-attachments/assets/cbfa9d24-334c-416d-ba9f-9925321a6426)

**After** — `FilePlusIcon` (clean document-plus icon, centered and unambiguous):
![How It Works icon after](https://github.com/user-attachments/assets/76a91062-9b94-45c4-ab0b-013590f63f71)

---

## T-26 — DPA Annex: American English Spelling

**File:** `pages/dpa.tsx`

**Change:** Replaced all British English spellings with American English throughout the Data Processing Agreement: `organisation` → `organization`, `authorised` → `authorized`, `unauthorised` → `unauthorized`, `recognised` → `recognized`.

**Before** — British spellings (e.g. "organisational measures", "authorised to process", "unauthorised modification"):
![DPA spelling before](https://github.com/user-attachments/assets/6fc3eae8-92f9-43b7-be4a-fd6b166a806a)

**After** — American English spellings (e.g. "organizational measures", "authorized to process", "unauthorized modification"):
![DPA spelling after](https://github.com/user-attachments/assets/4df61b0c-3548-407d-9638-3dcd7135820d)

---

## T-49 — Date Fallback on Guide Cards

**Files:** `src/components/cards/GuideCard.tsx`, `src/pages/resources/ResourcesPage.tsx`

**Change:** Added `?? "TBD"` fallback so the "Updated" field always renders a value instead of being blank when the date is not set.

**Before** — No date shown when `updated` is undefined (blank/missing):
![Guide cards date before](https://github.com/user-attachments/assets/7db023f8-57ce-431f-a586-faf3dfe3604f)

**After** — Shows "Updated TBD" when no date is set:
![Guide cards date after](https://github.com/user-attachments/assets/6c8e8b3b-029d-4599-99cc-cbe988445d6f)

---

## T-62 — Expert Resources: Links Go to Same Location

**File:** `src/components/KnowledgeSpotlightSection.tsx`

**Change:** All three "Expert Resources" cards previously routed through redirect stubs that all resolved to `/resources`. Each CTA button now links directly to its own section anchor on the resources page.

| Card | Before (all same redirect) | After (distinct destinations) |
|---|---|---|
| The Evidence Wiki | `/resources/wiki` → redirects to `/resources#glossary` | `/resources#glossary` |
| AI Verification | `/resources?topic=ai-digital-evidence` | `/resources#ai-digital-evidence` |
| Preparation Guides | `/resources/guides` → redirects to `/resources#featured-guides` | `/resources#featured-guides` |

**Before** — Cards using indirect/redirect paths:
![Expert Resources before](https://github.com/user-attachments/assets/bfa34c21-840d-49b2-ad1c-986e3ee338ab)

**After** — Cards linking directly to their correct section anchors:
![Expert Resources after](https://github.com/user-attachments/assets/b01338fe-06c4-4a5d-838f-6ceb6c362aa6)

---

## T-29 / T-31–T-46 / T-56 — Broken Outbound Links in Resource Content

**Files:** 28 content files across `src/content/resources/` and `src/content/topics/`

**Change:** Systematic URL remediation across all resource and topic content files. These changes are in source data only (not rendered UI elements the user clicks through), so no visual diff screenshots apply. The fixes are:

| Pattern fixed | Example before | Example after |
|---|---|---|
| NCSC deprecated `/state-links` path | `ncsc.org/topics/access-and-fairness/self-representation/state-links` | `.../resource-guide` |
| ABA How Courts Work old path | `americanbar.org/.../law_related_education_network/how_courts_work/` | `americanbar.org/groups/public_education/resources/` |
| ABA Dispute Resolution old paths | `americanbar.org/.../DisputeResolutionProcesses/mediation/` | `americanbar.org/groups/dispute_resolution/` |
| ABA Family Law resources subpath | `americanbar.org/groups/family_law/resources/` | `americanbar.org/groups/family_law/` |
| Uniform Laws CommunityKey query | `uniformlaws.org/committees/community-home?CommunityKey=4c6...` | `uniformlaws.org/acts/uccjea` |
| NCSC homepage used as citation | `ncsc.org/` (root) | `ncsc.org/information-and-resources/court-statistics-project` |
| NCSC AI/tech topic path | `ncsc.org/topics/court-management/technology` | `.../resource-guide` |
| NCSC self-rep (AI files) | `ncsc.org/...court-statistics-project` | `ncsc.org/topics/access-and-fairness/self-representation/resource-guide` |

**Affected resources:** `courtroom-prep`, `financial-snapshot`, `custody-types`, `hearing-checklist`, `mediation-lawyer`, `child-support-calculation`, `modify-parenting-plan`, `respond-to-motion`, `parenting-time-calculations`, `proof-of-service-states`, `filing-fees`, `official-portals`, `verification-crisis-family-court`, `model-local-rule-ai-verification`, and 14 additional resource/topic files.
