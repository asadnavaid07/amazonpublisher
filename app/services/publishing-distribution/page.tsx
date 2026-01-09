import Header from "@/components/header"
import Footer from "@/components/footer"
import { Globe2, Rocket, ShoppingCart, BarChart3, Shield } from "lucide-react"

export default function PublishingPage() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .reveal { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .glow-card:hover { box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); transform: scale(1.02); }
      `}</style>
      <Header />
      <main className="reveal">
        <section className="py-32 bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-yellow-500 font-black tracking-widest uppercase mb-6">Launch Protocol</h2>
            <h1 className="text-7xl font-bold mb-8">From Your Desk to the <span className="italic text-primary">World.</span></h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">Don't get lost in technicalities. We manage the global distribution logistics, ensuring your book is live on Amazon and 40,000+ other platforms seamlessly.</p>
            <div className="flex flex-wrap justify-center gap-6">
               <div className="px-8 py-3 bg-white/5 backdrop-blur rounded-full border border-white/10">Amazon KDP</div>
               <div className="px-8 py-3 bg-white/5 backdrop-blur rounded-full border border-white/10">IngramSpark</div>
               <div className="px-8 py-3 bg-white/5 backdrop-blur rounded-full border border-white/10">Barnes & Noble</div>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { i: <Shield/>, t: "Copyright & ISBN", d: "Legal protection and global registration for your book." },
              { i: <ShoppingCart/>, t: "Global Distribution", d: "Live placement on 40,000+ retail and library channels." },
              { i: <Rocket/>, t: "Priority Launch", d: "Fast-track publishing to meet your specific deadlines." },
              { i: <BarChart3/>, t: "Royalties Tracking", d: "Transparent reporting on every single sale worldwide." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-3xl transition-all glow-card">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-6">{feature.i}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.t}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8 italic">The Logistics We Handle For You:</h3>
            <div className="bg-white p-10 rounded-[40px] shadow-sm border text-left grid md:grid-cols-2 gap-x-12 gap-y-4">
              {["ISBN & Barcode Generation", "Copyright Office Registration", "Metadata & Category Selection", "BISAC Subject Coding", "LCCN (Library of Congress)", "Print-on-Demand (POD) Setup", "Digital File Conversion", "Price Strategic Planning"].map(item => (
                <div key={item} className="flex items-center gap-3 font-medium text-slate-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div> {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}