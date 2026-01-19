"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/models", label: "Models" },
    { href: "/for-brands", label: "For Brands" },
    { href: "/for-models", label: "For Models" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black-deep/80 backdrop-blur-md border-b border-gray-mid/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter hover:text-red-light transition-colors"
        >
          ELITE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider hover:text-red-light transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-red-light group-hover:w-full transition-all duration-300 shadow-[0_0_8px_hsla(0,100%,50%,0.6)]" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center group"
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black-graphite border-t border-gray-mid/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium uppercase tracking-wider hover:text-red-light transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
