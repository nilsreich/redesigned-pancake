import "./globals.css"

import React from "react"



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className=
        "min-h-screen bg-background font-sans antialiased"

      >
        {children}
      </body>
    </html>
  )
}
