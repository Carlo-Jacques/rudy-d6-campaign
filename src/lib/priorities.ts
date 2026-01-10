export type PriorityItem = {
  id: string;
  slug: string;
  number: number;
  title: string;
  bullets: string[];
};

// Helper function to convert title to slug
function titleToSlug(title: string): string {
  return title
    .replace(/[&]/g, "and")
    .replace(/[()]/g, "")
    .replace(/[–—]/g, "-")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

export const priorities: PriorityItem[] = [
  {
    id: "1",
    slug: "Property-Tax-Reduction-Oversight-and-Waste-Elimination",
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
    slug: "Delinquent-Tax-Relief-and-Homeowner-Protection",
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
    slug: "Government-Services-Reform-DMV-and-Tax-Collector",
    number: 3,
    title: "Government Services Reform (DMV & Tax Collector)",
    bullets: [
      "Open all Tax Collector lanes.",
      "Restore walk-in service.",
      "End the \"two-transactions-only\" rule.",
      "Reopen the Royal Palm Beach DMV to relieve Westlake & Loxahatchee overflow.",
      "Create customer service benchmarks for wait times and staffing.",
    ],
  },
  {
    id: "4",
    slug: "Affordable-Housing-ADUs-and-Local-Contractor-Incentives",
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
    slug: "Code-Enforcement-Reform-Inactive-Permit-Relief",
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
    slug: "AI-Powered-Fast-Permitting-and-Local-Business-Priority",
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
    slug: "Cut-Food-Costs-and-Improve-Grocery-Access",
    number: 7,
    title: "Cut Food Costs & Improve Grocery Access",
    bullets: [
      "Grocery Relief Partnership with major chains.",
      "Attract Aldi, Lidl, BJ's and other discount grocers.",
      "Run mobile farmers markets & county food co-ops.",
      "Require price transparency and weekly online postings.",
      "Reduce fees for affordable-price grocers.",
    ],
  },
  {
    id: "8",
    slug: "Reduce-FPL-Bills-Through-County-Utility-Partnership",
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
    slug: "Healthcare-Access-Ambulance-Billing-Reform-and-Quality-of-Life",
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
    slug: "Infrastructure-Transportation-Port-Efficiency-and-Fuel-Savings-Card",
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
];

export function getPriorityById(id: string): PriorityItem | undefined {
  return priorities.find((p) => p.id === id);
}

export function getPriorityBySlug(slug: string): PriorityItem | undefined {
  return priorities.find((p) => p.slug === slug);
}

