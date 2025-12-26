import EndorsementForm from "@/components/EndorsementForm";

export default function EndorsementsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="border-b border-black/10 bg-gradient-to-b from-gray-50 to-white py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <h1 className="text-4xl font-bold text-black md:text-5xl">
                        Endorsements
                    </h1>
                    <p className="mt-4 text-lg text-black/70 md:text-xl">
                        Proud to be supported by community leaders and organizations across District 6.
                    </p>
                </div>
            </section>

            {/* Endorsements Grid */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Placeholder endorsement cards */}
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-square rounded-lg bg-gray-300 transition-all hover:bg-gray-400"
                                aria-label={`Endorsement placeholder ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Endorsement Form Section */}
            <section className="bg-patriot-red py-16">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
                        I Endorse Rudolph Tinker!
                    </h2>
                    <div className="mt-8">
                        <EndorsementForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
