import { BrainCog } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function DraftForm() {
    return (
        <div className="w-full p-6 space-x-4">
            <h1 className="text-3xl font-serif mb-4">Create a <span className="text-green-500">draft</span></h1>

            <form>
                <Input placeholder='Enter the base idea e.g, "Uber + Farming"' className="mb-2" required/>
                <Textarea placeholder="Enter you details like location and how much time needed for funding" className="mb-2" required/>

                <Button type={'submit'} className="w-full mb-6 bg-green-500 hover:bg-green-300">
                    <BrainCog />
                    Generate startup draft
                </Button>
            </form>

            <div className="w-full border border-zinc-200 p-4 overflow-y-auto relative rounded-[10px] shadow-md"></div>
        </div>
    )
}