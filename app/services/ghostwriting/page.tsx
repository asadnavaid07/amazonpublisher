import Header from "@/components/header"
import Footer from "@/components/footer"
import { PenTool, CheckCircle2, ArrowRight, Star, ShieldCheck } from "lucide-react"

export default function GhostwritingPage() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-premium { animation: fadeInUp 0.8s ease-out forwards; }
        .hover-lift { transition: transform 0.3s ease; }
        .hover-lift:hover { transform: translateY(-5px); }
      `}</style>
      <Header />
      <main className="animate-premium">
        <section className="relative py-32 bg-slate-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 -skew-x-12 transform translate-x-20" />
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold mb-6">
                <Star className="w-4 h-4 fill-current" /> BESTSELLING GHOSTWRITERS
              </div>
              <h1 className="text-6xl font-bold mb-8 italic text-slate-900 leading-tight">Your Story, Our <span className="text-primary">Masterpiece.</span></h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Transform your raw ideas into a literary sensation. Our elite ghostwriting team doesn't just write; we bridge the gap between your imagination and a published reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-10 py-5 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center gap-2">
                  START YOUR MANUSCRIPT <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800" className="rounded-[40px] shadow-2xl relative z-20" alt="Ghostwriting" />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-30 border max-w-xs">
                <ShieldCheck className="text-green-500 w-12 h-12 mb-4" />
                <h4 className="font-bold text-lg italic">100% Confidential</h4>
                <p className="text-sm text-slate-500 text-pretty">Complete NDA protection. You retain 100% of all rights and royalties forever.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 italic">Our Specialized Genres</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Memoirs & Biographies", d: "Preserve your legacy with a compelling narrative of your life's journey." },
              { t: "Business & Thought Leadership", d: "Establish authority with a book that showcases your professional expertise." },
              { t: "Fiction & Creative Novels", d: "From thrillers to romance, we build worlds that keep readers turning pages." },
              { t: "Self-Help & Wellness", d: "Inspire others with structured advice and impactful storytelling." },
              { t: "Speeches & Articles", d: "Short-form content designed to captivate live audiences and digital readers." },
              { t: "Book Proposals", d: "Professional pitches designed to win over traditional publishing houses." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border rounded-[30px] hover-lift shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <CheckCircle2 className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                <p className="text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}