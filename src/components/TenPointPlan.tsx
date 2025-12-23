"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

type PlanItem = {
  id: string;
  number: number;
  title: string;
  bullets: string[];
};

export default function TenPointPlanModal() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

  const items = useMemo<PlanItem[]>(
    () => [
      {
        id: "1",
        number: 1,
        title: "Property Tax Reduction, Oversight & Waste Elimination",
        bullets: [
          "Audit every county department to eliminate waste and duplication.",
          "Freeze property tax increases on primary homes.",
          "Roll all verified savings directly into property tax reductions.",
          "Freeze non-essential hiring and block non-critical equipment purchases.",
          "End the $3.3M/year commissioner security package. I will decline all security and drive my own car to save taxpayers money.",
          "Conduct a full audit of the Solid Waste Authority (SWA) to eliminate inflated administrative costs, excessive salaries, and unjustified capital spending.",
          "Roll back construction debris dumping fees, which jumped from $40/ton to $80/ton — a 100% increase with no justification.",
          "Require SWA to improve vegetation pickup, which has failed residents—especially in District 6.",
          "Eliminate garbage/waste taxes on vacant property, where residents are being charged for trash collection on land that produces no garbage.",
          "Require SWA to justify any future fee increases with a full public impact study and transparency.",
        ],
      },
      {
        id: "2",
        number: 2,
        title: "Delinquent Tax Relief & Homeowner Protection",
        bullets: [
          "Allow ANY payment method for late taxes.",
          "Delay tax certificate sales until June of the delinquent year.",
          "Increase early-payment discount from 4% to 10%.",
          "Reduce delinquent interest from 18% to 9%.",
          "Create income-based repayment plans.",
          "Extend tax deed from 2 years to 5 years for primary homes.",
          "Require early notices and repayment options.",
        ],
      },
      {
        id: "3",
        number: 3,
        title: "Government Services Reform (DMV & Tax Collector)",
        bullets: [
          "Open all Tax Collector lanes.",
          "Restore walk-in service.",
          "End the “two-transactions-only” rule.",
          "Reopen the Royal Palm Beach DMV to relieve Westlake & Loxahatchee overflow.",
          "Create customer service benchmarks for wait times and staffing.",
        ],
      },
      {
        id: "4",
        number: 4,
        title: "Affordable Housing, ADUs & Local Contractor Incentives",
        bullets: [
          "Cap rent increases with an inflation-based formula.",
          "Fast-track workforce housing approvals.",
          "Incentivize local contractors through reduced fees and priority permitting.",
          "Legalize ADUs countywide.",
          "Provide five free pre-approved ADU/small-home plans.",
          "Establish a fast-track ADU permit lane (50% faster).",
        ],
      },
      {
        id: "5",
        number: 5,
        title: "Code Enforcement Reform & Inactive Permit Relief",
        bullets: [
          "End selective or retaliatory enforcement.",
          "Require body-cam/video for all enforcement interactions.",
          "Simplify Ag Exemption to a 15-minute online approval.",
          "Inactive Permit Relief: Automatically close any permit older than 10 years — no inspections, no walk-throughs, no fines, and no enforcement.",
          "Protect Acreage/Loxahatchee rural lifestyle from overregulation.",
        ],
      },
      {
        id: "6",
        number: 6,
        title: "AI-Powered Fast Permitting & Local Business Priority",
        bullets: [
          "Guarantee 5-working-day permit issuance for standard permits.",
          "48-hour roof permits (45-hour target) for owner-builders & contractors.",
          "Integrate AI plan review systems to eliminate delays.",
          "Create a Small Contractor Fast-Track Lane.",
          "Require departments to use Palm Beach County contractors first.",
          "Reduce impact & inspection fees for local small businesses.",
          "Establish a local contractor preference rule.",
        ],
      },
      {
        id: "7",
        number: 7,
        title: "Cut Food Costs & Improve Grocery Access",
        bullets: [
          "Grocery Relief Partnership with major chains.",
          "Attract Aldi, Lidl, BJ’s and other discount grocers.",
          "Run mobile farmers markets & county food co-ops.",
          "Require price transparency and weekly online postings.",
          "Reduce fees for affordable-price grocers.",
        ],
      },
      {
        id: "8",
        number: 8,
        title: "Reduce FPL Bills Through County–Utility Partnership",
        bullets: [
          "Expand FPL bill assistance and outreach.",
          "Require infrastructure upgrades (underground lines, hardened poles).",
          "Add solar co-ops, shared solar fields, and permit fee waivers.",
          "Use county purchasing power to secure benefits for residents.",
          "Energy-efficiency audits for seniors & low-income homes.",
        ],
      },
      {
        id: "9",
        number: 9,
        title: "Healthcare Access, Ambulance Billing Reform & Quality of Life",
        bullets: [
          "Open urgent care centers in Acreage, Loxahatchee & Westlake.",
          "Deploy mobile mental health units.",
          "Expand telehealth partnerships.",
          "Ambulance Cost Reform: Create a County Emergency Medical Billing Reform Program.",
          "Cap EMS charges and negotiate lower countywide rates.",
          "Require payment plans before collections.",
          "Create a Medical Debt Prevention Fund.",
          "Ensure no resident is afraid to call 911 due to cost.",
          "Expand youth centers, senior hubs, parks, and sports facilities.",
        ],
      },
      {
        id: "10",
        number: 10,
        title: "Infrastructure, Transportation, Port Efficiency & Fuel Savings Card",
        bullets: [
          "Full District 6 drainage/canal audit with public maintenance timelines.",
          "Expand micro-transit, bus routes, and key road improvements.",
          "Tri-Rail, Palm Tran & Transit Oversight: cut administrative waste and reinvest savings to lower fares.",
          "Require quarterly cost-per-rider transparency.",
          "Improve routes, reliability, and service in District 6.",
          "Port of Palm Beach + Fuel Cost Relief: cut waste and reduce port fees that inflate fuel and shipping costs.",
          "Create a County–Port Efficiency Compact to reinvest savings into stabilizing fuel-related fees.",
          "Issue a Palm Beach County Fuel Savings Card to ALL residents for instant fuel discounts via partnerships.",
          "Tourism for Tax Reduction: grow eco-tourism, sports tourism, and cultural tourism to reduce the tax burden.",
        ],
      },
    ],
    []
  );

  const active = activeId ? items.find((x) => x.id === activeId) ?? null : null;

  useEffect(() => {
    if (!activeId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeId]);

  return (
    <MotionConfig
      transition={{
        duration: reduceMotion ? 0 : 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <LayoutGroup>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              layoutId={`plan-card-${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={[
                "group relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-white text-left",
                "shadow-sm outline-none transition-all duration-300",
                "ring-1 ring-black/10 hover:ring-0 hover:shadow-xl",
                // Gradient border hack
                "before:absolute before:inset-0 before:-z-10 before:p-[2px] before:bg-gradient-to-r before:from-patriot-red before:via-white before:to-patriot-blue before:opacity-0 hover:before:opacity-100 before:rounded-[inherit] before:content-[''] before:transition-opacity",
                // Inner bg
                "after:absolute after:inset-[1px] after:-z-10 after:bg-white after:rounded-[inherit] after:content-['']",
                "focus-visible:ring-2 focus-visible:ring-patriot-blue/60 focus-visible:ring-offset-2",
              ].join(" ")}
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            >
              <div className="absolute left-5 top-5 h-2 w-16 rounded-full bg-patriot-blue" />
              <div className="p-5 pt-8">
                <div className="text-xs font-semibold text-black/50">Point {item.number}</div>
                <div className="mt-1 text-base font-extrabold leading-snug tracking-tight text-black">
                  {item.title}
                </div>
                <div className="mt-2 text-sm text-black/70">
                  Tap to view details
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-patriot-blue">
                  <span className="underline decoration-black/10 underline-offset-4 group-hover:decoration-patriot-blue/40">
                    Expect bigger
                  </span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Modal overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-[70]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-modal="true"
              role="dialog"
            >
              {/* Backdrop */}
              <motion.button
                type="button"
                aria-label="Close plan details"
                className="absolute inset-0 cursor-default"
                onClick={() => setActiveId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ pointerEvents: "auto" }}
              >
                <div className="h-full w-full bg-black/55 backdrop-blur-sm" />
              </motion.button>

              {/* Modal content */}
              <div className="relative mx-auto flex h-full max-w-3xl items-center justify-center px-4 py-6 sm:py-10">
                <motion.div
                  layoutId={`plan-card-${active.id}`}
                  className={[
                    "relative w-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl",
                    "flex flex-col max-h-[78vh] sm:max-h-[80vh]",
                  ].join(" ")}
                >
                  <div className="absolute left-6 top-6 h-2 w-20 rounded-full bg-patriot-blue" />

                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 p-6 pt-10">
                    <div>
                      <div className="text-xs font-semibold text-black/50">Point {active.number}</div>
                      <h3 className="mt-1 text-xl font-extrabold leading-snug tracking-tight text-black sm:text-2xl">
                        {active.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveId(null)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 hover:bg-black/5"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Body (scroll) */}
                  <div className="flex-1 overflow-y-auto px-6 pb-6">
                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5">
                      <ul className="space-y-2 text-sm text-black/85">
                        {active.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-patriot-red" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={site.petitionUrl}
                        target={site.petitionUrl.startsWith("http") ? "_blank" : undefined}
                        onClick={() => setActiveId(null)}
                        className="inline-flex w-full items-center justify-center rounded-full bg-patriot-red px-5 py-3 text-sm font-semibold text-white hover:bg-patriot-red/90"
                      >
                        Get the petition
                      </a>
                      <a
                        href={site.donateUrl}
                        target={site.donateUrl.startsWith("http") ? "_blank" : undefined}
                        onClick={() => setActiveId(null)}
                        className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
                      >
                        Support the campaign
                      </a>
                    </div>

                    <div className="mt-3 text-center text-xs text-black/60">
                      Click outside or press ESC to close.
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </MotionConfig>
  );
}

