"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

import type { Geocoordinates } from "@/entities/Geocoordinates"
import { GeocoordinatesSchema } from "@/entities/Geocoordinates"

import { Button } from "./ui/Button"
import { Form } from "./ui/Form"
import { Input } from "./ui/Input"

export function GeocoordinatesForm({
  geocoordinates,
}: {
  geocoordinates: Geocoordinates
}) {
  const form = useGeocoordinatesForm(geocoordinates)
  const router = useRouter()

  function onSubmit(geocoordinates: Geocoordinates) {
    const { latitude, longitude } = geocoordinates
    router.push(`/latitude/${latitude}/longitude/${longitude}`)
  }

  return (
    <Form {...form}>
      <form
        className="flex gap-1 items-end"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form.Field
          control={form.control}
          name="latitude"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Latitude</Form.Label>
              <Form.Control>
                <Input
                  type="number"
                  {...field}
                  onChange={e => field.onChange(e.target.valueAsNumber)}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="longitude"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Longitude</Form.Label>
              <Form.Control>
                <Input
                  type="number"
                  {...field}
                  onChange={e => field.onChange(e.target.valueAsNumber)}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isValidating || form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

const useGeocoordinatesForm = (geocoordinates: Geocoordinates) =>
  useForm<Geocoordinates>({
    defaultValues: geocoordinates,
    resolver: zodResolver(GeocoordinatesSchema),
  })
