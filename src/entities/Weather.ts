import type { GeoLocation } from "./GeoLocation"
import { devGeoLocation } from "./GeoLocation"

export interface Weather {
  currentWeather: {
    temperature: number
  }
  geoLocation: GeoLocation
}

export const devWeather: Weather = {
  currentWeather: {
    temperature: 30,
  },
  geoLocation: devGeoLocation,
}

export function getWeather() {
  return devWeather
}
