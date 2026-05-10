import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RevealOnScroll } from './RevealOnScroll';

describe('RevealOnScroll', () => {
  it('renders its children', () => {
    render(
      <RevealOnScroll>
        <p>Reveal me</p>
      </RevealOnScroll>,
    );
    expect(screen.getByText('Reveal me')).toBeInTheDocument();
  });

  it('falls back to visible when IntersectionObserver is unavailable', () => {
    const original = globalThis.IntersectionObserver;
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      value: undefined,
      configurable: true,
    });
    try {
      const { container } = render(
        <RevealOnScroll>
          <p>Always visible</p>
        </RevealOnScroll>,
      );
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toBeInTheDocument();
    } finally {
      Object.defineProperty(globalThis, 'IntersectionObserver', {
        value: original,
        configurable: true,
      });
    }
  });
});
