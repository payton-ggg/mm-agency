"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 ${
        scrolled
          ? "bg-brand-neutral/95 backdrop-blur-md py-4 shadow-sm border-b border-brand-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-serif tracking-widest uppercase transition-colors ${
            scrolled
              ? "text-brand-primary hover:text-brand-accent-hard"
              : "text-brand-primary hover:text-brand-accent-hard"
          }`}
        >
          linea12
        </Link>

        <div className="hidden md:flex items-center space-x-12 text-sm uppercase tracking-widest font-light">
          <Link
            href="/models"
            className={`transition-colors ${
              scrolled
                ? "text-brand-primary/80 hover:text-brand-primary"
                : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            Models
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              scrolled
                ? "text-brand-primary/80 hover:text-brand-primary"
                : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            Agency
          </Link>
          <Link
            href="/journal"
            className={`transition-colors ${
              scrolled
                ? "text-brand-primary/80 hover:text-brand-primary"
                : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className={`transition-colors ${
              scrolled
                ? "text-brand-primary/80 hover:text-brand-primary"
                : "text-brand-primary/80 hover:text-brand-primary"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
            scrolled
              ? "border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white"
              : "border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white"
          }`}
        >
          Book Talent
        </button>
      </div>
    </nav>
  );
}
