import Header from "@/components/header"
import Footer from "@/components/footer"
import { 
  Headphones, Smartphone, Music, Play, CheckCircle2, 
  Mic2, Radio, Tablet, Layers, Sparkles, ArrowRight 
} from "lucide-react"

export default function AudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-premium { animation: fadeInUp 0.8s ease-out forwards; }
        .audio-wave { 
          display: flex; 
          align-items: flex-end; 
          gap: 3px; 
          height: 20px; 
        }
        .wave-bar { 
          width: 3px; 
          background: #eab308; 
          animation: wave 1s ease-in-out infinite; 
        }
        @keyframes wave {
          0%, 100% { height: 5px; }
          50% { height: 20px; }
        }
      `}</style>
      <Header />
      <main className="animate-premium">
        {/* Hero Section */}
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-20" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20">
                <div className="audio-wave">
                  <div className="wave-bar" style={{ animationDelay: '0s' }}></div>
                  <div className="wave-bar" style={{ animationDelay: '0.2s' }}></div>
                  <div className="wave-bar" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">Sonic Excellence</span>
              </div>
              <h1 className="text-7xl font-bold mb-8 leading-tight">
                Beyond the Page: <span className="text-primary italic">Immersive</span> Media.
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                The modern reader is a listener and a mobile user. We provide top-tier audiobook production 
                and flawless e-book formatting to ensure your story is accessible on every device and 
                audible in every ear.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-primary text-white px-10 py-5 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all flex items-center gap-2">
                  START PRODUCTION <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Audiobook Features */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 bg-slate-100 rounded-[30px] flex items-center justify-center">
                    <Mic2 className="w-16 h-16 text-slate-300" />
                  </div>
                  <div className="p-8 bg-primary text-white rounded-[30px] shadow-xl">
                    <h3 className="text-4xl font-black mb-2 italic">ACX</h3>
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Certified Quality</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="p-8 bg-slate-900 text-white rounded-[30px] shadow-xl">
                    <Radio className="w-10 h-10 text-primary mb-4" />
                    <p className="font-bold leading-tight italic">Crystal Clear Audio Mastering</p>
                  </div>
                  <div className="h-64 bg-slate-200 rounded-[30px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" className="w-full h-full object-cover" alt="Audio Session" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold italic">Audiobook Production</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We handle the entire ACX (Audible) pipeline. From professional voice casting to 
                final sound engineering, we ensure your audiobook meets the highest industry standards.
              </p>
              <div className="space-y-4">
                {[
                  { t: "Professional Voice Casting", d: "Choose from our roster of SAG-AFTRA narrators across all accents and tones." },
                  { t: "Studio-Grade Mastering", d: "Noise floor reduction, RMS normalization, and peak mastering for Audible." },
                  { t: "Full Character Voicing", d: "Narrators who bring every character to life with distinct emotional weight." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white border rounded-2xl hover:shadow-md transition-shadow">
                    <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* E-Book Formatting Section */}
        <section className="py-24 bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6">Digital Reading Experience</h2>
              <p className="text-slate-600">
                A poorly formatted E-book can lead to bad reviews. We ensure your reflowable 
                EPUB layout looks perfect on Kindle, iPad, and Android devices.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Tablet />, 
                  title: "Reflowable Layout", 
                  desc: "Optimized for font scaling and orientation changes across all e-readers." 
                },
                { 
                  icon: <Layers />, 
                  title: "Interactive TOC", 
                  desc: "Hyperlinked Table of Contents for seamless navigation through your chapters." 
                },
                { 
                  icon: <Sparkles />, 
                  title: "Media Integration", 
                  desc: "High-resolution image optimization and fixed-layout options for picture-heavy books." 
                }
              ].map((box, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border shadow-sm text-center group hover:bg-slate-900 transition-all duration-500">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                    {box.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">{box.title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-400">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs List */}
        <section className="py-24 max-w-5xl mx-auto px-4">
          <div className="bg-white border rounded-[50px] p-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-10 text-center italic">Technical Specifications Included:</h3>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
              {[
                "EPUB 3.0 & Mobi Formats",
                "Amazon Kindle (KPF) Optimization",
                "Apple Books Compatibility",
                "192kbps or higher Audio Bitrate",
                "44.1 kHz Sample Rate Mastering",
                "Opening/Closing Credits Production",
                "Retail Sample Snippet Creation",
                "Audio Chapter Markers"
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-50">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium text-slate-700">{spec}</span>
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