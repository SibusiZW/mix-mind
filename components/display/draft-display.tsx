'use client';

import { BrainCog, Copy, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { Draft } from "@/db/schema";

export default function DraftDisplay({ draft }: { draft: Draft | undefined }) {

    async function copy() {
        if (draft?.response) {
            await navigator.clipboard.writeText(draft.response)
            toast.success("Succesfully copied to clipboard!!")
        }
    }

    return (
        <div className="w-full max-w-[700px] p-6 space-x-4">
            <h1 className="text-3xl font-serif mb-4 text-green-500">{draft?.title}</h1>

            <form>
                <Input defaultValue={draft?.baseIdea} placeholder='Enter the base idea e.g, "Uber + Farming"' className="mb-2" readOnly/>
                <Textarea defaultValue={draft?.details} placeholder="Enter you details like location and how much time needed for funding" className="mb-2" readOnly/>
            </form>

            <div className="w-full border mb-4 border-zinc-200 p-4 overflow-y-auto relative rounded-[10px] shadow-md">
                <ReactMarkdown>{draft?.response}</ReactMarkdown>
            </div>
            <Button onClick={copy} className="w-full">
                <Copy />
                Copy to clipboard
            </Button>
        </div>
    )
}