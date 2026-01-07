"use client";

import Link from "next/link";
import { priorities } from "@/lib/priorities";

export default function TenPointPlanModal() {
  return (
    <div className="space-y-8">
      {priorities.map((item) => (
        <div key={item.id} className="bg-white">
          {/* Top Section: Image on left, Banner on right */}
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
              <img
                src="/img/banner.png"
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Dark blue triangle overlay at bottom-right */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[80px] border-b-[#0A3161]" />
            </div>

            {/* Right side - Patriot Red Banner with Title */}
            <div className="w-full md:w-1/2 bg-patriot-red flex items-center p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Bottom Section: Body text on light background */}
          <div className="bg-[#f0f4f8] p-8 md:p-12">
            <p className="text-base md:text-lg text-black/85 leading-relaxed max-w-4xl mx-auto">
              {item.bullets[0]}
            </p>
            
            {/* Read more link */}
            <div className="mt-6 max-w-4xl mx-auto">
              <Link
                href={`/priorities/${item.id}`}
                className="inline-flex items-center gap-2 text-patriot-red font-semibold hover:text-patriot-blue transition-colors text-base md:text-lg"
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
  );
}
