import EndorsementForm from "@/components/EndorsementForm";
import ContentContainer from "@/components/ContentContainer";

export default function EndorsementsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="border-b border-black/10 bg-gradient-to-b from-gray-50 to-white py-16">
                <ContentContainer>
                    <h1 className="text-4xl font-bold text-black md:text-5xl">
                        Endorsements
                    </h1>
                    <p className="mt-4 text-lg text-black/70 md:text-xl">
                        Proud to be supported by community leaders and organizations across District 6.
                    </p>
                </ContentContainer>
            </section>

            {/* Endorsements Grid */}
            <section className="py-16">
                <ContentContainer>
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
                </ContentContainer>
            </section>

            {/* Endorsement Form Section */}
            <section className="bg-patriot-red py-16">
                <ContentContainer className="max-w-3xl">
                    <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
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
