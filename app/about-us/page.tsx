"use client"

import { Target, Eye, Heart, Shield, Users, TrendingUp, BookHeart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"
import { GlowCard } from "@/components/ui/glow-card"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

const values = [
  {
    icon: Sparkles,
    title: "Creativity & Craftsmanship",
    description: "We honour the art of writing and treat every manuscript as a work of art deserving exceptional care."
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "Clear communication and honest advice guide every interaction, building trust through transparency."
  },
  {
    icon: Users,
    title: "Partnership & Support",
    description: "You're never alone in your journey. We walk beside you from first draft to final publication."
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "We focus on your goals: quality craftsmanship, successful publication, and meaningful readership."
  }
]

const milestones = [
  { year: "2018", title: "Founded", description: "Amazon Author Partners established" },
  { year: "2020", title: "500+ Books", description: "Successfully published across genres" },
  { year: "2022", title: "Global Reach", description: "Expanded to 50+ countries worldwide" },
  { year: "2024", title: "Award Winners", description: "15+ literary awards and bestsellers" }
]

const team = [
  {
    name: "Jane Smith",
    role: "Editor-in-Chief",
    bio: "15 years of experience at major publishing houses, author of 3 nonfiction titles, dedicated to mentoring first-time authors.",
    // image: "👩‍💼"
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    bio: "Award-winning designer with 200+ book covers and interiors. Believes every book deserves a stunning visual identity.",
    // image: "👨‍🎨"
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    bio: "Digital marketing expert who helped 50+ authors become bestsellers through strategic campaigns and audience building.",
    // image: "👩‍💻"
  }
]

const differentiators = [
  "End-to-end service under one roof",
  "Dedicated author liaison on every project",
  "Proven publishing track-record",
  "Global distribution networks",
  "Transparent pricing and timelines",
  "Award-winning design team"
]

export default function AboutUsPage() {
  return (
    
    <div className="bg-black">
      <Header />
      {/* Hero Section */}
      <section className="relative py-35 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-yellow-500/10 rounded-full">
                <BookHeart className="w-12 h-12 text-yellow-400" />
              </div>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 text-balance">
              Who We Are
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed text-balance">
              Born from a passion for storytelling and driven by a commitment to excellence, Amazon Author Partners was founded to serve writers who dream big—and deliver books that stand out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Mission & Vision - New Design */}
    <div className="mb-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block px-4 py-2 bg-yellow-500/10 rounded-full mb-4">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
            Our Purpose
          </span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="flex items-start gap-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-2xl border border-yellow-500/20">
                <Target className="w-10 h-10 text-yellow-400" />
              </div>
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower authors to express their voice, navigate publishing complexity, and reach readers worldwide.
              </p>
            </div>
          </div>
          {/* Decorative line */}
          <div className="absolute -bottom-6 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="flex items-start gap-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-2xl border border-yellow-500/20">
                <Eye className="w-10 h-10 text-yellow-400" />
              </div>
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A world where every great story finds the right reader.
              </p>
            </div>
          </div>
          {/* Decorative line */}
          <div className="absolute -bottom-6 left-0 w-24 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
        </motion.div>
      </div>
    </div>

    {/* Values Grid - Keep as is */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        The principles that guide everything we do
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => {
        const Icon = value.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlowCard glowColor="yellow" size="md">
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4 p-3 bg-yellow-500/10 rounded-full"
                >
                  <Icon className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            </GlowCard>
          </motion.div>
        )
      })}
    </div>
  </div>
</section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500/20 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <GlowCard glowColor="yellow" size="sm" width={220}>
                      <div className="p-6 text-center justify-center">
                        <h3 className="text-3xl font-bold text-yellow-400 mb-3">{milestone.year}</h3>
                        <h4 className="text-2xl font-semibold text-black mb-3">{milestone.title}</h4>
                        <p className="text-gray-500 text-base">{milestone.description}</p>
                      </div>
                    </GlowCard>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg shadow-yellow-500/50"
                    />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The creative minds dedicated to bringing your story to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <GlowCard glowColor="yellow" size="md" height={250}>
                  <div className="text-center">
                    {/* <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="text-7xl mb-4"
                    >
                      {member.image}
                    </motion.div> */}
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-yellow-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-20 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              What sets us apart in the publishing world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlowCard glowColor="yellow" size="sm">
                  <div className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-yellow-500/10 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-white text-lg font-medium leading-relaxed">{item}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-10 md:mb-12"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
        Why Choose Us
      </h2>
      <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
        What sets us apart in the publishing world
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
      {differentiators.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="flex h-full"
        >
          <GlowCard glowColor="yellow" size="sm" width={300} className="w-full" height={200}>
            <div className="flex items-start gap-4 p-6 sm:p-7 h-full">
              <div className="flex-shrink-0 pt-1">
                <div className="p-2.5 bg-yellow-500/10 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-lg sm:text-xl font-semibold leading-tight break-words">
                  {item}
                </p>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <Heart className="w-16 h-16 text-yellow-400" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
              Have a story inside you?
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-balance">
              We'd love to help you share it with the world.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg shadow-yellow-500/30 transition-all duration-300"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}