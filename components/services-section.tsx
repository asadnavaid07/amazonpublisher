import { BookOpen, PenTool, Users, Zap, Award } from "lucide-react"
import Link from 'next/link'

// Define data outside component to avoid recreation on every render
const services = [
  {
    icon: PenTool,
    title: "Professional Editing",
    description:
      "Expert editors refine your manuscript with developmental, line, and copy editing to ensure perfection.",
    link: "/services/editing-proofreading"
  },
  {
    icon: BookOpen,
    title: "Book Design & Layout",
    description:
      "Beautiful, professional interior and cover design that captures your book's essence and attracts readers.",
    link: "/services/book-cover-design"
  },
  {
    icon: PenTool, 
    title: "Narrative Development",
    description: "Transform your raw concepts into a compelling, market-ready manuscript that captures your unique voice and message.",
    link: "/services/ghostwriting"
  },
  {
    icon: Users,
    title: "Author Support",
    description:
      "Dedicated support team guiding you through every step of the publishing journey with expert advice.",
    link: "/services/ebook-audiobook-production"
  },
  {
    icon: Zap,
    title: "Marketing & Promotion",
    description:
      "Strategic marketing campaigns to build your author platform and maximize book visibility and sales.",
    link: "/services/book-promotion-marketing"
  },
  {
    icon: Award,
    title: "ISBN & Legal",
    description:
      "Complete handling of ISBN registration, copyright, and all legal requirements for your publication.",
    link: "/services/publishing-distribution"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      
      {/* Background - Static HTML/CSS */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,162,18,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ECA21220_1px,transparent_1px),linear-gradient(to_bottom,#ECA21220_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Floating orbs - Using standard Tailwind animate-pulse */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#ECA212]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D89010]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Cards Grid */}
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
                  {/* Outer glow - CSS Hover effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ECA212] to-[#D89010] rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500" />

                  {/* Card Content */}
                  <Link href={service.link}>
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
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}