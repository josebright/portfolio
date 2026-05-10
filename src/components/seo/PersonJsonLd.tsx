import { profile } from '@/content/profile';
import { SITE } from '@/lib/site';

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    alternateName: profile.shortName,
    jobTitle: SITE.role,
    description: SITE.shortDescription,
    url: SITE.url,
    email: `mailto:${profile.email}`,
    image: `${SITE.url}${SITE.profileImagePath}`,
    sameAs: profile.social.map((entry) => entry.href),
    knowsAbout: [
      'Cloud Architecture',
      'Full-Stack Engineering',
      'AI Integration',
      'Real-time Systems',
    ],
  };
  return (
    <script
      type="application/ld+json"
      // Static, sanitized payload — safe to inject at build time.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
