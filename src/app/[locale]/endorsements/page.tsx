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
            business: "Charlotte's Web Design",
            logo: "/img/endorsements/charlottes_web_design_logo.webp",
            url: "https://charlottesweb.design/",
            comment: "Rudolph Tinker has also been forthright with me and I endorse his candidacy",
        },
        {
            name: "Israel Perez",
            business: "I.P. Screen Enclosures",
            logo: "/img/endorsements/ip_screen_logo.jpg",
            url: "https://www.facebook.com/people/Ip-Screen-Enclosures-LLC/61583392904282/",
            comment: "I've known Rudy for a long time and trust him",
        },
        {
            name: "Minesh Mohan",
            business: "Skyline Motel",
            logo: "/img/endorsements/Skyline_motel_logo.PNG",
            url: "#",
            comment: "I endorse Rudolph Tinker",
        },
        {
            name: "Viktoriia Zelenkova",
            business: "Vyder General Contractors",
            logo: "/img/endorsements/vyder_general_contractors_logo.webp",
            url: "#",
            comment: "Awesome Contractor!!!!!!!!!!!",
        },
        {
            name: "Noel H. Flasterstein",
            business: "Law Offices of Noel H. Flasterstein, P.A.",
            logo: "/img/endorsements/Noel_Flasterstein_Logo.png",
            url: "https://flgunlaw.com/",
            comment: "Rudy helped with a permitting and contracting issue when no one else did",
        },
        {
            name: "Dev Ramgoolam",
            business: "Sunshine Tents & Event Rentals",
            logo: "/img/endorsements/Sunshine_Tents_Event_Rentals.webp",
            url: "https://sunshinetentsfl.com/",
            comment: "Rudolph is a military veteran who has done a lot for our country.",
        },
        {
            name: "Racheem Sagay",
            business: "BioBusters Remediation, LLC",
            logo: "/img/endorsements/BioBusters_Remediation_LLC.webp",
            url: "https://thebiobusters.com/",
            comment: "I believe in the principles in the values that Rudolph stands for; lower property taxes, youth recreation centers, and revamping code enforcement.",
        },
        {
            name: "Chris Kleppin, Esq.",
            business: "Kleppin Law Firm",
            logo: "/img/endorsements/kleppin_logo.webp",
            url: "https://www.kleppinlawfirm.com",
            comment: "I endorse Rudolph Tinker.",
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
                                className="group flex flex-col items-center justify-start p-8 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-[1.02] shadow-xl text-center h-full"
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
                                    {endorsement.business}
                                </h3>
                                <h4 className="text-sm font-medium text-white/80 mt-1">{endorsement.name}</h4>
                                {endorsement.comment && (
                                    <p className="text-sm text-white/90 mt-4 italic">
                                        &quot;{endorsement.comment}&quot;
                                    </p>
                                )}
                            </Link>
                        ))}

                        {/* Remaining placeholders */}
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={`placeholder-${i}`}
                                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 opacity-40 text-center h-full"
                            >
                                <div className="relative w-full aspect-square mb-6">
                                    {/* Placeholder for logo */}
                                </div>
                            </div>
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

