import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle, Clock, Volume2, Users, Star, Check } from "lucide-react"
import type { ActionAlert } from "@/lib/mock-data"

const priorityConfig: Record<ActionAlert["priority"], { color: string; bgColor: string; borderColor: string }> = {
  high: {
    color: "text-destructive",
    bgColor: "bg-destructive/5",
    borderColor: "border-destructive/20",
  },
  medium: {
    color: "text-[oklch(0.60_0.15_80)]",
    bgColor: "bg-[oklch(0.75_0.15_80/0.08)]",
    borderColor: "border-[oklch(0.75_0.15_80/0.2)]",
  },
  low: {
    color: "text-[oklch(0.70_0.15_160)]",
    bgColor: "bg-[oklch(0.70_0.15_160/0.08)]",
    borderColor: "border-[oklch(0.70_0.15_160/0.2)]",
  },
}

const alertIcons: Record<string, typeof AlertTriangle> = {
  "Initiate 2-minute break": Clock,
  "Quiet environment recommended": Volume2,
  "Encourage verbal interaction": Users,
  "Positive reinforcement": Star,
}

interface ActionAlertsProps {
  alerts: ActionAlert[]
}

export function ActionAlerts({ alerts }: ActionAlertsProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-[oklch(0.75_0.15_80)]" />
          <CardTitle className="text-base font-semibold text-card-foreground">Suggested Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <ScrollArea className="h-[400px] pr-1">
          <div className="flex flex-col gap-3">
            {alerts.map((alert) => {
              const config = priorityConfig[alert.priority]
              const Icon = alertIcons[alert.title] || AlertTriangle
              return (
                <div
                  key={alert.id}
                  className={`rounded-lg border p-3 ${config.bgColor} ${config.borderColor}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 ${config.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-semibold text-card-foreground">{alert.title}</h4>
                        <span className="text-[10px] text-muted-foreground shrink-0">{alert.timestamp}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-snug mb-2">{alert.description}</p>
                      <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5">
                        <Check className="h-3 w-3" />
                        Acknowledge
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
