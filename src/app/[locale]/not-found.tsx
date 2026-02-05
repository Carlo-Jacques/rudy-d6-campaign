import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("notFound");

    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-6">{t("message")}</p>
            <Link
                href="/"
                className="rounded bg-patriot-red px-6 py-3 text-white font-semibold hover:opacity-90"
            >
                {t("cta")}
            </Link>
        </div>
    );
}
