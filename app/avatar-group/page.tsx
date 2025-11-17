"use client"

import { CliCommandCode } from "@/components/cli-command-code"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SidebarInset } from "@/components/ui/sidebar"
import { getCommands } from "@/lib/const/commands"
import { AvatarGroup } from "@/registry/new-york/ui/avatar-group"
import { useState } from "react"

const USERS = [
  {
    id: "1",
    name: "Alex Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    id: "2",
    name: "Jordan Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
  },
  {
    id: "3",
    name: "Casey Lee",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Casey",
  },
  {
    id: "4",
    name: "Morgan Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Morgan",
  },
]

export default function Page() {
  const [selectedUser, setSelectedUser] = useState("all")

  return (
    <SidebarInset>
      <main className='flex-1 overflow-auto'>
        <div className='max-w-4xl mx-auto px-6 py-12 space-y-8'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold'>Avatar Group</h1>
            <p className='text-muted-foreground'>
              Display multiple avatars with grouping and overflow handling.
            </p>
          </div>

          <Card className='p-8 space-y-6'>
            <div className='space-y-4'>
              <h3 className='font-semibold'>Avatar Selection</h3>
              <Select
                value={selectedUser}
                onValueChange={setSelectedUser}>
                <SelectTrigger className='w-full md:w-48'>
                  <SelectValue placeholder='Select user' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>
                    <div className='flex items-center gap-2'>
                      <AvatarGroup max={2}>
                        {USERS.map((user) => (
                          <Avatar
                            key={user.id}
                            className='size-6'>
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                            />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                          </Avatar>
                        ))}
                      </AvatarGroup>
                      <span>All Users</span>
                    </div>
                  </SelectItem>
                  {USERS.map((user) => (
                    <SelectItem
                      key={user.id}
                      value={user.id}>
                      <div className='flex items-center gap-2'>
                        <Avatar className='size-6'>
                          <AvatarImage
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                          />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-3'>
              <h3 className='font-semibold'>Display Examples</h3>
              <div className='space-y-4'>
                <div>
                  <p className='text-sm text-muted-foreground mb-2'>
                    All avatars
                  </p>
                  <AvatarGroup max={4}>
                    {USERS.map((user) => (
                      <Avatar key={user.id}>
                        <AvatarImage
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                        />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </div>
                <div>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Max 2 avatars (overflow shown)
                  </p>
                  <AvatarGroup max={2}>
                    {USERS.map((user) => (
                      <Avatar key={user.id}>
                        <AvatarImage
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                        />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </Card>

          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Installation</h2>
            <CliCommandCode
              commands={getCommands(
                "shadcn@latest add ${window.location.origin}/r/avatar-group.json"
              )}
            />
          </div>
        </div>
      </main>
    </SidebarInset>
  )
}
