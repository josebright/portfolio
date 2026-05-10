'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { profile } from '@/content/profile';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: `${theme.spacing(7)} ${theme.spacing(6)}`,
  gridTemplateColumns: 'repeat(1, 1fr)',
  [theme.breakpoints.up('sm')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
  [theme.breakpoints.up('md')]: { gridTemplateColumns: 'repeat(3, 1fr)' },
}));

export function AboutPanels() {
  return (
    <Grid>
      {profile.panels.map((panel, index) => (
        <RevealOnScroll key={panel.title} delayMs={index * 60}>
          <PanelCard title={panel.title} body={panel.body} />
        </RevealOnScroll>
      ))}
    </Grid>
  );
}

function PanelCard({ title, body }: { readonly title: string; readonly body: string }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {body}
      </Typography>
    </Stack>
  );
}
