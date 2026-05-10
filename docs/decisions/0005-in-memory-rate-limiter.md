# 0005 — In-memory rate limiter for `/api/contact`

- Status: Accepted
- Date: 2026-05-10

## Context

The contact endpoint is a public POST with no auth. Without rate limiting, it gets spammed within days of deploy. The site is single-author, low-traffic, and deployed on Vercel — which means serverless functions with no shared memory between instances.

## Decision

Ship a **per-process in-memory token-bucket** keyed on `x-forwarded-for` (5 requests / 60 s / IP). Implementation in `src/lib/rate-limit.ts`. Returns `429` with `Retry-After` header when exceeded.

## Consequences

- **Good:** zero infra dependencies, zero cost, zero cold-start penalty.
- **Good:** sufficient for the actual traffic shape — most spam comes from a small number of source IPs.
- **Good:** unit-tested (4 tests, 100% coverage on `rate-limit.ts`).
- **Bad:** **best-effort across instances.** If Vercel routes a malicious IP across two cold-started instances, both buckets start fresh. A determined attacker can amplify by `instance_count`.
- **Bad:** memory survives only until the function instance is recycled.

## Alternatives considered

- **Upstash Redis (or any networked store).** The right answer for high-traffic / multi-instance. Adds a dependency, a paid service tier (or a free tier with rate limits), and ~30 ms of latency per request. Disproportionate for this site's scope.
- **Cloudflare WAF / Vercel Edge Middleware.** Stronger guarantees, more setup. Worth revisiting if abuse becomes an actual problem.
- **Cloudflare Turnstile / hCaptcha.** Different category — proves human, does not rate-limit. Combine _with_ a rate limiter, not replace it.

## Reversal criteria

Switch to a networked store if any of: the site moves off Vercel; a real abuse incident occurs; traffic exceeds ~10 requests/sec sustained; or the contact form starts receiving more than ~50 messages/day.
