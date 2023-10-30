import * as zod from "zod"

export const GeocoordinatesSchema = zod.object({
  latitude: zod.coerce.number(),
  longitude: zod.coerce.number(),
})

export type Geocoordinates = zod.infer<typeof GeocoordinatesSchema>

export const defaultGeocoordinates: Geocoordinates = {
  latitude: 11.9416,
  longitude: 79.8083,
}
