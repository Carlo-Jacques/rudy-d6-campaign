import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import ContentContainer from "@/components/ContentContainer";

export default async function AboutRudolphPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('aboutRudolph');
    const tCommon = await getTranslations('common');

    return (
        <main className="bg-white" style={{ height: '80dvh' }}>
            {/* Header */}
            <div className="relative py-16 sm:py-20"
                style={{
                    backgroundImage: "url('/img/about-rudolph-banner.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#00214e",
                }}
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/70 z-0" />
                <ContentContainer className="relative z-10 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        {t('title')}
                    </h1>
                    <p className="mt-4 text-lg text-white/70">
                        {t('description')}
                    </p>
                </ContentContainer>
            </div>

            {/* Content */}
            <ContentContainer className="py-12">
                <div className="grid gap-6 sm:grid-cols-3">
                    <Link
                        href="/about-rudolph/bio"
                        className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:border-patriot-blue hover:shadow-md"
                    >
                        <h2 className="text-xl font-bold text-black group-hover:text-patriot-blue transition-colors">
                            {t('bio.title')}
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            {t('bio.description')}
                        </p>
                    </Link>

                    <Link
                        href="/about-rudolph/preparedness"
                        className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:border-patriot-blue hover:shadow-md"
                    >
                        <h2 className="text-xl font-bold text-black group-hover:text-patriot-blue transition-colors">
                            {t('preparedness.title')}
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            {t('preparedness.description')}
                        </p>
                    </Link>

                    <Link
                        href="/about-rudolph/why-i-want-to-run"
                        className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:border-patriot-blue hover:shadow-md"
                    >
                        <h2 className="text-xl font-bold text-black group-hover:text-patriot-blue transition-colors">
                            {t('whyIWantToRun.title')}
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            {t('whyIWantToRun.description')}
                        </p>
                    </Link>
                </div>
            </ContentContainer>
        </main>
    );
}

