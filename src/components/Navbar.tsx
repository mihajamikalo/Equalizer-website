"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/nos-services", label: "Services" },
  { href: "/nos-hotesses", label: "Hôtesses" },
  { href: "/album", label: "Portfolio" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/nous-contacter", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Equalizer Studio — Accueil"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-gold/30 group-hover:ring-gold/70 transition-all duration-300">
            <Image
              src="/logo-light.jpeg"
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden="true"
            />
          </div>
          <span className="text-white font-semibold text-lg tracking-[0.15em] uppercase hidden sm:block">
            Equalizer Studio
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200 pb-1 ${
                    isActive
                      ? "text-gold"
                      : "text-white/70 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button (desktop) */}
        <Link
          href="/nous-contacter"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold text-gold text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold hover:text-black transition-all duration-300"
        >
          Nous contacter
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="bg-background/98 border-t border-border px-6 py-8">
          <ul className="flex flex-col gap-6 list-none m-0 p-0 mb-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-base tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                      isActive ? "text-gold" : "text-white/70 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/nous-contacter"
            className="inline-flex items-center px-6 py-3 rounded-full border border-gold text-gold text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold hover:text-black transition-all duration-300"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </header>
  );
}



