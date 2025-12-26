"use client";

import Button from "@/components/ui/Button";
import { useId } from "react";

export default function EndorsementForm() {
    const id = useId();

    return (
        <form action="/api/form/endorsement" method="POST" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor={`${id}-firstName`} className="block text-sm font-semibold text-white">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id={`${id}-firstName`}
                        required
                        className="mt-2 block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-lastName`} className="block text-sm font-semibold text-white">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id={`${id}-lastName`}
                        required
                        className="mt-2 block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-email`} className="block text-sm font-semibold text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id={`${id}-email`}
                        required
                        className="mt-2 block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-phone`} className="block text-sm font-semibold text-white">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id={`${id}-phone`}
                        required
                        className="mt-2 block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <Button
                    type="submit"
                    variant="donate"
                    size="lg"
                >
                    Submit Endorsement
                </Button>
            </div>
        </form>
    );
}
