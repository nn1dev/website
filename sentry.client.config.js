import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://9ce758c607ef6a42feb350348185bbec@o4507649139146752.ingest.de.sentry.io/4507649154089040",
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
  tracePropagationTargets: [
    "localhost",
    "nn1.dev",
    "api.nn1.dev",
    "nn1dev-api.pawelgrzybek.workers.dev",
    "nn1dev-website.pawelgrzybek.workers.dev",
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  enableLogs: true,
  // org: "nn1dev",
  // project: "website",
  // authToken: import.meta.env.SENTRY_AUTH_TOKEN,
  beforeSend(event, hint) {
    const message = hint.originalException?.message || event.message || "";
    const shouldDrop =
      message.includes("elm.events.push") ||
      message.includes("generalAddEventListenerLogic") ||
      event.request?.url?.includes("about:blank");

    if (shouldDrop) {
      return null;
    }

    return event;
  },
});
