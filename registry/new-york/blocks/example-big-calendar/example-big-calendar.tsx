"use-client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AvatarGroup } from "@/registry/new-york/ui/avatar-group"
import {
  EventCalendarAgendaView,
  EventCalendarDayView,
  EventCalendarHeader,
  EventCalendarMonthView,
  EventCalendarRoot,
  EventCalendarWeekView,
  EventCalendarYearView,
} from "@/registry/new-york/ui/event-calendar"
import { fr } from "date-fns/locale"
import { CalendarRange, Columns, Grid2x2, Grid3x3, List } from "lucide-react"
import { useState } from "react"
import { CALENDAR_ITEMS_MOCK, USERS_MOCK } from "./lib/events"

export default function ExampleBigCalendar() {
  const [view, setView] = useState<
    "day" | "week" | "month" | "year" | "agenda"
  >("month")
  const [selectedUserId, setSelectedUserId] = useState<string>("all")

  const events = CALENDAR_ITEMS_MOCK || []
  const users = USERS_MOCK || []
  return (
    <div className='w-full h-auto rounded-md bg-card'>
      <EventCalendarRoot
        badgeVariant='mixed'
        view={view}
        events={events}
        locale={fr}
        onViewUpdate={setView}
        copy={{
          EVENT_COUNT: "événements",
          NO_EVENTS_SCHEDULED: "Aucun événement prévu pour le mois sélectionné",
          NO_APPOINTMENTS: "Aucun rendez-vous ou consultation pour le moment",
          HAPPENING_NOW: "En cours",

          DAY_OF: "Jour",
          OF: "sur",

          SUNDAY: "Dim",
          MONDAY: "Lun",
          TUESDAY: "Mar",
          WEDNESDAY: "Mer",
          THURSDAY: "Jeu",
          FRIDAY: "Ven",
          SATURDAY: "Sam",
        }}>
        <EventCalendarHeader>
          <ButtonGroup>
            <Button
              aria-label='View by week'
              size='icon'
              variant={view === "day" ? "default" : "outline"}
              onClick={() => {
                setView("day")
              }}>
              <List className='size-4' />
            </Button>

            <Button
              aria-label='View by week'
              size='icon'
              variant={view === "week" ? "default" : "outline"}
              onClick={() => {
                setView("week")
              }}>
              <Columns className='size-4' />
            </Button>

            <Button
              aria-label='View by month'
              size='icon'
              variant={view === "month" ? "default" : "outline"}
              onClick={() => {
                setView("month")
              }}>
              <Grid2x2 className='size-4' />
            </Button>

            <Button
              aria-label='View by year'
              size='icon'
              variant={view === "year" ? "default" : "outline"}
              onClick={() => {
                setView("year")
              }}>
              <Grid3x3 className='size-4' />
            </Button>

            <Button
              aria-label='View by agenda'
              size='icon'
              variant={view === "agenda" ? "default" : "outline"}
              onClick={() => {
                setView("agenda")
              }}>
              <CalendarRange className='size-4' />
            </Button>
          </ButtonGroup>
          <Select
            value={selectedUserId}
            onValueChange={(value) => {
              setSelectedUserId(value)
            }}>
            <SelectTrigger className='md:w-48'>
              <SelectValue placeholder='Select user' />
            </SelectTrigger>

            <SelectContent align='end'>
              <SelectItem value='all'>
                <div className='flex items-center gap-1'>
                  <AvatarGroup max={2}>
                    {users.map((user) => (
                      <Avatar
                        key={user.id}
                        className='size-6 text-xxs'>
                        <AvatarImage
                          src={user.picturePath ?? undefined}
                          alt={user.name}
                        />
                        <AvatarFallback className='text-xxs'>
                          {user.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  All
                </div>
              </SelectItem>

              {users.map((user) => (
                <SelectItem
                  key={user.id}
                  value={user.id}
                  className='flex-1'>
                  <div className='flex items-center gap-2'>
                    <Avatar className='size-6'>
                      <AvatarImage
                        src={user.picturePath ?? undefined}
                        alt={user.name}
                      />
                      <AvatarFallback className='text-xxs'>
                        {user.name[0]}
                      </AvatarFallback>
                    </Avatar>

                    <p className='truncate'>{user.name}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </EventCalendarHeader>
        <EventCalendarDayView />
        <EventCalendarWeekView />
        <EventCalendarMonthView />
        <EventCalendarYearView />
        <EventCalendarAgendaView />
      </EventCalendarRoot>
    </div>
  )
}
