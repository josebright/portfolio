'use client';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { skillGroups, type SkillGroup } from '@/content/skills';

const Grid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(4),
  gridTemplateColumns: 'repeat(1, 1fr)',
  [theme.breakpoints.up('sm')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
}));

export function SkillsCloud() {
  return (
    <Grid>
      {skillGroups.map((group) => (
        <SkillGroupBlock key={group.name} group={group} />
      ))}
    </Grid>
  );
}

function SkillGroupBlock({ group }: { readonly group: SkillGroup }) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="h5" component="h3">
        {group.name}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {group.items.map((item) => (
          <Chip key={item} label={item} variant="outlined" />
        ))}
      </Stack>
    </Stack>
  );
}
