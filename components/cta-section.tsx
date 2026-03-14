"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <section className="flex min-h-[100dvh] flex-col justify-center px-6 py-20 lg:px-8 lg:py-28">
      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-white/20 px-8 py-20 text-center lg:px-16 lg:py-24 ${
          isVisible ? "animate-scale-in" : "opacity-0"
        }`}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-background.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
            Ready to grow?
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            Ready for support that actually moves your business forward?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Let{"'"}s talk about what you need and how our team can help. You
            bring the vision, we handle the implementation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <a
              href="mailto:hello@herdigitaledgehq.com"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
