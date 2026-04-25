import { BrainCircuit, BrainCog } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function PlanForm() {
    return (
        <div className="w-full p-6 space-x-4">
            <h1 className="text-3xl font-serif mb-4">Create a <span className="text-green-500">plan</span></h1>

            <form>
                <Textarea placeholder='Enter your startup draft here' className="mb-2" required/>
                <Textarea placeholder="Enter the details of your tech stack and the ecosystem you're targeting e.g mobile or web" className="mb-2" required/>

                <Button type={'submit'} className="w-full mb-6 bg-green-500 hover:bg-green-300">
                    <BrainCircuit />
                    Generate startup plan
                </Button>
            </form>

            <div className="w-full border border-zinc-200 p-4 overflow-y-auto relative rounded-[10px] shadow-md"></div>
        </div>
    )
}