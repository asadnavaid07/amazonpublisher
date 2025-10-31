// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"

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
//     cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
//     genre: "Fantasy",
//   },
//   {
//     id: 2,
//     title: "Echoes of Tomorrow",
//     author: "James Mitchell",
//     description: "A gripping sci-fi thriller about time travel, paradoxes, and the cost of changing fate.",
//     cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
//     genre: "Science Fiction",
//   },
//   {
//     id: 3,
//     title: "The Last Harbor",
//     author: "Emma Richardson",
//     description: "A poignant mystery novel set in a coastal town with secrets buried for decades.",
//     cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
//     genre: "Mystery",
//   },
//   {
//     id: 4,
//     title: "Whispers in the Garden",
//     author: "Michael Chen",
//     description: "A romantic drama exploring love, loss, and the beauty of second chances.",
//     cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
//     genre: "Romance",
//   },
//   {
//     id: 5,
//     title: "The Forgotten Code",
//     author: "Lisa Thompson",
//     description: "A thrilling adventure about decoding ancient mysteries and uncovering hidden truths.",
//     cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
//     genre: "Adventure",
//   },
// ]

// export default function LampSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlay, setIsAutoPlay] = useState(true)

//   useEffect(() => {
//     if (!isAutoPlay) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % books.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isAutoPlay])

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev - 1 + books.length) % books.length)
//     setIsAutoPlay(false)
//   }

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % books.length)
//     setIsAutoPlay(false)
//   }

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index)
//     setIsAutoPlay(false)
//   }

//   const currentBook = books[currentIndex]
//   const nextBook = books[(currentIndex + 1) % books.length]
//   const prevBook = books[(currentIndex - 1 + books.length) % books.length]

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background w-full py-20">
//       {/* Lamp Effect */}
//       <div className="absolute inset-0 flex items-start justify-center pt-0">
//         <div className="relative flex w-full h-[600px] scale-y-125 items-center justify-center isolate z-0">
//           {/* Left lamp glow */}
//           <motion.div
//             initial={{ opacity: 0.5, width: "15rem" }}
//             whileInView={{ opacity: 1, width: "30rem" }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             viewport={{ once: false }}
//             style={{
//               backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//             }}
//             className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
//           >
//             <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//             <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
//           </motion.div>

//           {/* Right lamp glow */}
//           <motion.div
//             initial={{ opacity: 0.5, width: "15rem" }}
//             whileInView={{ opacity: 1, width: "30rem" }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             viewport={{ once: true }}
//             style={{
//               backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//             }}
//             className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary [--conic-position:from_290deg_at_center_top]"
//           >
//             <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
//             <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//           </motion.div>

//           {/* Blur overlays */}
//           <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl"></div>
//           <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

//           {/* Center glow */}
//           <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"></div>

//           {/* Inner glow */}
//           <motion.div
//             initial={{ width: "8rem" }}
//             whileInView={{ width: "16rem" }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             viewport={{ once: true }}
//             className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-primary/80 blur-2xl"
//           ></motion.div>

//           {/* Light beam - the bright line */}
//           <motion.div
//             initial={{ width: "15rem", opacity: 0 }}
//             whileInView={{ width: "30rem", opacity: 1 }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             viewport={{ once: true }}
//             className="absolute inset-auto z-[100] h-1 w-[30rem] top-0 bg-primary shadow-[0_0_50px_10px_rgba(var(--primary),0.8)]"
//           ></motion.div>

//           <div className="absolute inset-auto z-40 h-44 w-full top-0 bg-background"></div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
//         <motion.div
//           initial={{ opacity: 0.5, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           {/* Section Header */}
//           <div className="mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
//               Featured Published Works
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
//               Discover the exceptional books we've brought to life. Each one a testament to our commitment to quality
//               publishing.
//             </p>
//           </div>

//           {/* Carousel Container */}
//           <div className="relative">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="flex items-center justify-center gap-4 lg:gap-8"
//             >
//               {/* Previous Book Preview */}
//               <div className="hidden lg:block opacity-40 scale-75 transition-all duration-300 hover:opacity-60">
//                 <div className="w-48 h-72 bg-card rounded-lg overflow-hidden shadow-lg">
//                   <img src={prevBook.cover} alt={prevBook.title} className="w-full h-full object-cover" />
//                 </div>
//               </div>

//               {/* Main Book Display */}
//               <div className="flex-1 max-w-2xl">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                   {/* Book Cover */}
//                   <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex justify-center"
//                   >
//                     <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
//                       <img src={currentBook.cover} alt={currentBook.title} className="w-full h-full object-cover" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//                     </div>
//                   </motion.div>

//                   {/* Book Details */}
//                   <motion.div
//                     initial={{ x: 20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="space-y-6 text-left"
//                   >
//                     <div>
//                       <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/40 rounded-full mb-4">
//                         <span className="text-sm font-semibold text-primary">{currentBook.genre}</span>
//                       </div>
//                       <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
//                         {currentBook.title}
//                       </h3>
//                       <p className="text-lg text-muted-foreground">by {currentBook.author}</p>
//                     </div>

//                     <p className="text-base text-muted-foreground leading-relaxed">{currentBook.description}</p>

//                     <div className="flex gap-4 pt-4">
//                       <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Read More</Button>
//                       <Button
//                         variant="outline"
//                         className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
//                       >
//                         View Details
//                       </Button>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Next Book Preview */}
//               <div className="hidden lg:block opacity-40 scale-75 transition-all duration-300 hover:opacity-60">
//                 <div className="w-48 h-72 bg-card rounded-lg overflow-hidden shadow-lg">
//                   <img src={nextBook.cover} alt={nextBook.title} className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </motion.div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-center gap-4 mt-12">
//               <Button
//                 onClick={goToPrevious}
//                 variant="outline"
//                 size="icon"
//                 className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </Button>
//               <Button
//                 onClick={goToNext}
//                 variant="outline"
//                 size="icon"
//                 className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </Button>
//             </div>

//             {/* Dot Indicators */}
//             <div className="flex justify-center gap-2 mt-8">
//               {books.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground"
//                   }`}
//                   aria-label={`Go to book ${index + 1}`}
//                 />
//               ))}
//             </div>

//             {/* Auto-play Toggle */}
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={() => setIsAutoPlay(!isAutoPlay)}
//                 className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 {isAutoPlay ? "⏸ Pause" : "▶ Play"} Auto-play
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    author: "James Mitchell",
    description: "A gripping sci-fi thriller about time travel, paradoxes, and the cost of changing fate.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
    genre: "Science Fiction",
  },
  {
    id: 3,
    title: "The Last Harbor",
    author: "Emma Richardson",
    description: "A poignant mystery novel set in a coastal town with secrets buried for decades.",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    genre: "Mystery",
  },
  {
    id: 4,
    title: "Whispers in the Garden",
    author: "Michael Chen",
    description: "A romantic drama exploring love, loss, and the beauty of second chances.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    genre: "Romance",
  },
  {
    id: 5,
    title: "The Forgotten Code",
    author: "Lisa Thompson",
    description: "A thrilling adventure about decoding ancient mysteries and uncovering hidden truths.",
    cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
    genre: "Adventure",
  },
]

export default function LampSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const currentBook = books[currentIndex]
  const nextBook = books[(currentIndex + 1) % books.length]
  const prevBook = books[(currentIndex - 1 + books.length) % books.length]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background w-full py-20">
      {/* Lamp Effect */}
      <div className="absolute inset-0 flex items-start justify-center pt-0">
        <div className="relative flex w-full h-[600px] scale-y-125 items-center justify-center isolate z-0">
          {/* Left lamp glow */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: false }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Right lamp glow */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: false }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>

          {/* Blur overlays */}
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

          {/* Center glow */}
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"></div>

          {/* Inner glow */}
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: false }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-primary/80 blur-2xl"
          ></motion.div>

          {/* Light beam - the bright line */}
          <motion.div
            initial={{ width: "15rem", opacity: 0 }}
            whileInView={{ width: "30rem", opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: false }}
            className="absolute inset-auto z-[100] h-1 w-[30rem] top-0 bg-primary shadow-[0_0_50px_10px_rgba(var(--primary),0.8)]"
          ></motion.div>

          <div className="absolute inset-auto z-40 h-44 w-full top-0 bg-background"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: false }}
          className="text-center"
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Featured Published Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover the exceptional books we've brought to life. Each one a testament to our commitment to quality
              publishing.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 lg:gap-8"
            >
              {/* Previous Book Preview */}
              <div className="hidden lg:block opacity-40 scale-75 transition-all duration-300 hover:opacity-60">
                <div className="w-48 h-72 bg-card rounded-lg overflow-hidden shadow-lg">
                  <img src={prevBook.cover} alt={prevBook.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Main Book Display */}
              <div className="flex-1 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Book Cover */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                  >
                    <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
                      <img src={currentBook.cover} alt={currentBook.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </motion.div>

                  {/* Book Details */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 text-left"
                  >
                    <div>
                      <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/40 rounded-full mb-4">
                        <span className="text-sm font-semibold text-primary">{currentBook.genre}</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
                        {currentBook.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">by {currentBook.author}</p>
                    </div>

                    <p className="text-base text-muted-foreground leading-relaxed">{currentBook.description}</p>

                    <div className="flex gap-4 pt-4">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Read More</Button>
                      <Button
                        variant="outline"
                        className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Next Book Preview */}
              <div className="hidden lg:block opacity-40 scale-75 transition-all duration-300 hover:opacity-60">
                <div className="w-48 h-72 bg-card rounded-lg overflow-hidden shadow-lg">
                  <img src={nextBook.cover} alt={nextBook.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-12">
              <Button
                onClick={goToPrevious}
                variant="outline"
                size="icon"
                className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={goToNext}
                variant="outline"
                size="icon"
                className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {books.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to book ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isAutoPlay ? "⏸ Pause" : "▶ Play"} Auto-play
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}