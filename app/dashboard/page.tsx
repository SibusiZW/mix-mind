'use client';

import DraftStats from "@/components/stats/draft-stats";
import PlanStats from "@/components/stats/plan-stats";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {

    const { user } = useUser();

    return (
        <div className="p-4">
            <h1 className="text-4xl font-serif">Welcome, <span className="text-green-500">{user?.firstName}!</span></h1>
            <DraftStats />
            <PlanStats />
        </div>
    )
}