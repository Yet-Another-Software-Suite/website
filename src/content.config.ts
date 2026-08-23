import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z
		.object({
			title: z.string(),
			sortDate: z.coerce.date(),
			displayDate: z.string().optional(),
			excerpt: z.string(),
			image: z.string().optional(),
			imageAlt: z.string().optional(),
			logoHeader: z.boolean().default(false),
			source: z.string().optional(),
		})
		.refine((data) => Boolean(data.image) !== data.logoHeader, {
			message: "Each post needs exactly one of `image` or `logoHeader: true`.",
		})
		.refine((data) => !data.image || Boolean(data.imageAlt), {
			message: "`imageAlt` is required whenever `image` is set.",
		}),
});

export const collections = { blog };
