import { Show, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function Intro() {
    return (
        <div className="w-full bg-white space-y-4 rounded-[10px] max-w-[450px] p-4">
            <h1 className="text-4xl font-serif">Mix<span className="text-green-500">Mind</span></h1>
            
            <Show when={'signed-out'}>
                <SignInButton>
                    <Button className="w-full bg-green-500 hover:bg-green-300">Sign in now!</Button>
                </SignInButton>
            </Show>

            <Show when={'signed-in'}>
                <Button variant={'link'} className="w-full bg-green-500 hover:bg-green-300">
                    <LayoutDashboard />
                    <Link href="/dashboard">Continue to dashboard</Link>
                </Button>
            </Show>

            <p className="text-gray-500">&copy; Tafadzwa Sibanda {new Date().getFullYear()}</p>
        </div>
    )
}