'use client';

import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const Anchor = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  color: theme.palette.text.primary,
}));

const Mark = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  borderRadius: 6,
  padding: 4,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  '& img': { display: 'block' },
}));

const Wordmark = styled('span')({
  fontFamily: 'var(--font-sora), sans-serif',
  fontWeight: 800,
  fontSize: '1.125rem',
  letterSpacing: '-0.02em',
  '& > .accent': { color: 'var(--b8-palette-secondary-main)' },
});

export function Logo() {
  return (
    <Anchor href="/" aria-label="Bright8 — home">
      <Mark aria-hidden>
        <Image src="/assets/brand/logo.png" alt="" width={28} height={28} priority />
      </Mark>
      <Wordmark>
        B<span className="accent">right</span>8
      </Wordmark>
    </Anchor>
  );
}
