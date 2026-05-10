'use client';

import type { ReactNode } from 'react';
import Container from '@mui/material/Container';
import { styled, type Theme } from '@mui/material/styles';

type SectionVariant = 'default' | 'paper' | 'sand' | 'inverse';

const Wrapper = styled('section', {
  shouldForwardProp: (p) => p !== 'variant',
})<{ variant: SectionVariant }>(({ theme, variant }) => ({
  paddingBlock: theme.spacing(14),
  ...surfaceFor(variant, theme),
  [theme.breakpoints.down('md')]: { paddingBlock: theme.spacing(9) },
}));

interface SectionProps {
  readonly id?: string;
  readonly children: ReactNode;
  readonly background?: SectionVariant;
}

export function Section({ id, children, background = 'default' }: SectionProps) {
  return (
    <Wrapper id={id} variant={background}>
      <Container maxWidth="lg">{children}</Container>
    </Wrapper>
  );
}

function surfaceFor(variant: SectionVariant, theme: Theme) {
  if (variant === 'paper') return { backgroundColor: theme.palette.background.paper };
  if (variant === 'sand') return { backgroundColor: '#EFE3CF', color: '#1F100A' };
  if (variant === 'inverse')
    return {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    };
  return {};
}
