import { getTranslations, setRequestLocale } from 'next-intl/server';
import EndorsementForm from "@/components/EndorsementForm";
import ContentContainer from "@/components/ContentContainer";

export default async function EndorsementsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('common');

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <div className="relative py-20 sm:py-24"
                style={{
                    backgroundImage: "url('/img/endorsement-banner-rudy.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "rgb(0, 33, 78)",
                }}
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/50 z-0" />
                <ContentContainer className="relative z-10 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        {t('endorsements')}
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto md:text-xl">
                        Proud to be supported by community leaders and organizations across District 6.
                    </p>
                </ContentContainer>
            </div>

            {/* Endorsements Grid */}
            <section className="py-16">
                <ContentContainer>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Placeholder endorsement cards */}
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square rounded-lg bg-gray-300 transition-all hover:bg-gray-400"
                                aria-label={`Endorsement placeholder ${i + 1}`}
                            />
                        ))}
                    </div>
                </ContentContainer>
            </section>

            {/* Endorsement Form Section */}
            <section className="bg-patriot-red py-16">
                <ContentContainer className="max-w-3xl">
                    <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
                        I Endorse Rudolph Tinker!
                    </h2>
                    <div className="mt-8">
                        <EndorsementForm />
                    </div>
                </ContentContainer>
            </section>
        </main>
    );
}

