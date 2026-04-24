import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    lang: z.enum(['pt', 'en', 'es']),
    slug: z.string(),
    category: z.string().optional(),
    translations: z
      .object({
        pt: z.string().optional(),
        en: z.string().optional(),
        es: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { posts };
