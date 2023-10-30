import DailyForecast from "@/components/DailyForecast"
import HourlyForecast from "@/components/HourlyForecast"
import WeatherCard from "@/components/WeatherCard"

import getWeather from "@/services/getWeather"

export default async function Home() {
  const weather = await getWeather({ latitude: 11.9416, longitude: 79.8083 })
  return (
    <main className="flex flex-col items-center gap-5 my-5">
      <div className="text-3xl">{weather.location.name}</div>
      <WeatherCard currentWeather={weather.currentWeather} />
      <div className="max-w-md">
        <HourlyForecast hourlyForecasts={weather.hourlyForecasts} />
      </div>
      <DailyForecast dailyForecasts={weather.dailyForecasts} />
    </main>
  )
}
