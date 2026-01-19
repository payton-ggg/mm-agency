import { Navigation } from "@/components/Navigation";
import { ModelGrid } from "@/components/ModelGrid";
import { Footer } from "@/components/Footer";
import modelsData from "@/data/models.json";
import { Model } from "@/data/types";

export const metadata = {
  title: "Models | Elite Model Agency",
  description: "Browse our roster of elite fashion and commercial models.",
};

export default function ModelsPage() {
  const models = modelsData as Model[];

  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-20">
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center md:text-left">
              <h1 className="mb-3">Our Models</h1>
              <p className="text-lg text-gray-light">
                Elite talent for fashion, commercial, and editorial projects
              </p>
            </div>

            <ModelGrid models={models} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
