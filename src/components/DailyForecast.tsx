import Image from "next/image"

import type { Forecast } from "@/entities/Weather"

import formatDate from "@/utilities/formatDate"
import formatTemperature from "@/utilities/formatTemperature"
import getWeatherConditionIcon from "@/utilities/getWeatherConditionIcon"

import Card from "./ui/Card"
import Progress from "./ui/Progress"

export default function DailyForecast({ dailyForecasts }: DailyForecastProps) {
  return (
    <Card.Container className="flex flex-col gap-5 p-5 border rounded">
      {dailyForecasts.map(forecast => (
        <div
          key={formatDate(forecast.date, "dd-MM-yyyy")}
          className="flex items-center gap-3"
        >
          <Image
            width={32}
            height={32}
            src={getWeatherConditionIcon(forecast.condition)}
            alt={forecast.condition}
          />
          <div className="flex gap-1.5 items-center">
            <div>{formatTemperature(forecast.minimumTemperature)}</div>
            <Progress className="w-32 bg-gradient-to-r from-blue-500 to-red-600" />
            <div>{formatTemperature(forecast.maximumTemperature)}</div>
          </div>
        </div>
      ))}
    </Card.Container>
  )
}

interface DailyForecastProps {
  dailyForecasts: Forecast[]
}
