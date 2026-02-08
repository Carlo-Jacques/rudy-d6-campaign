"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
interface Testimonial {
    quote: string;
    author: string;
}

export default function Testimonials() {
    const t = useTranslations("home.testimonials");
    const testimonials = t.raw("items") as Testimonial[];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="relative overflow-hidden py-20 text-white">
            {/* Background accents */}
            <div className="absolute inset-0">
                <Image
                    src="/img/testimonial-banner.webp"
                    alt="Testimonial background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Better overlay: gradient instead of a flat black layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl px-4 py-20">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        {t("title")}
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 bg-patriot-red" />
                </div>

                <div className="relative min-h-[300px] sm:min-h-[260px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="w-full text-center"
                        >
                            {/* Optional “glass” panel to keep text readable on busy photos */}
                            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/35 px-6 py-10 backdrop-blur-sm sm:px-10">
                                <div className="relative">
                                    <span className="absolute -top-10 -left-4 text-7xl font-serif text-white/15">“</span>
                                    <p className="relative z-10 text-xl font-medium leading-relaxed italic sm:text-2xl">
                                        {testimonials[currentIndex].quote}
                                    </p>
                                    <span className="absolute -bottom-14 -right-4 text-7xl font-serif text-white/15">”</span>
                                </div>

                                <div className="mt-8 flex flex-col items-center">
                                    <div className="h-px w-12 bg-white/30" />
                                    <p className="mt-4 font-bold uppercase tracking-widest text-patriot-red">
                                        — {testimonials[currentIndex].author}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="mt-12 flex justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "w-8 bg-patriot-red"
                                : "w-2.5 bg-white/30 hover:bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Read Reviews Link */}
                <div className="mt-8 text-center px-4">
                    <a
                        href="https://www.ratemyprofessors.com/professor/2997560"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group"
                    >
                        <span className="text-sm font-semibold tracking-wide uppercase border-b border-white/20 pb-0.5 group-hover:border-white/50 transition-colors">
                            Read Reviews
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="translate-y-px"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

        </section>
    );
}
