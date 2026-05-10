'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { RevealOnScroll } from './RevealOnScroll';

const Eyebrow = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'var(--font-inter), sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: theme.palette.text.secondary,
}));

const Rule = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: 40,
  height: 1,
  backgroundColor: 'currentColor',
  opacity: 0.4,
  marginRight: theme.spacing(1.5),
}));

interface SectionHeadingProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <RevealOnScroll>
      <Stack spacing={3} sx={{ mb: { xs: 6, md: 9 }, maxWidth: 880 }}>
        {eyebrow ? (
          <Eyebrow>
            <Rule />
            {eyebrow}
          </Eyebrow>
        ) : null}
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
        {description ? (
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            {description}
          </Typography>
        ) : null}
      </Stack>
    </RevealOnScroll>
  );
}
