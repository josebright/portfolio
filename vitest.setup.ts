import { createElement, type AnchorHTMLAttributes, type ReactNode } from 'react';
import '@testing-library/jest-dom/vitest';
import { expect, vi } from 'vitest';
import * as axeMatchers from 'vitest-axe/matchers';

expect.extend(axeMatchers);

vi.mock('next/link', () => ({
  __esModule: true,
  default: function MockLink({
    href,
    children,
    ...rest
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string;
    readonly children: ReactNode;
  }) {
    return createElement('a', { href, ...rest }, children);
  },
}));

if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }),
  });
}
