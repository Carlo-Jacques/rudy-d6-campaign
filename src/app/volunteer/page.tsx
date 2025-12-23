import VolunteerForm from "@/components/VolunteerForm";
import { site } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Volunteer | ${site.name}`,
    description: "Join the campaign to help Rudy deliver real results for District 6.",
};

export default function VolunteerPage() {
    return (
        <main className="bg-white">
            {/* Header */}
            <div className="bg-black/[0.02] py-20 sm:py-24">
                <div className="mx-auto max-w-2xl px-4 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
                        Join the Team
                    </h1>
                    <p className="mt-4 text-lg text-black/70">
                        This campaign is powered by neighbors like you. Whether you can knock on doors, make calls, or just host a sign—we need your help.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="mx-auto max-w-xl px-4 py-12 sm:py-20">
                <VolunteerForm />
            </div>
        </main>
    );
}
