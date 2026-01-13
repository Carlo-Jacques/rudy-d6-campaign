"use client";

import Button from "@/components/ui/Button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';


export default function Hero() {
    const t = useTranslations('hero');
    const tHome = useTranslations('home');
    const [showFallback, setShowFallback] = useState(false);

    return (
        <section className="relative overflow-visible">
            {/* Patriot red to transparent gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.6) 100%)' }}></div>

            {/* ABOVE THE FOLD - First Vertical Div */}
            <div className="relative min-h-[110dvh]">
                <div
                    className="absolute inset-0 z-0 bg-[url('/img/Hero-Bg-Image.webp')] bg-cover bg-center bg-no-repeat"
                    aria-hidden="true"
                />

                {/* Dark overlay */}
                <div className="absolute top-0 bottom-0 left-0 right-0 z-[1]">
                    <div className="relative h-full max-w-6xl mx-auto px-4 flex justify-center md:justify-end items-end flex-wrap" style={{ textAlign: 'right' }}>
                        <img
                            src="/img/hero-rudolph-tinker.webp"
                            alt="Rudolph Tinker"
                            className="w-auto sm:h-[55%] md:h-[65%] lg:h-[70%] max-w-[65%] sm:max-w-[85%] md:max-w-[90%] lg:max-w-[95%] object-contain"
                            style={{ zIndex: -1 }}
                        />
                    </div>
                </div>

                <div className="relative z-10 mx-auto flex min-h-[calc(110dvh-100px)] max-w-7xl items-center pt-[2vh] pb-12 md:pb-8" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
                    <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* Left side - Content */}
                        <div className="flex flex-col justify-center w-full max-w-2xl">
                            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white w-fit">
                                {t('badge')}
                            </div>

                            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                                {t('title')}
                            </h1>

                            <p className="mt-4 text-base text-white/85 sm:text-lg">
                                {t('subtitle')}
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <Button
                                    href="/petition"
                                    variant="petition"
                                    size="md"
                                >
                                    {t('signPetition')}
                                </Button>

                                <Button href="#plan" variant="plan" size="md">
                                    {t('seePoints')}
                                </Button>
                            </div>
                        </div>

                        {/* Right side - Blank */}
                        <div className="flex flex-col justify-center">
                        </div>
                    </div>
                </div>
            </div>

            {/* BELOW THE FOLD - Second Vertical Div with Two Horizontal Divs */}
            <div id="petition" className="relative w-full py-12 bg-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/loxahatchee-hero-2.webp')" }}>
                <div className="mx-auto max-w-7xl px-4" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Side - Petition Div */}
                        <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 md:-mt-36" style={{ display: 'flex', flexWrap: 'wrap', zIndex: 1 }}>
                            <div className="w-full">
                                <h2 className="text-xl font-bold">
                                    {tHome('petition.title')}
                                </h2>

                                <p className="mt-3 text-black/75">
                                    {tHome('petition.description')}
                                </p>

                                <ul className="mt-4 list-disc space-y-2 pl-5 text-black/80">
                                    <li>
                                        {tHome('petition.option1')}
                                    </li>
                                    <li>
                                        {tHome('petition.option2')}
                                    </li>
                                </ul>

                                <p className="mt-4 text-black/75">
                                    {tHome('petition.ballotTax')}
                                </p>

                                <p className="mt-4 font-semibold text-black">{tHome('petition.grassroots')}</p>

                                <p className="mt-4 text-black/75">
                                    {tHome('petition.ask')}
                                </p>

                                <div className="mt-6 p-4 bg-black/[0.02] rounded-lg border border-black/10">
                                    <p className="text-sm font-semibold text-black mb-2">{tHome('petition.printAndMail')}</p>
                                    <p className="text-sm text-black/80 whitespace-pre-line">
                                        {tHome('petition.address')}
                                    </p>
                                </div>

                                {/* PDF Viewer */}
                                <div className="mt-6 relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] border border-black/10 rounded-lg overflow-hidden bg-gray-100">
                                    <iframe
                                        src="/documents/petition_form.pdf#view=FitH"
                                        className="w-full h-full"
                                        title="Petition Form"
                                        onError={() => setShowFallback(true)}
                                    />
                                    {showFallback && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-gray-500 bg-gray-100">
                                            <p className="mb-2">{tHome('petition.pdfNotSupported')}</p>
                                            <a href="/documents/petition_form.pdf" className="text-patriot-blue hover:underline font-medium">{tHome('petition.downloadLink')}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - About Rudolph Text Box */}
                        <div className="flex flex-col justify-center items-center md:items-start">
                            <div className="rounded-3xl border border-white/20 bg-white/20 backdrop-blur-md p-6 sm:p-8 shadow-lg" style={{ zIndex: 1 }}>
                                <p className="text-white text-base leading-relaxed mb-6">
                                    Rudolph "Rudy" Tinker is a U.S. Army veteran, small business owner, contractor, and educator who has called Palm Beach County District 6 home for more than 20 years and believes government should work for the people it serves. He is running because taxes and costs keep rising while waste, poor planning, and unaccountable county decisions hurt families and small businesses. His 10-Point Plan delivers clear, practical solutions to cut waste, lower costs, reform county services, and restore responsible, people-first leadership.
                                </p>
                                <Link
                                    href="/about-rudolph"
                                    className="inline-flex items-center text-white font-semibold hover:text-patriot-red transition-colors"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
