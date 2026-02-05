import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ModelCategoryPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-white pt-32">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h1 className="text-6xl font-serif mb-8 text-brand-text capitalize">
          {slug} Models
        </h1>
        <p className="text-brand-muted max-w-2xl text-lg font-light leading-relaxed">
          Exploring our {slug} division with excellence and style.
        </p>
      </div>
      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Models | Linea12`,
    description: `Professional ${slug} models collection by Linea12 Models agency.`,
  };
}
