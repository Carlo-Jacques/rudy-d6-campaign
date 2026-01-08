"use client";

import { useId } from "react";
import Button from "@/components/ui/Button";

export default function DonateForm() {
    const id = useId();

    return (
        <form action="/api/form/donate" method="POST" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor={`${id}-firstName`} className="block text-sm font-semibold text-gray-900 mb-2">
                        First Name *
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id={`${id}-firstName`}
                        required
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="First name"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-lastName`} className="block text-sm font-semibold text-gray-900 mb-2">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id={`${id}-lastName`}
                        required
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="Last name"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-email`} className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        id={`${id}-email`}
                        required
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-phone`} className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id={`${id}-phone`}
                        required
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="(555) 123-4567"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-address`} className="block text-sm font-semibold text-gray-900 mb-2">
                        Street Address *
                    </label>
                    <input
                        type="text"
                        name="address"
                        id={`${id}-address`}
                        required
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="123 Main Street"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-city`} className="block text-sm font-semibold text-gray-900 mb-2">
                        City *
                    </label>
                    <input
                        type="text"
                        name="city"
                        id={`${id}-city`}
                        required
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="City"
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-state`} className="block text-sm font-semibold text-gray-900 mb-2">
                        State *
                    </label>
                    <input
                        type="text"
                        name="state"
                        id={`${id}-state`}
                        required
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="FL"
                        maxLength={2}
                    />
                </div>

                <div>
                    <label htmlFor={`${id}-zip`} className="block text-sm font-semibold text-gray-900 mb-2">
                        ZIP Code *
                    </label>
                    <input
                        type="text"
                        name="zip"
                        id={`${id}-zip`}
                        required
                        pattern="[0-9]{5}(-[0-9]{4})?"
                        className="block w-full rounded-md border-0 bg-white py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                        placeholder="12345"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-amount`} className="block text-sm font-semibold text-gray-900 mb-2">
                        Contribution Amount *
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <input
                            type="number"
                            name="amount"
                            id={`${id}-amount`}
                            required
                            min="1"
                            max="1000"
                            step="0.01"
                            className="block w-full rounded-md border-0 bg-white py-2.5 pl-7 pr-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                            placeholder="0.00"
                        />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Maximum contribution: $1,000 per individual per election</p>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Payment Method *
                    </label>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input
                                id={`${id}-payment-credit`}
                                name="paymentMethod"
                                type="radio"
                                value="credit"
                                required
                                className="h-4 w-4 border-gray-300 text-patriot-blue focus:ring-patriot-blue"
                                defaultChecked
                            />
                            <label htmlFor={`${id}-payment-credit`} className="ml-3 block text-sm leading-6 text-gray-900">
                                Credit Card
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id={`${id}-payment-check`}
                                name="paymentMethod"
                                type="radio"
                                value="check"
                                className="h-4 w-4 border-gray-300 text-patriot-blue focus:ring-patriot-blue"
                            />
                            <label htmlFor={`${id}-payment-check`} className="ml-3 block text-sm leading-6 text-gray-900">
                                Check
                            </label>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <div className="flex items-start">
                        <input
                            id={`${id}-employer`}
                            name="employer"
                            type="checkbox"
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-patriot-blue focus:ring-patriot-blue"
                        />
                        <label htmlFor={`${id}-employer`} className="ml-3 block text-sm leading-6 text-gray-900">
                            I am not making this contribution on behalf of an employer
                        </label>
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <div className="flex items-start">
                        <input
                            id={`${id}-us-citizen`}
                            name="usCitizen"
                            type="checkbox"
                            required
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-patriot-blue focus:ring-patriot-blue"
                        />
                        <label htmlFor={`${id}-us-citizen`} className="ml-3 block text-sm leading-6 text-gray-900">
                            I am a U.S. citizen or permanent resident *
                        </label>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Button
                    type="submit"
                    variant="donate"
                    size="lg"
                    className="w-full"
                >
                    Submit Donation
                </Button>
            </div>
        </form>
    );
}




