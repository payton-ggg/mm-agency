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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 md:px-12 py-6 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-brand-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-serif tracking-widest uppercase transition-all duration-300 ${
            scrolled
              ? "text-brand-text hover:text-brand-primary"
              : "text-brand-text hover:text-brand-primary drop-shadow-sm"
          }`}
        >
          linea<span className="italic font-light">12</span>
        </Link>

        <div className="hidden md:flex items-center space-x-12 text-sm uppercase tracking-widest font-light">
          <Link
            href="/models"
            className="text-brand-text/70 hover:text-brand-primary transition-colors duration-300"
          >
            Models
          </Link>
          <Link
            href="/about"
            className="text-brand-text/70 hover:text-brand-primary transition-colors duration-300"
          >
            Agency
          </Link>
          <Link
            href="/journal"
            className="text-brand-text/70 hover:text-brand-primary transition-colors duration-300"
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className="text-brand-text/70 hover:text-brand-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        <button
          className={`px-6 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${
            scrolled
              ? "border-brand-primary/40 text-brand-primary hover:bg-brand-primary hover:text-white"
              : "border-brand-primary/40 text-brand-primary hover:bg-brand-primary hover:text-white"
          }`}
        >
          Book Talent
        </button>
      </div>
    </nav>
  );
}
