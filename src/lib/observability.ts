interface ErrorContext {
  readonly route?: string;
  readonly identifier?: string;
  readonly extra?: Record<string, string>;
}

export async function reportError(error: unknown, context: ErrorContext = {}): Promise<void> {
  if (!process.env.SENTRY_DSN) {
    console.warn('[observability]', describe(error), context);
    return;
  }
  const Sentry = await import('@sentry/nextjs');
  Sentry.captureException(error, { tags: extractTags(context), extra: context.extra });
}

function describe(error: unknown): string {
  if (error instanceof Error) return `${error.name}: ${error.message}`;
  return String(error);
}

function extractTags(context: ErrorContext): Record<string, string> {
  const tags: Record<string, string> = {};
  if (context.route) tags.route = context.route;
  if (context.identifier) tags.identifier = context.identifier;
  return tags;
}
