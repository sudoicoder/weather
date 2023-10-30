import type { Geocoordinates } from "@/entities/Geocoordinates"

import { DailyForecast } from "@/components/DailyForecast"
import { GeocoordinatesForm } from "@/components/GeocoordinatesForm"
import { HourlyForecast } from "@/components/HourlyForecast"
import { WeatherCard } from "@/components/WeatherCard"

import { getWeather } from "@/services/getWeather"

export default async function WeatherDisplay({
  params: geocoordinates,
}: WeatherDisplayProps) {
  const weather = await getWeather(geocoordinates)
  return (
    <div className="flex flex-col items-center gap-5 my-5">
      <GeocoordinatesForm geocoordinates={geocoordinates} />
      <div className="text-3xl">{weather.location.name}</div>
      <WeatherCard currentWeather={weather.currentWeather} />
      <div className="max-w-md">
        <HourlyForecast hourlyForecasts={weather.hourlyForecasts} />
      </div>
      <DailyForecast dailyForecasts={weather.dailyForecasts} />
    </div>
  )
}

interface WeatherDisplayProps {
  params: Geocoordinates
}
