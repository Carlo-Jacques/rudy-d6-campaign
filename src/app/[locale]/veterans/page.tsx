import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import ContentContainer from '@/components/ContentContainer';
import VeteranStoryForm from '@/components/VeteranStoryForm';
import VeteranCarousel from '@/components/VeteranCarousel';

export default async function VeteranPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('veterans');

    return (
        <main className="bg-white">
            {/* Header */}
            <header className="relative py-20 sm:py-24 max-md:aspect-[4/5] max-md:py-0 overflow-hidden flex items-center justify-center">
                {/* Responsive Background Image */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-center"
                    style={{
                        backgroundColor: "#00214e",
                        backgroundSize: "contain"
                    }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .veteran-banner-bg {
                            background-image: url('/img/veterans-desktop.webp');
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                        @media (max-width: 639px) {
                            .veteran-banner-bg {
                                background-image: url('/img/veterans-mobile.webp');
                                background-size: 100% 100%;
                            }
                        }
                        `
                    }} />
                    <div className="absolute inset-0 veteran-banner-bg" />
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black/60 z-0" />
                </div>
                <ContentContainer className="relative z-10 text-center max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        {t('headerTitle')}
                    </h1>
                    <p className="mt-4 text-lg text-white/90">
                        {t('headerDescription')}
                    </p>
                </ContentContainer>
            </header>

            {/* Service History Section */}
            <section className="py-20 sm:py-24 bg-slate-50/50 overflow-hidden">
                <ContentContainer>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-patriot-red">
                            {t('service.subtitle')}
                        </h2>
                        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                            {t('service.title')}
                        </h3>
                    </div>

                    <div className="relative max-w-5xl mx-auto mt-12">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-patriot-red via-patriot-blue to-patriot-blue/20 -translate-x-1/2 hidden sm:block" />
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-patriot-red via-patriot-blue to-patriot-blue/20 sm:hidden" />

                        {/* Specialist Block (2002 - 2005) */}
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 items-center mb-16 sm:mb-24">
                            {/* Dot */}
                            <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-patriot-red border-4 border-white shadow-md -translate-x-1/2 z-10" />

                            <div className="pl-10 sm:pl-0 sm:pr-8 md:pr-12 sm:text-right">
                                <h4 className="text-xl md:text-2xl font-bold text-patriot-blue">
                                    {t('service.specialistTitle')}
                                </h4>
                                <div className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 space-y-4" dangerouslySetInnerHTML={{ __html: t.raw('service.specialistContent') }} />
                            </div>

                            <div className="pl-10 sm:pl-8 md:pl-12">
                                <div className="relative aspect-[4/5] max-w-sm mx-auto sm:mx-0 overflow-hidden rounded-2xl shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
                                    <Image
                                        src="/img/veterans/Specialist Rudolph Tinker.webp"
                                        alt="Rudolph Tinker US Army"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Major Block (2026 - Present) */}
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Dot */}
                            <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-patriot-blue border-4 border-white shadow-md -translate-x-1/2 z-10" />

                            <div className="pl-10 sm:pl-0 sm:pr-8 md:pr-12 order-2 sm:order-1">
                                <div className="relative aspect-[2/3] max-w-sm mx-auto sm:mr-0 sm:ml-auto overflow-hidden rounded-2xl shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
                                    <Image
                                        src="/img/veterans/Major Rudolph Tinker.webp"
                                        alt="Major Rudolph Tinker Portrait"
                                        fill
                                        style={{ objectPosition: 'center 35%' }}
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="pl-10 sm:pl-8 md:pl-12 order-1 sm:order-2">
                                <h4 className="text-xl md:text-2xl font-bold text-patriot-red">
                                    {t('service.majorTitle')}
                                </h4>
                                <div className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 space-y-4" dangerouslySetInnerHTML={{ __html: t.raw('service.majorContent') }} />
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </section>

            {/* VA Section */}
            <section className="bg-patriot-red py-20 border-y border-patriot-red">
                <ContentContainer>
                    {/* Main VA Content centered */}
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white/90">
                            {t('va.subtitle')}
                        </h2>
                        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            {t('va.title')}
                        </h3>
                        <div className="mt-8 text-lg leading-relaxed text-white/90" dangerouslySetInnerHTML={{ __html: t.raw('va.content') }} />
                    </div>

                    {/* Child Grid for Testimonials (like endorsements page) */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Shawn Ellis Tile */}
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/10 border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
                            <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-xl">
                                <VeteranCarousel />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-white">
                                {t('shawn.name')}
                            </h3>
                            <h4 className="text-sm font-medium text-white/80 mt-1">
                                {t('shawn.title')}
                            </h4>
                            <p className="mt-4 text-sm leading-relaxed text-white/90 italic">
                                "{t('shawn.content')}"
                            </p>
                        </div>

                        {/* Placeholders to maintain 3x1 grid visual */}
                        <div className="h-full w-full rounded-2xl bg-white/5 border border-white/5 opacity-40 hidden sm:block" />
                        <div className="h-full w-full rounded-2xl bg-white/5 border border-white/5 opacity-40 hidden lg:block" />
                    </div>
                </ContentContainer>
            </section>

            {/* Share Your Story Section */}
            <section className="py-24">
                <ContentContainer>
                    <div className="gap-12 lg:flex lg:items-stretch">
                        {/* Left Side: Form (3/5) */}
                        <div className="lg:w-3/5">
                            <div className="mb-12">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-patriot-red">
                                    {t("share.subtitle")}
                                </h2>
                                <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                                    {t("share.title")}
                                </h3>
                                <p className="mt-4 text-lg text-gray-600">{t("share.description")}</p>
                            </div>

                            <div className="rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 md:p-12">
                                <VeteranStoryForm />
                            </div>
                        </div>

                        {/* Right Side: Portrait (2/5) */}
                        <div className="lg:w-2/5">
                            <div className="relative h-full min-h-[520px] overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/img/rudolph_tinker_army_overcoat_2.webp"
                                    alt="Rudolph Tinker Military Portrait"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-24 border-t border-gray-100 pt-12 text-center">
                        <p className="max-w-2xl mx-auto text-sm text-gray-500 leading-relaxed italic">
                            {t('disclaimer')}
                        </p>
                    </div>
                </ContentContainer>
            </section>
        </main>
    );
}
