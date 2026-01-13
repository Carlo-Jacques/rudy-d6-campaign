"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type NewsArticle = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  url: string;
};

const articles: NewsArticle[] = [
  {
    id: "0",
    date: "1/9/2026",
    category: "Aid",
    title: "CAFCI Packs Shipping Container of Hurricane Relief Supplies Bound for Jamaica",
    excerpt: "After Hurricane Melissa struck Jamaica, Caribbean-Americans for Community Involvement volunteers and local partners spent two months collecting and loading a 40-foot container",
    url: "https://gotowncrier.com/2026/01/cafci-packs-shipping-container-of-hurricane-relief-supplies-bound-for-jamaica/",
  },
  {
    id: "1",
    date: "1/1/2026",
    category: "AI",
    title: "Thirsty AI Data Center Runs Into Florida Community Opposition",
    excerpt: "A proposed AI data center in Florida faces community pushback over water usage and environmental concerns.",
    url: "https://floridaphoenix.com/2026/01/01/thirsty-ai-data-center-runs-into-florida-community-opposition-2/",
  },
  {
    id: "2",
    date: "9/20/2020",
    category: "First Amendment",
    title: "Gov. DeSantis' Proposed Protest Crack-Down Draws Pushback",
    excerpt: "Rudolph Tinker, a local activist and criminal justice and political science professor, told CBS12 News he does not believe the proposal will ultimately become law in Florida, saying it's 'actually infringing on the First Amendment, the freedom to petition, freedom to assemble.'",
    url: "https://cbs12.com/news/local/gov-desantis-proposed-protest-crack-down-draws-pushback",
  },
];

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function NewsSection() {
  const t = useTranslations("home.news");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <section id="news" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12" style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}>
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight">{t("title")}</h2>
          <p className="mt-2 text-black/70">{t("subtitle")}</p>
        </div>

        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                rounded-full px-4 py-2 text-sm font-semibold transition-all
                ${selectedCategory === category
                  ? "bg-patriot-red text-white"
                  : "bg-black/5 text-black/80 hover:bg-black/10"
                }
              `}
            >
              {category === "All" ? t("all") : category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6 break-inside-avoid rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-patriot-blue/10 px-3 py-1 text-xs font-semibold text-patriot-blue">
                  {article.category}
                </span>
                <span className="text-xs text-black/60">{article.date}</span>
              </div>

              <h3 className="mb-3 text-lg font-bold leading-tight text-black">
                {article.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-black/70">
                {article.excerpt}
              </p>

              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-patriot-blue hover:text-patriot-red transition-colors"
              >
                {t("readMore")}
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Placeholder for pagination (when more articles are added) */}
        {filteredArticles.length === 0 && (
          <div className="py-12 text-center text-black/60">
            {t("noArticles")}
          </div>
        )}
      </div>
    </section>
  );
}


