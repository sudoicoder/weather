export interface GeoLocation {
  latitude: number
  longitute: number
  name: string
}

export const devGeoLocation: GeoLocation = {
  latitude: 11.9416,
  longitute: 79.8083,
  name: "Pondicherry, Puducherry",
}

export function getGeoLocation() {
  return devGeoLocation
}
