import Image from "next/image"

import type Weather from "@/entities/Weather"

import formatTemperature from "@/utilities/formatTemperature"

import Card from "./ui/Card"

export default function HourlyForecast({
  hourlyForecasts,
}: HourlyForecastProps) {
  return (
    <Card.Container>
      <Card.Content className="flex border p-5 rounded gap-5">
        {hourlyForecasts.map(forecast => (
          <div
            key={forecast.time}
            className="flex flex-col items-center"
          >
            <Image
              width={32}
              height={32}
              src={forecast.condition.icon}
              alt={forecast.condition.description}
            />
            <div>{formatTemperature(forecast.predictedTemperature)}</div>
          </div>
        ))}
      </Card.Content>
    </Card.Container>
  )
}

interface HourlyForecastProps {
  hourlyForecasts: Weather["hourlyForecasts"]
}
