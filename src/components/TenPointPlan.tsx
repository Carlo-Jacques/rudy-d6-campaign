"use client";

import { useReducedMotion } from "framer-motion";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import { priorities } from "@/lib/priorities";

export default function TenPointPlanModal() {
  const reduceMotion = useReducedMotion();
  const items = priorities;

  return (
    <MotionConfig
      transition={{
        duration: reduceMotion ? 0 : 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          >
            <Link
              href={`/priorities/${item.id}`}
              className={[
                "group relative block w-full overflow-hidden rounded-2xl md:rounded-3xl bg-white text-left",
                "shadow-sm outline-none transition-all duration-300",
                "ring-1 ring-black/10 hover:ring-0 hover:shadow-xl",
                // Gradient border hack
                "before:absolute before:inset-0 before:-z-10 before:p-[2px] before:bg-gradient-to-r before:from-patriot-red before:via-white before:to-patriot-blue before:opacity-0 hover:before:opacity-100 before:rounded-[inherit] before:content-[''] before:transition-opacity",
                // Inner bg
                "after:absolute after:inset-[1px] after:-z-10 after:bg-white after:rounded-[inherit] after:content-['']",
                "focus-visible:ring-2 focus-visible:ring-patriot-blue/60 focus-visible:ring-offset-2",
              ].join(" ")}
            >
              <div className="absolute left-5 top-5 h-2 w-16 rounded-full bg-patriot-blue" />
              <div className="p-5 pt-8">
                <div className="text-xs font-semibold text-black/50">Point {item.number}</div>
                <div className="mt-1 text-base font-extrabold leading-snug tracking-tight text-black">
                  {item.title}
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Click to view details
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-patriot-blue">
                  <span className="underline decoration-black/10 underline-offset-4 group-hover:decoration-patriot-blue/40">
                    Learn more
                  </span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </MotionConfig>
  );
}

