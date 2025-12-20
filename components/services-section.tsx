// "use client"

// import { BookOpen, PenTool, Globe, Users, Zap, Award } from "lucide-react"
// import { motion } from "framer-motion"

// const services = [
//   {
//     icon: PenTool,
//     title: "Professional Editing",
//     description:
//       "Expert editors refine your manuscript with developmental, line, and copy editing to ensure perfection.",
//   },
//   {
//     icon: BookOpen,
//     title: "Book Design & Layout",
//     description:
//       "Beautiful, professional interior and cover design that captures your book's essence and attracts readers.",
//   },
//   {
//     icon: Globe,
//     title: "Global Distribution",
//     description:
//       "Get your book into major retailers worldwide including Amazon, Barnes & Noble, and independent bookstores.",
//   },
//   {
//     icon: Users,
//     title: "Author Support",
//     description:
//       "Dedicated support team guiding you through every step of the publishing journey with expert advice.",
//   },
//   {
//     icon: Zap,
//     title: "Marketing & Promotion",
//     description:
//       "Strategic marketing campaigns to build your author platform and maximize book visibility and sales.",
//   },
//   {
//     icon: Award,
//     title: "ISBN & Legal",
//     description:
//       "Complete handling of ISBN registration, copyright, and all legal requirements for your publication.",
//   },
// ]

// export default function ServicesSection() {
//   return (
//     <section id="services" className="py-20 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50/30">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,162,18,0.08),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ECA21220_1px,transparent_1px),linear-gradient(to_bottom,#ECA21220_1px,transparent_1px)] bg-[size:24px_24px]" />

//         {/* Floating orbs */}
//         <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#ECA212]/10 rounded-full blur-3xl animate-pulse" />
//         <div
//           className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D89010]/10 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         {/* <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Comprehensive Publishing Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             From manuscript to bestseller, we provide everything you need to publish with confidence and reach your audience.
//           </p>
//         </div> */}
//         {/* Header */}
// <div className="text-center mb-16">
//   {/* Animated Container */}
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, ease: "easeOut" }}
//     className="animate-fade-in"
//   >
//     {/* Main Heading - RAINBOW GRADIENT */}
//     <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
//       <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
//         Comprehensive Publishing Services
//       </span>
//     </h2>

//     {/* Animated Underline */}
//     <motion.div
//       initial={{ scaleX: 0 }}
//       whileInView={{ scaleX: 1 }}
//       transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//       className="h-1.5 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 rounded-full mx-auto max-w-xs mb-6"
//     />

//     {/* Subheading - Soft Gradient */}
//     <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
//       <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
//         From manuscript to bestseller
//       </span>
//       , we provide everything you need to publish with confidence and reach your audience.
//     </p>
//   </motion.div>
// </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon

//             // Bright gradient backgrounds per card
//             const gradients = [
//               "from-pink-400 via-pink-300 to-yellow-200",
//               "from-teal-400 via-sky-300 to-yellow-200",
//               "from-purple-400 via-fuchsia-300 to-yellow-200",
//               "from-blue-400 via-indigo-300 to-yellow-200",
//               "from-lime-400 via-green-300 to-yellow-200",
//               "from-orange-400 via-amber-300 to-yellow-200",
//             ]

//             const gradient = gradients[index % gradients.length]

//             return (
//               <div
//                 key={index}
//                 className="animate-slide-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="relative group h-full">
//                   {/* Outer glow */}
//                   <div className="absolute -inset-1 bg-gradient-to-r from-[#ECA212] to-[#D89010] rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></div>

//                   {/* Card */}
//                   <div
//                     className={`relative h-full rounded-3xl p-6 border border-gray-200 
//                     bg-gradient-to-br ${gradient} 
//                     shadow-lg backdrop-blur-md transition-all duration-300
//                     hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30`}
//                   >
//                     <div className="flex flex-col h-full">
//                       <div className="mb-4 inline-block p-4 rounded-2xl bg-white/40 backdrop-blur group-hover:bg-white/60 transition">
//                         <Icon className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" />
//                       </div>

//                       <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-sm">
//                         {service.title}
//                       </h3>

//                       <p className="text-gray-800 leading-relaxed text-sm font-medium">
//                         {service.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       {/* ANIMATIONS */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.6s ease-out backwards;
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import { BookOpen, PenTool, Globe, Users, Zap, Award } from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Professional Editing",
    description:
      "Expert editors refine your manuscript with developmental, line, and copy editing to ensure perfection.",
  },
  {
    icon: BookOpen,
    title: "Book Design & Layout",
    description:
      "Beautiful, professional interior and cover design that captures your book's essence and attracts readers.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description:
      "Get your book into major retailers worldwide including Amazon, Barnes & Noble, and independent bookstores.",
  },
  {
    icon: Users,
    title: "Author Support",
    description:
      "Dedicated support team guiding you through every step of the publishing journey with expert advice.",
  },
  {
    icon: Zap,
    title: "Marketing & Promotion",
    description:
      "Strategic marketing campaigns to build your author platform and maximize book visibility and sales.",
  },
  {
    icon: Award,
    title: "ISBN & Legal",
    description:
      "Complete handling of ISBN registration, copyright, and all legal requirements for your publication.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,162,18,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ECA21220_1px,transparent_1px),linear-gradient(to_bottom,#ECA21220_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#ECA212]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D89010]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Main Heading - Rainbow Gradient */}
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              Comprehensive Publishing Services
            </span>
          </h2>

          {/* Underline */}
          <div className="h-1.5 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 rounded-full mx-auto max-w-xs mb-6" />

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              From manuscript to bestseller
            </span>
            , we provide everything you need to publish with confidence and reach your audience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            const gradients = [
              "from-pink-400 via-pink-300 to-yellow-200",
              "from-teal-400 via-sky-300 to-yellow-200",
              "from-purple-400 via-fuchsia-300 to-yellow-200",
              "from-blue-400 via-indigo-300 to-yellow-200",
              "from-lime-400 via-green-300 to-yellow-200",
              "from-orange-400 via-amber-300 to-yellow-200",
            ]

            const gradient = gradients[index % gradients.length]

            return (
              <div key={index}>
                <div className="relative group h-full">
                  {/* Outer glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ECA212] to-[#D89010] rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></div>

                  {/* Card */}
                  <div
                    className={`relative h-full rounded-3xl p-6 border border-gray-200 
                    bg-gradient-to-br ${gradient} 
                    shadow-lg backdrop-blur-md transition-all duration-300
                    hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4 inline-block p-4 rounded-2xl bg-white/40 backdrop-blur group-hover:bg-white/60 transition">
                        <Icon className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-sm">
                        {service.title}
                      </h3>

                      <p className="text-gray-800 leading-relaxed text-sm font-medium">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      
    </section>
  )
}
