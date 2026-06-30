export interface City {
  name: string
  dates: string
  role: string
  summary: string

  stay: {
    type: string
    status: string
    notes: string
  }

  highlights: readonly string[]
  priorities: readonly string[]
  food: readonly string[]
  shopping: readonly string[]
}
