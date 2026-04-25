'use client';

import { BrainCircuit, Loader2, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { Plan } from "@/db/schema";


export default function PlanDisplay({ plan }: { plan: Plan | undefined }) {

    async function copy() {
        if (plan?.response) {
            await navigator.clipboard.writeText(plan.response);
            toast.success("Succesfully copied to clipboard!!")
        }
    }

    return (
        <div className="w-full p-6 space-x-4 max-w-[700px]">
            <h1 className="text-3xl font-serif mb-4">{plan?.title}</h1>

            <form>
                <Textarea value={plan?.draft} placeholder='Enter your startup draft here' className="mb-2" readOnly/>
                <Textarea value={plan?.techDetails} placeholder="Enter the details of your tech stack and the ecosystem you're targeting e.g mobile or web" className="mb-2" readOnly/>
            </form>

            <div className="w-full border mb-4 border-zinc-200 p-4 overflow-y-auto relative rounded-[10px] shadow-md">
                <ReactMarkdown>{plan?.response}</ReactMarkdown>
            </div>

            <Button onClick={copy} className="w-full">
                <Copy />
                Copy to clipboard
            </Button>
        </div>
    )
}