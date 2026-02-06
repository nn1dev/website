import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://9ce758c607ef6a42feb350348185bbec@o4507649139146752.ingest.de.sentry.io/4507649154089040",
  sendDefaultPii: true,
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", "nn1.dev", "api.nn1.dev"],
  profileSessionSampleRate: 1.0,
  enableLogs: true,
  org: "nn1dev",
  project: "website",
  authToken: import.meta.env.SENTRY_AUTH_TOKEN,
});
