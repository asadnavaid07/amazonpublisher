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
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   }

//   return (
//     <section id="home" className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden pt-6 md:pt-8">
//       {/* Soft gradient background rather than flat black */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_80%_0%,rgba(236,162,18,0.10),transparent),radial-gradient(70%_50%_at_0%_100%,rgba(236,162,18,0.06),transparent)]" />
//       <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{backgroundImage: "radial-gradient(#fff_1px, transparent 1px)", backgroundSize: "24px 24px"}} />

//       <motion.div
//         className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           {/* Left: copy */}
//           <div className="text-center md:text-left">
//             <motion.h1 variants={itemVariants} className="mt-3 text-[2.4rem] sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
//               Publish your <span className="bg-primary text-primary-foreground px-3 pb-1 rounded-xl">Book</span> on Amazon
//             </motion.h1>

//             <motion.div variants={itemVariants} className="mt-7 flex flex-col sm:flex-row gap-4 md:gap-3 justify-center md:justify-start">
//               <Button size="lg" className="bg-primary mt-6 hover:bg-primary/90 text-primary-foreground group">
//                 Get started
//                 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
              
//               {/* Enhanced Video Preview Badge */}
//               {/* <button className="relative group mt-3 px-6 py-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="relative flex items-center gap-2.5">
//                   <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Video className="w-4 h-4 text-primary spin-slow" />
//                   </div>
//                   <span className="text-sm font-medium">Watch Demo</span>
//                 </div>
//               </button> */}
//             </motion.div>

//             <motion.div variants={itemVariants} className="mt-7 flex items-center gap-6 justify-center md:justify-start text-sm text-muted-foreground">
//               <div className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /><span>4.9/5 rating</span></div>
//               <div>10k+ books formatted</div>
//             </motion.div>
//           </div>

//           {/* Right: dual auto-scrolling book carousels */}
//           <motion.div variants={itemVariants} className="relative mx-auto md:mx-0 w-full max-w-[620px]">
//             <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-primary/25 via-transparent to-transparent blur-3xl rounded-[48px]" />

//             {/* Row 1 */}
//             <div className="relative overflow-hidden rounded-[36px] border-4 border-primary/20 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur shadow-[0_0_30px_rgba(236,162,18,0.15)]">
//               <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
//               <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
//               <div className="flex gap-4 w-[200%] animate-slide">
//                 {["/cover1.jpg","/cover2.jpg","/cover3.jpg"].map((src, i) => (
//                   <div key={`r1-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
//                     <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
//                   </div>
//                 ))}
//                 {["/cover6.jpg","/cover7.jpg","/cover8.jpg","/cover9.jpg"].map((src, i) => (
//                   <div key={`r1b-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
//                     <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="mt-5 relative overflow-hidden rounded-[36px] border-4 border-primary/20 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur shadow-[0_0_30px_rgba(236,162,18,0.15)]">
//               <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
//               <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
//               <div className="flex gap-4 w-[200%] animate-slide-reverse">
//                 {["/cover4.jpg","/cover5.jpg","/cover12.jpg","/cover13.jpg","/cover14.jpg"].map((src, i) => (
//                   <div key={`r2-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
//                     <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
//                   </div>
//                 ))}
//                 {["/cover10.jpg","/cover11.jpg","/cover1.jpg","/cover2.jpg"].map((src, i) => (
//                   <div key={`r2b-${i}`} className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-primary/30 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(236,162,18,0.25)] transition-shadow">
//                     <Image src={src} alt="Book cover" width={600} height={800} className="w-full h-40 md:h-48 object-cover" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

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
//       className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden pt-6 md:pt-8"
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
//         className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           {/* ==== LEFT – copy ==== */}
//           <div className="text-center md:text-left">
//             <motion.h1
//               variants={itemVariants}
//               className="mt-3 text-[2.4rem] sm:text-6xl lg:text-7xl font-bold leading-tight text-balance"
//             >
//               Publish your{" "}
//               <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text px-3 pb-1 rounded-xl">
//                 Book
//               </span>{" "}
//               on Amazon
//             </motion.h1>

//             <motion.div
//               variants={itemVariants}
//               className="mt-7 flex flex-col sm:flex-row gap-4 md:gap-3 justify-center md:justify-start"
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5 transition-all"
//               >
//                 Get started
//                 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Button>

//               {/* Optional video badge – uncomment if you want it */}
//               {/* <button className="relative group mt-3 px-6 py-3 rounded-full border border-orange-400/40 bg-gradient-to-r from-orange-100/50 to-pink-100/50 hover:border-orange-500/70 transition-all duration-300 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
//                 <div className="relative flex items-center gap-2.5">
//                   <div className="w-10 h-10 rounded-full bg-orange-200/60 border border-orange-400/50 flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Video className="w-4 h-4 text-orange-600" />
//                   </div>
//                   <span className="text-sm font-medium text-orange-800">Watch Demo</span>
//                 </div>
//               </button> */}
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="mt-7 flex items-center gap-6 justify-center md:justify-start text-sm text-muted-foreground"
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
//             className="relative mx-auto md:mx-0 w-full max-w-[620px]"
//           >
//             {/* Glow behind the rows */}
//             <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-yellow-300/30 via-pink-200/20 to-purple-300/30 blur-3xl rounded-[48px]" />

//             {/* ---- Row 1 ---- */}
//             <div className="relative overflow-hidden rounded-[36px] border-4 border-yellow-300/30 bg-gradient-to-br from-white/90 to-yellow-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,204,0,0.25)]">
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
//               <div className="flex gap-4 w-[200%] animate-slide">
//                 {[
//                   "/cover1.jpg",
//                   "/cover2.jpg",
//                   "/cover3.jpg",
//                   "/cover6.jpg",
//                   "/cover7.jpg",
//                   "/cover8.jpg",
//                   "/cover9.jpg",
//                 ].map((src, i) => (
//                   <div
//                     key={`r1-${i}`}
//                     className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-yellow-400/40 bg-white shadow-lg hover:shadow-2xl hover:border-orange-400/60 transition-all duration-300"
//                   >
//                     <Image
//                       src={src}
//                       alt="Book cover"
//                       width={600}
//                       height={800}
//                       className="w-full h-40 md:h-48 object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ---- Row 2 ---- */}
//             <div className="mt-5 relative overflow-hidden rounded-[36px] border-4 border-pink-300/30 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,102,204,0.25)]">
//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
//               <div className="flex gap-4 w-[200%] animate-slide-reverse">
//                 {[
//                   "/cover4.jpg",
//                   "/cover5.jpg",
//                   "/cover12.jpg",
//                   "/cover13.jpg",
//                   "/cover14.jpg",
//                   "/cover10.jpg",
//                   "/cover11.jpg",
//                   "/cover1.jpg",
//                   "/cover2.jpg",
//                 ].map((src, i) => (
//                   <div
//                     key={`r2-${i}`}
//                     className="shrink-0 w-64 md:w-72 my-3 mr-4 rounded-[24px] overflow-hidden border-2 border-pink-400/40 bg-white shadow-lg hover:shadow-2xl hover:border-purple-400/60 transition-all duration-300"
//                   >
//                     <Image
//                       src={src}
//                       alt="Book cover"
//                       width={600}
//                       height={800}
//                       className="w-full h-40 md:h-48 object-cover"
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
