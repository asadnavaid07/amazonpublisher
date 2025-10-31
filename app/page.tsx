import Header from "@/components/header"
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
