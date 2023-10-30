import type { Location } from "./Location"

interface Condition {
  description: string
  icon: string
}

interface CurrentWeather {
  condition: Condition
  currentTemperature: number
  timestamp: string
}

interface DailyForecast {
  condition: Condition
  date: string
  maximumTemperature: number
  minimumTemperature: number
}

interface HourlyForecast {
  condition: Condition
  predictedTemperature: number
  time: string
}

export interface Weather {
  currentWeather: CurrentWeather
  dailyForecasts: DailyForecast[]
  hourlyForecasts: HourlyForecast[]
  location: Location
}
