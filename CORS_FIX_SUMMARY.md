# CORS Fix Implementation Summary

## Problem
The application was experiencing CORS errors when calling Firebase Cloud Functions due to the Firebase client being unable to resolve the `projectId`, resulting in an invalid host: `us-central1-undefined`.

## Root Cause
The environment variables were not being properly read in the client-side code. The original `lib/firebase.js` only checked `process.env`, which works for Next.js server-side code but not always for client-side bundles, especially when using different environment variable naming conventions (VITE_* vs NEXT_PUBLIC_*).

## Solution Implemented

### 1. Created Unified Environment Reader (`src/lib/env.ts`)
- Works with both Next.js (NEXT_PUBLIC_*) and Vite (VITE_*) prefixes
- Provides clear error messages when required variables are missing
- Gracefully handles build-time vs runtime scenarios
- Exports a typed `ENV` object with all Firebase configuration

### 2. Created New Firebase Client (`src/lib/firebase.ts`)
- Uses the unified environment reader for configuration
- **Pins the Firebase Functions region to `us-central1`** - This is critical for CORS resolution
- Includes diagnostic logging to surface the projectId in production
- Exports the `subscribeLeadFn` callable function

### 3. Updated Next.js Configuration (`next.config.js`)
- Maps VITE_* environment variables to NEXT_PUBLIC_* for consistency
- Ensures environment variables are available in the client bundle

### 4. Updated All Imports
- Updated `components/LeadMagnetForm.jsx`
- Updated `components/CTA.js`
- Updated `pages/api/supa-ping.js`

## Why This Fixes CORS

1. **Correct Host Resolution**: By pinning the region to `us-central1` and ensuring the projectId is available, the Firebase SDK can construct the correct callable URL:
   ```
   https://us-central1-<projectId>.cloudfunctions.net/subscribeLead
   ```

2. **Firebase Callable Functions Handle CORS Automatically**: Once the host is correctly resolved, Firebase's callable functions automatically handle CORS headers, eliminating the need for manual CORS configuration.

3. **No Manual Fetch Calls**: The application correctly uses `httpsCallable()` from the Firebase SDK, which manages all CORS headers automatically.

## Verification Steps

1. **Build passes successfully**: `npm run build` ✅
2. **No security vulnerabilities**: CodeQL scan passed ✅
3. **All imports updated**: No files still using old `lib/firebase.js` import ✅

## Expected Production Behavior

When deployed to Vercel with proper environment variables set:

1. The browser console will show:
   ```
   [firebase] projectId: local-arcade-471222-v4
   ```

2. Network requests to Firebase Functions will target:
   ```
   https://us-central1-local-arcade-471222-v4.cloudfunctions.net/subscribeLead
   ```

3. No CORS errors will occur, and responses will include:
   ```json
   { "ok": true, "id": "lead_..." }
   ```

## Environment Variables Required

In Vercel, set either the NEXT_PUBLIC_* or VITE_* prefixed variables:

- `NEXT_PUBLIC_FIREBASE_API_KEY` or `VITE_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` or `VITE_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` or `VITE_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID` or `VITE_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` or `VITE_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` or `VITE_FIREBASE_MESSAGING_SENDER_ID` (optional)
- `NEXT_PUBLIC_FIREBASE_APPCHECK_KEY` or `VITE_FIREBASE_APPCHECK_KEY` (optional)

The unified env reader will automatically detect which prefix is available and use the correct values.
