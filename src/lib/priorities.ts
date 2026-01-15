import prioritiesData from "../../priorities-json.json";

export type PriorityTile = {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  slug: string;
};

export type PriorityPageContent = {
  type: "paragraph" | "h2" | "list";
  text?: string;
  items?: string[];
};

export type PriorityPage = {
  slug: string;
  seo: {
    title: string;
    metaDescription: string;
  };
  h1: string;
  tldr: string[];
  shareExcerpt: string;
  whyThisMatters: string;
  content: PriorityPageContent[];
  bridgesTo?: {
    label: string;
    href: string;
  }[];
};

export const landingPageTiles: PriorityTile[] = prioritiesData.landingPage.tiles;
export const priorityPages: PriorityPage[] = prioritiesData.pages as PriorityPage[];

export function getPriorityTileBySlug(slug: string): PriorityTile | undefined {
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return landingPageTiles.find((t) => t.slug === normalizedSlug);
}

export function getPriorityPageBySlug(slug: string): PriorityPage | undefined {
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return priorityPages.find((p) => p.slug === normalizedSlug);
}
