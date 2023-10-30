import { redirect } from "next/navigation"

import { defaultGeocoordinates } from "@/entities/Geocoordinates"

const { latitude: defaultLatitude, longitude: defaultLongitude } =
  defaultGeocoordinates

export default function Home() {
  return redirect(`/latitude/${defaultLatitude}/longitude/${defaultLongitude}`)
}
