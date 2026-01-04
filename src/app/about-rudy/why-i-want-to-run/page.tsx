import { Metadata } from "next";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
    title: `Why I Want to Run | About Rudy | ${site.name}`,
    description: "Rudy Tinker explains why he's running for Palm Beach County Commission District 6.",
};

export default function WhyIWantToRunPage() {
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
                            Why I'm Running for District 6
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12">
                <style dangerouslySetInnerHTML={{__html: `
                    .why-i-run-article p {
                        line-height: 2.0 !important;
                    }
                `}} />
                <article className="why-i-run-article prose prose-lg max-w-none prose-headings:font-extrabold prose-strong:font-bold prose-p:text-black/80 prose-p:mb-6 prose-h2:mt-10 prose-h2:mb-6">
                <p>I’m running for Palm Beach County Commission District 6 because county government has lost touch with reality — and everyday people are paying the price.</p><br />

                <p>For starters - property taxes keep going up with little to show for it.</p><br />

                <p>Even worse, affordability continues to be out of reach for many residents – which has to stop!</p><br />

                <p>And families are being squeezed for every penny, while seemingly county administrators waste money and protect themselves instead of the public.</p><br />

                <p>In fact, according to the Florida Chief Financial Officer, Palm Beach County has been flagged for more than <strong>$344 million</strong> in wasteful or questionable spending. That’s not politics — that’s taxpayer money that could have gone toward lower property taxes, fixing roads, improving drainage, easing traffic, and finally investing in communities that have been ignored for decades!</p><br />

                <p>Instead, residents are told there is “no money.” This translates to over inflating public budgets without being held accountable.</p><br />

                <p><strong>And here is the INSULT!</strong></p><br />

                <p>All <strong>seven</strong> Palm Beach County Commissioners unanimously approved the <strong>$3.3 million</strong> security contract with the Palm Beach County Sheriff's Office (PBSO) on November 4, 2025. When you divide that number by seven commissioners, that comes out to about <strong>$471,000 per commissioner</strong> — more than four times a commissioner’s annual salary.</p><br />

                <p><strong>LET THAT SINK IN!</strong></p><br />

                <p>At a time when homeowners are struggling, taxes are rising, and communities are being told to accept less, politicians are spending over <strong>400%</strong> of their salary on taxpayer-funded security details!</p><br />    

                <p><strong>What a shame!</strong></p><br />     

                <p>I want to be clear: <strong>I will not accept a taxpayer-funded security detail like that – ever!</strong></p><br /> 

                <p>Public service is not about insulating yourself from the people you serve. You should not be in public office if you are unavailable to the people you serve.</p><br />  

                <p>Even worse is that while politicians protect themselves, communities like Loxahatchee Groves are losing law enforcement services because of the high cost of policing contracts.</p><br />   

                <p>Families are told there aren’t enough resources — but somehow there’s always money to protect elected officials.</p><br />   

                <p><strong>That's not leadership!</strong></p><br />
                <p><strong>That's privilege!</strong></p><br />
                <p><strong>And decisions like these and many other wasteful spending endeavors need to end today!</strong></p>

                <p>As a licensed general contractor, I see firsthand how poor planning and bad county decisions raise costs for everyone. As a veteran, who served honorably in the United States Army, I know leadership means accountability, responsibility, and service — not ego! And as an educator, I teach people how government is supposed to work, because informed communities demand better government.</p>

                <p>You should know - <strong>I'm not running to protect the status quo!</strong></p><br />
                <p><strong>I'm running to change how our County does business!</strong></p><br />

                <p><strong>Enough waste!</strong></p><br />
                <p><strong>Enough neglect!</strong></p><br />
                <p><strong>Enough with politicians protecting themselves while Palm Beach County families struggle!</strong></p><br />

                <p>Every Palm Beach County community deserves to be heard. Every Palm Beach County community deserves <strong>RESPECT</strong>. And every decision should be made with the people who live with it in mind.</p>

                <p>I’m running because District 6 deserves <strong>REAL leadership</strong> that listens, plans responsibly, spends wisely, and shows up to work!</p>

                <h2>I am Rudolph “Rudy” Tinker!</h2>

                <p><em>One of us — Working for all of us!</em></p>

                <p><strong>Vote Rudy for District 6!</strong></p> 
                </article>
            </div>
        </main>
    );
}
