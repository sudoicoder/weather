import * as zod from "zod"

export const GeocoordinatesSchema = zod.object({
  latitude: zod.number().default(0),
  longitude: zod.number().default(0),
})

export type Geocoordinates = zod.infer<typeof GeocoordinatesSchema>
