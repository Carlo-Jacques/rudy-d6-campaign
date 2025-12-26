
import React from 'react';

export default function PetitionPage() {
    const pdfUrl = "/documents/petition_form.pdf";

    return (
        <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-rudy-blue">
                Sign the Petition
            </h1>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 shadow-sm">
                <h2 className="text-xl font-semibold mb-3">Instructions</h2>
                <p className="text-lg mb-4">
                    If you live in District 6, please print, complete the petition and mail back to me at:
                </p>
                <address className="not-italic font-medium text-lg ml-4 mb-4 border-l-4 border-rudy-red pl-4 py-1">
                    6521 Carol Street<br />
                    Loxahatchee, FL 33470
                </address>
            </div>

            <div className="w-full h-[800px] border border-gray-300 rounded-lg shadow-md overflow-hidden bg-gray-100">
                <iframe
                    src={`${pdfUrl}#view=FitH`}
                    className="w-full h-full"
                    title="Petition Form"
                >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
                        <p className="mb-2">Your browser does not support inline PDF viewing.</p>
                        <a href={pdfUrl} className="text-rudy-blue hover:underline font-medium">Download the PDF here</a>
                    </div>
                </iframe>
            </div>
        </main>
    );
}
