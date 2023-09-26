import { WeatherCondition } from "@/entities/Weather"

export default function getWeatherConditionIcon(
  weatherCondition: WeatherCondition
) {
  return `/icons/${weatherCondition}.png`
}
