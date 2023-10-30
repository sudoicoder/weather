import Image from "next/image"

import type { Weather } from "@/entities/Weather"

import { formatTemperature } from "@/utilities/formatTemperature"

import { Card } from "./ui/Card"
import { Progress } from "./ui/Progress"

export function DailyForecast({ dailyForecasts }: DailyForecastProps) {
  return (
    <Card className="flex flex-col gap-5 p-5 border rounded">
      {dailyForecasts.map(forecast => (
        <div
          key={forecast.date}
          className="flex items-center gap-3"
        >
          <Image
            width={48}
            height={48}
            src={forecast.condition.icon}
            alt={forecast.condition.description}
          />
          <div className="flex gap-1.5 items-center">
            <div>{formatTemperature(forecast.minimumTemperature)}</div>
            <Progress className="w-32 bg-gradient-to-r from-blue-500 to-red-600" />
            <div>{formatTemperature(forecast.maximumTemperature)}</div>
          </div>
        </div>
      ))}
    </Card>
  )
}

interface DailyForecastProps {
  dailyForecasts: Weather["dailyForecasts"]
}
