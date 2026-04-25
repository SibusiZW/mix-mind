'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { deletePlans } from "@/server/plans";

export default function PlansDeleteDialog() {

    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        setLoading(true);
        await deletePlans()
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
                <DialogTitle>Delete plans</DialogTitle>
                <Button onClick={handleDelete} variant={'destructive'} className="w-full">
                    {loading ? <Loader2 className="animate-spin"/> : "Confirm to delete"}
                </Button>
                <DialogDescription>This process can't be reversed</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}