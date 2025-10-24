const required = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  // measurement id optional; include if your code requires analytics
];
const missing = required.filter(k => !process.env[k] || String(process.env[k]).trim() === "");
if (missing.length) {
  console.error("[env] Missing required NEXT_PUBLIC_* keys:", missing.join(", "));
  process.exit(1);
}
console.log("[env] NEXT_PUBLIC_* keys present:", required.join(", "));
