// This file now only defines the priority IDs and order.
// Content is managed in the localization files (messages/*.json).

export interface PriorityTile {
  id: string;
  slug: string;
}

export const priorityIds = [
  "property-taxes",
  "government-services",
  "glades-first",
  "youth-engagement",
  "infrastructure",
  "public-safety",
  "small-business"
];

// Helper to get normalized slug from ID (matching en.json)
export const getPrioritySlugById = (id: string): string => {
  const mapping: Record<string, string> = {
    "property-taxes": "/property-tax",
    "government-services": "/government-services",
    "glades-first": "/glades-first-initiative",
    "youth-engagement": "/western-area-youth-engagement",
    "infrastructure": "/infrastructure",
    "public-safety": "/public-safety",
    "small-business": "/small-business"
  };
  return mapping[id] || `/${id}`;
};

export const landingPageTiles: PriorityTile[] = priorityIds.map(id => ({
  id,
  slug: getPrioritySlugById(id)
}));

export function getPriorityIdBySlug(slug: string): string | undefined {
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return landingPageTiles.find((t) => t.slug === normalizedSlug)?.id;
}
