import { site } from "@/lib/site";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: `District 6 | ${site.name}`,
    description: "Learn about Palm Beach County District 6 and the role of a County Commissioner.",
};

export default function District6Page() {
    return (
        <main className="bg-white">
            {/* Header */}
            <div className="bg-black/[0.02] py-20 sm:py-24">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
                        About Palm Beach County <br className="hidden sm:block" />
                        Commission District 6
                    </h1>
                </div>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-2 lg:py-20">
                {/* Left Column: Content */}
                <div className="prose text-black/80 lg:prose-lg">
                    <p className="lead font-medium text-black">
                        Palm Beach County’s 6th Commission District is one of the largest and most diverse
                        districts in Florida. Spanning roughly 1,300 square miles, District 6 stretches from the
                        western communities along Lake Okeechobee to the rapidly growing central and western
                        suburbs of Palm Beach County.
                    </p>

                    <p>
                        District 6 includes Royal Palm Beach, Loxahatchee Groves, The Acreage, Wellington,
                        Westlake, Belle Glade, South Bay, Pahokee, and western portions of Lake Worth, along
                        with vast areas of unincorporated Palm Beach County. As shown in the map, the district
                        covers a large contiguous area, with a significant concentration of rural and
                        agricultural land.
                    </p>

                    <p>
                        Importantly, District 6 encompasses the largest agricultural region east of the
                        Mississippi River, producing winter vegetables that supply food across Florida and the
                        nation. This unique mix of agricultural communities, rural neighborhoods, and
                        fast-growing suburban areas makes District 6 unlike any other district in Palm Beach
                        County.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-10 mb-4">What Does a Palm Beach County Commissioner Do?</h2>
                    <p>
                        The Palm Beach County Board of County Commissioners (BCC) is the county’s primary
                        legislative and policy-making body. Commissioners are responsible for setting countywide
                        priorities and making decisions that directly affect residents’ daily lives.
                    </p>

                    <p className="font-semibold text-black mt-6">County Commissioners:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Enact countywide ordinances and policies</li>
                        <li>Approve the county budget and authorize all expenditures of county funds</li>
                        <li>Oversee major public services and infrastructure projects</li>
                    </ul>

                    <p className="font-semibold text-black mt-6">
                        In addition, the Board of County Commissioners also serves as:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>The Governing Board of the Solid Waste Authority</li>
                        <li>The Environmental Control Board</li>
                        <li>The Zoning Board for unincorporated Palm Beach County</li>
                    </ul>

                    <p className="mt-4">
                        This means commissioners have direct influence over taxes, waste collection,
                        environmental protections, land use, zoning, infrastructure, and public
                        services—especially in unincorporated areas like much of District 6.
                    </p>

                    <h2 className="text-2xl font-bold text-black mt-10 mb-4">How the Board Is Elected</h2>
                    <p>
                        Palm Beach County is represented by seven County Commissioners, each elected from a
                        single-member district to staggered four-year terms.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Districts 2, 4, and 6 appear on the gubernatorial election ballot</li>
                        <li>Districts 1, 3, 5, and 7 appear on the presidential election ballot</li>
                    </ul>
                    <p className="mt-4">
                        The Board of County Commissioners typically meets on the first and third Tuesday of each
                        month to conduct public hearings and vote on agenda items affecting the entire county.
                    </p>

                    {/* Resource Buttons Grid */}
                    <div className="mt-12 not-prose">
                        <h3 className="text-lg font-bold text-black mb-4">Voter Resources</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <a
                                href="https://registertovoteflorida.gov/home"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-xl border border-black/10 bg-gray-50 p-4 text-center text-sm font-bold text-patriot-blue shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-patriot-blue hover:bg-patriot-blue hover:text-white hover:shadow-md"
                            >
                                Register to Vote
                            </a>
                            <a
                                href="https://registration.elections.myflorida.com/CheckVoterStatus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-xl border border-black/10 bg-gray-50 p-4 text-center text-sm font-bold text-patriot-blue shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-patriot-blue hover:bg-patriot-blue hover:text-white hover:shadow-md"
                            >
                                Check Voter Status
                            </a>
                            <a
                                href="https://www.pbcelections.org/Voters/Vote-By-Mail"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-xl border border-black/10 bg-gray-50 p-4 text-center text-sm font-bold text-patriot-blue shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-patriot-blue hover:bg-patriot-blue hover:text-white hover:shadow-md"
                            >
                                Vote By Mail
                            </a>
                            <a
                                href="https://discover.pbcgov.org/countycommissioners/pages/districtlocator.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-xl border border-black/10 bg-gray-50 p-4 text-center text-sm font-bold text-patriot-blue shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-patriot-blue hover:bg-patriot-blue hover:text-white hover:shadow-md"
                            >
                                Find Your District
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sticky Image */}
                <div className="relative lg:h-full">
                    <div className="sticky top-24 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                        <Image
                            src="/img/D6-Map.jpg"
                            alt="Map of Palm Beach County District 6"
                            width={800}
                            height={1000}
                            className="h-auto w-full bg-slate-100 object-cover"
                            priority
                        />
                        <div className="bg-white p-4 text-xs text-black/60">
                            <div className="mb-2">Map of District 6 boundaries</div>
                            <div className="text-center">
                                <a href="http://www.theacreage.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">The Acreage</a>
                                {" | "}
                                <a href="http://belleglade-fl.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Belle Glade</a>
                                {" | "}
                                <a href="">Loxahatchee</a>
                                {" | "}
                                <a href="http://www.loxahatcheegrovesfl.gov/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Loxahatchee Groves</a>
                                {" | "}
                                <a href="http://www.cityofpahokee.com/Pages/index" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Pahokee</a>
                                {" | "}
                                <a href="http://www.royalpalmbeach.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Royal Palm Beach</a>
                                {" | "}
                                <a href="http://www.southbaycity.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">South Bay</a>
                                {" | "}
                                <a href="http://www.wellingtonfl.gov/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Wellington</a>
                                {" | "}
                                <a href="https://www.westlakegov.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Westlake</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
