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
  const t = await getTranslations('whyIWantToRun');

  return {
    title: `${t('title')} | About Rudolph | ${site.name}`,
    description: t('description'),
  };
}

export default async function WhyIWantToRunPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('whyIWantToRun');
  const messages = await getMessages();
  const content = t.raw("content") as string;

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
          </div>
        </ContentContainer>
      </div>

      {/* Content */}
      <ContentContainer className="py-12">
        <article
          className="
            prose prose-lg max-w-none
            prose-p:my-4 sm:prose-p:my-5 lg:prose-p:my-6
            prose-p:leading-relaxed
            prose-p:text-black/80
            prose-headings:font-extrabold
            prose-strong:font-bold
            prose-h2:mt-10 prose-h2:mb-6
            "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </ContentContainer>
    </main>
  );
}


