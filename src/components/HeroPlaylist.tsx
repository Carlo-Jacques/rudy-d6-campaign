"use client";

import { useEffect, useRef, useState } from "react";

type YouTubePlayer = {
  mute: () => void;
  unMute: () => void;
  playVideo: () => void;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          playerVars: Record<string, string | number>;
          events: { onReady: (event: { target: YouTubePlayer }) => void };
        },
      ) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PLAYLIST_ID = "PL3EsYh73Hi_qZYiHitc_jbx1dxMNaMOWy";

export default function HeroPlaylist() {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!started || !PLAYLIST_ID || !mountRef.current) return;

    const createPlayer = () => {
      if (!window.YT || !mountRef.current || playerRef.current) return;

      playerRef.current = new window.YT.Player(mountRef.current, {
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          playsinline: 1,
          rel: 0,
          listType: "playlist",
          list: PLAYLIST_ID,
        },
        events: {
          onReady: ({ target }) => {
            target.mute();
            target.playVideo();
            setReady(true);
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        createPlayer();
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [started]);

  const toggleSound = () => {
    if (!playerRef.current || !ready) return;

    if (muted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setMuted((current) => !current);
  };

  return (
    <div className="w-full max-w-xl lg:ml-auto">
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/25 bg-black/70 shadow-2xl backdrop-blur-sm">
        {!started ? (
          <button
            type="button"
            onClick={() => setStarted(true)}
            disabled={!PLAYLIST_ID}
            className="group absolute inset-0 flex w-full flex-col items-center justify-center bg-[url('/img/Hero-Bg-Image.webp')] bg-cover bg-center text-white disabled:cursor-not-allowed"
            aria-label="Play Rudy's District 6 playlist"
          >
            <span className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/45" />
            <span className="play-pulse relative grid h-20 w-20 place-items-center rounded-full border-2 border-white bg-patriot-red shadow-xl transition-transform group-hover:scale-105">
              <svg className="ml-1 h-9 w-9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="relative mt-5 text-xl font-extrabold tracking-wide">Listen to Rudy’s Playlist</span>
            <span className="relative mt-1 text-sm text-white/80">Music for District 6</span>
          </button>
        ) : (
          <div ref={mountRef} className="h-full w-full [&_iframe]:h-full [&_iframe]:w-full" />
        )}

        {started && (
          <button
            type="button"
            onClick={toggleSound}
            disabled={!ready}
            className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/75 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur transition hover:bg-black disabled:opacity-60"
            aria-label={muted ? "Turn sound on" : "Turn sound off"}
            aria-pressed={!muted}
          >
            <span aria-hidden="true">{muted ? "🔇" : "🔊"}</span>
            {muted ? "Sound On" : "Sound Off"}
          </button>
        )}
      </div>

      <style jsx>{`
        .play-pulse::before,
        .play-pulse::after {
          content: "";
          position: absolute;
          inset: -2px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-radius: 9999px;
          animation: pulse-ring 2s ease-out infinite;
        }

        .play-pulse::after {
          animation-delay: 1s;
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.7); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .play-pulse::before,
          .play-pulse::after { animation: none; }
        }
      `}</style>
    </div>
  );
}