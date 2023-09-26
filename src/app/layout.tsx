import type { Metadata } from "next"

import "./globals.css"

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
