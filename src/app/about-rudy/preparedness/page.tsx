import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
    title: `Preparedness | About Rudy | ${site.name}`,
    description: "Rudolph's academic background, certifications, and professional licenses.",
};

export default function PreparednessPage() {
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
                            Preparedness
                        </h1>
                        <p className="mt-2 text-lg text-black/70">
                            Rudolph believes preparation matters. His academic background includes:
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12">
                {/* Academic Background */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-6">Academic Background</h2>
                    <ul className="space-y-3 text-base text-black/85">
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Bachelor of Arts (BA)</strong> – Political Science, Florida Atlantic University</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Master of Arts (MA)</strong> – Political Science, Florida Atlantic University</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Master of Science (MS)</strong> – Criminal Justice, American Public University</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Master of Science (MS)</strong> – Engineering & Project Management, Liberty University</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Master of Science (MS)</strong> – International Relations (Chinese Thought), Liberty University</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Doctor of Philosophy (PhD)</strong> – Psychology (Industrial-Organizational), Grand Canyon University</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Postgraduate Diploma in Law (PGDL)</strong> – Leeds Beckett University (UK)</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Master of Laws (LLM)</strong> – Leeds Beckett University (UK)</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Bachelor of Laws (LLB)</strong> – London Metropolitan University (UK) (in progress, 2026)</span>
                        </li>
                    </ul>
                </div>

                {/* Certifications */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-black mb-6">Certifications</h2>
                    <ul className="space-y-3 text-base text-black/85">
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Nuclear Proliferation Certificate</strong> – Nonproliferation Policy Education Center 2025</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Project Manager Profession Certification</strong> – Professional Management Institute 2023</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Lean Six Sigma Black Belt Certification</strong> – International Association for Six Sigma Certification 2023</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Construction Industry: The Way Forward Construction</strong> – Columbia University 2024</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Project Management</strong> – Columbia University 2024</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Construction Cost Estimating</strong> – Columbia University 2024</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Construction Scheduling</strong> – Columbia University 2024</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Construction Finance</strong> – Columbia University 2024</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Certificate in Peace Studies</strong> – Florida Atlantic University 2002</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Certificate in Religion and Ethnic Studies</strong> – Florida Atlantic University 2005</span>
                        </li>
                    </ul>
                </div>

                {/* Professional State Licenses */}
                <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Professional State Licenses</h2>
                    <ul className="space-y-3 text-base text-black/85">
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Certified General Contractor</strong> 2023</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Certified Roofing Contractor</strong> 2023</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Certified HVAC Contractor</strong> 2023</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                            <span><strong>Florida Notary</strong> 2024</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

