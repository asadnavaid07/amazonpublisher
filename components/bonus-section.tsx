"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Transparent Pricing & Milestone Reports",
    description:
      "Know exactly what you’re paying for at every stage of the publishing process with clear milestones and real-time progress updates.",
    image:
      "/pricing.jpg"  },
  {
    title: "Dedicated Author Portal",
    description:
      "Access your personal author dashboard to track progress, review drafts, and communicate directly with our publishing team.",
    image:
      "/dashboard.jpg"  },
  {
    title: "Global Distribution Without Hidden Costs",
    description:
      "Your book reaches worldwide retailers—Amazon, Barnes & Noble, Apple Books, and more—without surprise fees or restrictions.",
    image:
      "/books3.jpg"  },
  {
    title: "Post-Launch Support Built-In",
    description:
      "Our team stays with you after publication, helping you promote, market, and grow your author brand long after launch day.",
    image:
    "/team.jpg"
  },
]

export default function BonusSection() {
  return (
    <section id="bonus" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">What Makes Us Different</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why authors choose us. Our process goes beyond publishing to partnership.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/40">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" /> */}
                </div>
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See our packages or book your free consultation now.
          </h3>
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Schedule a Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
