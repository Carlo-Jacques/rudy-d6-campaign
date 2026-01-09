import { getTranslations, setRequestLocale } from 'next-intl/server';
import VolunteerForm from "@/components/VolunteerForm";
import { site } from "@/lib/site";
import { Metadata } from "next";
import ContentContainer from "@/components/ContentContainer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('volunteer');
  
  return {
    title: `${t('title')} | ${site.name}`,
    description: t('description'),
  };
}

export default async function VolunteerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('volunteer');

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="relative py-20 sm:py-24"
        style={{
          backgroundImage: "url('/img/volunteer-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#00214e",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <ContentContainer className="relative z-10 text-center max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t('headerTitle')}
          </h1>
          <p className="mt-4 text-lg text-white/90">
            {t('headerDescription')}
          </p>
        </ContentContainer>
      </div>

      {/* Form Section */}
      <ContentContainer className="py-12 sm:py-20 max-w-xl">
        <VolunteerForm />
      </ContentContainer>
    </main>
  );
}

