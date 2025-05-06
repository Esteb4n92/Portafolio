"use client"

import { motion } from "framer-motion"

interface LanguageToggleProps {
  language: string
  toggleLanguage: () => void
}

export default function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors"
    >
      <span>{language === "es" ? "EN" : "ES"}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse"
      >
        <path d="m5 8 6 6 6-6" />
      </svg>
    </motion.button>
  )
}
