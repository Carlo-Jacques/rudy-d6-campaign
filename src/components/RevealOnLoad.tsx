"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    delay?: number;
};

export default function RevealOnLoad({ children, delay = 0 }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // During SSR and initial client render, always render with consistent initial state
    // This ensures server and client HTML match exactly
    // Only check prefersReducedMotion after mount to avoid hydration mismatches
    if (!mounted) {
        return (
            <div style={{ opacity: 0, transform: "translateY(14px)" }}>
                {children}
            </div>
        );
    }

    // After mount, check for reduced motion preference
    if (prefersReducedMotion) {
        return <div>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}

