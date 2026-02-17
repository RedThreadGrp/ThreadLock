# PR #82 Deployment Fix Guide

## Quick Fix: Force Redeploy from Main Branch

If PR #82 changes are not showing on the live site (https://threadlock.ai), follow these steps to force a fresh deployment.

## Option 1: Trigger Workflow Manually (Recommended)

1. Go to GitHub repository: https://github.com/RedThreadGrp/ThreadLock
2. Click on "Actions" tab
3. Select "Deploy Marketing (Vercel)" workflow
4. Click "Run workflow" button (top right)
5. Ensure "main" branch is selected
6. Click the green "Run workflow" button
7. Wait ~2-3 minutes for deployment to complete
8. Verify: Run `npm run verify:pr82` (see below)

## Option 2: Push Empty Commit to Main

```bash
# Clone repo (if not already cloned)
git clone https://github.com/RedThreadGrp/ThreadLock.git
cd ThreadLock

# Checkout main branch
git checkout main
git pull origin main

# Create and push empty commit (triggers deployment)
git commit --allow-empty -m "chore: force deployment for PR #82 verification"
git push origin main

# Wait 2-3 minutes for GitHub Actions to complete
```

## Option 3: Via Vercel CLI (If you have access)

```bash
cd /path/to/ThreadLock

# Pull latest main branch
git checkout main
git pull origin main

# Install Vercel CLI if not already installed
npm install -g vercel@latest

# Login to Vercel (if not already)
vercel login

# Link to project (if not already)
vercel link

# Deploy to production with force flag
vercel --prod --force

# This will build and deploy fresh, bypassing all caches
```

## Option 4: Via Vercel Dashboard

1. Log into Vercel dashboard: https://vercel.com
2. Navigate to your "ThreadLock" project
3. Go to "Deployments" tab
4. Look for the deployment from **2026-02-17 at ~20:46 UTC** (commit SHA starts with `4ca8d9d`)
5. If it exists and is NOT marked as "Production":
   - Click on the deployment
   - Click "Promote to Production" button
6. If it doesn't exist or you want a fresh deployment:
   - Click "Redeploy" on any recent successful main branch deployment
   - Or go to "Settings" → "Git" and click "Redeploy" there
7. Wait for deployment to complete
8. Verify the change is live (see Verification section below)

## Verification: Confirm PR #82 is Live

### Automated Check
Run the verification script:

```bash
npm run verify:pr82
```

Or manually:
```bash
node scripts/verify-pr82-deployment.mjs
```

This script will check 5 different resource page types for PR #82 indicators.

### Manual Verification

Visit these pages and check the page source (Ctrl+U or Cmd+U):

1. **Topic Page**: https://threadlock.ai/resources/topics/proof-of-service
   - Look for: `data-renderer="topic-v2"`
   
2. **Q&A Page**: https://threadlock.ai/resources/q/proof-of-service-definition
   - Look for: `data-renderer="resourceQA-v2"`
   
3. **Guide Page**: https://threadlock.ai/resources/guides/self-representation-complete
   - Look for: `data-renderer="guide-v2"`
   
4. **Kit Page**: https://threadlock.ai/resources/kits/hearing-soon
   - Look for: `data-renderer="kit-v2"`
   
5. **Legal Glossary**: https://threadlock.ai/resources/legal-glossary/contemporaneous-evidence
   - Look for: `data-renderer="glossary-v2"`

All pages should also have:
- ResourceLayoutV2 classes: `max-w-4xl`, `max-w-5xl`, or `max-w-6xl`
- SectionCard components with `border-border-dark` class
- Unified spacing: `space-y-10` or similar

### Visual Indicators

When viewing the pages in a browser:
- Clean, consistent card-based layout
- Unified spacing between sections
- Consistent border styling on cards
- Dark theme with proper contrast
- No console errors related to missing components

## Troubleshooting

### Issue: Deployment succeeds but changes not visible

**Cause**: CDN caching or browser cache

**Solution**:
1. Hard refresh browser: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
2. Clear browser cache completely
3. Try incognito/private browsing mode
4. Try a different browser
5. Wait 60 seconds (ISR revalidation period for /resources)
6. Clear Vercel CDN cache via dashboard (Settings → Domains → Clear Cache)

### Issue: Workflow runs but Vercel shows old deployment as production

**Cause**: Vercel Git Integration might be overriding GitHub Actions deployment

**Solution**:
1. Go to Vercel dashboard → Project Settings → Git
2. Check deployment branch configuration
3. Option A: Disable Git integration (rely only on GitHub Actions)
4. Option B: Ensure Git integration uses correct branch and settings
5. Manually promote the correct deployment to production (see Option 4 above)

### Issue: Build succeeds but pages return 404 or old content

**Cause**: Static page regeneration issue or missing routes

**Solution**:
1. Check build logs for route generation errors
2. Verify `getStaticPaths` is working for dynamic routes
3. Force a clean build: `vercel --prod --force`
4. Check Vercel Functions logs for runtime errors

### Issue: Some pages work, others don't

**Cause**: Partial deployment or build errors for specific routes

**Solution**:
1. Check Vercel build logs for specific route errors
2. Test those specific routes locally: `npm run build && npm run start`
3. Check for TypeScript/ESLint errors in those page files
4. Look for console errors when visiting those pages

## Emergency Rollback (If needed)

If the new deployment causes issues:

1. Go to Vercel dashboard → Deployments
2. Find a previous stable deployment
3. Click on it
4. Click "Promote to Production"
5. The site will immediately serve the old version

## Prevention: Avoid Future Issues

To prevent deployment issues:

1. **Disable Vercel Git Integration** if using GitHub Actions exclusively
2. **OR** Ensure both are properly configured and not conflicting
3. **Always verify deployments** after merge using the verification script
4. **Monitor Vercel deployment logs** for any warnings or errors
5. **Set up status page** or monitoring for production site

## Contact

If issues persist:
- Check GitHub Actions logs: https://github.com/RedThreadGrp/ThreadLock/actions
- Check Vercel deployment logs in dashboard
- Review PR #82 investigation: See `PR_82_DEPLOYMENT_INVESTIGATION.md`
