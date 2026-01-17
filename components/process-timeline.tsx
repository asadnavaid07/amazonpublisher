import TimelineSteps from "./client-side/TimelineSteps"

const steps = [
  {
    number: 1,
    title: "Discovery & Planning",
    description: "We begin with a one-on-one consultation: your goals, genre, target reader, schedule and budget.",
    details: "Together we map the best service path and agree on milestones for your publishing journey.",
    gradient: "from-yellow-400 to-orange-400",
    glow: "shadow-yellow-400/60",
    icon: "text-yellow-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 2,
    title: "Pre-Production / Outline",
    description: "For ghostwriting: outline development, research, chapter breakdown. For editing or other services, we perform a manuscript assessment.",
    details: "We also develop a style guide and plan for design, marketing, and other essential steps before production begins.",
    gradient: "from-pink-400 to-rose-400",
    glow: "shadow-pink-400/60",
    icon: "text-pink-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 3,
    title: "Creation & Execution",
    description: "Manuscript writing, editing rounds, design mock-ups, and formatting—completed under your guidance and approval.",
    details: "We handle the heavy lifting while you review progress, provide feedback, and maintain full creative control.",
    gradient: "from-purple-400 to-indigo-400",
    glow: "shadow-purple-400/60",
    icon: "text-purple-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 4,
    title: "Quality-Assurance & Finalisation",
    description: "We proofread, review, and ensure full technical compliance for both print and eBook formats.",
    details: "For audiobooks, we handle narration, mastering, and final QA to deliver professional-quality results.",
    gradient: "from-teal-400 to-cyan-400",
    glow: "shadow-teal-400/60",
    icon: "text-teal-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 5,
    title: "Publishing & Launch",
    description: "We publish your book across retail channels, distribute to libraries, and manage pricing and metadata.",
    details: "We also assist in scheduling launch events and promotional campaigns for maximum visibility.",
    gradient: "from-orange-400 to-red-400",
    glow: "shadow-orange-400/60",
    icon: "text-orange-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
  {
    number: 6,
    title: "Marketing & Growth",
    description: "Post-launch, we continue to support your book with marketing strategies and performance reviews.",
    details: "We help you run ad campaigns, optimise listings, engage readers, and grow your author brand long-term.",
    gradient: "from-emerald-400 to-lime-400",
    glow: "shadow-emerald-400/60",
    icon: "text-emerald-900",
    text: "text-white",
    bgOpacity: "bg-white/10",
  },
]

// Books for carousel (Duplicated for infinite scroll effect)
const bookImages = [3, 4, 5, 6, 7];
// Create a long array for the scroll (e.g., 4 sets of books)
const carouselItems = [...bookImages, ...bookImages, ...bookImages, ...bookImages];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      
      {/* --- STATIC BACKGROUND --- */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(250,204,21,0.2),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_60%)]" />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#fff_25%,transparent_25%),linear-gradient(-45deg,#fff_25%,transparent_25%)] bg-[length:30px_30px]" />
        
        {/* Decor Orbs */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- BOOK CAROUSEL (CSS Only - Server Side) --- */}
        <div className="mb-16 overflow-hidden relative">
          {/* Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-yellow-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="py-12">
            <div className="animate-scroll-left flex gap-6">
              {carouselItems.map((num, index) => (
                <div
                  key={`${num}-${index}`}
                  className="flex-shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="relative w-48 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                     {/* Book Image */}
                    <div className="absolute inset-0 bg-gray-200">
                      <img
                        src={`/cover${num}.webp`}
                        alt={`Book ${num}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Shine Effect (CSS) */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  </div>
                  <div className="mt-4 h-3 bg-black/10 rounded-full blur-lg transform scale-x-75"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Proven Process
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            From idea to bestseller — <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">simple, colorful, effective</span>.
          </p>
        </div>

        {/* --- INTERACTIVE TIMELINE (Client Side) --- */}
        <TimelineSteps steps={steps} />

        {/* --- FINAL CTA --- */}
        <div className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>
          <div className="relative z-10 text-center text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
              Your Publishing Success Starts Here
            </h3>
            <p className="text-lg opacity-90 drop-shadow">
              With a <span className="font-bold">colorful, proven process</span>, we make your author journey <span className="font-bold">fun and successful</span>.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}