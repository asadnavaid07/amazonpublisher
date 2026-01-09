// "use client"

// import type React from "react"
// // Assuming a utility function for conditional class names
// import { cn } from "@/lib/utils" 
// import { motion } from "framer-motion"
// import { Star, Sparkles } from "lucide-react"
// // Assuming Marquee is an optimized component for infinite scroll
// import { Marquee } from "@/components/ui/marquee" 

// // --- Optimized Component: Highlight ---

// // Simplified motion for better performance on highlight/underline
// export function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
//   return (
//     <span
//       className={cn("relative inline-block font-bold", className)}
//     >
//       <span className="relative z-10 text-yellow-600">{children}</span>
//       <motion.span
//         // Reduced motion complexity for underline from whileHover + whileInView
//         className="absolute bottom-0 left-0 h-2 w-full bg-yellow-400/40 rounded-full blur-sm"
//         initial={{ scaleX: 0, originX: 0 }} // Added originX for clean animation
//         whileInView={{ scaleX: 1 }}
//         // Slightly reduced duration
//         transition={{ duration: 0.6, delay: 0.2 }}
//         viewport={{ once: true }} // Only animate once
//       />
//     </span>
//   )
// }

// // --- Component Interface ---

// export interface TestimonialCardProps {
//   name: string
//   role: string
//   img?: string
//   description: React.ReactNode
//   className?: string
//   [key: string]: any
// }

// // --- Optimized Component: TestimonialCard ---

// export function TestimonialCard({
//   description,
//   name,
//   img,
//   role,
//   className,
//   ...props
// }: TestimonialCardProps) {
//   return (
//     <motion.div
//       // Kept whileHover for smooth interactive feel
//       whileHover={{ y: -6, scale: 1.02 }} 
//       transition={{ type: "spring", stiffness: 280, damping: 25 }} // Slight spring adjustment
//       className={cn(
//         "group relative w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl p-6",
//         "bg-white/80 backdrop-blur-xl border border-amber-200/50",
//         "shadow-lg shadow-amber-100/50",
//         "hover:shadow-2xl hover:shadow-yellow-400/40",
//         "transition-all duration-300",
//         className
//       )}
//       {...props}
//     >
//       {/* Glow border - kept, as it's a CSS transition */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
//       <div className="relative z-10">
//         {/* Quote Icon - Kept motion but added viewport: once */}
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           whileInView={{ scale: 1, rotate: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="mb-4"
//         >
//           <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-400" />
//         </motion.div>

//         {/* Description */}
//         <div className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
//           {description}
//         </div>

//         {/* Stars - Replaced motion.div for each star with a single motion wrapper */}
//         <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             viewport={{ once: true }}
//             className="flex gap-1 mb-4"
//         >
//           {[...Array(5)].map((_, i) => (
//             // Switched to regular div for performance, relying on parent motion
//             <div key={i}> 
//               <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
//             </div>
//           ))}
//         </motion.div>

//         {/* Author */}
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             {/* Image optimization: Added loading="lazy" and simple sizing for best standard HTML performance
//             <img
//               width={48}
//               height={48}
//               src={img || ""}
//               alt={name}
//               className="size-12 rounded-full ring-4 ring-yellow-300/30 object-cover shadow-md"
//               loading="lazy" // Added native lazy loading
//               // Removed the complex onError logic for better performance, as it manipulates DOM
//               // and can cause layout shifts. Assume images are correctly path-ed or
//               // use a server-side placeholder strategy.
//             /> */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/40 to-transparent blur-md scale-110 -z-10" />
//           </div>
//           <div>
//             <p className="font-bold text-gray-900">{name}</p>
//             <p className="text-xs text-amber-700 font-medium">{role}</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// // --- Data (Unchanged) ---
// const testimonials = [
//   {
//     name: "Sarah Anderson",
//     role: "Fantasy Author",
//     img: "/professional-woman-author.jpg",
//     description: (
//       <p>
//         Amazon Author Partners transformed my manuscript into a professional book I'm proud to share.
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
//         From concept to publication, Amazon Author Partners handled everything with professionalism.
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
//         Working with Amazon Author Partners was a complete game-changer for my career.
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
//         Amazon Author Partners understood the unique challenges of poetry publishing.
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
//         Amazon Author Partners helped me establish credibility in my industry through publishing.
//         <Highlight>My book opened doors to speaking engagements and consulting opportunities.</Highlight> Best
//         investment I've made in my career.
//       </p>
//     ),
//   },
// ]

// // --- Optimized Component: TestimonialsSection ---

// export default function TestimonialsSection() {
//     const splitTestimonials = (arr: typeof testimonials, numColumns: number) => {
//         const result: typeof testimonials[][] = Array.from({ length: numColumns }, () => []);
//         arr.forEach((item, i) => {
//             result[i % numColumns].push(item);
//         });
//         return result;
//     };

//     // Split the data into 3 columns for the Marquee effect
//     const marqueeColumns = splitTestimonials(testimonials, 3);

//   return (
//     <section className="relative py-16 overflow-hidden bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50">
//       {/* Floating Golden Orbs - Kept, as they are simple CSS animations */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-300/30 to-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-200/10 rounded-full blur-3xl" />

//       <div className="relative z-10 container mx-auto px-4">
        
//         {/* 3D Book Stack Display - Kept, but simplified some of the complex inline styles for transform */}
//         <div className="mb-20 flex justify-center items-center">
//           <div className="relative w-full max-w-6xl h-80 flex items-center justify-center">
//             {/* Central spotlight effect - Kept as CSS is fast */}
//             <div className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-transparent to-transparent blur-2xl"></div>
            
//             {/* Book stack with 3D perspective */}
//             <div className="relative flex items-end justify-center gap-6" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
//               {[8, 9, 10, 13, 12].map((num, index) => {
//                 const rotations = [-25, -12, 0, 12, 25];
//                 const scales = [0.85, 0.92, 1, 0.92, 0.85];
//                 const zIndexes = [1, 2, 5, 2, 1];
//                 const yOffsets = [30, 15, 0, 15, 30];
                
//                 return (
//                   <motion.div
//                     key={num}
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ 
//                       opacity: 1, 
//                       y: yOffsets[index], 
//                       rotateY: rotations[index], 
//                       scale: scales[index] // Applied scale here instead of inline style
//                     }}
//                     transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
//                     whileHover={{ 
//                       y: yOffsets[index] - 20, // Slightly less aggressive lift
//                       rotateY: 0,
//                       scale: 1.05, // Slightly less aggressive scale
//                       zIndex: 10,
//                       transition: { duration: 0.3 }
//                     }}
//                     viewport={{ once: true }}
//                     className="relative cursor-pointer group"
//                     // Inline style now only for zIndex and transformStyle
//                     style={{ zIndex: zIndexes[index], transformStyle: 'preserve-3d' }}
//                   >
//                     {/* Book container with 3D effect */}
//                     <div className="relative w-56 h-80 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300">
//                       {/* Main book cover */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
//                         {/* Use native lazy loading and simpler img tag */}
//                         <img
//                           src={`/cover${num}.webp`}
//                           alt={`Featured Book ${num}`}
//                           className="w-full h-full object-cover"
//                           width={224} // Explicit width/height for layout shift prevention
//                           height={320}
//                           loading="lazy"
//                         />
//                         {/* Placeholder logic moved to a simple CSS-based fallback class for better performance
//                             Instead of complex onError DOM manipulation. Assuming /cover{num}.jpg exists or is handled.
//                             The user would need to implement this CSS fallback for the best result. 
//                         */}
//                       </div>
                      
//                       {/* Book spine (3D effect) */}
//                       <div 
//                         className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-800 to-gray-600"
//                         // Simplified transform logic
//                         style={{ 
//                           transform: 'rotateY(-90deg) translateX(-2rem)',
//                           transformOrigin: 'left'
//                         }}
//                       />
                      
//                       {/* Shine effect - Kept, as it's a key visual feature */}
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"
//                         animate={{ x: [-100, 200] }}
//                         transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, delay: index * 0.2 }}
//                       />
                      
//                       {/* Golden glow on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/30 group-hover:via-yellow-400/10 transition-all duration-300"></div>
//                     </div>
                    
//                     {/* Shadow & Glows - Kept as CSS/Tailwind is performant */}
//                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-44 h-4 bg-black/20 rounded-full blur-lg group-hover:w-48 group-hover:bg-black/30 transition-all duration-300"></div>
//                     <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="absolute inset-0 bg-yellow-400/30 rounded-lg blur-xl scale-110"></div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
        
//         {/* Header - Added viewport: once */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
//             <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
//               Success Stories from Our Authors
//             </span>
//           </h2>
//           <p className="text-lg text-amber-700 max-w-3xl mx-auto font-medium">
//             Don’t just take our word for it. Here’s what{" "}
//             <span className="font-bold text-yellow-600">published authors</span> are saying about{" "}
//             <span className="font-bold text-orange-600">Amazon Author Partners</span>
//           </p>
//         </motion.div>

//         {/* Marquee Grid - Optimized Data Structure */}
//         <div className="relative mt-10 max-h-screen overflow-hidden">
//             {/* Switched from CSS columns to a flex/grid setup for more predictable Marquee behavior
//                 Assuming Marquee needs to be wrapped around a single list of items per column */}
//           <div className="flex justify-center gap-6">
//             {marqueeColumns.map((column, i) => (
//               <div 
//                 key={i} 
//                 className="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4" // Tailwind column widths
//               >
//                 <Marquee
//                   vertical
//                   className={cn(
//                     "[--duration:60s]",
//                     i === 1 && "[--duration:45s]",
//                     i === 2 && "[--duration:75s]"
//                   )}
//                 >
//                   {/* IMPORTANT: Only render the actual items. The Marquee component 
//                      should be responsible for duplicating the list for the infinite effect.
//                      If your Marquee component requires manual concatenation, keep the original 
//                      logic, but this version reduces the initial DOM size by half. 
//                   */}
//                   {column.map((card, idx) => (
//                     <motion.div
//                       key={`${i}-${idx}`}
//                       initial={{ opacity: 0, y: 50 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: idx * 0.1, duration: 0.6 }} // Slightly faster transition
//                       className="mb-6" // Add margin here for column spacing
//                     >
//                       <TestimonialCard {...card} />
//                     </motion.div>
//                   ))}
//                 </Marquee>
//               </div>
//             ))}
//           </div>

//           {/* Fade Edges */}
//           <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-amber-50 to-transparent" />
//           <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-50 to-transparent" />
//         </div>
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

// --- Optimized Component: Highlight ---
export function Highlight({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-block font-bold", className)}>
      <span className="relative z-10 text-yellow-600">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-2 w-full bg-yellow-400/40 rounded-full blur-sm"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />
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

// --- Optimized Component: TestimonialCard ---
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
      whileHover={{ y: -6, scale: 1.02 }} 
      transition={{ type: "spring", stiffness: 280, damping: 25 }}
      className={cn(
        "group relative w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl p-6",
        "bg-white/80 backdrop-blur-xl border border-amber-200/50",
        "shadow-lg shadow-amber-100/50 hover:shadow-2xl hover:shadow-yellow-400/40",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-300/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-400" />
        </motion.div>
        <div className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
          {description}
        </div>
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-1 mb-4"
        >
          {[...Array(5)].map((_, i) => (
            <div key={i}> 
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
            </div>
          ))}
        </motion.div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="size-10 md:size-12 rounded-full bg-slate-200 overflow-hidden ring-4 ring-yellow-300/30">
                <img src={img || "/api/placeholder/48/48"} alt={name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/40 to-transparent blur-md scale-110 -z-10" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm md:text-base">{name}</p>
            <p className="text-[10px] md:text-xs text-amber-700 font-medium">{role}</p>
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
      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-yellow-300/30 to-amber-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-br from-orange-300/30 to-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4">
        
        {/* 3D Book Stack Display */}
        <div className="mb-12 md:mb-20 flex justify-center items-center">
          <div className="relative w-full max-w-6xl h-64 md:h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-transparent to-transparent blur-2xl"></div>
            
            <div className="relative flex items-end justify-center gap-2 md:gap-6" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
              {[8, 9, 10, 13, 12].map((num, index) => {
                const rotations = [-25, -12, 0, 12, 25];
                const mobileScales = [0.6, 0.75, 0.9, 0.75, 0.6];
                const desktopScales = [0.85, 0.92, 1, 0.92, 0.85];
                const zIndexes = [1, 2, 5, 2, 1];
                const yOffsets = [20, 10, 0, 10, 20];
                
                return (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: yOffsets[index], 
                      rotateY: rotations[index],
                    }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ 
                      y: yOffsets[index] - 20,
                      rotateY: 0,
                      scale: 1.05,
                      zIndex: 10,
                    }}
                    viewport={{ once: true }}
                    className="relative cursor-pointer group"
                    style={{ zIndex: zIndexes[index], transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative w-24 sm:w-32 md:w-56 h-36 sm:h-48 md:h-80 rounded-lg overflow-hidden shadow-2xl transition-all duration-300">
                      <div className="absolute inset-0 bg-slate-300">
                        <img src={`/cover${num}.webp`} alt={`Book ${num}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-4 bg-gradient-to-r from-gray-800 to-gray-600" style={{ transform: 'rotateY(-90deg) translateX(-100%)', transformOrigin: 'left' }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-extrabold mb-4 px-2">
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Success Stories from Our Authors
            </span>
          </h2>
          <p className="text-sm md:text-lg text-amber-700 max-w-3xl mx-auto font-medium px-4">
            Don’t just take our word for it. Here’s what{" "}
            <span className="font-bold text-yellow-600">published authors</span> are saying.
          </p>
        </motion.div>

        {/* Marquee Grid */}
        <div className="relative mt-5 md:mt-10 h-[500px] md:h-screen overflow-hidden">
          <div className="flex justify-center gap-4 md:gap-6">
            {marqueeColumns.map((column, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-full md:w-1/2 xl:w-1/3",
                  i === 1 && "hidden md:block", // Hide second column on mobile
                  i === 2 && "hidden xl:block"  // Hide third column on mobile/tablet
                )}
              >
                <Marquee
                  vertical
                  className={cn(
                    "[--duration:40s] md:[--duration:60s]",
                    i === 1 && "[--duration:30s] md:[--duration:45s]",
                    i === 2 && "[--duration:50s] md:[--duration:75s]"
                  )}
                >
                  {column.map((card, idx) => (
                    <motion.div
                      key={`${i}-${idx}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="mb-4 md:mb-6"
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
                </Marquee>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-amber-50 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-amber-50 to-transparent" />
        </div>
      </div>
    </section>
  )
}