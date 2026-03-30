import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirect canonical subdomain aliases to the primary domain.
 *
 * blog.threadlock.ai  → https://threadlock.ai (same path)
 * www.threadlock.ai   → https://threadlock.ai (same path)
 *
 * This eliminates the "Duplicate without user-selected canonical" and
 * "Alternate page with proper canonical tag" GSC indexing issues caused by
 * the same Next.js app being served under multiple hostnames.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const bare = host.replace(/:\d+$/, ''); // strip port if present

  if (bare === 'blog.threadlock.ai' || bare === 'www.threadlock.ai') {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.hostname = 'threadlock.ai';
    destination.port = '';
    return NextResponse.redirect(destination, { status: 308 });
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: '/((?!_next/static|_next/image|favicon\\.ico).*)',
};
