"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ContrastMode = "normal" | "high" | "invert";

const STORAGE_KEY = "rudy_a11y_prefs_v1";

function clamp(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n));
}

export default function AccessibilityPanel() {
    const [open, setOpen] = useState(false);

    const [fontScale, setFontScale] = useState<number>(1);
    const [contrast, setContrast] = useState<ContrastMode>("normal");
    const [hideImages, setHideImages] = useState<boolean>(false);
    const [reduceMotion, setReduceMotion] = useState<boolean>(false);

    // Speech synthesis support
    const canSpeak = useMemo(() => typeof window !== "undefined" && "speechSynthesis" in window, []);
    const speakingRef = useRef<SpeechSynthesisUtterance | null>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Apply prefs to <html> via CSS variables / data attributes
    const applyToDom = (prefs: {
        fontScale: number;
        contrast: ContrastMode;
        hideImages: boolean;
        reduceMotion: boolean;
    }) => {
        const root = document.documentElement;

        root.style.setProperty("--a11y-font-scale", String(prefs.fontScale));
        root.setAttribute("data-a11y-contrast", prefs.contrast);
        root.setAttribute("data-a11y-hide-images", prefs.hideImages ? "1" : "0");
        root.setAttribute("data-a11y-reduce-motion", prefs.reduceMotion ? "1" : "0");
    };

    // Load saved prefs
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                // Default: honor OS reduced motion, but keep user toggle off unless OS requests it.
                const osReduce =
                    typeof window !== "undefined" &&
                    window.matchMedia &&
                    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

                const initial = { fontScale: 1, contrast: "normal" as ContrastMode, hideImages: false, reduceMotion: osReduce };
                setReduceMotion(osReduce);
                applyToDom(initial);
                return;
            }

            const parsed = JSON.parse(raw);
            const fs = clamp(Number(parsed.fontScale ?? 1), 0.9, 1.5);
            const cm: ContrastMode = ["normal", "high", "invert"].includes(parsed.contrast) ? parsed.contrast : "normal";
            const hi = Boolean(parsed.hideImages ?? false);
            const rm = Boolean(parsed.reduceMotion ?? false);

            setFontScale(fs);
            setContrast(cm);
            setHideImages(hi);
            setReduceMotion(rm);

            applyToDom({ fontScale: fs, contrast: cm, hideImages: hi, reduceMotion: rm });
        } catch {
            // fail closed: do nothing
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Persist + apply on changes
    useEffect(() => {
        if (typeof window === "undefined") return;

        const prefs = { fontScale, contrast, hideImages, reduceMotion };
        applyToDom(prefs);

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        } catch {
            // ignore
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fontScale, contrast, hideImages, reduceMotion]);

    const reset = () => {
        const osReduce =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        setFontScale(1);
        setContrast("normal");
        setHideImages(false);
        setReduceMotion(osReduce);

        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            // ignore
        }
    };

    const readSelectionOrPage = () => {
        if (!canSpeak) return;

        const selection = window.getSelection()?.toString()?.trim();
        const text = selection && selection.length > 0 ? selection : document.body.innerText?.trim();

        if (!text) return;

        stopReading();

        const utter = new SpeechSynthesisUtterance(text);
        utter.rate = 1;
        utter.pitch = 1;
        utter.onend = () => setIsSpeaking(false);
        utter.onerror = () => setIsSpeaking(false);

        speakingRef.current = utter;
        window.speechSynthesis.speak(utter);
        setIsSpeaking(true);
    };

    const stopReading = () => {
        if (!canSpeak) return;
        window.speechSynthesis.cancel();
        speakingRef.current = null;
        setIsSpeaking(false);
    };

    return (
        <>
            {/* Floating trigger */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="a11y-panel"
                className="fixed left-5 top-1/2 -translate-y-1/2 z-[9999] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                <svg height="48" width="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="a" x1="50%" x2="50%" y1="37.682%" y2="100%"><stop offset="0" stop-color="#139fda" /><stop offset="1" stop-color="#2359a7" /></linearGradient><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M64 0C28.653 0 0 28.653 0 64s28.653 64 64 64 64-28.653 64-64S99.347 0 64 0z" fill="url(#a)" /><path d="M64 3C30.31 3 3 30.31 3 64s27.31 61 61 61 61-27.31 61-61S97.69 3 64 3z" fill="#fff" /><path d="M64 6C31.967 6 6 31.967 6 64s25.967 58 58 58 58-25.967 58-58S96.033 6 64 6z" fill="url(#a)" /></g><path d="M72.095 49.514l.01 18.415 7.401 30.374c.494 1.985.47 4.02-1.495 4.514-1.955.493-3.506-.06-4-2.035L64.767 72.63h-2.962l-8.794 28.152c-.74 1.906-2.103 2.775-4 2.035-1.886-.731-1.857-2.874-1.116-4.78l7.138-29.792V49.514L34.01 47.645c-1.836-.148-3.148-1.163-3-3 .139-1.847 1.875-2.945 3.702-2.797H68.01l25.056-.04c1.837-.069 3.885.98 3.944 2.837.08 1.827-2.107 2.921-3.944 3zm-1.721-17.707a6.833 6.833 0 0 1-6.838 6.838c-3.75 0-6.807-3.057-6.807-6.838-.01-3.75 3.047-6.807 6.807-6.807 3.78 0 6.838 3.057 6.838 6.807z" fill="#fff" /></g></svg>
            </button>

            {/* Panel */}
            {open && (
                <div
                    id="a11y-panel"
                    role="dialog"
                    aria-label="Accessibility settings"
                    className="fixed bottom-20 right-5 z-[9999] w-[320px] rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <div className="text-base font-semibold text-gray-900">Accessibility</div>
                            <div className="mt-1 text-sm text-gray-600">
                                Adjust text, contrast, images, and optional read-aloud.
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                            aria-label="Close accessibility panel"
                        >
                            Close
                        </button>
                    </div>

                    <hr className="my-4" />

                    {/* Text size */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-gray-900">Text size</div>
                            <div className="text-sm text-gray-700">{Math.round(fontScale * 100)}%</div>
                        </div>
                        <input
                            type="range"
                            min={0.9}
                            max={1.5}
                            step={0.05}
                            value={fontScale}
                            onChange={(e) => setFontScale(Number(e.target.value))}
                            className="mt-2 w-full"
                            aria-label="Text size"
                        />
                        <div className="mt-2 flex gap-2">
                            <button
                                type="button"
                                onClick={() => setFontScale((v) => clamp(Number((v - 0.05).toFixed(2)), 0.9, 1.5))}
                                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                            >
                                Smaller
                            </button>
                            <button
                                type="button"
                                onClick={() => setFontScale((v) => clamp(Number((v + 0.05).toFixed(2)), 0.9, 1.5))}
                                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                            >
                                Larger
                            </button>
                        </div>
                    </div>

                    {/* Contrast */}
                    <div className="mb-4">
                        <div className="text-sm font-medium text-gray-900">Contrast</div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            {(["normal", "high", "invert"] as ContrastMode[]).map((m) => (
                                <button
                                    key={m}
                                    type="button"
                                    onClick={() => setContrast(m)}
                                    className={[
                                        "rounded-lg border px-3 py-2 text-sm",
                                        contrast === m ? "border-black bg-black text-white" : "border-gray-200 hover:bg-gray-50",
                                    ].join(" ")}
                                    aria-pressed={contrast === m}
                                >
                                    {m === "normal" ? "Normal" : m === "high" ? "High" : "Invert"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Toggles */}
                    <div className="mb-4 space-y-2">
                        <label className="flex items-center justify-between gap-3">
                            <span className="text-sm font-medium text-gray-900">Hide images</span>
                            <input
                                type="checkbox"
                                checked={hideImages}
                                onChange={(e) => setHideImages(e.target.checked)}
                                aria-label="Hide images"
                            />
                        </label>

                        <label className="flex items-center justify-between gap-3">
                            <span className="text-sm font-medium text-gray-900">Reduce motion</span>
                            <input
                                type="checkbox"
                                checked={reduceMotion}
                                onChange={(e) => setReduceMotion(e.target.checked)}
                                aria-label="Reduce motion"
                            />
                        </label>
                    </div>

                    {/* Read aloud */}
                    <div className="mb-4">
                        <div className="text-sm font-medium text-gray-900">Read aloud</div>
                        <div className="mt-2 flex gap-2">
                            <button
                                type="button"
                                onClick={readSelectionOrPage}
                                disabled={!canSpeak}
                                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSpeaking ? "Reading…" : "Read"}
                            </button>
                            <button
                                type="button"
                                onClick={stopReading}
                                disabled={!canSpeak || !isSpeaking}
                                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Stop
                            </button>
                        </div>
                        <div className="mt-2 text-xs text-gray-600">
                            Tip: highlight text first to read only the selection.
                        </div>
                    </div>

                    <hr className="my-4" />

                    <button
                        type="button"
                        onClick={reset}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                    >
                        Reset to defaults
                    </button>
                </div>
            )}
        </>
    );
}
