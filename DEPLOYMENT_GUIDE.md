# Vercel Deployment Configuration Summary

## Changes Made to Fix Resources Page

### 1. Build Provenance (Phase 1) ✅

**Purpose:** Know exactly which version is deployed to production

**Changes:**
- Created `src/components/BuildProvenance.tsx` component
- Added to `components/Footer.tsx` (visible on all pages)
- Configured `next.config.mjs` to inject build-time env vars:
  - `NEXT_PUBLIC_BUILD_TIMESTAMP` - Build time
  - `NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA` - Git commit SHA
  - `NEXT_PUBLIC_VERCEL_ENV` - Environment (production/preview/development)

**What You See:**
Footer now shows: `Build: abc1234 • production • Feb 15, 2026, 03:11 PM UTC`

**Browser Console:**
```javascript
[build] { sha: 'abc1234', env: 'production', timestamp: '2026-02-15T15:11:00Z' }
```

### 2. Firebase Runtime Error Fixes (Phase 2) ✅

**Problem:** Firebase was throwing errors when env vars were missing

**Changes:**
1. **`src/lib/firebase.ts`** - Made Firebase initialization conditional
   - Only initializes if all required config present
   - Exports `null` if config missing
   - Logs clear warnings instead of throwing errors

2. **`scripts/check-next-env.mjs`** - Changed from error to warning
   - Build no longer fails if Firebase env vars missing
   - Warns that Firebase features will be disabled

3. **`pages/api/supa-ping.js`** - Lazy-load Firebase
   - Dynamically imports Firebase to avoid initialization errors
   - Returns warning status if Firebase not configured

**Result:** Site builds and runs without Firebase env vars, Firebase features gracefully disabled

### 3. Resources Content & Caching (Phase 3 & 4) ✅

**Changes:**
- **`pages/resources.js`** - Added `getStaticProps` with ISR
  ```javascript
  export async function getStaticProps() {
    return {
      props: { lastBuildTime: new Date().toISOString() },
      revalidate: 60, // ISR: rebuild every 60 seconds
    };
  }
  ```

**Result:**
- Resources page uses Incremental Static Regeneration (ISR)
- Rebuilds automatically every 60 seconds in production
- First request after 60s triggers rebuild, serves cached version to others
- Cache headers: `s-maxage=60, stale-while-revalidate`

### Content Update Flow

```
[Edit src/content/resourcesRegistry.ts]
        ↓
   [git commit & push]
        ↓
  [Vercel auto-deploys]
        ↓
    [ISR activates]
        ↓
[Content visible within 60s]
```

## Vercel Environment Variables

### Required for Firebase Features
These are **optional** - site works without them:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
```

### Automatic Vercel Variables
These are set automatically by Vercel:
```bash
VERCEL_ENV                    # production, preview, or development
VERCEL_GIT_COMMIT_SHA        # Current commit SHA
VERCEL_GIT_COMMIT_REF        # Branch or tag name
VERCEL_URL                   # Deployment URL
```

## Deployment Checklist

### Pre-Deploy
- [ ] Content changes committed to git
- [ ] Run `npm run validate:content` locally
- [ ] Run `npm run build` locally (should succeed)
- [ ] Verify changes in development: `npm run dev`

### Deploy
- [ ] Push to GitHub (Vercel auto-deploys)
- [ ] Monitor Vercel build logs
- [ ] Check build succeeds
- [ ] Note the commit SHA from build

### Post-Deploy Verification
- [ ] Visit threadlock.ai/resources
- [ ] Check footer build SHA matches deployed commit
- [ ] Hard refresh (Ctrl+Shift+R) to bypass cache
- [ ] Open browser console - should see:
  ```
  [firebase] initialized with projectId: xxx  (if configured)
  [build] { sha: 'abc1234', env: 'production', ... }
  ```
- [ ] No Firebase errors in console
- [ ] Wait 60 seconds for ISR revalidation
- [ ] Verify content changes appear

## Troubleshooting

### "Resources content hasn't updated"
1. Check footer SHA - does it match your commit?
2. Wait 60 seconds (ISR revalidation period)
3. Hard refresh browser (Ctrl+Shift+R)
4. Check Vercel build logs for errors
5. Force redeploy if needed

### "Firebase initialization failed"
- **Expected** if Firebase env vars not set in Vercel
- Site works fine without Firebase (only affects lead capture)
- To fix: Add Firebase env vars in Vercel dashboard
- See `VERCEL_SETUP.md` for commands

### "Build failed"
1. Check build logs in Vercel dashboard
2. Look for TypeScript errors
3. Verify all imports are correct
4. Run `npm run build` locally to reproduce

### Cache Issues
- Vercel CDN cache: 60 seconds (automatic)
- Browser cache: Cleared with hard refresh
- ISR cache: Automatic, no manual clearing needed

## Monitoring Build Status

### Via Footer
Every page shows: `Build: [sha] • [env] • [timestamp]`

### Via Browser Console
```javascript
// Check these logs:
[firebase] initialized with projectId: xxx
[build] { sha: 'abc1234', env: 'production', timestamp: '...' }
```

### Via Vercel Dashboard
1. Go to vercel.com/[your-project]
2. Check Deployments tab
3. Click on latest deployment
4. View build logs
5. Confirm deployment is "Ready"

## Performance Notes

- **Build time:** ~2-3 minutes
- **ISR revalidation:** 60 seconds
- **Cache headers:** `s-maxage=60, stale-while-revalidate`
- **First Load JS (resources page):** ~160 KB
- **Static generation:** All routes pre-rendered

## Security

- Security headers configured in `next.config.mjs`
- CSP, HSTS, X-Frame-Options, etc. all set
- Firebase config exposed via NEXT_PUBLIC_* (safe for client-side)
- No secrets in code or version control

## Next Steps

If you need to:
1. **Change content:** Edit `src/content/resourcesRegistry.ts`
2. **Add Firebase:** Set env vars in Vercel dashboard (see `VERCEL_SETUP.md`)
3. **Adjust ISR timing:** Change `revalidate` value in `pages/resources.js`
4. **Force immediate update:** Trigger redeploy in Vercel

## References

- [RESOURCES_CONTENT_UPDATE_GUIDE.md](./RESOURCES_CONTENT_UPDATE_GUIDE.md) - How to update content
- [VERCEL_SETUP.md](./VERCEL_SETUP.md) - Firebase env var setup
- [Next.js ISR Docs](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
