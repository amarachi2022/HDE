"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Shield,
  Rocket,
  Layers,
  Compass,
  TrendingUp,
  BadgeCheck,
  Handshake,
  Eye,
  Flag,
} from "lucide-react";

const whyChooseUs = [
  {
    icon: Rocket,
    title: "From plan to done",
    description: "We turn strategy into action so your goals don't stay on the whiteboard.",
  },
  {
    icon: Layers,
    title: "One partner, many hats",
    description: "Marketing, operations, and growth guidance under one roof — no juggling multiple vendors.",
  },
  {
    icon: Compass,
    title: "We've been where you are",
    description: "Built by founders who get the chaos, the late nights, and the dream.",
  },
  {
    icon: TrendingUp,
    title: "From surviving to scaling",
    description: "We bring the clarity and confidence so you can grow intentionally, not just keep the lights on.",
  },
  {
    icon: BadgeCheck,
    title: "Premium quality, real-world budgets",
    description: "We deliver high-impact work that fits your numbers.",
  },
  {
    icon: Handshake,
    title: "Part of your team",
    description: "We're invested in your success — not just another line item.",
  },
];

const philosophyPillars = [
  {
    icon: Target,
    title: "1. Leads Don't Fall Through",
    description:
      "Every inquiry is captured. Every opportunity is tracked. Every follow-up happens.",
    image: "/images/core-philosophy-1.png",
    imageAlt: "Professional support and lead tracking",
  },
  {
    icon: Zap,
    title: "2. Time Isn't Wasted",
    description:
      "Clear workflows. Defined processes. No unnecessary back-and-forth.",
    image: "/images/core-philosophy-2.png",
    imageAlt: "Focused productivity and efficient workflows",
  },
  {
    icon: Shield,
    title: "3. Systems Run Smoothly",
    description:
      "Automation where needed. Structure where required. Visibility across operations.",
    image: "/images/core-philosophy-3.png",
    imageAlt: "Organized systems and execution",
  },
];

export function AboutContent() {
  const { ref: heroRef, isVisible: heroVisible } = useAnimateOnScroll();
  const { ref: storyRef, isVisible: storyVisible } = useAnimateOnScroll();
  const { ref: ownerRef, isVisible: ownerVisible } = useAnimateOnScroll();
  const { ref: whyChooseRef, isVisible: whyChooseVisible } = useAnimateOnScroll();
  const { ref: valuesRef, isVisible: valuesVisible } = useAnimateOnScroll(0.1);

  return (
    <>
      {/* Page Hero – full viewport background (like home), Next Image fill + object-cover */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-background.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
        </div>
        <div
          ref={heroRef}
          className={`relative z-10 mx-auto w-full max-w-4xl text-center ${
            heroVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About Us
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white md:text-6xl md:leading-tight">
            We believe every founder deserves{" "}
            <span className="text-accent">real operational support.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            We step in as your back-end operations and systems partner, building, managing, and optimizing the engine of your business so revenue doesn&apos;t leak and growth doesn&apos;t overwhelm you.
          </p>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
        </div>
      </section>

      {/* Our Story */}
      <section className="flex min-h-[100dvh] flex-col justify-center bg-[#526e50] px-6 py-20 lg:px-8 lg:py-28">
        <div
          ref={storyRef}
          className={`mx-auto grid max-w-6xl items-stretch gap-20 lg:grid-cols-2 lg:gap-24 ${
            storyVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Our Story – background image with overlay */}
          <div
            className={`relative min-h-[420px] overflow-hidden rounded-2xl bg-cover bg-top bg-no-repeat ${storyVisible ? "animate-slide-in-left" : ""}`}
            style={{ backgroundImage: "url('/images/our-story-background.png')" }}
          >
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 flex h-full flex-col justify-center p-8 lg:p-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Our Story
              </p>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
                Built From Experience. Driven By Results.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Her DigitalEdge was created for service-based founders who are already generating revenue, but are losing time, leads, and peace of mind because their backend is disorganized.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                We saw a pattern:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1 text-lg text-white">
                <li>Leads slipping through the cracks</li>
                <li>Follow-ups forgotten</li>
                <li>Projects scattered across tools</li>
                <li>Founders stuck micromanaging instead of scaling</li>
              </ul>
              <p className="mt-6 text-lg leading-relaxed text-white">
                So we built something different.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                We become your back-end operations partner, organizing workflows, implementing automation, managing projects, and building systems that protect and multiply your revenue.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white">
                Because revenue isn&apos;t just generated on the front end. It&apos;s protected and grown in the backend.
              </p>
            </div>
          </div>

          {/* Vision and Mission – stacked, with icons and accent */}
          <div className={`flex flex-col gap-6 ${storyVisible ? "animate-slide-in-right" : ""}`}>
            <div className="rounded-2xl border border-border border-l-4 bg-[#f2ebe6] p-6 lg:p-8" style={{ borderLeftColor: "#66879a" }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-[#66879a]" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                <Eye size={24} />
              </div>
              <h3 className="mb-3 font-serif text-xl text-foreground md:text-2xl">
                Vision Statement
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                To build a world where founders scale profitable businesses without chaos, burnout, or operational breakdown. We envision service-based businesses running on structured systems, seamless workflows, and protected revenue, where growth feels controlled, sustainable, and intentional.
              </p>
            </div>
            <div className="rounded-2xl border border-border border-l-4 bg-[#f2ebe6] p-6 lg:p-8" style={{ borderLeftColor: "#66879a" }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-[#66879a]" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                <Flag size={24} />
              </div>
              <h3 className="mb-3 font-serif text-xl text-foreground md:text-2xl">
                Mission Statement
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                Our mission is to design, implement, and manage backend systems that protect revenue, eliminate inefficiencies, and give founders their time back. We partner with growing service-based businesses to:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-muted-foreground lg:text-base">
                <li>Capture and track every lead</li>
                <li>Streamline operations and workflows</li>
                <li>Automate repetitive processes</li>
                <li>Manage projects and administrative functions with precision</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
                So founders can focus on strategic growth rather than daily operational fires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="flex min-h-[100dvh] flex-col justify-center px-6 py-20 lg:px-8 lg:py-28">
        <div
          ref={ownerRef}
          className={`mx-auto max-w-6xl ${
            ownerVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid items-stretch gap-16 lg:grid-cols-2">
            {/* Left: Image uses full column height */}
            <div className={`min-h-0 ${ownerVisible ? "animate-slide-in-left" : ""}`}>
              <div className="relative h-full w-full min-h-[320px]">
                {/* Decorative accent elements */}
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-accent/20 blur-xl" />
                <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-[hsl(var(--slate-blue))]/20 blur-xl" />
                
                {/* Main image container – single founder photo (right image) */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 shadow-2xl" style={{ borderColor: '#526e50' }}>
                  <Image
                    src="/images/founder-2.png"
                    alt="Princess Mbari, founder of Her DigitalEdge"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Accent stripe */}
                  <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-accent" />
                </div>
                
                {/* Floating decorative element */}
                <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-accent/30 flex items-center justify-center border-4 border-background shadow-lg">
                  <div className="h-8 w-8 rounded-full bg-accent" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className={ownerVisible ? "animate-slide-in-right" : ""}>
              <div className="space-y-6">
                <div>
                  <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                    Meet the Founder
                  </p>
                  <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl mb-6">
                    The person behind{" "}
                    <span className="text-accent">HerDigitalEdge</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Princess Mbari founded Her DigitalEdge with a clear vision: to help service-based business owners reclaim their time and focus on what they do best. With years of experience in operations, systems, and business management, she understands the challenges that come with scaling a business.
                  </p>
                  <p>
                    After seeing too many talented entrepreneurs burn out from juggling too many tasks, Princess Mbari created HerDigitalEdge to provide the hands-on support that business owners actually need, not just another course or template, but real people doing real work.
                  </p>
                  <p>
                    Today, Princess Mbari leads a team dedicated to helping businesses thrive by ensuring leads don't fall through, time isn't wasted, and systems run smoothly. Her commitment to implementation has helped countless businesses scale sustainably.
                  </p>
                </div>

                {/* Divider line */}
                <div className="my-8 h-px w-24 bg-[#66879a]" />
                
                {/* Founder quote */}
                <div className="rounded-xl bg-[#66879a]/20 p-6 border-l-4 border-[#66879a]">
                  <p className="font-serif text-xl italic text-[#66879a]">
                    &quot;Every business owner deserves real operational support, not just another virtual assistant.&quot;
                  </p>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    Princess Mbari, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-mission.jpg"
            alt=""
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div
            className={`mx-auto mb-16 max-w-2xl text-center lg:mb-24 ${
              valuesVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Our Core Philosophy
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
              We believe revenue is protected and scaled by three critical backend factors working together:
            </h2>
            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          </div>

          <div ref={valuesRef} className="grid gap-8 md:grid-cols-3 md:items-stretch">
            {philosophyPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`flex h-full flex-col overflow-hidden rounded-2xl border border-border shadow-lg transition-all duration-500 hover:border-accent/40 hover:shadow-xl ${
                  valuesVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  backgroundColor: "#f2ebe6",
                  animationDelay: valuesVisible ? `${index * 120}ms` : "0ms",
                }}
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: index < 2 ? "50% 55%" : "50% 0%" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-4 p-6 lg:p-8" style={{ backgroundColor: "#f2ebe6" }}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#66879a]" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                    <pillar.icon size={24} />
                  </div>
                  <div className="min-h-0 flex-1">
                    <h3 className="mb-2 font-serif text-xl text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className={`mt-12 text-center text-lg text-white/95 ${
            valuesVisible ? "animate-fade-up" : "opacity-0"
          }`}>
            When these three work together, founders scale without burnout, overwhelm, or constant micromanaging.
          </p>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section
        ref={whyChooseRef}
        className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-[#526e50] px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className={`mx-auto mb-16 max-w-2xl text-center lg:mb-24 ${
              whyChooseVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Why work with us
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
              Not just another vendor.
              <br />
              <span className="text-accent">A partner who gets it.</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={`group flex flex-col items-center gap-5 rounded-2xl border border-[#526e50]/20 p-6 text-center transition-all duration-300 hover:border-[#526e50]/40 lg:p-8 ${
                  whyChooseVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: whyChooseVisible ? `${index * 80}ms` : "0ms",
                  backgroundColor: "#f2ebe6",
                }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#66879a]" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-lg text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
