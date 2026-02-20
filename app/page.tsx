import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { HomeAboutPreview } from "@/components/home-about-preview";
import { WhoWeSupportSection } from "@/components/who-we-support-section";
import { HomeServicesPreview } from "@/components/home-services-preview";
import { HomeBenefitsSection } from "@/components/home-benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HomeAboutPreview />
      <WhoWeSupportSection />
      <HomeServicesPreview />
      <HomeBenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
