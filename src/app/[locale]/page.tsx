import { getTranslations, setRequestLocale } from 'next-intl/server';
import Button from "@/components/ui/Button";
import { Link } from '@/i18n/navigation';
import { site } from "@/lib/site";
import PlanSectionClient from "@/components/PlanSectionClient";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <main className="overflow-x-hidden w-full">
      <Hero />

      {/* PLEDGE */}
      <section className="bg-patriot-red text-white w-full">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t('pledge.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {t('pledge.description')}
          </p>
          <p className="mt-6 text-xl font-bold font-serif italic text-white sm:text-2xl">
            "{t('pledge.quote')}"
          </p>
        </div>
      </section>

      {/* 10-POINT PLAN */}
      <section id="plan" className="w-full overflow-hidden">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 py-12" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">{t('plan.title')}</h2>
              <p className="mt-2 text-black/70">{t('plan.subtitle')}</p>
            </div>
            <Link href="/about-rudolph" className="hidden text-sm font-semibold underline md:inline">
              {t('plan.whyRudy')}
            </Link>
          </div>
        </div>

        {/* Two-column layout - full width */}
        <div className="w-full relative">
          <PlanSectionClient />
        </div>
      </section>

      {/* NEWS */}
      <NewsSection />

      {/* PETITION (print + mail for now) */}
      <section id="petition" className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
          <div className="w-full">
            <h2 className="text-xl font-bold">
              {t('petition.title')}
            </h2>

            <p className="mt-3 text-black/75">
              {t('petition.description')}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/80">
              <li>
                {t('petition.option1')}
              </li>
              <li>
                {t('petition.option2')}
              </li>
            </ul>

            <p className="mt-4 text-black/75">
              {t('petition.ballotTax')}
            </p>

            <p className="mt-4 font-semibold text-black">{t('petition.grassroots')}</p>

            <p className="mt-4 text-black/75">
              {t('petition.ask')}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/petition"
                variant="petition"
                size="md"
              >
                {t('petition.signPetition')}
              </Button>
            </div>

            <div className="mt-6 p-4 bg-black/[0.02] rounded-lg border border-black/10">
              <p className="text-sm font-semibold text-black mb-2">{t('petition.printAndMail')}</p>
              <p className="text-sm text-black/80 whitespace-pre-line">
                {t('petition.address')}
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

