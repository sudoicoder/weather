import { addDays, addHours } from "date-fns"

import type { GeoLocation } from "./GeoLocation"
import { devGeoLocation } from "./GeoLocation"

export type WeatherCondition = "cloudy" | "rainy" | "sunny"

export interface CurrentWeather {
  condition: WeatherCondition
  currentTemperature: number
  date: Date
  maximumTemperature: number
  minimumTemperature: number
}

export interface Forecast {
  condition: WeatherCondition
  date: Date
  maximumTemperature: number
  minimumTemperature: number
}

export interface Weather {
  currentWeather: CurrentWeather
  dailyForecasts: Forecast[]
  geoLocation: GeoLocation
  hourlyForecasts: Forecast[]
}

const devDate = new Date(2023, 9, 26)

const devCurrentWeather: CurrentWeather = {
  condition: "rainy",
  currentTemperature: 30,
  date: devDate,
  maximumTemperature: 32,
  minimumTemperature: 27,
}

const devDailyForecasts: Forecast[] = [
  {
    condition: "cloudy",
    date: addDays(devDate, 1),
    maximumTemperature: 33,
    minimumTemperature: 26,
  },
  {
    condition: "rainy",
    date: addDays(devDate, 2),
    maximumTemperature: 33,
    minimumTemperature: 26,
  },
  {
    condition: "sunny",
    date: addDays(devDate, 3),
    maximumTemperature: 34,
    minimumTemperature: 26,
  },
  {
    condition: "sunny",
    date: addDays(devDate, 4),
    maximumTemperature: 34,
    minimumTemperature: 26,
  },
]

const devHourlyForecasts: Forecast[] = [
  {
    condition: "cloudy",
    date: addHours(devDate, 1),
    maximumTemperature: 33,
    minimumTemperature: 26,
  },
  {
    condition: "rainy",
    date: addHours(devDate, 2),
    maximumTemperature: 33,
    minimumTemperature: 26,
  },
  {
    condition: "sunny",
    date: addHours(devDate, 3),
    maximumTemperature: 34,
    minimumTemperature: 26,
  },
  {
    condition: "sunny",
    date: addHours(devDate, 4),
    maximumTemperature: 34,
    minimumTemperature: 26,
  },
]

const devWeather: Weather = {
  currentWeather: devCurrentWeather,
  dailyForecasts: devDailyForecasts,
  geoLocation: devGeoLocation,
  hourlyForecasts: devHourlyForecasts,
}

export function getWeather() {
  return devWeather
}
