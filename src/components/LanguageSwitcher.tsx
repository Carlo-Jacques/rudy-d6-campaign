"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useState } from 'react';
import { cn } from '@/lib/cn';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export default function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors text-sm font-medium",
          scrolled 
            ? "border-black/15 hover:bg-black/5 text-black/80" 
            : "border-white/30 hover:bg-white/10 text-white"
        )}
        aria-label="Change language"
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <svg
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-black/10 bg-white shadow-xl z-50">
            <div className="p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={cn(
                    "w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors text-left",
                    locale === lang.code
                      ? "bg-patriot-red/10 text-patriot-red font-semibold"
                      : "hover:bg-black/5 text-black/80"
                  )}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}



