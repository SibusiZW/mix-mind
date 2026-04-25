'use server';

import { db } from "@/db/drizzle";
import { getUserId } from "./auth";
import { plans } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getPlansCount() {
    const id = await getUserId();

    const count = await db.$count(plans, eq(plans.userId, id))
    return count
}

export async function createPlan(title: string, draft: string, techDetails: string, response: string) {
    const userId = await getUserId();
    await db.insert(plans).values({ title: title, draft: draft, techDetails: techDetails, response: response, userId: userId })
}

export async function getPlans() {
    const userId = await getUserId();

    const allPlans = await db.select().from(plans).where(eq(plans.userId, userId))
    return allPlans
}

export async function getPlan(id: string) {
    const allPlans = await db.select().from(plans).where(eq(plans.id, id)).limit(1);
    return allPlans[0];
} 

export async function deletePlans() {
    const userId = await getUserId();
    await db.delete(plans).where(eq(plans.userId, userId))
}