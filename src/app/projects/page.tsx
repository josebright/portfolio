import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectGrid } from '@/components/sections/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected production work in cloud infrastructure, fintech, AI, real-time systems, and developer tools.',
};

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Projects"
        title="Things I have built and shipped."
        description="From AWS-deployed scientific platforms to crypto SDKs and AI-powered IoT vulnerability tools."
      />
      <ProjectGrid />
    </Section>
  );
}
