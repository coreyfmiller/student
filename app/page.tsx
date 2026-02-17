"use client"

import { useState } from "react"
import { StudentHeader } from "@/components/dashboard/student-header"
import { BiometricCards } from "@/components/dashboard/biometric-cards"
import { SocialFeed } from "@/components/dashboard/social-feed"
import { ArousalMeter } from "@/components/dashboard/arousal-meter"
import { ActionAlerts } from "@/components/dashboard/action-alerts"
import { AbcLogButton } from "@/components/dashboard/abc-log-button"
import { Button } from "@/components/ui/button"
import {
  studentProfile,
  STRESSED_DATA,
  RELAXED_DATA,
} from "@/lib/mock-data"

export default function DashboardPage() {
  const [isStressed, setIsStressed] = useState(true)
  const currentData = isStressed ? STRESSED_DATA : RELAXED_DATA

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Toggle Controls */}
        <div className="flex justify-end mb-4 gap-2">
          <Button
            variant={isStressed ? "destructive" : "outline"}
            size="sm"
            onClick={() => setIsStressed(true)}
            className="text-xs h-8"
          >
            Crisis State
          </Button>
          <Button
            variant={!isStressed ? "default" : "outline"}
            size="sm"
            onClick={() => setIsStressed(false)}
            className={`text-xs h-8 ${!isStressed ? "bg-[oklch(0.70_0.15_160)] hover:bg-[oklch(0.65_0.15_160)]" : ""}`}
          >
            Relaxed State
          </Button>
        </div>

        {/* Header */}
        <StudentHeader
          name={studentProfile.name}
          grade={studentProfile.grade}
          status={currentData.status}
          lastSync={studentProfile.lastSync}
        />

        {/* Biometric Cards Row */}
        <section className="mt-6">
          <BiometricCards
            heartRateData={currentData.heartRate}
            stressData={currentData.stress}
            sensoryLoadData={currentData.sensory}
          />
        </section>

        {/* Main 3-column grid */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Social Feed - left column */}
          <SocialFeed events={currentData.cues} />

          {/* Arousal Meter - center column */}
          <ArousalMeter level={currentData.arousalLevel} />

          {/* Action Alerts - right column */}
          <ActionAlerts alerts={currentData.alerts} />
        </section>
      </div>

      {/* Floating ABC Log Button */}
      <AbcLogButton />
    </div>
  )
}
