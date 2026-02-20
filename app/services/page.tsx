import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServicesContent } from "@/components/services-content";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services | Her DigitalEdge",
  description:
    "Marketing support, operation management, and AI & workflow automation for small service-based business owners. Show up, focus on clients, and scale with confidence.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesContent />
      <CtaSection />
      <Footer />
    </main>
  );
}
