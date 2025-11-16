// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { useState } from "react"
// import { 
//   ChevronDown,
//   DollarSign,
//   Clock,
//   Shield,
//   Store,
//   Lock,
//   Headphones,
//   HelpCircle,
//   Sparkles
// } from "lucide-react"

// const faqs = [
//   {
//     id: 1,
//     question: "How much does it cost to publish a book?",
//     answer: "Pricing varies depending on services required (ghostwriting, design, marketing, etc.). We offer transparent tiers and custom quotes. During your free consultation we'll review your project and give you clear pricing.",
//     icon: DollarSign,
//     color: "from-yellow-500 to-white-400"
//   },
//   {
//     id: 2,
//     question: "How long does the process take?",
//     answer: "A standard journey from concept to published eBook can take 4–6 months. Audio book production or extended marketing campaigns may extend that timeframe. We will create a timeline estimate early on.",
//     icon: Clock,
//     color: "from-yellow-500 to-white-400"
//   },
//   {
//     id: 3,
//     question: "Who owns the rights to my book?",
//     answer: "You retain 100% ownership of your intellectual property, royalties and global rights. We provide services — the book remains your property.",
//     icon: Shield,
//     color: "from-yellow-500 to-white-400"
//   },
//   {
//     id: 4,
//     question: "Will my book be available in bookstores?",
//     answer: "Yes. We distribute to major online retailers (Amazon, Apple Books, Google Play, Kobo) and can also arrange print-on-demand and wholesalers for brick-and-mortar distribution.",
//     icon: Store,
//     color: "from-yellow-500 to-white-400"
//   },
//   {
//     id: 5,
//     question: "Do you require exclusivity?",
//     answer: "No. You are free to publish elsewhere or use other services; we simply provide the services you choose.",
//     icon: Lock,
//     color: "from-yellow-500 to-white-400"
//   },
//   {
//     id: 6,
//     question: "What support do you provide after launch?",
//     answer: "We offer post-launch marketing support, help with reader engagement, reviews, social campaigns and book tour planning (virtual or physical).",
//     icon: Headphones,
//     color: "from-yellow-500 to-white-400"
//   }
// ]

// export default function FAQs() {
//   const [openId, setOpenId] = useState(null)

//   const toggleFAQ = (id) => {
//     setOpenId(openId === id ? null : id)
//   }

//   return (
//     <section className="py-20 bg-background relative overflow-hidden">
//       {/* Background Decoration */}
//       {/* <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 0],
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             rotate: [0, -180, 0],
//           }}
//           transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//           className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
//         />
//       </div> */}
//       {/* Enhanced Background Decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 0],
//             x: [0, 50, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-40 -right-40 w-[200px] h-[300px] bg-gradient-to-br from-primary/20 via-primary/20 to-background rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             rotate: [0, -180, 0],
//             x: [0, -50, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -bottom-40 -left-40 w-[200px] h-[300px] bg-gradient-to-tr from-primary/20 via-primary/20 to-background rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
//           >
//             <HelpCircle className="w-8 h-8 text-primary" />
//           </motion.div>
          
//           <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Everything you need to know about publishing your book with us.
//           </p>
//         </motion.div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={faq.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
//                 <button
//                   onClick={() => toggleFAQ(faq.id)}
//                   className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-300"
//                 >
//                   <div className="flex items-center gap-4 flex-1">
//                     <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center ${openId === faq.id ? 'bg-primary/20' : ''} transition-colors`}>
//                       <faq.icon className={`w-5 h-5 ${faq.color}`} />
//                     </div>
//                     <h3 className="text-lg font-bold text-foreground pr-4">
//                       {faq.question}
//                     </h3>
//                   </div>
//                   <motion.div
//                     animate={{ rotate: openId === faq.id ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex-shrink-0"
//                   >
//                     <ChevronDown className="w-6 h-6 text-primary" />
//                   </motion.div>
//                 </button>

//                 <AnimatePresence>
//                   {openId === faq.id && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-6 pb-6 pt-2">
//                         <div className="pl-14">
//                           <p className="text-muted-foreground leading-relaxed">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="mt-16 text-center"
//         >
//           <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl p-8 sm:p-12">
//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
//             >
//               <Sparkles className="w-8 h-8 text-primary" />
//             </motion.div>
            
//             <h3 className="text-3xl font-bold text-foreground mb-4">
//               Still Have Questions?
//             </h3>
//             <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//               Have a question we haven't answered? Get in touch with our team and we'll be happy to help.
//             </p>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
//             >
//               Ask Us Anything
//               <HelpCircle className="w-5 h-5" />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import { 
  ChevronDown,
  DollarSign,
  Clock,
  Shield,
  Store,
  Lock,
  Headphones,
  HelpCircle,
  Sparkles
} from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How much does it cost to publish a book?",
    answer: "Pricing varies depending on services required (ghostwriting, design, marketing, etc.). We offer transparent tiers and custom quotes. During your free consultation we'll review your project and give you clear pricing.",
    icon: DollarSign,
  },
  {
    id: 2,
    question: "How long does the process take?",
    answer: "A standard journey from concept to published eBook can take 4–6 months. Audio book production or extended marketing campaigns may extend that timeframe. We will create a timeline estimate early on.",
    icon: Clock,
  },
  {
    id: 3,
    question: "Who owns the rights to my book?",
    answer: "You retain 100% ownership of your intellectual property, royalties and global rights. We provide services — the book remains your property.",
    icon: Shield,
  },
  {
    id: 4,
    question: "Will my book be available in bookstores?",
    answer: "Yes. We distribute to major online retailers (Amazon, Apple Books, Google Play, Kobo) and can also arrange print-on-demand and wholesalers for brick-and-mortar distribution.",
    icon: Store,
  },
  {
    id: 5,
    question: "Do you require exclusivity?",
    answer: "No. You are free to publish elsewhere or use other services; we simply provide the services you choose.",
    icon: Lock,
  },
  {
    id: 6,
    question: "What support do you provide after launch?",
    answer: "We offer post-launch marketing support, help with reader engagement, reviews, social campaigns and book tour planning (virtual or physical).",
    icon: Headphones,
  }
]

export default function FAQs() {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,162,18,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ECA212]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D89010]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ECA212]/10 rounded-full mb-6 border border-[#ECA212]/20">
            <HelpCircle className="w-8 h-8 text-[#ECA212]" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about publishing your book with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#ECA212]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ECA212]/20">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-[#ECA212]/10 flex items-center justify-center ${openId === faq.id ? 'bg-[#ECA212]/20 border border-[#ECA212]/30' : ''} transition-all duration-300`}>
                      <faq.icon className="w-5 h-5 text-[#ECA212]" />
                    </div>
                    <h3 className="text-lg font-bold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#ECA212]" />
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openId === faq.id ? '500px' : '0',
                    opacity: openId === faq.id ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="pl-14">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-scale-in" style={{ animationDelay: '600ms' }}>
          <div className="relative bg-gradient-to-br from-[#ECA212]/10 via-[#ECA212]/5 to-transparent border border-[#ECA212]/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm overflow-hidden">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ECA212]/5 via-[#D89010]/5 to-[#ECA212]/5 animate-shimmer"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ECA212]/10 rounded-full mb-6 border border-[#ECA212]/20 animate-float">
                <Sparkles className="w-8 h-8 text-[#ECA212]" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Have a question we haven't answered? Get in touch with our team and we'll be happy to help.
              </p>
              
              <button className="bg-gradient-to-r from-[#ECA212] to-[#D89010] hover:from-[#D89010] hover:to-[#ECA212] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-[#ECA212]/50 hover:scale-105">
                Ask Us Anything
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out backwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </section>
  )
}