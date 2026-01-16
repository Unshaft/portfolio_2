import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    locale: z.enum(['fr', 'en']),
    description: z.string(),
    slug: z.string().optional(),
    image: z.string().optional(),
    github: z.string().optional(),
    stack: z.array(z.string()).optional(),
    tag: z.array(z.string()).optional(),
    translationOf: z.string(),
    order: z.number().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    updatedDate: z.string().optional(),
    category: z.enum(['pro', 'perso', 'study']).optional(),
  }),
});

export const collections = {
  projects,
};
