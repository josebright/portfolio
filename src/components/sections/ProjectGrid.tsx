'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { projects, type Project } from '@/content/projects';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

const List = styled('ol')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const Row = styled('li')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBlock: theme.spacing(5),
}));

const Index = styled('span')(({ theme }) => ({
  fontFamily: 'var(--font-sora), sans-serif',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 700,
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  letterSpacing: '0.06em',
}));

const titleSx = {
  transition: 'color 200ms ease',
  '&:hover': { color: 'secondary.dark' },
} as const;

export function ProjectGrid() {
  return (
    <List>
      {projects.map((project, index) => (
        <RevealOnScroll key={project.slug} delayMs={index * 50}>
          <ProjectRow project={project} index={index + 1} />
        </RevealOnScroll>
      ))}
    </List>
  );
}

function ProjectRow({ project, index }: { readonly project: Project; readonly index: number }) {
  return (
    <Row>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 2, md: 6 }}
        alignItems={{ md: 'baseline' }}
      >
        <Box sx={{ minWidth: 64 }}>
          <Index>{String(index).padStart(2, '0')}</Index>
        </Box>
        <Stack spacing={1.5} sx={{ flex: 1 }}>
          <ProjectTitle project={project} />
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.08em' }}>
            {project.tagline}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 720 }}>
            {project.summary}
          </Typography>
          <ProjectMeta project={project} />
        </Stack>
      </Stack>
    </Row>
  );
}

function ProjectTitle({ project }: { readonly project: Project }) {
  if (project.caseStudy) {
    return (
      <Typography
        variant="h3"
        component={Link}
        href={`/projects/${project.slug}`}
        sx={{ ...titleSx, textDecoration: 'none', color: 'text.primary', display: 'inline-block' }}
      >
        {project.title} →
      </Typography>
    );
  }
  return (
    <Typography variant="h3" component="h3" sx={titleSx}>
      {project.title}
    </Typography>
  );
}

function ProjectMeta({ project }: { readonly project: Project }) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 3 }}
      sx={{ pt: 0.5 }}
      flexWrap="wrap"
    >
      <Typography variant="caption" color="text.secondary">
        {project.stack.join(' · ')}
      </Typography>
      {project.links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener"
          style={{ fontWeight: 600 }}
        >
          {link.label} →
        </Link>
      ))}
    </Stack>
  );
}
