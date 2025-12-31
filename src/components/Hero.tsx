"use client";

import Button from "@/components/ui/Button";
import ContactForm from "@/components/ContactForm";


export default function Hero() {
    return (
        <section className="relative h-[100dvh] min-h-[100dvh] overflow-hidden pt-[100px] md:pt-0 md:min-h-[700px] m-0">
            <div
                className="absolute inset-0 z-0 bg-[url('/img/hero-background-mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/img/hero-background-desktop.png')]"
                style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                aria-hidden="true"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 z-[1] bg-black/55" />

            <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 py-12 md:py-8">
                <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left side - Text content */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white w-fit">
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

                    {/* Right side - Contact form */}
                    <div className="flex flex-col justify-center py-4">
                        <div className="w-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">Call to Serve</h2>
                            <p className="text-sm text-white/80 mb-6">
                                Have a question or want to get involved? Send us a message.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
