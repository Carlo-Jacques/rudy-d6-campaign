"use client";

import Button from "@/components/ui/Button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import HeroPlaylist from "@/components/HeroPlaylist";

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section className="relative overflow-visible bg-[#0B1B2E]">
            {/*
              Swap this @import for next/font/google in production (layout.tsx) for
              better performance / no FOUT. Kept inline here so the component is
              self-contained.
            */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Public+Sans:wght@400;500;600;700&display=swap');
                .font-display { font-family: 'Big Shoulders Display', sans-serif; }
                .font-body { font-family: 'Public Sans', sans-serif; }
            `}</style>

            {/* ABOVE THE FOLD */}
            <div className="relative min-h-[100dvh] font-body">
                <div
                    className="absolute inset-0 z-0 bg-[url('/img/Hero-Bg-Image.webp')] bg-cover bg-center bg-no-repeat"
                    aria-hidden="true"
                />

                {/* Navy overlay: light at the top so sky reads, deep at the base to seat the content */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(11,27,46,0.15) 0%, rgba(11,27,46,0.55) 55%, rgba(11,27,46,0.96) 100%)',
                    }}
                    aria-hidden="true"
                />

                {/* Candidate cutout, anchored bottom-right */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <div className="relative h-full max-w-7xl mx-auto px-4 flex items-end justify-end">
                        <img
                            src="/img/hero-rudolph-tinker.webp"
                            alt="Rudolph Tinker"
                            className="h-[56%] w-auto max-w-[60%] object-contain drop-shadow-2xl sm:h-[66%] sm:max-w-[80%] lg:h-[78%]"
                        />
                    </div>
                </div>

                {/*
                  --nav-h is 150px: your Header.tsx animates between 150px (unscrolled,
                  top of homepage, transparent bg) and 70px (scrolled/other pages). 150px
                  is the worst case that's actually visible pre-scroll, so that's what we
                  reserve here via paddingTop.

                  This section grows with its content (min-h, not h) — it is NOT clipped
                  to one viewport. The inner column uses min-h-[calc(100dvh-var(--nav-h))]
                  so that on a normal viewport the badge/headline/subtitle/button/playlist
                  are spread out with even space between them (justify-between) filling the
                  screen below the navbar; if the content ever needs more room than that
                  (long translations, big playlist card, small phone), the column simply
                  grows taller than that minimum and the page scrolls — nothing is clipped
                  or squeezed.
                */}
                <div
                    className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 sm:px-10"
                    style={{
                        paddingLeft: "calc(1.5rem + 20px)",
                        paddingRight: "calc(1.5rem + 20px)",
                        paddingTop: "var(--nav-h, 150px)",
                        paddingBottom: "3rem",
                    }}
                >
                    <div
                        className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8"
                        style={{ minHeight: "calc(100dvh - var(--nav-h, 150px) - 3rem)" }}
                    >
                        {/* Left - message + playlist, evenly spaced top to bottom */}
                        <div className="flex h-full flex-col justify-between">
                            <div className="inline-flex w-fit items-center gap-2 rounded-sm border-2 border-[#F5EFE3] bg-[#C8372E] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F5EFE3]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#F5EFE3]" aria-hidden="true" />
                                {t('badge')}
                            </div>

                            <h1 className="font-display text-[3rem] font-black uppercase leading-[0.92] tracking-tight text-[#F5EFE3] sm:text-[4.5rem] lg:text-[5.5rem]">
                                {t('title')}
                            </h1>

                            <p className="max-w-lg text-base text-[#F5EFE3]/80 sm:text-lg">
                                {t('subtitle')}
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button href="#plan" className="rounded-full text-center" variant="plan" size="md">
                                    {t('seePoints')}
                                </Button>
                            </div>

                            <div className="max-w-sm">
                                <HeroPlaylist />
                            </div>
                        </div>

                        {/* Right column intentionally empty on lg+: reserves the space
                            the candidate cutout (absolutely positioned above) sits over,
                            so the left column's text/playlist never runs under his portrait. */}
                        <div aria-hidden="true" />
                    </div>
                </div>
            </div>

            {/* ABOUT — full-width editorial band, replaces the old petition/about split */}
            <div
                id="about"
                className="relative w-full bg-[#F5EFE3] bg-cover bg-center bg-no-repeat py-20 sm:py-28"
                style={{
                    backgroundImage:
                        "linear-gradient(180deg, rgba(245,239,227,0.97), rgba(245,239,227,0.92)), url('/img/loxahatchee-hero-2.webp')",
                }}
            >
                <div className="mx-auto max-w-4xl px-6 text-center font-body sm:px-10">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-[#C8372E]">
                        Meet Rudy
                    </span>
                    <p className="font-display mt-4 text-2xl font-bold leading-tight text-[#0B1B2E] sm:text-3xl lg:text-4xl">
                        {t('aboutRudy')}
                    </p>
                    <Link
                        href="/about-rudolph"
                        className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#0B1B2E] px-6 py-2.5 font-body text-sm font-bold uppercase tracking-wide text-[#0B1B2E] transition-colors hover:bg-[#0B1B2E] hover:text-[#F5EFE3]"
                    >
                        Read more →
                    </Link>
                </div>
            </div>
        </section>
    );
}