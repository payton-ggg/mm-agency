import React from "react";
import Link from "next/link";
import { Model } from "@/data/types";

interface ModelCardProps {
  model: Model;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  // Use placeholder image URL
  const imageUrl = `https://picsum.photos/seed/${model.id}/800/1200?grayscale`;

  return (
    <Link href={`/models/${model.slug}`} className="group block">
      <div className="relative aspect-3/4 overflow-hidden bg-black-graphite">
        {/* Image */}
        <img
          src={imageUrl}
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Red Glow Overlay on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-t from-red-light/20 via-transparent to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,0,0,0.3)]" />
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black-deep via-black-deep/80 to-transparent">
          <h3 className="text-xl font-bold mb-1 group-hover:text-red-light transition-colors">
            {model.name}
          </h3>
          <p className="text-sm text-gray-light uppercase tracking-wider">
            {model.category}
          </p>
        </div>
      </div>
    </Link>
  );
};
