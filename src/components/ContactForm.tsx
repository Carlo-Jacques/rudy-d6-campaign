"use client";

import Button from "@/components/ui/Button";
import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactForm() {
    const id = useId();
    const [phone, setPhone] = useState("");
    const tConsent = useTranslations("common.smsConsent");

    return (
        <form action="/api/form/contact" method="POST" className="space-y-4">
            <div>
                <label htmlFor={`${id}-name`} className="block text-sm font-semibold text-white mb-2">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id={`${id}-name`}
                    required
                    className="block w-full rounded-md border-0 bg-white/95 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor={`${id}-email`} className="block text-sm font-semibold text-white mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id={`${id}-email`}
                    required
                    className="block w-full rounded-md border-0 bg-white/95 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label htmlFor={`${id}-phone`} className="block text-sm font-semibold text-white mb-2">
                    Phone (optional)
                </label>
                <input
                    type="tel"
                    name="phone"
                    id={`${id}-phone`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/95 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    placeholder="(555) 123-4567"
                />
            </div>

            <div>
                <label className="flex items-start gap-3 text-sm text-white/90 cursor-pointer">
                    <input
                        type="checkbox"
                        name="sms_consent"
                        required={!!phone}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-patriot-blue focus:ring-patriot-blue"
                    />
                    <span>
                        {tConsent('agreeText')}{" "}
                        <Link href="/privacy" className="text-white hover:underline font-semibold decoration-white">
                            {tConsent('privacyPolicy')}
                        </Link>{" "}
                        |{" "}
                        <Link href="/sms-terms" className="text-white hover:underline font-semibold decoration-white">
                            {tConsent('smsTerms')}
                        </Link>
                    </span>
                </label>
            </div>

            <div>
                <label htmlFor={`${id}-message`} className="block text-sm font-semibold text-white mb-2">
                    Message
                </label>
                <textarea
                    name="message"
                    id={`${id}-message`}
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 bg-white/95 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6 resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    className="w-full rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:bg-green-700 hover:-translate-y-[1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:translate-y-[1px]"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
}

