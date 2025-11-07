// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { CheckCircle2 } from "lucide-react"

// const steps = [
//   {
//     number: 1,
//     title: "Manuscript Submission",
//     description: "Submit your completed manuscript for initial review and assessment by our editorial team.",
//     details: "We evaluate your work for market potential, genre fit, and publishing readiness.",
//   },
//   {
//     number: 2,
//     title: "Editorial Review",
//     description: "Receive comprehensive feedback and work with our editors on developmental edits.",
//     details: "Our team provides detailed notes on structure, pacing, character development, and overall narrative.",
//   },
//   {
//     number: 3,
//     title: "Professional Editing",
//     description: "Undergo line editing and copy editing to perfect grammar, style, and consistency.",
//     details: "We ensure your manuscript meets professional publishing standards with meticulous attention to detail.",
//   },
//   {
//     number: 4,
//     title: "Design & Layout",
//     description: "Create stunning cover design and professional interior layout for your book.",
//     details: "Our designers craft a visually compelling cover and format your interior for print and digital.",
//   },
//   {
//     number: 5,
//     title: "Final Review",
//     description: "Approve proofs and make final adjustments before moving to production.",
//     details: "You have the opportunity to review everything and request any final changes.",
//   },
//   {
//     number: 6,
//     title: "Publication & Distribution",
//     description: "Your book goes live and is distributed to retailers worldwide.",
//     details: "We handle all distribution logistics and ensure your book reaches major online and physical retailers.",
//   },
// ]

// export default function ProcessTimeline() {
//   const [expandedStep, setExpandedStep] = useState<number | null>(null)

//   return (
//     <section id="process" className="py-20 bg-background">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Your Publishing Journey</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
//             From manuscript to published book, we guide you through every step of the process with expertise and care.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30 hidden sm:block" />

//           {/* Timeline Steps */}
//           <div className="space-y-8">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.number}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5, delay: index * 0.06 }}
//                 className="relative"
//               >
//                 {/* Timeline Dot */}
//                 <div className="absolute left-0 top-2 sm:left-0 sm:top-6">
//                   <div className="relative">
//                     <div className="w-16 h-16 sm:w-16 sm:h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
//                       <CheckCircle2 className="w-8 h-8 text-primary" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="ml-24 sm:ml-32">
//                   <Card
//                     onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
//                     className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer p-6 group"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-2">
//                           <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
//                             Step {step.number}
//                           </span>
//                         </div>
//                         <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
//                           {step.title}
//                         </h3>
//                         <p className="text-muted-foreground">{step.description}</p>

//                         {/* Expanded Details */}
//                         {expandedStep === step.number && (
//                           <div className="mt-4 pt-4 border-t border-border">
//                             <p className="text-sm text-muted-foreground leading-relaxed">{step.details}</p>
//                           </div>
//                         )}
//                       </div>

//                       {/* Expand Icon */}
//                       <div className="ml-4 flex-shrink-0">
//                         <div
//                           className={`transition-transform duration-300 ${
//                             expandedStep === step.number ? "rotate-180" : ""
//                           }`}
//                         >
//                           <svg
//                             className="w-5 h-5 text-muted-foreground"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Final Checkmark */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5 }}
//             className="relative mt-8"
//           >
//             <div className="absolute left-0 top-2 sm:left-0 sm:top-6">
//               <div className="w-16 h-16 sm:w-16 sm:h-16 bg-primary border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
//                 <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
//               </div>
//             </div>
//             <div className="ml-24 sm:ml-32">
//               <Card className="bg-primary/10 border-primary/30 p-6">
//                 <h3 className="text-xl font-bold text-primary">Your Book is Published!</h3>
//                 <p className="text-primary/80 mt-2">
//                   Celebrate your achievement and start your author journey with Amazon Publisher.
//                 </p>
//               </Card>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Discovery & Planning",
    description:
      "We begin with a one-on-one consultation: your goals, genre, target reader, schedule and budget.",
    details:
      "Together we map the best service path and agree on milestones for your publishing journey.",
  },
  {
    number: 2,
    title: "Pre-Production / Outline",
    description:
      "For ghostwriting: outline development, research, chapter breakdown. For editing or other services, we perform a manuscript assessment.",
    details:
      "We also develop a style guide and plan for design, marketing, and other essential steps before production begins.",
  },
  {
    number: 3,
    title: "Creation & Execution",
    description:
      "Manuscript writing, editing rounds, design mock-ups, and formatting—completed under your guidance and approval.",
    details:
      "We handle the heavy lifting while you review progress, provide feedback, and maintain full creative control.",
  },
  {
    number: 4,
    title: "Quality-Assurance & Finalisation",
    description:
      "We proofread, review, and ensure full technical compliance for both print and eBook formats.",
    details:
      "For audiobooks, we handle narration, mastering, and final QA to deliver professional-quality results.",
  },
  {
    number: 5,
    title: "Publishing & Launch",
    description:
      "We publish your book across retail channels, distribute to libraries, and manage pricing and metadata.",
    details:
      "We also assist in scheduling launch events and promotional campaigns for maximum visibility.",
  },
  {
    number: 6,
    title: "Marketing & Growth",
    description:
      "Post-launch, we continue to support your book with marketing strategies and performance reviews.",
    details:
      "We help you run ad campaigns, optimise listings, engage readers, and grow your author brand long-term.",
  },
]

export default function ProcessTimeline() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Proven Process — Simple, Transparent, Effective
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Every great book follows a great process. Here’s how we guide you from your first idea to
            a published, market-ready masterpiece.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30 hidden sm:block" />

          {/* Timeline Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 sm:left-0 sm:top-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-16 sm:h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-24 sm:ml-32">
                  <Card
                    onClick={() =>
                      setExpandedStep(expandedStep === step.number ? null : step.number)
                    }
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer p-6 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Step {step.number}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>

                        {/* Expanded Details */}
                        {expandedStep === step.number && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step.details}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Expand Icon */}
                      <div className="ml-4 flex-shrink-0">
                        <div
                          className={`transition-transform duration-300 ${
                            expandedStep === step.number ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-muted-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Checkmark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative mt-8"
          >
            <div className="absolute left-0 top-2 sm:left-0 sm:top-6">
              <div className="w-16 h-16 sm:w-16 sm:h-16 bg-primary border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <div className="ml-24 sm:ml-32">
              <Card className="bg-primary/10 border-primary/30 p-6">
                <h3 className="text-xl font-bold text-primary">
                  Your Publishing Success Starts Here
                </h3>
                <p className="text-primary/80 mt-2">
                  With a clear, proven process, we make your author journey simple, stress-free, and
                  successful.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
