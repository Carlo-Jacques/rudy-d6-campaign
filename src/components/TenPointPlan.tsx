"use client";

import { Link } from "@/i18n/navigation";
import { priorities } from "@/lib/priorities";

export default function TenPointPlanModal() {
  // Split priorities into two columns: first 5 and last 5
  const leftColumn = priorities.slice(0, 5);
  const rightColumn = priorities.slice(5, 10);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Priorities 1-5 */}
          <div className="space-y-6">
            {leftColumn.map((item) => (
              <div
                key={item.id}
                className="group rounded-xl border border-black/10 bg-white p-6 hover:border-patriot-blue hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="text-3xl lg:text-4xl font-bold text-patriot-blue">
                      {String(item.number).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-bold text-black mb-3 leading-tight group-hover:text-patriot-red transition-colors">
                      {item.title}
                    </h3>
                    <ul className="space-y-2 text-sm lg:text-base text-black/70 mb-4">
                      {item.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-red" />
                          <span className="line-clamp-2">{bullet}</span>
                        </li>
                      ))}
                      {item.bullets.length > 3 && (
                        <li className="text-xs text-black/50 italic">
                          +{item.bullets.length - 3} more
                        </li>
                      )}
                    </ul>
                    <Link
                      href={`/priorities/${item.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-patriot-red hover:text-patriot-blue transition-colors"
                    >
                      Read more
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Priorities 6-10 */}
          <div className="space-y-6">
            {rightColumn.map((item) => (
              <div
                key={item.id}
                className="group rounded-xl border border-black/10 bg-white p-6 hover:border-patriot-blue hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="text-3xl lg:text-4xl font-bold text-patriot-blue">
                      {String(item.number).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-bold text-black mb-3 leading-tight group-hover:text-patriot-red transition-colors">
                      {item.title}
                    </h3>
                    <ul className="space-y-2 text-sm lg:text-base text-black/70 mb-4">
                      {item.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-red" />
                          <span className="line-clamp-2">{bullet}</span>
                        </li>
                      ))}
                      {item.bullets.length > 3 && (
                        <li className="text-xs text-black/50 italic">
                          +{item.bullets.length - 3} more
                        </li>
                      )}
                    </ul>
                    <Link
                      href={`/priorities/${item.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-patriot-red hover:text-patriot-blue transition-colors"
                    >
                      Read more
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
