"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-business.jpg"
          alt="Business owner working confidently at a modern desk"
          fill
          className="object-cover object-top"
          style={{ objectPosition: "50% 20%" }}
          priority
          quality={90}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-52 lg:pt-60 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-up font-serif text-5xl leading-tight tracking-tight text-white md:text-6xl md:leading-tight">
            <span className="text-balance">
              You don{"'"}t need more ideas.
            </span>
            <br />
            <span className="text-accent">You need implementation.</span>
          </h1>

          <p className="mt-8 mx-auto max-w-2xl animate-fade-up text-lg leading-relaxed text-white [animation-delay:80ms]">
            We help service-based business owners organize, automate, and manage their back-end operations so they can focus on growth while ensuring leads don't fall through, time isn't wasted, and systems run smoothly without constant micromanaging.
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:150ms]">
            <Link
              href="/contact"
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
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium transition-all hover:brightness-95"
              style={{ backgroundColor: "#f2ebe6", color: "hsl(30, 12%, 14%)" }}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
