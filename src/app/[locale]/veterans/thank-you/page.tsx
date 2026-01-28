import { getTranslations, setRequestLocale } from 'next-intl/server';
import Button from "@/components/ui/Button";
import SuccessAnimation from "@/components/SuccessAnimation";

export default async function VeteranThankYouPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('veterans.share.thankYou');

    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center bg-patriot-red px-4 py-20 text-center text-white">
            <SuccessAnimation>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl text-white shadow-lg backdrop-blur-sm">
                    ✓
                </div>

                <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {t('title')}
                </h1>

                <p className="mt-4 max-w-lg text-lg text-white/90">
                    {t('description')}
                </p>

                <div className="mt-10">
                    <Button
                        href="/"
                        variant="white"
                        size="lg"
                        className="!text-patriot-red hover:!bg-gray-100"
                    >
                        {t('returnHome')}
                    </Button>
                </div>
            </SuccessAnimation>
        </main>
    );
}
