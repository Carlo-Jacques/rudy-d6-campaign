import { getTranslations, setRequestLocale } from 'next-intl/server';
import EndorsementForm from "@/components/EndorsementForm";
import ContentContainer from "@/components/ContentContainer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default async function EndorsementsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('common');

    const endorsements = [
        {
            name: "Carlo Jacques",
            logo: "/img/endorsements/charlottes_web_design_logo.webp",
            url: "https://charlottesweb.design/",
        }
    ];

    return (
        <main className="bg-patriot-white">
            {/* Hero Section */}
            <section className="relative mt-[25px] sm:mt-0 py-20 sm:py-24"
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
            </section>

            {/* Endorsements Grid Section */}
            <section className="bg-patriot-red py-16 text-white">
                <ContentContainer>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {endorsements.map((endorsement, i) => (
                            <Link
                                key={i}
                                href={endorsement.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-[1.02] shadow-xl text-center"
                            >
                                <div className="relative w-full aspect-square mb-6">
                                    <Image
                                        src={endorsement.logo}
                                        alt={`${endorsement.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white/90">
                                    Charlotte's Web Design
                                </h3>
                                <h4>{endorsement.name}</h4>
                            </Link>
                        ))}

                        {/* Remaining placeholders */}
                        {Array.from({ length: 7 }).map((_, i) => (
                            <div
                                key={`placeholder-${i}`}
                                className="aspect-square rounded-2xl bg-white/5 border border-white/5 opacity-40"
                            />
                        ))}
                    </div>
                </ContentContainer>
            </section>

            {/* Endorsement Form Section */}
            <section className="bg-patriot-white py-16">
                <ContentContainer className="max-w-3xl">
                    <h2 className="text-center text-3xl font-bold text-patriot-blue md:text-4xl">
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

