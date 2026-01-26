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
        scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif tracking-widest uppercase"
        >
          Elite
        </Link>

        <div className="hidden md:flex items-center space-x-12 text-sm uppercase tracking-widest font-light">
          <Link
            href="/models"
            className="hover:text-brand-gray transition-colors"
          >
            Models
          </Link>
          <Link
            href="/about"
            className="hover:text-brand-gray transition-colors"
          >
            Agency
          </Link>
          <Link
            href="/journal"
            className="hover:text-brand-gray transition-colors"
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand-gray transition-colors"
          >
            Contact
          </Link>
        </div>

        <button className="border border-white/20 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Book Talent
        </button>
      </div>
    </nav>
  );
}
