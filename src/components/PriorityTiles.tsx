"use client";

import { Link } from "@/i18n/navigation";
import { landingPageTiles } from "@/lib/priorities";

export default function PriorityTiles() {
    return (
        <div className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {landingPageTiles.map((tile) => (
                        <Link
                            key={tile.id}
                            href={`/priorities${tile.slug}`}
                            className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-8 shadow-sm hover:border-patriot-red hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-patriot-red transition-colors">
                                    {tile.title}
                                </h3>
                                <p className="text-black/70 mb-6 line-clamp-3">
                                    {tile.subtitle}
                                </p>
                            </div>

                            <div className="inline-flex items-center gap-2 text-sm font-bold text-patriot-red group-hover:gap-3 transition-all">
                                {tile.cta}
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
