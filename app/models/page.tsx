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

      <main className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="mb-4">Our Models</h1>
            <p className="text-xl text-gray-light">
              Elite talent for fashion, commercial, and editorial projects
            </p>
          </div>

          <ModelGrid models={models} />
        </div>
      </main>

      <Footer />
    </>
  );
}
