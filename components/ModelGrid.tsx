import React from "react";
import { ModelCard } from "./ModelCard";
import { Model } from "@/data/types";

interface ModelGridProps {
  models: Model[];
}

export const ModelGrid: React.FC<ModelGridProps> = ({ models }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {models.map((model) => (
        <ModelCard key={model.id} model={model} />
      ))}
    </div>
  );
};
