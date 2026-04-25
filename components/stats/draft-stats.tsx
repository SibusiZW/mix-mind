import { getDraftsCount } from "@/server/drafts";

export default async function DraftStats() {
    const draftsCount = await getDraftsCount();

    return (
        <div className="p-8 border mt-4 mb-4 rounded-[10px] border-green-200 w-full">
            <p className="text-sm text-gray-500 mb-6">Total drafts:</p>
            <h1 className="text-5xl">{draftsCount}</h1>
        </div>
    )
}