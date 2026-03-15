import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),

  schema: z.object({
    title: z.string(),
    order: z.number(),
    slug: z.string().optional()
  }),
});

export const collections = {
  pages,
};