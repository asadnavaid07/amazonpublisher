// "use client"

// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"

// const features = [
//   {
//     title: "Transparent Pricing & Milestone Reports",
//     description:
//       "Know exactly what you're paying for at every stage with clear milestones and real-time progress updates.",
//     image: "/pricing.jpg",
//     gradient: "from-amber-500 to-yellow-500",
//   },
//   {
//     title: "Dedicated Author Portal",
//     description:
//       "Access your personal dashboard to track progress, review drafts, and communicate directly with our team.",
//     image: "/dashboard.jpg",
//     gradient: "from-yellow-500 to-lime-500",
//   },
//   {
//     title: "Global Distribution Without Hidden Costs",
//     description:
//       "Your book reaches Amazon, Barnes & Noble, Apple Books, and more — no surprise fees.",
//     image: "/books3.jpg",
//     gradient: "from-orange-500 to-amber-500",
//   },
//   {
//     title: "Post-Launch Support Built-In",
//     description:
//       "We stay with you after launch to promote, market, and grow your author brand.",
//     image: "/team.jpg",
//     gradient: "from-amber-600 to-orange-600",
//   },
// ]

// export default function BonusSection() {
//   return (
//     <section id="bonus" className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
//       {/* ==== EYE-CATCHING BACKGROUND ==== */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.25),transparent_60%)]" />
//         <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#fbbf24_25%,transparent_25%),linear-gradient(-45deg,#fbbf24_25%,transparent_25%)] bg-[length:40px_40px]" />

//         {/* Golden Orbs with Pulse */}
//         <motion.div
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           className="absolute top-1/4 left-20 w-72 h-72 bg-gradient-to-br from-amber-400/60 to-yellow-400/50 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ scale: [1.1, 1.3, 1.1] }}
//           transition={{ duration: 4, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-1/4 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/60 to-amber-400/50 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* ==== BOLD HEADER ==== */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-16"
//         >
//           <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
//             <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
//               What Makes Us Different
//             </span>
//           </h2>
//           <p className="text-lg text-amber-800 max-w-2xl mx-auto font-bold">
//             We don’t just publish — we <span className="text-orange-600">partner for your success</span>.
//           </p>
//         </motion.div>

//         {/* ==== VIBRANT FEATURE CARDS ==== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: index * 0.15 }}
//               whileHover={{ y: -12, scale: 1.04 }}
//               className="group"
//             >
//               <div className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-1 shadow-xl`}>
//                 {/* Inner Glass Card */}
//                 <div className="h-full rounded-[22px] bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl p-6 border border-white/30">
//                   {/* Image */}
//                   <div className="relative h-56 mb-4 overflow-hidden rounded-2xl shadow-inner">
//                     <img
//                       src={feature.image}
//                       alt={feature.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     {/* NO WHITE OVERLAY — FULL COLOR */}
//                   </div>

//                   {/* Text */}
//                   <h3 className="text-xl font-bold text-white drop-shadow-md mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-white/90 text-sm leading-relaxed font-medium drop-shadow">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Glowing Hover Border */}
//                 <motion.div
//                   className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/50 to-orange-400/50 blur-xl opacity-0 group-hover:opacity-100 -z-10"
//                   initial={{ scale: 0.8 }}
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ==== EPIC CTA ==== */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-center max-w-2xl mx-auto"
//         >
//           <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 drop-shadow">
//             Ready to Publish Like a Pro?
//           </h3>
//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//             className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-5 text-xl font-bold rounded-full shadow-2xl hover:shadow-amber-500/60 transition-all duration-300 overflow-hidden"
//           >
//             <span className="relative z-10">Schedule a Call</span>
//             <motion.div
//               animate={{ x: [0, 6, 0] }}
//               transition={{ duration: 1.2, repeat: Infinity }}
//               className="relative z-10"
//             >
//               <ArrowRight className="w-6 h-6" />
//             </motion.div>
//             {/* Pulse Ring */}
//             <motion.div
//               className="absolute inset-0 bg-white/30 rounded-full"
//               animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Transparent Pricing & Milestone Reports",
    description:
      "Know exactly what you're paying for at every stage with clear milestones and real-time progress updates.",
    image: "/pricing.webp",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Dedicated Author Portal",
    description:
      "Access your personal dashboard to track progress, review drafts, and communicate directly with our team.",
    image: "/dashboard.webp",
    gradient: "from-yellow-500 to-lime-500",
  },
  {
    title: "Global Distribution Without Hidden Costs",
    description:
      "Your book reaches Amazon, Barnes & Noble, Apple Books, and more — no surprise fees.",
    image: "/books3.webp",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Post-Launch Support Built-In",
    description:
      "We stay with you after launch to promote, market, and grow your author brand.",
    image: "/team.webp",
    gradient: "from-amber-600 to-orange-600",
  },
]

export default function BonusSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  /* ================================
     🔥 ADDED: Prefetch images on load
     This warms browser cache BEFORE scroll
  ================================= */
  useEffect(() => {
    features.forEach((feature) => {
      const img = new window.Image()
      img.src = feature.image
    })
  }, [])

  /* ================================
     Intersection observer (light)
  ================================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )

    sectionRef.current && observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="bonus"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-24"
    >
      {/* Lightweight background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-16 h-64 w-64 rounded-full bg-amber-400/30 blur-2xl" />
        <div className="absolute bottom-1/4 right-16 h-72 w-72 rounded-full bg-orange-400/30 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="mb-4 text-5xl font-extrabold sm:text-6xl">
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              What Makes Us Different
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-semibold text-amber-800">
            We don&apos;t just publish —{" "}
            <span className="text-orange-600">we partner for your success</span>.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className={`mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-[1px] shadow-xl`}
              >
                <div className="h-full rounded-[22px] bg-white/15 p-6 backdrop-blur-md">
                  {/* ================================
                      🚀 IMAGE OPTIMIZED FOR NO LAG
                      - loading="eager"  → no lazy delay
                      - priority          → preload
                      - prefetched above → instant paint
                  ================================= */}
                  <div className="relative mb-4 h-56 overflow-hidden rounded-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="eager"      // 🔥 ADDED
                      priority             // 🔥 ADDED
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mx-auto max-w-2xl transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="mb-6 text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Ready to Publish Like a Pro?
          </h3>

          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40">
            Schedule a Call
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
