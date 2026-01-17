"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type BannerItem = {
  title: string;
  subtitle: string;
  buttonText: string;
};

type BookCard = {
  img: string;
  rotation: string;
};

type BannerClientProps = {
  bannerData: BannerItem[];
  bookCards: BookCard[];
};

export default function BannerClient({ bannerData, bookCards }: BannerClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [bannerData.length]);

  useEffect(() => {
    if (inView) {
      setCardsVisible(true);
    }
  }, [inView]);

  // Derived state for text rendering
  const title = bannerData[activeIndex]?.title ?? "";
  const words = title.split(" ");
  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  return (
    <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT - Dynamic Text */}
      <div className="space-y-6">
        <h1 className="font-extrabold text-5xl lg:text-7xl text-white leading-tight">
          <span key={`l1-${activeIndex}`} className="block animate-fade-up">
            {firstLine}
          </span>
          <span
            key={`l2-${activeIndex}`}
            className="block bg-gradient-to-r from-[#ECA212] to-[#D89010] bg-clip-text text-transparent animate-fade-up delay-100"
          >
            {secondLine}
          </span>
        </h1>

        <p
          key={`sub-${activeIndex}`}
          className="text-xl text-slate-300 max-w-xl animate-fade-up delay-200"
        >
          {bannerData[activeIndex]?.subtitle}
        </p>

        <button
          key={`btn-${activeIndex}`}
          className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#ECA212] to-[#D89010] animate-fade-up delay-300 hover:scale-105 transition-transform"
        >
          {bannerData[activeIndex]?.buttonText}
        </button>

        {/* Carousel Indicators */}
        <div className="flex gap-2 pt-4">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-[#ECA212]"
                  : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT - Animated Cards */}
      <div className="grid grid-cols-2 gap-6">
        {bookCards.map((card, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl shadow-2xl bg-white transform ${card.rotation} 
              ${
                cardsVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-20 scale-90"
              } 
              transition-all duration-700 delay-${i * 20} ${
              inView ? "animate-float" : ""
            }`}
          >
            <Image
              src={card.img}
              alt="Book cover"
              width={300}
              height={400}
              sizes="(min-width: 1024px) 12rem, (min-width: 640px) 10rem, 8rem"
              className="rounded-lg object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Styles localized to the client component */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.5s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; animation-delay: 1s; }
      `}</style>
    </div>
  );
}