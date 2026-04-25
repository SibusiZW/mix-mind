'use client';

import { BrainCircuit, Loader2, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import React, { useEffect, useState } from "react";
import { generatePlan } from "@/server/openrouter";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { createPlan } from "@/server/plans";

export default function PlanForm() {

    const [title, setTitle] = useState("");
    const [draft, setDraft] = useState("");
    const [tech, setTech] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        setLoading(true);
        const res = await generatePlan(draft, tech);
        setResponse(res);
        setLoading(false);
    }

    async function copy() {
        await navigator.clipboard.writeText(response);
        toast.success("Succesfully copied to clipboard!!")

        setResponse('');
        setTech('')
        setDraft('')
        setTitle('')
    }

    useEffect(() => {
        const updateDB = async () => {
            await createPlan(title, draft, tech, response)
        }

        if (response !== '') {
            updateDB()
        }
    }, [response])

    return (
        <div className="w-full p-6 space-x-4 max-w-[700px]">
            <h1 className="text-3xl font-serif mb-4">Create a <span className="text-green-500">plan</span></h1>

            <form onSubmit={handleSubmit}>
                <Input placeholder="Enter the desired title of your plan" className="mb-2" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                <Textarea value={draft} placeholder='Enter your startup draft here' className="mb-2" onChange={(e) => setDraft(e.target.value)} required/>
                <Textarea value={tech} placeholder="Enter the details of your tech stack and the ecosystem you're targeting e.g mobile or web" className="mb-2" onChange={(e) => setTech(e.target.value)} required/>

                <Button type={'submit'} className="w-full mb-6 bg-green-500 hover:bg-green-300">
                    {loading ? <Loader2 className="animate-spin"/> : <><BrainCircuit /> Generate a startup plan</>}
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