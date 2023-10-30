import type { Metadata } from "next"

import "@/styles/globals.css"

export const metadata: Metadata = {
  description: "Weather App",
  title: "Weather",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="dark">
        <main>{children}</main>
      </body>
    </html>
  )
}

type RootLayoutProps = {
  children: React.ReactNode
}
