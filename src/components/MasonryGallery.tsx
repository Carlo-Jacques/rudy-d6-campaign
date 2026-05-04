'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
    id: string;
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
}

interface MasonryGalleryProps {
    items: GalleryItem[];
}

export default function MasonryGallery({ items }: MasonryGalleryProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedId(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const selectedItem = items.find((item) => item.id === selectedId);

    return (
        <div className="w-full">
            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`} // Shared layoutId for magic motion
                        className="break-inside-avoid relative overflow-hidden rounded-xl bg-white shadow-md cursor-pointer group"
                        onClick={() => setSelectedId(item.id)}
                        whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative w-full">
                            {item.src.toLowerCase().endsWith('.pdf') ? (
                                <div className="relative w-full aspect-[3/4] bg-gray-100 flex flex-col items-center justify-center border overflow-hidden">
                                    <iframe 
                                        src={`${item.src}#toolbar=0&navpanes=0&scrollbar=0`} 
                                        className="absolute inset-0 w-full h-full border-0 pointer-events-none" 
                                        title={item.alt}
                                        scrolling="no"
                                    />
                                    {/* Invisible overlay to prevent interaction */}
                                    <div className="absolute inset-0 z-10 bg-transparent"></div>
                                </div>
                            ) : item.src.toLowerCase().endsWith('.mp4') ? (
                                <div className="relative w-full aspect-video bg-black flex flex-col items-center justify-center overflow-hidden">
                                    <video
                                        src={item.src}
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                    />
                                    {/* Invisible overlay to prevent interaction */}
                                    <div className="absolute inset-0 z-10 bg-transparent"></div>
                                    {/* Play icon overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="rounded-full bg-white/20 backdrop-blur-sm p-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={item.width || 800}
                                    height={item.height || 600}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            )}
                            {/* Hover Caption Preview */}
                            {item.caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium line-clamp-2">{item.caption}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50 p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedId(null);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* Content Container */}
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative max-w-5xl w-full max-h-full bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()} // Prevent close on clicking content
                        >
                            {/* Content */}
                            <div className="relative w-full h-auto max-h-[60vh] md:max-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-gray-50">
                                {selectedItem.src.toLowerCase().endsWith('.pdf') ? (
                                    <iframe
                                        src={selectedItem.src}
                                        className="relative z-10 w-full h-[60vh] md:h-[70vh] shadow-2xl bg-white border-0"
                                        title={selectedItem.alt}
                                    />
                                ) : selectedItem.src.toLowerCase().endsWith('.mp4') ? (
                                    <video
                                        src={selectedItem.src}
                                        className="relative z-10 w-auto h-auto max-w-full max-h-[60vh] md:max-h-[70vh] object-contain shadow-2xl bg-black"
                                        controls
                                        autoPlay
                                    />
                                ) : (
                                    <>
                                        {/* Dynamic Blurred Background */}
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={selectedItem.src}
                                                alt=""
                                                fill
                                                className="object-cover blur-2xl scale-110 saturate-150"
                                                aria-hidden="true"
                                                quality={50}
                                            />
                                        </div>

                                        {/* Main Image */}
                                        <Image
                                            src={selectedItem.src}
                                            alt={selectedItem.alt}
                                            width={1200}
                                            height={800}
                                            className="relative z-10 w-auto h-auto max-w-full max-h-[60vh] md:max-h-[70vh] object-contain shadow-2xl"
                                            priority
                                        />
                                    </>
                                )}
                            </div>

                            {/* Caption Section */}
                            {(selectedItem.alt || selectedItem.caption) && (
                                <motion.div
                                    className="p-6 bg-white overflow-y-auto max-h-[30vh]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {selectedItem.alt && (
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedItem.alt}</h3>
                                    )}
                                    {selectedItem.caption && (
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {selectedItem.caption}
                                        </p>
                                    )}
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
