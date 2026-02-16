# Investigation & Fix: Guides Pages Were Lying About Renderer

**Date:** 2026-02-16  
**Issue:** User reported that guides and topics pages claimed to be v2 but were actually legacy  
**Root Cause:** Guides pages had false `data-renderer` attribute and ignored v2 content

## The Problem

### What The User Saw
The user correctly identified that these pages were claiming to be v2 but rendering legacy content:
- `/resources/guides/parenting-time-calculations`
- `/resources/guides/self-representation-complete`
- `/resources/guides/evidence-authentication`
- `/resources/guides/proof-of-service-states`
- `/resources/topics/hearings-prep`

### What Was Wrong

**Guides Pages (`pages/resources/guides/[slug].tsx`)**:
- **Claimed:** `data-renderer="resourceQA-v2"` (line 35)
- **Actually did:** Rendered legacy markdown from `guide.body` (lines 84-92)
- **Ignored:** The v2 structured content in `guide.blocks` entirely!

```tsx
// OLD CODE - Line 35
<div data-renderer="resourceQA-v2"> {/* ← FALSE CLAIM */}
  ...
  {/* Lines 84-92 */}
  {guide.body && (  {/* ← Rendering legacy markdown */}
    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.body) }} />
  )}
  {/* guide.blocks was completely ignored! */}
```

**Registry Data:**
```typescript
{
  slug: "parenting-time-calculations",
  contentVersion: 2,
  blocks: parentingTimeCalculations,  // ← Has v2 content but was ignored!
  body: `# Understanding...`            // ← Only this was rendered
}
```

### Why My Previous Reports Were Wrong

1. **Routes audit** only checked for `data-renderer` attribute presence, not actual rendering
2. **I trusted the data-renderer** attribute without verifying what was actually rendered
3. **The guides page template** was lying - it said v2 but did v1 rendering

## The Fix

### What I Changed

**`pages/resources/guides/[slug].tsx`**:

1. **Added content version routing** (like questions page has):
   ```tsx
   if (guide.contentVersion === 2 && guide.blocks) {
     return <GuidePageV2 guide={guide} slug={slug} />;
   }
   return <GuidePageV1 guide={guide} slug={slug} />;
   ```

2. **Created GuidePageV2** - Uses ResourceQAArticle:
   ```tsx
   function GuidePageV2({ guide, slug }) {
     return (
       <div data-renderer="resourceQA-v2"> {/* ← Now TRUE */}
         <div className="pt-14">
           <ResourceQAArticle content={guide.blocks} /> {/* ← Renders v2 blocks! */}
         </div>
       </div>
     );
   }
   ```

3. **Created GuidePageV1** - Honest legacy renderer:
   ```tsx
   function GuidePageV1({ guide, slug }) {
     return (
       <div data-renderer="legacyResource-v1"> {/* ← Now HONEST */}
         <div dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.body) }} />
       </div>
     );
   }
   ```

### What Each Guide Now Does

**V2 Guides** (have structured blocks):
- ✅ `/resources/guides/parenting-time-calculations` → Uses ResourceQAArticle, renders blocks
- ✅ `/resources/guides/evidence-authentication` → Uses ResourceQAArticle, renders blocks
- ✅ `/resources/guides/proof-of-service-states` → Uses ResourceQAArticle, renders blocks

**V1 Guides** (only have legacy body):
- ✅ `/resources/guides/self-representation-complete` → Honest legacyResource-v1 renderer

### Topics Pages
**Topics were already correct:**
- ✅ `/resources/topics/hearings-prep` → Has `data-renderer="legacyResource-v1"` and renders legacy content (CORRECT)

## Verification

### Updated Routes Audit
The audit script now detects conditional rendering:

```
Route: /resources/guides/:slug
  File: pages/resources/guides/[slug].tsx
  ℹ️  CONDITIONAL: Routes to different renderers based on content
     Renderers found: resourceQA-v2, legacyResource-v1
     Expected: data-renderer="resourceQA-v2"
     ✓ Includes expected renderer
```

### Actual Behavior Now

**Before Fix:**
- Guides claimed v2 → but rendered legacy markdown
- Topics claimed v1 → and rendered legacy (correct)

**After Fix:**
- Guides with v2 content → Use ResourceQAArticle (proper v2)
- Guides with v1 content → Use legacy renderer (honest v1)
- Topics → Still using legacy renderer (correct, unchanged)

## Lessons Learned

1. **Don't trust data-renderer attributes** - Verify actual rendering code
2. **Having v2 content doesn't mean it's being used** - Check the component logic
3. **Audit scripts must check actual behavior** - Not just attribute presence
4. **Content version routing is necessary** - When content can be v1 or v2

## What The User Was Right About

✅ Guides pages were claiming v2 but weren't  
✅ My reports were inaccurate because I trusted the false claims  
✅ The audit scripts weren't catching the mismatch  
✅ Topics pages were correctly identified as legacy  

## Status

- ✅ **Fixed:** Guides now properly route to v2 or v1 based on content
- ✅ **Fixed:** Audit script detects conditional rendering
- ✅ **Fixed:** No more false renderer claims
- ✅ **Verified:** Topics pages were already correct

The user's frustration was completely justified - the guides pages WERE lying about being v2, and my audits didn't catch it. This is now fixed.
