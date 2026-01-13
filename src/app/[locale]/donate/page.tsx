import { Metadata } from 'next';
import { site } from '@/lib/site';
import DonateForm from '@/components/DonateForm';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'donate' });

    return {
        title: `${t('title')} | ${site.name}`,
        description: t('metaDescription'),
    };
}

export default async function DonatePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('donate');

    return (
        <main>
            {/* Above the fold - with background image */}
            <div
                className="relative min-h-screen bg-[url('/img/donate-rudy-background.webp')] bg-cover bg-center bg-no-repeat bg-fixed"
            >
                {/* Content */}
                <div className="relative z-10 min-h-screen">
                    <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
                        {/* Form Section */}
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Left side - Donate Form */}
                            <div>
                                <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                                    <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                                        {t('supportTitle')}
                                    </h1>
                                    <p className="mt-4 text-lg text-black/70">
                                        {t('supportDescription')}
                                    </p>
                                    <div className="mt-8">
                                        <DonateForm />
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Empty for now or can add other content */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Below the fold - white background */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
                    <div className="mx-auto max-w-4xl">
                        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                            <h2 className="text-2xl font-bold text-black mb-4">
                                {t('whyTitle')}
                            </h2>
                            <p className="text-black/80 mb-6">
                                {t('whyDescription')}
                            </p>
                            <ul className="space-y-3 text-black/80 mb-6">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                                    <span>{t('benefit1')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                                    <span>{t('benefit2')}</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                                    <span>{t('benefit3')}</span>
                                </li>
                            </ul>

                            {/* Disclaimer */}
                            <div className="mt-8 rounded-xl border border-black/10 bg-black/[0.02] p-4">
                                <p className="text-xs leading-relaxed text-black/70">
                                    {t('disclaimer')}
                                </p>
                                <p className="mt-3 text-xs font-semibold text-black">
                                    {t('paidFor')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
