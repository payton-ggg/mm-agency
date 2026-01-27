export default function AboutUs() {
  return (
    <section className="relative py-40 px-6 md:px-12 bg-white overflow-hidden">
      {/* Subtle Pearl Shimmer Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-12">
          <span className="text-[10px] uppercase tracking-[0.6em] text-brand-primary font-medium">
            Since 1998
          </span>
          <div className="h-px w-full bg-brand-primary/30 mt-2" />
        </div>

        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-20 text-brand-text">
          We don't just represent models. We curate{" "}
          <span className="italic font-light text-brand-primary">
            extraordinary
          </span>{" "}
          talent that defines the future of fashion.
        </h2>

        <div className="grid md:grid-cols-3 gap-16 text-left">
          <div className="space-y-6 group">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-brand-primary border-l-2 border-brand-primary/20 pl-4 group-hover:border-brand-primary transition-colors duration-500">
              Global Reach
            </h4>
            <p className="text-brand-muted text-sm font-light leading-relaxed">
              From the boutiques of Paris to the high-tech streets of Tokyo, our
              network spans the world's most influential capitals.
            </p>
          </div>
          <div className="space-y-6 group">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-brand-primary border-l-2 border-brand-primary/20 pl-4 group-hover:border-brand-primary transition-colors duration-500">
              Bespoke Talent
            </h4>
            <p className="text-brand-muted text-sm font-light leading-relaxed">
              We prioritize quality, ensuring each talent receives personalized
              guidance and long-term career strategy.
            </p>
          </div>
          <div className="space-y-6 group">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-brand-primary border-l-2 border-brand-primary/20 pl-4 group-hover:border-brand-primary transition-colors duration-500">
              Curation
            </h4>
            <p className="text-brand-muted text-sm font-light leading-relaxed">
              Our selection process is rigorous, focusing on presence,
              professionalism, and that indefinable "spark".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
