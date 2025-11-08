// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"

// export default function CTASection() {
//   return (
//     <section id="contact" className="py-20 bg-background">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.98 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance"
//         >
//           Ready to Publish Your Book?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
//         >
//           Join hundreds of successful authors who have transformed their manuscripts into published books with Elite
//           Publishing. Your story is waiting to be shared with the world.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
//             Get Started Today
//             <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
//           >
//             Schedule a Consultation
//           </Button>
//         </motion.div>
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
      className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background"
    >
      {/* Soft glowing background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,primary,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight text-balance"
        >
          Want your story featured here?{" "}
          <span className="text-primary">Let’s make it happen.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
        >
          From first draft to global publication — we turn your ideas into beautifully published
          books that captivate readers everywhere.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Start My Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Decorative line below button */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 h-1 bg-primary rounded-full"
        />
      </motion.div>
    </section>
  )
}
