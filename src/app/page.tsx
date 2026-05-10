import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AboutPanels } from '@/components/sections/AboutPanels';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { BrandStatement } from '@/components/sections/BrandStatement';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section>
        <SectionHeading
          eyebrow="About"
          title="Bridging engineering depth with business outcomes."
          description="Six lenses on how I work, what I build, and why it matters."
        />
        <AboutPanels />
      </Section>
      <BrandStatement />
      <Section background="paper">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Production work across cloud, fintech, AI, and developer tools."
        />
        <ProjectGrid />
      </Section>
      <Section>
        <SectionHeading eyebrow="Experience" title="Five years shipping software that scales." />
        <ExperienceTimeline />
      </Section>
    </>
  );
}
