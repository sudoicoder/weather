import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import type { Weather } from "@/entities/Weather"

import { DailyForecast } from "./DailyForecast"
import { HourlyForecast } from "./HourlyForecast"
import { WeatherCard } from "./WeatherCard"

export function WeatherDisplay({
  defaultWeather,
}: {
  defaultWeather: Weather
}) {
  const [weather] = useState(defaultWeather)
  const searchParams = useSearchParams()
  useEffect(() => {}, [searchParams])
  return (
    <>
      <div className="text-3xl">{weather.location.name}</div>
      <WeatherCard currentWeather={weather.currentWeather} />
      <div className="max-w-md">
        <HourlyForecast hourlyForecasts={weather.hourlyForecasts} />
      </div>
      <DailyForecast dailyForecasts={weather.dailyForecasts} />
    </>
  )
}
