"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"

type Feature = {
  title: string
  description: string
  gradient: string
  iconColor: string
}

type Stat = {
  number: string
  label: string
  gradient: string
}

type FeaturesClientProps = {
  features: Feature[]
  stats: Stat[]
}

export default function FeaturesClient({ features, stats }: FeaturesClientProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Run only once
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={containerRef} 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Header */}
      <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
            Why Choose Amazon Author Partners
          </span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
          We're committed to <span className="font-bold text-amber-600">excellence</span>,{" "}
          <span className="font-bold text-pink-600">transparency</span>, and{" "}
          <span className="font-bold text-purple-600">your success</span>.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group animate-on-scroll animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-full rounded-2xl p-6 bg-white/90 backdrop-blur-xl border-2 border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              {/* Gradient Border Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl -z-10 transition-opacity duration-500`} />
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} p-0.5 shadow-md`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <CheckCircle2 className={`w-7 h-7 ${feature.iconColor} font-bold`} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group animate-on-scroll animate-scale-up"
            style={{ animationDelay: `${600 + index * 150}ms` }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 text-center border-2 border-white/50 shadow-lg hover:shadow-2xl hover:shadow-pink-300/40 hover:scale-105 transition-all duration-300">
              <div className={`text-5xl sm:text-6xl font-extrabold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent drop-shadow-lg`}>
                {stat.number}
              </div>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}