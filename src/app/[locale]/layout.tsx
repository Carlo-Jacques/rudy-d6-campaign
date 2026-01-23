import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from "@/components/Header";
import MobileStickyCta from "@/components/MobileStickyCta";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <div className="min-h-dvh bg-white text-black">
      <NextIntlClientProvider messages={messages}>
        <Header />

        <div>{children}</div>

        <MobileStickyCta />

        <Footer />

        {/*<AccessibilityPanel /> Global accessibility controls (client-side) */}

      </NextIntlClientProvider>
    </div>
  );
}
