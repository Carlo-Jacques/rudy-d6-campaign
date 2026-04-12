"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import { landingPageTiles } from "@/lib/priorities";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const t = useTranslations('common');
  const t_priorities = useTranslations('priorities.items');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prioritiesOpen, setPrioritiesOpen] = useState(false);
  const [aboutRudyOpen, setAboutRudyOpen] = useState(false);
  const prioritiesRef = useRef<HTMLDivElement>(null);
  const aboutRudyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close priorities dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (prioritiesRef.current && !prioritiesRef.current.contains(event.target as Node)) {
        setPrioritiesOpen(false);
      }
      if (aboutRudyRef.current && !aboutRudyRef.current.contains(event.target as Node)) {
        setAboutRudyOpen(false);
      }
    };

    if (prioritiesOpen || aboutRudyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [prioritiesOpen, aboutRudyOpen]);

  const isPrioritiesPage = pathname?.startsWith("/priorities/");
  const isAboutRudyPage = pathname?.startsWith("/about-rudolph");
  const isHomePage = pathname === "/" || pathname === "/en" || pathname === "/es" || pathname === "/ht" || pathname === "/ru";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b",
        isHomePage
          ? (scrolled
            ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-black/10"
            : "bg-transparent border-transparent")
          : "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-black/10"
      )}
    >
      <motion.div
        className={cn(
          "mx-auto flex max-w-7xl",
          isHomePage
            ? (scrolled ? "flex-row items-center justify-between" : "flex-col items-center justify-center")
            : "flex-row items-center justify-between"
        )}
        style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}
        animate={{
          height: isHomePage ? (scrolled ? 70 : 150) : 70
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 35,
          mass: 0.8
        }}
      >
        <Link href="/" className={cn("flex items-center gap-2", isHomePage && !scrolled ? "mb-2" : "")}>
          <motion.img
            src="/img/rudolph_commisioner_district_6.webp"
            alt="Rudy Campaign Logo"
            className="w-auto object-contain"
            animate={{
              height: isHomePage ? (scrolled ? 60 : 86) : 60
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 35,
              mass: 0.8
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex">
          {/* About Rudy Dropdown */}
          <div className="relative" ref={aboutRudyRef}>
            <button
              type="button"
              onClick={() => setAboutRudyOpen(!aboutRudyOpen)}
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-1",
                isAboutRudyPage
                  ? "text-patriot-red"
                  : (isHomePage && !scrolled) ? "text-white hover:text-white/80" : "text-black hover:text-black"
              )}
            >
              {t('aboutRudy')}
              <svg
                className={cn(
                  "h-4 w-4 transition-transform",
                  aboutRudyOpen ? "rotate-180" : ""
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {aboutRudyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-black/10 bg-white shadow-xl z-50"
                >
                  <div className="p-2">
                    <Link
                      href="/about-rudolph/bio"
                      onClick={() => setAboutRudyOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        pathname === "/about-rudolph/bio"
                          ? "bg-patriot-red/10 text-patriot-red font-semibold"
                          : "hover:bg-black/5 text-black/80"
                      )}
                    >
                      {t('bio')}
                    </Link>
                    <Link
                      href="/about-rudolph/preparedness"
                      onClick={() => setAboutRudyOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        pathname === "/about-rudolph/preparedness"
                          ? "bg-patriot-red/10 text-patriot-red font-semibold"
                          : "hover:bg-black/5 text-black/80"
                      )}
                    >
                      {t('preparedness')}
                    </Link>
                    <Link
                      href="/about-rudolph/why-i-want-to-run"
                      onClick={() => setAboutRudyOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        pathname === "/about-rudolph/why-i-want-to-run"
                          ? "bg-patriot-red/10 text-patriot-red font-semibold"
                          : "hover:bg-black/5 text-black/80"
                      )}
                    >
                      {t('whyIWantToRun')}
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/endorsements"
                ? "text-patriot-red"
                : scrolled ? "text-black hover:text-black" : "text-white hover:text-white/80"
            )}
            href="/endorsements"
          >
            {t('endorsements')}
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/district-6"
                ? "text-patriot-red"
                : scrolled ? "text-black hover:text-black" : "text-white hover:text-white/80"
            )}
            href="/district-6"
          >
            {t('district6')}
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/gallery"
                ? "text-patriot-red"
                : scrolled ? "text-black hover:text-black" : "text-white hover:text-white/80"
            )}
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === t('urls.veterans')
                ? "text-patriot-red"
                : scrolled ? "text-black hover:text-black" : "text-white hover:text-white/80"
            )}
            href={t('urls.veterans')}
          >
            {t('veterans')}
          </Link>

          {/* Priorities Dropdown */}
          <div className="relative" ref={prioritiesRef}>
            <button
              type="button"
              onClick={() => setPrioritiesOpen(!prioritiesOpen)}
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-1",
                isPrioritiesPage || pathname === "/" || pathname === "/#plan"
                  ? "text-patriot-red"
                  : (isHomePage && !scrolled) ? "text-white hover:text-white/80" : "text-black hover:text-black"
              )}
            >
              {t('priorities')}
              <svg
                className={cn(
                  "h-4 w-4 transition-transform",
                  prioritiesOpen ? "rotate-180" : ""
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {prioritiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-black/10 bg-white shadow-xl z-50"
                >
                  <div className="p-2">
                    {landingPageTiles.map((tile) => (
                      <Link
                        key={tile.id}
                        href={`/priorities${tile.slug}`}
                        onClick={() => setPrioritiesOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-sm transition-colors",
                          pathname === `/priorities${tile.slug}`
                            ? "bg-patriot-red/10 text-patriot-red font-semibold"
                            : "hover:bg-black/5 text-black/80"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 shrink-0 text-xs font-semibold text-patriot-blue">
                            {(landingPageTiles.indexOf(tile) + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="flex-1 leading-snug">{t_priorities(`${tile.id}.title`)}</span>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 border-t border-black/10 pt-2">
                      <Link
                        href="/#plan"
                        onClick={() => setPrioritiesOpen(false)}
                        className="block rounded-lg px-4 py-2 text-sm font-semibold text-patriot-blue hover:bg-patriot-blue/5 transition-colors"
                      >
                        {t('viewAll')} →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === t('urls.volunteer')
                ? "text-patriot-red"
                : scrolled ? "text-black hover:text-black" : "text-white hover:text-white/80"
            )}
            href={t('urls.volunteer')}
          >
            {t('volunteer')}
          </Link>

          <Button href={t('urls.donate')} variant="donate" size="sm">
            {t('donate')}
          </Button>


          <LanguageSwitcher scrolled={isHomePage ? scrolled : true} />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher scrolled={isHomePage ? scrolled : true} />


          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-semibold transition-colors",
              (isHomePage && !scrolled)
                ? "border border-white/30 bg-white text-patriot-blue hover:bg-white/90"
                : "border border-black/15 text-black hover:bg-black/5"
            )}
          >
            {t('menu')}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu panel */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden="true" />

          <div className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-xl">
            <div className="flex h-14 items-center justify-between border-b border-black/10 px-4">
              <div className="text-sm font-semibold">{t('menu')}</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/15 px-3 py-2 text-sm font-semibold hover:bg-black/5"
              >
                {t('close')}
              </button>
            </div>

            <div className="flex flex-col gap-1 p-4 bg-white">
              {/* About Rudy Dropdown in Mobile */}
              <div>
                <button
                  type="button"
                  onClick={() => setAboutRudyOpen(!aboutRudyOpen)}
                  className={cn(
                    "w-full rounded-xl px-3 py-3 text-left text-base font-semibold transition-colors flex items-center justify-between",
                    isAboutRudyPage
                      ? "text-patriot-red bg-patriot-red/5"
                      : "hover:bg-black/5"
                  )}
                >
                  {t('aboutRudy')}
                  <svg
                    className={cn(
                      "h-5 w-5 transition-transform",
                      aboutRudyOpen ? "rotate-180" : ""
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {aboutRudyOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-black/10 pl-4">
                        <Link
                          href="/about-rudolph/bio"
                          onClick={() => {
                            setAboutRudyOpen(false);
                            setOpen(false);
                          }}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm transition-colors",
                            pathname === "/about-rudolph/bio"
                              ? "bg-patriot-red/10 text-patriot-red font-semibold"
                              : "text-black/70 hover:bg-black/5"
                          )}
                        >
                          {t('bio')}
                        </Link>
                        <Link
                          href="/about-rudolph/preparedness"
                          onClick={() => {
                            setAboutRudyOpen(false);
                            setOpen(false);
                          }}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm transition-colors",
                            pathname === "/about-rudolph/preparedness"
                              ? "bg-patriot-red/10 text-patriot-red font-semibold"
                              : "text-black/70 hover:bg-black/5"
                          )}
                        >
                          {t('preparedness')}
                        </Link>
                        <Link
                          href="/about-rudolph/why-i-want-to-run"
                          onClick={() => {
                            setAboutRudyOpen(false);
                            setOpen(false);
                          }}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm transition-colors",
                            pathname === "/about-rudolph/why-i-want-to-run"
                              ? "bg-patriot-red/10 text-patriot-red font-semibold"
                              : "text-black/70 hover:bg-black/5"
                          )}
                        >
                          {t('whyIWantToRun')}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/endorsements"
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                  pathname === "/endorsements"
                    ? "text-patriot-red bg-patriot-red/5"
                    : "hover:bg-black/5"
                )}
              >
                {t('endorsements')}
              </Link>
              <Link
                href="/district-6"
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                  pathname === "/district-6"
                    ? "text-patriot-red bg-patriot-red/5"
                    : "hover:bg-black/5"
                )}
              >
                {t('district6')}
              </Link>
              <Link
                href="/gallery"
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                  pathname === "/gallery"
                    ? "text-patriot-red bg-patriot-red/5"
                    : "hover:bg-black/5"
                )}
              >
                Gallery
              </Link>
              <Link
                href={t('urls.veterans')}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                  pathname === t('urls.veterans')
                    ? "text-patriot-red bg-patriot-red/5"
                    : "hover:bg-black/5"
                )}
              >
                {t('veterans')}
              </Link>

              {/* Priorities Dropdown in Mobile */}
              <div>
                <button
                  type="button"
                  onClick={() => setPrioritiesOpen(!prioritiesOpen)}
                  className={cn(
                    "w-full rounded-xl px-3 py-3 text-left text-base font-semibold transition-colors flex items-center justify-between",
                    isPrioritiesPage || pathname === "/" || pathname === "/#plan"
                      ? "text-patriot-red bg-patriot-red/5"
                      : "hover:bg-black/5"
                  )}
                >
                  {t('priorities')}
                  <svg
                    className={cn(
                      "h-5 w-5 transition-transform",
                      prioritiesOpen ? "rotate-180" : ""
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {prioritiesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-black/10 pl-4">
                        {landingPageTiles.map((tile, idx) => (
                          <Link
                            key={tile.id}
                            href={`/priorities${tile.slug}`}
                            onClick={() => {
                              setPrioritiesOpen(false);
                              setOpen(false);
                            }}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm transition-colors",
                              pathname === `/priorities${tile.slug}`
                                ? "bg-patriot-red/10 text-patriot-red font-semibold"
                                : "text-black/70 hover:bg-black/5"
                            )}
                          >
                            <div className="flex items-start gap-2">
                              <span className="shrink-0 text-xs font-semibold text-patriot-blue">
                                {(idx + 1).toString().padStart(2, '0')}.
                              </span>
                              <span className="flex-1 leading-snug">{t_priorities(`${tile.id}.title`)}</span>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/#plan"
                          onClick={() => {
                            setPrioritiesOpen(false);
                            setOpen(false);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-patriot-blue hover:bg-patriot-blue/5 transition-colors"
                        >
                          {t('viewAll')} →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={t('urls.volunteer')}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                  pathname === t('urls.volunteer')
                    ? "text-patriot-red bg-patriot-red/5"
                    : "hover:bg-black/5"
                )}
              >
                {t('volunteer')}
              </Link>

              <div className="mt-2 grid gap-2">
                <Button href={t('urls.donate')} variant="donate" size="md" className="w-full">
                  {t('donate')}
                </Button>
              </div>

              <div className="mt-4 rounded-xl border border-black/10 p-3 text-sm text-black/70">
                Paid political advertisement. Disclaimer will be placed in the site footer.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

