"use client";

import Link from "next/link";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Megaphone, Users, Bot, ArrowRight } from "lucide-react";

const iconClass = "text-[#66879a]";
const iconBgStyle = { backgroundColor: "rgba(102, 135, 154, 0.2)" };

const services = [
  {
    icon: Megaphone,
    title: "Marketing Support",
    slug: "marketing-support",
    description:
      "Content creation, email marketing, funnels, social media, and everything you need to show up and stand out.",
  },
  {
    icon: Users,
    title: "Operation Management",
    slug: "operation-management",
    description:
      "Admin, scheduling, Customer relationship management, Event management, Launch Support and backend ops handled by us so you can focus on clients.",
  },
  {
    icon: Bot,
    title: "AI & Workflow Automation",
    slug: "ai-workflow-automation",
    description:
      "Streamline your operations with intelligent automation, project management, and systems that scale with you.",
  },
];

export function HomeServicesPreview() {
  const { ref: headingRef, isVisible: headingVisible } = useAnimateOnScroll();
  const { ref: cardsRef, isVisible: cardsVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="flex min-h-[100dvh] flex-col justify-center bg-card px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`mx-auto mb-16 max-w-2xl text-center lg:mb-24 ${
            headingVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            Strategic support designed for growth.
          </h2>
          {/* Orange divider */}
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group flex flex-col rounded-2xl border-2 border-white/30 p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-xl lg:p-10 ${
                cardsVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: cardsVisible ? `${index * 150}ms` : "0ms",
                backgroundColor: "#f2ebe6",
              }}
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}
                style={iconBgStyle}
              >
                <service.icon size={24} />
              </div>
              <h3 className="mb-4 font-serif text-2xl text-foreground">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-accent transition-all group-hover:gap-3"
              >
                Learn more
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
