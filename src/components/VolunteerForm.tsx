"use client";

import Button from "@/components/ui/Button";
import { useId, useState } from "react";

const volunteerOptions = [
    { label: "Host a meet & greet", icon: "🏠", value: "Host a meet & greet" },
    { label: "Knock doors", icon: "🚪", value: "Knock doors" },
    { label: "Make phone calls", icon: "📞", value: "Make phone calls" },
    { label: "Place a yard sign", icon: "🏡", value: "Place a yard sign" },
    { label: "Help on Election Day", icon: "🗳️", value: "Help on Election Day" },
];

export default function VolunteerForm() {
    const id = useId();
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

    const toggleActivity = (value: string) => {
        setSelectedActivities((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    return (
        <form action="/api/form/volunteer" method="POST" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <span className="block text-sm font-semibold text-gray-900 mb-4">
                        How would you like to volunteer?
                    </span>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {volunteerOptions.map((option) => {
                            const isSelected = selectedActivities.includes(option.value);
                            return (
                                <label
                                    key={option.value}
                                    className={`
                                        flex flex-col items-center justify-center gap-2 rounded-lg border-2 p-4 cursor-pointer transition-all text-center
                                        ${isSelected
                                            ? "border-patriot-blue bg-patriot-blue/10 shadow-md"
                                            : "border-gray-200 bg-white hover:border-patriot-blue/50 hover:bg-gray-50"
                                        }
                                    `}
                                >
                                    <input
                                        type="checkbox"
                                        name="volunteer_activities[]"
                                        value={option.value}
                                        checked={isSelected}
                                        onChange={() => toggleActivity(option.value)}
                                        className="sr-only"
                                    />
                                    <span className="text-3xl">{option.icon}</span>
                                    <span className={`text-sm font-medium ${isSelected ? "text-patriot-blue" : "text-gray-900"}`}>
                                        {option.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </div>

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
