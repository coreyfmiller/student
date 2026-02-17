export const studentProfile = {
  name: "Alex Rivera",
  age: 9,
  grade: "4th Grade",
  avatar: "/placeholder-avatar.jpg",
  status: "distressed" as const,
  lastSync: "1 min ago",
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
  { time: "9:20", value: 85 },
  { time: "9:25", value: 88 },
  { time: "9:30", value: 92 },
  { time: "9:35", value: 94 },
  { time: "9:40", value: 96 },
  { time: "9:45", value: 95 },
  { time: "9:50", value: 97 },
  { time: "9:55", value: 98 },
]

export const stressData: BiometricReading[] = [
  { time: "9:00", value: 55 },
  { time: "9:05", value: 58 },
  { time: "9:10", value: 62 },
  { time: "9:15", value: 75 },
  { time: "9:20", value: 78 },
  { time: "9:25", value: 82 },
  { time: "9:30", value: 85 },
  { time: "9:35", value: 80 },
  { time: "9:40", value: 88 },
  { time: "9:45", value: 84 },
  { time: "9:50", value: 79 },
  { time: "9:55", value: 76 },
]

export const sensoryLoadData: BiometricReading[] = [
  { time: "9:00", value: 45 },
  { time: "9:05", value: 48 },
  { time: "9:10", value: 52 },
  { time: "9:15", value: 75 },
  { time: "9:20", value: 82 },
  { time: "9:25", value: 68 },
  { time: "9:30", value: 45 },
  { time: "9:35", value: 55 },
  { time: "9:40", value: 88 },
  { time: "9:45", value: 72 },
  { time: "9:50", value: 58 },
  { time: "9:55", value: 50 },
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

export const arousalLevel = 78 // 0-100 scale
