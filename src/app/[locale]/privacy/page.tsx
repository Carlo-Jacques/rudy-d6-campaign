import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

const EFFECTIVE_DATE = "2025-01-16";
const PRIVACY_EMAIL = "info@rudycampaign.com";

// Localized metadata (App Router)
export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({
        locale: params.locale,
        namespace: "privacy",
    });

    return {
        title: t("meta.title"),
        description: t("meta.description"),
    };
}

// IMPORTANT: Accept params so the route is fully compatible with /[locale]/...
export default function PrivacyPolicyPage({
    params,
}: {
    params: { locale: string };
}) {
    // params is not required by useTranslations, but keeping it avoids route/typing mismatch
    void params;

    const t = useTranslations("privacy");

    return (
        <main className="mx-auto max-w-4xl px-6 pt-28 pb-12">
            <header className="mb-6">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {t("title")}
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                    <span className="font-semibold">{t("effectiveDateLabel")}</span>{" "}
                    {EFFECTIVE_DATE}
                </p>
            </header>

            <article
                className="
          prose prose-gray max-w-none
          leading-loose
          prose-p:my-0
          prose-li:my-0
          prose-ul:my-0
          prose-h2:mt-8 prose-h2:mb-2
          prose-h3:mt-6 prose-h3:mb-2
        "
            >
                <p>{t("intro")}</p>

                <h2>{t("s1.title")}</h2>
                <p>{t("s1.lead")}</p>

                <h3>{t("s1.personal.title")}</h3>
                <ul>
                    <li>{t("s1.personal.items.name")}</li>
                    <li>{t("s1.personal.items.email")}</li>
                    <li>{t("s1.personal.items.phone")}</li>
                    <li>{t("s1.personal.items.forms")}</li>
                </ul>

                <h3>{t("s1.auto.title")}</h3>
                <ul>
                    <li>{t("s1.auto.items.ip")}</li>
                    <li>{t("s1.auto.items.device")}</li>
                    <li>{t("s1.auto.items.pages")}</li>
                </ul>

                <p>{t("s1.note")}</p>

                <h2>{t("s2.title")}</h2>
                <p>{t("s2.lead")}</p>
                <ul>
                    <li>{t("s2.items.forms")}</li>
                    <li>{t("s2.items.email")}</li>
                    <li>{t("s2.items.donations")}</li>
                    <li>{t("s2.items.cookies")}</li>
                </ul>

                <h2>{t("s3.title")}</h2>
                <p>{t("s3.p1")}</p>
                <p>{t("s3.p2")}</p>
                <p>{t("s3.p3")}</p>

                <h2>{t("s4.title")}</h2>
                <p>{t("s4.lead")}</p>
                <ul>
                    <li>{t("s4.items.updates")}</li>
                    <li>{t("s4.items.respond")}</li>
                    <li>{t("s4.items.acknowledge")}</li>
                    <li>{t("s4.items.improve")}</li>
                    <li>{t("s4.items.comply")}</li>
                </ul>

                <h2>{t("s5.title")}</h2>
                <p>{t("s5.p1")}</p>
                <p>{t("s5.p2")}</p>

                <h2>{t("s6.title")}</h2>
                <ul>
                    <li>{t("s6.items.noSale")}</li>
                    <li>{t("s6.items.noCommercialShare")}</li>
                    <li>{t("s6.items.providers")}</li>
                </ul>

                <h2>{t("s7.title")}</h2>
                <p>{t("s7.p1")}</p>

                <h2>{t("s8.title")}</h2>
                <p>{t("s8.p1")}</p>

                <h2>{t("s9.title")}</h2>
                <p>{t("s9.lead")}</p>
                <ul>
                    <li>{t("s9.items.access")}</li>
                    <li>{t("s9.items.correctDelete")}</li>
                    <li>{t("s9.items.optOut")}</li>
                </ul>
                <p>{t("s9.ccpa")}</p>
                <p>{t("s9.gdpr")}</p>
                <p>{t("s9.contact")}</p>

                <h2>{t("s10.title")}</h2>
                <p>{t("s10.p1")}</p>

                <h2>{t("s11.title")}</h2>
                <p>{t("s11.p1")}</p>

                <h2>{t("s12.title")}</h2>
                <p>{t("s12.lead")}</p>

                <div className="not-prose rounded-2xl border border-gray-200 bg-white p-6">
                    <div className="font-semibold">{t("contact.org")}</div>
                    <div>{t("contact.addr1")}</div>
                    <div>{t("contact.addr2")}</div>
                    <div className="mt-2">
                        {t("contact.emailLabel")}{" "}
                        <span className="font-medium">{PRIVACY_EMAIL}</span>
                    </div>
                </div>

                <hr />

                <p className="text-sm text-gray-600">{t("disclaimer")}</p>
            </article>
        </main>
    );
}
