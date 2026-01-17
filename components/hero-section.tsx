import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

// --- Data Definition (Server Side) ---
const bookCoversRow1 = [
  "/cover1.webp",
  "/cover2.webp",
  "/cover3.webp",
  "/cover6.webp",
];
const bookCoversRow2 = [
  "/cover4.webp",
  "/cover5.webp",
  "/cover10.webp",
  "/cover13.webp",
];

// --- Helper to render the static rows ---
const BookMarqueeRow = ({
  covers,
  direction = "normal", 
  priorityFirst = false,
}: {
  covers: string[];
  direction?: "normal" | "reverse";
  priorityFirst?: boolean;
}) => {
  // Duplicate images 4 times for smooth loop
  const renderedCovers = [...covers, ...covers, ...covers, ...covers];
  
  // Use the classes defined in globals.css
  const animationClass = direction === "normal" ? "animate-slide" : "animate-slide-reverse";

  return (
    <div className="flex overflow-hidden select-none pointer-events-none">
      <div className={`flex gap-4 shrink-0 ${animationClass}`}>
        {renderedCovers.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-32 sm:w-44 md:w-56 lg:w-64 my-3 rounded-xl sm:rounded-2xl overflow-hidden border bg-white shadow-lg"
          >
            <Image
              src={src}
              alt="Book cover"
              width={600}
              height={800}
              sizes="(min-width: 1024px) 16rem, (min-width: 640px) 11rem, 8rem"
              priority={priorityFirst && i === 0}
              className="w-full h-28 sm:h-36 md:h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[72vh] md:min-h-[85vh] flex items-center overflow-hidden pt-6 md:pt-8 w-full max-w-[100vw]"
    >
      {/* ==== STATIC BACKGROUND ==== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #ffcc33 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff66cc 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ==== CONTENT CONTAINER ==== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* ==== LEFT CONTENT (Static HTML) ==== */}
          <div className="text-center md:text-left space-y-7">
            <h1 className="mt-3 text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Publish your{" "}
              <span className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text px-3 pb-1 rounded-xl">
                Book
              </span>{" "}
              on Amazon
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-0.5 transition-all"
              >
                Get started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-orange-700">4.9/5 rating</span>
              </div>
              <div className="text-purple-700 font-medium">
                10k+ books formatted
              </div>
            </div>
          </div>

          {/* ==== RIGHT CONTENT (Marquee) ==== */}
          <div className="relative mx-auto md:mx-0 w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] overflow-hidden">
            <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-yellow-300/30 via-pink-200/20 to-purple-300/30 blur-3xl rounded-[48px]" />

            {/* Row 1: Left Slide */}
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] border-4 border-yellow-300/30 bg-gradient-to-br from-white/90 to-yellow-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,204,0,0.25)]">
              <BookMarqueeRow
                covers={bookCoversRow1}
                direction="normal"
                priorityFirst
              />
            </div>

            {/* Row 2: Right Slide */}
            <div className="mt-5 relative overflow-hidden rounded-[20px] sm:rounded-[28px] border-4 border-pink-300/30 bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-sm shadow-[0_0_40px_rgba(255,102,204,0,0.25)]">
              <BookMarqueeRow
                covers={bookCoversRow2}
                direction="reverse"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}