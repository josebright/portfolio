import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.author}`,
    short_name: SITE.name,
    description: SITE.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1E8',
    theme_color: '#3D2618',
    icons: [{ src: '/assets/brand/logo.png', sizes: 'any', type: 'image/png', purpose: 'any' }],
  };
}
