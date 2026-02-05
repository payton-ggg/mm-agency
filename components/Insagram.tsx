import Image from "next/image";
import Link from "next/link";

const instagramPosts = [
  {
    id: 1,
    image: "/models/1.png",
    link: "https://www.instagram.com/linea12models/",
  },
  {
    id: 2,
    image: "/models/2.png",
    link: "https://www.instagram.com/linea12models/",
  },
  {
    id: 3,
    image: "/models/3.png",
    link: "https://www.instagram.com/linea12models/",
  },
  {
    id: 4,
    image: "/models/4.png",
    link: "https://www.instagram.com/linea12models/",
  },
  {
    id: 5,
    image: "/models/5.png",
    link: "https://www.instagram.com/linea12models/",
  },
  {
    id: 6,
    image: "/models/6.png",
    link: "https://www.instagram.com/linea12models/",
  },
];

export default function Insagram() {
  return (
    <section className="py-32 bg-white text-brand-text overflow-hidden relative">
      <div className="w-full">
        {/* Header */}
        <Link
          href="https://www.instagram.com/linea12models/"
          target="_blank"
          className="flex flex-col items-center justify-center mb-24 group px-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-10 h-10 text-brand-text group-hover:text-brand-primary transition-colors duration-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text group-hover:text-brand-primary transition-colors duration-500">
              instagram
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-[0.6em] text-brand-muted font-medium group-hover:text-brand-primary transition-all duration-500 group-hover:tracking-[0.8em]">
            @linea12models
          </span>
        </Link>

        {/* Post Grid - FULL WIDTH */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              className="relative aspect-square overflow-hidden group bg-brand-accent shadow-sm"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              {/* Pearl/Gold Shimmer Overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-brand-primary/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </Link>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-24 flex justify-center px-6">
          <Link
            href="https://www.instagram.com/linea12models/"
            target="_blank"
            className="px-12 py-4 border border-brand-primary/30 text-[10px] uppercase tracking-[0.5em] text-brand-text hover:bg-brand-primary hover:text-white transition-all duration-500 rounded-xs"
          >
            Follow our journey
          </Link>
        </div>
      </div>
    </section>
  );
}
