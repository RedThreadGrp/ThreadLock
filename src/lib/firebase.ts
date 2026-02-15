import { initializeApp, getApps } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import { ENV } from "./env";

// Only initialize Firebase if all required config is present
const hasRequiredConfig = 
  ENV.FIREBASE_API_KEY && 
  ENV.FIREBASE_PROJECT_ID && 
  ENV.FIREBASE_APP_ID;

const cfg = hasRequiredConfig ? {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  projectId: ENV.FIREBASE_PROJECT_ID,
  appId: ENV.FIREBASE_APP_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
} : null;

export const app = cfg && (getApps().length ? getApps()[0] : initializeApp(cfg));

// Pin region so callable resolves https://us-central1-<projectId>.cloudfunctions.net/...
export const functions = app ? getFunctions(app, "us-central1") : null;

export const subscribeLeadFn = functions ? httpsCallable(functions, "subscribeLead") : null;

// Optional quick diag in prod once per load:
if (typeof window !== "undefined" && !("__ENV_DIAG__" in window)) {
  (window as any).__ENV_DIAG__ = true;
  if (cfg) {
    console.info("[firebase] initialized with projectId:", cfg.projectId);
  } else {
    console.warn("[firebase] not initialized - missing required env vars");
  }
  
  // Log build info
  const buildInfo = {
    sha: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || 'local',
    env: process.env.NEXT_PUBLIC_VERCEL_ENV || 'development',
    timestamp: process.env.NEXT_PUBLIC_BUILD_TIMESTAMP || 'unknown'
  };
  console.info("[build]", buildInfo);
}
