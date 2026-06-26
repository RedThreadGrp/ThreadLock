import * as Sentry from "@sentry/nextjs";
import { scrubEvent, scrubBreadcrumb } from "./sentryScrub";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENV || (process.env.NODE_ENV === "production" ? "production" : "development"),
  sendDefaultPii: false,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [Sentry.replayIntegration({ maskAllText: true, maskAllInputs: true, blockAllMedia: true })],
  beforeSend: (e) => scrubEvent(e as Record<string, any>),
  beforeBreadcrumb: (c) => scrubBreadcrumb(c as Record<string, any>),
});
