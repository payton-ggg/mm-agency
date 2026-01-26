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
    <section className="py-24 px-6 md:px-12 bg-brand-neutral text-brand-primary border-b border-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-brand-primary/10 pb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-primary/40 mb-4 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">
              Featured Faces
            </h2>
          </div>
          <button className="text-xs uppercase tracking-widest border-b border-brand-accent-hard pb-1 hover:text-brand-accent-hard/70 transition-colors text-brand-primary">
            View All Talent
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model) => (
            <div key={model.id} className="group cursor-pointer">
              <div className="relative aspect-3/4 overflow-hidden mb-4 rounded-sm">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-lg font-medium group-hover:text-brand-accent-hard transition-colors text-brand-primary">
                {model.name}
              </h3>
              <p className="text-xs text-brand-primary/50 uppercase tracking-widest">
                {model.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
