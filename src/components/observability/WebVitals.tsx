'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals(reportMetric);
  return null;
}

interface NextWebVitalsMetric {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly value: number;
}

function reportMetric(metric: NextWebVitalsMetric): void {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[web-vitals]', metric.name, Math.round(metric.value), metric.label);
    return;
  }
  const endpoint = process.env.NEXT_PUBLIC_VITALS_ENDPOINT;
  if (!endpoint) return;
  void sendBeacon(endpoint, metric);
}

function sendBeacon(endpoint: string, metric: NextWebVitalsMetric): void {
  const body = JSON.stringify(metric);
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    navigator.sendBeacon(endpoint, new Blob([body], { type: 'application/json' }));
    return;
  }
  void fetch(endpoint, { method: 'POST', body, keepalive: true });
}
