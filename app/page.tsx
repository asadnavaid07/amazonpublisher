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
import FAQs from "@/components/faqs"
import BonusSection from "@/components/bonus-section"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">

      {/* Header */}
      <Header />

      {/* Banner */}
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

      {/* Hero Section – HAS ITS OWN WIDTH/PADDING */}
      <HeroSection />

      {/* Book Carousel – FULL WIDTH SLIDER */}
      <div className="w-full overflow-hidden">
        <BookCarousel />
      </div>

      {/* Features */}
      <FeaturesSection />

      {/* Services */}
      <ServicesSection />

      {/* Timeline */}
      <ProcessTimeline />

      {/* Bonus */}
      <BonusSection />

      {/* Testimonials – some sliders need overflow hidden */}
      <div className="w-full overflow-hidden">
        <TestimonialsSection />
      </div>

      {/* CTA */}
      <CTASection />

      {/* FAQs */}
      <FAQs />

      {/* Footer */}
      <Footer />
    </main>
  )
}
