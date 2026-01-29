"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BioImage() {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        const currentRef = imageRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={imageRef}
            className="flex items-start"
        >
            <div
                className={`w-full transition-all duration-1000 ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
            >
                <Image
                    src="/img/rudolph_tinker_with_family.webp"
                    alt="Rudolph Tinker and Family"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>
        </div>
    );
}

