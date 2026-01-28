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
            <section>
                <ContentContainer>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-patriot-red">
                                {t('service.subtitle')}
                            </h2>
                            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                                {t('service.title')}
                            </h3>
                            <div className="mt-6 text-lg leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: t.raw('service.content') }} />
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/img/military_rudolph_tinker_portrait_transparent.webp"
                                alt="Rudolph Tinker Military Portrait"
                                fill
                                className="object-cover object-top"
                                priority
                            />
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
