"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface Book {
  id: number
  title: string
  author: string
  description: string
  cover: string
  genre: string
}

const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Chronicles",
    author: "Sarah Anderson",
    description: "An epic fantasy adventure spanning three kingdoms and one unforgettable destiny.",
    cover: "/cover10.jpg",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    author: "James Mitchell",
    description: "A gripping sci‑fi thriller about time travel, paradoxes, and the cost of changing fate.",
    cover: "/book-special.jpg",
    genre: "Science Fiction",
  },
  {
    id: 3,
    title: "The Last Harbor",
    author: "Emma Richardson",
    description: "A poignant mystery novel set in a coastal town with secrets buried for decades.",
    cover: "/cover12.jpg",
    genre: "Mystery",
  },
  {
    id: 4,
    title: "Whispers in the Garden",
    author: "Michael Chen",
    description: "A romantic drama exploring love, loss, and the beauty of second chances.",
    cover: "/cover11.jpg",
    genre: "Romance",
  },
  {
    id: 5,
    title: "The Forgotten Code",
    author: "Lisa Thompson",
    description: "A thrilling adventure about decoding ancient mysteries and uncovering hidden truths.",
    cover: "/cover8.jpg",
    genre: "Adventure",
  },
]

export default function LampSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % books.length)
    }, 5000)
    return () => clearInterval(id)
  }, [isAutoPlay])

  const prev = () => { setCurrentIndex((i) => (i - 1 + books.length) % books.length); setIsAutoPlay(false) }
  const next = () => { setCurrentIndex((i) => (i + 1) % books.length); setIsAutoPlay(false) }
  const go = (i: number) => { setCurrentIndex(i); setIsAutoPlay(false) }

  const prevBook = books[(currentIndex - 1 + books.length) % books.length]
  const nextBook = books[(currentIndex + 1) % books.length]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 py-24 overflow-hidden">
      
      {/* ==== GORGEOUS HEADING ==== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center mb-20 px-4"
      >
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Featured Published Works
          </span>
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-4 mx-auto max-w-xs"
        />
        <p className="mt-6 text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto font-medium leading-relaxed">
          Discover the exceptional books we’ve brought to life. Each one a testament to our commitment to quality publishing.
        </p>
      </motion.div>

      {/* ==== CAROUSEL ==== */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 lg:gap-16">

          {/* ---- Prev Preview ---- */}
          <motion.div
            whileHover={{ scale: 1.08, x: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hidden lg:block"
          >
            <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80 backdrop-blur-sm">
              <img src={prevBook.cover} alt={prevBook.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* ---- Main 3D Flip Card ---- */}
          <div className="relative perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ rotateY: -180, opacity: 0, scale: 0.9 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: 180, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative w-80 h-96 preserve-3d cursor-grab active:cursor-grabbing"
                whileHover={{ scale: 1.05 }}
              >
                {/* Front: Cover */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-300/50">
                  <img
                    src={books[currentIndex].cover}
                    alt={books[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 via-yellow-900/20 to-transparent" />
                  <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    NEW
                  </div>
                </div>

                {/* Back: Info (Glassmorphism) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/90 backdrop-blur-xl p-8 flex flex-col justify-center rounded-3xl shadow-2xl border-2 border-yellow-300/40">
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 rounded-full text-xs font-bold mb-4 shadow-md">
                    {books[currentIndex].genre}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-2 leading-tight">
                    {books[currentIndex].title}
                  </h3>
                  <p className="text-sm text-amber-700 font-medium mb-3">by {books[currentIndex].author}</p>
                  <p className="text-sm text-amber-800 leading-relaxed line-clamp-3">
                    {books[currentIndex].description}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-yellow-900 font-bold shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5 transition-all">
                      Read More
                    </Button>
                    <Button variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-50 hover:border-yellow-500 font-semibold">
                      Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ---- Next Preview ---- */}
          <motion.div
            whileHover={{ scale: 1.08, x: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hidden lg:block"
          >
            <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80 backdrop-blur-sm">
              <img src={nextBook.cover} alt={nextBook.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* ---- Navigation ---- */}
        <div className="flex justify-center gap-6 mt-16">
          <Button
            onClick={prev}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:border-transparent shadow-lg hover:shadow-yellow-400/50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={next}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:border-transparent shadow-lg hover:shadow-yellow-400/50 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* ---- Dots with Pulse ---- */}
        <div className="flex justify-center gap-3 mt-8">
          {books.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              className="relative"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`transition-all rounded-full ${
                  i === currentIndex
                    ? "w-12 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                    : "w-3 h-3 bg-amber-300 hover:bg-yellow-400"
                }`}
              />
              {i === currentIndex && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full bg-yellow-400/40 blur-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.4, opacity: 1 }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* ---- Auto-play Toggle ---- */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setIsAutoPlay(v => !v)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-yellow-300 text-amber-700 hover:bg-yellow-50 hover:border-yellow-400 font-medium text-sm shadow-md transition-all"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isAutoPlay ? "Pause" : "Play"} Auto-play</span>
          </button>
        </motion.div>
      </div>

      {/* ==== 3D CSS Helpers ==== */}
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  )
}