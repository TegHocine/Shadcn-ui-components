"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Code2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const components = [
  {
    id: "/avatar-group",
    name: "Avatar Group",
    category: "UI",
  },
  {
    id: "/big-calendar",
    name: "Big Calendar",
    category: "Calendar",
  },
  {
    id: "/big-calendar-dnd",
    name: "Big Calendar dnd",
    category: "Calendar dnd",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <>
      <Sidebar
        collapsible='offcanvas'
        {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className='data-[slot=sidebar-menu-button]:!p-1.5'>
                <Link
                  href='/'
                  className='flex items-center gap-2'>
                  <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center'>
                    <Code2 className='w-5 h-5 text-primary-foreground' />
                  </div>
                  <span className='font-bold text-lg'>ComponentUI</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className='flex flex-col gap-2'>
              <SidebarMenu>
                {components.map((component) => (
                  <Link
                    key={component.id}
                    href={`${component.id}`}
                    className='cursor-pointer'>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        className='cursor-pointer'
                        isActive={pathname === `${component.id}`}>
                        {component.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </Link>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
