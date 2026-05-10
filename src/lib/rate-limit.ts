interface Bucket {
  readonly count: number;
  readonly resetAt: number;
}

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

export interface RateLimitResult {
  readonly allowed: boolean;
  readonly remaining: number;
  readonly resetAt: number;
}

export async function rateLimit(
  identifier: string,
  now: number = Date.now(),
): Promise<RateLimitResult> {
  const upstash = await checkUpstash(identifier);
  if (upstash) return upstash;
  return rateLimitInMemory(identifier, now);
}

async function checkUpstash(identifier: string): Promise<RateLimitResult | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return runUpstash(identifier, url, token);
}

async function runUpstash(
  identifier: string,
  url: string,
  token: string,
): Promise<RateLimitResult> {
  const { Redis } = await import('@upstash/redis');
  const { Ratelimit } = await import('@upstash/ratelimit');
  const limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.fixedWindow(MAX_PER_WINDOW, '60 s'),
    prefix: 'b8:contact',
  });
  const result = await limiter.limit(identifier);
  return { allowed: result.success, remaining: result.remaining, resetAt: result.reset };
}

export function rateLimitInMemory(identifier: string, now: number = Date.now()): RateLimitResult {
  const existing = buckets.get(identifier);
  if (!existing || existing.resetAt <= now) {
    return openFreshWindow(identifier, now);
  }
  if (existing.count >= MAX_PER_WINDOW) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }
  return incrementWindow(identifier, existing);
}

function openFreshWindow(identifier: string, now: number): RateLimitResult {
  const resetAt = now + WINDOW_MS;
  buckets.set(identifier, { count: 1, resetAt });
  return { allowed: true, remaining: MAX_PER_WINDOW - 1, resetAt };
}

function incrementWindow(identifier: string, existing: Bucket): RateLimitResult {
  const updated = { count: existing.count + 1, resetAt: existing.resetAt };
  buckets.set(identifier, updated);
  return {
    allowed: true,
    remaining: MAX_PER_WINDOW - updated.count,
    resetAt: updated.resetAt,
  };
}

export function resetRateLimit(): void {
  buckets.clear();
}
