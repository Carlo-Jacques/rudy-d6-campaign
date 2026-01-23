import { getTranslations, getMessages, setRequestLocale } from 'next-intl/server';
import Image from "next/image";
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
  const t = await getTranslations('district6');

  return {
    title: `${t('title')} | ${site.name}`,
    description: t('description'),
  };
}

export default async function District6Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('district6');
  const messages = await getMessages();
  const content = (messages.district6 as any)?.content || '';

  return (
    <main className="bg-white">
      {/* Header */}
      <header className="relative py-20 sm:py-24 overflow-hidden">
        {/* Responsive Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundColor: "#00214e",
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .d6-banner-bg {
              background-image: url('/img/district-6-banner-mobile.png');
            }
            @media (min-width: 640px) {
              .d6-banner-bg {
                background-image: url('/img/district-6-banner-desktop.webp');
              }
            }
            `
          }} />
          <div className="absolute inset-0 d6-banner-bg" />
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/60 z-0" />
        </div>
        <ContentContainer className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t('headerTitle')}
          </h1>
        </ContentContainer>
      </header>

      <ContentContainer className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-2 lg:py-20">
        {/* Left Column: Content */}
        <div className="prose text-black/80 lg:prose-lg">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Right Column: Sticky Image */}
        <div className="relative lg:h-full">
          <div className="sticky top-24 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
            <Image
              src="/img/D6-Map.jpg"
              alt="Map of Palm Beach County District 6"
              width={800}
              height={1000}
              className="h-auto w-full bg-slate-100 object-cover"
              priority
            />
            <div className="bg-white p-4 text-xs text-black/60">
              <div className="mb-2">{t('mapCaption')}</div>
              <div className="text-center">
                <a>The Acreage</a>
                {" | "}
                <a href="http://belleglade-fl.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Belle Glade</a>
                {" | "}
                <a>Loxahatchee</a>
                {" | "}
                <a href="http://www.loxahatcheegrovesfl.gov/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Loxahatchee Groves</a>
                {" | "}
                <a href="http://www.cityofpahokee.com/Pages/index" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Pahokee</a>
                {" | "}
                <a href="http://www.royalpalmbeach.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Royal Palm Beach</a>
                {" | "}
                <a href="http://www.southbaycity.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">South Bay</a>
                {" | "}
                <a href="http://www.wellingtonfl.gov/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Wellington</a>
                {" | "}
                <a href="https://www.westlakegov.com/" target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">Westlake</a>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}


