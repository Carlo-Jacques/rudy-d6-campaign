const BASE_URL = "https://rudolphtinker.com";

export default function Head() {
    const candidate = {
        "@context": "https://schema.org",
        "@type": "PoliticalCandidate",
        "@id": `${BASE_URL}#rudolph-tinker`,
        "name": "Rudolph \"Rudy\" Tinker",
        "url": BASE_URL,
        "image": `${BASE_URL}/img/rudolph-tinker.jpg`
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE_URL}#website`,
        "url": BASE_URL,
        "name": "Rudolph \"Rudy\" Tinker for Palm Beach County Commission – District 6",
        "publisher": { "@type": "Person", "@id": `${BASE_URL}#rudolph-tinker`, "name": "Rudolph \"Rudy\" Tinker" }
    };

    return (
        <>
            <script
                id="jsonld-candidate"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(candidate) }}
            />
            <script
                id="jsonld-website"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
        </>
    );
}
