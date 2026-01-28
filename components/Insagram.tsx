import Image from "next/image";

export default function Insagram() {
  return (
    <section className="py-40 px-6 md:px-12 bg-white text-brand-text overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute -bottom-24 -left-24 w-full h-full bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative">
          <div className="relative aspect-3/4 w-full max-w-md mx-auto z-10 overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop"
              alt="Editorial Modeling"
              fill
              className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-primary/20 via-transparent to-transparent opacity-40" />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-12 -left-12 w-full h-full border border-brand-primary/10 z-0 hidden md:block" />
          <div className="absolute -bottom-16 -right-16 w-64 h-80 bg-brand-primary/5 z-0 blur-2xl hidden md:block" />
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand-primary mb-6 block font-medium">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-8xl font-serif mb-16 leading-[1.1] text-brand-text">
            High <span className="italic font-light">Fashion</span> <br />
            To Commercial
          </h2>

          <div className="space-y-16">
            <div className="group cursor-default">
              <div className="flex items-center gap-8 mb-4">
                <span className="text-brand-primary/40 text-sm font-serif group-hover:text-brand-primary transition-colors duration-500">
                  01
                </span>
                <h3 className="text-2xl font-serif tracking-widest group-hover:translate-x-2 transition-all duration-500 group-hover:text-brand-primary italic">
                  Runway
                </h3>
              </div>
              <p className="text-brand-muted font-light max-w-sm ml-16 text-sm leading-relaxed">
                Placing talent on the most prestigious runways from Milan to New
                York, sculpting the faces of tomorrow.
              </p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-8 mb-4">
                <span className="text-brand-primary/40 text-sm font-serif group-hover:text-brand-primary transition-colors duration-500">
                  02
                </span>
                <h3 className="text-2xl font-serif tracking-widest group-hover:translate-x-2 transition-all duration-500 group-hover:text-brand-primary italic">
                  Editorial
                </h3>
              </div>
              <p className="text-brand-muted font-light max-w-sm ml-16 text-sm leading-relaxed">
                Securing covers and spreads in leading global fashion
                publications, creating iconic visual legacies.
              </p>
            </div>

            <div className="group cursor-default">
              <div className="flex items-center gap-8 mb-4">
                <span className="text-brand-primary/40 text-sm font-serif group-hover:text-brand-primary transition-colors duration-500">
                  03
                </span>
                <h3 className="text-2xl font-serif tracking-widest group-hover:translate-x-2 transition-all duration-500 group-hover:text-brand-primary italic">
                  Digital
                </h3>
              </div>
              <p className="text-brand-muted font-light max-w-sm ml-16 text-sm leading-relaxed">
                Managing social presence and digital campaigns for the modern
                era, navigating the intersection of tech and style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
