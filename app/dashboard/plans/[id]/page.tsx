'use client'

import PlanDisplay from "@/components/display/plan-display";
import { Plan } from "@/db/schema";
import { getPlan } from "@/server/plans";
import { use, useEffect, useState } from "react"

interface PlanPageProps {
    params : Promise<{
        id: string
    }>
}

export default function PlanPage({ params }: PlanPageProps) {

    const { id } = use(params);
    const [plan, setPlan] = useState<Plan>()

    useEffect(() => {
        const obtainPlan = async () => {
            const p = await getPlan(id);
            setPlan(p);
        }
        obtainPlan()
    }, [])

    return (
        <div className="w-full p-4">
            <PlanDisplay plan={plan}/>
        </div>
    )
}