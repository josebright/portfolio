import type { Metadata } from 'next';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { posts, type PostMeta } from '@/content/posts';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on engineering, cloud, and shipping software that matters.',
};

export default function BlogPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Writing"
        title="Notes on engineering, cloud, and shipping."
        description="Short essays on what I have learned in production."
      />
      <Stack divider={<Hairline />} spacing={0}>
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </Stack>
    </Section>
  );
}

function PostListItem({ post }: { readonly post: PostMeta }) {
  return (
    <Stack
      component={Link}
      href={`/blog/${post.slug}`}
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 1, md: 6 }}
      sx={{ paddingBlock: 5, color: 'text.primary', textDecoration: 'none' }}
    >
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ minWidth: 140, letterSpacing: '0.04em' }}
      >
        {post.date} · {post.readingTimeMinutes} min read
      </Typography>
      <Stack spacing={1}>
        <Typography variant="h3" component="h2">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.summary}
        </Typography>
      </Stack>
    </Stack>
  );
}

function Hairline() {
  return <hr style={{ border: 0, borderTop: '1px solid var(--b8-palette-divider)', margin: 0 }} />;
}
