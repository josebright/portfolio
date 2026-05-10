'use client';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { Logo } from '@/components/ui/Logo';
import { profile } from '@/content/profile';
import { SITE } from '@/lib/site';

const Wrapper = styled('footer')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingBlock: theme.spacing(8),
}));

export function Footer() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Statement />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems={{ md: 'center' }}
            justifyContent="space-between"
          >
            <Logo />
            <FooterSocial />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {profile.name}. {SITE.tagline}
          </Typography>
        </Stack>
      </Container>
    </Wrapper>
  );
}

const StatementHeading = styled('p')({
  fontFamily: 'var(--font-sora), sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  lineHeight: 1.05,
  letterSpacing: '-0.03em',
  maxWidth: 920,
  margin: 0,
});

const Muted = styled('span')(({ theme }) => ({ color: theme.palette.text.secondary }));

function Statement() {
  return (
    <StatementHeading>
      Have a problem worth building for? <Muted>Let&apos;s talk.</Muted>
    </StatementHeading>
  );
}

function FooterSocial() {
  return (
    <Stack spacing={1.5} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
      <Stack direction="row" spacing={3} flexWrap="wrap">
        {profile.social.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener"
            color="text.primary"
          >
            {item.label}
          </Link>
        ))}
        <Link href={`mailto:${profile.email}`} color="text.primary">
          Email
        </Link>
      </Stack>
      <Stack direction="row" spacing={3} flexWrap="wrap">
        <Link href="/now" color="text.secondary">
          Now
        </Link>
        <Link href="/uses" color="text.secondary">
          Uses
        </Link>
      </Stack>
    </Stack>
  );
}
