"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SidebarInset } from "@/components/ui/sidebar"
import Link from "next/link"

const components = [
  {
    id: "avatar-group",
    name: "Avatar Group",
    description:
      "Display multiple avatars with grouping and overflow handling.",
    category: "UI",
  },
  {
    id: "big-calendar",
    name: "Big Calendar",
    description: "Advanced event calendar with multiple view modes.",
    category: "Calendar",
  },
]

export default function Home() {
  return (
    <SidebarInset>
      <main className='flex-1 overflow-auto'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight mb-2'>
                Welcome to ComponentUI
              </h2>
              <p className='text-muted-foreground text-lg'>
                Beautiful, accessible components built with React and Tailwind
                CSS. Click any component to view the live example.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {components.map((component) => (
                <Link
                  key={component.id}
                  href={`/${component.id}`}>
                  <Card className='h-full p-6 hover:shadow-lg transition-shadow cursor-pointer'>
                    <div className='space-y-3'>
                      <div>
                        <h3 className='font-semibold text-lg'>
                          {component.name}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {component.category}
                        </p>
                      </div>
                      <p className='text-sm text-foreground/80'>
                        {component.description}
                      </p>
                      <Button
                        variant='outline'
                        size='sm'
                        className='w-full bg-transparent'>
                        View Example
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SidebarInset>
  )
}
