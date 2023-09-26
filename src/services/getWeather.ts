import type Weather from "@/entities/Weather"

import getEnv from "@/utilities/getEnv"

function getUrl({
  days,
  latitude,
  longitude,
}: {
  days: number
  latitude: number
  longitude: number
}) {
  const url = new URL(getEnv("WEATHER_API_BASE_URL"))
  url.searchParams.set("key", getEnv("WEATHER_API_KEY"))
  url.searchParams.set("q", `${latitude},${longitude}`)
  url.searchParams.set("days", `${days}`)
  return url
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

export async function getWeather(): Promise<Weather> {
  const url = getUrl({ days: 7, latitude: 11.9416, longitude: 79.8083 })
  const res = (await fetch(url).then(r => r.json())) as WeatherApiResponse
  return {
    currentWeather: {
      condition: {
        description: res.current.condition.text,
        icon: `https:${res.current.condition.icon}`,
      },
      currentTemperature: res.current.temp_c,
      timestamp: res.current.last_updated,
    },
    dailyForecasts: res.forecast.forecastday.slice(1).map(fc => ({
      condition: {
        description: fc.day.condition.text,
        icon: `https:${fc.day.condition.icon}`,
      },
      date: fc.date,
      maximumTemperature: fc.day.maxtemp_c,
      minimumTemperature: fc.day.mintemp_c,
    })),
    hourlyForecasts: res.forecast.forecastday[0].hour.map(fc => ({
      condition: {
        description: fc.condition.text,
        icon: `https:${fc.condition.icon}`,
      },
      predictedTemperature: fc.temp_c,
      time: fc.time,
    })),
    location: {
      latitude: res.location.lat,
      longitute: res.location.lon,
      name: res.location.name,
    },
  }
}
