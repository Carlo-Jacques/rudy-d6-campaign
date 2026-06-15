import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

// Localized metadata (App Router)
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "privacy",
    });

    return {
        title: t("meta.title"),
        description: t("meta.description"),
    };
}

// IMPORTANT: Accept params so the route is fully compatible with /[locale]/...
export default async function PrivacyPolicyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("privacy");

    return (
        <main className="mx-auto max-w-4xl px-6 pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
            <header className="mb-10 border-b border-gray-100 pb-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-patriot-blue sm:text-5xl uppercase">
                    {t("title")}
                </h1>
            </header>

            <article className="prose prose-gray max-w-none leading-relaxed space-y-8 text-gray-700 text-lg">
                <p className="text-xl text-gray-900 font-medium leading-relaxed">
                    {t("intro")}
                </p>

                <div className="space-y-6">
                    <p>
                        <strong className="text-black block mb-1 text-lg font-bold">{t("whatWeCollect.label")}</strong>
                        {t("whatWeCollect.text")}
                    </p>

                    <p>
                        <strong className="text-black block mb-1 text-lg font-bold">{t("howWeUseIt.label")}</strong>
                        {t("howWeUseIt.text")}
                    </p>

                    <p>
                        <strong className="text-black block mb-1 text-lg font-bold">{t("textMessaging.label")}</strong>
                        {t("textMessaging.text")}
                    </p>

                    <p>
                        <strong className="text-black block mb-1 text-lg font-bold">{t("sharing.label")}</strong>
                        {t("sharing.text")}
                    </p>

                    <p>
                        <strong className="text-black block mb-1 text-lg font-bold">{t("optingOut.label")}</strong>
                        {t("optingOut.text1")}{" "}
                        <a href="mailto:info@rudolphtinker.com" className="text-patriot-red hover:underline font-semibold">
                            info@rudolphtinker.com
                        </a>{" "}
                        {t("optingOut.text2")}
                    </p>

                    <p className="pt-6 border-t border-gray-100">
                        <strong className="text-black inline-block mr-1 font-bold">{t("contact.label")}</strong>{" "}
                        {t("contact.text1")}{" "}
                        <a href="mailto:info@rudolphtinker.com" className="text-patriot-blue hover:underline font-semibold">
                            info@rudolphtinker.com
                        </a>
                    </p>
                </div>
            </article>
        </main>
    );
}
