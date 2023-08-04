import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
});

// const storeSchema = z.object({
//     title: z.string(),
//     description: z.string(),
//     custom_link_label: z.string(),
//     custom_link: z.string().optional(),
//     updatedDate: z.coerce.date(),
//     pricing: z.string().optional(),
//     oldPricing:  z.string().optional(),
//     badge: z.string().optional(),
//     checkoutUrl: z.string().optional(),
//     heroImage: z.string().optional(),
// });

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;
// export type StoreSchema = z.infer<typeof storeSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });
// const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'blog': blogCollection,
    'project': projectCollection,
    // 'store': storeCollection
}