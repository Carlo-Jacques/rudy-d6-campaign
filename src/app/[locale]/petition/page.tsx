import { getTranslations, setRequestLocale } from 'next-intl/server';
import Button from "@/components/ui/Button";
import ContentContainer from "@/components/ContentContainer";
import { site } from "@/lib/site";
import { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('petition');
  
  return {
    title: `${t('title')} | ${site.name}`,
    description: t('metaDescription'),
  };
}

export default async function PetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('petition');
  const pdfUrl = "/documents/petition_form.pdf";

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="relative py-16 sm:py-20"
        style={{
          backgroundImage: "url('/img/petition-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#00214e",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <ContentContainer className="relative z-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h1>
        </ContentContainer>
      </div>

      {/* Content */}
      <ContentContainer className="py-12">
        <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {t('headerTitle')}
          </h2>

          <p className="text-black/75 mb-4">
            {t('description')}
          </p>

          <ul className="list-disc space-y-2 pl-5 text-black/80 mb-4">
            <li>
              {t('option1')}
            </li>
            <li>
              {t('option2')}
            </li>
          </ul>

          <p className="text-black/75 mb-4">
            {t('ballotTax')}
          </p>

          <p className="font-semibold text-black mb-4">{t('grassroots')}</p>

          <p className="text-black/75">
            {t('ask')}
          </p>

          <div className="mt-6 p-4 bg-black/[0.02] rounded-lg border border-black/10">
            <p className="text-sm font-semibold text-black mb-2">{t('printAndMail')}</p>
            <p className="text-sm text-black/80 whitespace-pre-line">
              {t('address')}
            </p>
          </div>
        </div>

        {/* PDF Viewer */}
        <RevealOnScroll delay={0.2}>
          <div className="w-full h-[177vh] border border-black/10 rounded-lg shadow-md overflow-hidden bg-gray-100">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              className="w-full h-full"
              title="Petition Form"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">{t('pdfNotSupported')}</p>
            <a href={pdfUrl} className="text-patriot-blue hover:underline font-medium">{t('downloadLink')}</a>
          </div>
        </RevealOnScroll>
      </ContentContainer>
    </main>
  );
}


