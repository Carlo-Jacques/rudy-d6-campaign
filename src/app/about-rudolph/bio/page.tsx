import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";
import ContentContainer from "@/components/ContentContainer";
import BioImage from "@/components/BioImage";

export const metadata: Metadata = {
    title: `Bio | About Rudolph | ${site.name}`,
    description: "Learn about Rudolph 'Rudy' Tinker's background, service, and commitment to Palm Beach County District 6.",
};

export default function BioPage() {
    return (
        <main className="bg-white">
            {/* Header */}
            <div className="relative py-16 sm:py-20"
            style={{
                        backgroundImage: "url('/img/banner-head.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#00214e",
                        }}
                        >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/50 z-0" />
                
                {/* Content */}
                <ContentContainer className="relative z-10">
                    <Link
                        href="/about-rudolph"
                        className="group mb-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-patriot-red transition-all duration-200"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                        <span>Back to About Rudolph</span>
                    </Link>
                    <div className="mt-4">
                        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Bio 
                        </h1>
                    </div>
                </ContentContainer>
            </div>

            {/* Content */}
            <ContentContainer className="py-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
                    {/* Left side - Content (second on mobile, left on desktop) */}
                    <div className="order-2 lg:order-1">
                        <style dangerouslySetInnerHTML={{__html: `
                            .bio-article p {
                                line-height: 2.0 !important;
                            }
                        `}} />
                        <article className="bio-article prose prose-lg max-w-none prose-headings:font-extrabold prose-strong:font-bold prose-p:text-black/80 prose-p:mb-6 prose-h2:mt-10 prose-h2:mb-6">
                            <section className="bio">
                        <p>
                            <strong>Rudolph "Rudy" Tinker</strong> is a <strong>U.S. Army veteran</strong>, <strong>Certified General Contractor</strong>,
                            <strong>small business owner</strong>, and <strong>educator</strong> who has lived, worked, and raised his family in
                            <strong>Palm Beach County District 6</strong> for more than two decades.
                            <br /><br />
                            <em>He believes government should work for everyday people — not special interests.</em>
                        </p>


                        <p>
                            Born in <strong>The Bahamas</strong>, Rudy was raised by a devoted single mother and grandmother in a close,
                            multigenerational family that instilled in him the values of <strong>faith</strong>, <strong>discipline</strong>,
                            <strong>hard work</strong>, and <strong>service to others</strong>.
                            <br /><br />
                            As a child, he immigrated to the United States with his grandmother in search of opportunity.
                            <br /><br />
                            They settled in <strong>Hallandale Beach, Florida</strong>, where he completed high school and became deeply involved
                            in his community through volunteer work, neighborhood cleanups, food drives, crime-prevention efforts, and the
                            <strong>Hallandale Police Explorer Program</strong>.
                            <br /><br />
                            <strong>For Rudy, service was never a slogan — it was a way of life.</strong>
                        </p>


                        <p>
                            After graduating high school in <strong>1996</strong>, Rudy enrolled at <strong>Florida Atlantic University</strong>.
                            <br /><br />
                            While initially pursuing medicine, he worked multiple jobs to pay his way through college and ultimately chose
                            <strong>Political Science</strong>, recognizing that good government affects every family, every neighborhood,
                            and every opportunity.
                            <br /><br />
                            During this time, he also launched a small retail business in Palm Beach County, learning firsthand the challenges
                            facing small business owners.
                        </p>


                        <p>
                            In <strong>2002</strong>, Rudy was hand-selected as a <strong>Congressional Intern</strong> for Congressman
                            <strong>Alcee Hastings</strong>, representing the office at civic events during the difficult months following the
                            <strong>September 11th</strong> attacks.
                            <br /><br />
                            That same year, he graduated college, married young, and enlisted in the <strong>United States Army</strong>,
                            serving honorably from <strong>2002 to 2005</strong> in support of the <strong>Global War on Terror</strong>.
                        </p>


                        <p>
                            While on active duty, Rudy purchased his first home in <strong>Loxahatchee</strong> in <strong>2003</strong> — the
                            community he has proudly called home for more than <strong>23 years</strong>.
                            <br /><br />
                            After leaving active service, he became the father of triplet daughters, a responsibility that profoundly shaped
                            his commitment to <strong>family</strong>, <strong>faith</strong>, and <strong>stability</strong>.
                        </p>


                        <p>
                            In <strong>2008</strong>, tragedy struck when one of his triplet daughters, <strong>Oriya Isabel Tinker</strong>,
                            passed away due to complications from a congenital heart condition.
                            <br /><br />
                            For nearly three years, Rudy's life revolved around hospitals, emergency visits, and the daily realities of caring
                            for children with complex medical needs.
                            <br /><br />
                            As the sole provider for his household, he experienced firsthand the emotional, physical, and financial pressures
                            facing working families — an experience that deepened his empathy and strengthened his belief that leaders must
                            understand hardship through lived experience.
                        </p>

                        

                        <p>
                            Today, Rudy is a small business owner, operating a construction and consulting firm that works directly in
                            neighborhoods across <strong>Palm Beach County District 6</strong>.
                            <br /><br />
                            His work places him on job sites every day, navigating permitting, zoning, drainage, infrastructure challenges,
                            housing affordability, insurance pressures, and the real-world impact of county decisions on working families,
                            farmers, and small businesses.
                        </p>


                        <p>
                            Rudy also serves as an educator, teaching <strong>American Government</strong> at <strong>Palm Beach State College</strong>'s
                            <strong>Loxahatchee</strong> and <strong>Belle Glade</strong> Campus.
                            <br /><br />
                            In addition to higher education, he has taught at <strong>Pahokee Middle–Senior High School</strong> and
                            <strong>Glades Central High School</strong>, working directly with students and families throughout the Glades and
                            western communities.
                            <br /><br />
                            In his classrooms, Rudy teaches the <strong>U.S. Constitution</strong>, the <strong>Bill of Rights</strong>,
                            voting rights, and how local government decisions — from zoning and budgeting to property taxes and public services —
                            directly affect people's lives.
                        </p>


                        <p>
                            After decades of service — as a veteran, father, contractor, educator, and community member — Rudy is running for
                            public office because he knows District 6 deserves leadership that <strong>listens</strong>, <strong>plans responsibly</strong>,
                            <strong>shows up in every community</strong>, and <strong>puts people first</strong>.
                        </p>

                        <p>
                            <strong>Rudolph "Rudy" Tinker is not a career politician.</strong>
                            <br />
                            <strong>He is one of us — working for all of us.</strong>
                        </p>
                            </section>
                        </article>
                    </div>

                    {/* Right side - Image (first on mobile, right on desktop) */}
                    <div className="order-1 lg:order-2 lg:sticky lg:top-12 lg:self-start">
                        <BioImage />
                    </div>
                </div>
            </ContentContainer>
        </main>
    );
}

