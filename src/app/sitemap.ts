import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://rudolphtinker.com";
    const locales = ["en", "es", "ht", "ru"] as const;
    const lastModified = new Date();

    // Static routes based on your actual folder tree
    const staticRoutes = [
        { path: "", freq: "daily", priority: 1.0 }, // home (/en, /es, /ht, /ru)
        { path: "district-6", freq: "monthly", priority: 0.8 },
        { path: "donate", freq: "monthly", priority: 0.7 },
        { path: "endorsements", freq: "monthly", priority: 0.7 },
        { path: "gallery", freq: "monthly", priority: 0.6 },
        { path: "petition", freq: "monthly", priority: 0.7 },
        { path: "privacy", freq: "yearly", priority: 0.3 },
        { path: "veterans", freq: "monthly", priority: 0.6 },
        { path: "volunteer", freq: "monthly", priority: 0.7 },

        // About Rudolph section
        { path: "about-rudolph", freq: "monthly", priority: 0.8 },
        { path: "about-rudolph/bio", freq: "monthly", priority: 0.8 },
        { path: "about-rudolph/preparedness", freq: "monthly", priority: 0.7 },
        { path: "about-rudolph/why-i-want-to-run", freq: "monthly", priority: 0.9 }
    ] as const;

    /**
     * Priorities slugs: MUST match your data exactly.
     * You provided slugs like "/property-tax" — we remove the leading slash.
     */
    const prioritySlugs = [
        "property-tax",
        "government-services",
        "western-area-youth-engagement",
        "glades-first-initiative",
        "infrastructure",
        "public-safety",
        "small-business"
    ] as const;

    const entries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        // Static pages
        for (const route of staticRoutes) {
            const url =
                route.path === ""
                    ? `${baseUrl}/${locale}`
                    : `${baseUrl}/${locale}/${route.path}`;

            entries.push({
                url,
                lastModified,
                changeFrequency: route.freq,
                priority: route.priority
            });
        }

        // Priorities pages: /{locale}/priorities/{slug}
        for (const slug of prioritySlugs) {
            entries.push({
                url: `${baseUrl}/${locale}/priorities/${slug}`,
                lastModified,
                changeFrequency: "monthly",
                priority: 0.9
            });
        }
    }

    return entries;
}
