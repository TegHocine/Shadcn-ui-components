"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Code2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const components = [
  {
    id: "/avatar-group/",
    name: "Avatar Group",
    category: "UI",
  },
  {
    id: "/big-calendar/",
    name: "Big Calendar",
    category: "Calendar",
  },
]

// Group components by category
const groupedComponents = components.reduce((acc, component) => {
  const category = component.category
  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(component)
  return acc
}, {} as Record<string, typeof components>)

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className='px-4 py-6'>
        <Link
          href='/'
          className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center'>
            <Code2 className='w-5 h-5 text-primary-foreground' />
          </div>
          <span className='font-bold text-lg'>ComponentUI</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {components.map((component) => (
          <SidebarMenuItem key={component.id}>
            <SidebarMenuButton
              asChild
              isActive={pathname === `${component.id}`}>
              <Link href={`${component.id}`}>{component.name}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
