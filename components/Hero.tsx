import React from "react";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-red">
      {/* Animated Red Light Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-light rounded-full blur-[120px] animate-pulse-red" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-light rounded-full blur-[120px] animate-pulse-red"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center gap-8">
        <h1 className="animate-fade-in-up">
          Models.
          <br />
          Presence.
          <br />
          Power.
        </h1>

        <p
          className="text-lg md:text-xl text-gray-light max-w-2xl animate-fade-in-up mb-8"
          style={{ animationDelay: "0.2s" }}
        >
          Elite representation for the world's most compelling talent
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="primary" href="/models">
            View Models
          </Button>
          <Button variant="ghost" href="/for-brands">
            Book a Model
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-light rounded-full animate-pulse-red" />
        </div>
      </div>
    </section>
  );
};
