import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import modelsData from "@/data/models.json";
import { Model } from "@/data/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const models = modelsData as Model[];
  return models.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const models = modelsData as Model[];
  const model = models.find((m) => m.slug === params.slug);

  if (!model) {
    return {
      title: "Model Not Found",
    };
  }

  return {
    title: `${model.name} | Elite Model Agency`,
    description: `View ${model.name}'s portfolio - ${model.category} model`,
  };
}

export default function ModelProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const models = modelsData as Model[];
  const model = models.find((m) => m.slug === params.slug);

  if (!model) {
    notFound();
  }

  const heroImageUrl = `https://picsum.photos/seed/${model.id}-hero/1600/900?grayscale`;
  const galleryImages = [1, 2, 3].map(
    (i) => `https://picsum.photos/seed/${model.id}-${i}/800/1200?grayscale`
  );

  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-16">
        {/* Hero Image */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <img
            src={heroImageUrl}
            alt={model.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black-deep via-transparent to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,0,0,0.2)]" />
        </div>

        {/* Model Info */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Info Sidebar */}
            <div className="md:col-span-1">
              <h1 className="mb-2">{model.name}</h1>
              <p className="text-xl text-red-light uppercase tracking-wider mb-8">
                {model.category}
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-sm uppercase text-gray-light mb-1">
                    Height
                  </h4>
                  <p className="text-white-off">{model.height} cm</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase text-gray-light mb-1">
                    Age
                  </h4>
                  <p className="text-white-off">{model.age}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase text-gray-light mb-1">
                    Measurements
                  </h4>
                  <p className="text-white-off">
                    {model.measurements.bust || model.measurements.chest} /{" "}
                    {model.measurements.waist} / {model.measurements.hips}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm uppercase text-gray-light mb-3">
                  Experience
                </h4>
                <ul className="space-y-2">
                  {model.experience.map((exp, index) => (
                    <li key={index} className="text-white-off flex items-start">
                      <span className="text-red-light mr-2">•</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="primary" href="/for-brands" className="w-full">
                Book This Model
              </Button>
            </div>

            {/* Gallery */}
            <div className="md:col-span-2">
              <h3 className="mb-6">Portfolio</h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="aspect-3/4 overflow-hidden bg-black-graphite group"
                  >
                    <img
                      src={imageUrl}
                      alt={`${model.name} portfolio ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
