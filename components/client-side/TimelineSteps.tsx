"use client"

import { useState } from "react"
import { CheckCircle2, ChevronDown } from "lucide-react"

type Step = {
  number: number
  title: string
  description: string
  details: string
  gradient: string
  glow: string
  icon: string
  text: string
  bgOpacity: string
}

export default function TimelineSteps({ steps }: { steps: Step[] }) {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <div className="space-y-10">
      {steps.map((step) => (
        <div key={step.number} className="relative">
          {/* Connecting Line (Pure CSS) */}
          <div className="absolute left-10 top-20 w-0.5 h-32 bg-gradient-to-b from-gray-300 to-transparent hidden sm:block opacity-50" />

          <div className="flex items-start gap-6 group">
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} p-1 shadow-lg`}>
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <CheckCircle2 className={`w-8 h-8 ${step.icon} font-bold`} />
                </div>
              </div>
            </div>

            {/* Clickable Card */}
            <div
              onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
              className={`flex-1 bg-gradient-to-br ${step.gradient} ${step.bgOpacity} backdrop-blur-xl border-2 border-white/30 rounded-3xl p-6 cursor-pointer shadow-xl hover:shadow-2xl hover:${step.glow} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-sm font-bold px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-sm ${step.text} shadow-md`}>
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${step.text} drop-shadow-md`}>
                    {step.title}
                  </h3>
                  <p className={`text-white/90 leading-relaxed drop-shadow`}>{step.description}</p>

                  {/* Expanded Details - Animated via CSS grid hack or max-height */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      expandedStep === step.number ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-white/30" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className={`text-sm ${step.text} opacity-90 leading-relaxed font-medium`}>
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expand Arrow */}
                <div
                  className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                    expandedStep === step.number ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}