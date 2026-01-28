import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { site } from "@/lib/site";
import { Metadata } from "next";
import SuccessAnimation from "@/components/SuccessAnimation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('volunteer.thankYou');

  return {
    title: `${t('title')} | ${site.name}`,
    description: t('description'),
  };
}

export default async function VolunteerThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('volunteer.thankYou');

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-patriot-red px-4 py-20 text-center text-white">
      <SuccessAnimation>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl text-white shadow-lg backdrop-blur-sm">
          ✓
        </div>

        <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          {t('title')}
        </h1>

        <p className="mt-4 max-w-lg text-lg text-white/90">
          {t('description')}
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-patriot-red shadow-lg hover:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t('returnHome')}
          </Link>
        </div>
      </SuccessAnimation>
    </main>
  );
}


