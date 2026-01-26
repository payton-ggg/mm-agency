import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedModels from "@/components/FeaturedModels";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <FeaturedModels />

      <Footer />
    </main>
  );
}
