"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549474843-ed8398284496?q=80&w=2070&auto=format&fit=crop"
          alt="Elite Model Agency Hero"
          fill
          className="object-cover object-center brightness-[0.6] grayscale"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-serif mb-6 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
          Elegance <br />
          <span className="italic">Redefined</span>
        </h1>
        <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide opacity-0 animate-[fade-in-up_1s_ease-out_0.3s_forwards]">
          Representing the world's most iconic faces. Dedicated to the art of
          high-fashion and editorial representation.
        </p>

        <div className="mt-12 opacity-0 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
          <button className="group relative px-10 py-4 overflow-hidden border border-white/30 text-sm uppercase tracking-[0.3em]">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              View Portfolio
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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
