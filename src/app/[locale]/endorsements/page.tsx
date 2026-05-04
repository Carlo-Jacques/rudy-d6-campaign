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
            name: "Pat Emmert, President",
            business: "Palm Beach/Treasure Coast AFL-CIO",
            logo: "/img/endorsements/Palm-Beach-LOGO.webp",
            url: "https://flaflcio.org/",
            comment: "Rudolph Tinker has received the endorsement of Unions of Palm Beach-treasure Coast AFL-CIO for Palm Beach County Commisioner, District 6.",
        },
        {
            name: "Carlo Jacques",
            business: "Charlotte's Web Design",
            logo: "/img/endorsements/charlottes_web_design_logo.png",
            url: "https://charlottesweb.design/",
            comment: "Rudolph Tinker has been forthright, transparent, and principled in every interaction I’ve had with him. He listens, he follows through, and he leads with integrity. I proudly endorse his candidacy and believe he will serve District 6 with honesty and accountability.",
        },
        {
            name: "Israel Perez",
            business: "I.P. Screen Enclosures",
            logo: "/img/endorsements/ip_screen_logo.jpg",
            url: "https://www.facebook.com/people/Ip-Screen-Enclosures-LLC/61583392904282/",
            comment: "I’ve known Rudy for many years, and he is someone I trust without hesitation. He’s consistent, dependable, and genuinely committed to doing what’s right for the community. District 6 would be well served by his leadership.",
        },
        {
            name: "Minesh Mohan",
            business: "Skyline Motel",
            logo: "/img/endorsements/skyline_motel.webp",
            url: "#",
            comment: "I’ve known Rudolph since 1995, and over the years I’ve watched him grow into a disciplined, educated, and principled leader. His dedication to education, his service in the military, and his success as a businessperson all reflect his commitment to hard work and accountability. Most importantly, he has always stayed dedicated to his community and the people around him.",
        },
        {
            name: "Viktoriia Zelenkova",
            business: "Vyder General Contractors",
            logo: "/img/endorsements/vyder_general_contractors_logo.webp",
            url: "#",
            comment: "Rudy is an outstanding contractor—professional, reliable, and detail-oriented. He delivers quality work and stands by his word. That same work ethic is exactly what our community needs in a leader.",
        },
        {
            name: "Noel H. Flasterstein",
            business: "Law Offices of Noel H. Flasterstein, P.A.",
            logo: "/img/endorsements/Noel_Flasterstein_Logo.png",
            url: "https://flgunlaw.com/",
            comment: "Rudy helped with a permitting and contracting issue when no one else did. Rudolph Tinker’s educational achievements speak volumes about his work ethic, judgment, and commitment to public service. He is clearly someone who values preparation and accountability.",
        },
        {
            name: "Dev Ramgoolam",
            business: "Sunshine Tents & Event Rentals",
            logo: "/img/endorsements/Sunshine_Tents_Event_Rentals.webp",
            url: "https://sunshinetentsfl.com/",
            comment: "Rudolph is a military veteran who has done a lot for our country. I’ve known Rudolph for more than 30 years, since 1992. He’s been a good friend and like a brother to me. His dedication, work ethic, and commitment to doing things the right way have never changed. He’s someone you can trust to stand up and follow through.",
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
            comment: "With extensive legal and academic credentials, Rudolph Tinker brings a level of preparation and intellectual rigor that is rare in local politics. His education shows a commitment to understanding policy, law, and governance at a serious level.",
        },
        {
            name: "Robby Eddy",
            business: "Spectrum A/C",
            logo: "/img/endorsements/spectrum_ac.webp",
            url: "https://www.mylocalacheroes.com/",
            comment: "Rudolph Tinker is the kind of leader our community needs — knowledgeable, accessible, and grounded in real experience. As the owner of Spectrum A/C, I see firsthand how county decisions impact small businesses and development. Rudolph gets it, and I’m proud to support his campaign for District 6.",
        },
        {
            name: "Pedro Nunez",
            business: "Vesta Roofing",
            logo: "/img/endorsements/vesta-roofing.webp",
            url: "https://vestaroofing.com/",
            comment: "As a business owner in the construction industry, I know how important experience, accountability, and integrity are. Rudolph Tinker understands what small businesses, contractors, and working families face every day. He brings real-world knowledge, not politics, and that’s why I proudly endorse him for Palm Beach County Commissioner District 6.",
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
                        {Array.from({ length: 2 }).map((_, i) => (
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

