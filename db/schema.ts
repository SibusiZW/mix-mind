import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const drafts = pgTable('drafts', {
    id: uuid().defaultRandom().primaryKey(),
    baseIdea: text().notNull(),
    details: text().notNull(),
    userId: text().notNull(),
    createdAt: timestamp().defaultNow()
})