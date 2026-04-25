import DraftStats from "@/components/stats/draft-stats";
import PlanStats from "@/components/stats/plan-stats";

export default function DashboardPage() {
    return (
        <div className="p-4">
            <h1>Welcome</h1>
            <DraftStats />
            <PlanStats />
        </div>
    )
}