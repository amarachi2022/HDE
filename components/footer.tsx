import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdSchedule, MdLocationOn } from "react-icons/md";

const paleCream = "#f2ebe6";

export function Footer() {
  return (
    <footer className="bg-[#526e50] px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          {/* Logo & tagline */}
          <div className="flex flex-col items-start gap-3">
            <Link href="/" className="inline-flex flex-col items-start gap-2">
              <span className="rounded-xl p-3" style={{ backgroundColor: paleCream }}>
                <Image src="/logo.png" alt="HerDigitalEdge" width={120} height={120} />
              </span>
              <span className="font-serif text-xl font-medium" style={{ color: paleCream }}>
                Her DigitalEdge
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: paleCream }}>
              Let&apos;s talk about what you need and how our team can help.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide" style={{ color: paleCream }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-sm transition-colors hover:opacity-80" style={{ color: paleCream }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm transition-colors hover:opacity-80" style={{ color: paleCream }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm transition-colors hover:opacity-80" style={{ color: paleCream }}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm transition-colors hover:opacity-80" style={{ color: paleCream }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wide" style={{ color: paleCream }}>
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm" style={{ color: paleCream }}>
                <MdEmail size={18} className="shrink-0" style={{ color: "#66879a" }} />
                <a href="mailto:hello@herdigitaledgehq.com" className="transition-colors hover:opacity-80">
                  hello@herdigitaledgehq.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: paleCream }}>
                <MdSchedule size={18} className="shrink-0" style={{ color: "#66879a" }} />
                Monday–Friday 10am – 6pm EST
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: paleCream }}>
                <MdLocationOn size={18} className="shrink-0" style={{ color: "#66879a" }} />
                Virtual, serving clients worldwide
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/herdigitaledge/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/15 p-2 transition-colors hover:bg-white/25"
                style={{ color: paleCream }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/share/177fN5aTvh/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/15 p-2 transition-colors hover:bg-white/25"
                style={{ color: paleCream }}
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/herdigitaledge_?igsh=ZWRmeGdscGswMTg5"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/15 p-2 transition-colors hover:bg-white/25"
                style={{ color: paleCream }}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8 text-center">
          <p className="text-xs" style={{ color: paleCream }}>
            © {new Date().getFullYear()} Her DigitalEdge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
