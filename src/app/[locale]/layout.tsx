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
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-dvh bg-white text-black">
        <NextIntlClientProvider messages={messages}>
          <Header />

          {/* 
            Mobile bottom padding ensures content & footer
            are not hidden behind sticky petition bar 
          */}
          <div>
            {children}
          </div>

          {/* Mobile-only sticky CTA */}
          <MobileStickyCta />

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

