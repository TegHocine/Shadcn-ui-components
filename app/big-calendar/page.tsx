"use client"

import { CliCommandCode } from "@/components/cli-command-code"
import { Card, CardContent } from "@/components/ui/card"
import { SidebarInset } from "@/components/ui/sidebar"
import { getCommands } from "@/lib/const/commands"
import ExampleBigCalendar from "@/registry/new-york/blocks/example-big-calendar/example-big-calendar"
import { useEffect, useState } from "react"

export default function Page() {
  const [origin, setOrigin] = useState("")

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])
  return (
    <SidebarInset>
      <main className='flex-1 overflow-auto'>
        <div className='max-w-6xl mx-auto px-6 py-12 space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold'>Event Calendar</h1>
            <p className='text-muted-foreground'>
              Advanced event calendar with multiple view modes (Day, Week,
              Month, Year, Agenda)
            </p>
          </div>

          <div className='w-full overflow-auto'>
            <Card className='w-full p-0'>
              <CardContent className='w-full p-2.5'>
                <ExampleBigCalendar />
              </CardContent>
            </Card>
          </div>

          {origin && (
            <div className='space-y-4'>
              <h2 className='text-xl font-semibold'>Installation</h2>
              <CliCommandCode
                commands={getCommands(
                  `shadcn@latest add ${origin}/r/even-calendar.json`
                )}
              />
            </div>
          )}
        </div>
      </main>
    </SidebarInset>
  )
}
