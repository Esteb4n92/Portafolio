import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { TranslationProvider } from "./hooks/useTranslation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio - Esteban Villalobos",
  description: "Portfolio personal con proyectos y habilidades",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  )
}
