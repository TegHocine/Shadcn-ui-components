import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import usePersistedState from "@/hooks/use-persisted-state"
import { CheckIcon, ClipboardIcon, TerminalIcon, XIcon } from "lucide-react"
import { useState } from "react"

export const CliCommandCode = ({
  commands,
}: {
  commands: {
    label: string
    code: string
  }[]
}) => {
  const [selectedTab, setSelectedTab] = usePersistedState(
    "cli-method",
    commands[0].label
  )
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle"
  )

  const handleCopy = () => {
    const command = commands.find((cmd) => cmd.label === selectedTab)
    if (command) {
      navigator.clipboard
        .writeText(command.code)
        .then(() => setCopyState("copied"))
        .catch(() => setCopyState("error"))
        .finally(() => setTimeout(() => setCopyState("idle"), 2000))
    }
  }

  return (
    <Card className='not-content bg-code p-0'>
      <CardContent className='p-0'>
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className='gap-0'>
          <div className='flex items-center border-b border-input px-3 py-1'>
            <div className='mr-2 flex size-4 items-center justify-center bg-foreground/70'>
              <TerminalIcon className='size-3 text-code' />
            </div>
            <TabsList className='font-mono'>
              {commands.map((command, index) => (
                <TabsTrigger
                  key={index}
                  value={command.label}
                  className='data-[state=active]:border-input data-[state=active]:bg-muted/50'>
                  {command.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Tooltip open={copyState !== "idle"}>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleCopy}
                  variant='ghost'
                  className='ml-auto size-8 text-muted-foreground'>
                  {copyState === "idle" ? (
                    <ClipboardIcon />
                  ) : copyState === "copied" ? (
                    <CheckIcon />
                  ) : (
                    <XIcon className='text-destructive' />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side='left'>
                {copyState === "error" ? "Error!" : "Copied"}
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            {commands.map((command) => (
              <TabsContent
                key={command.label}
                value={command.label}
                className='no-scrollbar overflow-x-auto py-3.5 text-muted-foreground'>
                <pre>
                  <code className='px-4'>{command.code}</code>
                </pre>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
