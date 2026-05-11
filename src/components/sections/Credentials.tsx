'use client';

import type { ReactNode } from 'react';
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

const ItemsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: `${theme.spacing(5)} ${theme.spacing(6)}`,
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: { gridTemplateColumns: '1fr 1fr' },
}));

const GroupHeading = styled(Typography)({
  fontFamily: 'var(--font-sora), sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
});

export function Credentials() {
  return (
    <Stack spacing={{ xs: 8, md: 10 }}>
      <CredentialGroup title="Education">
        {education.map((entry, index) => (
          <GridSlot
            key={`${entry.institution}-${entry.period}`}
            span={shouldSpanFullWidth(index, education.length)}
            delayMs={index * 60}
          >
            <EducationCard entry={entry} />
          </GridSlot>
        ))}
      </CredentialGroup>
      <CredentialGroup title="Certifications">
        {certifications.map((entry, index) => (
          <GridSlot
            key={`${entry.issuer}-${entry.title}`}
            span={shouldSpanFullWidth(index, certifications.length)}
            delayMs={index * 60}
          >
            <CertificationCard entry={entry} />
          </GridSlot>
        ))}
      </CredentialGroup>
    </Stack>
  );
}

function CredentialGroup({
  title,
  children,
}: {
  readonly title: string;
  readonly children: ReactNode;
}) {
  return (
    <Stack spacing={4}>
      <GroupHeading>{title}</GroupHeading>
      <ItemsGrid>{children}</ItemsGrid>
    </Stack>
  );
}

interface GridSlotProps {
  readonly span: boolean;
  readonly delayMs: number;
  readonly children: ReactNode;
}

function GridSlot({ span, delayMs, children }: GridSlotProps) {
  return (
    <Box sx={{ gridColumn: { xs: 'auto', md: span ? '1 / -1' : 'auto' } }}>
      <RevealOnScroll delayMs={delayMs}>{children}</RevealOnScroll>
    </Box>
  );
}

function shouldSpanFullWidth(index: number, total: number): boolean {
  return total % 2 === 1 && index === total - 1;
}

function EducationCard({ entry }: { readonly entry: EducationEntry }) {
  return (
    <Stack spacing={1}>
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

function CertificationCard({ entry }: { readonly entry: CertificationEntry }) {
  return (
    <Stack spacing={1}>
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
          sx={{ fontSize: '0.875rem', fontWeight: 600, alignSelf: 'flex-start', mt: 0.5 }}
        >
          Verify →
        </Link>
      ) : null}
    </Stack>
  );
}
