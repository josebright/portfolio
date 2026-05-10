import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Section } from '@/components/ui/Section';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { findProject, getCaseStudySlugs, projects } from '@/content/projects';

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

interface PageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project || !project.caseStudy) notFound();

  return (
    <>
      <Section>
        <Stack spacing={4} sx={{ maxWidth: 920 }}>
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.18em' }}>
            CASE STUDY
          </Typography>
          <Typography variant="h1" component="h1">
            {project.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {project.tagline}
          </Typography>
          {project.impact ? (
            <Typography variant="body1">
              <strong>Impact:</strong> {project.impact}
            </Typography>
          ) : null}
          <ProjectStackLine stack={project.stack} />
        </Stack>
      </Section>
      <Section background="paper">
        <CaseStudy study={project.caseStudy} />
      </Section>
      <Section>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button component={Link} href="/projects" variant="outlined" color="primary">
            All projects
          </Button>
          <NextProjectButton currentSlug={project.slug} />
        </Stack>
      </Section>
    </>
  );
}

function ProjectStackLine({ stack }: { readonly stack: ReadonlyArray<string> }) {
  return (
    <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.06em' }}>
      {stack.join(' · ')}
    </Typography>
  );
}

function NextProjectButton({ currentSlug }: { readonly currentSlug: string }) {
  const others = projects.filter((p) => Boolean(p.caseStudy) && p.slug !== currentSlug);
  const next = others[0];
  if (!next) return null;
  return (
    <Button component={Link} href={`/projects/${next.slug}`} variant="contained" color="primary">
      Read next: {next.title} →
    </Button>
  );
}
