import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";
import ContentContainer from "@/components/ContentContainer";

export const metadata: Metadata = {
    title: `About Rudolph | ${site.name}`,
    description: "Learn about Rudolph and his campaign for Palm Beach County Commissioner District 6.",
};

export default function AboutRudolphPage() {
    return (
        <main className="bg-white">
            {/* Header */}
            <div className="bg-black/[0.02] py-16 sm:py-20">
                <ContentContainer className="text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                        About Rudolph
                    </h1>
                    <p className="mt-4 text-lg text-black/70">
                        Learn more about the candidate and his vision for District 6.
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
                            Bio
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            Learn about Rudolph's background and experience.
                        </p>
                    </Link>

                    <Link
                        href="/about-rudolph/preparedness"
                        className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:border-patriot-blue hover:shadow-md"
                    >
                        <h2 className="text-xl font-bold text-black group-hover:text-patriot-blue transition-colors">
                            Preparedness
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            Academic background, certifications, and professional licenses.
                        </p>
                    </Link>

                    <Link
                        href="/about-rudolph/why-i-want-to-run"
                        className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:border-patriot-blue hover:shadow-md"
                    >
                        <h2 className="text-xl font-bold text-black group-hover:text-patriot-blue transition-colors">
                            Why I Want to Run
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            Discover what drives Rudolph's campaign.
                        </p>
                    </Link>
                </div>
            </ContentContainer>
        </main>
    );
}


