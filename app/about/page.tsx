import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutContent } from "@/components/about-content";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us | Her DigitalEdge",
  description:
    "Learn about Her DigitalEdge, who we are, who we serve, and why we exist to support small service-based business owners.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutContent />
      <CtaSection />
      <Footer />
    </main>
  );
}
