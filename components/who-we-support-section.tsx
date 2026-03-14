"use client";

import Image from "next/image";
import Link from "next/link";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { ArrowRight } from "lucide-react";

const whoWeSupport = [
  {
    title: "Coaches & consultants",
    description: "We help coaches and consultants streamline their client onboarding, manage their CRM systems, and automate follow-up sequences so they can focus on delivering transformative results. Our operations support ensures no lead falls through the cracks and your client experience runs seamlessly from discovery call to program completion.",
    imageSuggestions: [
      "Professional coach conducting a virtual session with a client",
      "Consultant reviewing strategy documents at a modern desk",
      "Coaching materials and notebooks organized on a workspace"
    ]
  },
  {
    title: "Service-based entrepreneurs",
    description: "For service-based entrepreneurs juggling multiple clients and projects, we handle the backend operations that drain your time and energy. We manage your scheduling, client communications, project workflows, and administrative tasks so you can scale your impact without burning out.",
    imageSuggestions: [
      "Entrepreneur working on multiple projects with organized systems",
      "Service business owner reviewing client deliverables",
      "Modern workspace with tools for managing client relationships"
    ]
  },
  {
    title: "Solo-preneurs with big goals",
    description: "You have the vision and drive, but you're wearing too many hats. We step in as your operations partner to handle everything from email management and social media to system setup and automation. With our support, you can focus on the high-impact work that moves your business forward while we ensure everything else runs smoothly.",
    imageSuggestions: [
      "Solo entrepreneur working at a laptop with organized workspace",
      "Vision board and goal planning materials on a desk",
      "Entrepreneur celebrating milestones with organized systems in background"
    ]
  },
  {
    title: "Small business owners ready to grow",
    description: "Growth requires solid systems, and that's where we come in. We help small business owners build scalable operations, implement automation that saves hours each week, and create workflows that support sustainable expansion. Our support ensures your business can handle growth without the chaos.",
    imageSuggestions: [
      "Small business owner reviewing growth metrics and charts",
      "Team collaboration meeting with organized project boards",
      "Business owner presenting to stakeholders with streamlined processes"
    ]
  },
  {
    title: "Course creators & digital educators",
    description: "Creating and launching courses requires seamless systems behind the scenes. We manage your student onboarding, email sequences, community platforms, and technical setup so you can focus on creating amazing content. We ensure your students have a smooth experience from enrollment to completion.",
    imageSuggestions: [
      "Course creator filming educational content with organized setup",
      "Digital educator presenting online with student engagement tools",
      "Course materials and learning platforms displayed on multiple screens"
    ]
  },
  {
    title: "Nonprofits & community leaders",
    description: "Your mission matters, and we help you maximize your impact by handling the operational tasks that can slow you down. We manage donor communications, event coordination, volunteer management, and administrative systems so you can focus on serving your community. Our support helps you operate more efficiently and reach more people.",
    imageSuggestions: [
      "Nonprofit team meeting with organized community impact materials",
      "Community leader organizing resources and programs",
      "Volunteer coordination board with streamlined processes"
    ]
  },
];

export function WhoWeSupportSection() {
  const { ref: supportRef, isVisible: supportVisible } = useAnimateOnScroll();
  const { ref: section1Ref, isVisible: section1Visible } = useAnimateOnScroll();
  const { ref: section2Ref, isVisible: section2Visible } = useAnimateOnScroll();
  const { ref: section3Ref, isVisible: section3Visible } = useAnimateOnScroll();
  const { ref: section4Ref, isVisible: section4Visible } = useAnimateOnScroll();
  const { ref: section5Ref, isVisible: section5Visible } = useAnimateOnScroll();
  const { ref: section6Ref, isVisible: section6Visible } = useAnimateOnScroll();

  return (
    <section className="flex min-h-[100dvh] flex-col justify-center px-6 py-20 lg:px-8 lg:py-28">
      <div
        ref={supportRef}
        className={`mx-auto max-w-6xl ${
          supportVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <div className="text-center mb-16 lg:mb-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our Clients
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Who we work with.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            If you create, teach, serve, or support others , we{"'"}re built
            for you.
          </p>
        </div>

        {/* Section 1: Coaches & Consultants */}
        <div ref={section1Ref} className="mb-20 lg:mb-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className={`order-2 lg:order-1 ${section1Visible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="rounded-2xl bg-card p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl mb-4">
                  {whoWeSupport[0].title}
                </h3>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#f2ebe6' }}>
                  {whoWeSupport[0].description}
                </p>
                <Link
                  href="https://calendly.com/thevirtualprincess/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all shadow-md"
                >
                  Book a Call
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
            <div className={`order-1 lg:order-2 ${section1Visible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#526e50' }}>
                <Image
                  src="/images/coaches-consultants.png"
                  alt="Coach or consultant presenting to team, collaborative success"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Service-based entrepreneurs */}
        <div ref={section2Ref} className="mb-20 lg:mb-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className={section2Visible ? "animate-slide-in-left" : "opacity-0"}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#526e50' }}>
                <Image
                  src="/images/service-based-businesses.png"
                  alt="Professional team collaboration in conference room"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className={section2Visible ? "animate-slide-in-right" : "opacity-0"}>
              <div className="rounded-2xl bg-background border border-border p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl mb-4">
                  {whoWeSupport[1].title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  {whoWeSupport[1].description}
                </p>
                <Link
                  href="https://calendly.com/thevirtualprincess/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all shadow-md"
                >
                  Book a Call
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Solo-preneurs */}
        <div ref={section3Ref} className="mb-20 lg:mb-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className={`order-2 lg:order-1 ${section3Visible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="rounded-2xl bg-card p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl mb-4">
                  {whoWeSupport[2].title}
                </h3>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#f2ebe6' }}>
                  {whoWeSupport[2].description}
                </p>
                <Link
                  href="https://calendly.com/thevirtualprincess/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all shadow-md"
                >
                  Book a Call
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
            <div className={`order-1 lg:order-2 ${section3Visible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#526e50' }}>
                <Image
                  src="/images/solo-entrepreneurs.png"
                  alt="Solo entrepreneur on a professional call"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Small business owners */}
        <div ref={section4Ref} className="mb-20 lg:mb-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className={section4Visible ? "animate-slide-in-left" : "opacity-0"}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#526e50' }}>
                <Image
                  src="/images/small-business-owners.png"
                  alt="Small business team collaborating and planning"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className={section4Visible ? "animate-slide-in-right" : "opacity-0"}>
              <div className="rounded-2xl bg-background border border-border p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl mb-4">
                  {whoWeSupport[3].title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  {whoWeSupport[3].description}
                </p>
                <Link
                  href="https://calendly.com/thevirtualprincess/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all shadow-md"
                >
                  Book a Call
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Course Creators */}
        <div ref={section5Ref} className="mb-20 lg:mb-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className={`order-2 lg:order-1 ${section5Visible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="rounded-2xl bg-card p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl mb-4">
                  {whoWeSupport[4].title}
                </h3>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#f2ebe6' }}>
                  {whoWeSupport[4].description}
                </p>
                <Link
                  href="https://calendly.com/thevirtualprincess/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all shadow-md"
                >
                  Book a Call
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
            <div className={`order-1 lg:order-2 ${section5Visible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#526e50' }}>
                <Image
                  src="/images/course-creators.png"
                  alt="Course creator planning content with whiteboard and content creation setup"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Nonprofits & community leaders */}
        <div ref={section6Ref}>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className={section6Visible ? "animate-slide-in-left" : "opacity-0"}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#526e50' }}>
                <Image
                  src="/images/nonprofit-team.png"
                  alt="Team hands together in unity and collaboration"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className={section6Visible ? "animate-slide-in-right" : "opacity-0"}>
              <div className="rounded-2xl bg-background border border-border p-8 lg:p-10 shadow-lg">
                <h3 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl mb-4">
                  {whoWeSupport[5].title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  {whoWeSupport[5].description}
                </p>
                <Link
                  href="https://calendly.com/thevirtualprincess/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-amber group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all shadow-md"
                >
                  Book a Call
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
