import { describe, it, expect } from 'vitest';
import { theme, brand } from './theme';

describe('brand theme', () => {
  it('exposes the Bright8 primary brown as primary.main', () => {
    expect(theme.palette.primary.main).toBe(brand.brown);
  });

  it('exposes the Bright8 amber as secondary.main', () => {
    expect(theme.palette.secondary.main).toBe(brand.amber);
  });

  it('uses Sora for the heading typography family', () => {
    expect(theme.typography.h1.fontFamily).toContain('--font-sora');
  });

  it('uses Inter for the body typography family', () => {
    expect(theme.typography.fontFamily).toContain('--font-inter');
  });
});
