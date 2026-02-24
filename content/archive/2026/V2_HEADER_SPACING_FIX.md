# V2 Header Spacing Fix - Visual Documentation

## Problem Identified

The v2 question pages (`/resources/q/[slug]`) had inconsistent top spacing compared to other resource pages.

### Before the Fix

**Question Pages (v2):** 
```tsx
// pages/resources/q/[slug].tsx - BEFORE
<div className="..." data-renderer="resourceQA-v2">
  <ResourceQAArticle content={question.blocks} />
  // ResourceQAArticle had pt-10 internally
</div>
```

Result: Only `pt-10` (40px) of top padding

**Other Resource Pages:**
```tsx
// pages/resources/[slug].tsx, pages/resources/guides/[slug].tsx
<div className="...">
  <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
    // Content here
  </div>
</div>
```

Result: `pt-14` (56px) of top padding

### The Issue
- **Legacy pages**: 56px top padding (pt-14)
- **V2 question pages**: 40px top padding (pt-10)
- **Visual difference**: 16px inconsistency in header spacing

## Solution Implemented

### 1. Removed Top Padding from ResourceQAArticle

**File:** `src/components/resources/ResourceQAArticle.tsx`

Changed all `<main>` elements from:
```tsx
<main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10">
```

To:
```tsx
<main className="mx-auto w-full max-w-5xl px-4 pb-16">
```

This was done in 3 locations:
1. Development error state (line 315)
2. Production "being updated" state (line 338)
3. Normal v2 content render (line 360)

**Rationale:** Components should not control their own top spacing. The parent page component should manage layout spacing for consistency.

### 2. Added Spacing Wrapper in Question Page

**File:** `pages/resources/q/[slug].tsx`

Changed from:
```tsx
<div className="..." data-renderer="resourceQA-v2">
  <ResourceQAArticle content={question.blocks} />
```

To:
```tsx
<div className="..." data-renderer="resourceQA-v2">
  <div className="pt-14">
    <ResourceQAArticle content={question.blocks} />
  </div>
```

**Key Points:**
- Wrapper div only adds `pt-14` spacing
- No redundant layout styles (max-w, px, etc.)
- ResourceQAArticle handles its own width/padding internally
- Keeps spacing control at the page level

### After the Fix

**All Resource Pages:**
- Legacy pages: `pt-14` ✅
- Guide pages: `pt-14` ✅  
- Question pages: `pt-14` ✅
- Kit pages: `pt-14` ✅
- Topic pages: `pt-14` ✅

**Result:** Consistent 56px top padding across all /resources pages

## Verification

### Build Test
```bash
npm run build
# ✅ Build succeeded - all 38 routes compiled successfully
```

### Routes Audit
```bash
npm run resources:routes-audit
# ✅ Passed: All routes have correct renderer identity
# Questions still show data-renderer="resourceQA-v2" ✓
```

### Visual Consistency
All resource pages now have:
- Consistent header position
- Same spacing from SiteHeader to content
- Unified visual rhythm across resource types

## Code Review Feedback Addressed

**Issue:** Redundant layout styles in wrapper div

**Original wrapper:**
```tsx
<div className="mx-auto max-w-5xl px-4 pt-14 pb-10">
  <ResourceQAArticle content={question.blocks} />
</div>
```

**Improved wrapper:**
```tsx
<div className="pt-14">
  <ResourceQAArticle content={question.blocks} />
</div>
```

**Reason:** ResourceQAArticle already defines `mx-auto max-w-5xl px-4 pb-16` on its internal `<main>` element. The wrapper should only control the spacing concern (pt-14), not duplicate layout constraints.

## Technical Details

### Spacing Scale (Tailwind)
- `pt-10` = 2.5rem = 40px
- `pt-14` = 3.5rem = 56px
- Difference: 16px (1rem)

### Impact
- **Visual**: More breathing room, better alignment with header
- **UX**: Consistent experience across all resource pages
- **Code**: Cleaner separation of concerns (spacing vs layout)

### Affected Routes
- `/resources/q/proof-of-service-definition` ✓
- `/resources/q/exhibit-labeling` ✓
- `/resources/q/official-forms-location` ✓
- `/resources/q/text-authentication` ✓
- `/resources/q/hearing-checklist` ✓
- `/resources/q/service-deadlines` ✓
- `/resources/q/custody-types` ✓
- `/resources/q/mediation-lawyer` ✓
- `/resources/q/child-support-calculation` ✓
- `/resources/q/modify-parenting-plan` ✓
- `/resources/q/fee-waiver` ✓
- `/resources/q/respond-to-motion` ✓

**Total:** 12 question pages fixed

## Before/After Comparison

### Before
```
┌─────────────────────────────────┐
│        SiteHeader               │
├─────────────────────────────────┤
│        40px gap (pt-10)         │ ← Inconsistent
├─────────────────────────────────┤
│   Question Content (v2)         │
└─────────────────────────────────┘
```

### After
```
┌─────────────────────────────────┐
│        SiteHeader               │
├─────────────────────────────────┤
│        56px gap (pt-14)         │ ← Consistent
├─────────────────────────────────┤
│   Question Content (v2)         │
└─────────────────────────────────┘
```

## Related Files
- `pages/resources/[slug].tsx` - Legacy resources (unchanged, already correct)
- `pages/resources/guides/[slug].tsx` - Guides (unchanged, already correct)
- `pages/resources/kits/[slug].tsx` - Kits (unchanged, already correct)
- `pages/resources/topics/[slug].tsx` - Topics (unchanged, already correct)
- `pages/resources/q/[slug].tsx` - Questions (FIXED)
- `src/components/resources/ResourceQAArticle.tsx` - V2 renderer (FIXED)

## Lessons Learned

1. **Components should not control page-level spacing** - Top padding belongs to the page layout, not the component
2. **Consistency is key** - Small visual differences compound into UX issues
3. **Avoid redundant styles** - Wrapper should only add what's needed, not duplicate internal styles
4. **Global fixes are better than per-page fixes** - One change fixed all 12 question pages

## Non-Negotiables Met

✅ **Global fix, not per-page** - Fixed at the component and page wrapper level, affecting all question pages simultaneously

✅ **No silent fallbacks** - Explicit, intentional spacing control

✅ **Maintains renderer identity** - All pages still have correct `data-renderer` attributes
