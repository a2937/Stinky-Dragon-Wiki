// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";


/**
 * TODO: Determine how to add character portraits to the schema
 */
const characters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/characters" }),
  schema: z.object({
    name: z.string(),
    martialStatus: z.string().optional(),
    alias: z.string().optional(),
    relatives: z.string(),
    class: z.string(),
    species: z.string(),
    gender: z.string(),
    pronouns: z.string(),
    portrayedBy: z.string(),
    debutEpisode: z.string(),
  }),
});

/**
 * TODO: Determine how to add thumbnails to the schema 
 */
const episodes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/episodes" }),
  schema: z.object({
    campaign: z.string(),
    arc: z.string(),
    episodeNumber: z.number(),
    releaseDate: z.coerce.date(),
    runtime: z.string(),
    youtubeLink: z.string(),
    spotifyLink: z.string(),
    previousEpisode: z.string(), 
    nextEpisode: z.string()
  }),
});

export const collections = {characters,episodes}