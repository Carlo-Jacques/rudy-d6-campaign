"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { priorities } from "@/lib/priorities";

// Different background colors for each item
const itemColors = [
  "bg-blue-50",      // Item 1
  "bg-green-50",     // Item 2
  "bg-yellow-50",    // Item 3
  "bg-purple-50",    // Item 4
  "bg-pink-50",      // Item 5
  "bg-indigo-50",    // Item 6
  "bg-orange-50",    // Item 7
  "bg-teal-50",      // Item 8
  "bg-cyan-50",      // Item 9
  "bg-rose-50",      // Item 10
];

export default function TenPointPlanModal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // Auto-scroll left side to show active title
  useEffect(() => {
    const activeTitle = titleRefs.current[activeIndex];
    const container = leftContainerRef.current;
    
    if (activeTitle && container) {
      const containerRect = container.getBoundingClientRect();
      const titleRect = activeTitle.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const titleTop = titleRect.top - containerRect.top + scrollTop;
      const containerHeight = container.clientHeight;
      const titleHeight = titleRect.height;
      
      // Center the active title in the viewport
      const targetScroll = titleTop - (containerHeight / 2) + (titleHeight / 2);
      
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <div className={`relative flex flex-col lg:flex-row transition-colors duration-700 ${itemColors[activeIndex]}`}>
      {/* Left Side - Sticky Titles */}
      <div 
        ref={leftContainerRef}
        className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:max-h-screen flex flex-col justify-center px-4 py-8 lg:py-16 z-10 overflow-y-auto"
      >
        <div className="space-y-4 lg:space-y-8 max-w-2xl mx-auto">
          {priorities.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                titleRefs.current[index] = el;
              }}
              className={`transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "opacity-100 scale-105 translate-x-2"
                  : "opacity-30 scale-100 translate-x-0"
              }`}
            >
              <div className={`flex items-start gap-4 lg:gap-6 p-4 lg:p-6 rounded-lg transition-all duration-500 ${
                activeIndex === index
                  ? "bg-white/80 shadow-lg border-2 border-patriot-red/30"
                  : "bg-transparent"
              }`}>
                <div className={`text-4xl lg:text-5xl xl:text-6xl font-bold shrink-0 transition-colors duration-300 ${
                  activeIndex === index ? "text-patriot-red" : "text-patriot-blue/60"
                }`}>
                  {String(item.number).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl lg:text-2xl xl:text-3xl font-bold leading-tight transition-colors duration-300 ${
                    activeIndex === index ? "text-black" : "text-black/50"
                  }`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Scrolling Content */}
      <div className="w-full lg:w-1/2">
        {priorities.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="min-h-screen flex flex-col justify-center px-4 py-16 lg:py-24"
          >
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="text-4xl font-bold text-patriot-blue mb-2">
                  {String(item.number).padStart(2, "0")}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-4 text-base lg:text-lg text-black/80 leading-relaxed">
                {item.bullets.map((bullet, bulletIndex) => (
                  <p key={bulletIndex}>{bullet}</p>
                ))}
              </div>

              {/* Read more link */}
              <div className="mt-8">
                <Link
                  href={`/priorities/${item.id}`}
                  className="inline-flex items-center gap-2 text-patriot-red font-semibold hover:text-patriot-blue transition-colors text-base lg:text-lg"
                >
                  Read more
                  <svg
                    className="w-5 h-5"
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
  );
}
