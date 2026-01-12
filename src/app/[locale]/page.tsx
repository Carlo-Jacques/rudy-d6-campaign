import { getTranslations, setRequestLocale } from 'next-intl/server';
import Button from "@/components/ui/Button";
import { Link } from '@/i18n/navigation';
import { site } from "@/lib/site";
import PlanSectionClient from "@/components/PlanSectionClient";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import Testimonials from "@/components/Testimonials";

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

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* NEWS */}
      <NewsSection />
    </main>
  );
}

