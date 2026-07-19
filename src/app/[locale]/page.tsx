import { getTranslations, setRequestLocale } from 'next-intl/server';
import Button from "@/components/ui/Button";
import { Link } from '@/i18n/navigation';
import { site } from "@/lib/site";
import PlanSectionClient from "@/components/PlanSectionClient";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import Testimonials from "@/components/Testimonials";
import EndorsementMarquee from "@/components/EndorsementMarquee";

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

      {/* ENDORSEMENTS */}
      <section className="w-full py-12">
        <EndorsementMarquee />
      </section>

      {/* PLEDGE */}
      <section className="text-white w-full bg-patriot-red">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight whitespace-pre-line text-flag-gradient">
            {t('pledge.title')}
            {t('pledge.description')}
          </h2>
        </div>
      </section>

      {/* 7-POINT PLAN */}
      <section id="plan" className="w-full overflow-hidden">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 py-12" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">Campaign Priorities</h2>
              <p className="mt-2 text-black/70">Our roadmap for real change in District 6.</p>
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

