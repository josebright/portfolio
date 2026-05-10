'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { experience, type ExperienceEntry } from '@/content/experience';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const List = styled('ol')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Row = styled('li')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBlock: theme.spacing(6),
}));

const PeriodLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-sora), sans-serif',
  fontWeight: 600,
  fontSize: '0.875rem',
  letterSpacing: '0.04em',
  color: theme.palette.text.secondary,
}));

export function ExperienceTimeline() {
  return (
    <List>
      {experience.map((entry, index) => (
        <RevealOnScroll key={`${entry.company}-${entry.period}`} delayMs={index * 50}>
          <ExperienceRow entry={entry} />
        </RevealOnScroll>
      ))}
    </List>
  );
}

function ExperienceRow({ entry }: { readonly entry: ExperienceEntry }) {
  return (
    <Row>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 6 }}>
        <Box sx={{ minWidth: 200 }}>
          <PeriodLabel>{entry.period}</PeriodLabel>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
            {entry.location}
          </Typography>
        </Box>
        <Stack spacing={2} sx={{ flex: 1 }}>
          <Typography variant="h4" component="h3">
            {entry.title} · <RoleCompany>{entry.company}</RoleCompany>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {entry.summary}
          </Typography>
          <Highlights highlights={entry.highlights} />
          <Impact impact={entry.impact} />
          {entry.stack ? <StackLine stack={entry.stack} /> : null}
        </Stack>
      </Stack>
    </Row>
  );
}

const RoleCompany = styled('span')(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

function Highlights({ highlights }: { readonly highlights: ReadonlyArray<string> }) {
  return (
    <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
      {highlights.map((line) => (
        <Box component="li" key={line} sx={{ mb: 0.75 }}>
          <Typography variant="body2">{line}</Typography>
        </Box>
      ))}
    </Box>
  );
}

function Impact({ impact }: { readonly impact: string }) {
  return (
    <Typography variant="body2">
      <strong>Impact:</strong>{' '}
      <Box component="span" sx={{ color: 'text.secondary' }}>
        {impact}
      </Box>
    </Typography>
  );
}

function StackLine({ stack }: { readonly stack: ReadonlyArray<string> }) {
  return (
    <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.06em' }}>
      {stack.join(' · ')}
    </Typography>
  );
}
