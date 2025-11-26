"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Quality Assurance",
    description: "Every book undergoes rigorous quality checks to ensure professional standards in editing, design, and production.",
    gradient: "from-yellow-400 to-amber-400",
    iconColor: "text-yellow-600",
  },
  {
    title: "Author-Centric Approach",
    description: "Your vision comes first. We collaborate closely with you to bring your unique voice and story to life.",
    gradient: "from-pink-400 to-rose-400",
    iconColor: "text-pink-600",
  },
  {
    title: "Fast Turnaround",
    description: "Efficient processes mean your book reaches publication faster without compromising on quality.",
    gradient: "from-purple-400 to-indigo-400",
    iconColor: "text-purple-600",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Clear, upfront pricing so you know exactly what you're investing in your book.",
    gradient: "from-teal-400 to-cyan-400",
    iconColor: "text-teal-600",
  },
  {
    title: "Lifetime Support",
    description: "Our relationship doesn't end at publication. We provide ongoing support for reprints and new editions.",
    gradient: "from-orange-400 to-red-400",
    iconColor: "text-orange-600",
  },
  {
    title: "Industry Expertise",
    description: "Decades of combined experience in publishing means you benefit from proven strategies and best practices.",
    gradient: "from-emerald-400 to-lime-400",
    iconColor: "text-emerald-600",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
      {/* ==== COLORFUL BACKGROUND ==== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(250,204,21,0.15),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#fff_25%,transparent_25%),linear-gradient(-45deg,#fff_25%,transparent_25%)] bg-[length:30px_30px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-yellow-300/40 to-orange-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-300/40 to-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ==== HEADER ==== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
              Why Choose Amazon Publisher
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            We’re committed to <span className="font-bold text-amber-600">excellence</span>,{" "}
            <span className="font-bold text-pink-600">transparency</span>, and{" "}
            <span className="font-bold text-purple-600">your success</span>.
          </p>
        </motion.div>

        {/* ==== FEATURES GRID ==== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group"
            >
              <div className={`relative h-full rounded-2xl p-6 bg-white/90 backdrop-blur-xl border-2 border-white/50 shadow-lg hover:shadow-2xl hover:shadow-${feature.gradient.split('-')[1]}-300/40 transition-all duration-300`}>
                {/* Gradient Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl -z-10 transition-opacity duration-500`} />
                
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} p-0.5 shadow-md`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <CheckCircle2 className={`w-7 h-7 ${feature.iconColor} font-bold`} />
                      </div>
                    </div>
                  </motion.div>

                  <div>
                    <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==== STATS SECTION ==== */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "500+", label: "Books Published", gradient: "from-yellow-400 to-amber-400" },
            { number: "95%", label: "Author Satisfaction", gradient: "from-pink-400 to-rose-400" },
            { number: "50+", label: "Countries Reached", gradient: "from-purple-400 to-indigo-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 text-center border-2 border-white/50 shadow-lg hover:shadow-2xl hover:shadow-pink-300/40 transition-all duration-300">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className={`text-5xl sm:text-6xl font-extrabold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent drop-shadow-lg`}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}