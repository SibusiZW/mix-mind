import { Show } from "@clerk/nextjs";
import React from "react";
import HomePage from "../page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Show when={'signed-out'}>
                <HomePage />
            </Show>

            <Show when={'signed-in'}>
                <SidebarProvider>
                    <AppSidebar />

                    <main>
                        <div>
                            <SidebarTrigger />
                            
                        </div>
                        
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                           disableTransitionOnChange
                        >
                            {children}
                        </ThemeProvider>

                    </main>
                </SidebarProvider>
            </Show>
        </>
    )
}