"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Mesmerizing Iridescent & Shimmer Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 shimmer-bg opacity-50" />

        {/* Dark Circular Blurs on Edges */}
        <div className="absolute top-1/2 -left-[10%] w-[40vw] h-[40vw] -translate-y-1/2 bg-black/5 rounded-full blur-[120px] animate-blob-float-left" />
        <div className="absolute top-1/2 -right-[10%] w-[40vw] h-[40vw] -translate-y-1/2 bg-black/5 rounded-full blur-[120px] animate-blob-float-right" />

        {/* Subtle Pearl Shimmer */}
        <div className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] bg-brand-accent/40 rounded-full blur-[100px] animate-shimmer-1" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="relative inline-block">
          <h1
            className={`text-7xl md:text-[12rem] font-serif leading-none tracking-tight transition-all duration-75 text-brand-text`}
          >
            linea<span className="italic font-light">12</span>
          </h1>
        </div>

        <p className="mt-8 text-brand-muted text-xs md:text-sm uppercase tracking-[0.8em] font-light animate-[fade-in_2s_ease-out]">
          Management <span className="text-brand-primary">/</span> Talent
          Representation
        </p>

        <div className="mt-16 flex justify-center gap-12 text-[10px] uppercase tracking-[0.4em] text-brand-muted font-light">
          <span className="hover:text-brand-primary cursor-pointer transition-colors">
            London
          </span>
          <span className="hover:text-brand-primary cursor-pointer transition-colors">
            Paris
          </span>
          <span className="hover:text-brand-primary cursor-pointer transition-colors">
            Milan
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-linear-to-b from-brand-primary/40 to-transparent" />
      </div>

      <style jsx>{`
        .shimmer-bg {
          background: linear-gradient(
            -45deg,
            #ffffff,
            #fdfcfb,
            #f5f1e8,
            #fafaf9,
            #ffffff
          );
          background-size: 400% 400%;
          animation: gradient-flow 15s ease infinite;
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes blob-float-left {
          0%,
          100% {
            transform: translate(0, -50%) scale(1);
          }
          50% {
            transform: translate(5%, -45%) scale(1.1);
          }
        }

        @keyframes blob-float-right {
          0%,
          100% {
            transform: translate(0, -50%) scale(1.1);
          }
          50% {
            transform: translate(-5%, -55%) scale(1);
          }
        }

        @keyframes shimmer-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-10%, 10%) scale(1.2);
            opacity: 0.6;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
