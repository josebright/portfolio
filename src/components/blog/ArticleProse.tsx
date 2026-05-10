'use client';

import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const Prose = styled('article')(({ theme }) => ({
  maxWidth: 720,
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  fontSize: '1.0625rem',
  lineHeight: 1.7,
  color: theme.palette.text.primary,

  '& h2': {
    fontFamily: 'var(--font-sora), sans-serif',
    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    marginBlock: theme.spacing(6, 2),
  },
  '& h3': {
    fontFamily: 'var(--font-sora), sans-serif',
    fontSize: '1.25rem',
    fontWeight: 700,
    marginBlock: theme.spacing(4, 1.5),
  },
  '& p': { marginBlock: theme.spacing(2.5) },
  '& ul, & ol': { paddingLeft: theme.spacing(3), marginBlock: theme.spacing(2.5) },
  '& li': { marginBlock: theme.spacing(0.75) },
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary.dark,
    textUnderlineOffset: 4,
  },
  '& blockquote': {
    borderLeft: `3px solid ${theme.palette.secondary.main}`,
    paddingLeft: theme.spacing(3),
    marginInline: 0,
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
  },
  '& code': {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    fontSize: '0.95em',
    backgroundColor: theme.palette.action.hover,
    padding: '2px 6px',
    borderRadius: 4,
  },
  '& pre': {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
    padding: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    overflowX: 'auto',
    fontSize: '0.9rem',
    lineHeight: 1.5,
  },
  '& pre code': { backgroundColor: 'transparent', padding: 0, color: 'inherit' },
}));

export function ArticleProse({ children }: { readonly children: ReactNode }) {
  return <Prose>{children}</Prose>;
}
