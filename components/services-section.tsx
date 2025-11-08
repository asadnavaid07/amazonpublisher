"use client"

import { BookOpen, PenTool, Globe, Users, Zap, Award } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"
import { motion } from "framer-motion"

const services = [
  {
    icon: PenTool,
    title: "Professional Editing",
    description:
      "Expert editors refine your manuscript with developmental, line, and copy editing to ensure perfection.",
  },
  {
    icon: BookOpen,
    title: "Book Design & Layout",
    description:
      "Beautiful, professional interior and cover design that captures your book's essence and attracts readers.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description:
      "Get your book into major retailers worldwide including Amazon, Barnes & Noble, and independent bookstores.",
  },
  {
    icon: Users,
    title: "Author Support",
    description: "Dedicated support team guiding you through every step of the publishing journey with expert advice.",
  },
  {
    icon: Zap,
    title: "Marketing & Promotion",
    description: "Strategic marketing campaigns to build your author platform and maximize book visibility and sales.",
  },
  {
    icon: Award,
    title: "ISBN & Legal",
    description: "Complete handling of ISBN registration, copyright, and all legal requirements for your publication.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Publishing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            From manuscript to bestseller, we provide everything you need to publish with confidence and reach your
            audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="w-full max-w-sm"
              >
                <GlowCard glowColor="yellow" size="md" className="w-full " height={250} >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-4 inline-block p-3 bg-yellow-500/10 rounded-lg">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
