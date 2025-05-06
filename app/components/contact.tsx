"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "../hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Send } from "lucide-react"

interface ContactProps {
  language: string
}

export default function Contact({ language }: ContactProps) {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t("contact.successTitle"),
      description: t("contact.successMessage"),
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    { icon: <Mail className="h-5 w-5 text-green-500" />, text: "estebanvillawolk@hotmail.com" },
    { icon: <Phone className="h-5 w-5 text-green-500" />, text: "+57 3004788251" },
    { icon: <MapPin className="h-5 w-5 text-green-500" />, text: "Colombia-Atlantico" },
  ]

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-green-400">{t("contact.getInTouch")}</h3>
          <p className="text-gray-300 mb-8">{t("contact.description")}</p>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-gray-800 rounded-full">{info.icon}</div>
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.name")}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-green-500"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.email")}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-green-500"
              />
            </div>
            <div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.message")}
                required
                className="bg-gray-800/50 border-gray-700 focus:border-green-500 min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white transition-all"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  {t("contact.form.sending")}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t("contact.form.send")}
                </div>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
