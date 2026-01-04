import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
    title: `Bio | About Rudy | ${site.name}`,
    description: "Learn about Rudolph 'Rudy' Tinker's background, service, and commitment to Palm Beach County District 6.",
};

export default function BioPage() {
    return (
        <main className="bg-white">
            {/* Header */}
            <div className="bg-black/[0.02] py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <Link
                        href="/about-rudy"
                        className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-patriot-blue hover:text-patriot-red transition-colors"
                    >
                        ← Back to About Rudy
                    </Link>
                    <div className="mt-4">
                        <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                            About Rudolph "Rudy" Tinker
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12">
                <style dangerouslySetInnerHTML={{__html: `
                    .bio-article p {
                        line-height: 2.0 !important;
                    }
                `}} />
                <article className="bio-article prose prose-lg max-w-none prose-headings:font-extrabold prose-strong:font-bold prose-p:text-black/80 prose-p:mb-6 prose-h2:mt-10 prose-h2:mb-6">
                    <h1>About Rudolph "Rudy" Tinker</h1>

                    <p>Rudolph "Rudy" Tinker is a U.S. Army veteran, Certified General Contractor, small business owner, and educator who has lived, worked, and raised his family in Palm Beach County District 6 for more than two decades.<br />
                    He believes government should work for everyday people — not special interests.</p>

                    <p>Born in The Bahamas, Rudy was raised by a devoted single mother and grandmother in a close, multigenerational family that instilled in him the values of faith, discipline, hard work, and service to others.<br />
                    As a child, he immigrated to the United States with his grandmother in search of opportunity.<br />
                    They settled in Hallandale Beach, Florida, where he completed high school and became deeply involved in his community through volunteer work, neighborhood cleanups, food drives, crime-prevention efforts, and the Hallandale Police Explorer Program.<br />
                    For Rudy, service was never a slogan — it was a way of life.</p>

                    <p>After graduating high school in 1996, Rudy enrolled at Florida Atlantic University.<br />
                    While initially pursuing medicine, he worked multiple jobs to pay his way through college and ultimately chose Political Science, recognizing that good government affects every family, every neighborhood, and every opportunity.<br />
                    During this time, he also launched a small retail business in Palm Beach County, learning firsthand the challenges facing small business owners.</p>

                    <p>In 2002, Rudy was hand-selected as a Congressional Intern for Congressman Alcee Hastings, representing the office at civic events during the difficult months following the September 11th attacks.<br />
                    That same year, he graduated college, married young, and enlisted in the United States Army, serving honorably from 2002 to 2005 in support of the Global War on Terror.</p>

                    <p>While on active duty, Rudy purchased his first home in Loxahatchee in 2003 — the community he has proudly called home for more than 23 years.<br />
                    After leaving active service, he became the father of triplet daughters, a responsibility that profoundly shaped his commitment to family, faith, and stability.</p>

                    <p>In 2008, tragedy struck when one of his triplet daughters, Oriya Isabel Tinker, passed away due to complications from a congenital heart condition.<br />
                    For nearly three years, Rudy's life revolved around hospitals, emergency visits, and the daily realities of caring for children with complex medical needs.<br />
                    As the sole provider for his household, he experienced firsthand the emotional, physical, and financial pressures facing working families — an experience that deepened his empathy and strengthened his belief that leaders must understand hardship through lived experience.</p>

                    <p>Today, Rudy is a small business owner, operating a construction and consulting firm that works directly in neighborhoods across Palm Beach County District 6.<br />
                    His work places him on job sites every day, navigating permitting, zoning, drainage, infrastructure challenges, housing affordability, insurance pressures, and the real-world impact of county decisions on working families, farmers, and small businesses.</p>

                    <p>Rudy also serves as an educator, teaching American Government at Palm Beach State College's Loxahatchee and Belle Glade Campus.<br />
                    In addition to higher education, he has taught at Pahokee Middle–Senior High School and Glades Central High School, working directly with students and families throughout the Glades and western communities.<br />
                    In his classrooms, Rudy teaches the U.S. Constitution, the Bill of Rights, voting rights, and how local government decisions — from zoning and budgeting to property taxes and public services — directly affect people's lives.</p>

                    <p>After decades of service — as a veteran, father, contractor, educator, and community member — Rudy is running for public office because he knows District 6 deserves leadership that listens, plans responsibly, shows up in every community, and puts people first.</p>

                    <h2>Rudolph "Rudy" Tinker is not a career politician.</h2>

                    <p><em>He is one of us — working for all of us.</em></p>
                </article>
            </div>
        </main>
    );
}
