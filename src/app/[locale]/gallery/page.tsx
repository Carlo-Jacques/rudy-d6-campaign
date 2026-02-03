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
            src: '/img/gallery/John%20McGovern%20Fundraiser/1.jpeg',
            alt: 'John McGovern Fundraiser',
            caption: 'John McGovern Fundraiser'
        },
        {
            id: '2',
            src: '/img/gallery/John%20McGovern%20Fundraiser/2.jpeg',
            alt: 'John McGovern Fundraiser',
            caption: 'John McGovern Fundraiser'
        },
        {
            id: '3',
            src: '/img/gallery/John%20McGovern%20Fundraiser/3.jpeg',
            alt: 'John McGovern Fundraiser',
            caption: 'John McGovern Fundraiser'
        },
        {
            id: '4',
            src: '/img/gallery/John%20McGovern%20Fundraiser/4.jpeg',
            alt: 'John McGovern Fundraiser',
            caption: 'John McGovern Fundraiser'
        },
        {
            id: '5',
            src: '/img/gallery/John%20McGovern%20Fundraiser/5.jpeg',
            alt: 'John McGovern Fundraiser',
            caption: 'John McGovern Fundraiser'
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
