import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { ServiceDetailContent } from "@/components/service-detail-content";
import {
  getServiceBySlug,
  getServiceSlugs,
} from "@/lib/services-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service)
    return { title: "Service | Her DigitalEdge" };
  return {
    title: `${service.title} | Her DigitalEdge`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main>
      <Navbar />
      <ServiceDetailContent slug={slug} />
      <CtaSection />
      <Footer />
    </main>
  );
}
