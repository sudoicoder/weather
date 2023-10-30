import Image from "next/image"

import type Weather from "@/entities/Weather"

import formatTemperature from "@/utilities/formatTemperature"

import Card from "./ui/Card"

export default function WeatherCard({ currentWeather }: WeatherCardProps) {
  return (
    <Card>
      <Card.Content className="flex flex-col items-center p-5 gap-2">
        <div className="text-3xl font-bold">
          {formatTemperature(currentWeather.currentTemperature)}
        </div>
        <Image
          width={64}
          height={64}
          src={currentWeather.condition.icon}
          alt={currentWeather.condition.description}
        />
        <div>{formatTemperature(currentWeather.currentTemperature)}</div>
      </Card.Content>
    </Card>
  )
}

interface WeatherCardProps {
  currentWeather: Weather["currentWeather"]
}
