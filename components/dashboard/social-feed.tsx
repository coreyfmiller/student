import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, MicOff, MessageSquareOff, ThumbsUp, Minus } from "lucide-react"
import type { SocialCueEvent } from "@/lib/mock-data"

const typeConfig: Record<SocialCueEvent["type"], { icon: typeof MessageCircle; color: string; bgColor: string }> = {
  interaction: {
    icon: MessageCircle,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  disengagement: {
    icon: MessageSquareOff,
    color: "text-[oklch(0.75_0.15_80)]",
    bgColor: "bg-[oklch(0.75_0.15_80/0.1)]",
  },
  "low-participation": {
    icon: MicOff,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  positive: {
    icon: ThumbsUp,
    color: "text-[oklch(0.70_0.15_160)]",
    bgColor: "bg-[oklch(0.70_0.15_160/0.1)]",
  },
  neutral: {
    icon: Minus,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
  },
}

const severityDot: Record<SocialCueEvent["severity"], string> = {
  low: "bg-[oklch(0.70_0.15_160)]",
  medium: "bg-[oklch(0.75_0.15_80)]",
  high: "bg-destructive",
}

interface SocialFeedProps {
  events: SocialCueEvent[]
}

export function SocialFeed({ events }: SocialFeedProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-card-foreground">AI Social Cues Timeline</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <ScrollArea className="h-[400px] pr-3">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
            <div className="flex flex-col gap-4">
              {events.map((event) => {
                const config = typeConfig[event.type]
                const Icon = config.icon
                return (
                  <div key={event.id} className="relative flex gap-3 pl-1">
                    <div className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${config.bgColor}`}>
                      <Icon className={`h-4 w-4 ${config.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-medium text-muted-foreground">{event.time}</span>
                        <span className={`h-1.5 w-1.5 rounded-full ${severityDot[event.severity]}`} />
                      </div>
                      <p className="text-sm text-card-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
