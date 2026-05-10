# 0006 — Multi-instance rate limiter via Upstash, with in-memory fallback

- Status: Accepted
- Date: 2026-05-10
- Supersedes: [0005](0005-in-memory-rate-limiter.md)

## Context

ADR 0005 accepted a per-process in-memory token bucket as the rate limiter for `/api/contact`. The bucket is best-effort across Vercel serverless instances; an attacker could amplify by routing across cold-started instances.

For a portfolio at low traffic this is fine. For a deployable production posture it is not.

## Decision

`src/lib/rate-limit.ts` now resolves a backend at request time:

1. If `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are present, use **Upstash Ratelimit** with a fixed-window limiter. State is shared across instances; counts are accurate.
2. Otherwise, fall back to the existing in-memory bucket (still useful in development and on platforms where Upstash is not configured).

Both paths produce the same `{ allowed, remaining, resetAt }` shape so the route handler is unchanged beyond awaiting the call.

## Consequences

- **Good:** real multi-instance protection when env vars are set; no infra needed when they are not.
- **Good:** no behaviour change in dev / local / CI tests — Upstash module is dynamically imported only when env vars are present, so the bundle does not pay for it otherwise.
- **Good:** ADR 0005's reversal criteria are met without coupling the codebase to Upstash.
- **Bad:** Upstash adds a tiny per-request latency (~10–30 ms HTTP round trip) when enabled. Acceptable for a contact form.
- **Bad:** two code paths to keep in sync. Mitigated by making both paths return the same `RateLimitResult` shape and unit-testing the in-memory path.

## Alternatives considered

- **Cloudflare WAF / Vercel Edge Middleware.** Stronger guarantees, more setup, platform-specific. Worth revisiting if abuse becomes severe.
- **Drop in-memory entirely and require Upstash.** Adds a hard dependency for a small site. Rejected for portability.
- **Per-IP cookies for client-side rate limiting.** Trivially bypassable. Not a serious option.
