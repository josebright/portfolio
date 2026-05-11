import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AboutPanels } from '@/components/sections/AboutPanels';
import { SkillsCloud } from '@/components/sections/SkillsCloud';
import { Credentials } from '@/components/sections/Credentials';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who Bright is, how he leads, what he builds, and what sets him apart.',
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About"
          title="The Bright8 brand — clarity, strength, and sophistication."
          description="Six questions that capture who I am, what I do, how I lead, and what I stand for."
        />
        <AboutPanels />
      </Section>
      <Section background="paper">
        <SectionHeading eyebrow="Skills" title="What I bring to a team." />
        <SkillsCloud />
      </Section>
      <Section>
        <SectionHeading eyebrow="Credentials" title="Education and certifications." />
        <Credentials />
      </Section>
    </>
  );
}
