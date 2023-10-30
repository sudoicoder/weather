export type TemperatureUnit = "celsius" | "fahrenheit"

export function formatTemperature(
  temperature: number,
  temperatureUnit: TemperatureUnit = "celsius"
) {
  return `${temperature.toFixed(0)} ${getTemperatureUnitSymbol(
    temperatureUnit
  )}`
}

function getTemperatureUnitSymbol(temperatureUnit: TemperatureUnit) {
  switch (temperatureUnit) {
    case "celsius":
      return "\u2103"
    case "fahrenheit":
      return "\u2109"
  }
}
