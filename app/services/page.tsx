// "use client"

// import { motion } from "framer-motion"
// import { Card } from "@/components/ui/card"
// import { 
//   PenTool, 
//   FileEdit, 
//   Globe2, 
//   Palette, 
//   Megaphone, 
//   Headphones,
//   CheckCircle2,
//   ArrowRight
// } from "lucide-react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"

// const services = [
//   {
//     id: 1,
//     title: "GHOSTWRITING",
//     headline: "Your Idea. Our Craft.",
//     description: "Whether you have a raw concept, a detailed outline, or an early draft, our ghostwriters work closely with you to craft a manuscript that captures your voice, honours your vision, and engages your readers from page one.",
//     icon: PenTool,
//     gradient: "from-yellow-500 to-white-400",
//     features: [
//       "Collaborative outline & planning",
//       "Research & expert interviews",
//       "Full-manuscript development",
//       "Revisions until you're satisfied"
//     ],
//     image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
//   },
//   {
//     id: 2,
//     title: "EDITING & PROOFREADING",
//     headline: "Perfect Every Page.",
//     description: "Our editing team refines your manuscript at multiple levels: developmental editing, line editing, and proofreading. We uphold publishing-house standards so your book shines.",
//     icon: FileEdit,
//     gradient: "from-yellow-500 to-white-400",
//     features: [
//       "Developmental & structural editing",
//       "Line & copy-editing",
//       "Proofreading for print & digital",
//       "Style guides & internal consistency"
//     ],
//     image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400&h=300&fit=crop"
//   },
//   {
//     id: 3,
//     title: "PUBLISHING & DISTRIBUTION",
//     headline: "From Manuscript to Market.",
//     description: "We handle the logistics so you don't have to: formatting, ISBN assignment, printing or print-on-demand setup, submission to online retailers, and global distribution channels.",
//     icon: Globe2,
//     gradient: "from-yellow-500 to-white-400",
//     features: [
//       "Print & e-Book setup",
//       "ISBN & copyright registration",
//       "Retailer & library distribution",
//       "Metadata & category optimisation"
//     ],
//     image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop"
//   },
//   {
//     id: 4,
//     title: "BOOK COVER & DESIGN",
//     headline: "Make an Unforgettable First Impression.",
//     description: "Our design studio creates covers that not only look professional but also capture genre, tone and stand out in online retail thumbnails. Interior layout for print and digital formats included.",
//     icon: Palette,
//     gradient: "from-yellow-500 to-white-400",
//     features: [
//       "Custom cover concept & comps",
//       "Print & e-Book interior layout",
//       "Illustrations, children's book art",
//       "Final files for print & marketing"
//     ],
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
//   },
//   {
//     id: 5,
//     title: "BOOK PROMOTION & MARKETING",
//     headline: "Reach Your Readers.",
//     description: "We design data-informed marketing campaigns: social media, email newsletters, book launch events, influencer outreach, Amazon optimization, and targeted advertising to drive sales.",
//     icon: Megaphone,
//     gradient: "from-yellow-500 to-white-400",
//     features: [
//       "Book launch strategy",
//       "Social media & influencer campaigns",
//       "Email marketing & lead funnels",
//       "Retail & Amazon optimisation"
//     ],
//     image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop"
//   },
//   {
//     id: 6,
//     title: "E-BOOK & AUDIO BOOK PRODUCTION",
//     headline: "Multi-Format, Multi-Platform.",
//     description: "To maximise your reach, your book should be available where modern readers are: e-readers and audio. We convert manuscripts and produce audio books to broaden your audience.",
//     icon: Headphones,
//     gradient: "from-yellow-500 to-white-400",
//     features: [
//       "EPUB, MOBI, Kindle ready files",
//       "Professional audio narration & editing",
//       "Marketing-ready audio book assets",
//       "Multi-platform delivery (Audible, iTunes)"
//     ],
//     image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop"
//   }
// ]

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-background">
//     <Header/>
//       {/* Hero Section */}
//       <section className="relative py-40 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white to-background" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8">
//               Our <span className="bg-primary text-primary-foreground px-3 pb-1 rounded-xl">Services</span>
//             </h1>
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               At Amazon Author Partners, we provide a suite of tailor-made services to take your book 
//               from idea to bestseller and beyond. Choose the support you need, when you need it.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Card className="group relative overflow-hidden border-border bg-card h-full hover:shadow-2xl transition-all duration-500">
//                   {/* Gradient Background */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/5 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                  
//                   {/* Content */}
//                   <div className="relative p-8 flex flex-col h-full">
//                     {/* Icon & Title */}
//                     <div className="flex items-start justify-between mb-6">
//                       <div className="flex-1">
//                         <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                           <service.icon className="w-7 h-7 text-white" />
//                         </div>
//                         <h3 className="text-sm font-bold text-primary tracking-widest mb-2">
//                           {service.title}
//                         </h3>
//                         <h2 className="text-2xl font-bold text-foreground mb-4">
//                           {service.headline}
//                         </h2>
//                       </div>
//                       <div className="ml-4 flex-shrink-0">
//                         <img 
//                           src={service.image} 
//                           alt={service.title}
//                           className="w-32 h-32 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
//                         />
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
//                       {service.description}
//                     </p>

//                     {/* Features List */}
//                     <div className="space-y-3 mb-6">
//                       {service.features.map((feature, idx) => (
//                         <motion.div
//                           key={idx}
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
//                           className="flex items-start gap-3"
//                         >
//                           <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                           <span className="text-sm text-muted-foreground">{feature}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* CTA Button */}
//                     {/* <button className="group/btn w-full mt-auto bg-foreground hover:bg-primary text-background py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
//                       VIEW MORE
//                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                     </button> */}
//                   </div>

//                   {/* Hover Border Effect */}
//                   <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                     <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl" />
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
//               Ready to Get Started?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Select the service (or services) that match your needs. Let's talk.
//             </p>
//             <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-3">
//               Explore Packages & Get a Quote
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </motion.div>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { 
  PenTool, FileEdit, Globe2, Palette, Megaphone, Headphones, CheckCircle2, ArrowRight
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    id: "ghostwriting",
    title: "GHOSTWRITING",
    headline: "Your Idea. Our Craft.",
    description: "Whether you have a raw concept, a detailed outline, or an early draft, our ghostwriters work closely with you to craft a manuscript that captures your voice, honours your vision, and engages your readers from page one.",
    icon: PenTool,
    gradient: "from-yellow-500 to-white-400",
    features: ["Collaborative outline & planning", "Research & expert interviews", "Full-manuscript development", "Revisions until you're satisfied"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
  },
  {
    id: "editing-proofreading",
    title: "EDITING & PROOFREADING",
    headline: "Perfect Every Page.",
    description: "Our editing team refines your manuscript at multiple levels: developmental editing, line editing, and proofreading. We uphold publishing-house standards so your book shines.",
    icon: FileEdit,
    gradient: "from-yellow-500 to-white-400",
    features: ["Developmental & structural editing", "Line & copy-editing", "Proofreading for print & digital", "Style guides & internal consistency"],
    image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=400&h=300&fit=crop"
  },
  {
    id: "publishing-distribution",
    title: "PUBLISHING & DISTRIBUTION",
    headline: "From Manuscript to Market.",
    description: "We handle the logistics so you don't have to: formatting, ISBN assignment, printing or print-on-demand setup, submission to online retailers, and global distribution channels.",
    icon: Globe2,
    gradient: "from-yellow-500 to-white-400",
    features: ["Print & e-Book setup", "ISBN & copyright registration", "Retailer & library distribution", "Metadata & category optimisation"],
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop"
  },
  {
    id: "book-cover-design",
    title: "BOOK COVER & DESIGN",
    headline: "Make an Unforgettable First Impression.",
    description: "Our design studio creates covers that not only look professional but also capture genre, tone and stand out in online retail thumbnails. Interior layout for print and digital formats included.",
    icon: Palette,
    gradient: "from-yellow-500 to-white-400",
    features: ["Custom cover concept & comps", "Print & e-Book interior layout", "Illustrations, children's book art", "Final files for print & marketing"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  },
  {
    id: "book-promotion-marketing",
    title: "BOOK PROMOTION & MARKETING",
    headline: "Reach Your Readers.",
    description: "We design data-informed marketing campaigns: social media, email newsletters, book launch events, influencer outreach, Amazon optimization, and targeted advertising to drive sales.",
    icon: Megaphone,
    gradient: "from-yellow-500 to-white-400",
    features: ["Book launch strategy", "Social media & influencer campaigns", "Email marketing & lead funnels", "Retail & Amazon optimisation"],
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=300&fit=crop"
  },
  {
    id: "ebook-audiobook-production",
    title: "E-BOOK & AUDIO BOOK PRODUCTION",
    headline: "Multi-Format, Multi-Platform.",
    description: "To maximise your reach, your book should be available where modern readers are: e-readers and audio. We convert manuscripts and produce audio books to broaden your audience.",
    icon: Headphones,
    gradient: "from-yellow-500 to-white-400",
    features: ["EPUB, MOBI, Kindle ready files", "Professional audio narration & editing", "Marketing-ready audio book assets", "Multi-platform delivery (Audible, iTunes)"],
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Our <span className="bg-primary text-primary-foreground px-3 pb-1 rounded-xl">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Amazon Author Partners, we provide a suite of tailor-made services to take your book 
              from idea to bestseller and beyond. Choose the support you need, when you need it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <Card className="group relative overflow-hidden border-border bg-card h-full hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/5 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="relative p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-sm font-bold text-primary tracking-widest mb-2">{service.title}</h3>
                          <h2 className="text-2xl font-bold text-foreground mb-4">{service.headline}</h2>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <img src={service.image} alt={service.title} className="w-32 h-32 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300" />
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                        VIEW DETAILS <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}