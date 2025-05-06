"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface HeroProps {
  language: string
}

export default function Hero({ language }: HeroProps) {
  const { t } = useTranslation()
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (profileRef.current) {
      observer.observe(profileRef.current)
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("hero.greeting")} <span className="text-green-500">{t("hero.name")}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">{t("hero.role")}</p>
          <a
  href="/EstebanVillalobos_CV.pdf" // Ruta correcta al archivo
  download
  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
    />
  </svg>
  Descargar CV
</a>

        </motion.div>

        <div className="flex justify-center">
          <motion.div
            ref={profileRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative border-4 border-green-500 rounded-full p-1 overflow-hidden">
              <img
                src="/imagine/profile.jpg"
                alt={t("hero.profileAlt")}
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
