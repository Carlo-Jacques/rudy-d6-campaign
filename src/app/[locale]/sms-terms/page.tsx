import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

// Localized metadata (App Router)
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "smsTerms",
    });

    return {
        title: t("meta.title"),
        description: t("meta.description"),
    };
}

// IMPORTANT: Accept params so the route is fully compatible with /[locale]/...
export default async function SmsTermsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("smsTerms");

    return (
        <main className="mx-auto max-w-4xl px-6 pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
            <header className="mb-10 border-b border-gray-100 pb-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-patriot-blue sm:text-5xl uppercase">
                    {t("title")}
                </h1>
            </header>

            <article className="prose prose-gray max-w-none leading-relaxed space-y-8 text-gray-700 text-lg">
                <p>
                    {t("text1")}{" "}
                    <a href="mailto:info@rudolphtinker.com" className="text-patriot-red hover:underline font-semibold">
                        info@rudolphtinker.com
                    </a>.{" "}
                    {t("text2")}{" "}
                    <Link href="/privacy" className="text-patriot-blue hover:underline font-semibold">
                        /privacy
                    </Link>.
                </p>
            </article>
        </main>
    );
}
