import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/sections/ContactForm';
import { profile } from '@/content/profile';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for collaboration, mentorship, or hiring.',
};

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="For collaborations, mentorship, hiring, or to say hello."
      />
      <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={2} sx={{ minWidth: 240 }}>
          <ContactItem label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactItem
            label="Phone"
            value={profile.phone}
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          />
          <ContactItem label="Based in" value={profile.location} />
        </Stack>
        <ContactForm />
      </Stack>
    </Section>
  );
}

interface ContactItemProps {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

function ContactItem({ label, value, href }: ContactItemProps) {
  return (
    <Stack spacing={0.25}>
      <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.12em' }}>
        {label.toUpperCase()}
      </Typography>
      {href ? (
        <Link href={href} color="text.primary">
          {value}
        </Link>
      ) : (
        <Typography>{value}</Typography>
      )}
    </Stack>
  );
}
