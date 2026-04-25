'use client';

import { BrainCog, Copy, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import React, { useEffect, useState } from "react";
import { generateDraft } from "@/server/openrouter";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { createDraft } from "@/server/drafts";

export default function DraftForm() {

    const [title, setTitle] = useState("");
    const [baseIdea, setBaseIdea] = useState("");
    const [details, setDetails] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault()
        setLoading(true);
        const res = await generateDraft(baseIdea, details)
        setLoading(false);
        setResponse(res);
    }

    async function copy() {
        await navigator.clipboard.writeText(response)
        toast.success("Succesfully copied to clipboard!!")
    }

    useEffect(() => {
        const updateDB = async () => {
            await createDraft(title, baseIdea, details, response)
        }

        if (response.trim() !== '') {
            updateDB();
        }
    }, [response])

    return (
        <div className="w-full max-w-[700px] p-6 space-x-4">
            <h1 className="text-3xl font-serif mb-4">Create a <span className="text-green-500">draft</span></h1>

            <form onSubmit={handleSubmit}>
                <Input placeholder="Enter the desired title of your draft" className="mb-2" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                <Input value={baseIdea} placeholder='Enter the base idea e.g, "Uber + Farming"' className="mb-2" onChange={(e) => setBaseIdea(e.target.value)} required/>
                <Textarea value={details} placeholder="Enter you details like location and how much time needed for funding" className="mb-2" onChange={(e) => setDetails(e.target.value)} required/>

                <Button type={'submit'} className="w-full mb-6 bg-green-500 hover:bg-green-300">
                    {loading ? <Loader2 className="animate-spin"/> : <><BrainCog /> Generate a startup draft</>}
                </Button>
            </form>

            <div className="w-full border mb-4 border-zinc-200 p-4 overflow-y-auto relative rounded-[10px] shadow-md">
                <ReactMarkdown>{response}</ReactMarkdown>
            </div>
            <Button onClick={copy} className="w-full">
                <Copy />
                Copy to clipboard
            </Button>
        </div>
    )
}