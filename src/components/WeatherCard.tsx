import type { Weather } from "@/entities/Weather"

import formatTemperature from "@/utilities/formatTemperature"

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold">
        {formatTemperature(weather.currentWeather.temperature)}
      </span>
      <span className="italic">{weather.geoLocation.name}</span>
    </div>
  )
}

interface WeatherCardProps {
  weather: Weather
}
