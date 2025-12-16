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

const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Chronicles",
    author: "Sarah Anderson",
    description: "An epic fantasy adventure spanning three kingdoms and one unforgettable destiny.",
    cover: "/cover10.webp",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    author: "James Mitchell",
    description: "A gripping sci‑fi thriller about time travel, paradoxes, and the cost of changing fate.",
    cover: "/book-special.webp",
    genre: "Science Fiction",
  },
  {
    id: 3,
    title: "The Last Harbor",
    author: "Emma Richardson",
    description: "A poignant mystery novel set in a coastal town with secrets buried for decades.",
    cover: "/cover12.webp",
    genre: "Mystery",
  },
  {
    id: 4,
    title: "Whispers in the Garden",
    author: "Michael Chen",
    description: "A romantic drama exploring love, loss, and the beauty of second chances.",
    cover: "/cover13.webp",
    genre: "Romance",
  },
  {
    id: 5,
    title: "The Forgotten Code",
    author: "Lisa Thompson",
    description: "A thrilling adventure about decoding ancient mysteries and uncovering hidden truths.",
    cover: "/cover8.webp",
    genre: "Adventure",
  },
]

export default function LampSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!isAutoPlay) return
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % books.length)
      setIsFlipped(false)
    }, 5000)
    return () => clearInterval(id)
  }, [isAutoPlay])

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + books.length) % books.length)
    setIsAutoPlay(false)
    setIsFlipped(false)
    setDirection(-1)
  }, [])

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % books.length)
    setIsAutoPlay(false)
    setIsFlipped(false)
    setDirection(1)
  }, [])

  const go = useCallback((i: number) => {
    setDirection(i > currentIndex ? 1 : -1)
    setCurrentIndex(i)
    setIsAutoPlay(false)
    setIsFlipped(false)
  }, [currentIndex])

  const toggleFlip = useCallback(() => setIsFlipped(f => !f), [])

  const prevBook = useMemo(() => books[(currentIndex - 1 + books.length) % books.length], [currentIndex])
  const nextBook = useMemo(() => books[(currentIndex + 1) % books.length], [currentIndex])
  const currentBook = useMemo(() => books[currentIndex], [currentIndex])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 py-24 overflow-hidden">
      
      {/* Heading */}
      <div className="relative text-center mb-20 px-4 animate-fade-in">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Featured Published Works
          </span>
        </h2>
        <div className="h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-4 mx-auto max-w-xs animate-scale-in" />
        <p className="mt-6 text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto font-medium leading-relaxed">
          Discover the exceptional books we've brought to life. Each one a testament to our commitment to quality publishing.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 lg:gap-16">

          {/* Prev Preview */}
          <div className="hidden lg:block transition-transform hover:scale-105 hover:-translate-x-2 duration-300">
            <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80">
              <img 
                src={prevBook.cover} 
                alt={prevBook.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Main 3D Flip Card */}
          <div className="relative perspective-1000">
            <div
              key={currentIndex}
              className={`relative w-80 h-96 preserve-3d cursor-pointer transition-all duration-700 hover:scale-105 ${
                isFlipped ? 'rotate-y-180' : ''
              } ${direction === 1 ? 'animate-slide-left' : direction === -1 ? 'animate-slide-right' : ''}`}
              onClick={toggleFlip}
            >
              {/* Front: Cover */}
              <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-300/50">
                <img
                  src={currentBook.cover}
                  alt={currentBook.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 via-yellow-900/20 to-transparent" />
                <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  NEW
                </div>
              </div>

              {/* Back: Info */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/90 backdrop-blur-xl p-8 flex flex-col justify-center rounded-3xl shadow-2xl border-2 border-yellow-300/40">
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
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-yellow-900 font-bold shadow-lg transition-all">
                    Read More
                  </Button>
                  <Button variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-50 hover:border-yellow-500 font-semibold">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Next Preview */}
          <div className="hidden lg:block transition-transform hover:scale-105 hover:translate-x-2 duration-300">
            <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80">
              <img 
                src={nextBook.cover} 
                alt={nextBook.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
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

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {books.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="relative transition-transform hover:scale-125"
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

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlay(v => !v)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-yellow-300 text-amber-700 hover:bg-yellow-50 hover:border-yellow-400 font-medium text-sm shadow-md transition-all"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isAutoPlay ? "Pause" : "Play"} Auto-play</span>
          </button>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-scale-in { animation: scale-in 1s ease-out 0.4s both; }
        .animate-slide-left { animation: slide-left 0.5s ease-out; }
        .animate-slide-right { animation: slide-right 0.5s ease-out; }
      `}</style>
    </section>
  )
}

// "use client"

// import { useState, useEffect, useCallback, useMemo, useRef } from "react"
// import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface Book {
//   id: number
//   title: string
//   author: string
//   description: string
//   cover: string
//   genre: string
// }

// const books: Book[] = [
//   {
//     id: 1,
//     title: "The Midnight Chronicles",
//     author: "Sarah Anderson",
//     description: "An epic fantasy adventure spanning three kingdoms and one unforgettable destiny.",
//     cover: "/cover10.webp",
//     genre: "Fantasy",
//   },
//   {
//     id: 2,
//     title: "Echoes of Tomorrow",
//     author: "James Mitchell",
//     description: "A gripping sci‑fi thriller about time travel, paradoxes, and the cost of changing fate.",
//     cover: "/book-special.webp",
//     genre: "Science Fiction",
//   },
//   {
//     id: 3,
//     title: "The Last Harbor",
//     author: "Emma Richardson",
//     description: "A poignant mystery novel set in a coastal town with secrets buried for decades.",
//     cover: "/cover12.webp",
//     genre: "Mystery",
//   },
//   {
//     id: 4,
//     title: "Whispers in the Garden",
//     author: "Michael Chen",
//     description: "A romantic drama exploring love, loss, and the beauty of second chances.",
//     cover: "/cover11.webp",
//     genre: "Romance",
//   },
//   {
//     id: 5,
//     title: "The Forgotten Code",
//     author: "Lisa Thompson",
//     description: "A thrilling adventure about decoding ancient mysteries and uncovering hidden truths.",
//     cover: "/cover8.webp",
//     genre: "Adventure",
//   },
// ]

// export default function LampSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlay, setIsAutoPlay] = useState(true)
//   const [isFlipped, setIsFlipped] = useState(false)
//   const [direction, setDirection] = useState(0)
//   const [hasAnimated, setHasAnimated] = useState(false)
//   const sectionRef = useRef<HTMLElement>(null)

//   // Intersection Observer for scroll animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !hasAnimated) {
//             setHasAnimated(true)
//           }
//         })
//       },
//       { threshold: 0.2 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current)
//       }
//     }
//   }, [hasAnimated])

//   useEffect(() => {
//     if (!isAutoPlay) return
//     const id = setInterval(() => {
//       setCurrentIndex((i) => (i + 1) % books.length)
//       setIsFlipped(false)
//     }, 5000)
//     return () => clearInterval(id)
//   }, [isAutoPlay])

//   const prev = useCallback(() => {
//     setCurrentIndex((i) => (i - 1 + books.length) % books.length)
//     setIsAutoPlay(false)
//     setIsFlipped(false)
//     setDirection(-1)
//   }, [])

//   const next = useCallback(() => {
//     setCurrentIndex((i) => (i + 1) % books.length)
//     setIsAutoPlay(false)
//     setIsFlipped(false)
//     setDirection(1)
//   }, [])

//   const go = useCallback((i: number) => {
//     setDirection(i > currentIndex ? 1 : -1)
//     setCurrentIndex(i)
//     setIsAutoPlay(false)
//     setIsFlipped(false)
//   }, [currentIndex])

//   const toggleFlip = useCallback(() => setIsFlipped(f => !f), [])

//   const prevBook = useMemo(() => books[(currentIndex - 1 + books.length) % books.length], [currentIndex])
//   const nextBook = useMemo(() => books[(currentIndex + 1) % books.length], [currentIndex])
//   const currentBook = useMemo(() => books[currentIndex], [currentIndex])

//   return (
//     <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 py-24 overflow-hidden">
      
//       {/* Heading */}
//       <div className={`relative text-center mb-20 px-4 ${hasAnimated ? 'animate-fade-in' : 'opacity-0'}`}>
//         <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
//           <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
//             Featured Published Works
//           </span>
//         </h2>
//         <div className={`h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-4 mx-auto max-w-xs ${hasAnimated ? 'animate-scale-in' : 'scale-x-0'}`} />
//         <p className="mt-6 text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto font-medium leading-relaxed">
//           Discover the exceptional books we've brought to life. Each one a testament to our commitment to quality publishing.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className={`relative w-full max-w-7xl mx-auto px-4 ${hasAnimated ? 'animate-carousel-in' : 'opacity-0'}`}>
//         <div className="flex items-center justify-center gap-8 lg:gap-16">

//           {/* Prev Preview */}
//           <div className="hidden lg:block transition-transform hover:scale-105 hover:-translate-x-2 duration-300">
//             <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80">
//               <img 
//                 src={prevBook.cover} 
//                 alt={prevBook.title} 
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* Main 3D Flip Card */}
//           <div className="relative perspective-1000">
//             <div
//               key={currentIndex}
//               className={`relative w-80 h-96 preserve-3d cursor-pointer transition-all duration-700 hover:scale-105 ${
//                 isFlipped ? 'rotate-y-180' : ''
//               } ${direction === 1 ? 'animate-slide-left' : direction === -1 ? 'animate-slide-right' : ''}`}
//               onClick={toggleFlip}
//             >
//               {/* Front: Cover */}
//               <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-300/50">
//                 <img
//                   src={currentBook.cover}
//                   alt={currentBook.title}
//                   className="w-full h-full object-cover"
//                   loading="eager"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/80 via-yellow-900/20 to-transparent" />
//                 <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
//                   NEW
//                 </div>
//               </div>

//               {/* Back: Info */}
//               <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white/90 backdrop-blur-xl p-8 flex flex-col justify-center rounded-3xl shadow-2xl border-2 border-yellow-300/40">
//                 <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 rounded-full text-xs font-bold mb-4 shadow-md w-fit">
//                   {currentBook.genre}
//                 </span>
//                 <h3 className="text-2xl sm:text-3xl font-bold text-yellow-800 mb-2 leading-tight">
//                   {currentBook.title}
//                 </h3>
//                 <p className="text-sm text-amber-700 font-medium mb-3">by {currentBook.author}</p>
//                 <p className="text-sm text-amber-800 leading-relaxed line-clamp-3">
//                   {currentBook.description}
//                 </p>

//                 <div className="mt-6 flex gap-3">
//                   <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-yellow-900 font-bold shadow-lg transition-all">
//                     Read More
//                   </Button>
//                   <Button variant="outline" className="border-yellow-400 text-yellow-700 hover:bg-yellow-50 hover:border-yellow-500 font-semibold">
//                     Details
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Next Preview */}
//           <div className="hidden lg:block transition-transform hover:scale-105 hover:translate-x-2 duration-300">
//             <div className="w-48 h-72 rounded-2xl overflow-hidden shadow-xl border border-yellow-200/80">
//               <img 
//                 src={nextBook.cover} 
//                 alt={nextBook.title} 
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-center gap-6 mt-16">
//           <Button
//             onClick={prev}
//             variant="outline"
//             size="icon"
//             className="w-12 h-12 rounded-full border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:border-transparent shadow-lg transition-all"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </Button>
//           <Button
//             onClick={next}
//             variant="outline"
//             size="icon"
//             className="w-12 h-12 rounded-full border-2 border-yellow-400 text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-white hover:border-transparent shadow-lg transition-all"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </Button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-3 mt-8">
//           {books.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => go(i)}
//               className="relative transition-transform hover:scale-125"
//             >
//               <div
//                 className={`transition-all duration-300 rounded-full ${
//                   i === currentIndex
//                     ? "w-12 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
//                     : "w-3 h-3 bg-amber-300 hover:bg-yellow-400"
//                 }`}
//               />
//             </button>
//           ))}
//         </div>

//         {/* Auto-play Toggle */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => setIsAutoPlay(v => !v)}
//             className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-yellow-300 text-amber-700 hover:bg-yellow-50 hover:border-yellow-400 font-medium text-sm shadow-md transition-all"
//           >
//             {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
//             <span>{isAutoPlay ? "Pause" : "Play"} Auto-play</span>
//           </button>
//         </div>
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .perspective-1000 { perspective: 1000px; }
//         .preserve-3d { transform-style: preserve-3d; }
//         .backface-hidden { backface-visibility: hidden; }
//         .rotate-y-180 { transform: rotateY(180deg); }
        
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes scale-in {
//           from { transform: scaleX(0); }
//           to { transform: scaleX(1); }
//         }
        
//         @keyframes carousel-in {
//           from { opacity: 0; transform: translateY(60px) scale(0.9); }
//           to { opacity: 1; transform: translateY(0) scale(1); }
//         }
        
//         @keyframes slide-left {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes slide-right {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         .animate-fade-in { 
//           animation: fade-in 0.8s ease-out forwards; 
//         }
//         .animate-scale-in { 
//           animation: scale-in 1s ease-out 0.4s forwards; 
//         }
//         .animate-carousel-in { 
//           animation: carousel-in 1s ease-out 0.6s forwards; 
//         }
//         .animate-slide-left { animation: slide-left 0.5s ease-out; }
//         .animate-slide-right { animation: slide-right 0.5s ease-out; }
//       `}</style>
//     </section>
//   )
// }