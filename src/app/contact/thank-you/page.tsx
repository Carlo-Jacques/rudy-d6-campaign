import Link from "next/link";
import { site } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Thank You | ${site.name}`,
    description: "Thank you for contacting us.",
};

export default function ContactThankYouPage() {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 py-20 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                ✓
            </div>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                Thank You for Your Message!
            </h1>

            <p className="mt-4 max-w-lg text-lg text-black/70">
                We've received your message and will get back to you as soon as possible. Your input helps us better serve District 6.
            </p>

            <div className="mt-10">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-patriot-blue px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-patriot-blue/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-patriot-blue"
                >
                    Return to Home
                </Link>
            </div>
        </main>
    );
}

