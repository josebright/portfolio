import { describe, it, expect, beforeEach } from 'vitest';
import { rateLimitInMemory, resetRateLimit } from './rate-limit';

describe('rateLimitInMemory', () => {
  beforeEach(() => resetRateLimit());

  it('allows the first request in a window', () => {
    const result = rateLimitInMemory('1.2.3.4', 1000);
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(4);
  });

  it('allows up to five requests within the window', () => {
    for (let i = 0; i < 5; i += 1) rateLimitInMemory('1.2.3.4', 1000);
    const sixth = rateLimitInMemory('1.2.3.4', 1000);
    expect(sixth.allowed).toBe(false);
  });

  it('opens a fresh window after the reset time', () => {
    for (let i = 0; i < 5; i += 1) rateLimitInMemory('1.2.3.4', 1000);
    const after = rateLimitInMemory('1.2.3.4', 1000 + 60_001);
    expect(after.allowed).toBe(true);
    expect(after.remaining).toBe(4);
  });

  it('tracks separate identifiers independently', () => {
    for (let i = 0; i < 5; i += 1) rateLimitInMemory('1.1.1.1', 1000);
    const other = rateLimitInMemory('2.2.2.2', 1000);
    expect(other.allowed).toBe(true);
  });
});
