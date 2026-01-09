"use client";

import Button from "@/components/ui/Button";
import { useTranslations } from 'next-intl';


export default function Hero() {
    const t = useTranslations('hero');
    
    return (
        <section className="relative min-h-[100dvh] overflow-visible -mt-[120px] pt-[220px] md:pt-[120px] md:min-h-[calc(100dvh+120px)]">
            <div
                className="absolute inset-0 z-0 bg-[url('/img/Hero-Bg-Image.webp')] bg-cover bg-center bg-no-repeat"
                aria-hidden="true"
            />

            {/* Dark overlay */}
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[1] bg-black/55">
                <div className="relative h-full max-w-6xl mx-auto px-4 flex justify-end items-end flex-wrap" style={{ textAlign: 'right' }}>
                    <img
                        src="/img/hero-rudolph-tinker.webp"
                        alt="Rudolph Tinker"
                        className="w-auto h-[50%] sm:h-[55%] md:h-[65%] lg:h-[70%] max-w-[80%] sm:max-w-[85%] md:max-w-[90%] lg:max-w-[95%] object-contain"
                        style={{ zIndex: -1 }}
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-100px)] max-w-6xl items-center px-4 py-12 md:min-h-[100dvh] md:py-8">
                <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left side - Content */}
                    <div className="flex flex-col justify-center">
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

                        {/* Mailing address and PDF */}
                        <div className="mt-8 w-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">{t('helpTitle')}</h3>
                            
                            {/* Mailing address */}
                            <div className="mb-6 rounded-lg border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
                                <p className="text-sm font-semibold text-white mb-2">{t('mailAddress')}</p>
                                <p className="text-sm text-white/90 leading-relaxed whitespace-pre-line">
                                    {t('address')}
                                </p>
                            </div>

                            {/* PDF Viewer */}
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] border border-white/20 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
                                <iframe
                                    src="/documents/petition_form.pdf#view=FitH"
                                    className="w-full h-full"
                                    title="Petition Form"
                                >
                                    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-white/80">
                                        <p className="mb-2">{t('pdfNotSupported')}</p>
                                        <a href="/documents/petition_form.pdf" className="text-white hover:underline font-medium">{t('viewPdf')}</a>
                                    </div>
                                </iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Blank */}
                    <div className="flex flex-col justify-center">
                    </div>
                </div>
            </div>
        </section>
    );
}
