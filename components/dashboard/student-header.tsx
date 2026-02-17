import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Activity, Wifi } from "lucide-react"
import type { StudentStatus } from "@/lib/mock-data"

interface StudentHeaderProps {
  name: string
  grade: string
  status: StudentStatus
  lastSync: string
}

const statusConfig: Record<StudentStatus, { label: string; className: string }> = {
  active: {
    label: "Active",
    className: "bg-[oklch(0.70_0.15_160)] text-[oklch(0.99_0_0)]",
  },
  calm: {
    label: "Calm",
    className: "bg-primary text-primary-foreground",
  },
  distressed: {
    label: "Distressed",
    className: "bg-destructive text-destructive-foreground",
  },
}

export function StudentHeader({ name, grade, status, lastSync }: StudentHeaderProps) {
  const statusInfo = statusConfig[status]

  return (
    <header className="flex items-center justify-between rounded-xl bg-card px-6 py-4 shadow-sm border border-border">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
            {name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-card-foreground">{name}</h1>
            <Badge className={statusInfo.className}>
              <Activity className="mr-1 h-3 w-3" />
              {statusInfo.label}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{grade}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Wifi className="h-4 w-4 text-[oklch(0.70_0.15_160)]" />
        <span>Last sync: {lastSync}</span>
      </div>
    </header>
  )
}
