"use client";

import React from "react";

import Image from "next/image";
import { useState } from "react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@herdigitaledgehq.com",
    href: "mailto:hello@herdigitaledgehq.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 562 415 0175",
    href: "tel:+15624150175",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 913 897 4780",
    href: "tel:+2349138974780",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote, Serving clients nationwide",
    href: null,
  },
];

export function ContactContent() {
  const { ref: heroRef, isVisible: heroVisible } = useAnimateOnScroll();
  const { ref: formRef, isVisible: formVisible } = useAnimateOnScroll(0.1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    body.set("form-name", "contact");
    formData.forEach((value, key) => {
      if (typeof value === "string" && key !== "form-name") body.set(key, value);
    });
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (response.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Page Hero – full viewport background (like home), workspace image fill + object-cover */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.png"
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
            Get In Touch
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white md:text-6xl md:leading-tight">
            Let{"'"}s talk about{" "}
            <span className="text-accent">your business.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Whether you{"'"}re ready to get started or just exploring options,
            we{"'"}d love to hear from you. No pressure, no pitch, just a real
            conversation.
          </p>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent" />
        </div>
      </section>

      {/* Contact Form + Info – cream section */}
      <section className="flex min-h-[100dvh] flex-col justify-center px-6 py-20 lg:px-8 lg:py-28" style={{ backgroundColor: "#f2ebe6" }}>
        <div
          ref={formRef}
          className={`mx-auto grid max-w-6xl items-start gap-20 lg:grid-cols-5 lg:gap-24 ${
            formVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left: Info */}
          <div
            className={`lg:col-span-2 ${
              formVisible ? "animate-slide-in-left" : ""
            }`}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Reach Out
            </p>
            <h2 className="mb-6 font-serif text-3xl text-foreground">
              Reach out anytime.
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Fill out the form and we{"'"}ll get back to you within 24 hours.
              Or reach us directly using the info below.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#66879a]" style={{ backgroundColor: "rgba(102, 135, 154, 0.2)" }}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-base text-foreground transition-colors hover:text-accent">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Book a Call CTA – green card */}
            <div className="mt-12 rounded-2xl border border-white/20 p-8" style={{ backgroundColor: "#526e50" }}>
              <div className="mb-5 h-1 w-10 rounded-full bg-accent" />
              <h3 className="mb-2 font-serif text-xl text-white">
                Prefer to chat live?
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-white/90">
                Schedule a free discovery call and let{"'"}s map out what
                support looks like for your business.
              </p>
              <a
                href="https://calendly.com/thevirtualprincess/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all"
              >
                Book a Discovery Call
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`lg:col-span-3 ${
              formVisible ? "animate-slide-in-right" : ""
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/20 px-8 py-20 text-center" style={{ backgroundColor: "#526e50" }}>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white/90" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                  <Send size={28} />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-white">
                  Message sent!
                </h3>
                <p className="max-w-sm text-base text-white/90">
                  Thank you for reaching out. We{"'"}ll be in touch within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                name="contact"
                className="flex flex-col gap-6 rounded-2xl border border-white/20 p-8 lg:p-10"
                style={{ backgroundColor: "#526e50" }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-white"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="First name"
                      className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-white"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Surname"
                      className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
<label
                      htmlFor="email"
                      className="text-sm font-medium text-white"
                    >
                      Email
                    </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="flex flex-col gap-2">
<label
                      htmlFor="service"
                      className="text-sm font-medium text-white"
                    >
                      What are you interested in?
                    </label>
                  <select
                    id="service"
                    name="service"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Marketing Support">Marketing Support</option>
                    <option value="Operation Management">Operation Management</option>
                    <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                    <option value="Not sure yet, just exploring">Not sure yet, just exploring</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
<label
                      htmlFor="message"
                      className="text-sm font-medium text-white"
                    >
                      Message
                    </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a little about your business and what kind of support you're looking for..."
                    className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-book-amber group mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all"
                >
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
