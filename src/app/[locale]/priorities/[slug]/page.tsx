import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getPriorityIdBySlug, landingPageTiles, priorityIds, getPrioritySlugById } from "@/lib/priorities";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { site } from "@/lib/site";
import Button from "@/components/ui/Button";
import ContentContainer from "@/components/ContentContainer";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return landingPageTiles.map((tile) => ({
    slug: tile.slug.replace(/^\//, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const id = getPriorityIdBySlug(slug);

  if (!id) {
    return {
      title: "Priority Not Found",
    };
  }

  const t = await getTranslations(`priorities.items.${id}`);

  let description = "";
  try {
    const sections = t.raw('sections');
    description = sections?.[0]?.bullets?.[0] || "";
  } catch (e) { }

  return {
    title: t('title') + ` | ${site.name}`,
    description,
  };
}

export default async function PriorityPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const id = getPriorityIdBySlug(slug);

  if (!id) {
    notFound();
  }

  const t_common = await getTranslations('common');
  const t_labels = await getTranslations('priorities.labels');
  const t_priority = await getTranslations(`priorities.items.${id}`);

  // Fetch all sections
  let sections: any[] = [];
  try {
    sections = t_priority.raw('sections') || [];
  } catch (e) {
    console.error(`Error loading sections for ${id}`, e);
  }

  // Prepare circular navigation data
  const currentIndex = priorityIds.indexOf(id);
  const prevIndex = (currentIndex - 1 + priorityIds.length) % priorityIds.length;
  const nextIndex = (currentIndex + 1) % priorityIds.length;

  const prevId = priorityIds[prevIndex];
  const nextId = priorityIds[nextIndex];

  const t_prev = await getTranslations(`priorities.items.${prevId}`);
  const t_next = await getTranslations(`priorities.items.${nextId}`);

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div
        className="relative py-16 sm:py-24 border-b border-gray-100"
        style={{
          backgroundImage: "url('/img/rudolph-tinker-plan.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />

        <ContentContainer className="relative z-10 transition-all">
          <Link
            href="/#plan"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors"
          >
            ← {t_common('plan')}
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase leading-tight">
              {t_priority('title')}
            </h1>
          </div>
        </ContentContainer>
      </div>

      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none">
              {sections.map((section: any, i: number) => (
                <div key={i} className="mb-12">
                  {section.heading && (
                    <h2 className="text-3xl font-black text-black mt-16 mb-6 uppercase border-b-2 border-patriot-red inline-block pb-2">
                      {section.heading}
                    </h2>
                  )}
                  <ul className="space-y-4 mb-8">
                    {section.bullets.map((bullet: string, j: number) => (
                      <li key={j} className="flex gap-4 items-start text-lg text-gray-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

            {/* Circular Navigation */}
            <div className="mt-20 pt-12 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Link
                  href={`/priorities${getPrioritySlugById(prevId)}`}
                  className="group flex flex-col p-8 bg-gray-50 rounded-3xl hover:bg-patriot-red/5 hover:ring-2 hover:ring-patriot-red/20 transition-all"
                >
                  <span className="text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-patriot-red transition-colors flex items-center gap-2">
                    ← {t_labels('prevPriority')}
                  </span>
                  <span className="mt-2 text-xl font-black text-black leading-tight uppercase">
                    {t_prev('title')}
                  </span>
                </Link>

                <Link
                  href={`/priorities${getPrioritySlugById(nextId)}`}
                  className="group flex flex-col p-8 bg-gray-50 rounded-3xl text-right hover:bg-patriot-red/5 hover:ring-2 hover:ring-patriot-red/20 transition-all"
                >
                  <span className="text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-patriot-red transition-colors flex items-center gap-2 justify-end">
                    {t_labels('nextPriority')} →
                  </span>
                  <span className="mt-2 text-xl font-black text-black leading-tight uppercase">
                    {t_next('title')}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-black text-white rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-patriot-red/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-black uppercase mb-4">{t_labels('supportTitle')}</h2>
                  <p className="text-white/70 mb-8 font-medium">
                    {t_labels('supportDesc')}
                  </p>
                  <div className="space-y-4">
                    <Button href={t_common('urls.petition')} variant="petition" size="lg" className="w-full justify-center text-lg py-6">
                      {t_labels('petition')}
                    </Button>
                    <Button href={t_common('urls.donate')} variant="donate" size="lg" className="w-full justify-center text-lg py-6" target="_blank">
                      {t_labels('donate')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}

