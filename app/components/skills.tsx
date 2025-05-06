"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTranslation } from "../hooks/useTranslation"
import {
  Code,
  Database,
  Cloud,
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  FileJson,
  BackpackIcon as Bootstrap,
} from "lucide-react"

interface SkillsProps {
  language: string
}

export default function Skills({ language }: SkillsProps) {
  const { t } = useTranslation()
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const categories = [
    {
      title: t("skills.webDev"),
      icon: <Code className="h-10 w-10 text-green-500" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      icons: [
        <Html5 key="html" className="h-6 w-6 text-orange-500" />,
        <Css3 key="css" className="h-6 w-6 text-blue-500" />,
        <FileJson key="js" className="h-6 w-6 text-yellow-500" />,
        <Bootstrap key="bootstrap" className="h-6 w-6 text-purple-500" />,
      ],
    },
    {
      title: t("skills.dataAnalyst"),
      icon: <Database className="h-10 w-10 text-green-500" />,
      skills: ["Python", "Power BI", "SQL", "Workbench"],
      icons: Array(4).fill(<Database className="h-6 w-6 text-blue-400" />),
    },
    {
      title: t("skills.cloud"),
      icon: <Cloud className="h-10 w-10 text-green-500" />,
      skills: ["Microsoft Azure"],
      icons: [<Cloud key="cloud" className="h-6 w-6 text-blue-600" />],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("skills.title")}</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto"></div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid md:grid-cols-3 gap-8"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 border border-gray-700 hover:border-green-500/50"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 p-3 bg-gray-700/50 rounded-full">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">{category.title}</h3>
              <ul className="space-y-3 w-full">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-gray-700/30 p-2 rounded-lg">
                    {category.icons[idx] || category.icons[0]}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
