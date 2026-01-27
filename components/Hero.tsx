"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Mesmerizing Atmospheric Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 shimmer-bg opacity-40" />

        {/* Large Atmospheric Blobs - wandering across the screen */}
        <div className="absolute top-1/4 -left-1/4 w-[70vw] h-[70vw] bg-black/18 rounded-full blur-[180px] animate-wander-1" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-brand-primary/16 rounded-full blur-[160px] animate-wander-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-brand-accent/40 rounded-full blur-[140px] animate-wander-3" />

        {/* Subtle Pearl Pulses */}
        <div className="absolute top-[10%] left-[20%] w-[25vw] h-[25vw] bg-white rounded-full blur-[100px] animate-pulse-slow" />
        <div
          className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-brand-primary/5 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />

        {/* Smooth Fade-out Mask at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-white via-white/80 to-transparent pointer-events-none" />
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
          animation: gradient-flow 20s ease infinite;
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

        @keyframes wander-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          33% {
            transform: translate(15vw, 15vh) scale(1.1);
            opacity: 1;
          }
          66% {
            transform: translate(5vw, -10vh) scale(0.95);
            opacity: 0.8;
          }
        }

        @keyframes wander-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1.1);
            opacity: 0.8;
          }
          33% {
            transform: translate(-20vw, -15vh) scale(1);
            opacity: 1;
          }
          66% {
            transform: translate(-10vw, 10vh) scale(1.15);
            opacity: 0.9;
          }
        }

        @keyframes wander-3 {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-45%, -55%) rotate(180deg) scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
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
