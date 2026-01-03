"use client";

import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] md:hidden">
      {/* Subtle backdrop for readability over content */}
      <div className="pointer-events-none absolute inset-0 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60" />

      <div className="relative border-t border-black/10 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <div className="mx-auto flex max-w-6xl justify-center items-center gap-2">
          <Button
            href={site.petitionUrl}
            variant="petition"
            size="md"
          >
            Sign Petition
          </Button>


          <Button href={site.donateUrl} variant="donate" size="md" className="shrink-0" target="_blank">
            Donate
          </Button>
        </div>

        <div className="mx-auto mt-2 max-w-6xl text-center text-[11px] text-black/60">
          Petition first. Print, sign, mail. We’ll add tracking next.
        </div>
      </div>
    </div>
  );
}

