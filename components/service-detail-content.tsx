"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { ArrowRight, Check } from "lucide-react";
import { getServiceBySlug } from "@/lib/services-data";
import { SERVICE_IMAGES, SERVICE_PAGE_BACKGROUND } from "@/lib/service-images";
import { TestimonialsSection } from "@/components/testimonials-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const slugToImageKey = {
  "marketing-support": "marketing" as const,
  "operation-management": "operation" as const,
  "ai-workflow-automation": "ai" as const,
};

export function ServiceDetailContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const { ref: heroRef, isVisible: heroVisible } = useAnimateOnScroll();
  const { ref: whyRef, isVisible: whyVisible } = useAnimateOnScroll(0.08);
  const { ref: whoRef, isVisible: whoVisible } = useAnimateOnScroll(0.08);
  const { ref: packagesRef, isVisible: packagesVisible } = useAnimateOnScroll(0.08);
  const { ref: concernsRef, isVisible: concernsVisible } = useAnimateOnScroll(0.08);
  const { ref: howRef, isVisible: howVisible } = useAnimateOnScroll(0.08);

  if (!service) return null;

  const imagePath =
    slug in slugToImageKey
      ? SERVICE_IMAGES[slugToImageKey[slug as keyof typeof slugToImageKey]]
      : SERVICE_IMAGES.marketing;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={SERVICE_PAGE_BACKGROUND}
            alt=""
            fill
            className="object-cover"
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
            {service.title}
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white md:text-6xl md:leading-tight">
            {service.shortTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            {service.tagline}
          </p>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
        </div>
      </section>

      {/* Why it matters */}
      <section
        ref={whyRef}
        className="flex min-h-[100dvh] flex-col justify-center bg-background px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className={`mx-auto max-w-4xl text-center ${whyVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Why it matters
          </p>
          <h2
            className="font-serif leading-tight tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.5rem)" }}
          >
            {service.whyMattersHeading}
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {service.whyMattersIntro}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.whyMattersReasons.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-white/20 bg-card p-5 text-left lg:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f2ebe6] text-[#66879a]">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-primary-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section
        ref={whoRef}
        className="flex min-h-[100dvh] flex-col justify-center bg-card px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className={`mx-auto max-w-4xl text-center ${whoVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Who we serve
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            {service.whoThisIsForSubheading}
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.whoThisIsForItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border bg-[#f2ebe6] p-5 text-left lg:p-6"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#66879a]"
                  style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}
                >
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / Pricing — green cards */}
      <section
        ref={packagesRef}
        className="flex min-h-[100dvh] flex-col justify-center bg-background px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className={`mx-auto max-w-5xl text-center ${packagesVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Pricing
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Packages that fit your needs
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Choose a plan and scale as you grow. Custom options available.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-6 text-left ${
                  pkg.highlighted
                    ? "border-accent bg-card"
                    : "border-white/20 bg-card"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {pkg.name}
                </p>
                <div className="mt-4">
                  {pkg.price != null ? (
                    <>
                      <span className="text-2xl font-bold text-primary-foreground">{pkg.price}</span>
                      {pkg.hours && (
                        <p className="mt-1 text-sm text-primary-foreground/80">{pkg.hours}</p>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="text-2xl font-bold text-primary-foreground">{pkg.customLabel}</span>
                      {pkg.customSubtext && (
                        <p className="mt-1 text-sm text-primary-foreground/80">{pkg.customSubtext}</p>
                      )}
                    </>
                  )}
                </div>
                <p className="mt-4 text-sm text-primary-foreground/90">{pkg.description}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-primary-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#66879a]" />
                      {f}
                    </li>
                  ))}
                </ul>
                {pkg.disclaimer && (
                  <p className="mt-4 text-xs text-primary-foreground/70">{pkg.disclaimer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns / FAQ — expandable accordion */}
      <section
        ref={concernsRef}
        className="flex min-h-[100dvh] flex-col justify-center bg-card px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className={`mx-auto max-w-3xl text-center ${concernsVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Common questions
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            We've got answers
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          <Accordion type="single" collapsible className="mt-10 w-full space-y-4">
            {service.concerns.map((c, i) => (
              <AccordionItem
                key={i}
                value={`concern-${i}`}
                className="rounded-xl border border-border border-b-0 bg-[#f2ebe6] px-4 data-[state=open]:bg-[#f2ebe6]"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:bg-muted/50 py-6">
                  {c.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 pb-6">
                  {c.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* How it works — background image + View all services + Book a Call */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={SERVICE_PAGE_BACKGROUND}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div
          ref={howRef}
          className={`relative z-10 mx-auto max-w-4xl text-center ${
            howVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            How it works
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            Simple steps to get started
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {service.processSteps.map((step) => (
              <div key={step.step} className="rounded-xl border border-white/20 bg-white/5 p-6">
                <span className="text-3xl font-bold text-accent">{step.step}</span>
                <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://calendly.com/thevirtualprincess/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all"
            >
              Book a Call
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              View all our services
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
