import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getPriorityPageBySlug, getPriorityTileBySlug, landingPageTiles } from "@/lib/priorities";
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
  const { slug } = await params;
  const page = getPriorityPageBySlug(slug);

  if (!page) {
    const tile = getPriorityTileBySlug(slug);
    if (tile) {
      return {
        title: `${tile.title} | ${site.name}`,
        description: tile.subtitle,
      };
    }
    return {
      title: "Priority Not Found",
    };
  }

  return {
    title: page.seo.title,
    description: page.seo.metaDescription,
  };
}

export default async function PriorityPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const page = getPriorityPageBySlug(slug);
  const tile = getPriorityTileBySlug(slug);
  const t_common = await getTranslations('common');

  if (!tile && !page) {
    notFound();
  }

  // Use page data if available, otherwise fallback to tile data
  const title = page ? page.h1 : tile?.title;
  const tldr = page ? page.tldr : [];
  const content = page ? page.content : [];
  const bridgesTo = page ? page.bridgesTo : [];

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div
        className="relative py-16 sm:py-24 border-b border-gray-100"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/img/rudolph-tinker-plan.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <ContentContainer className="relative z-10 transition-all">
          <Link
            href="/#plan"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors"
          >
            ← Back to Priorities
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase leading-tight">
              {title}
            </h1>
            {tile && !page && (
              <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl">
                {tile.subtitle}
              </p>
            )}
          </div>
        </ContentContainer>
      </div>

      <ContentContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {tldr.length > 0 && (
              <div className="mb-12 bg-patriot-red/5 border-l-4 border-patriot-red p-8 rounded-r-2xl">
                <h2 className="text-sm font-black uppercase tracking-widest text-patriot-red mb-4">The Impact</h2>
                <ul className="space-y-4">
                  {tldr.map((item, i) => (
                    <li key={i} className="text-xl font-bold text-black flex gap-3 italic">
                      <span>"{item}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="prose prose-lg prose-slate max-w-none">
              {page?.whyThisMatters && (
                <p className="text-2xl font-medium text-gray-900 leading-snug mb-12">
                  {page.whyThisMatters}
                </p>
              )}

              {content.map((block, i) => {
                if (block.type === "paragraph") {
                  return <p key={i} className="text-lg text-gray-700 leading-relaxed mb-8">{block.text}</p>;
                }
                if (block.type === "h2") {
                  return <h2 key={i} className="text-3xl font-black text-black mt-16 mb-6 uppercase border-b-2 border-patriot-red inline-block pb-2">{block.text}</h2>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="space-y-4 mb-8">
                      {block.items?.map((item, j) => (
                        <li key={j} className="flex gap-4 items-start text-lg text-gray-700">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-patriot-red" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}

              {!page && (
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-12 text-center my-12">
                  <h2 className="text-2xl font-bold text-black mb-4">Detailed Plan Coming Soon</h2>
                  <p className="text-gray-600">We are currently finalizing the specific implementation details for this priority. Please check back soon or sign up for our newsletter to stay updated.</p>
                </div>
              )}
            </div>

            {bridgesTo && bridgesTo.length > 0 && (
              <div className="mt-20 pt-12 border-t border-gray-100">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-8">Next Steps in the Plan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bridgesTo.map((bridge, i) => (
                    <Link
                      key={i}
                      href={`/priorities${bridge.href}`}
                      className="group p-6 border border-gray-200 rounded-2xl hover:border-patriot-red hover:shadow-lg transition-all"
                    >
                      <span className="text-sm font-bold text-patriot-red block mb-1">Related Priority</span>
                      <span className="text-lg font-bold text-black group-hover:text-patriot-red transition-colors">{bridge.label} →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Circular Navigation */}
            <div className="mt-20 pt-12 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {(() => {
                  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
                  const currentIndex = landingPageTiles.findIndex(t => t.slug === normalizedSlug);
                  if (currentIndex === -1) return null;

                  const prevIndex = (currentIndex - 1 + landingPageTiles.length) % landingPageTiles.length;
                  const nextIndex = (currentIndex + 1) % landingPageTiles.length;

                  const prevTile = landingPageTiles[prevIndex];
                  const nextTile = landingPageTiles[nextIndex];

                  return (
                    <>
                      <Link
                        href={`/priorities${prevTile.slug}`}
                        className="group flex flex-col p-8 bg-gray-50 rounded-3xl hover:bg-patriot-red/5 hover:ring-2 hover:ring-patriot-red/20 transition-all"
                      >
                        <span className="text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-patriot-red transition-colors flex items-center gap-2">
                          ← Previous Priority
                        </span>
                        <span className="mt-2 text-xl font-black text-black leading-tight uppercase">
                          {prevTile.title}
                        </span>
                      </Link>

                      <Link
                        href={`/priorities${nextTile.slug}`}
                        className="group flex flex-col p-8 bg-gray-50 rounded-3xl text-right hover:bg-patriot-red/5 hover:ring-2 hover:ring-patriot-red/20 transition-all"
                      >
                        <span className="text-sm font-black uppercase tracking-widest text-gray-400 group-hover:text-patriot-red transition-colors flex items-center gap-2 justify-end">
                          Next Priority →
                        </span>
                        <span className="mt-2 text-xl font-black text-black leading-tight uppercase">
                          {nextTile.title}
                        </span>
                      </Link>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-black text-white rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-patriot-red/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-black uppercase mb-4">Support This Goal</h2>
                  <p className="text-white/70 mb-8 font-medium">
                    Help Rudolph deliver real results for District 6 by supporting the campaign today.
                  </p>
                  <div className="space-y-4">
                    <Button href={t_common('urls.petition')} variant="petition" size="lg" className="w-full justify-center text-lg py-6">
                      Sign the Petition
                    </Button>
                    <Button href={t_common('urls.donate')} variant="donate" size="lg" className="w-full justify-center text-lg py-6" target="_blank">
                      Donate Now
                    </Button>
                  </div>
                </div>
              </div>

              {page?.shareExcerpt && (
                <div className="mt-8 p-8 border-2 border-dashed border-gray-200 rounded-3xl italic text-gray-500">
                  "{page.shareExcerpt}"
                </div>
              )}
            </div>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}

