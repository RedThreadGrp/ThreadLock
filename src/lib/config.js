/**
 * Site configuration constants
 */

export const SITE_CONFIG = {
  // Base URL - update for different environments
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://threadlock.ai',
  
  // Site metadata
  siteName: 'ThreadLock',
  defaultOgImage: '/og-image.jpg',
};
