import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { usesGroups, type UsesGroup } from '@/content/uses';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The hardware, software, and tools I use day-to-day.',
};

export default function UsesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Uses"
        title="Tools, languages, and the kit I reach for."
        description="A working list of what I actually use day to day. Inspired by Wes Bos' /uses convention."
      />
      <Stack spacing={6}>
        {usesGroups.map((group, index) => (
          <RevealOnScroll key={group.title} delayMs={index * 60}>
            <UsesBlock group={group} />
          </RevealOnScroll>
        ))}
      </Stack>
    </Section>
  );
}

function UsesBlock({ group }: { readonly group: UsesGroup }) {
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
          minWidth: 220,
          color: 'text.secondary',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        {group.title}
      </Typography>
      <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none', flex: 1, maxWidth: 760 }}>
        {group.items.map((item) => (
          <Box component="li" key={item.name} sx={{ mb: 1.25 }}>
            <Typography component="span" sx={{ fontWeight: 600 }}>
              {item.name}
            </Typography>
            {item.note ? (
              <Typography component="span" color="text.secondary">
                {' — '}
                {item.note}
              </Typography>
            ) : null}
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
