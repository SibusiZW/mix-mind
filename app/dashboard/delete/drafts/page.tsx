import DraftsDeleteDialog from "@/components/dialogs/drafts-delete-dialog";

export default function DraftsDeletePage() {
    return (
        <div className="min-h-screen flex space-x-2 flex-col w-full items-center text-center justify-center">
            <div className="w-full max-w-[350px]">
                <h1 className="text-3xl font-serif">Delete all <span className="text-red-500">drafts</span></h1>
                <DraftsDeleteDialog />
            </div>
        </div>
    )
}