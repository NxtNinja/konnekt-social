import * as React from "react";
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  Search,
  Home,
  Globe,
  CirclePlus,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Konnekt",
      logo: GalleryVerticalEnd,
      plan: "Social Media",
    },
  ],
  navMain: [
    {
      title: "Feed",
      url: "/",
      icon: Home,
    },
    {
      title: "Explore",
      url: "/explore",
      icon: Globe,
    },
    {
      title: "Search",
      url: "/search",
      icon: Search,
    },
    {
      title: "Create",
      url: "/create",
      icon: CirclePlus,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
