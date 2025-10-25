// Environment variable loader for Next.js
// Supports both NEXT_PUBLIC_* and VITE_* prefixes for compatibility
type Src = Record<string, string | undefined>;

function pick(...keys: string[]) {
  const env = (typeof process !== "undefined" && process.env) as Src | undefined;
  for (const k of keys) {
    const v = env && env[k];
    if (v) return v;
  }
  return undefined;
}

function req(name: string, ...keys: string[]) {
  const v = pick(...keys);
  if (!v) {
    const msg = `[env] Missing ${name}. Checked keys: ${keys.join(", ")}.`;
    // Surface clearly in prod to avoid silent "undefined" hosts.
    // Only throw in browser context, not during SSR/build
    if (typeof window !== "undefined") {
      console.error(msg);
      throw new Error(msg);
    } else {
      // During build/SSR, just warn - the actual value will come from runtime env
      console.warn(msg);
      return "";
    }
  }
  return v;
}

export const ENV = {
  FIREBASE_API_KEY: req("FIREBASE_API_KEY", "NEXT_PUBLIC_FIREBASE_API_KEY", "VITE_FIREBASE_API_KEY"),
  FIREBASE_AUTH_DOMAIN: req("FIREBASE_AUTH_DOMAIN", "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", "VITE_FIREBASE_AUTH_DOMAIN"),
  FIREBASE_PROJECT_ID: req("FIREBASE_PROJECT_ID", "NEXT_PUBLIC_FIREBASE_PROJECT_ID", "VITE_FIREBASE_PROJECT_ID"),
  FIREBASE_APP_ID: req("FIREBASE_APP_ID", "NEXT_PUBLIC_FIREBASE_APP_ID", "VITE_FIREBASE_APP_ID"),
  FIREBASE_STORAGE_BUCKET: req("FIREBASE_STORAGE_BUCKET", "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET", "VITE_FIREBASE_STORAGE_BUCKET"),
  // Optional
  FIREBASE_MESSAGING_SENDER_ID: pick("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID", "VITE_FIREBASE_MESSAGING_SENDER_ID"),
  FIREBASE_MEASUREMENT_ID: pick("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"),
};
