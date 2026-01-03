import Button from "@/components/ui/Button";
import Link from "next/link";
import { site } from "@/lib/site";
import PlanSectionClient from "@/components/PlanSectionClient";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      {/* PLEDGE */}
      <section className="bg-patriot-red text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The pledge</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Rudy is asking District 6 voters for something simple: a mandate to deliver a clear 10-point plan. If
            elected, progress will be reported publicly—so residents can measure outcomes, not slogans.
          </p>
          <p className="mt-6 text-xl font-bold font-serif italic text-white sm:text-2xl">
            “If elected, I will keep the 10-point plan—and report progress monthly.”
          </p>
        </div>
      </section>

      {/* 10-POINT PLAN */}
      <section id="plan" className="bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">The 10-Point Plan</h2>
              <p className="mt-2 text-black/70">Short, specific commitments. Simple scorecard reporting.</p>
            </div>
            <Link href="/about-rudy" className="hidden text-sm font-semibold underline md:inline">
              Why Rudy →
            </Link>
          </div>

          <div className="mt-8">
            <PlanSectionClient />
          </div>
        </div>
      </section>

      {/* PETITION (print + mail for now) */}
      <section id="petition" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
          <div className="w-full">
            <h2 className="text-xl font-bold">
              Help Put a Democrat on the Ballot — No Special Interests, No Ballot Tax
            </h2>

            <p className="mt-3 text-black/75">
              To qualify for the ballot in District 6, candidates are forced to choose one of two paths:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/80">
              <li>
                Pay over <span className="font-semibold">$8,000</span> in fees, or
              </li>
              <li>
                Collect <span className="font-semibold">1,500</span> valid voter petitions
              </li>
            </ul>

            <p className="mt-4 text-black/75">
              That fee isn’t about democracy — it’s a <span className="font-semibold">ballot tax</span> that favors insiders
              and big donors.
            </p>

            <p className="mt-4 font-semibold text-black">I’m choosing the grassroots route.</p>

            <p className="mt-4 text-black/75">
              Instead of paying my way onto the ballot, I’m asking{" "}
              <span className="font-semibold">Democratic voters in District 6</span> to help qualify this campaign the right
              way: <span className="font-semibold">with petitions, not money</span>.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/documents/petition_form.pdf"
                variant="petition"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download petition (PDF)
              </Button>
              <Button href="#" variant="ghost" size="md">
                How to submit
              </Button>
            </div>

            <div className="mt-4 text-xs text-black/60">
              Print, sign, and mail back. We’ll add tracking and step-by-step instructions next.
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}

