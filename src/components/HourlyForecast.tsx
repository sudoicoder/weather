import Image from "next/image"

import type Weather from "@/entities/Weather"

import formatTemperature from "@/utilities/formatTemperature"

import Card from "./ui/Card"

export default function HourlyForecast({
  hourlyForecasts,
}: HourlyForecastProps) {
  return (
    <Card.Container className="flex flex-col gap-5 p-5 border rounded">
      {hourlyForecasts.map(forecast => (
        <div
          key={forecast.time}
          className="flex items-center gap-3"
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
    </Card.Container>
  )
}

interface HourlyForecastProps {
  hourlyForecasts: Weather["hourlyForecasts"]
}
