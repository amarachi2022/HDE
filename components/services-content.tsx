"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import {
  FileText,
  Calendar,
  CheckSquare,
  TrendingUp,
  FileCheck,
  Users,
  DollarSign,
  Clock,
  Globe,
  Heart,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { SERVICE_IMAGES, SERVICE_PAGE_BACKGROUND } from "@/lib/service-images";

/* 6 pillar cards — same style as Why work with us, bigger cards */
const pillarCards = [
  { icon: FileText, title: "Show up and stand out", detail: "Consistent content and visibility so your brand gets noticed.", href: "/services/marketing-support" },
  { icon: Calendar, title: "Focus on clients", detail: "We handle admin and ops so you can spend time on what matters.", href: "/services/operation-management" },
  { icon: CheckSquare, title: "Scale with you", detail: "Automation and workflows that grow with your business.", href: "/services/ai-workflow-automation" },
  { icon: FileCheck, title: "Capture every lead", detail: "Systems that track inquiries and follow up so nothing slips.", href: "/services/marketing-support" },
  { icon: Users, title: "Streamline your operations", detail: "Clear processes and one place for your backend work.", href: "/services/operation-management" },
  { icon: TrendingUp, title: "Build systems that scale", detail: "From setup to optimization, we help you grow without the chaos.", href: "/services/ai-workflow-automation" },
];

/* Why choose — 6 cards in 3x2 */
const whyChoose = [
  {
    icon: FileCheck,
    text: "We focus on implementation, not empty strategy",
  },
  {
    icon: Users,
    text: "We meet you where you are and help you move into the future you want",
  },
  {
    icon: DollarSign,
    text: "We're budget-friendly without compromising quality",
  },
  {
    icon: Clock,
    text: "We give you back your time, energy, and peace",
  },
  {
    icon: Globe,
    text: "We have a global team ready to support your growth",
  },
  {
    icon: Heart,
    text: "We care about your business like it's our own",
  },
];

export function ServicesContent() {
  const { ref: heroRef, isVisible: heroVisible } = useAnimateOnScroll();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useAnimateOnScroll(0.08);
  const { ref: offerRef, isVisible: offerVisible } = useAnimateOnScroll(0.08);
  const { ref: whyRef, isVisible: whyVisible } = useAnimateOnScroll(0.08);

  return (
    <>
      {/* Hero — same structure & format as About: label, h1, one paragraph, dash */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={SERVICE_PAGE_BACKGROUND}
            alt="Her DigitalEdge team"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div
          ref={heroRef}
          className={`relative z-10 mx-auto w-full max-w-4xl text-center ${
            heroVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Services
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white md:text-6xl md:leading-tight">
            Get the support you need
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Your business deserves more than ideas, good intentions, or half-finished plans. It deserves structure, support, consistency, and follow-through.
          </p>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
        </div>
      </section>

      {/* We help you — same layout as Why work with us: green bg, 6 bigger cream cards */}
      <section ref={pillarsRef} className="flex min-h-[100dvh] flex-col justify-center bg-card px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className={`mx-auto mb-16 max-w-2xl text-center lg:mb-20 ${pillarsVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              We Help You
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-primary-foreground md:text-5xl">
              Our services will position your business for sustainable growth.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/90">
              Real support across{" "}
              <span style={{ color: "#f2ebe6" }}>marketing, operations and automation.</span>
            </p>
            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {pillarCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`flex flex-col rounded-2xl border border-border bg-[#f2ebe6] p-6 text-center shadow-sm transition-all hover:shadow-md lg:p-8 ${
                    pillarsVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: pillarsVisible ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#66879a] mx-auto" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground md:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-snug text-muted-foreground">
                    {card.detail}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our offer / How we support you — cream bg, one card per service */}
      <section ref={offerRef} className="flex min-h-[100dvh] flex-col justify-center px-6 py-20 lg:px-8 lg:py-28" style={{ backgroundColor: "#f2ebe6" }}>
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Offer
          </p>
          <div className="mb-16 lg:mb-20">
            <h2 className="text-center font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              How we support you
            </h2>
            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          </div>

          {servicesData.map((service, index) => {
            const serviceImage =
              service.slug === "marketing-support"
                ? SERVICE_IMAGES.marketing
                : service.slug === "operation-management"
                  ? SERVICE_IMAGES.operation
                  : SERVICE_IMAGES.ai;
            const isOperationCard = service.slug === "operation-management";
            const greenBg = "#526e50";
            const creamText = "#f2ebe6";
            return (
              <div
                key={service.slug}
                className={`mb-16 overflow-hidden rounded-2xl md:mb-20 ${offerVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{
                  animationDelay: offerVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                <div className="grid gap-0 md:grid-cols-5 md:items-stretch">
                  <div className={`flex h-full min-h-0 flex-col md:col-span-2 ${isOperationCard ? "md:order-2" : ""} p-4 pt-0 pb-0 md:px-6 md:py-0`}>
                    <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-xl border-2 border-white/20 md:min-h-full">
                      <Image
                        src={serviceImage}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>

                  <div
                    className={`flex min-h-full flex-col rounded-2xl p-6 md:col-span-3 md:p-10 ${isOperationCard ? "md:order-1 md:ml-4 md:mr-0 md:pl-8 md:pr-10" : "md:ml-0 md:mr-4 md:pl-8"}`}
                    style={{ backgroundColor: greenBg }}
                  >
                    <h3 className="font-serif text-2xl font-semibold md:text-3xl" style={{ color: creamText }}>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: creamText }}>{service.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: creamText }}>{service.longDescription}</p>
                    <p className="mt-6 text-sm font-semibold" style={{ color: creamText }}>Perfect for:</p>
                    <ul className="mt-2 space-y-2">
                      {service.perfectFor.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: creamText }}>
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" style={{ backgroundColor: creamText }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-book-amber mt-8 inline-flex w-fit rounded-lg px-6 py-3.5 text-base font-semibold transition-all"
                    >
                      {service.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why choose Her DigitalEdge? — green bg, cream cards, transparent blue icons */}
      <section ref={whyRef} className="flex min-h-[100dvh] flex-col justify-center bg-card px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Why work with us
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-primary-foreground md:text-5xl">
              Why choose Her DigitalEdge?
            </h2>
            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className={`flex flex-col items-center rounded-2xl border border-border bg-[#f2ebe6] p-6 text-center shadow-sm transition-all ${
                    whyVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: whyVisible ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-[#66879a]" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                    <Icon size={28} />
                  </div>
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
