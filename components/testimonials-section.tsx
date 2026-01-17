import type React from "react"
import { cn } from "@/lib/utils"
import { Star, Sparkles } from "lucide-react"

// --- CSS-Only Highlight Component ---
export function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-block font-bold", className)}>
      <span className="relative z-10 text-yellow-600">{children}</span>
      <span className="absolute bottom-0 left-0 h-2 w-full bg-yellow-400/40 rounded-full blur-sm animate-grow-x" />
    </span>
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

// --- CSS-Only TestimonialCard ---
export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl p-6",
        "bg-white/80 backdrop-blur-xl border border-amber-200/50",
        "shadow-lg shadow-amber-100/50 hover:shadow-2xl hover:shadow-yellow-400/40",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 origin-left">
          <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-400" />
        </div>
        <div className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
          {description}
        </div>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="size-10 md:size-12 rounded-full bg-slate-200 overflow-hidden ring-4 ring-yellow-300/30">
              <img 
                src={img || "/api/placeholder/48/48"} 
                alt={name} 
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/40 to-transparent blur-md scale-110 -z-10" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm md:text-base">{name}</p>
            <p className="text-[10px] md:text-xs text-amber-700 font-medium">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: "Sarah Anderson",
    role: "Fantasy Author",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    description: <p>Amazon Author Partners transformed my manuscript into a professional book. <Highlight>Their team was supportive and truly invested in my success.</Highlight></p>,
  },
  {
    name: "James Mitchell",
    role: "Science Fiction Writer",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    description: <p>The editing process was thorough. <Highlight>They helped me refine my story while preserving my voice.</Highlight></p>,
  },
  {
    name: "Emma Richardson",
    role: "Mystery Novelist",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    description: <p>My book is now available in bookstores worldwide. <Highlight>Dreams do come true with the right partner!</Highlight></p>,
  },
  {
    name: "Michael Chen",
    role: "Romance Author",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    description: <p>The cover design captures my story essence perfectly. <Highlight>The marketing support reached readers globally.</Highlight></p>,
  },
  {
    name: "Lisa Thompson",
    role: "Adventure Writer",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: <p>Game-changer for my career. <Highlight>Professional expertise brought my story to life.</Highlight></p>,
  },
  {
    name: "David Foster",
    role: "Self-Help Author",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
    description: <p>Realistic timeline and delivered on promises. <Highlight>Reached bestseller status in its category.</Highlight></p>,
  }
]

export default function TestimonialsSection() {
    const splitTestimonials = (arr: typeof testimonials, numColumns: number) => {
        const result: typeof testimonials[][] = Array.from({ length: numColumns }, () => []);
        arr.forEach((item, i) => { result[i % numColumns].push(item); });
        return result;
    };

    const marqueeColumns = splitTestimonials(testimonials, 3);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50">
      
      {/* CSS Animations (Global styles or injected here for server components) */}
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical var(--duration, 40s) linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes grow-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-grow-x {
          animation: grow-x 0.6s ease-out forwards 0.2s;
          transform-origin: left;
        }
        /* 3D Utilities */
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>

      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-br from-orange-300/30 to-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4">
        
        {/* 3D Book Stack Display (CSS Only) */}
        <div className="mb-12 md:mb-20 flex justify-center items-center">
          <div className="relative w-full max-w-6xl h-64 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-transparent to-transparent blur-2xl"></div>
            
            <div className="relative flex items-end justify-center gap-2 md:gap-6 perspective-1000 preserve-3d">
              {[8, 9, 10, 13, 12].map((num, index) => {
                const rotations = ["rotateY(-25deg)", "rotateY(-12deg)", "rotateY(0deg)", "rotateY(12deg)", "rotateY(25deg)"];
                const yOffsets = ["translateY(20px)", "translateY(10px)", "translateY(0px)", "translateY(10px)", "translateY(20px)"];
                const zIndexes = [10, 20, 50, 20, 10];
                
                return (
                  <div
                    key={num}
                    className="relative cursor-pointer group animate-fade-in-up"
                    style={{ 
                      zIndex: zIndexes[index], 
                      transform: `${rotations[index]} ${yOffsets[index]}`,
                      animationDelay: `${index * 0.1}s`,
                      transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    <div className="relative w-24 sm:w-32 md:w-56 h-36 sm:h-48 md:h-80 rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-6 group-hover:scale-105">
                      <div className="absolute inset-0 bg-slate-300">
                        <img 
                            src={`/cover${num}.webp`} 
                            alt={`Book ${num}`} 
                            className="w-full h-full object-cover" 
                            loading="lazy" 
                        />
                      </div>
                      {/* 3D Spine Effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-4 bg-gradient-to-r from-gray-800 to-gray-600 origin-left" style={{ transform: 'rotateY(-90deg) translateX(-100%)' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-4 px-2">
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Success Stories from Our Authors
            </span>
          </h2>
          <p className="text-sm md:text-lg text-amber-700 max-w-3xl mx-auto font-medium px-4">
            Don’t just take our word for it. Here’s what{" "}
            <span className="font-bold text-yellow-600">published authors</span> are saying.
          </p>
        </div>

        {/* CSS-Only Vertical Marquee Grid */}
        <div className="relative mt-5 md:mt-10 h-[500px] md:h-screen overflow-hidden">
          <div className="flex justify-center gap-4 md:gap-6 h-full">
            {marqueeColumns.map((column, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-full md:w-1/2 xl:w-1/3 relative overflow-hidden",
                  i === 1 && "hidden md:block", 
                  i === 2 && "hidden xl:block"
                )}
              >
                {/* Marquee Track - Contains Duplicated Content for Seamless Scroll */}
                <div 
                    className="animate-scroll-vertical flex flex-col gap-6"
                    style={{ '--duration': i === 1 ? '35s' : i === 2 ? '55s' : '45s' } as React.CSSProperties}
                >
                  {[...column, ...column].map((card, idx) => (
                    <div key={`${i}-${idx}`} className="break-inside-avoid">
                      <TestimonialCard {...card} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-amber-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-amber-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}