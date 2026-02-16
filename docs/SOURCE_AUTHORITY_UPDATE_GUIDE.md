# Source Authority Update Guide

## Overview

All 30 V2 content files need updated governance metadata with authoritative primary legal sources. This guide provides the template and examples for updating each file.

## Required Source Format

### Old Format (No Longer Valid)
```typescript
sources: [
  {
    name: "Generic Source Name",
    note: "Some context",
    href: "maybe-a-url" // optional
  }
]
```

### New Format (Required)
```typescript
sources: [
  {
    title: "Federal Rules of Civil Procedure - Rule 5",  // Full, specific title
    organization: "U.S. Courts",                         // Authoritative organization
    url: "https://www.uscourts.gov/rules-policies/...", // Direct link
    jurisdiction: "Federal",                              // Optional: Federal, California, etc.
    lastAccessed: "2026-02-16",                          // ISO date when verified
    note: "Service and filing requirements"              // Optional context
  }
]
```

## Acceptable Sources (Primary Legal Authority Only)

### ✅ Acceptable
- **State judiciary websites**: courts.ca.gov, nycourts.gov, etc.
- **Federal court sites**: uscourts.gov
- **State statutes**: leginfo.legislature.ca.gov, texas.gov/statutes
- **Federal Rules**: FRCP, FRE on uscourts.gov
- **Official court self-help**: Court-published guides
- **State bar publications**: Official bar resources
- **Administrative rules**: Official government administrative codes

### ❌ Unacceptable
- Blogs or legal marketing sites
- Generic legal summaries
- Commercial legal form sites
- "Various sources" or vague citations
- Wikipedia or general encyclopedias
- Lawyer advertising sites

## Jurisdiction Scope Values

Use the enum values:

```typescript
jurisdictionScope: ["federal"]        // Federal law only
jurisdictionScope: ["multi-state"]    // General principles across states
jurisdictionScope: ["state-specific"] // One specific state
```

For state-specific, add jurisdiction to each source:
```typescript
jurisdiction: "California"
jurisdiction: "Texas"
jurisdiction: "Federal"
```

## Template by Content Type

### For Federal Rules Content (FRCP, FRE)

```typescript
governance: {
  lastUpdated: "2026-02-16",
  sources: [
    {
      title: "Federal Rules of Civil Procedure - Rule 5",
      organization: "U.S. Courts",
      url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure",
      jurisdiction: "Federal",
      lastAccessed: "2026-02-16",
      note: "Service and filing of pleadings and other papers"
    },
    {
      title: "Federal Rules of Evidence - Rule 901",
      organization: "U.S. Courts",
      url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
      jurisdiction: "Federal",
      lastAccessed: "2026-02-16",
      note: "Authenticating or identifying evidence"
    }
  ],
  jurisdictionScope: ["federal"],
  reviewIntervalDays: 365
}
```

### For Multi-State General Principles

```typescript
governance: {
  lastUpdated: "2026-02-16",
  sources: [
    {
      title: "Uniform Child Custody Jurisdiction and Enforcement Act",
      organization: "Uniform Law Commission",
      url: "https://www.uniformlaws.org/committees/...",
      jurisdiction: "Multi-State",
      lastAccessed: "2026-02-16",
      note: "Model law adopted by all 50 states"
    },
    {
      title: "Family Law - Custody",
      organization: "American Bar Association",
      url: "https://www.americanbar.org/groups/...",
      lastAccessed: "2026-02-16",
      note: "Legal standards and definitions"
    }
  ],
  jurisdictionScope: ["multi-state"],
  reviewIntervalDays: 180
}
```

### For State-Specific Content

```typescript
governance: {
  lastUpdated: "2026-02-16",
  sources: [
    {
      title: "California Code of Civil Procedure - Section 1013",
      organization: "California Legislative Information",
      url: "https://leginfo.legislature.ca.gov/...",
      jurisdiction: "California",
      lastAccessed: "2026-02-16",
      note: "Service of notice requirements"
    },
    {
      title: "California Courts Self-Help: Proof of Service",
      organization: "California Judicial Branch",
      url: "https://www.courts.ca.gov/...",
      jurisdiction: "California",
      lastAccessed: "2026-02-16",
      note: "Official court guidance on service requirements"
    }
  ],
  jurisdictionScope: ["state-specific"],
  reviewIntervalDays: 90
}
```

## Update Checklist for Each File

For each of the 30 V2 content files:

1. **Identify the topic**: What legal area does this cover?
2. **Find primary sources**: Look for:
   - Relevant federal rules (if applicable)
   - State court self-help pages
   - Official bar association resources
   - Direct statute citations
3. **Update sources array**: Use the new format with all required fields
4. **Update governance.sources**: Same sources, in governance block
5. **Update jurisdictionScope**: Use proper enum value
6. **Verify URLs**: Make sure all links work
7. **Update lastUpdated**: Set to current date
8. **Run validation**: `node scripts/validate-governance.mjs`

## Files to Update (30 total)

### Questions (12 files)
- [x] custody-types.ts - COMPLETED (example)
- [ ] child-support-calculation.ts
- [ ] exhibit-labeling.ts
- [ ] fee-waiver.ts
- [ ] hearing-checklist.ts
- [ ] mediation-lawyer.ts
- [ ] modify-parenting-plan.ts
- [ ] official-forms-location.ts
- [ ] respond-to-motion.ts
- [ ] service-deadlines.ts
- [ ] text-authentication.ts
- [ ] proof-of-service-definition.ts (if exists)

### Resources (11 files)
- [ ] authentication.ts
- [ ] courtroom-prep.ts
- [ ] evidence-intake.ts
- [ ] exhibits-guide.ts
- [ ] filing-basics.ts
- [ ] financial-snapshot.ts
- [ ] hearing-tomorrow.ts
- [ ] official-portals.ts
- [ ] parenting-plans.ts
- [ ] proof-of-service-pack.ts
- [ ] timeline-tools.ts

### Guides (4 files)
- [ ] evidence-authentication.ts
- [ ] parenting-time-calculations.ts
- [ ] proof-of-service-states.ts
- [ ] self-representation-complete.ts

### Kits (3 files)
- [ ] evidence.ts
- [ ] first-filing.ts
- [ ] hearing-soon.ts

## Priority Order

1. **High-traffic pages first**:
   - proof-of-service-pack.ts
   - hearing-tomorrow.ts
   - evidence-authentication.ts

2. **Federal rules pages**:
   - authentication.ts (FRE 901)
   - filing-basics.ts (FRCP)
   - exhibits-guide.ts

3. **Popular questions**:
   - service-deadlines.ts
   - exhibit-labeling.ts
   - fee-waiver.ts

4. **Remaining content**

## Testing

After updating each file:

```bash
node scripts/validate-governance.mjs
```

Should show:
- ✅ Passing files with no errors
- ❌ Remaining files that need updates

## Common Authoritative Sources

### Federal
- **FRCP**: https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-civil-procedure
- **FRE**: https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence
- **U.S. Courts Self-Help**: https://www.uscourts.gov/forms

### California
- **CA Courts**: https://www.courts.ca.gov/selfhelp.htm
- **CA Legislative Info**: https://leginfo.legislature.ca.gov/
- **CA Judicial Council Forms**: https://www.courts.ca.gov/forms.htm

### Texas
- **TX Courts**: https://www.txcourts.gov/
- **TX Statutes**: https://statutes.capitol.texas.gov/
- **TX Rules of Civil Procedure**: https://www.txcourts.gov/supreme-court/rules/

### New York
- **NY Courts**: https://www.nycourts.gov/
- **NY Court Forms**: https://www.nycourts.gov/forms/
- **NY Self-Help**: https://www.nycourts.gov/courthelp/

### Florida
- **FL Courts**: https://www.flcourts.gov/
- **FL Statutes**: http://www.leg.state.fl.us/Statutes/
- **FL Self-Help**: https://www.flcourts.gov/Resources-Services/Court-Improvement/Family-Courts/Family-Law-Self-Help-Information

### Washington
- **WA Courts**: https://www.courts.wa.gov/
- **WA Forms**: https://www.courts.wa.gov/forms/
- **WA Statutes**: https://app.leg.wa.gov/rcw/

### Oregon  
- **OR Courts**: https://www.courts.oregon.gov/
- **OR Statutes**: https://www.oregonlegislature.gov/bills_laws/Pages/ORS.aspx

## Notes

- Build will FAIL until all files are updated
- This is intentional - enforces authority standards
- Each source must be verifiable and authoritative
- AI systems look for these specific signals
- No shortcuts - must use primary legal authority
