import FeaturesClient from "./client-side/features-section"

// --- Data Definitions (Server Side) ---
const features = [
  {
    title: "Quality Assurance",
    description: "Every book undergoes rigorous quality checks to ensure professional standards in editing, design, and production.",
    gradient: "from-yellow-400 to-amber-400",
    iconColor: "text-yellow-600",
  },
  {
    title: "Author-Centric Approach",
    description: "Your vision comes first. We collaborate closely with you to bring your unique voice and story to life.",
    gradient: "from-pink-400 to-rose-400",
    iconColor: "text-pink-600",
  },
  {
    title: "Fast Turnaround",
    description: "Efficient processes mean your book reaches publication faster without compromising on quality.",
    gradient: "from-purple-400 to-indigo-400",
    iconColor: "text-purple-600",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Clear, upfront pricing so you know exactly what you're investing in your book.",
    gradient: "from-teal-400 to-cyan-400",
    iconColor: "text-teal-600",
  },
  {
    title: "Lifetime Support",
    description: "Our relationship doesn't end at publication. We provide ongoing support for reprints and new editions.",
    gradient: "from-orange-400 to-red-400",
    iconColor: "text-orange-600",
  },
  {
    title: "Industry Expertise",
    description: "Decades of combined experience in publishing means you benefit from proven strategies and best practices.",
    gradient: "from-emerald-400 to-lime-400",
    iconColor: "text-emerald-600",
  },
]

const stats = [
  { number: "500+", label: "Books Published", gradient: "from-yellow-400 to-amber-400" },
  { number: "95%", label: "Author Satisfaction", gradient: "from-pink-400 to-rose-400" },
  { number: "50+", label: "Countries Reached", gradient: "from-purple-400 to-indigo-400" },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
      
      {/* --- STATIC BACKGROUND (Server Side) --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(250,204,21,0.15),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#fff_25%,transparent_25%),linear-gradient(-45deg,#fff_25%,transparent_25%)] bg-[length:30px_30px]" />
        
        {/* Floating Orbs - Using Global CSS Classes */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-yellow-300/40 to-orange-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-300/40 to-purple-300/30 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* --- INTERACTIVE CONTENT (Client Side) --- */}
      <FeaturesClient features={features} stats={stats} />
      
    </section>
  )
}