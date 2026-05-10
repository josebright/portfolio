import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Section } from '@/components/ui/Section';
import { findPost, posts } from '@/content/posts';
import { ArticleProse } from '@/components/blog/ArticleProse';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return { title: 'Not found' };
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: 'article' },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const Article = await loadArticle(slug);

  return (
    <>
      <Section>
        <Stack spacing={3} sx={{ maxWidth: 760 }}>
          <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: '0.18em' }}>
            {post.date.toUpperCase()} · {post.readingTimeMinutes} MIN READ
          </Typography>
          <Typography variant="h1" component="h1">
            {post.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {post.summary}
          </Typography>
        </Stack>
      </Section>
      <Section background="paper">
        <ArticleProse>
          <Article />
        </ArticleProse>
      </Section>
      <Section>
        <Button component={Link} href="/blog" variant="outlined" color="primary">
          ← All writing
        </Button>
      </Section>
    </>
  );
}

async function loadArticle(slug: string) {
  const mod = await import(`@/content/posts/${slug}.mdx`);
  return mod.default;
}
