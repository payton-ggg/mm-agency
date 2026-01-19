export interface Model {
  id: string;
  name: string;
  slug: string;
  category: "fashion" | "commercial" | "editorial";
  gender: "male" | "female" | "non-binary";
  height: number;
  age: number;
  measurements: {
    bust?: number;
    waist: number;
    hips: number;
    chest?: number;
  };
  experience: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  featured: boolean;
}

// Helper to get placeholder image URL (fashion portrait style)
export const getPlaceholderImage = (
  seed: string,
  width = 1200,
  height = 1600
): string => {
  // Using picsum with specific seeds for consistent images
  return `https://picsum.photos/seed/${seed}/${width}/${height}?grayscale`;
};

// Map model IDs to placeholder images
export const modelImageMap: Record<
  string,
  { hero: string; gallery: string[] }
> = {
  "model-001": {
    hero: getPlaceholderImage("alexandra-hero"),
    gallery: [
      getPlaceholderImage("alexandra-1"),
      getPlaceholderImage("alexandra-2"),
      getPlaceholderImage("alexandra-3"),
    ],
  },
  "model-002": {
    hero: getPlaceholderImage("marcus-hero"),
    gallery: [
      getPlaceholderImage("marcus-1"),
      getPlaceholderImage("marcus-2"),
      getPlaceholderImage("marcus-3"),
    ],
  },
  "model-003": {
    hero: getPlaceholderImage("sophia-hero"),
    gallery: [
      getPlaceholderImage("sophia-1"),
      getPlaceholderImage("sophia-2"),
      getPlaceholderImage("sophia-3"),
    ],
  },
  "model-004": {
    hero: getPlaceholderImage("kai-hero"),
    gallery: [
      getPlaceholderImage("kai-1"),
      getPlaceholderImage("kai-2"),
      getPlaceholderImage("kai-3"),
    ],
  },
  "model-005": {
    hero: getPlaceholderImage("lena-hero"),
    gallery: [
      getPlaceholderImage("lena-1"),
      getPlaceholderImage("lena-2"),
      getPlaceholderImage("lena-3"),
    ],
  },
  "model-006": {
    hero: getPlaceholderImage("ethan-hero"),
    gallery: [
      getPlaceholderImage("ethan-1"),
      getPlaceholderImage("ethan-2"),
      getPlaceholderImage("ethan-3"),
    ],
  },
  "model-007": {
    hero: getPlaceholderImage("zara-hero"),
    gallery: [
      getPlaceholderImage("zara-1"),
      getPlaceholderImage("zara-2"),
      getPlaceholderImage("zara-3"),
    ],
  },
  "model-008": {
    hero: getPlaceholderImage("lucas-hero"),
    gallery: [
      getPlaceholderImage("lucas-1"),
      getPlaceholderImage("lucas-2"),
      getPlaceholderImage("lucas-3"),
    ],
  },
};
