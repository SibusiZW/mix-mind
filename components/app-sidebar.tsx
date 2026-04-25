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
import { TerminalSquareIcon, TreePalm, Binary, SquareLibrary, Activity } from "lucide-react"
import { getDrafts } from "@/server/drafts"
import { getPlans } from "@/server/plans"

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const drafts = await getDrafts();
  const plans = await getPlans();

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
      items: drafts.map(d => d ? { title: d.title, url: `/dashboard/drafts/${d.id}` } : d),
    },
    {
      title: "Plans",
      url: "#",
      icon: (
        <SquareLibrary />
      ),
      items: plans.map(p => p ? { title: p.title, url: `/dashboard/plans/${p.id}` } : p)
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
          url: "/dashboard/delete/drafts"
        },
        {
          title: "Delete all plans",
          url: "/dashboard/delete/plans"
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
