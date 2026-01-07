import Button from "@/components/ui/Button";
import Link from "next/link";
import { site } from "@/lib/site";
import PlanSectionClient from "@/components/PlanSectionClient";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import ActionWidgets from "@/components/ActionWidgets";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden w-full">
      <Hero />

      {/* Action Widgets */}
      <ActionWidgets />

      {/* PLEDGE */}
      <section className="bg-patriot-red text-white w-full">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center" style={{ paddingLeft: '3.75vw', paddingRight: '3.75vw' }}>
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
      <section id="plan" className="bg-black/[0.02] w-full">
        <div className="mx-auto max-w-7xl px-4 py-12" style={{ paddingLeft: '3.75vw', paddingRight: '3.75vw' }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">The 10-Point Plan</h2>
              <p className="mt-2 text-black/70">Short, specific commitments. Simple scorecard reporting.</p>
            </div>
            <Link href="/about-rudolph" className="hidden text-sm font-semibold underline md:inline">
              Why Rudy →
            </Link>
          </div>

          <div className="mt-8">
            <PlanSectionClient />
          </div>
        </div>
      </section>

      {/* NEWS */}
      <NewsSection />

      {/* PETITION (print + mail for now) */}
      <section id="petition" className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4" style={{ paddingLeft: '3.75vw', paddingRight: '3.75vw' }}>
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
              That fee isn't about democracy — it's a <span className="font-semibold">ballot tax</span> that favors insiders
              and big donors.
            </p>

            <p className="mt-4 font-semibold text-black">I'm choosing the grassroots route.</p>

            <p className="mt-4 text-black/75">
              Instead of paying my way onto the ballot, I'm asking{" "}
              <span className="font-semibold">Democratic voters in District 6</span> to help qualify this campaign the right
              way: <span className="font-semibold">with petitions, not money</span>.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/petition"
                variant="petition"
                size="md"
              >
                Sign the Petition
              </Button>
            </div>

            <div className="mt-6 p-4 bg-black/[0.02] rounded-lg border border-black/10">
              <p className="text-sm font-semibold text-black mb-2">Print and mail to this address:</p>
              <p className="text-sm text-black/80">
                14611 Southern Blvd Unit # 634<br />
                Loxahatchee FL 33470
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>



    </main>
  );
}

