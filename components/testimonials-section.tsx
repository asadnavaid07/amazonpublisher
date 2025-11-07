"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <span className={cn("bg-yellow-500/10 p-1 py-0.5 font-bold text-yellow-500", className)}>{children}</span>
}

export interface TestimonialCardProps {
  name: string
  role: string
  img?: string
  description: React.ReactNode
  className?: string
  [key: string]: any
}

export function TestimonialCard({ description, name, img, role, className, ...props }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-1 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        "border-border bg-card/50 border shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
      {...props}
    >
      <div className="text-muted-foreground text-sm font-normal select-none">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <img
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-yellow-500/20 ring-offset-2"
        />

        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
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
    <section className="relative container py-10">
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-yellow-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-yellow-500/5 blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-foreground mb-4 text-center text-4xl leading-[1.2] font-bold tracking-tighter md:text-5xl">
          Success Stories from Our Authors
        </h2>
        <h3 className="text-muted-foreground mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-balance">
          Don&apos;t just take our word for it. Here&apos;s what{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            published authors
          </span>{" "}
          are saying about <span className="font-semibold text-yellow-500">Amazon Publisher</span>
        </h3>
      </motion.div>

      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {[...testimonials.slice(i * 3, (i + 1) * 3), ...testimonials.slice(i * 3, (i + 1) * 3)].map((card, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      delay: Math.random() * 0.8,
      duration: 1.2,
    }}
  >
    <TestimonialCard {...card} />
  </motion.div>
))}

              </Marquee>
            ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
      </div>
    </section>
  )
}
