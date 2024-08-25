import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .or(z.date())
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        tags: z.array(z.string()).default(["others"]),
        author: z.array(z.string()).optional(),
        draft: z.boolean(),
    }),
});

export const collections = { blogs };
