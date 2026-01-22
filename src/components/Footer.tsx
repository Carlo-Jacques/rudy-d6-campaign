"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('common');
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Footer Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/footer-wide.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#00214e",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-[#00214e]/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12" style={{ paddingTop: "calc(3rem + 20px)", paddingBottom: "calc(3rem + 20px)", paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Logo and Contact */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src="/img/logo-rudy.webp"
                alt="Rudolph Tinker for Palm Beach Commissioner District 6"
                className="h-36 w-auto object-contain"
              />
            </Link>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">Rudolph Tinker for Palm Beach County</p>
              <p>Commissioner of District 6</p>
              <p>14611 Southern Boulevard</p>
              <p>Unit 634</p>
              <p>Loxahatchee, FL 33470</p>
              <p>Phone: <a href="tel:5616601580" className="font-semibold text-white/80 hover:text-white transition-colors">(561) 660-1580</a> | <a href="tel:5616602436" className="font-semibold text-white/80 hover:text-white transition-colors">(561) 660-2436</a></p>
              <p>E-mail: <a href="mailto:info@rudolphtinker.com" className="text-sm font-medium text-white/80 hover:text-white transition-colors">info@rudolphtinker.com</a></p>
            </div>
            <Link href="/privacy" className="mt-6 inline-block text-sm font-medium text-white/80 hover:text-white transition-colors uppercase">
              Privacy Policy
            </Link>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-rudolph"
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname?.startsWith("/about-rudolph")
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  About Rudolph
                </Link>
              </li>
              <li>
                <Link
                  href="/#plan"
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname?.startsWith("/priorities") || pathname === "/" || pathname === "/#plan"
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  Priorities
                </Link>
              </li>
              <li>
                <Link
                  href="/endorsements"
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/endorsements"
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  Endorsements
                </Link>
              </li>
              <li>
                <Link
                  href="/district-6"
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/district-6"
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  District 6
                </Link>
              </li>
              <li>
                <Link
                  href={t('urls.veterans')}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === t('urls.veterans')
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {t('veterans')}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === "/news"
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href={t('urls.volunteer')}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === t('urls.volunteer')
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href={t('urls.donate')}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === t('urls.donate')
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href={t('urls.petition')}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === t('urls.petition')
                      ? "text-patriot-red"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  Petition
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Connect with Rudolph */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Connect with Rudolph</h3>

            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#00214e] transition-all"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#00214e] transition-all"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#00214e] transition-all"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#00214e] transition-all"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-[#00214e] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 23.5h4V7.98h-4V23.5zM8 7.98h3.8v2.12h.05c.53-1 1.82-2.12 3.75-2.12C20.1 7.98 22 10.12 22 14.7v8.8h-4v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.12v7.93H8V7.98z" />
                </svg>
              </a>
            </div>

            {/* Paid For By Box */}
            <div className="border-2 border-white p-4 mb-6">
              <p className="text-center font-semibold uppercase">Paid for by Rudolph Tinker</p>
            </div>

            {/* Copyright */}
            <div className="text-sm space-y-1">
              <p>Copyright © {year} Rudolph Tinker for Palm Beach</p>
              <p>County Commissioner of District 6.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-100 transition-all"
        aria-label="Scroll to top"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
