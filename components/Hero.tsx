"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Mesmerizing Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 blur-[120px] rounded-full animate-morph-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-primary/10 blur-[150px] rounded-full animate-morph-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/3 blur-[100px] rounded-full animate-pulse-slow" />

        <Image
          src="https://images.unsplash.com/photo-1549474843-ed8398284496?q=80&w=2070&auto=format&fit=crop"
          alt="linea12 Background"
          fill
          className="object-cover object-center grayscale brightness-[0.35] contrast-[1.1] scale-110 animate-[blob-slow_25s_infinite_alternate] mix-blend-overlay"
          priority
        />

        {/* Shimmering Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />

        {/* Dynamic Shadow Vignette */}
        <div className="absolute inset-0 bg-radial-[at_center,transparent_0%,black_90%] opacity-60" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-bg via-transparent to-brand-bg opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="relative inline-block">
          <h1
            className={`text-7xl md:text-[12rem] font-serif leading-none tracking-tight transition-all duration-75 mix-blend-plus-lighter `}
          >
            linea<span className="italic font-light">12</span>
          </h1>
        </div>

        <div className="relative overflow-hidden py-4">
          <p className="mt-4 text-brand-muted text-xs md:text-sm uppercase tracking-[0.8em] font-light animate-[fade-in_2s_ease-out]">
            Management <span className="text-brand-primary">/</span> Talent
            Representation
          </p>
          {/* Shimmer line underneath */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-linear-to-r from-transparent via-brand-primary/50 to-transparent animate-shimmer" />
        </div>

        <div className="mt-16 flex justify-center gap-12 text-[10px] uppercase tracking-[0.4em] text-brand-muted/60 font-light">
          {["London", "Paris", "Milan"].map((city) => (
            <span
              key={city}
              className="hover:text-brand-primary cursor-pointer transition-all duration-500 hover:tracking-[0.6em]"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* Mesmerizing Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group">
        <div className="w-px h-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-brand-primary/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-brand-primary animate-scroll-line" />
        </div>
      </div>

      <style jsx>{`
        @keyframes morph-slow {
          0%,
          100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(5%, 10%) rotate(10deg);
          }
          66% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            transform: translate(-5%, 5%) rotate(-5deg);
          }
        }

        @keyframes morph-slower {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 50% 30% 70% 50%;
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-10%, -5%) scale(1.1) rotate(5deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-150%) scaleX(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scaleX(1);
          }
          100% {
            transform: translateX(50%) scaleX(0.5);
            opacity: 0;
          }
        }

        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -52%) scale(1.05);
          }
        }

        .animate-morph-slow {
          animation: morph-slow 20s infinite alternate ease-in-out;
        }
        .animate-morph-slower {
          animation: morph-slower 25s infinite alternate ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s infinite alternate ease-in-out;
        }
        .animate-shimmer {
          animation: shimmer 4s infinite linear;
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s infinite cubic-bezier(0.65, 0, 0.35, 1);
        }

        @keyframes blob-slow {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1.2) translate(-2%, -1%);
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
