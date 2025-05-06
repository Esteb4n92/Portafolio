"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useTranslation"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectsProps {
  language: string
}

export default function Projects({ language }: ProjectsProps) {
  const { t } = useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Paynex",
      description: t("projects.paynex.description"),
      image: "/imagine/paynex.png",
      github: "https://github.com/Esteb4n92/Proyecto_paynex.git",
      demo: "https://esteb4n92.github.io/Proyecto_paynex/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Web Pokemon",
      description: t("projects.pokemon.description"),
      image: "/imagine/pokemons.png",
      github: "https://github.com/Esteb4n92/lista-de-pokemon.git",
      demo: "https://esteb4n92.github.io/lista-de-pokemon/",
      tags: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      title: t("projects.calculator.title"),
      description: t("projects.calculator.description"),
      image: "/imagine/calculator.png",
      github: "https://github.com/Esteb4n92/calculadora-online.git",
      demo: "https://esteb4n92.github.io/calculadora-online/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-green-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-green-500/50 text-green-400 hover:bg-green-500/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>

                <Button size="sm" className="flex items-center gap-2 bg-green-600 hover:bg-green-700" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
