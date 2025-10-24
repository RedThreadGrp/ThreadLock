import { initializeApp, getApps } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import { ENV } from "./env";

const cfg = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  projectId: ENV.FIREBASE_PROJECT_ID,
  appId: ENV.FIREBASE_APP_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
};

export const app = getApps().length ? getApps()[0] : initializeApp(cfg);

// Pin region so callable resolves https://us-central1-<projectId>.cloudfunctions.net/...
export const functions = getFunctions(app, "us-central1");

export const subscribeLeadFn = httpsCallable(functions, "subscribeLead");

// Optional quick diag in prod once per load:
if (typeof window !== "undefined" && !("__ENV_DIAG__" in window)) {
  (window as any).__ENV_DIAG__ = true;
  console.info("[firebase] projectId:", cfg.projectId);
}
