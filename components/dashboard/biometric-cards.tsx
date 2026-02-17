"use client"

import { BiometricCard } from "./biometric-card"
import { Heart, Brain, Volume2 } from "lucide-react"
import type { BiometricReading } from "@/lib/mock-data"

interface BiometricCardsProps {
  heartRateData: BiometricReading[]
  stressData: BiometricReading[]
  sensoryLoadData: BiometricReading[]
}

export function BiometricCards({ heartRateData, stressData, sensoryLoadData }: BiometricCardsProps) {
  const currentHR = heartRateData[heartRateData.length - 1].value
  const currentStress = stressData[stressData.length - 1].value
  const currentSensory = sensoryLoadData[sensoryLoadData.length - 1].value

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <BiometricCard
        title="Heart Rate"
        value={currentHR}
        unit="BPM"
        icon={<Heart className="h-4 w-4" />}
        data={heartRateData}
        color="oklch(0.60 0.20 25)"
        fillColor="oklch(0.60 0.20 25)"
      />
      <BiometricCard
        title="Sensory Load"
        value={currentSensory}
        unit="dB"
        icon={<Volume2 className="h-4 w-4" />}
        data={sensoryLoadData}
        color="oklch(0.55 0.15 240)"
        fillColor="oklch(0.55 0.15 240)"
      />
      <BiometricCard
        title="Stress Level"
        value={currentStress}
        unit="/ 100"
        icon={<Brain className="h-4 w-4" />}
        data={stressData}
        color="oklch(0.75 0.15 80)"
        fillColor="oklch(0.75 0.15 80)"
      />
    </div>
  )
}
