'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'visible' && prop !== 'delayMs',
})<{ visible: boolean; delayMs: number }>(({ visible, delayMs }) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(8px)',
  transition: `opacity 320ms ease-out ${delayMs}ms, transform 320ms ease-out ${delayMs}ms`,
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    transform: 'none',
    transition: 'none',
  },
}));

interface RevealOnScrollProps {
  readonly children: ReactNode;
  readonly delayMs?: number;
}

export function RevealOnScroll({ children, delayMs = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => observeOnce(ref.current, () => setVisible(true)), []);

  return (
    <Wrapper ref={ref} visible={visible} delayMs={delayMs}>
      {children}
    </Wrapper>
  );
}

function observeOnce(node: HTMLElement | null, onIntersect: () => void): () => void {
  if (!node || typeof IntersectionObserver === 'undefined') {
    onIntersect();
    return () => undefined;
  }
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  );
  observer.observe(node);
  return () => observer.disconnect();
}
