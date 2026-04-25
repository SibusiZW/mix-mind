"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Brander } from "@/components/brander"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, TreePalm, Binary, SquareLibrary, Activity } from "lucide-react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const data = {
  brand: {
    name: "MixMind",
    logo: <TreePalm />
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Create new draft",
          url: "/dashboard/new/drafts",
        },
        {
          title: "Create new plan",
          url: "/dashboard/new/plans",
        },
      ],
    },
    {
      title: "Drafts",
      url: "#",
      icon: (
        <Binary />
      ),
      items: [],
    },
    {
      title: "Plans",
      url: "#",
      icon: (
        <SquareLibrary />
      ),
      items: []
    },
    {
      title: "Manage records",
      url: "#",
      icon: (
        <Activity />
      ),
      items: [
        {
          title: "Delete all drafts",
          url: "#"
        },
        {
          title: "Delete all plans",
          url: "#"
        }
      ]
    }
  ],
  }
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Brander brand={data.brand}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
