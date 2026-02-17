export interface BiometricReading {
  time: string
  value: number
}

export interface SocialCueEvent {
  id: string
  time: string
  type: "interaction" | "disengagement" | "low-participation" | "positive" | "neutral"
  description: string
  severity: "low" | "medium" | "high"
}

export interface ActionAlert {
  id: string
  priority: "low" | "medium" | "high"
  title: string
  description: string
  timestamp: string
}

export type StudentStatus = "active" | "calm" | "distressed"

export const STRESSED_DATA = {
  status: "distressed" as StudentStatus,
  arousalLevel: 78,
  heartRate: [
    { time: "9:00", value: 72 }, { time: "9:05", value: 75 }, { time: "9:10", value: 78 },
    { time: "9:15", value: 82 }, { time: "9:20", value: 85 }, { time: "9:25", value: 88 },
    { time: "9:30", value: 92 }, { time: "9:35", value: 94 }, { time: "9:40", value: 96 },
    { time: "9:45", value: 95 }, { time: "9:50", value: 97 }, { time: "9:55", value: 98 },
  ],
  stress: [
    { time: "9:00", value: 55 }, { time: "9:05", value: 58 }, { time: "9:10", value: 62 },
    { time: "9:15", value: 75 }, { time: "9:20", value: 78 }, { time: "9:25", value: 82 },
    { time: "9:30", value: 85 }, { time: "9:35", value: 80 }, { time: "9:40", value: 88 },
    { time: "9:45", value: 84 }, { time: "9:50", value: 79 }, { time: "9:55", value: 76 },
  ],
  sensory: [
    { time: "9:00", value: 45 }, { time: "9:05", value: 48 }, { time: "9:10", value: 52 },
    { time: "9:15", value: 75 }, { time: "9:20", value: 82 }, { time: "9:25", value: 68 },
    { time: "9:30", value: 45 }, { time: "9:35", value: 55 }, { time: "9:40", value: 88 },
    { time: "9:45", value: 72 }, { time: "9:50", value: 58 }, { time: "9:55", value: 50 },
  ],
  cues: [
    { id: "1", time: "9:52 AM", type: "positive", description: "Successfully initiated peer conversation", severity: "low" },
    { id: "2", time: "9:45 AM", type: "disengagement", description: "Abruptly stopped responding during active dialogue", severity: "medium" },
    { id: "4", time: "9:30 AM", type: "low-participation", description: "Low Vocal Participation: sustained silence in social group", severity: "high" },
    { id: "7", time: "9:08 AM", type: "disengagement", description: "Significant decrease in vocal tone variety (flat affect)", severity: "medium" },
  ] as SocialCueEvent[],
  alerts: [
    { id: "1", priority: "high", title: "Initiate 2-minute break", description: "Elevated stress level detected for >5 minutes. A short break may help self-regulation.", timestamp: "9:48 AM" },
    { id: "2", priority: "medium", title: "Quiet environment recommended", description: "Sensory input levels are elevated. Consider moving to a quieter area.", timestamp: "9:42 AM" },
    { id: "3", priority: "medium", title: "Encourage verbal interaction", description: "Low vocal participation detected. Gentle prompting may help re-engagement.", timestamp: "9:35 AM" },
  ] as ActionAlert[]
}

export const RELAXED_DATA = {
  status: "calm" as StudentStatus,
  arousalLevel: 35,
  heartRate: [
    { time: "9:00", value: 68 }, { time: "9:05", value: 70 }, { time: "9:10", value: 69 },
    { time: "9:15", value: 72 }, { time: "9:20", value: 71 }, { time: "9:25", value: 70 },
    { time: "9:30", value: 68 }, { time: "9:35", value: 67 }, { time: "9:40", value: 69 },
    { time: "9:45", value: 70 }, { time: "9:50", value: 72 }, { time: "9:55", value: 71 },
  ],
  stress: [
    { time: "9:00", value: 20 }, { time: "9:05", value: 22 }, { time: "9:10", value: 18 },
    { time: "9:15", value: 25 }, { time: "9:20", value: 24 }, { time: "9:25", value: 21 },
    { time: "9:30", value: 19 }, { time: "9:35", value: 20 }, { time: "9:40", value: 22 },
    { time: "9:45", value: 23 }, { time: "9:50", value: 21 }, { time: "9:55", value: 19 },
  ],
  sensory: [
    { time: "9:00", value: 35 }, { time: "9:05", value: 38 }, { time: "9:10", value: 32 },
    { time: "9:15", value: 40 }, { time: "9:20", value: 38 }, { time: "9:25", value: 35 },
    { time: "9:30", value: 32 }, { time: "9:35", value: 34 }, { time: "9:40", value: 36 },
    { time: "9:45", value: 38 }, { time: "9:50", value: 35 }, { time: "9:55", value: 33 },
  ],
  cues: [
    { id: "1", time: "9:52 AM", type: "positive", description: "Engaged in collaborative play", severity: "low" },
    { id: "3", time: "9:38 AM", type: "interaction", description: "Asked peer for clarification during lesson", severity: "low" },
    { id: "6", time: "9:15 AM", type: "positive", description: "Successfully shared material with peer", severity: "low" },
  ] as SocialCueEvent[],
  alerts: [
    { id: "4", priority: "low", title: "Positive reinforcement", description: "Student showed prosocial behavior. Consider verbal praise or token reward.", timestamp: "9:22 AM" },
  ] as ActionAlert[]
}

export const studentProfile = {
  name: "Alex Rivera",
  age: 9,
  grade: "4th Grade",
  avatar: "/placeholder-avatar.jpg",
  lastSync: "1 min ago",
}
