import type { Metadata } from "next"

import "@/styles/globals.css"

export const metadata: Metadata = {
  description: "Weather App",
  title: "Weather",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

type RootLayoutProps = {
  children: React.ReactNode
}
