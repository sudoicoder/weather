import Image from "next/image"

import type Weather from "@/entities/Weather"

import formatTemperature from "@/utilities/formatTemperature"

import Card from "./ui/Card"

export default function HourlyForecast({
  hourlyForecasts,
}: HourlyForecastProps) {
  return (
    <Card className="h-fit flex gap-5 p-5 border rounded overflow-x-scroll">
      {hourlyForecasts.map(forecast => (
        <div
          key={forecast.time}
          className="flex flex-col items-center gap-3"
        >
          <Image
            width={48}
            height={48}
            src={forecast.condition.icon}
            alt={forecast.condition.description}
          />

          <div>{formatTemperature(forecast.predictedTemperature)}</div>
        </div>
      ))}
    </Card>
  )
}

interface HourlyForecastProps {
  hourlyForecasts: Weather["hourlyForecasts"]
}
