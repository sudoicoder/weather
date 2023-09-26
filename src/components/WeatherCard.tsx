import type { GeoLocation } from "@/entities/GeoLocation"
import type { CurrentWeather } from "@/entities/Weather"

import formatTemperature from "@/utilities/formatTemperature"

export default function WeatherCard({
  currentWeather,
  geoLocation,
}: WeatherCardProps) {
  return (
    <div className="flex flex-col items-center align-baseline">
      <span className="text-3xl font-bold">
        {formatTemperature(currentWeather.currentTemperature)}
      </span>
      <span className="italic">{geoLocation.name}</span>
      <span className="text-sm">{currentWeather.condition}</span>
      <div>
        <span>{formatTemperature(currentWeather.maximumTemperature)}</span>
        {" / "}
        <span>{formatTemperature(currentWeather.minimumTemperature)}</span>
      </div>
    </div>
  )
}

interface WeatherCardProps {
  currentWeather: CurrentWeather
  geoLocation: GeoLocation
}
