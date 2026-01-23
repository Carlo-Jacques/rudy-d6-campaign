import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContentContainer from "@/components/ContentContainer";
import Button from "@/components/ui/Button";

export default async function EndorsementThankYouPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('endorsements.thankYou');
    const common = await getTranslations('common');

    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center bg-patriot-white px-4 py-20 text-center text-patriot-blue">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
                ✓
            </div>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t('title')}
            </h1>

            <p className="mt-4 max-w-lg text-lg opacity-80">
                {t('description')}
            </p>

            <div className="mt-10">
                <Button
                    href="/"
                    variant="donate"
                    size="lg"
                >
                    {t('returnHome')}
                </Button>
            </div>
        </main>
    );
}
