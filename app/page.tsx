import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedModels from "@/components/FeaturedModels";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-neutral">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <FeaturedModels />

      {/* Secondary CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-brand-accent-soft/20 text-brand-primary flex justify-center items-center overflow-hidden relative border-t border-brand-primary/5">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent-hard/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-brand-primary">
            Ready to make your mark?
          </h2>
          <p className="text-brand-primary/60 mb-12 max-w-xl mx-auto font-light">
            We are always looking for fresh faces. Submit your portfolio to join
            our global network of elite talent.
          </p>
          <button className="bg-brand-accent-hard text-white font-bold px-12 py-5 rounded-none uppercase tracking-widest text-sm hover:bg-brand-primary transition-all duration-300 shadow-lg shadow-brand-accent-hard/20">
            Apply to Agency
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
