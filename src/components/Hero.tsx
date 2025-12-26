"use client";

import Button from "@/components/ui/Button";


export default function Hero() {
    return (
        <section className="relative h-[85dvh] min-h-[520px] overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-[url('/img/hero-background-mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/img/hero-background-desktop.png')]"
                aria-hidden="true"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 z-[1] bg-black/55" />

            <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                        County Commissioner • District 6
                    </div>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                        A 10-Point Plan—Kept.
                    </h1>

                    <p className="mt-4 text-base text-white/85 sm:text-lg">
                        Clear promises. Public progress. Real accountability for District 6.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Button
                            href="/documents/petition_form.pdf"
                            variant="petition"
                            size="md"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sign the Petition
                        </Button>

                        <Button href="#plan" variant="plan" size="md">
                            See the 10 Points
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
