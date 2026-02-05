"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h1 className="text-6xl font-serif mb-8 text-brand-text">Our Models</h1>
        <p className="text-brand-muted max-w-2xl text-lg font-light leading-relaxed">
          Discover our diverse roster of professional talent.
        </p>
      </div>
      <Footer />
    </main>
  );
}
