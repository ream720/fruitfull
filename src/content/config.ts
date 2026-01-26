import { defineCollection, z } from "astro:content";

const genetics = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    lineage: z.string(),

    status: z.enum(["1st Edition", "Promo"]),
    category: z.enum(["breeder_cut", "release", "tester", "collab"]),

    releaseDate: z.string().optional(),

    flowerTimeDays: z.tuple([z.number(), z.number()]),
    stretch: z.enum(["low", "medium", "high"]),
    biomassYield: z.enum(["low", "medium", "high"]).optional(),

    expressions: z.string(),
    overview: z.string().optional(),
    growNotes: z.string().optional(),
    hashmakerNotes: z.string().optional(),

    washMetrics: z.object({
      washerFriendly: z.boolean(),
      resinType: z.string(),
      yieldEstimate: z.string(),
      preferredMicrons: z.array(z.number()),
    }),

    whereToFind: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
        logo: z.string().optional(),
      })
    ),

    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { genetics };
