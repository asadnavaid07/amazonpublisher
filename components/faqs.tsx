"use client"

import { motion, AnimatePresence } from "framer-motion"
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
    color: "from-yellow-500 to-white-400"
  },
  {
    id: 2,
    question: "How long does the process take?",
    answer: "A standard journey from concept to published eBook can take 4–6 months. Audio book production or extended marketing campaigns may extend that timeframe. We will create a timeline estimate early on.",
    icon: Clock,
    color: "from-yellow-500 to-white-400"
  },
  {
    id: 3,
    question: "Who owns the rights to my book?",
    answer: "You retain 100% ownership of your intellectual property, royalties and global rights. We provide services — the book remains your property.",
    icon: Shield,
    color: "from-yellow-500 to-white-400"
  },
  {
    id: 4,
    question: "Will my book be available in bookstores?",
    answer: "Yes. We distribute to major online retailers (Amazon, Apple Books, Google Play, Kobo) and can also arrange print-on-demand and wholesalers for brick-and-mortar distribution.",
    icon: Store,
    color: "from-yellow-500 to-white-400"
  },
  {
    id: 5,
    question: "Do you require exclusivity?",
    answer: "No. You are free to publish elsewhere or use other services; we simply provide the services you choose.",
    icon: Lock,
    color: "from-yellow-500 to-white-400"
  },
  {
    id: 6,
    question: "What support do you provide after launch?",
    answer: "We offer post-launch marketing support, help with reader engagement, reviews, social campaigns and book tour planning (virtual or physical).",
    icon: Headphones,
    color: "from-yellow-500 to-white-400"
  }
]

export default function FAQs() {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div> */}
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[200px] h-[300px] bg-gradient-to-br from-primary/20 via-primary/20 to-background rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[200px] h-[300px] bg-gradient-to-tr from-primary/20 via-primary/20 to-background rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
          >
            <HelpCircle className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about publishing your book with us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center ${openId === faq.id ? 'bg-primary/20' : ''} transition-colors`}>
                      <faq.icon className={`w-5 h-5 ${faq.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-14">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-3xl p-8 sm:p-12">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a question we haven't answered? Get in touch with our team and we'll be happy to help.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              Ask Us Anything
              <HelpCircle className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}