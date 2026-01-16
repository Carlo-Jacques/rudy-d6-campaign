"use client";

import { Link } from "@/i18n/navigation";
import { priorityIds, getPrioritySlugById } from "@/lib/priorities";
import { useTranslations } from "next-intl";

export default function PriorityTiles() {
    const t_priorities = useTranslations('priorities.items');
    const t_common = useTranslations('common');

    return (
        <div className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {priorityIds.map((id) => {
                        const slug = getPrioritySlugById(id);
                        const title = t_priorities(`${id}.title`);

                        // Get first few bullets for the summary
                        let bullets: string[] = [];
                        try {
                            const sections = t_priorities.raw(`${id}.sections`);
                            if (sections && sections[0] && sections[0].bullets) {
                                bullets = sections[0].bullets.slice(0, 3);
                            }
                        } catch (e) {
                            console.error(`Error getting bullets for ${id}`, e);
                        }

                        return (
                            <Link
                                key={id}
                                href={`/priorities${slug}`}
                                className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-8 shadow-sm hover:border-patriot-red hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-patriot-red transition-colors min-h-[3.5rem] flex items-center">
                                        {title}
                                    </h3>
                                    <ul className="space-y-3 mb-6">
                                        {bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex gap-3 items-start text-sm text-black/70">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-red" />
                                                <span className="line-clamp-2">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="inline-flex items-center gap-2 text-sm font-bold text-patriot-red group-hover:gap-3 transition-all">
                                    {t_common('viewAll')}
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
