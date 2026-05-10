import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/projects', '/experience', '/blog', '/now', '/uses', '/contact'];
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
