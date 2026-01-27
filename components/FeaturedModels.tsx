"use client";

import Image from "next/image";

const models = [
  {
    id: 1,
    name: "Aria Montgomery",
    category: "High Fashion",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Julian Brooks",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Elena Rossi",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Stefan Vancic",
    category: "Runway",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function FeaturedModels() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white text-brand-text">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-primary mb-4 block font-medium">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-text leading-tight">
              Featured <span className="italic font-light">Faces</span>
            </h2>
            <p className="mt-6 text-brand-muted font-light leading-loose text-sm">
              Discover our diverse roster of exceptional talent, chosen for
              their unique presence and professional excellence.
            </p>
          </div>
          <button className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-brand-primary/30 pb-2 hover:border-brand-primary transition-all duration-300 text-brand-text">
            View All Talent
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {models.map((model) => (
            <div key={model.id} className="group cursor-pointer">
              <div className="relative aspect-3/4 overflow-hidden mb-6 rounded-sm bg-brand-accent">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Pearl/Gold Shimmer Overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-brand-primary/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 border border-brand-primary/0 group-hover:border-brand-primary/20 transition-all duration-700 m-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-serif group-hover:text-brand-primary transition-colors duration-300">
                  {model.name}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="h-px w-4 bg-brand-primary/40" />
                  <p className="text-[10px] text-brand-muted uppercase tracking-[0.2em]">
                    {model.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
