export default function assertUnreachable(indicator: never) {
  throw new Error(`${indicator} should be never here!`)
}
