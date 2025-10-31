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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="home" className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden pt-6 md:pt-8">
      {/* Soft gradient background rather than flat black */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_80%_0%,rgba(236,162,18,0.10),transparent),radial-gradient(70%_50%_at_0%_100%,rgba(236,162,18,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{backgroundImage: "radial-gradient(#fff_1px, transparent 1px)", backgroundSize: "24px 24px"}} />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center md:text-left">
            <motion.h1 variants={itemVariants} className="mt-3 text-[2.4rem] sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Publish your <span className="bg-primary text-primary-foreground px-3 pb-1 rounded-xl">Book</span> on Amazon
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-7 flex flex-col sm:flex-row gap-4 md:gap-3 justify-center md:justify-start">
              <Button size="lg" className="bg-primary mt-6 hover:bg-primary/90 text-primary-foreground group">
                Get started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Enhanced Video Preview Badge */}
              <button className="relative group mt-3 px-6 py-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="w-4 h-4 text-primary spin-slow" />
                  </div>
                  <span className="text-sm font-medium">Watch Demo</span>
                </div>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-7 flex items-center gap-6 justify-center md:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /><span>4.9/5 rating</span></div>
              <div>10k+ books formatted</div>
            </motion.div>
          </div>

          {/* Right: dual auto-scrolling book carousels */}
          <motion.div variants={itemVariants} className="relative mx-auto md:mx-0 w-full max-w-[620px]">
            <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-primary/25 via-transparent to-transparent blur-3xl rounded-[48px]" />

            {/* Row 1 */}
            <div className="relative overflow-hidden rounded-[36px] border-4 border-primary/20 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur shadow-[0_0_30px_rgba(236,162,18,0.15)]">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
              <div className="flex gap-4 w-[200%] animate-slide">
                {["/fantasy-book-cover-midnight.jpg","/adventure-book-cover-code.jpg","/romance-book-cover-garden.jpg","/mystery-book-cover-harbor.jpg","/book-cover-wellness.jpg"].map((src, i) => (
                  <div key={`r1-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
                    <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                ))}
                {["/fantasy-book-cover-midnight.jpg","/adventure-book-cover-code.jpg","/romance-book-cover-garden.jpg","/mystery-book-cover-harbor.jpg","/book-cover-wellness.jpg"].map((src, i) => (
                  <div key={`r1b-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
                    <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="mt-5 relative overflow-hidden rounded-[36px] border-4 border-primary/20 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur shadow-[0_0_30px_rgba(236,162,18,0.15)]">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
              <div className="flex gap-4 w-[200%] animate-slide-reverse">
                {["/book-cover-design-modern.jpg","/book-cover-technology.jpg","/adventure-book-cover.png","/fantasy-book-cover-midnight.jpg","/romance-book-cover-garden.jpg"].map((src, i) => (
                  <div key={`r2-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
                    <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                ))}
                {["/book-cover-design-modern.jpg","/book-cover-technology.jpg","/adventure-book-cover.png","/fantasy-book-cover-midnight.jpg","/romance-book-cover-garden.jpg"].map((src, i) => (
                  <div key={`r2b-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
                    <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}