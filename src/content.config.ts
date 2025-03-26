import { glob } from 'astro/loaders';
import { defineCollection, z, type CollectionEntry } from 'astro:content';

const aktualnosci = defineCollection({
  loader: glob({
    base: './src/content/aktualnosci',
    pattern: ['!index.md', '*.md', '*.mdx'],
  }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().nullable().optional(),
      
    }),
});

export const collections = { aktualnosci };

const isDev = import.meta.env.DEV;

export const sortPostsByDate = (
  a: CollectionEntry<'aktualnosci'>,
  b: CollectionEntry<'aktualnosci'>
) => {
  return a.data.date.valueOf() - b.data.date.valueOf();
};

export const sortPostsByDateReverse = (
  a: CollectionEntry<'aktualnosci'>,
  b: CollectionEntry<'aktualnosci'>
) => {
  return b.data.date.valueOf() - a.data.date.valueOf();
};

export const filterAllPosts = (post: CollectionEntry<'aktualnosci'>) => {
  return !post.data.draft || isDev;
};
