"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const works = [
  {
    id: 1,
    title: "Vogue Editorial",
    location: "Paris, FR",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Glass Issue",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Velvet Dreams",
    location: "Milan, IT",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Nordic Minimal",
    location: "Stockholm, SE",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Neo-Classic",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop",
  },
];

// Tripling the array to create the illusion of infinity
const infiniteWorks = [...works, ...works, ...works];

export default function FeaturedModels() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(works.length);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Center initial position
    const itemWidth = container.offsetWidth * 0.35; // Rough estimate
    container.scrollLeft = itemWidth * works.length;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const singleSetWidth = container.scrollWidth / 3;

      // Infinite Loop Logic
      if (scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth;
      } else if (scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      }

      // Center Scaling Logic
      const center = scrollLeft + container.offsetWidth / 2;
      const items = container.querySelectorAll(".roulette-item");
      let closestIdx = 0;
      let minDistance = Infinity;

      items.forEach((item, idx) => {
        const itemCenter =
          (item as HTMLElement).offsetLeft +
          (item as HTMLElement).offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        const scale = Math.max(0.8, 1.05 - distance / 1000);
        const opacity = Math.max(0.4, 1 - distance / 1200);

        (item as HTMLElement).style.transform = `scale(${scale})`;
        (item as HTMLElement).style.opacity = `${opacity}`;

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx % works.length);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.offsetWidth * 0.3; // Approx item width
    container.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-white text-brand-text overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[9px] uppercase tracking-[0.6em] text-brand-primary mb-2 block font-medium">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-text">
              Latest <span className="italic font-light">Work</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-brand-primary/20 flex items-center justify-center group hover:bg-brand-primary hover:border-brand-primary transition-all duration-500 cursor-pointer"
              aria-label="Previous"
            >
              <svg
                className="w-4 h-4 text-brand-text group-hover:text-white transition-colors rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-brand-primary/20 flex items-center justify-center group hover:bg-brand-primary hover:border-brand-primary transition-all duration-500 cursor-pointer"
              aria-label="Next"
            >
              <svg
                className="w-4 h-4 text-brand-text group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Roulette */}
      <div
        ref={scrollContainerRef}
        className="flex gap-12 py-20 md:py-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory items-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {infiniteWorks.map((work, idx) => (
          <div
            key={`${work.id}-${idx}`}
            className="roulette-item flex-none w-[65vw] md:w-[24vw] snap-center transition-all duration-300 ease-out will-change-transform"
          >
            <div className="relative aspect-3/4 overflow-hidden rounded-xs mb-6 shadow-2xl">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 65vw, 28vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[8px] uppercase tracking-[0.3em] opacity-80 mb-1">
                  {work.location}
                </p>
                <h3 className="text-xl md:text-2xl font-serif italic leading-none">
                  {work.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
