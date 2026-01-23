"use client";

import Button from "@/components/ui/Button";
import { useId, useState } from "react";
import { useTranslations } from 'next-intl';

export default function VeteranStoryForm() {
    const t = useTranslations('veterans.share.form');
    const id = useId();
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("");
        }
    };

    return (
        <form action="/api/form/veteran-story" method="POST" encType="multipart/form-data" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-name`} className="block text-sm font-semibold text-gray-900">
                        {t('name')}
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
                    <label htmlFor={`${id}-email`} className="block text-sm font-semibold text-gray-900">
                        {t('email')}
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
                    <label htmlFor={`${id}-story`} className="block text-sm font-semibold text-gray-900">
                        {t('story')}
                    </label>
                    <textarea
                        name="story"
                        id={`${id}-story`}
                        rows={5}
                        required
                        className="mt-2 block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-patriot-blue sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor={`${id}-file`} className="block text-sm font-semibold text-gray-900">
                        {t('upload')}
                    </label>
                    <div className="mt-2 flex items-center gap-4">
                        <label
                            htmlFor={`${id}-file`}
                            className="cursor-pointer rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Choose files
                            <input
                                type="file"
                                name="attachments"
                                id={`${id}-file`}
                                multiple
                                accept="image/*"
                                onChange={handleFileChange}
                                className="sr-only"
                            />
                        </label>
                        {fileName && (
                            <span className="text-sm text-gray-600 truncate max-w-[200px]">
                                {fileName} {fileName.length > 1 ? "..." : ""}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <Button
                    type="submit"
                    variant="donate"
                    size="lg"
                >
                    {t('submit')}
                </Button>
            </div>
        </form>
    );
}
