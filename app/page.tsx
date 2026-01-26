import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedModels from "@/components/FeaturedModels";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <FeaturedModels />

      {/* Secondary CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white text-black flex justify-center items-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">
            Ready to make your mark?
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto font-light">
            We are always looking for fresh faces. Submit your portfolio to join
            our global network of elite talent.
          </p>
          <button className="bg-black text-white px-12 py-5 rounded-none uppercase tracking-widest text-sm hover:bg-zinc-800 transition-all duration-300">
            Apply to Agency
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
