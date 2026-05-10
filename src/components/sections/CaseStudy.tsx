'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import type { CaseStudy as CaseStudyData } from '@/content/projects';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const SectionLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-sora), sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: theme.palette.text.secondary,
}));

const Block = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

interface CaseStudyProps {
  readonly study: CaseStudyData;
}

export function CaseStudy({ study }: CaseStudyProps) {
  return (
    <Stack spacing={6}>
      <CaseStudyParagraph label="Problem" body={study.problem} />
      <CaseStudyList label="Approach" items={study.approach} />
      <CaseStudyList label="Outcome" items={study.outcome} />
      <CaseStudyList label="Lessons" items={study.lessons} />
    </Stack>
  );
}

function CaseStudyParagraph({ label, body }: { readonly label: string; readonly body: string }) {
  return (
    <RevealOnScroll>
      <Block>
        <Stack spacing={3}>
          <SectionLabel>{label}</SectionLabel>
          <Typography variant="body1" sx={{ maxWidth: 760 }}>
            {body}
          </Typography>
        </Stack>
      </Block>
    </RevealOnScroll>
  );
}

interface ListProps {
  readonly label: string;
  readonly items: ReadonlyArray<string>;
}

function CaseStudyList({ label, items }: ListProps) {
  return (
    <RevealOnScroll>
      <Block>
        <Stack spacing={3}>
          <SectionLabel>{label}</SectionLabel>
          <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none', maxWidth: 760 }}>
            {items.map((item, index) => (
              <CaseStudyListItem key={item} item={item} index={index + 1} />
            ))}
          </Box>
        </Stack>
      </Block>
    </RevealOnScroll>
  );
}

function CaseStudyListItem({ item, index }: { readonly item: string; readonly index: number }) {
  return (
    <Stack
      component="li"
      direction="row"
      spacing={3}
      sx={{ paddingBlock: 2, borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Box sx={{ minWidth: 32, fontVariantNumeric: 'tabular-nums', color: 'text.secondary' }}>
        {String(index).padStart(2, '0')}
      </Box>
      <Typography variant="body1">{item}</Typography>
    </Stack>
  );
}
