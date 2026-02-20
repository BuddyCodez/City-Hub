
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userId: v.string(), // Links to BetterAuth user ID
    name: v.string(),
    city: v.object({
      name: v.string(),
      country: v.string(),
      state: v.optional(v.string()),
      lat: v.number(),
      lon: v.number(),
    }),
    bio: v.optional(v.string()),
    interests: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    isPublic: v.optional(v.boolean()),
  })
    .index("by_userId", ["userId"]),
