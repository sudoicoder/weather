import { z } from "zod"

const envSchema = z.object({
  WEATHER_API_BASE_URL: z.string().url(),
  WEATHER_API_KEY: z.string().nonempty(),
})

const env = envSchema.parse(process.env)

export function getEnv(key: keyof z.infer<typeof envSchema>) {
  return env[key]
}
