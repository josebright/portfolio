import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { POST } from './route';
import { resetRateLimit } from '@/lib/rate-limit';

const originalFetch = globalThis.fetch;

function buildRequest(body: unknown, ip = '1.1.1.1'): Request {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

const validPayload = {
  name: 'Recruiter',
  email: 'recruiter@example.com',
  message: 'Plenty long enough to satisfy the schema.',
};

describe('POST /api/contact', () => {
  beforeEach(() => {
    resetRateLimit();
    globalThis.fetch = vi.fn() as unknown as typeof fetch;
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it('returns 400 for invalid JSON', async () => {
    const response = await POST(buildRequest('not-json') as never);
    expect(response.status).toBe(400);
  });

  it('returns 400 when payload fails validation', async () => {
    const response = await POST(
      buildRequest({ name: 'a', email: 'bad', message: 'short' }) as never,
    );
    expect(response.status).toBe(400);
  });

  it('silently accepts honeypot-filled submissions without sending email', async () => {
    const response = await POST(
      buildRequest({ ...validPayload, website: 'http://spammer.example' }, '5.5.5.5') as never,
    );
    expect(response.status).toBe(200);
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  it('returns 200 for a valid submission', async () => {
    const response = await POST(buildRequest(validPayload, '7.7.7.7') as never);
    expect(response.status).toBe(200);
  });

  it('returns 429 when the rate limit is exceeded', async () => {
    for (let i = 0; i < 5; i += 1) {
      await POST(buildRequest(validPayload, '9.9.9.9') as never);
    }
    const blocked = await POST(buildRequest(validPayload, '9.9.9.9') as never);
    expect(blocked.status).toBe(429);
    expect(blocked.headers.get('Retry-After')).toBeTruthy();
  });
});
