// Next.js env helper - uses process.env with NEXT_PUBLIC_* prefix for client-side access

export function readNextPublic(key: string): string | undefined {
  const v = process.env[key];
  return v && v.trim() ? v : undefined;
}

// STRICT variant for server/build checks only - throws if missing
export function readStrictAtBuild(key: string): string {
  const v = process.env[key];
  if (!v || !v.trim()) throw new Error(`[env] Missing ${key} at build`);
  return v;
}

function pick(...keys: string[]): string | undefined {
  for (const k of keys) {
    const v = process.env[k];
    if (v && v.trim()) return v;
  }
  return undefined;
}

function req(name: string, ...keys: string[]): string {
  const v = pick(...keys);
  if (!v) {
    const msg = `[env] Missing ${name}. Checked keys: ${keys.join(", ")}.`;
    // Only throw in browser context if truly needed (but better to degrade gracefully)
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
  FIREBASE_APPCHECK_KEY: pick("NEXT_PUBLIC_FIREBASE_APPCHECK_KEY", "VITE_FIREBASE_APPCHECK_KEY"),
};
