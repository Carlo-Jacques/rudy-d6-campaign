import { Metadata } from "next";
import { site } from "@/lib/site";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: `Petition | ${site.name}`,
    description: "Help put a Democrat on the ballot — no special interests, no ballot tax.",
};

export default function PetitionPage() {
    const pdfUrl = "/documents/petition_form.pdf";

    return (
        <main className="bg-white">
            {/* Header */}
            <div className="bg-black/[0.02] py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                        Sign the Petition
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12">
                <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6">
                        Help Put a Democrat on the Ballot — No Special Interests, No Ballot Tax
                    </h2>

                    <p className="text-black/75 mb-4">
                        To qualify for the ballot in District 6, candidates are forced to choose one of two paths:
                    </p>

                    <ul className="list-disc space-y-2 pl-5 text-black/80 mb-4">
                        <li>
                            Pay over <span className="font-semibold">$8,000</span> in fees, or
                        </li>
                        <li>
                            Collect <span className="font-semibold">1,500</span> valid voter petitions
                        </li>
                    </ul>

                    <p className="text-black/75 mb-4">
                        That fee isn't about democracy — it's a <span className="font-semibold">ballot tax</span> that favors insiders and big donors.
                    </p>

                    <p className="font-semibold text-black mb-4">I'm choosing the grassroots route.</p>

                    <p className="text-black/75">
                        Instead of paying my way onto the ballot, I'm asking <span className="font-semibold">Democratic voters in District 6</span> to help qualify this campaign the right way: <span className="font-semibold">with petitions, not money</span>.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button
                            href={pdfUrl}
                            variant="petition"
                            size="md"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download petition (PDF)
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-black/[0.02] rounded-lg border border-black/10">
                        <p className="text-sm font-semibold text-black mb-2">Print and mail to this address:</p>
                        <p className="text-sm text-black/80">
                            14611 Southern Blvd Unit # 634<br />
                            Loxahatchee FL 33470
                        </p>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="w-full h-[800px] border border-black/10 rounded-lg shadow-md overflow-hidden bg-gray-100">
                    <iframe
                        src={`${pdfUrl}#view=FitH`}
                        className="w-full h-full"
                        title="Petition Form"
                    >
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
                            <p className="mb-2">Your browser does not support inline PDF viewing.</p>
                            <a href={pdfUrl} className="text-patriot-blue hover:underline font-medium">Download the PDF here</a>
                        </div>
                    </iframe>
                </div>
            </div>
        </main>
    );
}
