"use client";

import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type Props = {
    children: ReactNode;
    delay?: number;
};

export default function RevealOnScroll({ children, delay = 0 }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { amount: 0.2, once: true });

    useEffect(() => setMounted(true), []);

    if (prefersReducedMotion) return <div>{children}</div>;

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={mounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, ease: "easeOut", delay }}
            style={!mounted || !inView ? { opacity: 0, transform: "translateY(14px)" } : undefined}
        >
            {children}
        </motion.div>
    );
}
