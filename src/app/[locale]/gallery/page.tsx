import { useTranslations } from 'next-intl';
import MasonryGallery from '@/components/MasonryGallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    const t = useTranslations('gallery');
    const tCommon = useTranslations('common');

    // Placeholder data - in a real app this might come from a CMS or structured JSON
    const galleryItems = [
        {
            id: '1',
            src: '/img/D6-Map.jpg',
            alt: 'District 6 Map',
            caption: 'Covering 1,300 square miles, District 6 is the heart of Palm Beach County, blending agricultural heritage with growing communities.'
        },
        {
            id: '2',
            src: '/img/rudolph-tinker-preparedness.webp',
            alt: 'Community Preparedness',
            caption: 'Ensuring our neighborhoods are ready for any challenge, from storm season to economic shifts. Preparation is the key to resilience.'
        },
        {
            id: '3',
            src: '/img/veterans-desktop.webp',
            alt: 'Supporting Veterans',
            caption: 'Advocating for those who served. We must ensure our veterans have access to the resources and support they earned.'
        },
        {
            id: '4',
            src: '/img/rudolph-tinker-why-i-want-to-run-poster.webp',
            alt: 'Why I Run',
            caption: 'A campaign built on principles, not politics. Rudolph Tinker is running to bring transparency and accountability back to the county commission.'
        },
        {
            id: '5',
            src: '/img/military-rudolph-tinker-garage.webp',
            alt: 'Service & Duty',
            caption: 'From serving in the U.S. Army to serving the community, duty has always been the guiding principle of Rudolph’s life.'
        },
        {
            id: '6',
            src: '/img/rudy-away-look.JPG',
            alt: 'Vision for the Future',
            caption: 'Looking ahead to a brighter future for District 6. Strategizing on how to lower taxes while improving infrastructure.'
        },
        {
            id: '7',
            src: '/img/rudy_and_family.webp',
            alt: 'Family First',
            caption: 'Strong families make strong communities. Building a district where families can thrive, grow, and feel safe.'
        },
        {
            id: '8',
            src: '/img/endorsement-banner-rudy.webp',
            alt: 'Community Support',
            caption: 'Grateful for the overwhelming support from local leaders, business owners, and residents who believe in our mission.'
        },
        {
            id: '9',
            src: '/img/loxahatchee-hero-2.webp',
            alt: 'Loxahatchee Landscapes',
            caption: 'Preserving the unique rural character and natural beauty of Loxahatchee and our western communities.'
        },
        {
            id: '10',
            src: '/img/image_6483441-preparedness.JPG',
            alt: 'Field Work',
            caption: 'Boots on the ground. Assessing infrastructure needs directly at the source to ensure efficient and effective solutions.'
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Page Header */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* Gallery */}
                    <MasonryGallery items={galleryItems} />

                </div>
            </main>
            <Footer />
        </>
    );
}
