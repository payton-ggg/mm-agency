import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string; board: string }>;
};

export default async function ModelBoardPage({ params }: Props) {
  const { slug, board } = await params;

  return (
    <main className="min-h-screen bg-white pt-32">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-12">
          <span className="text-brand-primary uppercase tracking-[0.4em] text-[10px] font-medium block mb-2">
            {slug} Models
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-text capitalize italic">
            {board.replace("-", " ")}
          </h1>
        </div>
        <p className="text-brand-muted max-w-2xl text-lg font-light leading-relaxed">
          The curated selection of our finest talent in the{" "}
          {board.replace("-", " ")} category.
        </p>
      </div>
      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug, board } = await params;
  const boardName = board
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const genderName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: `${genderName} ${boardName} | Linea12 Models`,
    description: `Official ${boardName} roster for ${genderName} models at Linea12 Models management.`,
  };
}
