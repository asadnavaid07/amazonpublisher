"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type BannerItem = {
  title: string
  subtitle: string
  buttonText: string
}

type BannerProps = {
  banner: BannerItem[]
}

export default function Banner({ banner }: BannerProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banner.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [banner.length])

  const title = banner[activeIndex]?.title ?? ""
  const words = title.split(" ")

  const firstLine = words.slice(0, 2).join(" ")
  const secondLine = words.slice(2).join(" ")

  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
    exit: {
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  }

  const titleVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
    exit: { y: -100, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  }

  const subtitleVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.8, ease: "easeOut" } },
    exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  }

  const buttonVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.3, ease: "easeOut" } },
    exit: { y: 100, opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
  }

  return (
    <section className="relative h-[calc(100dvh)] overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/book1.jpg"
          alt="Banner background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-10" />
      </div>

      {/* Container replacement for this project */}
      <div className="h-full relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 flex items-center"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-6 grid gap-2"
            >
              <motion.p
                variants={titleVariants}
                className="whitespace-normal font-heading text-[2rem] font-extrabold leading-[3rem] md:leading-[4.5rem] lg:leading-[5.5rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[6rem] text-white"
              >
                {firstLine} <span className="block">{secondLine}</span>
              </motion.p>
              <motion.p
                variants={subtitleVariants}
                className="mt-2 font-text text-base md:text-lg lg:text-2xl text-white"
              >
                {banner[activeIndex]?.subtitle}
              </motion.p>
              <motion.div variants={buttonVariants} className="mt-6">
                <Button type="button" variant="secondary" size="lg" className="w-fit text-xl bg-primary hover:bg-primary/90 text-primary-foreground">
                  {banner[activeIndex]?.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider dots/indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {banner.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}


