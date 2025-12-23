"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);
  const [poster, setPoster] = useState<string | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      setSrc("/video/hero-vertical.mp4");
      setPoster("/img/hero-vertical.jpg");
    } else {
      setSrc("/video/hero-wide.mp4");
      setPoster("/img/hero-wide.jpg");
    }
  }, []);

  if (!src) {
    return null;
  }

  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster ?? undefined}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

