import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Roles, responsibilities, and impact across CapacityDey, TechVenia, GT Merch, CoinForBarter, Tek Experts, and FirstFounders.',
};

export default function ExperiencePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Experience"
        title="Where I have worked, what I have shipped."
        description="Mentorship, cloud infrastructure, real-time systems, payments, and full-stack delivery."
      />
      <ExperienceTimeline />
    </Section>
  );
}
