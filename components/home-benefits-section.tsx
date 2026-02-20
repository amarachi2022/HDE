"use client";

import Image from "next/image";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Reclaim your time",
    description:
      "Stop spending hours on admin, scheduling, and content. We handle the day-to-day so you can focus on what only you can do , serving clients and growing your business.",
  },
  {
    title: "Never miss a lead again",
    description:
      "We set up and manage systems so every inquiry is captured, followed up, and moved through your pipeline. No more lost opportunities or dropped balls.",
  },
  {
    title: "Consistent presence without the grind",
    description:
      "Get a steady flow of content, emails, and marketing that actually represents your brand without you having to show up every day. We keep you visible while you stay focused.",
  },
  {
    title: "Systems that scale with you",
    description:
      "From automation to workflows to CRM setup, we build the backbone of your business so that as you grow, your operations can keep up without constant firefighting.",
  },
  {
    title: "A team that actually shows up",
    description:
      "No ghosting, no endless handoffs. You get reliable support week in and week out, with clear communication and someone who values your business.",
  },
  {
    title: "Focus on revenue, not busywork",
    description:
      "Spend your energy on high-impact work: offers, sales, delivery, and strategy. We take care of the rest so your revenue can grow without the burnout.",
  },
];

export function HomeBenefitsSection() {
  const { ref: headingRef, isVisible: headingVisible } = useAnimateOnScroll();
  const { ref: listRef, isVisible: listVisible } = useAnimateOnScroll(0.08);

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
      {/* Video background (fallback to image if video missing) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-team.jpg"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-top"
          aria-hidden
        >
          <source src="/6036424_Team_Business_3840x2160.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          ref={headingRef}
          className={`mx-auto mb-16 max-w-2xl text-center lg:mb-24 ${
            headingVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            What you get
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            What you can benefit.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Real support that translates into real results for your business.
          </p>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
        </div>

        <div ref={listRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex flex-col rounded-2xl border-2 border-white/20 p-6 transition-all hover:border-accent/50 hover:shadow-lg lg:p-8 ${
                listVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                backgroundColor: "#f2ebe6",
                animationDelay: listVisible ? `${index * 60}ms` : "0ms",
              }}
            >
              <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#66879a]" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 className="mb-2 font-serif text-xl text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
