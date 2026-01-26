import Image from "next/image";

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-brand-neutral text-brand-primary overflow-hidden relative border-b border-brand-primary/5">
      {/* Subtle background glow - very light */}
      <div className="absolute -bottom-24 -left-24 w-full h-full bg-brand-accent-soft/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="relative aspect-3/4 w-full max-w-md mx-auto z-10">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop"
              alt="Editorial Modeling"
              fill
              className="object-cover grayscale"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-12 -left-12 w-full h-full border border-brand-primary/10 z-0 hidden md:block" />
          <div className="absolute -bottom-12 -right-12 w-64 h-80 bg-brand-accent-soft/30 z-0 hidden md:block" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.5em] text-brand-muted mb-6 block">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight text-brand-primary">
            High Fashion <br />
            <span className="italic text-brand-accent-hard">To Commercial</span>
          </h2>

          <div className="space-y-12">
            <div className="group cursor-default">
              <div className="flex items-center gap-6 mb-4">
                <span className="text-brand-accent-hard text-lg font-serif italic">
                  01
                </span>
                <h3 className="text-2xl uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 group-hover:text-brand-accent-hard text-brand-primary">
                  Runway
                </h3>
              </div>
              <p className="text-brand-primary/60 font-light max-w-sm ml-12">
                Placing talent on the most prestigious runways from Milan to New
                York.
              </p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-6 mb-4">
                <span className="text-brand-accent-hard text-lg font-serif italic">
                  02
                </span>
                <h3 className="text-2xl uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 group-hover:text-brand-accent-hard text-brand-primary">
                  Editorial
                </h3>
              </div>
              <p className="text-brand-primary/60 font-light max-w-sm ml-12">
                Securing covers and spreads in leading global fashion
                publications.
              </p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-6 mb-4">
                <span className="text-brand-accent-hard text-lg font-serif italic">
                  03
                </span>
                <h3 className="text-2xl uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 group-hover:text-brand-accent-hard text-brand-primary">
                  Digital
                </h3>
              </div>
              <p className="text-brand-primary/60 font-light max-w-sm ml-12">
                Managing social presence and digital campaigns for the modern
                era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
