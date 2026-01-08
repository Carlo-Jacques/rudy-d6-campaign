import VolunteerForm from "@/components/VolunteerForm";
import { site } from "@/lib/site";
import { Metadata } from "next";
import ContentContainer from "@/components/ContentContainer";

export const metadata: Metadata = {
    title: `Volunteer | ${site.name}`,
    description: "Join the campaign to help Rudy deliver real results for District 6.",
};

export default function VolunteerPage() {
    return (
        <main className="bg-white">
            {/* Header */}
            <div className="relative py-20 sm:py-24"
            style={{
                        backgroundImage: "url('/img/volunteer-banner.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#00214e",
                        }}
                        >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/50 z-0" />
                <ContentContainer className="relative z-10 text-center max-w-2xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Join the Team
                    </h1>
                    <p className="mt-4 text-lg text-white/90">
                        This campaign is powered by neighbors like you. Whether you can knock on doors, make calls, or just host a sign—we need your help.
                    </p>
                </ContentContainer>
            </div>

            {/* Form Section */}
            <ContentContainer className="py-12 sm:py-20 max-w-xl">
                <VolunteerForm />
            </ContentContainer>
        </main>
    );
}
