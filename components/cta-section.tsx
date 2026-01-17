import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-20 pb-40 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50"
    >
      {/* ==== CSS DEFINITIONS ==== */}
      {/* We inject these styles here so they work without client-side JS libraries */}
      <style>{`
        @keyframes cta-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes cta-float-delayed {
          0%, 100% { transform: translateY(0) scale(1.1); }
          50% { transform: translateY(20px) scale(1); }
        }
        @keyframes cta-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes cta-arrow-bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes cta-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cta-expand-width {
          from { width: 0; }
          to { width: 100px; }
        }
        
        /* Utility Classes */
        .animate-cta-float { animation: cta-float 8s ease-in-out infinite; }
        .animate-cta-float-delayed { animation: cta-float-delayed 10s ease-in-out infinite; animation-delay: 2s; }
        .animate-cta-pulse { animation: cta-pulse-ring 2s infinite; }
        .animate-cta-arrow { animation: cta-arrow-bounce 1.5s infinite; }
        .animate-cta-fade-up { animation: cta-fade-up 0.8s ease-out forwards; opacity: 0; }
        .animate-cta-expand { animation: cta-expand-width 1s ease-out forwards 0.5s; width: 0; }
      `}</style>

      {/* ==== GLOWING GOLDEN BACKGROUND ==== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.15),transparent_60%)]" />

        {/* Floating Orbs (CSS Animation) */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-yellow-300/20 rounded-full blur-3xl animate-cta-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-amber-300/20 rounded-full blur-3xl animate-cta-float-delayed" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-cta-fade-up">
        {/* ==== HEADLINE ==== */}
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight animate-cta-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-md">
            Want your story featured here?
          </span>
          <br />
          <span className="text-gray-800">Let’s make it happen.</span>
        </h2>

        {/* ==== SUBTEXT ==== */}
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-medium leading-relaxed animate-cta-fade-up" style={{ animationDelay: '0.2s' }}>
          From first draft to global publication — we turn your ideas into{" "}
          <span className="font-bold text-amber-600">beautifully published books</span> that captivate readers everywhere.
        </p>

        {/* ==== CTA BUTTON ==== */}
        <div className="flex justify-center animate-cta-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative group hover:scale-105 active:scale-95 transition-transform duration-300">
            <Button
              size="lg"
              className="relative z-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-7 text-xl font-bold rounded-full shadow-xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-3"
            >
              Start My Project
              {/* Arrow with CSS Bounce */}
              <div className="animate-cta-arrow">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Button>

            {/* Pulse Ring (CSS Animation) */}
            <div className="absolute inset-0 rounded-full bg-amber-400/40 blur-xl animate-cta-pulse" />
          </div>
        </div>

        {/* ==== DECORATIVE LINE ==== */}
        <div className="mx-auto mt-12 h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-lg shadow-amber-400/50 animate-cta-expand" />
      </div>
    </section>
  );
}