import Image from "next/image"

import type { Forecast } from "@/entities/Weather"

import formatDate from "@/utilities/formatDate"
import formatTemperature from "@/utilities/formatTemperature"
import getWeatherConditionIcon from "@/utilities/getWeatherConditionIcon"

import Card from "./ui/Card"

export default function HourlyForecast({
  hourlyForecasts,
}: HourlyForecastProps) {
  return (
    <Card.Container>
      <Card.Content className="flex border p-5 rounded gap-5">
        {hourlyForecasts.map(forecast => (
          <div
            key={formatDate(forecast.date, "dd-MM-yyyy hh:mm:ss")}
            className="flex flex-col items-center"
          >
            <Image
              width={32}
              height={32}
              src={getWeatherConditionIcon(forecast.condition)}
              alt={forecast.condition}
            />
            <div className="flex gap-1.5">
              <div>{formatTemperature(forecast.maximumTemperature)}</div>
              {"/"}
              <div>{formatTemperature(forecast.minimumTemperature)}</div>
            </div>
          </div>
        ))}
      </Card.Content>
    </Card.Container>
  )
}

interface HourlyForecastProps {
  hourlyForecasts: Forecast[]
}
