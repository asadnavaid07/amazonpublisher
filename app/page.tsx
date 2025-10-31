import Header from "@/components/header"
import Banner from "@/components/banner"
import HeroSection from "@/components/hero-section"
import BookCarousel from "@/components/book-carousel"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import ProcessTimeline from "@/components/process-timeline"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import LampSection from "@/components/lamp-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Banner
        banner={[
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
        ]}
      />
      <HeroSection />
      {/* <LampSection /> */}
      <BookCarousel />
      {/* <FeaturesSection />
      <ServicesSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <CTASection /> */}
      <Footer />
    </main>
  )
}
