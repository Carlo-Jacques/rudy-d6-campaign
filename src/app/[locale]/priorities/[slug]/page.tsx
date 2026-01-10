import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { priorities, getPriorityBySlug, getPriorityById } from "@/lib/priorities";
import { site } from "@/lib/site";
import Button from "@/components/ui/Button";
import ContentContainer from "@/components/ContentContainer";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return priorities.map((priority) => ({
    slug: priority.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const priority = getPriorityBySlug(slug);

  if (!priority) {
    return {
      title: "Priority Not Found",
    };
  }

  return {
    title: `Priority ${priority.number}: ${priority.title} | ${site.name}`,
    description: `Learn about Priority ${priority.number} of the 10-point plan: ${priority.title}`,
  };
}

export default async function PriorityPage({ params }: Props) {
  const { slug } = await params;
  const priority = getPriorityBySlug(slug);

  if (!priority) {
    notFound();
  }

  const prevPriority = priority.number !== 1 ? getPriorityById(String(priority.number - 1)) : null;
  const nextPriority = priority.number !== 10 ? getPriorityById(String(priority.number + 1)) : null;

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="bg-black/[0.02] py-16 sm:py-20">
        <ContentContainer>
          <Link
            href="/#plan"
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-patriot-blue hover:text-patriot-red transition-colors"
          >
            ← Back to 10-Point Plan
          </Link>
          <div className="mt-4">
            <div className="text-sm font-semibold text-black/50">Priority {priority.number} of 10</div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              {priority.title}
            </h1>
          </div>
        </ContentContainer>
      </div>

      {/* Content */}
      <ContentContainer className="py-12">
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 sm:p-8">
          <ul className="space-y-4 text-base text-black/85 sm:text-lg">
            {priority.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
          {prevPriority ? (
            <Link
              href={`/priorities/${prevPriority.slug}`}
              className="group flex items-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-black transition-all hover:border-patriot-blue hover:bg-patriot-blue/5"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              <div className="flex flex-col">
                <span className="text-xs text-black/50">Previous</span>
                <span className="line-clamp-1">Priority {prevPriority.number}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextPriority ? (
            <Link
              href={`/priorities/${nextPriority.slug}`}
              className="group ml-auto flex items-center gap-2 rounded-xl border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-black transition-all hover:border-patriot-blue hover:bg-patriot-blue/5 sm:ml-0"
            >
              <div className="flex flex-col text-right">
                <span className="text-xs text-black/50">Next</span>
                <span className="line-clamp-1">Priority {nextPriority.number}</span>
              </div>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ) : null}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-black/10 bg-patriot-red/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-black">Support This Priority</h2>
          <p className="mt-2 text-black/70">
            Help make this priority a reality by signing the petition and supporting the campaign.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={site.petitionUrl} variant="petition" size="md">
              Sign the Petition
            </Button>
            <Button href={site.donateUrl} variant="donate" size="md" target="_blank">
              Donate
            </Button>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}

