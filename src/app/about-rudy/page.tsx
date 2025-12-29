import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
    title: `About Rudy | ${site.name}`,
    description: "Learn about Rudy and his campaign for Palm Beach County Commissioner District 6.",
};

export default function AboutRudyPage() {
    return (
        <main className="bg-white">
            {/* Header */}
            <div className="bg-black/[0.02] py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                        About Rudy
                    </h1>
                    <p className="mt-4 text-lg text-black/70">
                        Learn more about the candidate and his vision for District 6.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12">
                <div className="grid gap-6 sm:grid-cols-3">
                    <Link
                        href="/about-rudy/bio"
                        className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:border-patriot-blue hover:shadow-md"
                    >
                        <h2 className="text-xl font-bold text-black group-hover:text-patriot-blue transition-colors">
                            Bio
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            Learn about Rudy's background and experience.
                        </p>
                    </Link>

                    <Link
                        href="/about-rudy/preparedness"
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
                        href="/about-rudy/why-i-want-to-run"
                        className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:border-patriot-blue hover:shadow-md"
                    >
                        <h2 className="text-xl font-bold text-black group-hover:text-patriot-blue transition-colors">
                            Why I Want to Run
                        </h2>
                        <p className="mt-2 text-sm text-black/70">
                            Discover what drives Rudy's campaign.
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    );
}

