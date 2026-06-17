import { getTranslations, setRequestLocale } from 'next-intl/server';
import EndorsementForm from "@/components/EndorsementForm";
import ContentContainer from "@/components/ContentContainer";
import EndorsementsGrid from "@/components/EndorsementsGrid";

export default async function EndorsementsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('common');

    const endorsements = [
        /* Temporarily hiding Janet B. Taylor endorsement
        {
            name: "Janet B. Taylor",
            business: "Former Hendry County Commissioner & Civil Rights Pioneer",
            logo: "/img/endorsements/Taylor Endorsement.webp",
            url: "#",
            description: "Janet B. Taylor is a civil rights pioneer, former law enforcement officer, and one of Hendry County's most respected public servants. A former farmworker, she broke barriers as the first Black female police officer in the history of the Clewiston Police Department and later served 22 years as a Hendry County Commissioner from 1994 to 2016.\n\nCommissioner Taylor has dedicated her life to public service, community advocacy, and expanding opportunities for future generations. I am honored to have the endorsement of such a distinguished leader and trailblazer.",
        },
        */
        {
            name: "Gordan Longhofer, President",
            business: "Palm Beach County Classroom Teachers Association (PBCCTA)",
            logo: "/img/endorsements/PBCCTA.png",
            url: "https://palmbeachcountycta.org",
            description: "The Palm Beach County Classroom Teachers Association (PBCCTA), representing nearly 7,000 educators, has officially endorsed Dr. Rudolph \"Rudy\" Tinker for Palm Beach County Commission District 6.\n\nThe endorsement was unanimously recommended by the PBCCTA Political Action Committee in recognition of Dr. Tinker's commitment to public education, teachers, and student success.",
            comment: "We are proud to endorse Dr. Rudolph 'Rudy' Tinker and look forward to working with him on issues important to educators, students, and our communities.",
        },
        {
            name: "Martha Baker, RN, President",
            business: "SEIU Florida State Council",
            logo: "/img/endorsements/SEIU.png",
            url: "https://www.seiufl.org/",
            description: "Representing more than 60,000 active and retired members across Florida and 2.1 million members nationwide, SEIU Florida has officially endorsed Dr. Rudolph \"Rudy\" Tinker for Palm Beach County Commission District 6.\n\nSEIU Florida supports Dr. Tinker's commitment to working families, economic opportunity, quality public services, and strong communities.",
        },
        {
            name: "Pat Emmert, President",
            business: "Palm Beach/Treasure Coast AFL-CIO",
            logo: "/img/endorsements/Palm-Beach-AFL-CIO.webp",
            url: "https://flaflcio.org/",
            description: "Rudolph Tinker has received the endorsement of Unions of Palm Beach-treasure Coast AFL-CIO for Palm Beach County Commisioner, District 6.",
        },
        {
            name: "Judith Thomas",
            business: "Commissioner, Town of Lake Park",
            logo: "/img/endorsements/Commissioner Judith Thomas Lake Park.webp",
            url: "",
            comment: "Dr. Rudolph \"Rudy\" Tinker is a man of integrity, service, and vision. He has a proven track record of leadership in education, the military, and our community. I am confident that he will be a strong voice for District 6 and work tirelessly to improve the lives of our residents. I am proud to endorse Dr. Rudy Tinker for Palm Beach Commissioner.",
        },
        {
            name: "Michael J. Hensley",
            business: "Vice Mayor, Town of Lake Park",
            logo: "/img/endorsements/Vice Mayor Michael J. Hensley Lake Park.webp",
            url: "",
        },
        {
            name: "Dale Holness",
            business: "Former Mayor, Broward County",
            logo: "/img/endorsements/Former Mayor of Broward County Dale Holness.webp",
            url: "",
        },
        {
            name: "Roger Michaud",
            business: "Mayor, Town of Lake Park",
            logo: "/img/endorsements/Mayor Roger Michaud of Lake Park.webp",
            url: "",
            comment: "As your Mayor, I know the importance of leadership, integrity, and putting our community first. Dr. Rudolph \"Rudy\" Tinker exemplifies those values. He has the experience, the vision, and the commitment to serve all residents of District 6 with honor and dedication. I am proud to endorse Dr. Rudy Tinker for Palm Beach County Commissioner",
        },
        {
            name: "Barbara King",
            business: "Commissioner, City of Pahokee",
            logo: "/img/endorsements/Commissioner Barbara King.webp",
            url: "",
            comment: "Dr. Rudolph Tinker is the kind of leader Palm Beach County needs - experienced, committed, and ready to fight for our families. He's someone who truly lives in our community and understands our challenges. He has my full support!",
        },
        {
            name: "Marcia Andrews",
            business: "Palm Beach School District 6 Commissioner",
            logo: "/img/endorsements/Commissioner Marcia Andrews.webp",
            url: "",
            comment: "He is outstanding, got his signatures, military veteran, teacher and professor, has lived in his community for more than 25 years",
        },
        {
            name: "Dr. Robert Watson",
            business: "Professor",
            logo: "/img/endorsements/DrRobert Watson.webp",
            url: "",
        },
        {
            name: "Angie Nixon",
            business: "Florida House Representative",
            logo: "/img/endorsements/FL Rep Angie Nixon.webp",
            url: "",
            comment: "Dr. Rudy Tinker is a man of integrity, vision, and commitment to our community. He will be a strong voice for District 6 and will work tirelessly to improve the lives of our residents. I am proud to endorse him for Palm Beach County Commissioner",
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
                    <EndorsementsGrid endorsements={endorsements} />
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

