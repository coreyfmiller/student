export const studentProfile = {
  name: "Alex Rivera",
  age: 9,
  grade: "4th Grade",
  avatar: "/placeholder-avatar.jpg",
  status: "active" as const,
  lastSync: "2 min ago",
}

export type StudentStatus = "active" | "calm" | "distressed"

export interface BiometricReading {
  time: string
  value: number
}

export const heartRateData: BiometricReading[] = [
  { time: "9:00", value: 72 },
  { time: "9:05", value: 75 },
  { time: "9:10", value: 78 },
  { time: "9:15", value: 82 },
  { time: "9:20", value: 80 },
  { time: "9:25", value: 76 },
  { time: "9:30", value: 74 },
  { time: "9:35", value: 79 },
  { time: "9:40", value: 85 },
  { time: "9:45", value: 81 },
  { time: "9:50", value: 77 },
  { time: "9:55", value: 74 },
]

export const stressData: BiometricReading[] = [
  { time: "9:00", value: 22 },
  { time: "9:05", value: 25 },
  { time: "9:10", value: 30 },
  { time: "9:15", value: 45 },
  { time: "9:20", value: 42 },
  { time: "9:25", value: 38 },
  { time: "9:30", value: 35 },
  { time: "9:35", value: 40 },
  { time: "9:40", value: 55 },
  { time: "9:45", value: 48 },
  { time: "9:50", value: 38 },
  { time: "9:55", value: 32 },
]

export const movementData: BiometricReading[] = [
  { time: "9:00", value: 30 },
  { time: "9:05", value: 45 },
  { time: "9:10", value: 55 },
  { time: "9:15", value: 40 },
  { time: "9:20", value: 35 },
  { time: "9:25", value: 60 },
  { time: "9:30", value: 70 },
  { time: "9:35", value: 50 },
  { time: "9:40", value: 45 },
  { time: "9:45", value: 65 },
  { time: "9:50", value: 40 },
  { time: "9:55", value: 35 },
]

export interface SocialCueEvent {
  id: string
  time: string
  type: "interaction" | "disengagement" | "low-participation" | "positive" | "neutral"
  description: string
  severity: "low" | "medium" | "high"
}

export const socialCues: SocialCueEvent[] = [
  {
    id: "1",
    time: "9:52 AM",
    type: "positive",
    description: "Successfully initiated peer conversation",
    severity: "low",
  },
  {
    id: "2",
    time: "9:45 AM",
    type: "disengagement",
    description: "Abruptly stopped responding during active dialogue",
    severity: "medium",
  },
  {
    id: "3",
    time: "9:38 AM",
    type: "interaction",
    description: "Responded to peer question with brief verbal answer",
    severity: "low",
  },
  {
    id: "4",
    time: "9:30 AM",
    type: "low-participation",
    description: "Low Vocal Participation: sustained silence in social group",
    severity: "high",
  },
  {
    id: "5",
    time: "9:22 AM",
    type: "neutral",
    description: "Listening to peer conversation without vocal input",
    severity: "low",
  },
  {
    id: "6",
    time: "9:15 AM",
    type: "positive",
    description: "Used polite request to share materials",
    severity: "low",
  },
  {
    id: "7",
    time: "9:08 AM",
    type: "disengagement",
    description: "Significant decrease in vocal tone variety (flat affect)",
    severity: "medium",
  },
]

export interface ActionAlert {
  id: string
  priority: "low" | "medium" | "high"
  title: string
  description: string
  timestamp: string
}

export const actionAlerts: ActionAlert[] = [
  {
    id: "1",
    priority: "high",
    title: "Initiate 2-minute break",
    description: "Elevated stress level detected for >5 minutes. A short break may help self-regulation.",
    timestamp: "9:48 AM",
  },
  {
    id: "2",
    priority: "medium",
    title: "Quiet environment recommended",
    description: "Sensory input levels are elevated. Consider moving to a quieter area.",
    timestamp: "9:42 AM",
  },
  {
    id: "4",
    priority: "low",
    title: "Positive reinforcement",
    description: "Student showed prosocial behavior. Consider verbal praise or token reward.",
    timestamp: "9:22 AM",
  },
  {
    id: "3",
    priority: "medium",
    title: "Encourage verbal interaction",
    description: "Low vocal participation detected. Gentle prompting may help re-engagement.",
    timestamp: "9:35 AM",
  },
]

export const arousalLevel = 62 // 0-100 scale
