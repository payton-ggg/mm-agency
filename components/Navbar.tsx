"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 ease-in-out px-6 md:px-12 py-6 ${
          scrolled && !isOpen
            ? "bg-white/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-brand-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-serif tracking-[0.2em] uppercase transition-all duration-500 z-101 ${
              isOpen ? "text-brand-text" : "text-brand-text"
            }`}
          >
            linea<span className="italic font-light">12</span>
          </Link>

          <button
            onClick={toggleMenu}
            className="relative z-101 w-8 h-8 flex flex-col justify-center items-center group cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-8 h-px bg-brand-text transition-all duration-500 ease-in-out ${
                isOpen ? "rotate-45 translate-y-px" : "mb-2"
              }`}
            />
            <span
              className={`block w-8 h-px bg-brand-text transition-all duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "mb-2"
              }`}
            />
            <span
              className={`block w-8 h-px bg-brand-text transition-all duration-500 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-px" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed inset-0 z-90 bg-[#FDFCFB] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Decorative Background - Fixed */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/50 rounded-full blur-[100px]" />
        </div>

        {/* Scrollable Content Container */}
        <div className="relative h-full overflow-y-auto overflow-x-hidden">
          <div className="min-h-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-0 flex flex-col md:justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
              {/* Left: General Navigation */}
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                {["Models", "Agency", "Journal", "Contact"].map((item, idx) => (
                  <div key={item} className="overflow-hidden">
                    <Link
                      href={`/${item.toLowerCase()}`}
                      onClick={toggleMenu}
                      className={`block text-3xl md:text-5xl lg:text-6xl font-serif uppercase tracking-tighter hover:text-brand-primary transition-all duration-500 ${
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }`}
                      style={{ transitionDelay: `${idx * 100 + 400}ms` }}
                    >
                      {item}
                    </Link>
                  </div>
                ))}

                <div
                  className={`pt-6 md:pt-8 border-t border-brand-primary/10 flex flex-wrap gap-6 md:gap-8 text-[10px] uppercase tracking-[0.4em] text-brand-muted transition-all duration-700 delay-700 ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <a
                    href="https://www.instagram.com/linea12models/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors"
                  >
                    TikTok
                  </a>
                  <a
                    href="#"
                    className="hover:text-brand-primary transition-colors"
                  >
                    Vogue
                  </a>
                </div>
              </div>

              {/* Right: Boards */}
              <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-start">
                {/* Woman Board */}
                <div
                  className={`w-full space-y-6 md:space-y-10 transition-all duration-1000 delay-500 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-12"
                  }`}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-light text-brand-text leading-none">
                      Woman
                    </h3>
                    <span className="text-brand-primary font-serif text-base md:text-lg lg:text-xl mt-1 md:mt-2">
                      142
                    </span>
                  </div>
                  <div className="flex flex-col items-start space-y-4 md:space-y-5 ml-1">
                    <Link
                      href="/models/woman/main-board"
                      onClick={toggleMenu}
                      className="group relative block text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-muted hover:text-brand-primary transition-colors"
                    >
                      Main Board
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary/40 transition-all duration-500 group-hover:w-full" />
                    </Link>
                    <Link
                      href="/models/woman/development"
                      onClick={toggleMenu}
                      className="group relative block text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-muted hover:text-brand-primary transition-colors"
                    >
                      Development
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary/40 transition-all duration-500 group-hover:w-full" />
                    </Link>
                    <Link
                      href="/models/woman"
                      onClick={toggleMenu}
                      className="group relative block text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-text font-medium hover:text-brand-primary transition-colors pt-2"
                    >
                      All Models
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary transition-all duration-500 group-hover:w-full" />
                    </Link>
                  </div>
                </div>

                {/* Man Board */}
                <div
                  className={`w-full space-y-6 md:space-y-10 transition-all duration-1000 delay-700 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-12"
                  }`}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-light text-brand-text leading-none">
                      Man
                    </h3>
                    <span className="text-brand-primary font-serif text-base md:text-lg lg:text-xl mt-1 md:mt-2">
                      86
                    </span>
                  </div>
                  <div className="flex flex-col items-start space-y-4 md:space-y-5 ml-1">
                    <Link
                      href="/models/man/main-board"
                      onClick={toggleMenu}
                      className="group relative block text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-muted hover:text-brand-primary transition-colors"
                    >
                      Main Board
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary/40 transition-all duration-500 group-hover:w-full" />
                    </Link>
                    <Link
                      href="/models/man/development"
                      onClick={toggleMenu}
                      className="group relative block text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-muted hover:text-brand-primary transition-colors"
                    >
                      Development
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary/40 transition-all duration-500 group-hover:w-full" />
                    </Link>
                    <Link
                      href="/models/man"
                      onClick={toggleMenu}
                      className="group relative block text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-text font-medium hover:text-brand-primary transition-colors pt-2"
                    >
                      All Models
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary transition-all duration-500 group-hover:w-full" />
                    </Link>
                  </div>
                </div>

                {/* CTA Button - Mobile positioned in flow, Desktop absolute */}
                <div
                  className={`w-full md:hidden transition-all duration-700 delay-800 mt-8 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="w-full px-8 py-4 border border-brand-primary/30 text-[10px] uppercase tracking-[0.5em] text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-500">
                    Start a Career
                  </button>
                </div>
              </div>
            </div>

            {/* Extra padding at bottom for mobile scroll comfort */}
            <div className="h-24 md:hidden" />
          </div>
        </div>

        {/* CTA Button - Desktop only (absolute positioned) */}
        <div
          className={`hidden md:block absolute bottom-12 right-6 md:right-12 transition-all duration-700 delay-800 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="px-12 py-4 border border-brand-primary/30 text-[10px] uppercase tracking-[0.5em] text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-500">
            Start a Career
          </button>
        </div>
      </div>
    </>
  );
}
