import { Metadata } from "next";
import { site } from "@/lib/site";
import DonateForm from "@/components/DonateForm";

export const metadata: Metadata = {
    title: `Donate | ${site.name}`,
    description: "Support Rudy Tinker's campaign for Palm Beach County Commissioner District 6.",
};

export default function DonatePage() {
    return (
        <main>
            {/* Above the fold - with background image */}
            <div 
                className="relative min-h-screen bg-[url('/img/donate-rudy-background.webp')] bg-cover bg-center bg-no-repeat bg-fixed"
            >
                {/* Content */}
                <div className="relative z-10 min-h-screen">
                    <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
                        {/* Form Section */}
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Left side - Donate Form */}
                            <div>
                                <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                                    <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                                        Support the Campaign
                                    </h1>
                                    <p className="mt-4 text-lg text-black/70">
                                        Your contribution helps us reach more voters and deliver on our 10-point plan for District 6.
                                    </p>
                                    <div className="mt-8">
                                        <DonateForm />
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Empty for now or can add other content */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Below the fold - white background */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
                    <div className="mx-auto max-w-4xl">
                        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                            <h2 className="text-2xl font-bold text-black mb-4">
                                Why Your Support Matters
                            </h2>
                            <p className="text-black/80 mb-6">
                                Running a grassroots campaign means relying on supporters like you, not special interests or big donors. Every contribution helps us:
                            </p>
                            <ul className="space-y-3 text-black/80 mb-6">
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                                    <span>Reach voters across District 6 with our message</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                                    <span>Build a campaign focused on accountability, not politics</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                                    <span>Deliver on our 10-point plan for real change</span>
                                </li>
                            </ul>

                            {/* Disclaimer */}
                            <div className="mt-8 rounded-xl border border-black/10 bg-black/[0.02] p-4">
                                <p className="text-xs leading-relaxed text-black/70">
                                    Florida law permits a maximum contribution of $1,000 per individual and $1,000 per corporation for the Primary Election. For the General Election, Florida law permits a maximum contribution of $1,000 per individual and $1,000 per corporation regardless of the amount given in the Primary Election. Contributions must be from a US Citizen or permanent resident in the US and are not deductible for Federal Tax purposes.
                                </p>
                                    <p className="mt-3 text-xs font-semibold text-black">
                                        Paid for by Rudolph Tinker, Democrat, for Palm Beach County Commission, District 6.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

