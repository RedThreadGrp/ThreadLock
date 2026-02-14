# Route Verification Harness

This directory contains scripts for verifying that all routes in the ThreadLock marketing site work correctly.

## Files

### `redirects.map.json`
Contract file defining legacy URLs that must redirect to canonical URLs.

**Structure:**
```json
{
  "redirects": {
    "/old-path": "/new-canonical-path",
    "/another-old-path": "/another-new-path"
  }
}
```

**Rules:**
- Keys are old paths that MUST redirect
- Values are canonical paths that MUST be the final destination
- The verification script will fail if redirects don't work as expected
- Keep this file updated when URLs change or get deprecated

### `verify-routes-http.mjs`
HTTP-level verification script that tests all routes in sitemap.xml.

**What it verifies:**
1. Every URL in sitemap.xml returns a valid HTTP response (200 or 3xx)
2. Redirects (from redirects.map.json) resolve to correct canonical destinations
3. No broken links or 404 errors
4. Redirect chains don't exceed reasonable limits

**Usage:**
```bash
# Test against local dev server
npm run verify:routes

# Test against custom URL
node scripts/verify-routes-http.mjs --base-url=http://localhost:3000

# Test against production
node scripts/verify-routes-http.mjs --base-url=https://www.threadlock.ai
```

**Output:**
- ✓ Success (200): Routes that return 200 OK
- ↪ Redirects: Routes that redirect (with chain)
- ✗ Errors: Routes that fail or return error codes

**Exit codes:**
- 0: All routes verified successfully
- 1: One or more routes failed verification

## Workflow Integration

### Local Development
```bash
# Start dev server
npm run dev

# In another terminal, verify routes
npm run verify:routes
```

### CI/CD
Add to your CI pipeline:
```yaml
- name: Build site
  run: npm run build && npm run start &
  
- name: Wait for server
  run: |
    npx wait-on http://localhost:3000 --timeout 30000
    # Or use curl with retry:
    # for i in {1..30}; do curl -s http://localhost:3000 && break || sleep 1; done

- name: Verify routes
  run: npm run verify:routes
```

## Adding New Routes

1. Add the route to your Next.js pages
2. Run `npm run generate-sitemap` to update sitemap.xml
3. Run `npm run verify:routes` to verify the new route works

## Deprecating Routes

When deprecating a route:

1. Add the old route to `redirects.map.json`:
   ```json
   {
     "redirects": {
       "/old-deprecated-route": "/new-canonical-route"
     }
   }
   ```

2. Implement the redirect in your Next.js config or middleware

3. Run `npm run verify:routes` to verify the redirect works

4. Remove the old route from your codebase

## Troubleshooting

**All routes failing:**
- Ensure the dev/prod server is running
- Check the base URL is correct
- Verify firewall/network settings

**Specific route failing:**
- Check if the page exists in your Next.js pages directory
- Verify the route is in sitemap.xml
- Test manually with curl: `curl -I http://localhost:3000/your-route`

**Redirect not working:**
- Verify the redirect is implemented in next.config.mjs or middleware
- Check that both old and new paths are correct in redirects.map.json
- Test manually: `curl -I -L http://localhost:3000/old-path`

## Future Enhancements

Planned additions:
- Browser-based verification for layout markers
- Schema validation (checking for Short Answer cards, TOC, tables)
- Performance metrics (response times)
- Screenshot comparison for visual regression
- Automated redirect discovery from Git history
