/**
 * Services data — Marketing Support, Operation Management, AI & Workflow Automation
 */
export const serviceSlugs = [
  "marketing-support",
  "operation-management",
  "ai-workflow-automation",
] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export const servicesData = [
  {
    slug: "marketing-support" as const,
    shortTitle: "Show up and stand out",
    title: "Marketing Support",
    tagline:
      "Content creation, email marketing, funnels, social media, and everything you need to show up and stand out.",
    description:
      "Stay visible with consistent content, email, and digital marketing so you don't miss leads.",
    longDescription:
      "Your content, engagement, and visibility don't have to fall through the cracks. We handle content creation, email marketing, funnels, social media, and the execution so your brand shows up and stands out.",
    perfectFor: [
      "Entrepreneurs who want consistent marketing",
      "Business owners who don't have time to create content",
      "Anyone who wants professional visibility without the overwhelm",
    ],
    ctaLabel: "Explore Marketing Support",
    imageSide: "left" as const,
    items: [
      "Content creation & scheduling",
      "Email marketing & nurture sequences",
      "Funnels & lead capture",
      "Social media management",
      "Brand and visibility strategy",
    ],
    outcome: "Consistent visibility. Fewer missed leads. More predictable growth.",
    iconKey: "trending-up",
    iconColor: "bg-[#66879a]/10 text-[#66879a]",
    borderHover: "hover:border-accent/40",
    whyMattersHeading: "Why marketing support matters",
    whyMattersIntro:
      "Your business can't grow if people don't know you exist. Most small business owners struggle with marketing for the same reasons.",
    whyMattersReasons: [
      "They don't have time to create content",
      "They don't know what to post or how often",
      "They aren't confident in email or funnel strategy",
      "They can't stay consistent on social",
      "They can't afford a full in-house team",
      "They need a partner who executes, not just advises",
    ],
    whoThisIsForSubheading: "Our Marketing Support is perfect for",
    whoThisIsForItems: [
      "Coaches & consultants who need consistent content",
      "Service-based business owners who don't have time to market",
      "Solo-preneurs who are doing everything alone",
      "Entrepreneurs who want professional visibility without the overwhelm",
      "Business owners who are tired of inconsistent or DIY marketing",
      "Anyone who wants to show up and stand out without the overwhelm",
    ],
    packages: [
      { name: "STARTER", price: "$500/month", hours: "Up to 20 hours/month", description: "Light but consistent marketing so you show up without the overwhelm.", features: ["Social media graphics & captions", "Email marketing", "Content scheduling", "Light funnel support"], disclaimer: "Full website builds priced separately.", highlighted: false },
      { name: "BASIC", price: "$750/month", hours: "Up to 30 hours/month", description: "More content volume, funnels and launch support.", features: ["Everything in Starter", "More content volume", "Launch support", "Strategy alignment"], disclaimer: "Full website builds priced separately.", highlighted: true },
      { name: "PREMIUM", price: "$1,500/month", hours: "Up to 40 hours/month", description: "Full marketing execution and dedicated support.", features: ["Everything in Basic", "Dedicated support", "Priority turnaround", "Higher-touch collaboration"], disclaimer: "Full website builds priced separately.", highlighted: false },
      { name: "CUSTOM", price: null, hours: null, customLabel: "Let's talk", customSubtext: "Tailored to you", description: "Scope and pricing built around your goals and budget.", features: ["Custom scope", "Flexible hours", "Tailored deliverables"], disclaimer: "Book a call to discuss.", highlighted: false },
    ],
    concerns: [
      { question: "What if I don't know what I need?", answer: "We start with a discovery call to understand your business, goals, and gaps. From there we recommend a plan – no guesswork required." },
      { question: "How long do I need to commit?", answer: "We offer flexible terms. Most clients start with a 3-month engagement so we can deliver results, but we can discuss what works for you." },
      { question: "What if I've had bad experiences with freelancers or agencies before?", answer: "We get it. We're a small, dedicated team that over-communicates and delivers. You'll have a clear point of contact and no surprises." },
      { question: "Can I scale up or down later?", answer: "Yes. As your needs change, we can adjust your plan or hours. We're here to grow with you." },
    ],
    processSteps: [
      { step: 1, title: "Book a Call", description: "Schedule a free discovery call. We'll discuss your business, your goals, and how marketing support can help you show up and stand out." },
      { step: 2, title: "Choose your Support", description: "We'll recommend a plan that fits your needs and budget. No cookie-cutter packages — tailored to you." },
      { step: 3, title: "We Get to Work", description: "Our team gets started. You get consistent content, email funnels, and social while you focus on what you do best." },
    ],
  },
  {
    slug: "operation-management" as const,
    shortTitle: "Focus on clients",
    title: "Operation Management",
    tagline:
      "Admin, scheduling, customer relationship management, event management, launch support and backend ops handled by us so you can focus on clients.",
    description:
      "Backend operations and admin so you can focus on clients and growth.",
    longDescription:
      "From admin and scheduling to CRM, event management, and launch support — our team handles the backend ops so you can focus on clients and what you do best.",
    perfectFor: [
      "Busy entrepreneurs doing everything themselves",
      "Small business owners who need structure",
      "Anyone who needs a trusted team behind them",
    ],
    ctaLabel: "Explore Operation Management",
    imageSide: "right" as const,
    items: [
      "Admin & scheduling",
      "Customer relationship management",
      "Event management",
      "Launch support",
      "Backend operations",
    ],
    outcome: "Less chaos. Clear systems. You focus on clients, we handle the rest.",
    iconKey: "layers",
    iconColor: "bg-[#66879a]/10 text-[#66879a]",
    borderHover: "hover:border-primary/30",
    whyMattersHeading: "Why operation management matters",
    whyMattersIntro:
      "Backend chaos keeps you stuck in the weeds. Most small business owners struggle with operations for the same reasons.",
    whyMattersReasons: [
      "They're doing admin and scheduling themselves",
      "They don't have a clear CRM or follow-up system",
      "Launches and events feel scattered",
      "They can't focus on clients because ops take over",
      "They can't afford a full in-house team",
      "They need a partner who executes, not just advises",
    ],
    whoThisIsForSubheading: "Our Operation Management is perfect for",
    whoThisIsForItems: [
      "Coaches & consultants who need admin and scheduling support",
      "Service-based business owners who don't have time for backend ops",
      "Solo-preneurs who are doing everything alone",
      "Entrepreneurs who want structure without hiring a full team",
      "Business owners who are tired of scattered launches and events",
      "Anyone who wants to focus on clients while we handle the rest",
    ],
    packages: [
      { name: "STARTER", price: "$500/month", hours: "Up to 20 hours/month", description: "Light but consistent ops support so you stay organized.", features: ["Admin & scheduling", "Email and calendar management", "Basic CRM setup", "Light launch support"], disclaimer: "Full website builds priced separately.", highlighted: false },
      { name: "BASIC", price: "$750/month", hours: "Up to 30 hours/month", description: "More coverage, CRM and event support.", features: ["Everything in Starter", "Full CRM management", "Event management", "Launch support"], disclaimer: "Full website builds priced separately.", highlighted: true },
      { name: "PREMIUM", price: "$1,500/month", hours: "Up to 40 hours/month", description: "Full operations and dedicated support.", features: ["Everything in Basic", "Dedicated support", "Priority turnaround", "Higher-touch collaboration"], disclaimer: "Full website builds priced separately.", highlighted: false },
      { name: "CUSTOM", price: null, hours: null, customLabel: "Let's talk", customSubtext: "Tailored to you", description: "Scope and pricing built around your goals and budget.", features: ["Custom scope", "Flexible hours", "Tailored deliverables"], disclaimer: "Book a call to discuss.", highlighted: false },
    ],
    concerns: [
      { question: "What if I don't know what I need?", answer: "We start with a discovery call to understand your business, goals, and gaps. From there we recommend a plan – no guesswork required." },
      { question: "How long do I need to commit?", answer: "We offer flexible terms. Most clients start with a 3-month engagement so we can deliver results, but we can discuss what works for you." },
      { question: "What if I've had bad experiences with freelancers or agencies before?", answer: "We get it. We're a small, dedicated team that over-communicates and delivers. You'll have a clear point of contact and no surprises." },
      { question: "Can I scale up or down later?", answer: "Yes. As your needs change, we can adjust your plan or hours. We're here to grow with you." },
    ],
    processSteps: [
      { step: 1, title: "Book a Call", description: "Schedule a free discovery call. We'll discuss your business, your goals, and how operation management can help you focus on clients." },
      { step: 2, title: "Choose your Support", description: "We'll recommend a plan that fits your needs and budget. No cookie-cutter packages — tailored to you." },
      { step: 3, title: "We Get to Work", description: "Our team gets started. You get admin, CRM, scheduling, and launch support while you focus on what you do best." },
    ],
  },
  {
    slug: "ai-workflow-automation" as const,
    shortTitle: "Scale with you",
    title: "AI & Workflow Automation",
    tagline:
      "Streamline your operations with intelligent automation, project management, and systems that scale with you.",
    description:
      "Intelligent automation and project management so your systems scale with your business.",
    longDescription:
      "We design and implement automation, project management, and workflows that scale with you — so operations run smoothly without constant manual work.",
    perfectFor: [
      "Entrepreneurs ready to automate repetitive work",
      "Business owners who need systems that scale",
      "Anyone who wants intelligent workflows and project management",
    ],
    ctaLabel: "Explore AI & Workflow Automation",
    imageSide: "left" as const,
    items: [
      "Workflow automation",
      "Project management systems",
      "AI-powered processes",
      "Scalable operations",
      "Process design & implementation",
    ],
    outcome: "Streamlined operations. Systems that scale. Less manual work.",
    iconKey: "target",
    iconColor: "bg-[#66879a]/10 text-[#66879a]",
    borderHover: "hover:border-[hsl(var(--slate-blue))]/30",
    whyMattersHeading: "Why AI & workflow automation matters",
    whyMattersIntro:
      "Manual, repetitive work slows growth. Most small business owners struggle with scale for the same reasons.",
    whyMattersReasons: [
      "They're doing repetitive tasks by hand",
      "They don't have clear workflows or project systems",
      "They aren't sure where to use automation",
      "Operations don't scale with their growth",
      "They can't afford a full in-house team",
      "They need a partner who executes, not just advises",
    ],
    whoThisIsForSubheading: "Our AI & Workflow Automation is perfect for",
    whoThisIsForItems: [
      "Coaches & consultants who need workflows that scale",
      "Service-based business owners who don't have time for manual tasks",
      "Solo-preneurs who are doing everything alone",
      "Entrepreneurs who want automation without the guesswork",
      "Business owners who are tired of repetitive, manual processes",
      "Anyone who wants systems that scale with their growth",
    ],
    packages: [
      { name: "STARTER", price: "$500/month", hours: "Up to 20 hours/month", description: "Light automation and workflow setup so you save time.", features: ["Workflow automation setup", "Project management basics", "Key process documentation", "Light integration support"], disclaimer: "Full website builds priced separately.", highlighted: false },
      { name: "BASIC", price: "$750/month", hours: "Up to 30 hours/month", description: "More automation, scaling workflows and support.", features: ["Everything in Starter", "Expanded automation", "AI-powered processes", "Ongoing optimization"], disclaimer: "Full website builds priced separately.", highlighted: true },
      { name: "PREMIUM", price: "$1,500/month", hours: "Up to 40 hours/month", description: "Full automation execution and dedicated support.", features: ["Everything in Basic", "Dedicated support", "Priority turnaround", "Higher-touch collaboration"], disclaimer: "Full website builds priced separately.", highlighted: false },
      { name: "CUSTOM", price: null, hours: null, customLabel: "Let's talk", customSubtext: "Tailored to you", description: "Scope and pricing built around your goals and budget.", features: ["Custom scope", "Flexible hours", "Tailored deliverables"], disclaimer: "Book a call to discuss.", highlighted: false },
    ],
    concerns: [
      { question: "What if I don't know what I need?", answer: "We start with a discovery call to understand your business, goals, and gaps. From there we recommend a plan – no guesswork required." },
      { question: "How long do I need to commit?", answer: "We offer flexible terms. Most clients start with a 3-month engagement so we can deliver results, but we can discuss what works for you." },
      { question: "What if I've had bad experiences with freelancers or agencies before?", answer: "We get it. We're a small, dedicated team that over-communicates and delivers. You'll have a clear point of contact and no surprises." },
      { question: "Can I scale up or down later?", answer: "Yes. As your needs change, we can adjust your plan or hours. We're here to grow with you." },
    ],
    processSteps: [
      { step: 1, title: "Book a Call", description: "Schedule a free discovery call. We'll discuss your business, your goals, and how AI & workflow automation can help you scale." },
      { step: 2, title: "Choose your Support", description: "We'll recommend a plan that fits your needs and budget. No cookie-cutter packages — tailored to you." },
      { step: 3, title: "We Get to Work", description: "Our team gets started. You get automation, project management, and workflows that scale while you focus on what you do best." },
    ],
  },
] as const;

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug) ?? null;
}

export function getServiceSlugs(): ServiceSlug[] {
  return [...serviceSlugs];
}
