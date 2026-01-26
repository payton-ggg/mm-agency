"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549474843-ed8398284496?q=80&w=2070&auto=format&fit=crop"
          alt="linea12 Background"
          fill
          className="object-cover object-center grayscale brightness-[0.35] contrast-[1.1] scale-110 animate-[blob-slow_20s_infinite_alternate]"
          priority
        />
        {/* Grain/Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-bg/60 via-transparent to-brand-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="relative inline-block">
          <h1
            className={`text-7xl md:text-[12rem] font-serif leading-none tracking-tight transition-all duration-75 ${
              glitch
                ? "text-brand-primary animate-glitch-active drop-shadow-[0_0_25px_rgba(209,176,107,0.4)]"
                : "text-brand-text"
            }`}
          >
            linea<span className="italic font-light">12</span>
          </h1>

          {/* Glitch layers */}
          {glitch && (
            <>
              <span className="absolute top-0 left-0 -z-10 text-brand-primary opacity-70 translate-x-[2px] -translate-y-px animate-glitch-1">
                linea<span className="italic font-light">12</span>
              </span>
              <span className="absolute top-0 left-0 -z-10 text-brand-muted opacity-70 -translate-x-[2px] translate-y-px animate-glitch-2">
                linea<span className="italic font-light">12</span>
              </span>
            </>
          )}
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
        @keyframes blob-slow {
          from {
            transform: scale(1.1) translate(0, 0);
          }
          to {
            transform: scale(1.2) translate(-1%, -1%);
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
