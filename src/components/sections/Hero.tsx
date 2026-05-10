'use client';

import Link from 'next/link';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { profile } from '@/content/profile';
import { SITE } from '@/lib/site';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { HeroOrbit } from '@/components/sections/HeroOrbit';

const HeroSurface = styled('section')(({ theme }) => ({
  minHeight: '100dvh',
  display: 'flex',
  alignItems: 'center',
  paddingBlock: theme.spacing(6),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: { minHeight: 'auto', paddingBlock: theme.spacing(8) },
}));

const Eyebrow = styled('span')(({ theme }) => ({
  fontFamily: 'var(--font-inter), sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: theme.palette.text.secondary,
}));

const HeadlineRule = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: 56,
  height: 1,
  backgroundColor: theme.palette.divider,
  marginInline: theme.spacing(1.5),
  verticalAlign: 'middle',
}));

const Accent = styled('span')(({ theme }) => ({ color: theme.palette.secondary.dark }));

export function Hero() {
  return (
    <HeroSurface>
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 5, md: 6 }}
          alignItems="center"
        >
          <Stack spacing={4} sx={{ flex: 1, maxWidth: 620 }}>
            <RevealOnScroll>
              <Eyebrow>
                <HeadlineRule />
                {SITE.tagline}
              </Eyebrow>
            </RevealOnScroll>
            <RevealOnScroll delayMs={80}>
              <Typography variant="h1" component="h1">
                I build cloud-native software <Accent>that scales</Accent> globally.
              </Typography>
            </RevealOnScroll>
            <RevealOnScroll delayMs={160}>
              <Typography variant="body1" color="text.secondary">
                I&apos;m {profile.shortName} — {profile.role.toLowerCase()}. Five years shipping
                production systems across cloud, fintech, AI, and real-time platforms.
              </Typography>
            </RevealOnScroll>
            <RevealOnScroll delayMs={220}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={Link}
                  href="/projects"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  See selected work
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Get in touch
                </Button>
              </Stack>
            </RevealOnScroll>
          </Stack>
          <RevealOnScroll delayMs={240}>
            <HeroOrbit />
          </RevealOnScroll>
        </Stack>
      </Container>
    </HeroSurface>
  );
}
