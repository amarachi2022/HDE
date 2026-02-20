import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Her DigitalEdge",
  description:
    "Get in touch with Her DigitalEdge. Book a discovery call or send us a message to start getting the support your business needs.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hidden form for Netlify form detection at build time */}
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="email" name="email" />
        <select name="service" />
        <textarea name="message" />
        <input type="text" name="bot-field" />
      </form>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
