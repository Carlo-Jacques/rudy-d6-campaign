"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

export interface Endorsement {
    name: string;
    business?: string;
    logo: string;
    url?: string;
    description?: string;
    comment?: string;
}

interface EndorsementsGridProps {
    endorsements: Endorsement[];
}

const sweepVariants: Variants = {
    initial: { x: "-150%" },
    hover: { 
        x: "150%", 
        transition: { 
            duration: 0.85, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2.5
        } 
    }
};

export default function EndorsementsGrid({ endorsements }: EndorsementsGridProps) {
    const [selectedEndorsement, setSelectedEndorsement] = useState<Endorsement | null>(null);
    const [zoom, setZoom] = useState(1);

    const handleCloseModal = () => {
        setSelectedEndorsement(null);
        setZoom(1);
    };

    const handleOpenModal = (endorsement: Endorsement) => {
        setSelectedEndorsement(endorsement);
        setZoom(1);
    };

    // Helper to determine if an endorsement has a valid external link
    const hasValidLink = (url?: string) => {
        return url && url !== "#" && url.trim() !== "";
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {endorsements.map((endorsement, i) => {
                    const isLink = hasValidLink(endorsement.url);

                    if (isLink) {
                        return (
                            <Link
                                key={i}
                                href={endorsement.url!}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-start p-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-[1.02] shadow-xl text-center h-full cursor-pointer"
                            >
                                <div className="relative w-full aspect-square mb-6">
                                    <Image
                                        src={endorsement.logo}
                                        alt={`${endorsement.name} logo`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white/90">
                                    {endorsement.business}
                                </h3>
                                <h4 className="text-sm font-medium text-white/80 mt-1">{endorsement.name}</h4>
                                {endorsement.description && (
                                    <p className="text-sm text-white/90 mt-4 leading-relaxed text-left w-full whitespace-pre-line">
                                        {endorsement.description}
                                    </p>
                                )}
                                {endorsement.comment && (
                                    <p className="text-sm text-white/90 mt-4 italic leading-relaxed text-left w-full">
                                        &quot;{endorsement.comment}&quot;
                                    </p>
                                )}
                            </Link>
                        );
                    }

                    // Linkless endorsement: Render as an interactive card triggering a Lightbox modal
                    return (
                        <motion.button
                            key={i}
                            type="button"
                            onClick={() => handleOpenModal(endorsement)}
                            initial="initial"
                            whileHover="hover"
                            className="group text-left flex flex-col items-center justify-start p-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-[1.02] shadow-xl text-center h-full cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                            {/* Image Container with Lighthouse Sweep Effect */}
                            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl bg-black/5">
                                <Image
                                    src={endorsement.logo}
                                    alt={`${endorsement.name} logo`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                
                                {/* Lighthouse sweep light beam */}
                                <motion.div
                                    variants={sweepVariants}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-20 pointer-events-none"
                                />
                            </div>
                            
                            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white/90">
                                {endorsement.business}
                            </h3>
                            <h4 className="text-sm font-medium text-white/80 mt-1">{endorsement.name}</h4>
                            {endorsement.description && (
                                <p className="text-sm text-white/90 mt-4 leading-relaxed text-left w-full whitespace-pre-line line-clamp-4">
                                    {endorsement.description}
                                </p>
                            )}
                            {endorsement.comment && (
                                <p className="text-sm text-white/90 mt-4 italic leading-relaxed text-left w-full line-clamp-4">
                                    &quot;{endorsement.comment}&quot;
                                </p>
                            )}
                        </motion.button>
                    );
                })}

                {/* Remaining placeholders */}
                {Array.from({ length: 2 }).map((_, i) => (
                    <div
                        key={`placeholder-${i}`}
                        className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 opacity-40 text-center h-full"
                    >
                        <div className="relative w-full aspect-square mb-6">
                            {/* Placeholder for logo */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedEndorsement && (
                    <motion.div
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50 p-2 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full bg-black/40"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCloseModal();
                            }}
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Modal container */}
                        <motion.div
                            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                        >
                            {/* Zoom controls */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl items-center">
                                <button
                                    onClick={() => setZoom(prev => Math.min(prev + 0.25, 4))}
                                    className="text-white/80 hover:text-white font-bold cursor-pointer transition-colors text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                                    title="Zoom In"
                                >
                                    +
                                </button>
                                <span className="text-white/80 font-mono text-sm min-w-[50px] text-center select-none font-medium">
                                    {Math.round(zoom * 100)}%
                                </span>
                                <button
                                    onClick={() => setZoom(prev => Math.max(prev - 0.25, 1))}
                                    className="text-white/80 hover:text-white font-bold cursor-pointer transition-colors text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                                    title="Zoom Out"
                                >
                                    -
                                </button>
                                {zoom !== 1 && (
                                    <button
                                        onClick={() => setZoom(1)}
                                        className="text-white/80 hover:text-white cursor-pointer transition-colors text-sm px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 font-medium"
                                        title="Reset Zoom"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>

                            {/* Image Wrapper */}
                            <div className="relative w-full h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/35 border border-white/10 shadow-2xl">
                                <motion.div
                                    style={{ scale: zoom }}
                                    drag={zoom > 1}
                                    dragElastic={0.1}
                                    className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                                >
                                    <Image
                                        src={selectedEndorsement.logo}
                                        alt={`${selectedEndorsement.name} logo`}
                                        fill
                                        className="object-contain p-6 select-none"
                                        draggable={false}
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
