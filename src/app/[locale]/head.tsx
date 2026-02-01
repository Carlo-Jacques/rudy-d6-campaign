// app/[locale]/head.tsx
const BASE_URL = "https://rudolphtinker.com";
const CANONICAL_URL = BASE_URL; // keep entity stable across locales

const POLITICAL_CANDIDATE_JSONLD = {
    "@context": "https://schema.org",
    "@type": "PoliticalCandidate",
    "@id": `${CANONICAL_URL}#rudolph-tinker`,
    "name": "Rudolph \"Rudy\" Tinker",
    "alternateName": ["Rudy Tinker", "Rudolph Tinker"],
    "description":
        "Candidate for Palm Beach County Commissioner, District 6. U.S. Army veteran, small business owner, contractor, and educator.",
    "url": CANONICAL_URL,
    "image": `${CANONICAL_URL}/img/rudolph-tinker.jpg`
};

const WEBSITE_JSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${CANONICAL_URL}#website`,
    "url": CANONICAL_URL,
    "name": "Rudolph \"Rudy\" Tinker for Palm Beach County Commission – District 6",
    "inLanguage": "en",
    "publisher": {
        "@type": "Person",
        "@id": `${CANONICAL_URL}#rudolph-tinker`,
        "name": "Rudolph \"Rudy\" Tinker"
    }
};

export default function Head() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(POLITICAL_CANDIDATE_JSONLD) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
            />
        </>
    );
}
