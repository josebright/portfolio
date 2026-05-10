const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  void initSentry(dsn);
}

async function initSentry(dsn: string): Promise<void> {
  const Sentry = await import('@sentry/nextjs');
  Sentry.init({
    dsn,
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0.1,
    environment: process.env.NODE_ENV,
  });
}

export async function onRouterTransitionStart(href: string, navigationType: string): Promise<void> {
  if (!dsn) return;
  const Sentry = await import('@sentry/nextjs');
  Sentry.captureRouterTransitionStart(href, navigationType);
}
