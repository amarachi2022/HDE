"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Her DigitalEdge helped me get consistent for the first time in my business. I finally have backend systems that works and a team that executes it.",
    name: "Tanita P.",
    role: "Legal Professional",
  },
  {
    quote:
      "I finally stopped trying to do everything alone. I actually feel supported and can focus on my clients instead of drowning in admin work.",
    name: "Myk D.",
    role: "Business Consultant",
  },
  {
    quote:
      "My launch would not have happened without this team. Period. They handled the backend, the marketing, and kept me on track.",
    name: "Santi T.",
    role: "Podcast Creator",
  },
];

export function TestimonialsSection() {
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
            Testimonials
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            What our clients say.
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative flex flex-col rounded-2xl border-2 border-white/30 bg-[hsl(var(--pale-brown))] p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-xl lg:p-10 ${
                cardsVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: cardsVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <Quote size={32} className="mb-6 text-[#66879a]" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.name}-${i}`}
                    size={16}
                    className="fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                  />
                ))}
              </div>

              <p className="mb-8 flex-1 text-base leading-relaxed text-foreground">
                {`"${testimonial.quote}"`}
              </p>

              <div className="border-t border-border pt-6">
                <p className="font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
