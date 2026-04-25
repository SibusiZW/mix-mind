import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const drafts = pgTable('drafts', {
    id: uuid().defaultRandom().primaryKey(),
    title: text().notNull(),
    baseIdea: text().notNull(),
    details: text().notNull(),
    response: text().notNull(),
    userId: text().notNull(),
    createdAt: timestamp().defaultNow()
})

export const plans = pgTable('plans', {
    id: uuid().defaultRandom().primaryKey(),
    title: text().notNull(),
    draft: text().notNull(),
    techDetails: text().notNull(),
    response: text().notNull(),
    userId: text().notNull(),
    createdAt: timestamp().defaultNow()
})

export type Plan = typeof plans.$inferSelect
export type Draft = typeof drafts.$inferSelect