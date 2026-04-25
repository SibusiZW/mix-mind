'use server';

import { currentUser } from "@clerk/nextjs/server";

export async function getUserId() {
    const user = await currentUser();
    const userId = user?.id;

    if (userId) {
        return userId
    } else {
        return ""
    }
}

export async function getName() {
    const user = await currentUser()

    return user?.firstName
}