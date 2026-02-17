"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ArousalMeterProps {
  level: number // 0-100
}

function getZoneInfo(level: number) {
  if (level <= 35) return { label: "Calm", color: "oklch(0.70 0.15 160)", zone: "green" }
  if (level <= 65) return { label: "Elevated", color: "oklch(0.75 0.15 80)", zone: "yellow" }
  return { label: "Crisis", color: "oklch(0.60 0.20 25)", zone: "red" }
}

export function ArousalMeter({ level }: ArousalMeterProps) {
  const zone = getZoneInfo(level)

  // SVG arc gauge
  const radius = 80
  const strokeWidth = 14
  const circumference = Math.PI * radius // half circle
  const progress = (level / 100) * circumference

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">Physiological Arousal</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center">
        <div className="relative">
          <svg width="200" height="120" viewBox="0 0 200 120">
            {/* Background arc */}
            <path
              d="M 10 110 A 80 80 0 0 1 190 110"
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className="text-muted/50"
            />
            {/* Colored progress arc */}
            <path
              d="M 10 110 A 80 80 0 0 1 190 110"
              fill="none"
              stroke={zone.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${progress} ${circumference}`}
              style={{ transition: "stroke-dasharray 0.6s ease, stroke 0.4s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
            <span className="text-4xl font-bold text-card-foreground">{level}</span>
            <span className="text-xs text-muted-foreground mt-0.5">/ 100</span>
          </div>
        </div>

        {/* Zone labels */}
        <div className="flex items-center justify-between w-full mt-4 px-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.70_0.15_160)]" />
            <span className="text-xs text-muted-foreground">Calm</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.15_80)]" />
            <span className="text-xs text-muted-foreground">Elevated</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.60_0.20_25)]" />
            <span className="text-xs text-muted-foreground">Crisis</span>
          </div>
        </div>

        {/* Current state badge */}
        <div
          className="mt-4 rounded-full px-4 py-1.5 text-sm font-medium"
          style={{ backgroundColor: `color-mix(in oklch, ${zone.color} 15%, transparent)`, color: zone.color }}
        >
          Current: {zone.label}
        </div>
      </CardContent>
    </Card>
  )
}
