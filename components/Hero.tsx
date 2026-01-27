"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="relative inline-block">
          <h1
            className={`text-7xl md:text-[12rem] font-serif leading-none tracking-tight transition-all duration-75`}
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
            120deg,
            #ffffff 0%,
            #fafaf9 25%,
            #f5f5f4 50%,
            #fafaf9 75%,
            #ffffff 100%
          );
          background-size: 200% 200%;
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

        @keyframes shimmer-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(10%, 15%) scale(1.1);
          }
          66% {
            transform: translate(-5%, 10%) scale(0.9);
          }
        }

        @keyframes shimmer-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-15%, -10%) scale(1.05);
          }
          66% {
            transform: translate(10%, -15%) scale(0.95);
          }
        }

        @keyframes shimmer-3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20%, 10%) rotate(180deg);
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

        @keyframes glitch-1 {
          0% {
            clip-path: inset(20% 0 30% 0);
          }
          20% {
            clip-path: inset(60% 0 10% 0);
          }
          40% {
            clip-path: inset(40% 0 50% 0);
          }
          60% {
            clip-path: inset(10% 0 70% 0);
          }
          80% {
            clip-path: inset(80% 0 5% 0);
          }
          100% {
            clip-path: inset(30% 0 40% 0);
          }
        }

        @keyframes glitch-2 {
          0% {
            clip-path: inset(15% 0 35% 0);
          }
          20% {
            clip-path: inset(55% 0 15% 0);
          }
          40% {
            clip-path: inset(35% 0 45% 0);
          }
          60% {
            clip-path: inset(5% 0 65% 0);
          }
          80% {
            clip-path: inset(75% 0 10% 0);
          }
          100% {
            clip-path: inset(25% 0 35% 0);
          }
        }
      `}</style>
    </section>
  );
}
