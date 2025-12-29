import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
    title: `Why I Want to Run | About Rudy | ${site.name}`,
    description: "Learn why Rudy is running for County Commissioner.",
};

export default function WhyIWantToRunPage() {
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
                            Why I Want to Run
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12">
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-black/80">
                        Content coming soon...
                    </p>
                </div>
            </div>
        </main>
    );
}

