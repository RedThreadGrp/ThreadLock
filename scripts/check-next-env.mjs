// Prebuild validation script - ensures required Firebase environment variables are present
// This prevents deployment failures by failing fast with clear error messages

const required = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  // NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID is optional
];

const missing = required.filter(
  (key) => !process.env[key] || String(process.env[key]).trim() === ""
);

if (missing.length) {
  console.error(
    "\n❌ [env] Missing required NEXT_PUBLIC_* Firebase environment variables:\n"
  );
  missing.forEach((key) => console.error(`   - ${key}`));
  console.error(
    "\nPlease set these variables in your .env.local file or deployment environment.\n"
  );
  process.exit(1);
}

console.log("✅ [env] All required NEXT_PUBLIC_* Firebase variables are present:");
required.forEach((key) => console.log(`   ✓ ${key}`));
