'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { deleteDrafts } from "@/server/drafts";

export default function DraftsDeleteDialog() {

    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        setLoading(true);
        await deleteDrafts();
        setLoading(false);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mt-4 w-full" variant={'destructive'}>
                    <Trash2 />
                    Delete
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center space-x-4">
                <DialogTitle>Delete drafts</DialogTitle>
                <Button onClick={handleDelete} variant={'destructive'} className="w-full">
                    {loading ? <Loader2 className="animate-spin"/> : "Confirm to delete"}
                </Button>
                <DialogDescription>This process can't be reversed</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}