"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Video } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="home"
      className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden pt-6 md:pt-8 w-full max-w-[100vw]"
    >
      {/* ==== Vibrant gradient backdrop ==== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #ffcc33 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff66cc 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* ==== LEFT – copy ==== */}
          <div className="text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="mt-3 text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
            >
              Publish your{" "}
              <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text px-3 pb-1 rounded-xl">
                Book
              </span>{" "}
              on Amazon
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5 transition-all"
              >
                Get started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-orange-700">4.9/5 rating</span>
              </div>
              <div className="text-purple-700 font-medium">10k+ books formatted</div>
            </motion.div>
          </div>

          {/* ==== RIGHT – dual carousels ==== */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto md:mx-0 w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-yellow-300/30 via-pink-200/20 to-purple-300/30 blur-3xl rounded-[48px]" />

            {/* ---- Row 1 ---- */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-4 border-yellow-300/30 bg-gradient-to-br from-white/90 to-yellow-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,204,0,0.25)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
              <div className="flex gap-3 sm:gap-4 w-[200%] animate-slide">
                {[
                  "/cover1.jpg",
                  "/cover2.jpg",
                  "/cover3.jpg",
                  "/cover6.jpg",
                  "/cover7.jpg",
                  "/cover8.jpg",
                  "/cover9.jpg",
                ].map((src, i) => (
                  <div
                    key={`r1-${i}`}
                    className="shrink-0 w-44 sm:w-56 md:w-64 my-3 rounded-[20px] sm:rounded-[24px] overflow-hidden border-2 border-yellow-400/40 bg-white shadow-lg transition-all"
                  >
                    <Image
                      src={src}
                      alt="Book cover"
                      width={600}
                      height={800}
                      className="w-full h-36 sm:h-40 md:h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ---- Row 2 ---- */}
            <div className="mt-5 relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-4 border-pink-300/30 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,102,204,0.25)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
              <div className="flex gap-3 sm:gap-4 w-[200%] animate-slide-reverse">
                {[
                  "/cover4.jpg",
                  "/cover5.jpg",
                  "/cover12.jpg",
                  "/cover13.jpg",
                  "/cover14.jpg",
                  "/cover10.jpg",
                  "/cover11.jpg",
                  "/cover1.jpg",
                  "/cover2.jpg",
                ].map((src, i) => (
                  <div
                    key={`r2-${i}`}
                    className="shrink-0 w-44 sm:w-56 md:w-64 my-3 rounded-[20px] sm:rounded-[24px] overflow-hidden border-2 border-pink-400/40 bg-white shadow-lg transition-all"
                  >
                    <Image
                      src={src}
                      alt="Book cover"
                      width={600}
                      height={800}
                      className="w-full h-36 sm:h-40 md:h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ==== Tailwind animation keyframes ==== */}
      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes slide-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-slide { animation: slide 18s linear infinite; }
        .animate-slide-reverse { animation: slide-reverse 18s linear infinite; }
      `}</style>
    </section>
  )
}
