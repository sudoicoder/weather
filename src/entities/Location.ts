import type { Geocoordinates } from "./Geocoordinates"

export interface Location extends Geocoordinates {
  name: string
}
