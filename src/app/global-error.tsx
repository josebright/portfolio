'use client';

import { useEffect } from 'react';
import NextError from 'next/error';

interface GlobalErrorProps {
  readonly error: Error & { readonly digest?: string };
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    void reportToSentry(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

async function reportToSentry(error: Error): Promise<void> {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return;
  const Sentry = await import('@sentry/nextjs');
  Sentry.captureException(error);
}
