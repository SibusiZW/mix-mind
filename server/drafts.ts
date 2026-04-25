'use server';

import { db } from "@/db/drizzle";
import { getUserId } from "./auth";
import { drafts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getDraftsCount() {
    const id = await getUserId();

    const count = await db.$count(drafts, eq(drafts.userId, id))
    return count
}

export async function createDraft(title: string, baseIdea: string, details: string, response: string) {
    const userId = await getUserId();
    await db.insert(drafts).values({ title: title, baseIdea: baseIdea, details: details, userId: userId, response: response })
}