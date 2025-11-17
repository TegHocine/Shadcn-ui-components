"use client"

import { SidebarInset } from "@/components/ui/sidebar"
import ExampleBigCalendarDnd from "@/registry/new-york/blocks/example-big-calendar-dnd/example-big-calendar-dnd"

export default function Page() {
  return (
    <SidebarInset>
      <main className='flex-1 overflow-auto'>
        <div className='max-w-6xl mx-auto px-6 py-12 space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold'>Big Calendar Dnd</h1>
            <p className='text-muted-foreground'>
              Advanced event calendar with multiple view modes (Day, Week,
              Month, Year, Agenda) and drag and drop
            </p>
          </div>

          <div className='w-full overflow-auto'>
            <ExampleBigCalendarDnd />
          </div>

          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Installation</h2>
            <div className='bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto'>
              npx shadcn-cli@latest add big-calendar
            </div>
          </div>
        </div>
      </main>
    </SidebarInset>
  )
}
