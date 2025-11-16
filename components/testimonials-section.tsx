// "use client"

// import type React from "react"

// import { cn } from "@/lib/utils"
// import { motion } from "framer-motion"
// import { Star } from "lucide-react"
// import { Marquee } from "@/components/ui/marquee"

// export function Highlight({
//   children,
//   className,
// }: {
//   children: React.ReactNode
//   className?: string
// }) {
//   return <span className={cn("bg-yellow-500/10 p-1 py-0.5 font-bold text-yellow-500", className)}>{children}</span>
// }

// export interface TestimonialCardProps {
//   name: string
//   role: string
//   img?: string
//   description: React.ReactNode
//   className?: string
//   [key: string]: any
// }

// export function TestimonialCard({ description, name, img, role, className, ...props }: TestimonialCardProps) {
//   return (
//     <div
//       className={cn(
//         "mb-1 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
//         "border-border bg-card/50 border shadow-sm",
//         "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
//         className,
//       )}
//       {...props}
//     >
//       <div className="text-muted-foreground text-sm font-normal select-none">
//         {description}
//         <div className="flex flex-row py-1">
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//         </div>
//       </div>

//       <div className="flex w-full items-center justify-start gap-5 select-none">
//         <img
//           width={40}
//           height={40}
//           src={img || ""}
//           alt={name}
//           className="size-10 rounded-full ring-1 ring-yellow-500/20 ring-offset-2"
//         />

//         <div>
//           <p className="text-foreground font-medium">{name}</p>
//           <p className="text-muted-foreground text-xs font-normal">{role}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// const testimonials = [
//   {
//     name: "Sarah Anderson",
//     role: "Fantasy Author",
//     img: "/professional-woman-author.jpg",
//     description: (
//       <p>
//         Amazon Publisher transformed my manuscript into a professional book I'm proud to share.
//         <Highlight>Their team was supportive, responsive, and truly invested in my success.</Highlight> The entire
//         process was seamless and professional.
//       </p>
//     ),
//   },
//   {
//     name: "James Mitchell",
//     role: "Science Fiction Writer",
//     img: "/professional-man-author.jpg",
//     description: (
//       <p>
//         The editing process was thorough and collaborative.
//         <Highlight>They helped me refine my story while preserving my unique voice.</Highlight> Highly recommended for
//         any serious author looking to publish.
//       </p>
//     ),
//   },
//   {
//     name: "Emma Richardson",
//     role: "Mystery Novelist",
//     img: "/professional-woman-smiling.jpg",
//     description: (
//       <p>
//         From concept to publication, Amazon Publisher handled everything with professionalism.
//         <Highlight>My book is now available in bookstores worldwide.</Highlight> Dreams do come true with the right
//         publishing partner!
//       </p>
//     ),
//   },
//   {
//     name: "Michael Chen",
//     role: "Romance Author",
//     img: "/professional-man-confident.jpg",
//     description: (
//       <p>
//         The design team created a cover that perfectly captures my story's essence.
//         <Highlight>The marketing support helped me reach readers I never thought possible.</Highlight> My book sales
//         exceeded all expectations.
//       </p>
//     ),
//   },
//   {
//     name: "Lisa Thompson",
//     role: "Adventure Writer",
//     img: "/professional-woman-author-2.jpg",
//     description: (
//       <p>
//         Working with Amazon Publisher was a complete game-changer for my career.
//         <Highlight>
//           They believed in my story and provided the expertise needed to bring it to life professionally.
//         </Highlight>{" "}
//         I couldn't have done it without them.
//       </p>
//     ),
//   },
//   {
//     name: "David Foster",
//     role: "Self-Help Author",
//     img: "https://randomuser.me/api/portraits/men/22.jpg",
//     description: (
//       <p>
//         The publishing timeline was realistic and they delivered on every promise.
//         <Highlight>My book launched successfully and reached bestseller status in its category.</Highlight> Exceptional
//         service from start to finish.
//       </p>
//     ),
//   },
//   {
//     name: "Rachel Green",
//     role: "Poetry Author",
//     img: "https://randomuser.me/api/portraits/women/33.jpg",
//     description: (
//       <p>
//         Amazon Publisher understood the unique challenges of poetry publishing.
//         <Highlight>They created a beautiful physical product that does justice to my work.</Highlight> My readers love
//         the quality and presentation.
//       </p>
//     ),
//   },
//   {
//     name: "Thomas Wright",
//     role: "Historical Fiction Writer",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//     description: (
//       <p>
//         The research and fact-checking support was invaluable for my historical novel.
//         <Highlight>They ensured accuracy while maintaining the narrative flow.</Highlight> My book received critical
//         acclaim for its authenticity.
//       </p>
//     ),
//   },
//   {
//     name: "Victoria Lopez",
//     role: "Children's Book Author",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//     description: (
//       <p>
//         The illustration coordination and design process was smooth and collaborative.
//         <Highlight>My children's book became a hit with both kids and parents.</Highlight> Schools are now using it in
//         their libraries!
//       </p>
//     ),
//   },
//   {
//     name: "Christopher Lee",
//     role: "Business Author",
//     img: "https://randomuser.me/api/portraits/men/55.jpg",
//     description: (
//       <p>
//         Amazon Publisher helped me establish credibility in my industry through publishing.
//         <Highlight>My book opened doors to speaking engagements and consulting opportunities.</Highlight> Best
//         investment I've made in my career.
//       </p>
//     ),
//   },
// ]

// export default function TestimonialsSection() {
//   return (
//     <section className="relative container py-10">
//       <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-yellow-500/5 blur-3xl" />
//       <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-yellow-500/5 blur-3xl" />

//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//         <h2 className="text-foreground mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
//           Success Stories from Our Authors
//         </h2>
//         <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-balance">
//           Don&apos;t just take our word for it. Here&apos;s what{" "}
//           <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
//             published authors
//           </span>{" "}
//           are saying about <span className="font-semibold text-yellow-500">Amazon Publisher</span>
//         </h3>
//       </motion.div>

//       <div className="relative mt-6 max-h-screen overflow-hidden">
//         <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
//           {Array(Math.ceil(testimonials.length / 3))
//             .fill(0)
//             .map((_, i) => (
//               <Marquee
//                 vertical
//                 key={i}
//                 className={cn({
//                   "[--duration:60s]": i === 1,
//                   "[--duration:30s]": i === 2,
//                   "[--duration:70s]": i === 3,
//                 })}
//               >
//                 {[...testimonials.slice(i * 3, (i + 1) * 3), ...testimonials.slice(i * 3, (i + 1) * 3)].map((card, idx) => (
//   <motion.div
//     key={idx}
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     viewport={{ once: true }}
//     transition={{
//       delay: Math.random() * 0.8,
//       duration: 1.2,
//     }}
//   >
//     <TestimonialCard {...card} />
//   </motion.div>
// ))}

//               </Marquee>
//             ))}
//         </div>
//         <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
//         <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
//       </div>
//     </section>
//   )
// }



"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Star, Sparkles } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"

export function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={cn("relative inline-block font-bold", className)}
      whileHover={{ scale: 1.05 }}
    >
      <span className="relative z-10 text-yellow-600">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-2 w-full bg-yellow-400/40 rounded-full blur-sm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.span>
  )
}

export interface TestimonialCardProps {
  name: string
  role: string
  img?: string
  description: React.ReactNode
  className?: string
  [key: string]: any
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "group relative w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl p-6",
        "bg-white/80 backdrop-blur-xl border border-amber-200/50",
        "shadow-lg shadow-amber-100/50",
        "hover:shadow-2xl hover:shadow-yellow-400/40",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Glow border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-400" />
        </motion.div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
          {description}
        </p>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.4 }}
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              width={48}
              height={48}
              src={img || ""}
              alt={name}
              className="size-12 rounded-full ring-4 ring-yellow-300/30 object-cover shadow-md"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/40 to-transparent blur-md scale-110 -z-10" />
          </div>
          <div>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-xs text-amber-700 font-medium">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const testimonials = [
  {
    name: "Sarah Anderson",
    role: "Fantasy Author",
    img: "/professional-woman-author.jpg",
    description: (
      <p>
        Amazon Publisher transformed my manuscript into a professional book I'm proud to share.
        <Highlight>Their team was supportive, responsive, and truly invested in my success.</Highlight> The entire
        process was seamless and professional.
      </p>
    ),
  },
  {
    name: "James Mitchell",
    role: "Science Fiction Writer",
    img: "/professional-man-author.jpg",
    description: (
      <p>
        The editing process was thorough and collaborative.
        <Highlight>They helped me refine my story while preserving my unique voice.</Highlight> Highly recommended for
        any serious author looking to publish.
      </p>
    ),
  },
  {
    name: "Emma Richardson",
    role: "Mystery Novelist",
    img: "/professional-woman-smiling.jpg",
    description: (
      <p>
        From concept to publication, Amazon Publisher handled everything with professionalism.
        <Highlight>My book is now available in bookstores worldwide.</Highlight> Dreams do come true with the right
        publishing partner!
      </p>
    ),
  },
  {
    name: "Michael Chen",
    role: "Romance Author",
    img: "/professional-man-confident.jpg",
    description: (
      <p>
        The design team created a cover that perfectly captures my story's essence.
        <Highlight>The marketing support helped me reach readers I never thought possible.</Highlight> My book sales
        exceeded all expectations.
      </p>
    ),
  },
  {
    name: "Lisa Thompson",
    role: "Adventure Writer",
    img: "/professional-woman-author-2.jpg",
    description: (
      <p>
        Working with Amazon Publisher was a complete game-changer for my career.
        <Highlight>
          They believed in my story and provided the expertise needed to bring it to life professionally.
        </Highlight>{" "}
        I couldn't have done it without them.
      </p>
    ),
  },
  {
    name: "David Foster",
    role: "Self-Help Author",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    description: (
      <p>
        The publishing timeline was realistic and they delivered on every promise.
        <Highlight>My book launched successfully and reached bestseller status in its category.</Highlight> Exceptional
        service from start to finish.
      </p>
    ),
  },
  {
    name: "Rachel Green",
    role: "Poetry Author",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        Amazon Publisher understood the unique challenges of poetry publishing.
        <Highlight>They created a beautiful physical product that does justice to my work.</Highlight> My readers love
        the quality and presentation.
      </p>
    ),
  },
  {
    name: "Thomas Wright",
    role: "Historical Fiction Writer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        The research and fact-checking support was invaluable for my historical novel.
        <Highlight>They ensured accuracy while maintaining the narrative flow.</Highlight> My book received critical
        acclaim for its authenticity.
      </p>
    ),
  },
  {
    name: "Victoria Lopez",
    role: "Children's Book Author",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        The illustration coordination and design process was smooth and collaborative.
        <Highlight>My children's book became a hit with both kids and parents.</Highlight> Schools are now using it in
        their libraries!
      </p>
    ),
  },
  {
    name: "Christopher Lee",
    role: "Business Author",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    description: (
      <p>
        Amazon Publisher helped me establish credibility in my industry through publishing.
        <Highlight>My book opened doors to speaking engagements and consulting opportunities.</Highlight> Best
        investment I've made in my career.
      </p>
    ),
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50">
      {/* Floating Golden Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-300/30 to-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-200/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Success Stories from Our Authors
            </span>
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto font-medium">
            Don’t just take our word for it. Here’s what{" "}
            <span className="font-bold text-yellow-600">published authors</span> are saying about{" "}
            <span className="font-bold text-orange-600">Amazon Publisher</span>
          </p>
        </motion.div>

        {/* Marquee Grid */}
        <div className="relative mt-10 max-h-screen overflow-hidden">
          <div className="gap-6 md:columns-2 xl:columns-3 2xl:columns-4">
            {Array(Math.ceil(testimonials.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn(
                    "[--duration:60s]",
                    i === 1 && "[--duration:45s]",
                    i === 2 && "[--duration:75s]"
                  )}
                >
                  {testimonials
                    .slice(i * 3, (i + 1) * 3)
                    .concat(testimonials.slice(i * 3, (i + 1) * 3))
                    .map((card, idx) => (
                      <motion.div
                        key={`${i}-${idx}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, duration: 0.8 }}
                      >
                        <TestimonialCard {...card} />
                      </motion.div>
                    ))}
                </Marquee>
              ))}
          </div>

          {/* Fade Edges */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-50 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-50 to-transparent" />
        </div>
      </div>
    </section>
  )
}