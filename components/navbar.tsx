"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesPage = pathname.startsWith("/services");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--pale-brown))] border-b border-border shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex flex-col items-start gap-2 -mt-1 -ml-14">
          <Image src="/logo.png" alt="HDE Logo" width={150} height={150} />
          <span className="font-serif text-xl tracking-tight text-foreground" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-accent"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                isServicesPage ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-1">
                <div className="min-w-[220px] rounded-lg border border-border bg-[hsl(var(--pale-brown))] py-2 shadow-lg">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        pathname === `/services/${service.slug}`
                          ? "bg-accent/15 text-accent"
                          : "text-foreground hover:bg-accent/10 hover:text-accent"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "text-accent"
                : "text-foreground hover:text-accent"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="btn-book-amber rounded-lg px-5 py-2.5 text-sm font-semibold transition-all"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-[hsl(var(--pale-brown))] md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium ${
                  pathname === link.href ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Services expandable */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                className={`flex w-full items-center justify-between text-base font-medium ${
                  isServicesPage ? "text-accent" : "text-foreground"
                }`}
              >
                Services
                <ChevronDown size={20} className={`shrink-0 transition-transform ${mobileServicesExpanded ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesExpanded && (
                <div className="mt-2 flex flex-col gap-1 pl-3 border-l-2 border-accent/30">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`text-sm font-medium ${
                        pathname === `/services/${service.slug}` ? "text-accent" : "text-foreground hover:text-accent"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className={`text-base font-medium ${
                pathname === "/contact" ? "text-accent" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-book-amber mt-2 rounded-lg px-5 py-3 text-center text-sm font-semibold transition-all"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
