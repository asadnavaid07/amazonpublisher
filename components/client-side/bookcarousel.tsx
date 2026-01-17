"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Book {
  id: number
  title: string
  author: string
  description: string
  cover: string
  genre: string
}

export default function BookCarousel({ books }: { books: Book[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)
  const [direction, setDirection] = useState(0)

  // --- Logic & Effects ---
  useEffect(() => {
    if (!isAutoPlay) return
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % books.length)
      setIsFlipped(false)
      setDirection(1)
    }, 5000)
    return () => clearInterval(id)
  }, [isAutoPlay, books.length])

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + books.length) % books.length)
    setIsAutoPlay(false)
    setIsFlipped(false)
    setDirection(-1)
  }, [books.length])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % books.length)
    setIsAutoPlay(false)
    setIsFlipped(false)
    setDirection(1)
  }, [books.length])

  const go = useCallback((i: number) => {
    setDirection(i > currentIndex ? 1 : -1)
    setCurrentIndex(i)
    setIsAutoPlay(false)
    setIsFlipped(false)
  }, [currentIndex])

  const toggleFlip = useCallback(() => setIsFlipped((f) => !f), [])

  // --- Derived State ---
  const prevBook = useMemo(() => books[(currentIndex - 1 + books.length) % books.length], [currentIndex, books])
  const nextBook = useMemo(() => books[(currentIndex + 1) % books.length], [currentIndex, books])
  const currentBook = useMemo(() => books[currentIndex], [currentIndex, books])

  // Animation class based on direction
  const slideAnimation = direction === 1 ? 'animate-slide-in-right' : direction === -1 ? 'animate-slide-in-left' : '';

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* 3-Column Layout: Prev Preview | Main Card | Next Preview */}
      <div className="flex items-center justify-center gap-8 lg:gap-16">
        
        {/* PREV PREVIEW (Hidden on mobile) */}
        <div className="hidden lg:block transition-transform hover:scale-105 hover:-translate-x-2 duration-300 opacity-60 hover:opacity-100 cursor-pointer" onClick={prev}>
          <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80">
            <img
              src={prevBook.cover}
              alt={prevBook.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* MAIN 3D FLIP CARD */}
        <div className="relative perspective-1000">
          <div
            key={currentIndex}
            className={`relative w-80 h-96 preserve-3d cursor-pointer transition-all duration-700 hover:scale-105 
              ${isFlipped ? "rotate-y-180" : ""} 
              ${slideAnimation}`}
            onClick={toggleFlip}
          >
            {/* Front Side: Cover */}
            <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-300/50">
              <img
                src={currentBook.cover}
                alt={currentBook.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 via-yellow-900/20 to-transparent" />
              <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                NEW
              </div>
            </div>

            {/* Back Side: Info */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/95 backdrop-blur-xl p-8 flex flex-col justify-center rounded-3xl shadow-2xl border-2 border-yellow-300/40">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 rounded-full text-xs font-bold mb-4 shadow-md w-fit">
                {currentBook.genre}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-2 leading-tight">
                {currentBook.title}
              </h3>
              <p className="text-sm text-amber-700 font-medium mb-3">by {currentBook.author}</p>
              <p className="text-sm text-amber-800 leading-relaxed line-clamp-3">
                {currentBook.description}
              </p>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-yellow-900 font-bold shadow-lg transition-all">
                  Read More
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-50 font-semibold">
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* NEXT PREVIEW (Hidden on mobile) */}
        <div className="hidden lg:block transition-transform hover:scale-105 hover:translate-x-2 duration-300 opacity-60 hover:opacity-100 cursor-pointer" onClick={next}>
          <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80">
            <img
              src={nextBook.cover}
              alt={nextBook.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="flex justify-center gap-6 mt-16">
        <Button
          onClick={prev}
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:border-transparent shadow-lg transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          onClick={next}
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:border-transparent shadow-lg transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-8">
        {books.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="relative transition-transform hover:scale-125 p-2"
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex
                  ? "w-12 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                  : "w-3 h-3 bg-amber-300 hover:bg-yellow-400"
              }`}
            />
          </button>
        ))}
      </div>

      {/* AUTO-PLAY TOGGLE */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsAutoPlay((v) => !v)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-yellow-300 text-amber-700 hover:bg-yellow-50 hover:border-yellow-400 font-medium text-sm shadow-md transition-all"
        >
          {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{isAutoPlay ? "Pause" : "Play"} Auto-play</span>
        </button>
      </div>
    </div>
  )
}