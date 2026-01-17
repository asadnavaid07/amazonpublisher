import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Transparent Pricing & Milestone Reports",
    description:
      "Know exactly what you're paying for at every stage with clear milestones and real-time progress updates.",
    image: "/pricing.webp",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Dedicated Author Portal",
    description:
      "Access your personal dashboard to track progress, review drafts, and communicate directly with our team.",
    image: "/dashboard.webp",
    gradient: "from-yellow-500 to-lime-500",
  },
  {
    title: "Global Distribution Without Hidden Costs",
    description:
      "Your book reaches Amazon, Barnes & Noble, Apple Books, and more — no surprise fees.",
    image: "/books3.webp",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Post-Launch Support Built-In",
    description:
      "We stay with you after launch to promote, market, and grow your author brand.",
    image: "/team.webp",
    gradient: "from-amber-600 to-orange-600",
  },
];

export default function BonusSection() {
  return (
    <section
      id="bonus"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-24"
    >
      {/* Lightweight background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-16 h-64 w-64 rounded-full bg-amber-400/30 blur-2xl" />
        <div className="absolute bottom-1/4 right-16 h-72 w-72 rounded-full bg-orange-400/30 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="mb-4 text-5xl font-extrabold sm:text-6xl">
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              What Makes Us Different
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-semibold text-amber-800">
            We don&apos;t just publish —{" "}
            <span className="text-orange-600">we partner for your success</span>.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-[1px] shadow-xl`}
              >
                <div className="h-full rounded-[22px] bg-white/15 p-6 backdrop-blur-md">
                  <div className="relative mb-4 h-56 overflow-hidden rounded-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      // 'priority' tells Next.js to preload this image automatically
                      // without needing the manual useEffect/window.Image logic.
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-6 text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Ready to Publish Like a Pro?
          </h3>

          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40">
            Schedule a Call
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}