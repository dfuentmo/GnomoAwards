import type React from "react"
import { Cinzel, Inter } from "next/font/google"
import "./globals.css"
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "GnomeAwards - Wildgnomos Community Awards",
  description: "GnomeAwards - Wildgnomos Community Awards",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-serif antialiased">
        {/* Contenido de la página */}
        {children}
      </body>
    </html>
  )
}
