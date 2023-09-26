import Image from "next/image"

import type { GeoLocation } from "@/entities/GeoLocation"
import type { CurrentWeather } from "@/entities/Weather"

import formatTemperature from "@/utilities/formatTemperature"
import getWeatherConditionIcon from "@/utilities/getWeatherConditionIcon"

import Card from "./ui/Card"

export default function WeatherCard({
  currentWeather,
  geoLocation,
}: WeatherCardProps) {
  return (
    <Card.Container>
      <Card.Content className="flex flex-col items-center p-5 gap-2">
        <div className="text-3xl font-bold">
          {formatTemperature(currentWeather.currentTemperature)}
        </div>
        <div className="italic">{geoLocation.name}</div>
        <Image
          width={64}
          height={64}
          src={getWeatherConditionIcon(currentWeather.condition)}
          alt={currentWeather.condition}
        />
        <div className="flex gap-1.5">
          <div>{formatTemperature(currentWeather.maximumTemperature)}</div>
          {"/"}
          <div>{formatTemperature(currentWeather.minimumTemperature)}</div>
        </div>
      </Card.Content>
    </Card.Container>
  )
}

interface WeatherCardProps {
  currentWeather: CurrentWeather
  geoLocation: GeoLocation
}
