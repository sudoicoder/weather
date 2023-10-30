import * as zod from "zod"

export const GeocoordinatesSchema = zod.object({
  latitude: zod.number(),
  longitude: zod.number(),
})

export type Geocoordinates = zod.infer<typeof GeocoordinatesSchema>

export const defaultGeocoordinates: Geocoordinates = {
  latitude: 11.9416,
  longitude: 79.8083,
}
