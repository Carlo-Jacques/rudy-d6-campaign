import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import ContentContainer from "@/components/ContentContainer";
import { site } from "@/lib/site";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('preparedness');
  
  return {
    title: `${t('title')} | About Rudolph | ${site.name}`,
    description: t('description'),
  };
}

export default async function PreparednessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('preparedness');
  const messages = await getMessages();
  const preparednessContent = (messages.preparedness as any)?.content || '';

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="relative py-16 sm:py-20"
        style={{
          backgroundImage: "url('/img/banner-head.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#00214e",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <ContentContainer className="relative z-10">
          <Link
            href="/about-rudolph"
            className="group mb-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-patriot-red transition-all duration-200"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            <span>{t('backToAbout')}</span>
          </Link>
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t('title')}
            </h1>
            <p className="mt-2 text-lg text-white/70">
              {t('subtitle')}
            </p>
          </div>
        </ContentContainer>
      </div>

      {/* Content */}
      <ContentContainer className="py-12">
        <div dangerouslySetInnerHTML={{ __html: preparednessContent }} />
      </ContentContainer>
    </main>
  );
}


