"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { ArrowRight } from "lucide-react";

export function HomeAboutPreview() {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <section className="flex min-h-[100dvh] flex-col justify-center bg-[#526e50] px-6 py-20 lg:px-8 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-2 lg:gap-24 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Image */}
        <div
          className={`relative ${isVisible ? "animate-slide-in-left" : ""}`}
        >
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/who-we-are.png"
              alt="Bright modern home office with white walls, desk, natural light from window, and plants"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-white/20" />
        </div>

        {/* Text */}
        <div className={isVisible ? "animate-slide-in-right" : ""}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Who We Are
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            Running a business shouldn{"'"}t feel like you{"'"}re doing
            everything alone.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            At Her DigitalEdge, we give you hands-on back-end operations support so you can stop juggling every task and actually build the business you've been working toward. We organize, automate, and manage your operations, ensuring leads don't fall through, time isn't wasted, and systems run smoothly.
          </p>
          <div className="my-8 h-px w-16 bg-white/50" />
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-base font-medium text-accent transition-all hover:gap-3"
          >
            Learn more about us
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
