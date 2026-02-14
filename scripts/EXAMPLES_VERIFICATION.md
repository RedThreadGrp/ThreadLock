# Route Verification Examples

This document shows common usage patterns for the route verification system.

## Example 1: Basic Route Verification

Test all routes in sitemap against local dev server:

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Run verification
npm run verify:routes
```

Expected output:
```
╔════════════════════════════════════════════════════════╗
║   ThreadLock Route Verification (HTTP Level)         ║
╚════════════════════════════════════════════════════════╝

Base URL: http://localhost:3000
Sitemap: /path/to/sitemap.xml

📄 Parsing sitemap...
✓ Found 70 URLs in sitemap

🔀 Loading redirect map...
✓ Found 0 redirect rules

🔍 Testing sitemap URLs...

✓ [1/70] / (200)
✓ [2/70] /accessibility (200)
✓ [3/70] /benefits (200)
...
✓ [70/70] /resources/kits/evidence (200)

═══ Final Summary ═══
✓ Success (200): 70
↪ Redirects: 0
✗ Errors: 0

✓ All routes verified successfully!
```

## Example 2: Testing Redirects

When deprecating a URL, add it to `redirects.map.json`:

```json
{
  "redirects": {
    "/old-blog-post": "/resources/guides/new-guide",
    "/deprecated-page": "/new-canonical-page"
  }
}
```

Then implement the redirect in `next.config.mjs`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-blog-post',
        destination: '/resources/guides/new-guide',
        permanent: true,
      },
      {
        source: '/deprecated-page',
        destination: '/new-canonical-page',
        permanent: true,
      },
    ]
  },
}
```

Run verification to ensure redirects work:

```bash
npm run verify:routes
```

Expected output:
```
🔀 Testing redirect map...

↪ /old-blog-post → /resources/guides/new-guide (301)
✓ /old-blog-post → /resources/guides/new-guide (200)
↪ /deprecated-page → /new-canonical-page (301)
✓ /deprecated-page → /new-canonical-page (200)

═══ Redirect Map Summary ═══
✓ Correct: 2
✗ Incorrect: 0
✗ Errors: 0
```

## Example 3: Testing Against Production

Before deploying, verify routes against production:

```bash
node scripts/verify-routes-http.mjs --base-url=https://www.threadlock.ai
```

This helps catch:
- Routes that work locally but fail in production
- Redirect chains that are too long
- HTTPS issues
- CDN caching problems

## Example 4: CI/CD Integration

### GitHub Actions

```yaml
name: Route Verification

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  verify-routes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build site
        run: npm run build
        
      - name: Start server
        run: npm run start &
        
      - name: Wait for server
        run: sleep 10
        
      - name: Verify routes
        run: npm run verify:routes
```

## Example 5: Handling Errors

When routes fail, the output shows what went wrong:

```bash
npm run verify:routes
```

Output with errors:
```
🔍 Testing sitemap URLs...

✓ [1/70] / (200)
✗ [2/70] /broken-page - ERROR: connect ECONNREFUSED
✗ [3/70] /404-page (404)
↪ [4/70] /redirect-chain → /step1 → /step2 → /final (200)

═══ Final Summary ═══
✓ Success (200): 67
↪ Redirects: 1
✗ Errors: 2

✗ Verification failed with 2 errors
```

Debug approach:
1. **ECONNREFUSED**: Server not running or port blocked
2. **404**: Page doesn't exist or route not defined
3. **Too many redirects**: Redirect loop detected

## Example 6: Redirect Contract Violations

If a redirect in `redirects.map.json` doesn't work correctly:

```json
{
  "redirects": {
    "/old-path": "/expected-destination"
  }
}
```

But the redirect goes to `/wrong-destination`:

```
🔀 Testing redirect map...

✗ /old-path → /wrong-destination (expected: /expected-destination)

═══ Redirect Map Summary ═══
✓ Correct: 0
✗ Incorrect: 1
✗ Errors: 0

✗ Verification failed with 1 errors
```

This ensures redirects don't "drift" over time.

## Example 7: Testing Specific Routes

To test just specific routes, you can temporarily modify sitemap.xml or create a custom test file:

```javascript
// scripts/test-specific-routes.mjs
import { makeRequest } from './verify-routes-http.mjs';

const routes = [
  '/resources/q/proof-of-service-definition',
  '/resources/guides/evidence-authentication',
  '/pricing'
];

for (const route of routes) {
  const result = await makeRequest(`http://localhost:3000${route}`);
  console.log(`${route}: ${result.statusCode}`);
}
```

## Best Practices

1. **Run verification before merging PRs**
   ```bash
   npm run verify:routes
   ```

2. **Update sitemap when adding routes**
   ```bash
   npm run generate-sitemap
   npm run verify:routes
   ```

3. **Document redirects in redirects.map.json**
   - Add comment explaining why redirect was needed
   - Include date when redirect was added
   - Plan to remove old redirects after 1 year

4. **Monitor production regularly**
   ```bash
   # Weekly cron job
   node scripts/verify-routes-http.mjs --base-url=https://www.threadlock.ai
   ```

5. **Test after infrastructure changes**
   - CDN configuration changes
   - Server updates
   - DNS modifications

## Troubleshooting

### All routes timing out
- Increase timeout in script (default: 10 seconds)
- Check network connectivity
- Verify server is accessible

### Redirect loops detected
- Check next.config.mjs for circular redirects
- Review middleware redirect logic
- Temporarily disable redirects to identify source

### 404s for valid pages
- Verify page exists in pages/ directory
- Check Next.js build output
- Ensure page is exported in static generation

### Inconsistent results
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check for environment-specific code
