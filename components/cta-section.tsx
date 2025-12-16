
// "use client"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"

// export default function CTASection() {
//   return (
//     <section
//       id="contact"
//       className="relative py-28 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
//     >
//       {/* ==== GLOWING GOLDEN BACKGROUND ==== */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.2),transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.15),transparent_60%)]" />
        
//         {/* Floating Orbs */}
//         <motion.div
//           animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-yellow-300/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//           className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-amber-300/20 rounded-full blur-3xl"
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.96 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//       >
//         {/* ==== HEADLINE ==== */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
//         >
//           <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md">
//             Want your story featured here?
//           </span>
//           <br />
//           <span className="text-gray-800">Let’s make it happen.</span>
//         </motion.h2>

//         {/* ==== SUBTEXT ==== */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
//         >
//           From first draft to global publication — we turn your ideas into{" "}
//           <span className="font-bold text-amber-600">beautifully published books</span> that captivate readers everywhere.
//         </motion.p>

//         {/* ==== CTA BUTTON ==== */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="flex justify-center"
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="relative group"
//           >
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-7 text-xl font-bold rounded-full shadow-xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-3"
//             >
//               Start My Project
//               <motion.div
//                 animate={{ x: [0, 4, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               >
//                 <ArrowRight className="w-6 h-6" />
//               </motion.div>
//             </Button>

//             {/* Pulse Ring */}
//             <motion.div
//               className="absolute inset-0 rounded-full bg-amber-400/40 blur-xl"
//               animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//           </motion.div>
//         </motion.div>

//         {/* ==== DECORATIVE LINE ==== */}
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "100px" }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//           className="mx-auto mt-12 h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-lg shadow-amber-400/50"
//         />
//       </motion.div>
//     </section>
//   )
// }




"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CTASection() {
 return (
  <section
   id="contact"
   className="relative py-20 pb-40 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
  >
   {/* ==== GLOWING GOLDEN BACKGROUND (Original with improved motion) ==== */}
   <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.2),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.15),transparent_60%)]" />
    
    {/* Floating Orbs: Reverting to original framer-motion approach, but with slightly longer durations */}
    <motion.div
     animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
     transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} // Increased duration
     className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-yellow-300/20 rounded-full blur-3xl"
    />
    <motion.div
     animate={{ y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} // Increased duration
     className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-amber-300/20 rounded-full blur-3xl"
    />
   </div>

   <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
   >
    {/* ==== HEADLINE (Unchanged, already optimized) ==== */}
    <motion.h2
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.7, delay: 0.1 }}
     className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
    >
     <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md">
      Want your story featured here?
     </span>
     <br />
     <span className="text-gray-800">Let’s make it happen.</span>
    </motion.h2>

    {/* ==== SUBTEXT (Unchanged, already optimized) ==== */}
    <motion.p
     initial={{ opacity: 0, y: 15 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.7, delay: 0.2 }}
     className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
    >
     From first draft to global publication — we turn your ideas into{" "}
     <span className="font-bold text-amber-600">beautifully published books</span> that captivate readers everywhere.
    </motion.p>

    {/* ==== CTA BUTTON (Reverting to original infinite motion for visual fidelity) ==== */}
    <motion.div
     initial={{ opacity: 0, y: 10 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.7, delay: 0.3 }}
     className="flex justify-center"
    >
     <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
     >
      <Button
       size="lg"
       className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-7 text-xl font-bold rounded-full shadow-xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-3"
      >
       Start My Project
       <motion.div
        animate={{ x: [0, 4, 0] }} // Restored infinite arrow motion
        transition={{ duration: 1.5, repeat: Infinity }}
       >
        <ArrowRight className="w-6 h-6" />
       </motion.div>
      </Button>

      {/* Pulse Ring: Restored infinite pulse motion */}
      <motion.div
       className="absolute inset-0 rounded-full bg-amber-400/40 blur-xl"
       animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
       transition={{ duration: 2, repeat: Infinity }}
      />
     </motion.div>
    </motion.div>

    {/* ==== DECORATIVE LINE (Unchanged, already optimized) ==== */}
    <motion.div
     initial={{ width: 0 }}
     whileInView={{ width: "100px" }}
     viewport={{ once: true }}
     transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
     className="mx-auto mt-12 h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-lg shadow-amber-400/50"
    />
   </motion.div>
  </section>
 )
}