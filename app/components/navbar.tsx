"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import LanguageToggle from "./language-toggle"
import { useTranslation } from "../hooks/useTranslation"

interface NavbarProps {
  language: string
  toggleLanguage: () => void
}

export default function Navbar({ language, toggleLanguage }: NavbarProps) {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-green-500"
        >
          Portfolio
        </motion.div>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex space-x-6">
            {["home", "skills", "projects", "contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer hover:text-green-500 transition-colors"
              >
                <a href={`#${item}`}>{t(`nav.${item}`)}</a>
              </motion.li>
            ))}
          </ul>

          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
      </div>
    </motion.nav>
  )
}
