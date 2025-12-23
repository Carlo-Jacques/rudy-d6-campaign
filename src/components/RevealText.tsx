"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface RevealTextProps {
    children: ReactNode;
    delay?: number;
}

export default function RevealText({ children, delay = 0 }: RevealTextProps) {
    const prefersReducedMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (prefersReducedMotion) {
        return <div>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        >
            {children}
        </motion.div>
    );
}
