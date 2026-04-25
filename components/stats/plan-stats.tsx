export default async function PlanStats() {
    const plansCount = 0;

    return (
        <div className="p-8 border mb-4 rounded-[10px] border-green-200 w-full">
            <p className="text-sm text-gray-500 mb-6">Total plans:</p>
            <h1 className="text-5xl">{plansCount}</h1>
        </div>
    )
}