# Vercel Environment Variables Setup

This document contains the exact commands you need to run to set up Firebase environment variables on Vercel for the threadlock.ai marketing site.

## Prerequisites
- Vercel CLI installed (`npm install -g vercel`)
- Access to the threadlock-ai project on Vercel

## Step 1: Link to Vercel Project

```bash
vercel link --project threadlock-ai --confirm
```

If the project is already linked, this command will confirm and skip re-linking.

## Step 2: Add Firebase Environment Variables

Run the following commands to add each Firebase environment variable to Vercel production.

Note: We're adding both VITE_ and NEXT_PUBLIC_ prefixes for maximum compatibility:

```bash
vercel env add FIREBASE_TOKEN production <<EOF
1//06IUHrNfXGn5VCgYIARAAGAYSNwF-L9IrC0l1arnqQMU1Kq4JMiKuaqB4yjmCDIqA7zjqAoXFkMjy6NF2ZhF5FxMzcqhgjYXTpMI
EOF

# VITE_ prefixed variables
vercel env add VITE_FIREBASE_API_KEY production <<EOF
AIzaSyDAMtnmYA7e0Yrw-0pCn1auP8bS42T4qY8
EOF

vercel env add VITE_FIREBASE_AUTH_DOMAIN production <<EOF
local-arcade-471222-v4.firebaseapp.com
EOF

vercel env add VITE_FIREBASE_PROJECT_ID production <<EOF
local-arcade-471222-v4
EOF

vercel env add VITE_FIREBASE_STORAGE_BUCKET production <<EOF
local-arcade-471222-v4.firebasestorage.app
EOF

vercel env add VITE_FIREBASE_MESSAGING_SENDER_ID production <<EOF
675666804075
EOF

vercel env add VITE_FIREBASE_APP_ID production <<EOF
1:675666804075:web:bc848eb4eaef652f69a02e
EOF

# NEXT_PUBLIC_ prefixed variables (required for Next.js client-side access)
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY production <<EOF
AIzaSyDAMtnmYA7e0Yrw-0pCn1auP8bS42T4qY8
EOF

vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN production <<EOF
local-arcade-471222-v4.firebaseapp.com
EOF

vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID production <<EOF
local-arcade-471222-v4
EOF

vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET production <<EOF
local-arcade-471222-v4.firebasestorage.app
EOF

vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID production <<EOF
675666804075
EOF

vercel env add NEXT_PUBLIC_FIREBASE_APP_ID production <<EOF
1:675666804075:web:bc848eb4eaef652f69a02e
EOF
```

## Step 3: Also Add to Preview (Optional)

If you want these variables in preview environments as well, run the same commands but replace `production` with `preview`:

```bash
vercel env add VITE_FIREBASE_API_KEY preview <<EOF
AIzaSyDAMtnmYA7e0Yrw-0pCn1auP8bS42T4qY8
EOF
# ... repeat for all other variables
```

## Step 4: Verify Environment Variables

Check that all variables are set:

```bash
vercel env ls
```

You should see all 7 Firebase variables (FIREBASE_TOKEN and 6 VITE_FIREBASE_* variables) listed under production.

## Step 5: Trigger Production Deployment

```bash
vercel --prod --confirm
```

## Post-Deployment Testing

1. Visit threadlock.ai
2. Navigate to the signup form
3. Submit a test email (e.g., test@threadlock.ai)
4. Verify that the Firebase Cloud Function `subscribeLead` is triggered
5. Check Firestore for the new lead document in the `leads` collection

## Notes

- The `.env.local` file in this repository contains the same Firebase variables for local development
- The `.env.local` file is excluded from git via `.gitignore`
- Next.js requires the `NEXT_PUBLIC_` prefix for client-side environment variables, but we're using `VITE_` prefix for compatibility. The Firebase configuration in `lib/firebase.js` handles both prefixes.
