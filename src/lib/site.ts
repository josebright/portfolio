export const SITE = {
  name: 'Bright8',
  tagline: 'Build. Bright. Beyond.',
  shortDescription:
    'Cloud Software Engineer & Full-Stack Developer building scalable, AI-powered, real-time systems.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bright8.dev',
  author: 'Uchenna Bright Ugwumadu',
  role: 'Cloud Software Engineer | Full-Stack Developer',
  locale: 'en_US',
  cvPath: '/cv/Uchenna-Bright-Ugwumadu.pdf',
  profileImagePath: '/assets/profile/bright.jpg',
} as const;

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Writing', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;
