"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "./hooks/useTranslation"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Contact from "./components/contact"
import { Toaster } from "@/components/ui/toaster"

export default function Portfolio() {
  const { t, language, toggleLanguage } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Toaster />
      <Navbar language={language} toggleLanguage={toggleLanguage} />

      <main className="container mx-auto px-4 py-8">
        <Hero language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© 2025 {t("footer.rights")}</p>
      </footer>
    </div>
  )
}
