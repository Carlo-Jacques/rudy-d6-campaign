"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

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
        <section className="relative overflow-hidden bg-patriot-blue py-20 text-white">
            {/* Background accents */}
            <div className="absolute top-0 left-0 h-full w-full opacity-10">
                <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-patriot-red blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-white blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        {t("title")}
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-20 bg-patriot-red" />
                </div>

                <div className="relative min-h-[300px] sm:min-h-[250px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full text-center"
                        >
                            <div className="relative inline-block">
                                <span className="absolute -top-10 -left-8 text-8xl font-serif text-white/10">"</span>
                                <p className="relative z-10 text-xl font-medium leading-relaxed italic sm:text-2xl">
                                    {testimonials[currentIndex].quote}
                                </p>
                                <span className="absolute -bottom-16 -right-8 text-8xl font-serif text-white/10">"</span>
                            </div>

                            <div className="mt-8 flex flex-col items-center">
                                <div className="h-px w-12 bg-white/30" />
                                <p className="mt-4 font-bold uppercase tracking-widest text-patriot-red">
                                    — {testimonials[currentIndex].author}
                                </p>
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
                            className={`h-2.5 transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 bg-patriot-red" : "w-2.5 bg-white/30 hover:bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
