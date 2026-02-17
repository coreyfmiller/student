import { StudentHeader } from "@/components/dashboard/student-header"
import { BiometricCards } from "@/components/dashboard/biometric-cards"
import { SocialFeed } from "@/components/dashboard/social-feed"
import { ArousalMeter } from "@/components/dashboard/arousal-meter"
import { ActionAlerts } from "@/components/dashboard/action-alerts"
import { AbcLogButton } from "@/components/dashboard/abc-log-button"
import {
  studentProfile,
  heartRateData,
  stressData,
  movementData,
  socialCues,
  actionAlerts,
  arousalLevel,
} from "@/lib/mock-data"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <StudentHeader
          name={studentProfile.name}
          grade={studentProfile.grade}
          status={studentProfile.status}
          lastSync={studentProfile.lastSync}
        />

        {/* Biometric Cards Row */}
        <section className="mt-6">
          <BiometricCards
            heartRateData={heartRateData}
            stressData={stressData}
            movementData={movementData}
          />
        </section>

        {/* Main 3-column grid */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Social Feed - left column */}
          <SocialFeed events={socialCues} />

          {/* Arousal Meter - center column */}
          <ArousalMeter level={arousalLevel} />

          {/* Action Alerts - right column */}
          <ActionAlerts alerts={actionAlerts} />
        </section>
      </div>

      {/* Floating ABC Log Button */}
      <AbcLogButton />
    </div>
  )
}
