import Header from "@/components/header"
import Footer from "@/components/footer"
import { Palette, Layers, Minimize, Expand, CheckCircle } from "lucide-react"

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        .design-img:hover { filter: brightness(1.1); transition: 0.5s; }
      `}</style>
      <Header />
      <main className="fade-in">
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Palette className="w-16 h-16 text-primary mb-8" />
              <h1 className="text-6xl font-black mb-8 leading-[1.1]">Design That Stops The <span className="underline decoration-yellow-500 decoration-8 underline-offset-4">Scroll.</span></h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">Your cover is the face of your brand. We specialize in high-concept, genre-aware designs that convert casual browsers into dedicated readers.</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-2xl mb-2 italic">100% Custom</h4>
                  <p className="text-slate-500 text-sm">No templates. Ever. Each cover is built from scratch based on your story.</p>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2 italic">Genre-Expert</h4>
                  <p className="text-slate-500 text-sm">We know what sells in Thrillers, Romance, Sci-Fi, and Business.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] bg-slate-200 rounded-2xl shadow-xl overflow-hidden animate-pulse"></div>
               <div className="aspect-[3/4] bg-slate-300 rounded-2xl shadow-xl overflow-hidden mt-12 animate-pulse"></div>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4">
           <div className="bg-slate-900 rounded-[50px] p-16 text-white grid md:grid-cols-3 gap-12">
              {[
                {h: "Print Wraps", d: "Full spine and back cover designs for paperback and hardcover editions."},
                {h: "Interior Layout", d: "Beautiful typography and professional typesetting for a premium reading experience."},
                {h: "3D Mockups", d: "High-resolution promotional assets for your social media and marketing campaigns."}
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4">{item.h}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}