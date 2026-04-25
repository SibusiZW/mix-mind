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