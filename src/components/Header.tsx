"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";

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
          height: scrolled ? 56 : 67
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
              height: scrolled ? 40 : 48
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
          <Link
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === "/about-rudy"
                ? "text-patriot-red"
                : "text-black/80 hover:text-black"
            )}
            href="/about-rudy"
          >
            About Rudy
          </Link>
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

          <Button href={site.donateUrl} variant="donate" size="sm">
            Donate
          </Button>

          <Button
            href={site.petitionUrl}
            variant="petition"
            size="md"
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
              <Link
                href="/about-rudy"
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-semibold transition-colors",
                  pathname === "/about-rudy"
                    ? "text-patriot-red bg-patriot-red/5"
                    : "hover:bg-black/5"
                )}
              >
                About Rudy
              </Link>
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

                <Button href={site.donateUrl} variant="donate" size="md" className="w-full">
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

