import assertUnreachable from "./assertUnreachable"

export type TemperatureUnit = "celsius" | "fahrenheit"

export default function formatTemperature(
  temperature: number,
  temperatureUnit: TemperatureUnit = "celsius"
) {
  return `${temperature} ${getTemperatureUnitSymbol(temperatureUnit)}`
}

function getTemperatureUnitSymbol(temperatureUnit: TemperatureUnit) {
  switch (temperatureUnit) {
    case "celsius":
      return "\u2103"
    case "fahrenheit":
      return "\u2109"
    default:
      assertUnreachable(temperatureUnit)
  }
}
