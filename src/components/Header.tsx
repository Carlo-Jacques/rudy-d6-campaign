"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";
import { priorities } from "@/lib/priorities";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "About Rudy", href: "/about-rudy" },
  { label: "Endorsements", href: "/endorsements" },
  { label: "District 6", href: "/district-6" },
  { label: "Volunteer", href: site.volunteerUrl },
  { label: "Donate", href: site.donateUrl },
  { label: "Petition", href: site.petitionUrl },
];

export default function Header() {
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
  const isAboutRudyPage = pathname?.startsWith("/about-rudy");
  const isDonatePage = pathname === "/donate";

  // Hide header on donate page
  if (isDonatePage) {
    return null;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-black/10",
        scrolled ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70" : "bg-white"
      )}
    >
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between px-4"
        animate={{
          height: scrolled ? 70 : 100
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 35,
          mass: 0.8
        }}
      >
        <Link href="/" className="flex items-center gap-2">
          <motion.img
            src="/img/logo-transparent.png"
            alt="Rudy Campaign Logo"
            className="w-auto object-contain"
            animate={{
              height: scrolled ? 60 : 86
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
                  : "text-black/80 hover:text-black"
              )}
            >
              About Rudy
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
                      href="/about-rudy/bio"
                      onClick={() => setAboutRudyOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        pathname === "/about-rudy/bio"
                          ? "bg-patriot-red/10 text-patriot-red font-semibold"
                          : "hover:bg-black/5 text-black/80"
                      )}
                    >
                      Bio
                    </Link>
                    <Link
                      href="/about-rudy/preparedness"
                      onClick={() => setAboutRudyOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        pathname === "/about-rudy/preparedness"
                          ? "bg-patriot-red/10 text-patriot-red font-semibold"
                          : "hover:bg-black/5 text-black/80"
                      )}
                    >
                      Preparedness
                    </Link>
                    <Link
                      href="/about-rudy/why-i-want-to-run"
                      onClick={() => setAboutRudyOpen(false)}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-sm transition-colors",
                        pathname === "/about-rudy/why-i-want-to-run"
                          ? "bg-patriot-red/10 text-patriot-red font-semibold"
                          : "hover:bg-black/5 text-black/80"
                      )}
                    >
                      Why I want to run
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
                : "text-black/80 hover:text-black"
            )}
            href="/endorsements"
          >
            Endorsements
          </Link>
          <Link
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/district-6"
                ? "text-patriot-red"
                : "text-black/80 hover:text-black"
            )}
            href="/district-6"
          >
            District 6
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
                  : "text-black/80 hover:text-black"
              )}
            >
              Priorities
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
                    {priorities.map((priority) => (
                      <Link
                        key={priority.id}
                        href={`/priorities/${priority.id}`}
                        onClick={() => setPrioritiesOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-sm transition-colors",
                          pathname === `/priorities/${priority.id}`
                            ? "bg-patriot-red/10 text-patriot-red font-semibold"
                            : "hover:bg-black/5 text-black/80"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 shrink-0 text-xs font-semibold text-patriot-blue">
                            {priority.number}
                          </span>
                          <span className="flex-1 leading-snug">{priority.title}</span>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 border-t border-black/10 pt-2">
                      <Link
                        href="/#plan"
                        onClick={() => setPrioritiesOpen(false)}
                        className="block rounded-lg px-4 py-2 text-sm font-semibold text-patriot-blue hover:bg-patriot-blue/5 transition-colors"
                      >
                        View All Priorities →
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
              pathname === site.volunteerUrl
                ? "text-patriot-red"
                : "text-black/80 hover:text-black"
            )}
            href={site.volunteerUrl}
          >
            Volunteer
          </Link>

          <Button href={site.donateUrl} variant="donate" size="sm" target="_blank">
            Donate
          </Button>

          <Button
            href={site.petitionUrl}
            variant="petition"
            size="sm"
          >
            Petition
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            href={site.petitionUrl}
            variant="petition"
            size="md"
          >
            Petition
          </Button>


          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="rounded-full border border-black/15 px-3 py-2 text-sm font-semibold text-black hover:bg-black/5"
          >
            Menu
          </button>
        </div>
      </motion.div>

      {/* Mobile menu panel */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden="true" />

          <div className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-white shadow-xl">
            <div className="flex h-14 items-center justify-between border-b border-black/10 px-4">
              <div className="text-sm font-semibold">Menu</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/15 px-3 py-2 text-sm font-semibold hover:bg-black/5"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-1 p-4">
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
                  About Rudy
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
                          href="/about-rudy/bio"
                          onClick={() => {
                            setAboutRudyOpen(false);
                            setOpen(false);
                          }}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm transition-colors",
                            pathname === "/about-rudy/bio"
                              ? "bg-patriot-red/10 text-patriot-red font-semibold"
                              : "text-black/70 hover:bg-black/5"
                          )}
                        >
                          Bio
                        </Link>
                        <Link
                          href="/about-rudy/preparedness"
                          onClick={() => {
                            setAboutRudyOpen(false);
                            setOpen(false);
                          }}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm transition-colors",
                            pathname === "/about-rudy/preparedness"
                              ? "bg-patriot-red/10 text-patriot-red font-semibold"
                              : "text-black/70 hover:bg-black/5"
                          )}
                        >
                          Preparedness
                        </Link>
                        <Link
                          href="/about-rudy/why-i-want-to-run"
                          onClick={() => {
                            setAboutRudyOpen(false);
                            setOpen(false);
                          }}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm transition-colors",
                            pathname === "/about-rudy/why-i-want-to-run"
                              ? "bg-patriot-red/10 text-patriot-red font-semibold"
                              : "text-black/70 hover:bg-black/5"
                          )}
                        >
                          Why I want to run
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
                Endorsements
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
                District 6
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
                  Priorities
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
                        {priorities.map((priority) => (
                          <Link
                            key={priority.id}
                            href={`/priorities/${priority.id}`}
                            onClick={() => {
                              setPrioritiesOpen(false);
                              setOpen(false);
                            }}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm transition-colors",
                              pathname === `/priorities/${priority.id}`
                                ? "bg-patriot-red/10 text-patriot-red font-semibold"
                                : "text-black/70 hover:bg-black/5"
                            )}
                          >
                            <div className="flex items-start gap-2">
                              <span className="shrink-0 text-xs font-semibold text-patriot-blue">
                                {priority.number}.
                              </span>
                              <span className="flex-1 leading-snug">{priority.title}</span>
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
                          View All →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={site.volunteerUrl}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                  pathname === site.volunteerUrl
                    ? "text-patriot-red bg-patriot-red/5"
                    : "hover:bg-black/5"
                )}
              >
                Volunteer
              </Link>

              <div className="mt-2 grid gap-2">
                <Button
                  href={site.petitionUrl}
                  variant="petition"
                  size="md"
                  className="w-full"
                >
                  Petition
                </Button>

                <Button href={site.donateUrl} variant="donate" size="md" className="w-full" target="_blank">
                  Donate
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

