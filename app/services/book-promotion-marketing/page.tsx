import Header from "@/components/header"
import Footer from "@/components/footer"
import { Megaphone, TrendingUp, Users, Mail, Target } from "lucide-react"

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .anim-fade { animation: fadeInUp 0.8s ease-out; }
        @keyframes fadeInUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
      `}</style>
      <Header />
      <main className="anim-fade py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Megaphone className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-6xl font-bold mb-6 italic tracking-tight">Visibility <span className="text-primary">Amplified.</span></h1>
            <p className="text-xl text-slate-600 italic">Writing the book is 50% of the battle. Marketing is the other 50%. We ensure your masterpiece finds its tribe.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="group p-12 bg-white border rounded-[40px] hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-xl">
                <Target className="text-yellow-500 w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold mb-6">Amazon PPC & SEO</h3>
                <p className="opacity-70 mb-8 text-lg">We optimize your Amazon listing for the algorithm and run targeted ad campaigns that put your book in front of high-intent buyers.</p>
                <div className="flex gap-2">
                  <div className="h-2 w-12 bg-yellow-500 rounded"></div>
                  <div className="h-2 w-6 bg-yellow-500/30 rounded"></div>
                </div>
             </div>
             <div className="group p-12 bg-slate-50 border rounded-[40px] hover:shadow-2xl transition-all duration-500">
                <Users className="text-primary w-12 h-12 mb-6" />
                <h3 className="text-3xl font-bold mb-6 italic">Review Generation</h3>
                <p className="text-slate-600 mb-8 text-lg">Social proof is everything. We facilitate early reader reviews and influencer outreach to build instant credibility.</p>
                <button className="text-primary font-bold hover:underline">LEARN OUR METHOD →</button>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}