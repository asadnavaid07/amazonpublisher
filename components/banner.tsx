// "use client"

// import { useEffect, useState, useRef } from "react"
// import Image from "next/image"

// type BannerItem = {
//   title: string
//   subtitle: string
//   buttonText: string
// }

// type BannerProps = {
//   banner: BannerItem[]
// }

// export default function Banner({ banner }: BannerProps) {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [cardsVisible, setCardsVisible] = useState(false)
//   const sectionRef = useRef<HTMLElement | null>(null)
//   const [inView, setInView] = useState(false)

//   useEffect(() => {
//     // simple intersection observer to know when banner is on screen
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0]
//         setInView(entry.isIntersecting)
//       },
//       { threshold: 0.2 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banner.length)
//     }, 5000)

//     return () => {
//       clearInterval(interval)
//       observer.disconnect()
//     }
//   }, [banner.length])

//   const title = banner[activeIndex]?.title ?? ""
//   const words = title.split(" ")
//   const firstLine = words.slice(0, 2).join(" ")
//   const secondLine = words.slice(2).join(" ")

//   const bookCards = [
//     { img: "/cover1.webp", rotation: "rotate-2" },
//     { img: "/cover2.webp", rotation: "-rotate-1" },
//     { img: "/cover3.webp", rotation: "-rotate-2" },
//     { img: "/cover4.webp", rotation: "rotate-1" },
//   ]

//   useEffect(() => {
//     if (inView) {
//       setCardsVisible(true)
//     }
//   }, [inView])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
//     >
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,162,18,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <div className="space-y-6">
//           <h1 className="font-extrabold text-5xl lg:text-7xl text-white leading-tight">
//             <span key={firstLine} className="block animate-fade-up">
//               {firstLine}
//             </span>
//             <span
//               key={secondLine}
//               className="block bg-gradient-to-r from-[#ECA212] to-[#D89010] bg-clip-text text-transparent animate-fade-up delay-100"
//             >
//               {secondLine}
//             </span>
//           </h1>

//           <p
//             key={banner[activeIndex]?.subtitle}
//             className="text-xl text-slate-300 max-w-xl animate-fade-up delay-200"
//           >
//             {banner[activeIndex]?.subtitle}
//           </p>

//           <button
//             key={banner[activeIndex]?.buttonText}
//             className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#ECA212] to-[#D89010] animate-fade-up delay-300 hover:scale-105 transition-transform"
//           >
//             {banner[activeIndex]?.buttonText}
//           </button>

//           <div className="flex gap-2 pt-4">
//             {banner.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`h-2 rounded-full transition-all ${
//                   index === activeIndex
//                     ? "w-8 bg-[#ECA212]"
//                     : "w-2 bg-slate-600 hover:bg-slate-500"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT CARDS */}
//         <div className="grid grid-cols-2 gap-6">
//           {bookCards.map((card, i) => (
//             <div
//               key={i}
//               className={`p-4 rounded-xl shadow-2xl bg-white transform ${card.rotation}
//                 ${
//                   cardsVisible
//                     ? "opacity-100 translate-y-0 scale-100"
//                     : "opacity-0 translate-y-20 scale-90"
//                 }
//                 transition-all duration-700 delay-${i * 20} ${
//                   inView ? "animate-float" : ""
//                 }`}
//             >
//               <Image
//                 src={card.img}
//                 alt="Book cover"
//                 width={300}
//                 height={400}
//                 sizes="(min-width: 1024px) 12rem, (min-width: 640px) 10rem, 8rem"
//                 className="rounded-lg object-cover"
//                 priority={i === 0}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx global>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-up {
//           animation: fadeUp 0.5s ease-out forwards;
//         }

//         .delay-100 { animation-delay: 0.1s }
//         .delay-200 { animation-delay: 0.2s }
//         .delay-300 { animation-delay: 0.3s }

//         @keyframes float {
//           0%, 100% { transform: translateY(0) }
//           50% { transform: translateY(-15px) }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   )
// }

// /* Demo data */
// Banner.defaultProps = {
//   banner: [
//     {
//       title: "Publish Your Story With Us",
//       subtitle: "Transform your manuscript into a masterpiece with our professional publishing services",
//       buttonText: "Get Started Today",
//     },
//     {
//       title: "Professional Book Design Services",
//       subtitle: "Beautiful covers and layouts that capture readers’ attention",
//       buttonText: "View Our Work",
//     },
//     {
//       title: "Marketing That Works",
//       subtitle: "Reach thousands of readers with proven promotion strategies",
//       buttonText: "Learn More",
//     },
//   ],
// }


"use client"

import { useEffect, useState, useRef } from "react"
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
  const sectionRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // simple intersection observer to know when banner is on screen
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setInView(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banner.length)
    }, 5000)

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
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

  useEffect(() => {
    if (inView) {
      setCardsVisible(true)
    }
  }, [inView])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-slate-900"
    >
      {/* --- NEW: Background Image Implementation --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner_bg.png"
          alt="Banner Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Dark overlay to ensure text remains readable on top of the image */}
        {/* Adjust 'bg-slate-900/80' opacity if you want the image to be clearer */}
        <div className="absolute inset-0 bg-transparent" />
      </div>

      {/* --- Existing Background Patterns (Kept for texture) --- */}
      

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
                ${
                  cardsVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-20 scale-90"
                } 
                transition-all duration-700 delay-${i * 20} ${
                inView ? "animate-float" : ""
              }`}
            >
              <Image
                src={card.img}
                alt="Book cover"
                width={300}
                height={400}
                sizes="(min-width: 1024px) 12rem, (min-width: 640px) 10rem, 8rem"
                className="rounded-lg object-cover"
                priority={i === 0}
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
      subtitle:
        "Transform your manuscript into a masterpiece with our professional publishing services",
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