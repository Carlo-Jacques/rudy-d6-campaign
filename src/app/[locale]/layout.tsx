import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from "@/components/Header";
import MobileStickyCta from "@/components/MobileStickyCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rudolphtinker.com"),
  title: "Dr. Rudolph “Rudy” Tinker for Palm Beach County Commission – District 6",
  description:
    "Dr. Rudolph “Rudy” Tinker is running for Palm Beach County Commission District 6 to bring accountability, affordability, and real leadership to county government.",
  openGraph: {
    title: "Dr. Rudolph “Rudy” Tinker for Palm Beach County Commission – District 6",
    description:
      "Army veteran, contractor, educator, and candidate for Palm Beach County Commission District 6.",
    url: "https://rudolphtinker.com/en",
    siteName: "Rudolph “Rudy” Tinker",
    images: [
      {
        url: "/img/rudolph-tinker.webp",
        width: 1200,
        height: 630,
        alt: "Rudolph Rudy Tinker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Rudolph “Rudy” Tinker for Palm Beach County Commission – District 6",
    description:
      "Army veteran, contractor, educator, and candidate for Palm Beach County Commission District 6.",
    images: ["/img/rudolph-tinker.webp"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const BASE_URL = "https://rudolphtinker.com";
const CANONICAL_LOCALE = "en"; // keep stable to avoid splitting entity across locales

const POLITICAL_CANDIDATE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "PoliticalCandidate",
  "@id": `${BASE_URL}/${CANONICAL_LOCALE}#rudolph-tinker`,
  "name": "Rudolph “Rudy” Tinker",
  "alternateName": ["Rudy Tinker", "Rudolph Tinker"],
  "description":
    "Candidate for Palm Beach County Commissioner, District 6. U.S. Army veteran, small business owner, contractor, and educator.",
  "url": `${BASE_URL}/${CANONICAL_LOCALE}`,
  "image": `${BASE_URL}/img/rudolph-tinker.jpg`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "14611 Southern Boulevard Unit 634",
    "addressLocality": "Loxahatchee",
    "addressRegion": "FL",
    "postalCode": "33470",
    "addressCountry": "US"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "campaign office",
      "telephone": "+1-561-660-1580",
      "email": "info@rudolphtinker.com"
    },
    {
      "@type": "ContactPoint",
      "contactType": "campaign office",
      "telephone": "+1-561-660-2436",
      "email": "info@rudolphtinker.com"
    }
  ],
  "knowsAbout": [
    "Property taxes",
    "Government accountability",
    "County services reform",
    "Infrastructure and drainage",
    "Housing affordability",
    "Small business support",
    "Veterans"
  ],
  "subjectOf": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${CANONICAL_LOCALE}#plan`,
      "url": `${BASE_URL}/${CANONICAL_LOCALE}#plan`,
      "name": "Seven Point Plan"
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${CANONICAL_LOCALE}/about-rudolph`,
      "url": `${BASE_URL}/${CANONICAL_LOCALE}/about-rudolph`,
      "name": "About Rudolph"
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${CANONICAL_LOCALE}/privacy`,
      "url": `${BASE_URL}/${CANONICAL_LOCALE}/privacy`,
      "name": "Privacy Policy"
    }
  ]
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "Rudolph “Rudy” Tinker for Palm Beach County Commission – District 6",
  "inLanguage": "en",
  "publisher": {
    "@type": "Person",
    "@id": `${BASE_URL}/${CANONICAL_LOCALE}#rudolph-tinker`,
    "name": "Rudolph “Rudy” Tinker"
  }
};

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
      {/* JSON-LD: server-rendered, safe, no routing dependency */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(POLITICAL_CANDIDATE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
      />

      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      <NextIntlClientProvider messages={messages}>
        <Header />
        <div>{children}</div>
        <MobileStickyCta />
        <Footer />
      </NextIntlClientProvider>
    </div>
  );

}
