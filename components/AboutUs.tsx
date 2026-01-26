export default function AboutUs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.5em] text-white/30 mb-12 block">
          Since 1998
        </span>
        <h2 className="text-3xl md:text-5xl font-serif leading-relaxed mb-16">
          We don’t just represent models. We curate{" "}
          <span className="italic">extraordinary</span> talent that challenges
          the conventional standards of beauty.
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 font-semibold">
              Global Reach
            </h4>
            <p className="text-zinc-500 text-sm font-light leading-loose">
              From Paris to Tokyo, our network spans across the most influential
              fashion capitals of the world.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 font-semibold">
              Bespoke Talent
            </h4>
            <p className="text-zinc-500 text-sm font-light leading-loose">
              We focus on quality over quantity, ensuring each model receives
              personalized career guidance.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-4 font-semibold">
              Legacy
            </h4>
            <p className="text-zinc-500 text-sm font-light leading-loose">
              With over two decades of excellence, we have shaped the careers of
              some of the most iconic faces in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
