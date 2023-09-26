import { getWeather } from "@/entities/Weather"

import DailyForecast from "@/components/DailyForecast"
import HourlyForecast from "@/components/HourlyForecast"
import WeatherCard from "@/components/WeatherCard"

export default async function Home() {
  const weather = await getWeather()
  return (
    <main className="flex flex-col items-center gap-5 my-5">
      <WeatherCard
        currentWeather={weather.currentWeather}
        geoLocation={weather.geoLocation}
      />
      <HourlyForecast hourlyForecasts={weather.hourlyForecasts} />
      <DailyForecast dailyForecasts={weather.dailyForecasts} />
    </main>
  )
}
