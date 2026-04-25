import DraftStats from "@/components/stats/draft-stats";
import PlanStats from "@/components/stats/plan-stats";
import { getName } from "@/server/auth";

export default async function DashboardPage() {

    const firstName = await getName();

    return (
        <div className="p-4">
            <h1 className="text-4xl font-serif">Welcome, <span className="text-green-500">{firstName}!</span></h1>
            <DraftStats />
            <PlanStats />
        </div>
    )
}