"use client";

import Button from "@/components/ui/Button";
import { useId } from "react";

export default function VolunteerForm() {
    const id = useId();

    return (
        <form action="/api/form/volunteer" method="POST" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-name`} className="block text-sm font-semibold text-gray-900">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id={`${id}-name`}
                        required
                        className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-address`} className="block text-sm font-semibold text-gray-900">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id={`${id}-address`}
                        required
                        className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-phone`} className="block text-sm font-semibold text-gray-900">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id={`${id}-phone`}
                        required
                        className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-email`} className="block text-sm font-semibold text-gray-900">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id={`${id}-email`}
                        required
                        className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-interest`} className="block text-sm font-semibold text-gray-900">
                        Which issues interest you most?
                    </label>
                    <textarea
                        name="interest"
                        id={`${id}-interest`}
                        rows={3}
                        className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-2">
                    <span className="block text-sm font-semibold text-gray-900">
                        How would you like to volunteer?
                    </span>
                    <div className="mt-4 space-y-3">
                        {["Host a meet & greet", "Knock doors", "Make phone calls", "Place a yard sign", "Help on Election Day"].map((item) => (
                            <div key={item} className="flex items-center">
                                <input
                                    id={`${id}-${item}`}
                                    name="volunteer_activities[]"
                                    type="checkbox"
                                    value={item}
                                    className="h-4 w-4 rounded border-gray-300 text-patriot-blue focus:ring-patriot-blue"
                                />
                                <label htmlFor={`${id}-${item}`} className="ml-3 block text-sm leading-6 text-gray-900">
                                    {item}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <Button
                    type="submit"
                    variant="donate"
                    size="lg"
                >
                    Join the team
                </Button>
            </div>
        </form>
    );
}
