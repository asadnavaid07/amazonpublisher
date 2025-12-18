// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Star, Video } from "lucide-react"
// import { motion } from "framer-motion"
// import Image from "next/image"

// export default function HeroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   }

//   return (
//     <section
//       id="home"
//       className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden pt-6 md:pt-8 w-full max-w-[100vw]"
//     >
//       {/* ==== Vibrant gradient backdrop ==== */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100" />
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 opacity-20"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 20% 80%, #ffcc33 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff66cc 0%, transparent 50%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 opacity-10"
//         style={{
//           backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <motion.div
//         className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
//           {/* ==== LEFT – copy ==== */}
//           <div className="text-center md:text-left">
//             <motion.h1
//               variants={itemVariants}
//               className="mt-3 text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
//             >
//               Publish your{" "}
//               <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text px-3 pb-1 rounded-xl">
//                 Book
//               </span>{" "}
//               on Amazon
//             </motion.h1>

//             <motion.div
//               variants={itemVariants}
//               className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5 transition-all"
//               >
//                 Get started
//                 <ArrowRight className="ml-2 w-4 h-4 transition-transform" />
//               </Button>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="mt-7 flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm text-muted-foreground"
//             >
//               <div className="flex items-center gap-2">
//                 <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                 <span className="font-semibold text-orange-700">4.9/5 rating</span>
//               </div>
//               <div className="text-purple-700 font-medium">10k+ books formatted</div>
//             </motion.div>
//           </div>

//           {/* ==== RIGHT – dual carousels ==== */}
//           <motion.div
//             variants={itemVariants}
//             className="relative mx-auto md:mx-0 w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] overflow-hidden"
//           >
//             {/* Glow */}
//             <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-yellow-300/30 via-pink-200/20 to-purple-300/30 blur-3xl rounded-[48px]" />

//             {/* ---- Row 1 ---- */}
//             <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-4 border-yellow-300/30 bg-gradient-to-br from-white/90 to-yellow-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,204,0,0.25)]">
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
//               <div className="flex gap-3 sm:gap-4 w-[200%] animate-slide">
//                 {[
//                   "/cover1.webp",
//                   "/cover2.webp",
//                   "/cover3.webp",
//                   "/cover6.webp",
//                   "/cover7.webp",
//                   "/cover8.webp",
//                   "/cover9.webp",
//                 ].map((src, i) => (
//                   <div
//                     key={`r1-${i}`}
//                     className="shrink-0 w-44 sm:w-56 md:w-64 my-3 rounded-[20px] sm:rounded-[24px] overflow-hidden border-2 border-yellow-400/40 bg-white shadow-lg transition-all"
//                   >
//                     <Image
//                       src={src}
//                       alt="Book cover"
//                       width={600}
//                       height={800}
//                       className="w-full h-36 sm:h-40 md:h-48 object-cover"
//                       priority={i < 4}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ---- Row 2 ---- */}
//             <div className="mt-5 relative overflow-hidden rounded-[28px] sm:rounded-[36px] border-4 border-pink-300/30 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,102,204,0.25)]">
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
//               <div className="flex gap-3 sm:gap-4 w-[200%] animate-slide-reverse">
//                 {[
//                   "/cover4.webp",
//                   "/cover5.webp",
//                   "/cover12.webp",
//                   "/cover13.webp",
//                   "/cover14.webp",
//                   "/cover10.webp",
//                   "/cover11.webp",
//                   "/cover1.webp",
//                   "/cover2.webp",
//                 ].map((src, i) => (
//                   <div
//                     key={`r2-${i}`}
//                     className="shrink-0 w-44 sm:w-56 md:w-64 my-3 rounded-[20px] sm:rounded-[24px] overflow-hidden border-2 border-pink-400/40 bg-white shadow-lg transition-all"
//                   >
//                     <Image
//                       src={src}
//                       alt="Book cover"
//                       width={600}
//                       height={800}
//                       className="w-full h-36 sm:h-40 md:h-48 object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* ==== Tailwind animation keyframes ==== */}
//       <style jsx>{`
//         @keyframes slide {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         @keyframes slide-reverse {
//           from { transform: translateX(-50%); }
//           to { transform: translateX(0); }
//         }
//         .animate-slide { animation: slide 18s linear infinite; }
//         .animate-slide-reverse { animation: slide-reverse 18s linear infinite; }
//       `}</style>
//     </section>
//   )
// }



// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Star } from "lucide-react"
// import { motion } from "framer-motion"
// import Image from "next/image"
// import { useEffect, useState } from "react"

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <section
//       id="home"
//       className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden pt-6 md:pt-8 w-full max-w-[100vw]"
//     >
//       {/* ==== Background ==== */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100" />
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 opacity-20"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 20% 80%, #ffcc33 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff66cc 0%, transparent 50%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 -z-10 opacity-10"
//         style={{
//           backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* ==== CONTENT ==== */}
//       <motion.div
//         className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         layout={false} // ✅ FIX 5
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
//           {/* ==== LEFT ==== */}
//           <div className="text-center md:text-left">
//             <motion.h1
//               variants={itemVariants}
//               layout={false} // ✅ FIX 5
//               className="mt-3 text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
//             >
//               Publish your{" "}
//               <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text px-3 pb-1 rounded-xl">
//                 Book
//               </span>{" "}
//               on Amazon
//             </motion.h1>

//             <motion.div
//               variants={itemVariants}
//               layout={false}
//               className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5 transition-all"
//               >
//                 Get started
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </Button>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               layout={false}
//               className="mt-7 flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm"
//             >
//               <div className="flex items-center gap-2">
//                 <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                 <span className="font-semibold text-orange-700">4.9/5 rating</span>
//               </div>
//               <div className="text-purple-700 font-medium">
//                 10k+ books formatted
//               </div>
//             </motion.div>
//           </div>

//           {/* ==== RIGHT (NO FRAMER MOTION) ==== */}
//           <div className="relative mx-auto md:mx-0 w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] overflow-hidden">
//             <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-yellow-300/30 via-pink-200/20 to-purple-300/30 blur-3xl rounded-[48px]" />

//             {/* ---- Row 1 ---- */}
//             <div className="relative overflow-hidden rounded-[28px] border-4 border-yellow-300/30 bg-gradient-to-br from-white/90 to-yellow-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,204,0,0.25)]">
//               <div className="flex gap-4 w-[200%]">
//                 <div className={`${mounted ? "animate-slide" : ""} flex gap-4`}>
//                   {[
//                     "/cover1.webp",
//                     "/cover2.webp",
//                     "/cover3.webp",
//                     "/cover6.webp",
//                     // "/cover7.webp",
//                   ].map((src, i) => (
//                     <div
//                       key={i}
//                       className="shrink-0 w-44 sm:w-56 md:w-64 my-3 rounded-2xl overflow-hidden border bg-white shadow-lg"
//                     >
//                       <Image
//                         src={src}
//                         alt="Book cover"
//                         width={600}
//                         height={800}
//                         priority={i < 3}
//                         className="w-full h-36 sm:h-40 md:h-48 object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* ---- Row 2 ---- */}
//             <div className="mt-5 relative overflow-hidden rounded-[28px] border-4 border-pink-300/30 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,102,204,0.25)]">
//               <div className="flex gap-4 w-[200%]">
//                 <div className={`${mounted ? "animate-slide-reverse" : ""} flex gap-4`}>
//                   {[
//                     "/cover4.webp",
//                     "/cover5.webp",
//                     "/cover10.webp",
//                     "/cover13.webp",
//                     // "/cover12.webp",
//                   ].map((src, i) => (
//                     <div
//                       key={i}
//                       className="shrink-0 w-44 sm:w-56 md:w-64 my-3 rounded-2xl overflow-hidden border bg-white shadow-lg"
//                     >
//                       <Image
//                         src={src}
//                         alt="Book cover"
//                         width={600}
//                         height={800}
//                         className="w-full h-36 sm:h-40 md:h-48 object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </motion.div>

//       {/* ==== Animations ==== */}
//       <style jsx>{`
//         @keyframes slide {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         @keyframes slide-reverse {
//           from { transform: translateX(-50%); }
//           to { transform: translateX(0); }
//         }
//         .animate-slide {
//           animation: slide 18s linear infinite;
//         }
//         .animate-slide-reverse {
//           animation: slide-reverse 18s linear infinite;
//         }
//       `}</style>
//     </section>
//   )
// }



"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
// Removed unused state and useEffect for cleaner component lifecycle

// Define the book covers array once
const bookCoversRow1 = [
  "/cover1.webp",
  "/cover2.webp",
  "/cover3.webp",
  "/cover6.webp",
];
const bookCoversRow2 = [
  "/cover4.webp",
  "/cover5.webp",
  "/cover10.webp",
  "/cover13.webp",
];

// Helper function to render a single row of books
// Duplicates the covers array for a seamless marquee effect while minimizing eager image loading.
const BookMarqueeRow = ({
  covers,
  animationClass,
  priorityFirst = false,
}: {
  covers: string[]
  animationClass: string
  priorityFirst?: boolean
}) => {
  const renderedCovers = [...covers, ...covers]

  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-4 ${animationClass} shrink-0`}>
        {renderedCovers.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-44 sm:w-56 md:w-64 my-3 rounded-2xl overflow-hidden border bg-white shadow-lg"
          >
            <Image
              src={src}
              alt="Book cover"
              width={600}
              height={800}
              sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 11rem"
              // Only the very first image in the first row is priority to improve LCP
              priority={priorityFirst && i === 0}
              className="w-full h-36 sm:h-40 md:h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      // Adjusted delayChildren slightly to speed up initial load
      transition: { staggerChildren: 0.15, delayChildren: 0 }, 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }, // Slightly faster duration
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden pt-6 md:pt-8 w-full max-w-[100vw]"
    >
      {/* ==== Background (Unchanged, CSS backgrounds are performant) ==== */}
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

      {/* ==== CONTENT ==== */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        // Removed redundant layout={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* ==== LEFT ==== */}
          <div className="text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              // Removed redundant layout={false}
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
              // Removed redundant layout={false}
              className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5 transition-all"
              >
                Get started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              // Removed redundant layout={false}
              className="mt-7 flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-orange-700">4.9/5 rating</span>
              </div>
              <div className="text-purple-700 font-medium">
                10k+ books formatted
              </div>
            </motion.div>
          </div>

          {/* ==== RIGHT (OPTIMIZED MARQUEE) ==== */}
          <HeroMarquee />

        </div>
      </motion.div>

      {/* ==== Animations (CSS animation, now toggled via in-view) ==== */}
      <style jsx>{`
        @keyframes slide {
          /* The animation moves the content 50% of the total width */
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes slide-reverse {
          /* The reverse animation moves from 50% back to 0% */
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-slide {
          /* Using the same 18s duration */
          animation: slide 18s linear infinite;
        }
        .animate-slide-reverse {
          animation: slide-reverse 18s linear infinite;
        }
      `}</style>
    </section>
  )
}

function HeroMarquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(marqueeRef, { amount: 0.2 })

  return (
    <div
      ref={marqueeRef}
      className="relative mx-auto md:mx-0 w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] overflow-hidden"
    >
      <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-yellow-300/30 via-pink-200/20 to-purple-300/30 blur-3xl rounded-[48px]" />

      {/* ---- Row 1 ---- */}
      <div className="relative overflow-hidden rounded-[28px] border-4 border-yellow-300/30 bg-gradient-to-br from-white/90 to-yellow-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,204,0,0.25)]">
        <BookMarqueeRow
          covers={bookCoversRow1}
          animationClass={inView ? "animate-slide" : ""}
          priorityFirst
        />
      </div>

      {/* ---- Row 2 ---- */}
      <div className="mt-5 relative overflow-hidden rounded-[28px] border-4 border-pink-300/30 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,102,204,0,0.25)]">
        <BookMarqueeRow
          covers={bookCoversRow2}
          animationClass={inView ? "animate-slide-reverse" : ""}
        />
      </div>
    </div>
  )
}