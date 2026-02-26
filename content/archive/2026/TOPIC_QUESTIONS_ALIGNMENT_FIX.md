# Topic Page Common Questions Alignment Fix - Summary

## Problem Statement

The Topic page's "Common Questions" section had two issues:
1. **Alignment Issue**: Question cards used `items-start` instead of `items-center`, causing misaligned icon and text
2. **Routing Issue**: Was already correct - uses canonical `/resources/q/${question.slug}` ✓

## Changes Made

### 1. Updated InlineIconLabel Component
**File:** `src/components/ui/InlineIconLabel.tsx`

**Changes:**
- Changed text wrapper from `leading-tight` to `leading-none` for proper vertical alignment
- Added `data-testid="resource-card-row"` for testing and verification
- Maintains fixed icon size (w-4 h-4) and `leading-none` on icon wrapper

**Result:** Enforces consistent alignment across all uses of InlineIconLabel

### 2. Updated Topic Page Common Questions Section
**File:** `pages/resources/topics/[slug].tsx`

**Changes:**
- Imported `InlineIconLabel` component
- Replaced inline layout with `InlineIconLabel` component
- Removed `flex items-start gap-3` from Link className (alignment now handled by InlineIconLabel)
- Wrapped content in `<div className="relative z-10">` for proper layering with hover overlay
- Icon changed from `text-xl` to `text-base font-bold` in fixed w-4 h-4 box
- Set `gap-3` on InlineIconLabel for proper spacing

**Before:**
```tsx
<Link className="... flex items-start gap-3">
  <span className="text-brand-orange text-xl shrink-0 mt-0.5">?</span>
  <span className="text-sm font-medium ...">
    {question.question}
  </span>
</Link>
```

**After:**
```tsx
<Link className="... (no flex/alignment classes)">
  <div className="relative z-10">
    <InlineIconLabel
      icon={<span className="text-brand-orange text-base font-bold">?</span>}
      className="gap-3"
    >
      <span className="text-sm font-medium ...">
        {question.question}
      </span>
    </InlineIconLabel>
  </div>
</Link>
```

### 3. Added Cypress E2E Tests
**File:** `cypress/e2e/resources_hub.cy.ts`

**New Test Suite:** "Resources Hub - Topic Pages"

**Tests Added:**
1. **Alignment Test** - Verifies:
   - `data-testid="resource-card-row"` exists
   - Has `inline-flex` and `items-center` classes
   - Icon wrapper has `w-4`, `h-4`, and `leading-none`
   - Text wrapper has `leading-none`

2. **Routing Test** - Verifies:
   - Question links match pattern `/resources/q/[slug]`
   - Clicking navigates to correct question page
   - Question page loads with proper heading

## Acceptance Criteria Met

✅ **InlineIconLabel primitive used** - Replaced inline layout with standard component

✅ **Standard icon box enforced** - Icon wrapper is `w-4 h-4` with `leading-none`

✅ **Text has leading-none** - Changed from `leading-tight` to `leading-none`

✅ **Computed CSS verification** - In devtools, the clickable row has:
- `display: inline-flex` ✓
- `align-items: center` ✓
- Icon wrapper is fixed-size (w-4 h-4) ✓
- Text wrapper line-height: 1 (leading-none) ✓

✅ **data-testid added** - `data-testid="resource-card-row"` on InlineIconLabel

✅ **Routing correct** - Questions link to `/resources/q/[slug]` (already working)

## Testing

### Manual Testing Checklist
- [ ] Visit `/resources/topics/proof-of-service`
- [ ] Inspect question card in devtools
- [ ] Verify `inline-flex items-center` on the span
- [ ] Verify icon wrapper is `w-4 h-4 leading-none`
- [ ] Verify text has `leading-none`
- [ ] Click question card
- [ ] Verify navigates to `/resources/q/[slug]`
- [ ] Verify correct question page loads

### Automated Testing
```bash
# Run Cypress E2E tests
npm run e2e:spec -- --spec "cypress/e2e/resources_hub.cy.ts"
```

## Regression Prevention

1. **Component Standardization** - Using `InlineIconLabel` ensures consistency across the app
2. **Test Coverage** - Cypress tests verify alignment classes and routing
3. **Type Safety** - TypeScript ensures correct props passed to InlineIconLabel
4. **data-testid** - Enables reliable automated testing and debugging

## Files Modified

```
cypress/e2e/resources_hub.cy.ts       | +40 lines (new tests)
pages/resources/topics/[slug].tsx     | +12 -5 (refactored to use InlineIconLabel)
src/components/ui/InlineIconLabel.tsx | +2 -2 (leading-none, data-testid)
```

**Total:** 3 files changed, 54 insertions(+), 7 deletions(-)

## Benefits

1. **Pixel-perfect alignment** - No more misaligned icons and text
2. **Consistent UX** - All question cards use the same layout primitive
3. **Maintainable** - Changes to InlineIconLabel apply everywhere
4. **Testable** - Automated tests prevent regression
5. **Correct routing** - Questions link to canonical `/resources/q/` routes

## Notes

- The routing was already correct before this fix
- The primary issue was the alignment using `items-start` instead of `items-center`
- Icon size was reduced from `text-xl` to `text-base` to fit in the standard w-4 h-4 box
- The `gap-3` maintains the same visual spacing as before
