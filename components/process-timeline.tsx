"use client"

import { useState } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    number: 1,
    title: "Discovery & Planning",
    description: "We begin with a one-on-one consultation: your goals, genre, target reader, schedule and budget.",
    details: "Together we map the best service path and agree on milestones for your publishing journey.",
    gradient: "from-yellow-400 to-orange-400",
    glow: "shadow-yellow-400/60",
    icon: "text-yellow-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 2,
    title: "Pre-Production / Outline",
    description: "For ghostwriting: outline development, research, chapter breakdown. For editing or other services, we perform a manuscript assessment.",
    details: "We also develop a style guide and plan for design, marketing, and other essential steps before production begins.",
    gradient: "from-pink-400 to-rose-400",
    glow: "shadow-pink-400/60",
    icon: "text-pink-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 3,
    title: "Creation & Execution",
    description: "Manuscript writing, editing rounds, design mock-ups, and formatting—completed under your guidance and approval.",
    details: "We handle the heavy lifting while you review progress, provide feedback, and maintain full creative control.",
    gradient: "from-purple-400 to-indigo-400",
    glow: "shadow-purple-400/60",
    icon: "text-purple-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 4,
    title: "Quality-Assurance & Finalisation",
    description: "We proofread, review, and ensure full technical compliance for both print and eBook formats.",
    details: "For audiobooks, we handle narration, mastering, and final QA to deliver professional-quality results.",
    gradient: "from-teal-400 to-cyan-400",
    glow: "shadow-teal-400/60",
    icon: "text-teal-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 5,
    title: "Publishing & Launch",
    description: "We publish your book across retail channels, distribute to libraries, and manage pricing and metadata.",
    details: "We also assist in scheduling launch events and promotional campaigns for maximum visibility.",
    gradient: "from-orange-400 to-red-400",
    glow: "shadow-orange-400/60",
    icon: "text-orange-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 6,
    title: "Marketing & Growth",
    description: "Post-launch, we continue to support your book with marketing strategies and performance reviews.",
    details: "We help you run ad campaigns, optimise listings, engage readers, and grow your author brand long-term.",
    gradient: "from-emerald-400 to-lime-400",
    glow: "shadow-emerald-400/60",
    icon: "text-emerald-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
]

export default function ProcessTimeline() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* ==== VIBRANT BACKGROUND ==== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(250,204,21,0.2),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_60%)]" />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#fff_25%,transparent_25%),linear-gradient(-45deg,#fff_25%,transparent_25%)] bg-[length:30px_30px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ==== BOOK CAROUSEL ==== */}
        <div className="mb-16 overflow-hidden">
          <div className="relative py-12">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-yellow-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-50 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 items-center"
            >
              {/* Duplicate books for seamless loop */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6">
                  {[3, 4, 5, 6, 7].map((num) => (
                    <motion.div
                      key={`${setIndex}-${num}`}
                      whileHover={{ scale: 1.15, rotateY: 15, y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-shrink-0 group cursor-pointer"
                    >
                      <div className="relative w-48 h-72 rounded-2xl overflow-hidden shadow-2xl transform perspective-1000">
                        {/* Book cover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <img
                            src={`/cover${num}.jpg`}
                            alt={`Book ${num}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-${['yellow', 'pink', 'purple', 'teal', 'orange'][num % 5]}-400 to-${['orange', 'rose', 'indigo', 'cyan', 'red'][num % 5]}-500"><div class="text-6xl mb-3">📖</div><div class="text-white font-bold text-lg">Book ${num}</div></div>`;
                            }}
                          />
                        </div>
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: [-200, 200] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: num * 0.3 }}
                        />
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                      </div>
                      {/* Shadow */}
                      <div className="mt-3 h-2 bg-black/10 rounded-full blur-md transform scale-x-75"></div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ==== HEADER ==== */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Proven Process
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            From idea to bestseller — <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">simple, colorful, effective</span>.
          </p>
        </div>

        {/* ==== TIMELINE ==== */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-20 w-0.5 h-32 bg-gradient-to-b from-gray-300 to-transparent hidden sm:block opacity-50" />
              )}

              <div className="flex items-start gap-6 group">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 flex-shrink-0"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} p-1 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <CheckCircle2 className={`w-8 h-8 ${step.icon} font-bold`} />
                    </div>
                  </div>
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} blur-xl opacity-70 -z-10`}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* COLORFUL CARD */}
                <motion.div
                  onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={`flex-1 bg-gradient-to-br ${step.gradient} ${step.bgOpacity} backdrop-blur-xl border-2 border-white/30 rounded-3xl p-6 cursor-pointer shadow-xl hover:shadow-2xl hover:${step.glow} transition-all duration-400 group`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-sm font-bold px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-sm ${step.text} shadow-md`}>
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${step.text} drop-shadow-md`}>
                        {step.title}
                      </h3>
                      <p className={`text-white/90 leading-relaxed drop-shadow`}>{step.description}</p>

                      {/* Expanded Details */}
                      <div
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                          maxHeight: expandedStep === step.number ? "200px" : "0",
                          opacity: expandedStep === step.number ? 1 : 0,
                        }}
                      >
                        <div className="mt-4 pt-4 border-t border-white/30">
                          <p className={`text-sm ${step.text} opacity-90 leading-relaxed font-medium`}>
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expand Arrow */}
                    <motion.div
                      animate={{ rotate: expandedStep === step.number ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 flex-shrink-0"
                    >
                      <ChevronDown className={`w-6 h-6 text-white/80 group-hover:text-white transition-colors`} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==== FINAL RAINBOW CTA ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>
          <div className="relative z-10 text-center text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
              Your Publishing Success Starts Here
            </h3>
            <p className="text-lg opacity-90 drop-shadow">
              With a <span className="font-bold">colorful, proven process</span>, we make your author journey <span className="font-bold">fun and successful</span>.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  )
}