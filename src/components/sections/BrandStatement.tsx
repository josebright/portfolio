'use client';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const Surface = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  paddingBlock: theme.spacing(16),
  [theme.breakpoints.down('md')]: { paddingBlock: theme.spacing(10) },
}));

const Headline = styled('p')({
  margin: 0,
  fontFamily: 'var(--font-sora), sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(3.5rem, 13vw, 11rem)',
  lineHeight: 0.92,
  letterSpacing: '-0.05em',
});

const Accent = styled('span')(({ theme }) => ({ color: theme.palette.secondary.main }));

export function BrandStatement() {
  return (
    <Surface>
      <Container maxWidth="lg">
        <RevealOnScroll>
          <Headline>
            Build. Bright. <Accent>Beyond.</Accent>
          </Headline>
        </RevealOnScroll>
      </Container>
    </Surface>
  );
}
