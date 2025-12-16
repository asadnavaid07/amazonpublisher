// "use client"

// import { useState, useEffect, useRef } from "react"

// type BannerItem = {
//   title: string
//   subtitle: string
//   buttonText: string
// }

// type BannerProps = {
//   banner: BannerItem[]
// }

// export default function Banner({ banner }: BannerProps) {
//   const [activeIndex, setActiveIndex] = useState<number>(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const subtitleRef = useRef<HTMLParagraphElement>(null)
//   const buttonRef = useRef<HTMLButtonElement>(null)
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([])

//   useEffect(() => {
//     // Trigger animations on mount
//     setIsVisible(true)

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banner.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [banner.length])

//   // Reset animations when activeIndex changes with smooth transition
//   useEffect(() => {
//     setIsVisible(false)
//     const timeout = setTimeout(() => setIsVisible(true), 100)
//     return () => clearTimeout(timeout)
//   }, [activeIndex])

//   const title = banner[activeIndex]?.title ?? ""
//   const words = title.split(" ")

//   const firstLine = words.slice(0, 2).join(" ")
//   const secondLine = words.slice(2).join(" ")

//   const bookCards = [
//     { img: "/cover1.webp", title: "Mystery Novel", author: "John Doe", rotation: "rotate-2" },
//     { img: "/cover2.webp", title: "Fantasy Series", author: "Jane Smith", rotation: "-rotate-1" },
//     { img: "/cover3.webp", title: "Thriller Edition", author: "Mike Brown", rotation: "-rotate-2" },
//     { img: "/cover4.webp", title: "Romance Story", author: "Sarah Lee", rotation: "rotate-1" },
//   ]

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Animated background overlay */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,162,18,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
//       </div>

//       {/* Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left side - Content */}
//           <div className="space-y-6 order-2 lg:order-1">
//             <div className="space-y-4">
//               <h1 
//                 ref={titleRef}
//                 className="font-extrabold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
//               >
//                 <span 
//                   className="block transition-all duration-500 ease-in-out"
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                     transitionDelay: '0ms'
//                   }}
//                 >
//                   {firstLine}
//                 </span>
//                 <span 
//                   className="block bg-gradient-to-r from-[#ECA212] to-[#D89010] bg-clip-text text-transparent transition-all duration-500 ease-in-out"
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                     transitionDelay: '100ms'
//                   }}
//                 >
//                   {secondLine}
//                 </span>
//               </h1>
//               <p 
//                 ref={subtitleRef}
//                 className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-xl transition-all duration-500 ease-in-out"
//                 style={{ 
//                   opacity: isVisible ? 1 : 0,
//                   transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                   transitionDelay: '200ms'
//                 }}
//               >
//                 {banner[activeIndex]?.subtitle}
//               </p>
//             </div>

//             <button 
//               ref={buttonRef}
//               className="mt-8 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#ECA212] to-[#D89010] hover:from-[#D89010] hover:to-[#ECA212] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#ECA212]/50 hover:scale-105"
//               style={{ 
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                 transitionDelay: '300ms',
//                 transitionDuration: '500ms',
//                 transitionTimingFunction: 'ease-in-out'
//               }}
//             >
//               {banner[activeIndex]?.buttonText}
//             </button>

//             {/* Slider dots */}
//             <div className="flex gap-2 pt-4">
//               {banner.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     index === activeIndex 
//                       ? "bg-[#ECA212] w-8" 
//                       : "bg-slate-600 w-2 hover:bg-slate-500"
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right side - Tilted Book Cards */}
//           <div className="relative order-1 lg:order-2">
//             <div className="grid grid-cols-2 gap-6">
//               {/* Column 1 */}
//               <div className="space-y-6">
//                 <div 
//                   ref={el => cardsRef.current[0] = el}
//                   className={`bg-[#ECA212] p-4 rounded-xl shadow-2xl transform ${bookCards[0].rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group will-change-transform animate-float`}
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
//                     transitionDelay: '200ms',
//                     animationDelay: '0s'
//                   }}
//                 >
//                   <div className="h-56 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-3 overflow-hidden">
//                     <img 
//                       src={bookCards[0].img} 
//                       alt={bookCards[0].title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="h-3 bg-slate-200 rounded w-3/4 mb-2"></div>
//                   <div className="h-3 bg-slate-200 rounded w-1/2"></div>
//                 </div>

//                 <div 
//                   ref={el => cardsRef.current[1] = el}
//                   className={`bg-white p-4 rounded-xl shadow-2xl transform ${bookCards[1].rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group will-change-transform animate-float`}
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
//                     transitionDelay: '400ms',
//                     animationDelay: '0.3s'
//                   }}
//                 >
//                   <div className="h-48 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg mb-3 overflow-hidden">
//                     <img 
//                       src={bookCards[1].img} 
//                       alt={bookCards[1].title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="h-3 bg-slate-200 rounded w-2/3 mb-2"></div>
//                   <div className="h-3 bg-slate-200 rounded w-1/3"></div>
//                 </div>
//               </div>

//               {/* Column 2 */}
//               <div className="space-y-6 mt-8">
//                 <div 
//                   ref={el => cardsRef.current[2] = el}
//                   className={`bg-white p-4 rounded-xl shadow-2xl transform ${bookCards[2].rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group will-change-transform animate-float`}
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
//                     transitionDelay: '600ms',
//                     animationDelay: '0.6s'
//                   }}
//                 >
//                   <div className="h-52 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg mb-3 overflow-hidden">
//                     <img 
//                       src={bookCards[2].img} 
//                       alt={bookCards[2].title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="h-3 bg-slate-200 rounded w-4/5 mb-2"></div>
//                   <div className="h-3 bg-slate-200 rounded w-2/3"></div>
//                 </div>

//                 <div 
//                   ref={el => cardsRef.current[3] = el}
//                   className={`bg-[#ECA212] p-4 rounded-xl shadow-2xl transform ${bookCards[3].rotation} hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group will-change-transform animate-float`}
//                   style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
//                     transitionDelay: '800ms',
//                     animationDelay: '0.9s'
//                   }}
//                 >
//                   <div className="h-44 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg mb-3 overflow-hidden">
//                     <img 
//                       src={bookCards[3].img} 
//                       alt={bookCards[3].title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="h-3 bg-slate-200 rounded w-3/5 mb-2"></div>
//                   <div className="h-3 bg-slate-200 rounded w-2/5"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating accent elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ECA212]/20 rounded-full blur-2xl animate-pulse"></div>
//             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D89010]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   )
// }

// // Demo usage - Remove this when integrating
// Banner.defaultProps = {
//   banner: [
//     {
//       title: "Publish Your Story With Us",
//       subtitle: "Transform your manuscript into a masterpiece with our professional publishing services",
//       buttonText: "Get Started Today"
//     },
//     {
//       title: "Professional Book Design Services",
//       subtitle: "Beautiful covers and layouts that capture your readers' attention",
//       buttonText: "View Our Work"
//     },
//     {
//       title: "Marketing That Works",
//       subtitle: "Reach thousands of readers with our proven book promotion strategies",
//       buttonText: "Learn More"
//     }
//   ]
// }



"use client"

import { useEffect, useState } from "react"
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    setCardsVisible(true)

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banner.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [banner.length])

  const title = banner[activeIndex]?.title ?? ""
  const words = title.split(" ")
  const firstLine = words.slice(0, 2).join(" ")
  const secondLine = words.slice(2).join(" ")

  const bookCards = [
    { img: "/cover1.webp", rotation: "rotate-2" },
    { img: "/cover2.webp", rotation: "-rotate-1" },
    { img: "/cover3.webp", rotation: "-rotate-2" },
    { img: "/cover4.webp", rotation: "rotate-1" },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,162,18,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="font-extrabold text-5xl lg:text-7xl text-white leading-tight">
            <span key={firstLine} className="block animate-fade-up">
              {firstLine}
            </span>
            <span
              key={secondLine}
              className="block bg-gradient-to-r from-[#ECA212] to-[#D89010] bg-clip-text text-transparent animate-fade-up delay-100"
            >
              {secondLine}
            </span>
          </h1>

          <p
            key={banner[activeIndex]?.subtitle}
            className="text-xl text-slate-300 max-w-xl animate-fade-up delay-200"
          >
            {banner[activeIndex]?.subtitle}
          </p>

          <button
            key={banner[activeIndex]?.buttonText}
            className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#ECA212] to-[#D89010] animate-fade-up delay-300 hover:scale-105 transition-transform"
          >
            {banner[activeIndex]?.buttonText}
          </button>

          <div className="flex gap-2 pt-4">
            {banner.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[#ECA212]"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-6">
          {bookCards.map((card, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl shadow-2xl bg-white transform ${card.rotation}
                ${cardsVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"}
                transition-all duration-700 delay-${i * 20} animate-float`}
            >
              <Image
                src={card.img}
                alt="Book cover"
                width={300}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.5s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s }
        .delay-200 { animation-delay: 0.2s }
        .delay-300 { animation-delay: 0.3s }

        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-15px) }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

/* Demo data */
Banner.defaultProps = {
  banner: [
    {
      title: "Publish Your Story With Us",
      subtitle: "Transform your manuscript into a masterpiece with our professional publishing services",
      buttonText: "Get Started Today",
    },
    {
      title: "Professional Book Design Services",
      subtitle: "Beautiful covers and layouts that capture readers’ attention",
      buttonText: "View Our Work",
    },
    {
      title: "Marketing That Works",
      subtitle: "Reach thousands of readers with proven promotion strategies",
      buttonText: "Learn More",
    },
  ],
}
