import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const drafts = pgTable('drafts', {
    id: uuid().defaultRandom().primaryKey(),
    baseIdea: text().notNull(),
    details: text().notNull(),
    response: text().notNull(),
    userId: text().notNull(),
    createdAt: timestamp().defaultNow()
})

export const plans = pgTable('plans', {
    id: uuid().defaultRandom().primaryKey(),
    draft: text().notNull(),
    techDetails: text().notNull(),
    response: text().notNull(),
    userId: text().notNull(),
    createdAt: timestamp().defaultNow()
})