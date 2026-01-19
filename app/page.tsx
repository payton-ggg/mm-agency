import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ModelGrid } from "@/components/ModelGrid";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import modelsData from "@/data/models.json";
import { Model } from "@/data/types";

export default function Home() {
  const models = modelsData as Model[];
  const featuredModels = models.filter((model) => model.featured).slice(0, 8);

  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="py-20 px-6 bg-black-graphite">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Elite Representation</h2>
            <p className="text-lg text-gray-light leading-relaxed">
              We represent bold, powerful talent that commands attention. Our
              agency connects world-class models with the most prestigious
              brands in fashion and commercial markets globally.
            </p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2>Featured Models</h2>
              <Button variant="ghost" href="/models">
                View All
              </Button>
            </div>
            <ModelGrid models={featuredModels} />
          </div>
        </section>

        {/* For Brands & For Models */}
        <section className="py-20 px-6 bg-black-graphite">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* For Brands */}
            <div className="p-8 bg-black-deep border border-gray-mid/20 hover:border-red-glow transition-all duration-500 group">
              <h3 className="mb-4 group-hover:text-red-light transition-colors">
                For Brands
              </h3>
              <p className="text-gray-light mb-6">
                Book elite talent for your campaigns, runway shows, and
                commercial projects. Access our roster of professional models
                with proven portfolios.
              </p>
              <Button variant="primary" href="/for-brands">
                Learn More
              </Button>
            </div>

            {/* For Models */}
            <div className="p-8 bg-black-deep border border-gray-mid/20 hover:border-red-glow transition-all duration-500 group">
              <h3 className="mb-4 group-hover:text-red-light transition-colors">
                For Models
              </h3>
              <p className="text-gray-light mb-6">
                Join our agency and elevate your career. We provide professional
                representation, industry connections, and exposure to top-tier
                brands worldwide.
              </p>
              <Button variant="primary" href="/for-models">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
