import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),

    description: z.string(),

    image: z.string().optional(),
    github: z.string().optional(),
    stack: z.array(z.string()).optional(),
    tag: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects,
};
