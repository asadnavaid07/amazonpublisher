import Image from "next/image";
import BannerClient from "@/components/client-side/banner";

export default function Banner() {
  // Data defined on the server
  const bannerData = [
    {
      title: "Publish Your Book Globally",
      subtitle: "Reach readers worldwide with professional publishing services.",
      buttonText: "Get Started",
    },
    {
      title: "Edit, Design, and Distribute",
      subtitle: "From editing to cover design, we handle it all end-to-end.",
      buttonText: "See Services",
    },
    {
      title: "Launch on Amazon and Beyond",
      subtitle: "Maximize visibility across top marketplaces and formats.",
      buttonText: "Learn More",
    },
  ];

  const bookCards = [
    { img: "/cover1.webp", rotation: "rotate-2" },
    { img: "/cover2.webp", rotation: "-rotate-1" },
    { img: "/cover3.webp", rotation: "-rotate-2" },
    { img: "/cover4.webp", rotation: "rotate-1" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      
      {/* STATIC PART: Background Image rendered on Server */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner_bg.png"
          alt="Banner Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-slate-900/30" /> {/* Optional Overlay */}
      </div>

      {/* DYNAMIC PART: Interactive logic passed to Client Component */}
      <BannerClient bannerData={bannerData} bookCards={bookCards} />
      
    </section>
  );
}