import { Show } from "@clerk/nextjs";
import React from "react";
import HomePage from "../page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Show when={'signed-out'}>
                <HomePage />
            </Show>

            <Show when={'signed-in'}>
                <SidebarProvider>
                    <AppSidebar />

                    <main className="w-full p-4">
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                           disableTransitionOnChange
                        >

                            <div>
                                <SidebarTrigger />
                                <ThemeToggle />
                            </div>

                            {children}
                            <Toaster />
                        </ThemeProvider>

                    </main>
                </SidebarProvider>
            </Show>
        </>
    )
}