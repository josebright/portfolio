'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import {
  education,
  certifications,
  type EducationEntry,
  type CertificationEntry,
} from '@/content/credentials';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(8),
  gridTemplateColumns: 'repeat(1, 1fr)',
  [theme.breakpoints.up('md')]: { gridTemplateColumns: '1fr 1fr' },
}));

const ColumnTitle = styled(Typography)({
  fontFamily: 'var(--font-sora), sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
});

export function Credentials() {
  return (
    <Grid>
      <RevealOnScroll>
        <EducationColumn />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80}>
        <CertificationsColumn />
      </RevealOnScroll>
    </Grid>
  );
}

function EducationColumn() {
  return (
    <Stack spacing={4}>
      <ColumnTitle>Education</ColumnTitle>
      <Stack spacing={4} divider={<Hairline />}>
        {education.map((entry) => (
          <EducationItem key={`${entry.institution}-${entry.period}`} entry={entry} />
        ))}
      </Stack>
    </Stack>
  );
}

function CertificationsColumn() {
  return (
    <Stack spacing={4}>
      <ColumnTitle>Certifications</ColumnTitle>
      <Stack spacing={4} divider={<Hairline />}>
        {certifications.map((entry) => (
          <CertificationItem key={`${entry.issuer}-${entry.title}`} entry={entry} />
        ))}
      </Stack>
    </Stack>
  );
}

const Hairline = styled('hr')(({ theme }) => ({
  border: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
  margin: 0,
}));

function EducationItem({ entry }: { readonly entry: EducationEntry }) {
  return (
    <Stack spacing={0.75}>
      <Typography variant="h4" component="h3">
        {entry.degree}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {entry.institution} · {entry.location}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {entry.period} · {entry.detail}
      </Typography>
    </Stack>
  );
}

function CertificationItem({ entry }: { readonly entry: CertificationEntry }) {
  return (
    <Stack spacing={0.75}>
      <Typography variant="h4" component="h3">
        {entry.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {entry.issuer} · {entry.period}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {entry.topics.join(' · ')}
      </Typography>
      {entry.verifyUrl ? (
        <Link
          href={entry.verifyUrl}
          target="_blank"
          rel="noopener"
          sx={{ fontSize: '0.875rem', fontWeight: 600 }}
        >
          Verify →
        </Link>
      ) : null}
    </Stack>
  );
}
