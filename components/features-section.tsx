"use client"

import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const features = [
  {
    title: "Quality Assurance",
    description:
      "Every book undergoes rigorous quality checks to ensure professional standards in editing, design, and production.",
  },
  {
    title: "Author-Centric Approach",
    description:
      "Your vision comes first. We collaborate closely with you to bring your unique voice and story to life.",
  },
  {
    title: "Fast Turnaround",
    description: "Efficient processes mean your book reaches publication faster without compromising on quality.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Clear, upfront pricing so you know exactly what you're investing in your book.",
  },
  {
    title: "Lifetime Support",
    description:
      "Our relationship doesn't end at publication. We provide ongoing support for reprints and new editions.",
  },
  {
    title: "Industry Expertise",
    description:
      "Decades of combined experience in publishing means you benefit from proven strategies and best practices.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
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
            Why Choose Amazon Publisher
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We're committed to excellence, transparency, and your success as an author.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "500+", label: "Books Published" },
            { number: "95%", label: "Author Satisfaction" },
            { number: "50+", label: "Countries Reached" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Card className="bg-card border-border p-8 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
