import type { GeoLocation } from "./GeoLocation"
import { devGeoLocation } from "./GeoLocation"

export interface WeatherData {
  currentWeather: {
    temperature: number
  }
  geoLocation: GeoLocation
}

export const devWeatherData: WeatherData = {
  currentWeather: {
    temperature: 30,
  },
  geoLocation: devGeoLocation,
}

export function getWeatherData() {
  return devWeatherData
}
