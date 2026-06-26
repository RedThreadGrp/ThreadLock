import * as Sentry from "@sentry/nextjs";
import { scrubEvent } from "./sentryScrub";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENV || (process.env.NODE_ENV === "production" ? "production" : "development"),
  sendDefaultPii: false,
  tracesSampleRate: 0.1,
  beforeSend: (e) => scrubEvent(e as Record<string, any>),
});
