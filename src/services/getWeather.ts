import Location from "@/entities/Location"
import type Weather from "@/entities/Weather"

import getEnv from "@/utilities/getEnv"

function createForecastUrl({
  days,
  latitude,
  longitude,
}: Omit<Location, "name"> & {
  days: number
}) {
  const url = new URL("forecast.json", getEnv("WEATHER_API_BASE_URL"))
  url.searchParams.set("q", `${latitude},${longitude}`)
  url.searchParams.set("days", `${days}`)
  return url
}

function createForecastHeaders() {
  const headers = new Headers()
  headers.append("key", getEnv("WEATHER_API_KEY"))
  return headers
}

interface ConditionResponse {
  text: string
  icon: string
}

interface WeatherApiResponse {
  current: {
    condition: ConditionResponse
    last_updated: string
    temp_c: number
  }
  forecast: {
    forecastday: {
      date: string
      day: {
        condition: ConditionResponse
        maxtemp_c: number
        mintemp_c: number
      }
      hour: {
        condition: ConditionResponse
        temp_c: number
        time: string
      }[]
    }[]
  }
  location: {
    lat: number
    lon: number
    name: string
  }
}

export default async function getWeather(
  location: Omit<Location, "name">
): Promise<Weather> {
  const url = createForecastUrl({ days: 7, ...location })
  const headers = createForecastHeaders()
  const response = await fetch(url, { headers })
  const json = (await response.json()) as WeatherApiResponse
  return {
    currentWeather: {
      condition: {
        description: json.current.condition.text,
        icon: `https:${json.current.condition.icon}`,
      },
      currentTemperature: json.current.temp_c,
      timestamp: json.current.last_updated,
    },
    dailyForecasts: json.forecast.forecastday.slice(1).map(fc => ({
      condition: {
        description: fc.day.condition.text,
        icon: `https:${fc.day.condition.icon}`,
      },
      date: fc.date,
      maximumTemperature: fc.day.maxtemp_c,
      minimumTemperature: fc.day.mintemp_c,
    })),
    hourlyForecasts: json.forecast.forecastday[0].hour.map(fc => ({
      condition: {
        description: fc.condition.text,
        icon: `https:${fc.condition.icon}`,
      },
      predictedTemperature: fc.temp_c,
      time: fc.time,
    })),
    location: {
      latitude: json.location.lat,
      longitude: json.location.lon,
      name: json.location.name,
    },
  }
}
