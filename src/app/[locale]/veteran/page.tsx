import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ContentContainer from '@/components/ContentContainer';
import VeteranStoryForm from '@/components/VeteranStoryForm';

export default function VeteranPage() {
    const t = useTranslations('veteran');

    return (
        <main className="bg-white">
            {/* Header */}
            <div className="relative py-20 sm:py-24"
                style={{
                    backgroundImage: "url('/img/army-military-red-white-blue.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#00214e",
                }}
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/60 z-0" />
                <ContentContainer className="relative z-10 text-center max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        {t('headerTitle')}
                    </h1>
                    <p className="mt-4 text-lg text-white/90">
                        {t('headerDescription')}
                    </p>
                </ContentContainer>
            </div>

            {/* Service History Section */}
            <section className="py-20">
                <ContentContainer>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-patriot-red">
                                {t('service.subtitle')}
                            </h2>
                            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                                {t('service.title')}
                            </h3>
                            <div className="mt-6 text-lg leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: t.raw('service.content') }} />
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src="/img/military-rudolph-tinker-portrait.webp"
                                alt="Rudolph Tinker Military Portrait"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </ContentContainer>
            </section>

            {/* VA Section */}
            <section className="bg-gray-50 py-20 border-y border-gray-100">
                <ContentContainer>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-patriot-red">
                            {t('va.subtitle')}
                        </h2>
                        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                            {t('va.title')}
                        </h3>
                        <div className="mt-8 text-lg leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: t.raw('va.content') }} />
                    </div>
                </ContentContainer>
            </section>

            {/* Share Your Story Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img/military-rudolph-tinker-garage.webp"
                        alt="Background"
                        fill
                        className="object-cover opacity-15 grayscale"
                    />
                    <div className="absolute inset-0 bg-white/20" />
                </div>

                <ContentContainer className="relative z-10">
                    <div className="mx-auto max-w-4xl">
                        <div className="rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 md:p-12">
                            <div className="mb-12 text-center">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-patriot-red">
                                    {t('share.subtitle')}
                                </h2>
                                <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                                    {t('share.title')}
                                </h3>
                                <p className="mt-4 text-lg text-gray-600">
                                    {t('share.description')}
                                </p>
                            </div>

                            <VeteranStoryForm />
                        </div>
                    </div>
                </ContentContainer>
            </section>
        </main>
    );
}
