import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newsArticles = [
    {
        title: "Hard Rock suite heat puts Palm Beach mayor on the hot seat",
        source: "Hoodline",
        url: "https://hoodline.com/2026/04/hard-rock-suite-heat-puts-palm-beach-mayor-on-the-hot-seat/",
        summary: "Reports on the controversy surrounding Palm Beach County Mayor Sara Baxter attending a college football championship game in developer Stephen Ross's private suite."
    },
    {
        title: "Palm Beach County Mayor Criticized for Steve Ross Ties",
        source: "The Real Deal",
        url: "https://therealdeal.com/miami/2026/04/20/palm-beach-county-mayor-criticized-for-steve-ross-ties/",
        summary: "Details criticism faced by Mayor Sara Baxter over her connections to billionaire developer Stephen Ross after watching a game from his private box."
    },
    {
        title: "Palm Beach County Mayor watched NCAA title game in Stephen Ross' suite",
        source: "Palm Beach Post",
        url: "https://www.palmbeachpost.com/story/news/politics/2026/04/20/ncaa-championship-miami-stephen-ross-suite-palm-beach-county-mayor-sara-baxter/89454839007/",
        summary: "Mayor Sara Baxter confirms she attended the NCAA title game in Steve Ross's suite, though she states she paid for the tickets."
    },
    {
        title: "Topic: Sara Baxter",
        source: "CBS12",
        url: "https://cbs12.com/topic/Sara%20Baxter",
        summary: "A collection of local news updates and reports covering the actions and controversies surrounding Palm Beach County Mayor Sara Baxter."
    },
    {
        title: "Democrats call on Sheila Cherfilus-McCormick to resign over FEMA fraud allegations",
        source: "The Hill",
        url: "https://thehill.com/homenews/house/5804213-democrats-call-sheila-cherfilus-mccormick-resignation-fema-fraud/",
        summary: "House Democrats demand the resignation of Rep. Sheila Cherfilus-McCormick following allegations of involvement in FEMA fraud."
    },
    {
        title: "U.S. Rep. Sheila Cherfilus-McCormick should resign",
        source: "Palm Beach Post Editorial",
        url: "https://www.palmbeachpost.com/story/opinion/editorials/2026/03/31/u-s-rep-sheila-cherfilus-mccormick-should-resign/89384355007/",
        summary: "An editorial board calls for the resignation of Representative Sheila Cherfilus-McCormick amid ongoing controversies and investigations."
    },
    {
        title: "Democrats calling on Sheila Cherfilus-McCormick resignation: Full list",
        source: "Newsweek",
        url: "https://www.newsweek.com/democrats-calling-on-sheila-cherfilus-mccormick-resignation-full-list-11748628",
        summary: "A comprehensive list of Democratic lawmakers who have publicly called for Rep. Sheila Cherfilus-McCormick to step down."
    },
    {
        title: "Jeffries on Cherfilus-McCormick",
        source: "Politico",
        url: "https://www.politico.com/live-updates/2025/11/20/congress/jeffries-on-cherfilus-mccormick-00661418",
        summary: "House Minority Leader Hakeem Jeffries addresses the situation regarding Representative Sheila Cherfilus-McCormick and the calls for her resignation."
    },
    {
        title: "Democrat call Cherfilus-McCormick's resignation fraud",
        source: "Washington Examiner",
        url: "https://www.washingtonexaminer.com/news/house/4507338/democrat-call-cherfilus-mccormicks-resignation-fraud/",
        summary: "Further coverage of Democratic members of Congress pressing for Sheila Cherfilus-McCormick to resign amid fraud allegations."
    }
];

export default function NewsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    
                    {/* Page Header */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            In The News
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Stay updated with the latest headlines and reports involving our local and national representatives.
                        </p>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsArticles.map((article, index) => (
                            <a 
                                key={index} 
                                href={article.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-patriot-blue/10 text-patriot-blue text-xs font-bold rounded-full uppercase tracking-wider">
                                        {article.source}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-patriot-red transition-colors line-clamp-3">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    {article.summary}
                                </p>
                                <div className="mt-6 flex items-center text-patriot-blue font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    Read Full Article 
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
