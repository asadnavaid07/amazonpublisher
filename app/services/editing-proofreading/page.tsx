import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileEdit, CheckSquare, Search, Languages, ArrowRight } from "lucide-react"

export default function EditingPage() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide { animation: slideUp 0.7s ease-out forwards; }
        .step-card:hover { border-color: #eab308; }
      `}</style>
      <Header />
      <main className="animate-slide">
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-block p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-8">
              <FileEdit className="w-12 h-12 text-yellow-500" />
            </div>
            <h1 className="text-6xl font-black mb-6 uppercase tracking-tight">Precision <span className="text-yellow-500 italic">Editing</span></h1>
            <p className="text-2xl text-slate-400 font-light mb-12 max-w-3xl mx-auto">We transform rough drafts into polished diamonds. Our multi-tier editing process ensures your work is flawless and impactful.</p>
            <div className="flex justify-center gap-12 text-sm font-bold tracking-widest text-slate-500 uppercase">
              <span>● Grammar</span> <span>● Pacing</span> <span>● Clarity</span> <span>● Tone</span>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-6">Standard-Setting Quality Control</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Even the most famous authors have editors. Our team includes veteran editors from top publishing houses who scrutinize every word, ensuring your book meets the rigorous standards of the global market.
              </p>
              <ul className="space-y-6">
                {[
                  {h: "Deep Developmental Review", p: "We analyze plot holes, pacing, and thematic consistency."},
                  {h: "Meticulous Line Editing", p: "Enhancing the creative flow and sentence structure."},
                  {h: "Final Cold Read", p: "The ultimate proofreading pass to catch every last typo."}
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-yellow-500 rounded-full p-1 h-fit"><CheckSquare className="text-white w-4 h-4" /></div>
                    <div>
                      <h4 className="font-bold text-xl">{item.h}</h4>
                      <p className="text-slate-500">{item.p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 rounded-[50px] p-12 aspect-square flex flex-col justify-center">
               <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-yellow-500">
                    <p className="italic font-medium text-slate-800">"The manuscript went from a 6 to a 10. The developmental feedback was eye-opening."</p>
                    <p className="mt-4 font-bold text-sm">— Independent Author</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-primary ml-8">
                    <p className="italic font-medium text-slate-800">"Professional, thorough, and kept my voice intact. Highly recommend."</p>
                    <p className="mt-4 font-bold text-sm">— Bestselling Novelist</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}