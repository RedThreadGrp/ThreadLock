# Resources Content Update Guide

## How to Update Resources Content

The `/resources` page on threadlock.ai uses **static content** from TypeScript/JSON files in the repository. There is no CMS or external database. All content is built at deploy time.

### Content Sources

#### 1. Main Resources Registry
**File:** `src/content/resourcesRegistry.ts`

This is the primary source for resources displayed on the /resources page. Contains:
- Resources (articles, guides, templates)
- Starter Kits (bundled resources)
- Topics (organizational categories)
- Featured Guides
- Popular Questions

**To update:**
1. Edit the file directly
2. Make sure `status: 'published'` for items to appear
3. Update `lastUpdated` date in governance metadata
4. Commit changes to git
5. Deploy (Vercel will rebuild automatically)

**Example:**
```typescript
{
  slug: "hearing-tomorrow",
  title: "Updated Title Here",
  excerpt: "New description",
  tag: "Court Prep",
  topic: "hearings-prep",
  intent: "Urgent",
  status: "published",
  governance: {
    lastUpdated: "2026-02-15",
    // ... other metadata
  }
}
```

#### 2. External Resources Registry
**File:** `src/content/externalResources.registry.ts`

Contains external links like:
- State court directories (50+ states)
- Legal aid organizations
- Court videos and resources

**To update:**
1. Edit entries in the `EXTERNAL_RESOURCES` array
2. Update `lastVerified` date when checking links
3. Mark `stale: true` if links are broken

#### 3. State Deadlines
**File:** `src/content/stateDeadlines.registry.ts`

Contains jurisdiction-specific deadlines and rules.

### How Content Updates Propagate

1. **Local Development:**
   - Changes are immediate with hot-reload
   - Run `npm run dev` to test

2. **Production (Vercel):**
   - Content is built at deploy time
   - **ISR (Incremental Static Regeneration):** Pages revalidate every 60 seconds
   - First visitor after 60s triggers rebuild
   - Subsequent visitors see cached version
   - To force immediate update: redeploy the site

### Cache Behavior

- **Browser Cache:** Respects Vercel's cache headers
- **Vercel CDN:** Uses ISR with 60-second revalidation
- **Hard Refresh:** Forces browser to skip cache (Ctrl+Shift+R or Cmd+Shift+R)

### Testing Content Changes

```bash
# 1. Make changes to content files
# 2. Test locally
npm run dev

# 3. Validate content
npm run validate:content

# 4. Build to verify no errors
npm run build

# 5. Commit and push
git add src/content/
git commit -m "Update resources content"
git push

# 6. Vercel deploys automatically
# 7. Wait up to 60 seconds for ISR to pick up changes
```

### Common Issues

**Q: I updated content but don't see changes on production**
- Wait 60 seconds (ISR revalidation period)
- Do a hard refresh (Ctrl+Shift+R)
- Check that `status: 'published'` is set
- Verify the deploy completed successfully in Vercel dashboard

**Q: How do I force immediate content update?**
- Trigger a redeploy in Vercel (no code changes needed)
- Or: Make a small commit to force rebuild

**Q: Content shows locally but not in production**
- Check build logs for errors
- Verify the file is committed to git
- Check that imports are correct in ResourcesPage.tsx

### Verification Steps

After updating content:

1. ✅ Local build succeeds: `npm run build`
2. ✅ Validation passes: `npm run validate:content`
3. ✅ Changes committed to git
4. ✅ Vercel build completes (check dashboard)
5. ✅ Visit site and verify (may need hard refresh)
6. ✅ Check build SHA in footer matches latest commit

### Build Provenance

Every page now shows build information in the footer:
```
Build: [commit-sha] • [environment] • [timestamp]
```

This helps verify which version of content is deployed.

### Related Scripts

- `npm run validate:resources` - Check resource integrity
- `npm run validate:content` - Check for placeholder text
- `npm run resources:lint` - Lint resource content
- `npm run resources:stale` - Find stale external links
- `npm run check-resources` - Coverage checks

## File Structure

```
src/
├── content/
│   ├── resourcesRegistry.ts          ← Main content
│   ├── externalResources.registry.ts ← External links
│   └── stateDeadlines.registry.ts    ← Jurisdiction deadlines
├── pages/
│   └── resources/
│       └── ResourcesPage.tsx         ← Main component
└── data/
    └── resources/
        ├── resources.json            ← Legacy JSON (if exists)
        ├── topics.json               ← Legacy topics
        └── products.json             ← Legacy products
```

## Key Points

1. ✅ **No database** - All content is in code
2. ✅ **Static generation** - Built at deploy time
3. ✅ **ISR enabled** - Revalidates every 60 seconds
4. ✅ **Git is source of truth** - What's in the repo is what deploys
5. ✅ **Immediate updates** - Redeploy to force content refresh
