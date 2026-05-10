'use client';

import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { profile } from '@/content/profile';
import { SITE } from '@/lib/site';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const HeroSurface = styled('section')(({ theme }) => ({
  paddingBlock: theme.spacing(14),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: { paddingBlock: theme.spacing(10) },
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

const PortraitFrame = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: theme.spacing(1.25),
  flexShrink: 0,
}));

const Portrait = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 240,
  aspectRatio: '4 / 5',
  borderRadius: 2,
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: { width: 168 },
}));

const Caption = styled('span')(({ theme }) => ({
  fontFamily: 'var(--font-inter), sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  fontSize: '0.6875rem',
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));

export function Hero() {
  return (
    <HeroSurface>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <RevealOnScroll>
            <Eyebrow>
              <HeadlineRule />
              {SITE.tagline}
            </Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll delayMs={80}>
            <Typography variant="h1" component="h1" sx={{ maxWidth: 1100 }}>
              I build cloud-native software <Accent>that scales</Accent> globally.
            </Typography>
          </RevealOnScroll>
          <HeroBottom />
        </Stack>
      </Container>
    </HeroSurface>
  );
}

function HeroBottom() {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      spacing={{ xs: 4, md: 8 }}
      alignItems={{ md: 'flex-end' }}
      justifyContent="space-between"
    >
      <RevealOnScroll delayMs={160}>
        <Stack spacing={3} sx={{ maxWidth: 560 }}>
          <Typography variant="body1" color="text.secondary">
            I&apos;m {profile.shortName} — {profile.role.toLowerCase()}. Five years shipping
            production systems across cloud, fintech, AI, and real-time platforms.
          </Typography>
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
        </Stack>
      </RevealOnScroll>
      <RevealOnScroll delayMs={240}>
        <PortraitFrame>
          <Portrait>
            <Image
              src={SITE.profileImagePath}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 900px) 168px, 240px"
              style={{ objectFit: 'cover' }}
            />
          </Portrait>
          <Caption>Bright · {profile.location.split('·')[0]?.trim() ?? 'Abuja'}</Caption>
        </PortraitFrame>
      </RevealOnScroll>
    </Stack>
  );
}
