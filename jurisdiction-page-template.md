---
# ============================================================
# IDENTITY — required, must match folder/slug exactly
# ============================================================
jurisdiction_slug:             # lowercase-hyphenated  e.g. new-hampshire
jurisdiction_name:             # display name          e.g. New Hampshire
practice_area:                 # small-claims | family-court | landlord-tenant | family-law
country:                       # us | ca
province_or_state:             # state | province | territory

# ============================================================
# SEO — required
# ============================================================
title:                         # 50–60 chars. Pattern: "{Practice} Court in {Name} — {Hook}"
                               # e.g. "Small Claims Court in Oregon — Limits, Fees & Forms"
meta_description:              # 140–155 chars. Lead with the fact, end with ThreadLock.
                               # e.g. "Oregon small claims limits up to $10,000. Filing fees,
                               #       deadlines, and official court forms. Organize your
                               #       evidence with ThreadLock before your hearing."

# ============================================================
# KEY FACTS — required fields marked *, rest optional but preferred
# All values as plain strings. Use "–" for ranges e.g. "$52–$95"
# ============================================================
court_name: *                  # official name  e.g. "Oregon Small Claims Court"
filing_limit: *                # monetary cap   e.g. "$10,000"
filing_fee: *                  # fee or range   e.g. "$52–$95"
response_deadline: *           # e.g. "14 days"
hearing_timeline:              # e.g. "30–70 days after filing"
court_url: *                   # official court website — must be a live .gov URL
statute_citation:              # e.g. "ORS Chapter 46"

# ============================================================
# FORMS — list every official form available online
# Omit section entirely if no online forms exist
# ============================================================
forms:
  - name:                      # official form name/number
    url:                       # direct link to form PDF or page
  - name:
    url:

# ============================================================
# FRESHNESS — required
# ============================================================
last_verified:                 # ISO date you confirmed facts are current  e.g. 2025-12-01
---

<!--
════════════════════════════════════════════════════════
BODY CONTENT — write plain prose below this line
No heading formatting needed. No bullet points required.
The template renders all structure around your text.

WRITE EXACTLY THESE FIVE SECTIONS IN ORDER.
Label each section with the exact comment tag shown.
Keep each section to 2–4 sentences unless noted.
════════════════════════════════════════════════════════
-->

<!-- SECTION: overview -->
One paragraph. Answer: what is this court/process, who uses it, and what is the
dollar/scope limit. Write as if explaining to someone who has never been to court.
No jargon. End with a sentence about what ThreadLock does in this context.

<!-- SECTION: who_can_file -->
One paragraph. Cover eligibility: individuals, businesses, corporations, minors,
landlords, tenants — whoever is relevant to this practice area. Note any
restrictions (e.g. attorneys not permitted, corporations must use an officer).
Include residency or venue requirements if they exist.

<!-- SECTION: process -->
Two to four paragraphs. Walk through the steps in plain order: how to file,
what forms are required, how the defendant is served, what happens at the hearing,
how judgment is entered. Do not use numbered lists — write as connected prose.
Include any mandatory waiting periods, notice requirements, or pre-filing steps.

<!-- SECTION: evidence_and_prep -->
One to two paragraphs. What evidence is most useful in this type of case.
How courts prefer evidence to be organized and presented. What documentation
people often forget to bring. This section is where ThreadLock's value is most
directly relevant — name the specific features (journal, timeline, exhibit export)
that address the prep challenges described. Keep it factual, not promotional.

<!-- SECTION: faq -->
Write 3–5 questions and answers as plain prose pairs.
Format exactly as shown — the parser extracts Q&A from this pattern:

Q: Can I file a small claims case without an attorney?
A: Yes. Oregon small claims court is specifically designed for self-represented
litigants. Attorneys are permitted but rarely used for claims under $2,500.

Q: What happens if the defendant does not show up?
A: The court may enter a default judgment in your favor. You will still need to
present your evidence and state the amount you are seeking.

Q: How do I collect my judgment if I win?
A: Winning a judgment does not guarantee payment. You may need to garnish wages,
place a lien on property, or pursue bank account levies. Oregon courts provide
information on collection procedures at the time of judgment.
