'use server';

import { db } from "@/db/drizzle";
import { getUserId } from "./auth";
import { plans } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getPlansCount() {
    const id = await getUserId();

    const count = await db.$count(plans, eq(plans.id, id))
    return count
}