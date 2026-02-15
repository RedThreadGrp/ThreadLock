// Prebuild validation script - checks Firebase environment variables
// Updated to make Firebase optional - warns if missing but doesn't fail build

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
  console.warn(
    "\n⚠️  [env] Missing NEXT_PUBLIC_* Firebase environment variables:\n"
  );
  missing.forEach((key) => console.warn(`   - ${key}`));
  console.warn(
    "\nFirebase features (lead capture) will be disabled. To enable, set these variables in your .env.local file or deployment environment.\n"
  );
  // Don't exit - allow build to continue
} else {
  console.log("✅ [env] All required NEXT_PUBLIC_* Firebase variables are present:");
  required.forEach((key) => console.log(`   ✓ ${key}`));
}

