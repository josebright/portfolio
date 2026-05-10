import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { nowSections, nowUpdatedAt, type NowSection } from '@/content/now';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I am building, learning, reading, and wanting right now.',
};

export default function NowPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow={`Updated ${nowUpdatedAt}`}
        title="What I'm focused on right now."
        description="A snapshot of what is occupying my time and attention. Inspired by Derek Sivers' /now-page convention."
      />
      <Stack spacing={6}>
        {nowSections.map((section, index) => (
          <RevealOnScroll key={section.title} delayMs={index * 60}>
            <NowBlock section={section} />
          </RevealOnScroll>
        ))}
      </Stack>
    </Section>
  );
}

function NowBlock({ section }: { readonly section: NowSection }) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 2, md: 6 }}
      sx={{ borderTop: '1px solid', borderColor: 'divider', paddingTop: 3 }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          minWidth: 200,
          color: 'text.secondary',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        {section.title}
      </Typography>
      <Box component="ul" sx={{ pl: 2.5, m: 0, flex: 1, maxWidth: 760 }}>
        {section.items.map((item) => (
          <Box component="li" key={item} sx={{ mb: 1 }}>
            <Typography variant="body1">{item}</Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
