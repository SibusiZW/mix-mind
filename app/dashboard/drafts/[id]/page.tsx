'use client';

import DraftDisplay from "@/components/display/draft-display";
import { Draft } from "@/db/schema";
import { getDraft } from "@/server/drafts";
import { use, useEffect, useState } from "react";

interface DraftsPageProps {
    params: Promise<{
        id: string
    }>
}

export default function DraftsPage({ params }: DraftsPageProps) {

    const { id } = use(params)
    const [draft, setDraft] = useState<Draft>();

    useEffect(() => {
        const obtainDraft = async () => {
            const d = await getDraft(id);
            setDraft(d);
        }
        obtainDraft()
    }, [])

    return (
        <div className="w-full p-6">
            <DraftDisplay draft={draft}/>
        </div>
    )
}