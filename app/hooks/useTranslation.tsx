"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { translations } from "../translations"

type Language = "es" | "en"

interface TranslationContextType {
  t: (key: string) => string
  language: Language
  toggleLanguage: () => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key
      }
    }

    return value
  }

  return <TranslationContext.Provider value={{ t, language, toggleLanguage }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)

  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }

  return context
}
