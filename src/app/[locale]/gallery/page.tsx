import fs from 'fs';
import path from 'path';
import { useTranslations } from 'next-intl';
import MasonryGallery from '@/components/MasonryGallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    const t = useTranslations('gallery');

    // Dynamically read images from public/img/gallery
    const galleryDir = path.join(process.cwd(), 'public', 'img', 'gallery');
    let galleryItems: { id: string; src: string; alt: string; caption: string }[] = [];

    try {
        const files = fs.readdirSync(galleryDir);
        galleryItems = files
            .filter(file => {
                const ext = path.extname(file).toLowerCase();
                return ['.webp', '.png', '.jpg', '.jpeg', '.pdf', '.mp4'].includes(ext);
            })
            .map((file, index) => {
                const nameWithoutExt = path.parse(file).name;

                // Keep title and caption empty for WhatsApp images
                if (nameWithoutExt.toLowerCase().startsWith('whatsapp')) {
                    return {
                        id: `gallery-item-${index}`,
                        src: `/img/gallery/${encodeURIComponent(file)}`,
                        alt: '',
                        caption: ''
                    };
                }

                // Basic cleanup of filename for alt/caption
                const cleanName = nameWithoutExt
                    .replace(/\(\d+\)/g, '') // Remove (1), (2), etc.
                    .trim();

                return {
                    id: `gallery-item-${index}`,
                    src: `/img/gallery/${encodeURIComponent(file)}`,
                    alt: cleanName,
                    caption: cleanName
                };
            });
    } catch (error) {
        console.error('Error reading gallery directory:', error);
    }

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
