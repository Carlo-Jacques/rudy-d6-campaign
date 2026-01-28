"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SuccessAnimation({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
            className="flex flex-col items-center"
        >
            {children}
        </motion.div>
    );
}
