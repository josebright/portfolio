export interface PostMeta {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly date: string;
  readonly readingTimeMinutes: number;
}

export const posts: ReadonlyArray<PostMeta> = [
  {
    slug: 'shipping-faster-with-fewer-mistakes',
    title: 'Shipping faster with fewer mistakes',
    summary:
      'Notes from migrating two production platforms to AWS — what mattered, what was theatre, and what I would change if I started again.',
    date: '2026-05-09',
    readingTimeMinutes: 6,
  },
];

export function findPost(slug: string): PostMeta | undefined {
  return posts.find((post) => post.slug === slug);
}
